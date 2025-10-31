import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface SignupRequest {
  email: string;
  isMediaProfessional: boolean;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseKey);
    const { email, isMediaProfessional }: SignupRequest = await req.json();

    console.log('Processing signup for:', email, 'Media Professional:', isMediaProfessional);

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if email already exists and is verified
    const { data: existingSubscriber } = await supabase
      .from('newsletter_subscribers')
      .select('is_verified')
      .eq('email', email)
      .single();

    if (existingSubscriber?.is_verified) {
      return new Response(
        JSON.stringify({ error: 'This email is already subscribed!' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Generate 6-digit verification code
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    
    // Set expiration to 10 minutes from now
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000).toISOString();
    
    // Insert verification code
    const { error: codeError } = await supabase
      .from('verification_codes')
      .insert({
        email,
        code,
        expires_at: expiresAt,
        subscriber_type: isMediaProfessional ? 'media_professional' : 'newsletter'
      });

    if (codeError) {
      console.error('Error inserting verification code:', codeError);
      throw codeError;
    }

    console.log('Verification code created:', code);

    // Send verification email
    const verificationUrl = `${req.headers.get('origin')}/verify?email=${encodeURIComponent(email)}&code=${code}`;
    
    const emailResponse = await resend.emails.send({
      from: "Cognivian <verify@cognivian.ai>",
      to: [email],
      subject: "Verify your Cognivian newsletter subscription",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
              .code { background: white; border: 2px solid #667eea; padding: 15px 25px; font-size: 32px; font-weight: bold; text-align: center; letter-spacing: 5px; margin: 20px 0; border-radius: 8px; color: #667eea; }
              .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
              .footer { text-align: center; color: #999; font-size: 12px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Welcome to Cognivian!</h1>
              </div>
              <div class="content">
                <p>Hi there,</p>
                <p>Thank you for subscribing to Cognivian${isMediaProfessional ? ' as a media professional' : ''}! Please verify your email address by entering this code within the next 10 minutes:</p>
                
                <div class="code">${code}</div>
                
                <p style="text-align: center;">Or click the button below to verify automatically:</p>
                <p style="text-align: center;">
                  <a href="${verificationUrl}" class="button">Verify Email Address</a>
                </p>
                
                <p style="color: #666; font-size: 14px; margin-top: 30px;">
                  <strong>Note:</strong> This code will expire in 10 minutes for security reasons.
                </p>
                
                <p>If you didn't request this subscription, you can safely ignore this email.</p>
                
                <p>Best regards,<br>The Cognivian Team</p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} Cognivian. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Verification email sent! Please check your inbox.',
        email 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in submit-newsletter-signup:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Failed to process signup' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});