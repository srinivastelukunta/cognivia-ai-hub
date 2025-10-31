import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Target, Trophy, Mic, Rocket } from "lucide-react";
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
  return <div className="bg-[hsl(205,67%,16%)] text-foreground min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-8 py-6 border-b border-white/10 sticky top-0 bg-[hsl(205,67%,16%)]/90 backdrop-blur-md z-50">
        <div className="flex items-center space-x-3">
          <img src="/cognivia-logo.png" alt="Cognivia Logo" className="h-10 w-auto" />
          
        </div>
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-semibold tracking-wide">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <a href="/about" className="hover:text-primary transition-colors">About</a>
          <a href="/press" className="hover:text-primary transition-colors">Press</a>
          <span className="text-white/20">|</span>
          <Button variant="ghost" size="sm" asChild className="text-primary/80 hover:text-primary hover:bg-primary/10 border border-primary/20">
            <a href="/summit" className="flex items-center gap-1.5">
              <Target className="w-4 h-4" />
              Summit
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild className="text-primary/80 hover:text-primary hover:bg-primary/10 border border-primary/20">
            <a href="/awards" className="flex items-center gap-1.5">
              <Trophy className="w-4 h-4" />
              Awards
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild className="text-primary/80 hover:text-primary hover:bg-primary/10 border border-primary/20">
            <a href="/podcasts" className="flex items-center gap-1.5">
              <Mic className="w-4 h-4" />
              Podcasts
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild className="text-primary/80 hover:text-primary hover:bg-primary/10 border border-primary/20">
            <a href="/startups" className="flex items-center gap-1.5">
              <Rocket className="w-4 h-4" />
              Startups
            </a>
          </Button>
        </nav>
        <div className="flex space-x-2 md:space-x-3">
          <Button className="bg-foreground text-[hsl(205,67%,16%)] font-semibold hover:bg-primary transition-colors">
            Get Tickets
          </Button>
          <Button variant="outline" className="hidden sm:inline-flex border-foreground text-foreground hover:bg-white/10">
            Join Newsletter
          </Button>
        </div>
      </header>

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

      {/* Why Cognivia */}
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
        <h3 className="text-2xl md:text-3xl font-bold mb-10">This Month at Cognivia</h3>
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
        <p className="max-w-2xl mx-auto text-base md:text-lg opacity-80 mb-8 px-4">
          Join 10,000+ CDAIOs receiving our monthly digest of case studies, frameworks, and AI leadership insights.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-0 max-w-md mx-auto">
          <Input type="email" placeholder="Your email address" className="px-4 py-3 sm:rounded-l-md sm:rounded-r-none rounded-md text-foreground bg-white/10 border-white/20 focus:border-primary placeholder:text-white/60" />
          <Button className="bg-primary text-primary-foreground px-6 py-3 sm:rounded-r-md sm:rounded-l-none rounded-md font-semibold hover:bg-primary/90 transition-colors mt-2 sm:mt-0">
            Subscribe
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 md:px-8 border-t border-white/10 bg-[hsl(205,67%,16%)]">
        <div className="flex flex-col items-start max-w-6xl mx-auto gap-6">
          <div className="flex items-center space-x-3">
            <img src="/cognivia-logo.png" alt="Cognivia Logo" className="h-8 w-auto" />
            
          </div>
          <nav className="flex flex-wrap items-center gap-3 md:gap-4 text-sm">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="/about" className="hover:text-primary transition-colors">About</a>
            <a href="/press" className="hover:text-primary transition-colors">Press</a>
            <span className="text-white/20">|</span>
            <Button variant="ghost" size="sm" asChild className="text-primary/80 hover:text-primary hover:bg-primary/10 border border-primary/20 h-8">
              <a href="/summit" className="flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                Summit
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-primary/80 hover:text-primary hover:bg-primary/10 border border-primary/20 h-8">
              <a href="/awards" className="flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" />
                Awards
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-primary/80 hover:text-primary hover:bg-primary/10 border border-primary/20 h-8">
              <a href="/podcasts" className="flex items-center gap-1.5">
                <Mic className="w-3.5 h-3.5" />
                Podcasts
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-primary/80 hover:text-primary hover:bg-primary/10 border border-primary/20 h-8">
              <a href="/startups" className="flex items-center gap-1.5">
                <Rocket className="w-3.5 h-3.5" />
                Startups
              </a>
            </Button>
          </nav>
          <p className="text-xs opacity-60 max-w-2xl">
            © 2025 Cognivia.ai · <a href="/conduct" className="hover:text-primary">Code of Conduct</a> · <a href="/accessibility" className="hover:text-primary">Accessibility</a> · <a href="/privacy" className="hover:text-primary">Privacy</a> · <a href="mailto:hello@cognivia.ai" className="hover:text-primary">hello@cognivia.ai</a>
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;