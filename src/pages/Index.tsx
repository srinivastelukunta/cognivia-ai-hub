import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="bg-[hsl(205,67%,16%)] text-foreground min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-4 md:px-8 py-6 border-b border-white/10 sticky top-0 bg-[hsl(205,67%,16%)]/90 backdrop-blur-md z-50">
        <div className="flex items-center space-x-3">
          <img src="/cognivia-logo.png" alt="Cognivia Logo" className="h-10 w-auto" />
          <h1 className="text-xl md:text-2xl font-extrabold tracking-wide">Cognivia</h1>
        </div>
        <nav className="hidden md:flex space-x-6 lg:space-x-8 text-sm font-semibold tracking-wide">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <a href="/summit" className="hover:text-primary transition-colors">Summit</a>
          <a href="/awards" className="hover:text-primary transition-colors">Awards</a>
          <a href="/podcasts" className="hover:text-primary transition-colors">Podcasts</a>
          <a href="/startups" className="hover:text-primary transition-colors">Startups</a>
          <a href="/press" className="hover:text-primary transition-colors">Press</a>
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
      <section className="text-center py-16 md:py-28 px-4 bg-gradient-to-b from-[hsl(205,67%,16%)] to-[hsl(205,65%,18%)]">
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
        <h3 className="text-2xl md:text-3xl font-bold mb-10">One Platform. Six Portals of Possibility.</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
          {[
            { name: 'Summit', desc: 'Two days, six tracks, 120+ leaders shaping agentic AI.', link: '/summit', cta: 'View Summit' },
            { name: 'Awards', desc: 'Recognizing excellence and responsibility in AI.', link: '/awards', cta: 'Nominate Now' },
            { name: 'Podcasts', desc: 'Weekly conversations with AI pioneers and practitioners.', link: '/podcasts', cta: 'Listen Now' },
            { name: 'Startups', desc: '30 AI startups reimagining enterprise and impact.', link: '/startups', cta: 'Apply Now' },
            { name: 'Press', desc: 'News, assets, and accreditation for global media.', link: '/press', cta: 'Access Press Kit' },
            { name: 'Newsletter', desc: 'Monthly digest of frameworks, talks, and AI tools.', link: '#newsletter', cta: 'Join Newsletter' }
          ].map((item) => (
            <div key={item.name} className="border border-white/20 rounded-xl p-6 md:p-8 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(187,100%,50%,0.2)]">
              <h4 className="text-lg md:text-xl font-semibold mb-2">{item.name}</h4>
              <p className="text-sm opacity-80 mb-4">{item.desc}</p>
              <a href={item.link} className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                {item.cta} <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Spotlight */}
      <section className="py-16 md:py-20 text-center bg-[hsl(205,67%,16%)] px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-10">This Month at Cognivia</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="p-6 border border-white/20 rounded-xl hover:border-primary/50 transition-all duration-300">
            <h4 className="font-semibold mb-2 text-base md:text-lg">Summit Spotlight</h4>
            <p className="text-xs md:text-sm opacity-80 mb-4">Agentic Enterprise 2026 · Dubai · March 5–6. Early-bird tickets open.</p>
            <a href="/summit" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
              View Agenda <span>→</span>
            </a>
          </div>
          <div className="p-6 border border-white/20 rounded-xl hover:border-primary/50 transition-all duration-300">
            <h4 className="font-semibold mb-2 text-base md:text-lg">Leader Insight</h4>
            <p className="text-xs md:text-sm opacity-80 mb-4">Governance That Ships — balancing velocity & responsibility.</p>
            <a href="/podcasts" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
              Listen Now <span>→</span>
            </a>
          </div>
          <div className="p-6 border border-white/20 rounded-xl hover:border-primary/50 transition-all duration-300">
            <h4 className="font-semibold mb-2 text-base md:text-lg">Startup Feature</h4>
            <p className="text-xs md:text-sm opacity-80 mb-4">Predictia — reinventing demand sensing with generative agents.</p>
            <a href="/startups" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
              Learn More <span>→</span>
            </a>
          </div>
          <div className="p-6 border border-white/20 rounded-xl hover:border-primary/50 transition-all duration-300">
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
          <Input 
            type="email" 
            placeholder="Your email address" 
            className="px-4 py-3 sm:rounded-l-md sm:rounded-r-none rounded-md text-foreground bg-white/10 border-white/20 focus:border-primary placeholder:text-white/60" 
          />
          <Button className="bg-primary text-primary-foreground px-6 py-3 sm:rounded-r-md sm:rounded-l-none rounded-md font-semibold hover:bg-primary/90 transition-colors mt-2 sm:mt-0">
            Subscribe
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 md:px-8 text-center border-t border-white/10 bg-[hsl(205,67%,16%)]">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-6">
          <div className="flex items-center space-x-3">
            <img src="/cognivia-logo.png" alt="Cognivia Logo" className="h-8 w-auto" />
            <span className="font-bold text-lg">Cognivia.ai</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <a href="/summit" className="hover:text-primary transition-colors">Summit</a>
            <a href="/awards" className="hover:text-primary transition-colors">Awards</a>
            <a href="/podcasts" className="hover:text-primary transition-colors">Podcasts</a>
            <a href="/startups" className="hover:text-primary transition-colors">Startups</a>
            <a href="/press" className="hover:text-primary transition-colors">Press</a>
          </nav>
          <p className="text-xs opacity-60 max-w-sm">
            © 2025 Cognivia.ai · <a href="/conduct" className="hover:text-primary">Code of Conduct</a> · <a href="/accessibility" className="hover:text-primary">Accessibility</a> · <a href="/privacy" className="hover:text-primary">Privacy</a> · <a href="mailto:hello@cognivia.ai" className="hover:text-primary">hello@cognivia.ai</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
