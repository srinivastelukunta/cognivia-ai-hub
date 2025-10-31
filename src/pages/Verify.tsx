import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2, CheckCircle2 } from "lucide-react";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const emailParam = searchParams.get("email");
    const codeParam = searchParams.get("code");
    
    if (emailParam) {
      setEmail(emailParam);
    }
    
    if (codeParam) {
      setCode(codeParam);
      // Auto-verify if code is in URL
      if (emailParam) {
        handleVerify(emailParam, codeParam);
      }
    }
  }, [searchParams]);

  const handleVerify = async (emailToVerify?: string, codeToVerify?: string) => {
    const verifyEmail = emailToVerify || email;
    const verifyCode = codeToVerify || code;

    if (!verifyEmail || !verifyCode) {
      toast({
        title: "Missing information",
        description: "Please enter both email and verification code.",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);

    try {
      const { data, error } = await supabase.functions.invoke('verify-newsletter-email', {
        body: { email: verifyEmail, code: verifyCode }
      });

      if (error) throw error;

      if (data.success) {
        setIsVerified(true);
        toast({
          title: "Success!",
          description: data.message,
        });
        
        // Redirect to home after 3 seconds
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        throw new Error(data.error || 'Verification failed');
      }
    } catch (error: any) {
      console.error("Verification error:", error);
      toast({
        title: "Verification failed",
        description: error.message || "Invalid or expired code. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-md w-full">
          <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
            {isVerified ? (
              <div className="text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                <h1 className="text-2xl font-bold text-foreground">Email Verified!</h1>
                <p className="text-muted-foreground">
                  Welcome to Cognivian. You'll be redirected to the homepage shortly...
                </p>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold text-foreground mb-2">
                    Verify Your Email
                  </h1>
                  <p className="text-muted-foreground">
                    Enter the 6-digit code we sent to your email
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isVerifying}
                    />
                  </div>

                  <div>
                    <label htmlFor="code" className="block text-sm font-medium text-foreground mb-2">
                      Verification Code
                    </label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="000000"
                      value={code}
                      onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      maxLength={6}
                      disabled={isVerifying}
                      className="text-center text-2xl tracking-widest"
                    />
                  </div>

                  <Button
                    onClick={() => handleVerify()}
                    disabled={isVerifying || code.length !== 6}
                    className="w-full"
                  >
                    {isVerifying ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      "Verify Email"
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    Didn't receive the code? Check your spam folder or try signing up again.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Verify;