import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, FileText, Mail, Copy, Users, Globe, TrendingUp, Calendar, Briefcase, Mic, Award, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Press = () => {
  const [email, setEmail] = useState("");
  const [isMediaProfessional, setIsMediaProfessional] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "You'll receive media updates in your inbox.",
    });
    setEmail("");
    setIsMediaProfessional(false);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  const boilerplateText = `Cognivia is the global platform connecting over 10,000 Chief Digital and AI Officers across 50+ countries. Founded to accelerate responsible AI transformation in enterprise, Cognivia provides a comprehensive ecosystem including the annual AI Leadership Summit, AI Excellence Awards, thought leadership content, podcasts, research papers, and a curated startup showcase. The platform's mission is to connect visionary leaders, share proven frameworks, and drive measurable business impact through artificial intelligence. Cognivia's 2026 Dubai Summit will convene 120+ speakers and 2,000+ attendees representing the world's leading organizations in AI transformation.`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B2A42] via-[#102C4A] to-[#0B2A42]">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/src/assets/hero-background.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B2A42]/90 via-[#0B2A42]/80 to-[#0B2A42]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Press & Media Center
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8">
                Welcome to the Cognivia Press Room. Access media resources, latest announcements, and press materials for the global AI leadership community.
              </p>
              
              {/* Stats Overlay */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="text-3xl font-bold text-cyan-400">10,000+</div>
                  <div className="text-white/80 mt-2">CDAIOs in Network</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="text-3xl font-bold text-cyan-400">120+</div>
                  <div className="text-white/80 mt-2">Summit Speakers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="text-3xl font-bold text-cyan-400">50+</div>
                  <div className="text-white/80 mt-2">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Accreditation */}
        <section className="py-16 md:py-20 bg-[#102C4A]">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Media Accreditation
                  </h2>
                  <p className="text-white/80 text-lg mb-8">
                    Cover the world's premier AI leadership event. Apply for press credentials to access exclusive benefits and resources.
                  </p>
                  <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-lg px-8 py-6">
                    Apply for Press Pass
                  </Button>
                </div>
                <div className="bg-white/5 border border-white/20 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Press Pass Benefits</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-white/80">Priority access to speakers and sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-white/80">Exclusive media lounge access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-white/80">Interview coordination support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-white/80">High-resolution photography and video access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                      <span className="text-white/80">Press kit materials and resources</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Cover Cognivia */}
        <section className="py-16 md:py-20 bg-[#0B2A42]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Why Cover Cognivia?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader>
                    <Globe className="w-12 h-12 text-cyan-400 mb-4" />
                    <CardTitle className="text-white">Global Reach</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">
                      Access to 10,000+ CDAIOs across 50+ countries, representing the world's most influential AI decision-makers.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader>
                    <Users className="w-12 h-12 text-cyan-400 mb-4" />
                    <CardTitle className="text-white">Exclusive Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">
                      Direct access to Fortune 500 leaders and innovators shaping the future of enterprise AI transformation.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader>
                    <TrendingUp className="w-12 h-12 text-cyan-400 mb-4" />
                    <CardTitle className="text-white">Proven Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">
                      $2B+ in value creation documented through proven frameworks and real-world AI implementation stories.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Announcements */}
        <section className="py-16 md:py-20 bg-[#102C4A]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Upcoming Announcements
              </h2>
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-cyan-400 text-sm font-semibold mb-2">January 2026</div>
                      <h3 className="text-xl font-semibold text-white mb-2">Dubai Summit 2026 Speaker Lineup Reveal</h3>
                      <p className="text-white/70">Full announcement of 120+ speakers including Fortune 500 CDAIOs and AI innovation leaders.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-cyan-400 text-sm font-semibold mb-2">February 2026</div>
                      <h3 className="text-xl font-semibold text-white mb-2">AI Excellence Awards Categories Unveiled</h3>
                      <p className="text-white/70">Announcement of award categories and nomination process for enterprise AI achievements.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/20 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="text-cyan-400 text-sm font-semibold mb-2">March 2026</div>
                      <h3 className="text-xl font-semibold text-white mb-2">Major Partnership Announcements</h3>
                      <p className="text-white/70">Strategic partnerships with leading technology providers and enterprise organizations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="py-16 md:py-20 bg-[#0B2A42]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Download Media Kit
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <CardHeader>
                    <FileText className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-white">Brand Assets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 mb-6">
                      Cognivia logos (PNG, SVG, EPS), color palette, and brand guidelines
                    </CardDescription>
                    <Button variant="outline" className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                      <Download className="w-4 h-4 mr-2" />
                      Download Assets
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <CardHeader>
                    <FileText className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-white">Fact Sheet</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 mb-6">
                      Company backgrounder, key statistics, milestones, and executive bios
                    </CardDescription>
                    <Button variant="outline" className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                      <Download className="w-4 h-4 mr-2" />
                      Download Fact Sheet
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <CardHeader>
                    <FileText className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-white">Visual Assets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 mb-6">
                      High-resolution event photos, speaker images, and venue photography
                    </CardDescription>
                    <Button variant="outline" className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                      <Download className="w-4 h-4 mr-2" />
                      Download Images
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About Cognivia Boilerplate */}
        <section className="py-16 md:py-20 bg-[#102C4A]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
                About Cognivia
              </h2>
              <div className="bg-white/5 border border-white/20 rounded-lg p-8">
                <p className="text-white/80 text-lg leading-relaxed mb-6">
                  {boilerplateText}
                </p>
                <Button
                  onClick={() => copyToClipboard(boilerplateText, "Boilerplate")}
                  className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy to Clipboard
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Story Ideas & Angles */}
        <section className="py-16 md:py-20 bg-[#0B2A42]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Story Ideas & Angles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase className="w-6 h-6 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-semibold">Enterprise Transformation</span>
                    </div>
                    <CardTitle className="text-white">The Rise of the CDAIO Role</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">
                      Explore how the Chief Digital & AI Officer position is reshaping enterprise leadership and driving $2B+ in documented value creation.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Globe className="w-6 h-6 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-semibold">Global Leadership</span>
                    </div>
                    <CardTitle className="text-white">AI Leadership Goes Global</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">
                      How 10,000+ CDAIOs across 50+ countries are collaborating to solve shared AI transformation challenges.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="w-6 h-6 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-semibold">Innovation Showcase</span>
                    </div>
                    <CardTitle className="text-white">AI Excellence in Action</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">
                      Feature stories on AI Excellence Award winners and their groundbreaking implementations of enterprise AI.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Mic className="w-6 h-6 text-cyan-400" />
                      <span className="text-cyan-400 text-sm font-semibold">Thought Leadership</span>
                    </div>
                    <CardTitle className="text-white">Exclusive Speaker Interviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">
                      One-on-one access to Fortune 500 AI leaders and their insights on responsible AI transformation.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Key Facts & Statistics */}
        <section className="py-16 md:py-20 bg-[#102C4A]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Cognivia by the Numbers
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">10,000+</div>
                  <p className="text-white/80 text-lg">CDAIOs in Global Network</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">120+</div>
                  <p className="text-white/80 text-lg">Speakers at 2026 Summit</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">50+</div>
                  <p className="text-white/80 text-lg">Countries Represented</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">2,000+</div>
                  <p className="text-white/80 text-lg">Expected Summit Attendees</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">$2B+</div>
                  <p className="text-white/80 text-lg">Value Creation by Community</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">85%</div>
                  <p className="text-white/80 text-lg">Attendee Satisfaction Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Partnership Opportunities */}
        <section className="py-16 md:py-20 bg-[#0B2A42]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Content Partnership Opportunities
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader>
                    <Mic className="w-12 h-12 text-cyan-400 mb-4" />
                    <CardTitle className="text-white">Podcast Collaborations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">
                      Co-produce episodes featuring CDAIOs sharing real-world AI transformation stories and frameworks.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader>
                    <FileText className="w-12 h-12 text-cyan-400 mb-4" />
                    <CardTitle className="text-white">Research Reports</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">
                      Partner on data-driven research leveraging insights from our 10,000+ CDAIO community.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader>
                    <Users className="w-12 h-12 text-cyan-400 mb-4" />
                    <CardTitle className="text-white">Event Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70">
                      Become an official media partner for the Dubai Summit 2026 with exclusive access and branding.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Media Inquiries */}
        <section className="py-16 md:py-20 bg-[#102C4A]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                Media Inquiries
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => copyToClipboard("press@cognivia.ai", "Press email")}>
                  <CardHeader>
                    <Mail className="w-8 h-8 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-white">General Press</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 mb-2">
                      For general media inquiries and press releases
                    </CardDescription>
                    <p className="text-cyan-400 font-mono">press@cognivia.ai</p>
                    <p className="text-white/60 text-sm mt-2">Response time: 24-48 hours</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => copyToClipboard("speakers@cognivia.ai", "Speakers email")}>
                  <CardHeader>
                    <Mic className="w-8 h-8 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-white">Speaking Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 mb-2">
                      For interview requests and speaker coordination
                    </CardDescription>
                    <p className="text-cyan-400 font-mono">speakers@cognivia.ai</p>
                    <p className="text-white/60 text-sm mt-2">Response time: 24-48 hours</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => copyToClipboard("partners@cognivia.ai", "Partners email")}>
                  <CardHeader>
                    <Briefcase className="w-8 h-8 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-white">Partnership Inquiries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 mb-2">
                      For content partnerships and collaboration opportunities
                    </CardDescription>
                    <p className="text-cyan-400 font-mono">partners@cognivia.ai</p>
                    <p className="text-white/60 text-sm mt-2">Response time: 24-48 hours</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
                  onClick={() => copyToClipboard("events@cognivia.ai", "Events email")}>
                  <CardHeader>
                    <Calendar className="w-8 h-8 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-white">Event Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/70 mb-2">
                      For summit accreditation and event access
                    </CardDescription>
                    <p className="text-cyan-400 font-mono">events@cognivia.ai</p>
                    <p className="text-white/60 text-sm mt-2">Response time: 24-48 hours</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 md:py-20 bg-[#0B2A42]">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Media Newsletter
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Subscribe to receive press releases, media alerts, and event updates directly to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <div className="flex items-center gap-2 text-left">
                  <Checkbox
                    id="media-professional"
                    checked={isMediaProfessional}
                    onCheckedChange={(checked) => setIsMediaProfessional(checked as boolean)}
                    className="border-white/20"
                  />
                  <label htmlFor="media-professional" className="text-white/80 text-sm cursor-pointer">
                    I am a media professional
                  </label>
                </div>
                <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-lg py-6">
                  Subscribe to Updates
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-[#102C4A] to-[#0B2A42]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <Award className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <CardTitle className="text-white text-2xl">Apply for Press Pass</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-white/70 mb-6 text-lg">
                      Cover the leading AI leadership event with exclusive media access and resources.
                    </CardDescription>
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-lg px-8 py-6 w-full">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <CardHeader className="text-center">
                    <Users className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <CardTitle className="text-white text-2xl">Attend the Summit</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-white/70 mb-6 text-lg">
                      Experience Cognivia firsthand at the Dubai Summit 2026 with 2,000+ AI leaders.
                    </CardDescription>
                    <Button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-lg px-8 py-6 w-full">
                      Get Tickets
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Press;