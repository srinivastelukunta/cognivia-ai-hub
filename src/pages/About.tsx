import { Button } from "@/components/ui/button";
import { Target, Trophy, Mic, FileText, Rocket, BookOpen, TrendingUp, Shield, CheckCircle, Users, Globe, Award, Headphones } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/hero-background.jpg";
const About = () => {
  return <div className="bg-[hsl(205,67%,16%)] text-foreground min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative text-center py-16 md:py-28 px-4 bg-gradient-to-b from-[hsl(205,67%,16%)] to-[hsl(205,65%,18%)] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={heroBackground} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight max-w-5xl mx-auto">
            Where Human Vision Becomes Living Intelligence
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-4 opacity-90 px-4">
            Building the global network of Chief Digital & AI Officers since 2024
          </p>
          <p className="text-base md:text-lg max-w-3xl mx-auto opacity-80 px-4">Cognivia is the premier platform connecting 3,000+ enterprise AI leaders to navigate the transition from experimentation to production-scale intelligence.</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-[hsl(205,67%,16%)] px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-4">
                <h3 className="text-xl font-semibold mb-2">2024: Foundation</h3>
                <p className="text-white/80">Cognivia was founded to address a critical gap: enterprise AI leaders lacked a trusted network to share proven frameworks, architectures, and governance models.</p>
              </div>
              <div className="border-l-4 border-primary/60 pl-6 py-4">
                <h3 className="text-xl font-semibold mb-2">2025: Ecosystem Launch</h3>
                <p className="text-white/80">Launched Summit, Awards, Podcasts, Papers, and Startups programs—creating a comprehensive platform for AI leadership excellence.</p>
              </div>
              <div className="border-l-4 border-primary/40 pl-6 py-4">
                <h3 className="text-xl font-semibold mb-2">2026: Global Expansion</h3>
                <p className="text-white/80">Hosting the Agentic Enterprise Summit in Dubai with 120+ speakers, 2,000+ attendees, and representing 50+ countries worldwide.</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-lg opacity-90 leading-relaxed">
                What started as conversations among pioneering CDAIOs has evolved into a global movement—one that prioritizes <strong className="text-primary">proof over promise</strong>, real results over hype.
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                Today, Cognivia serves as the connective tissue between vision and execution, helping organizations move from AI experimentation to production-ready intelligence at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-[hsl(205,65%,18%)] px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Mission</h2>
          <p className="text-lg text-center opacity-80 max-w-3xl mx-auto mb-12">
            Empowering enterprise leaders to navigate the AI transformation with confidence, clarity, and community.
          </p>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            <div className="border border-white/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Connect</h3>
              <p className="text-white/80 leading-relaxed">
                Building bridges between Chief Digital & AI Officers globally, fostering collaboration and knowledge sharing across industries and borders.
              </p>
            </div>
            <div className="border border-white/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Educate</h3>
              <p className="text-white/80 leading-relaxed">
                Sharing proven frameworks, case studies, and architectures that transform experimental AI pilots into production-scale systems.
              </p>
            </div>
            <div className="border border-white/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Accelerate</h3>
              <p className="text-white/80 leading-relaxed">
                Driving responsible AI adoption at enterprise scale through governance frameworks, ethical guidelines, and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-[hsl(205,67%,16%)] px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What We Do</h2>
          <p className="text-lg text-center opacity-80 max-w-3xl mx-auto mb-12">
            A comprehensive ecosystem designed to support every aspect of your AI leadership journey.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="border border-white/20 rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(187,100%,50%,0.2)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Summit</h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                Global conferences bringing together 2,000+ AI leaders, 120+ speakers, and 50+ countries. Two days, six tracks focused on agentic enterprise architecture.
              </p>
              <a href="/summit" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                View Summit Details <span>→</span>
              </a>
            </div>
            <div className="border border-white/20 rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(187,100%,50%,0.2)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Awards</h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                Recognizing excellence in AI transformation, governance, and responsible innovation. Celebrating leaders who deliver measurable business outcomes.
              </p>
              <a href="/awards" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                Nominate Now <span>→</span>
              </a>
            </div>
            <div className="border border-white/20 rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(187,100%,50%,0.2)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Mic className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Podcasts</h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                Weekly conversations with AI pioneers and practitioners sharing real implementation stories, lessons learned, and frameworks that work.
              </p>
              <a href="/podcasts" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                Listen Now <span>→</span>
              </a>
            </div>
            <div className="border border-white/20 rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(187,100%,50%,0.2)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Papers</h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                Curated research, case studies, and whitepapers providing deep insights into AI architectures, governance models, and implementation strategies.
              </p>
              <a href="/papers" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                Explore Research <span>→</span>
              </a>
            </div>
            <div className="border border-white/20 rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(187,100%,50%,0.2)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Startups</h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                Showcasing 30 vetted AI startups reimagining enterprise workflows, governance tools, and agentic systems for production environments.
              </p>
              <a href="/startups" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                Apply Now <span>→</span>
              </a>
            </div>
            <div className="border border-white/20 rounded-xl p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(187,100%,50%,0.2)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Headphones className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Newsletter</h3>
              <p className="text-sm text-white/80 mb-4 leading-relaxed">
                Monthly intelligence digest delivering curated frameworks, summit highlights, and emerging AI tools to 3,000+ subscribers.
              </p>
              <a href="/#newsletter" className="text-primary text-sm font-semibold hover:underline inline-flex items-center gap-1">
                Join Newsletter <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Community Section */}
      <section className="py-16 md:py-24 bg-[hsl(205,65%,18%)] px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Community</h2>
          <p className="text-lg text-center opacity-80 max-w-3xl mx-auto mb-12">
            A global network of decision-makers, innovators, and practitioners shaping the future of enterprise AI.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
            <div className="text-center p-6">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">3,000+</div>
              <div className="text-lg opacity-80">CDAIOs in Network</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">120+</div>
              <div className="text-lg opacity-80">Summit Speakers</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">50+</div>
              <div className="text-lg opacity-80">Countries Represented</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">2,000+</div>
              <div className="text-lg opacity-80">Summit Attendees</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">$2B+</div>
              <div className="text-lg opacity-80">Value Created</div>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">85%</div>
              <div className="text-lg opacity-80">Satisfaction Rate</div>
            </div>
          </div>
          <div className="mt-12 text-center max-w-3xl mx-auto">
            <p className="text-lg opacity-90 leading-relaxed">
              Our community represents Fortune 500 companies, innovative startups, academic institutions, and government agencies—all united by the mission to deploy AI responsibly and effectively at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-[hsl(205,67%,16%)] px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Values</h2>
          <p className="text-lg text-center opacity-80 max-w-3xl mx-auto mb-12">
            The principles guiding everything we build and every conversation we facilitate.
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="border border-white/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proof Over Promise</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Focus on real results and measurable outcomes, not AI hype</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Share production-ready frameworks that scale</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Celebrate implementations that deliver business value</span>
                </li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Executive Intelligence</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Curated content designed for decision-makers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Practical architectures and governance models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Strategic frameworks for organizational transformation</span>
                </li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Responsible Innovation</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ethics, governance, and compliance at the forefront</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Balance velocity with accountability and security</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Champion transparent and explainable AI systems</span>
                </li>
              </ul>
            </div>
            <div className="border border-white/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Connected Ecosystem</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Building bridges across industries and geographies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Fostering peer-to-peer learning and collaboration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Creating lasting relationships that drive innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-24 bg-[hsl(205,65%,18%)] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">From Hype to Production</h2>
          <p className="text-lg opacity-90 leading-relaxed mb-10">
            We focus on the critical path from AI experimentation to production-ready intelligence systems that deliver measurable business value.
          </p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Real Architectures</h3>
                <p className="text-sm text-white/80">Not theoretical concepts—actual system designs that scale</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Governance Frameworks</h3>
                <p className="text-sm text-white/80">Proven models for risk management and compliance</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Operational Excellence</h3>
                <p className="text-sm text-white/80">Best practices for deploying, monitoring, and optimizing AI</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Change Management</h3>
                <p className="text-sm text-white/80">Strategies for organizational adoption and cultural shift</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[hsl(205,65%,18%)] to-[hsl(205,67%,16%)] px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Movement</h2>
          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Whether you're leading AI transformation at your organization or building the next generation of enterprise AI tools, there's a place for you in the Cognivia community.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Attend the Summit</h3>
              <p className="text-white/80 mb-6">
                Join 2,000+ AI leaders in Dubai for the Agentic Enterprise Summit, March 5-6, 2026.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors w-full">
                Get Tickets
              </Button>
            </div>
            <div className="border border-white/20 rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4">Join Our Community</h3>
              <p className="text-white/80 mb-6">
                Subscribe to our newsletter and receive monthly frameworks, case studies, and insights.
              </p>
              <Button size="lg" variant="outline" className="border-foreground text-foreground hover:bg-white/10 w-full">
                Join Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;