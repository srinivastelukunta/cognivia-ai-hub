import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import summitImage from "@/assets/summit-image.jpg";
import podcastImage from "@/assets/podcast-image.jpg";
import startupsImage from "@/assets/startups-image.jpg";
import awardsTimelineImage from "@/assets/awards-timeline-image.jpg";
import iconSummit from "@/assets/icon-summit.jpg";
import iconAwards from "@/assets/icon-awards.jpg";
import iconPodcasts from "@/assets/icon-podcasts.jpg";
import iconStartups from "@/assets/icon-startups.jpg";
import iconPress from "@/assets/icon-press.jpg";
import iconNewsletter from "@/assets/icon-newsletter.jpg";
const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-newsletter-signup', {
        body: { email, isMediaProfessional: false }
      });

      if (error) throw error;

      if (data.success) {
        toast({
          title: "Check your email!",
          description: "We've sent you a verification code. Please check your inbox.",
        });
        setEmail("");
        navigate(`/verify?email=${encodeURIComponent(data.email)}`);
      } else {
        throw new Error(data.error || 'Subscription failed');
      }
    } catch (error: any) {
      console.error("Newsletter signup error:", error);
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <div className="bg-[hsl(205,67%,16%)] text-foreground min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative text-center py-16 md:py-28 px-4 bg-gradient-to-b from-[hsl(205,67%,16%)] to-[hsl(205,65%,18%)] overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={heroBackground} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-5xl mx-auto">
            Where human vision becomes living intelligence.
          </h2>
        <p className="text-base md:text-lg max-w-3xl mx-auto mb-8 opacity-80 px-4">
          A global platform connecting Chief Digital & AI Officers to shape the intelligent enterprise—through summits, awards, podcasts, and innovation programs.
        </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors">
              Get Tickets
            </Button>
            <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-white/10">
              Explore the Summit
            </Button>
          </div>
        </div>
      </section>

      {/* Why Cognivian */}
      <section className="py-16 md:py-20 text-center bg-[hsl(205,67%,16%)] px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">From Insight to Intelligence — Together.</h3>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto mt-12">
          <div className="space-y-2">
            <h4 className="text-lg md:text-xl font-semibold mb-2">Executive Intelligence</h4>
            <p className="opacity-80 text-sm md:text-base">Real architectures, frameworks, and results — not hype.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg md:text-xl font-semibold mb-2">Connected Community</h4>
            <p className="opacity-80 text-sm md:text-base">A curated network of CDAIOs, builders, and innovators.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg md:text-xl font-semibold mb-2">Proof over Promise</h4>
            <p className="opacity-80 text-sm md:text-base">Showcasing what scales responsibly, securely, and ethically.</p>
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className="py-16 md:py-20 bg-[hsl(205,65%,18%)] text-center px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-10">The Network Powering Digital & AI Leadership</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
          {[{
          name: 'Summit',
          desc: 'Two days, six tracks, 120+ leaders shaping agentic AI.',
          link: '/summit',
          cta: 'View Summit',
          image: iconSummit
        }, {
          name: 'Awards',
          desc: 'Recognizing excellence and responsibility in AI.',
          link: '/awards',
          cta: 'Nominate Now',
          image: iconAwards
        }, {
          name: 'Podcasts',
          desc: 'Weekly conversations with AI pioneers and practitioners.',
          link: '/podcasts',
          cta: 'Listen Now',
          image: iconPodcasts
        }, {
          name: 'Startups',
          desc: '30 AI startups reimagining enterprise and impact.',
          link: '/startups',
          cta: 'Apply Now',
          image: iconStartups
        }, {
          name: 'Press',
          desc: 'News, assets, and accreditation for global media.',
          link: '/press',
          cta: 'Access Press Kit',
          image: iconPress
        }, {
          name: 'Newsletter',
          desc: 'Monthly digest of frameworks, talks, and AI tools.',
          link: '#newsletter',
          cta: 'Join Newsletter',
          image: iconNewsletter
        }].map(item => <div key={item.name} className="border border-white/20 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(187,100%,50%,0.2)]">
              <div className="h-32 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <h4 className="text-lg md:text-xl font-semibold mb-2">{item.name}</h4>
                <p className="text-sm opacity-80 mb-4">{item.desc}</p>
                <a href={item.link} className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                  {item.cta} <span>→</span>
                </a>
              </div>
            </div>)}
        </div>
      </section>

      {/* Spotlight */}
      <section className="py-16 md:py-20 text-center bg-[hsl(205,67%,16%)] px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-10">This Month at Cognivian</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="p-6 border border-white/20 rounded-xl hover:border-primary/50 transition-all duration-300 overflow-hidden">
            <div className="mb-4 -mx-6 -mt-6">
              <img src={summitImage} alt="Summit" className="w-full h-32 object-cover" />
            </div>
            <h4 className="font-semibold mb-2 text-base md:text-lg">Summit Spotlight</h4>
            <p className="text-xs md:text-sm opacity-80 mb-4">Agentic Enterprise 2026 · Dubai · March 5–6. Early-bird tickets open.</p>
            <a href="/summit" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
              View Agenda <span>→</span>
            </a>
          </div>
          <div className="p-6 border border-white/20 rounded-xl hover:border-primary/50 transition-all duration-300 overflow-hidden">
            <div className="mb-4 -mx-6 -mt-6">
              <img src={podcastImage} alt="Podcast" className="w-full h-32 object-cover" />
            </div>
            <h4 className="font-semibold mb-2 text-base md:text-lg">Leader Insight</h4>
            <p className="text-xs md:text-sm opacity-80 mb-4">Governance That Ships — balancing velocity & responsibility.</p>
            <a href="/podcasts" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
              Listen Now <span>→</span>
            </a>
          </div>
          <div className="p-6 border border-white/20 rounded-xl hover:border-primary/50 transition-all duration-300 overflow-hidden">
            <div className="mb-4 -mx-6 -mt-6">
              <img src={startupsImage} alt="Startups" className="w-full h-32 object-cover" />
            </div>
            <h4 className="font-semibold mb-2 text-base md:text-lg">Startup Feature</h4>
            <p className="text-xs md:text-sm opacity-80 mb-4">Predictia — reinventing demand sensing with generative agents.</p>
            <a href="/startups" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
              Learn More <span>→</span>
            </a>
          </div>
          <div className="p-6 border border-white/20 rounded-xl hover:border-primary/50 transition-all duration-300 overflow-hidden">
            <div className="mb-4 -mx-6 -mt-6">
              <img src={awardsTimelineImage} alt="Awards" className="w-full h-32 object-cover" />
            </div>
            <h4 className="font-semibold mb-2 text-base md:text-lg">Award Timeline</h4>
            <p className="text-xs md:text-sm opacity-80 mb-4">Nominations close Feb 20, 2026. Submit today.</p>
            <a href="/awards" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
              Nominate <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-16 md:py-20 text-center bg-[hsl(205,65%,18%)] px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay ahead of the curve.</h3>
        <p className="max-w-2xl mx-auto text-base md:text-lg opacity-80 mb-8 px-4">Join 3,000+ CDAIOs receiving our monthly digest of case studies, frameworks, and AI leadership insights.</p>
        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row justify-center gap-2 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
            className="px-4 py-3 sm:rounded-l-md sm:rounded-r-none rounded-md text-foreground bg-white/10 border-white/20 focus:border-primary placeholder:text-white/60" 
          />
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-primary-foreground px-6 py-3 sm:rounded-r-md sm:rounded-l-none rounded-md font-semibold hover:bg-primary/90 transition-colors"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              "Subscribe"
            )}
          </Button>
        </form>
      </section>

      <Footer />
    </div>;
};
export default Index;