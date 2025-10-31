import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Trophy, Mic, FileText, Rocket, Users, BookOpen, TrendingUp, Video, Headphones, Mail, Award, Handshake, CheckCircle, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroBackground from "@/assets/hero-background.jpg";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
const JoinSponsorship = () => {
  const {
    toast
  } = useToast();
  const [membershipType, setMembershipType] = useState("full");
  const [areasOfInterest, setAreasOfInterest] = useState<string[]>([]);
  const handleMembershipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted",
      description: "We'll review your application within 48 hours and contact you via email."
    });
  };
  const handlePartnershipSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Partnership Inquiry Received",
      description: "Our team will contact you within 2 business days to discuss opportunities."
    });
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBackground} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Join the Global CDAIO Community
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto">Connect with 3,000+ Chief Digital & AI Officers. Choose your membership or explore partnership opportunities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" onClick={() => scrollToSection('membership')} className="bg-primary hover:bg-primary/90">
              View Membership Plans
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('sponsorship')} className="border-primary/50 text-primary hover:bg-primary/10">
              Explore Sponsorship
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-white/90">3,000+ CDAIOs</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              <span className="text-white/90">50+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-white/90">Lifelong Learning Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section id="membership" className="py-16 md:py-24 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CDAIO Membership Plans</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Join a community of AI leaders. Access exclusive content, events, and networking opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {/* Associate Membership */}
            <Card className="border-white/20 bg-white/5 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Associate Membership</CardTitle>
                <CardDescription className="text-white/60">
                  Emerging AI Leaders & Individual Contributors
                </CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">$199<span className="text-lg font-normal text-white/60">/year</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90"><strong>Lifelong Access</strong> to Intelligence in Action Podcast Library</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90"><strong>25% Discount</strong> on ONE Cognivia Summit ticket</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Monthly Intelligence Digest newsletter</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Access to CDAIO Roundtables (virtual, quarterly)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Community forum access</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Awards nomination eligibility</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Member directory listing</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Early bird access to event tickets</span>
                  </div>
                </div>
                <Button className="w-full mt-6" onClick={() => scrollToSection('apply')}>
                  Become an Associate Member
                </Button>
              </CardContent>
            </Card>

            {/* Full Membership */}
            <Card className="border-primary bg-primary/5 hover:border-primary transition-all duration-300 relative shadow-lg shadow-primary/20">
              <div className="absolute -top-3 right-4 bg-primary text-background px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                <Star className="w-4 h-4" />
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Full Membership</CardTitle>
                <CardDescription className="text-white/60">
                  Chief Digital & AI Officers
                </CardDescription>
                <div className="text-3xl font-bold text-primary mt-4">$999<span className="text-lg font-normal text-white/60">/year</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90"><strong>Lifelong Access</strong> to Intelligence in Action Podcast Library</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90"><strong>25% Discount</strong> on ALL Cognivia Summits for ONE YEAR</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Monthly Intelligence Digest newsletter</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90"><strong>Priority Access</strong> to CDAIO Roundtables (virtual + in-person)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90"><strong>Exclusive</strong> quarterly executive briefings</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Community forum with verified CDAIO badge</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Awards nomination with priority review</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Enhanced directory listing with profile page</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Early access to ALL events (48-hour head start)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90"><strong>1:1 Peer Mentorship</strong> matching program</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Access to CDAIO Research Reports & Frameworks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">Quarterly virtual networking events</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90" onClick={() => scrollToSection('apply')}>
                  Become a Full Member
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto border border-white/20 rounded-lg overflow-hidden">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-4 border-b border-white/20">Feature</th>
                  <th className="text-center p-4 border-b border-white/20">Associate</th>
                  <th className="text-center p-4 border-b border-white/20">Full</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-4">Podcast Library (Lifelong)</td>
                  <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-primary mx-auto" /></td>
                  <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4">Summit Discount</td>
                  <td className="text-center p-4 text-sm">25% OFF (1 ticket)</td>
                  <td className="text-center p-4 text-sm">25% OFF (All summits, 1 year)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4">CDAIO Roundtables</td>
                  <td className="text-center p-4 text-sm">Virtual (Quarterly)</td>
                  <td className="text-center p-4 text-sm">Virtual + In-Person</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4">Executive Briefings</td>
                  <td className="text-center p-4 text-white/40">—</td>
                  <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-4">Peer Mentorship</td>
                  <td className="text-center p-4 text-white/40">—</td>
                  <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4">Research Reports</td>
                  <td className="text-center p-4 text-white/40">—</td>
                  <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-primary mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 md:py-24 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why CDAIOs Choose Cognivia Membership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Learn & Grow</h3>
              <p className="text-white/70">
                Access the world's largest library of AI leadership insights. Learn from 120+ speakers and 500+ podcast episodes—all included for life.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect & Collaborate</h3>
              <p className="text-white/70">
                Join exclusive roundtables, forums, and events. Build relationships with peers facing the same AI transformation challenges.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Save & Invest</h3>
              <p className="text-white/70">
                Full Members save up to $2,000/year on summit tickets alone. Plus lifelong access to premium content worth $5,000+.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 md:py-24 px-4 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Apply for Membership</h2>
            <p className="text-lg text-white/70">
              Tell us about yourself. We'll review your application within 48 hours.
            </p>
          </div>

          <form onSubmit={handleMembershipSubmit} className="space-y-6 border border-white/20 rounded-xl p-6 md:p-8 bg-white/5">
            <div className="space-y-4">
              <Label>Membership Type *</Label>
              <RadioGroup value={membershipType} onValueChange={setMembershipType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="associate" id="associate" />
                  <Label htmlFor="associate" className="font-normal cursor-pointer">Associate Membership - $199/year</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="full" id="full" />
                  <Label htmlFor="full" className="font-normal cursor-pointer">Full Membership - $999/year</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title *</Label>
                <Input id="jobTitle" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Company *</Label>
                <Input id="company" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" type="tel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile *</Label>
                <Input id="linkedin" type="url" required placeholder="https://linkedin.com/in/..." />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Years in AI/Digital Leadership *</Label>
              <select id="experience" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="">Select...</option>
                <option value="<1">Less than 1 year</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5-10">5-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label>Areas of Interest *</Label>
              <div className="grid md:grid-cols-2 gap-3">
                {['Agentic AI', 'AI Governance & Ethics', 'AI Strategy & ROI', 'Generative AI', 'AI Operations', 'Change Management'].map(area => <div key={area} className="flex items-center space-x-2">
                    <Checkbox id={area} checked={areasOfInterest.includes(area)} onCheckedChange={checked => {
                  if (checked) {
                    setAreasOfInterest([...areasOfInterest, area]);
                  } else {
                    setAreasOfInterest(areasOfInterest.filter(a => a !== area));
                  }
                }} />
                    <Label htmlFor={area} className="font-normal cursor-pointer">{area}</Label>
                  </div>)}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation">Why do you want to join Cognivia? *</Label>
              <Textarea id="motivation" required className="min-h-[120px]" maxLength={1000} placeholder="Maximum 200 words" />
            </div>

            {membershipType === 'full' && <div className="flex items-center space-x-2 p-4 border border-white/20 rounded-lg bg-white/5">
                <Checkbox id="confirm" required />
                <Label htmlFor="confirm" className="font-normal cursor-pointer">
                  I confirm I hold a CDAIO or equivalent executive role
                </Label>
              </div>}

            <Button type="submit" size="lg" className="w-full">
              Submit Application
            </Button>
          </form>
        </div>
      </section>

      {/* Divider */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 rounded-full bg-white/5">
            <Handshake className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold">Corporate Partnerships & Sponsorship</span>
          </div>
        </div>
      </div>

      {/* Sponsorship Section */}
      <section id="sponsorship" className="py-16 md:py-24 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Cognivia</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Connect your brand with 10,000+ AI decision-makers. Build thought leadership, generate leads, and accelerate growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Platinum */}
            <Card className="border-primary bg-primary/5 hover:border-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Platinum Partner</CardTitle>
                <CardDescription>$100,000+</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Logo on all marketing materials</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">4 summit passes + VIP lounge access</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Main stage speaking slot (20 min)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Branded networking event</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Premium exhibition booth</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Homepage logo placement</span>
                </div>
                <Button className="w-full mt-4" onClick={() => scrollToSection('partnership-form')}>
                  Become a Platinum Partner
                </Button>
              </CardContent>
            </Card>

            {/* Gold */}
            <Card className="border-white/20 bg-white/5 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Gold Partner</CardTitle>
                <CardDescription>$50,000 - $99,000</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Logo on summit materials</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">2 summit passes + lounge access</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Breakout session speaking slot (15 min)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Standard exhibition booth</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Partner page logo</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Newsletter feature (1x)</span>
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={() => scrollToSection('partnership-form')}>
                  Become a Gold Partner
                </Button>
              </CardContent>
            </Card>

            {/* Silver */}
            <Card className="border-white/20 bg-white/5 hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Silver Partner</CardTitle>
                <CardDescription>$25,000 - $49,000</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Partner page logo</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">1 summit pass</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Workshop/panel participation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Exhibition table</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Newsletter mention (1x)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Social media promotion (2 posts)</span>
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={() => scrollToSection('partnership-form')}>
                  Become a Silver Partner
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Digital Marketing Opportunities */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Beyond the Summit: Year-Round Engagement</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-white/20 rounded-lg p-6 hover:border-primary/50 transition-all">
                <Video className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">Webinar Series</h4>
                <p className="text-white/70 text-sm mb-3">Host educational webinars for our 10,000+ CDAIO community</p>
                <p className="text-primary font-semibold">$10,000 per webinar</p>
              </div>
              <div className="border border-white/20 rounded-lg p-6 hover:border-primary/50 transition-all">
                <Headphones className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">Podcast Sponsorship</h4>
                <p className="text-white/70 text-sm mb-3">Sponsor Intelligence in Action episodes (50,000+ monthly listeners)</p>
                <p className="text-primary font-semibold">$5,000 per episode</p>
              </div>
              <div className="border border-white/20 rounded-lg p-6 hover:border-primary/50 transition-all">
                <Mail className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">Newsletter Sponsorship</h4>
                <p className="text-white/70 text-sm mb-3">Feature in The Intelligence Digest (10,000+ subscribers)</p>
                <p className="text-primary font-semibold">$8,000 per edition</p>
              </div>
              <div className="border border-white/20 rounded-lg p-6 hover:border-primary/50 transition-all">
                <FileText className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">Content Partnership</h4>
                <p className="text-white/70 text-sm mb-3">Co-create whitepapers, research reports, or case studies</p>
                <p className="text-primary font-semibold">$15,000 per piece</p>
              </div>
              <div className="border border-white/20 rounded-lg p-6 hover:border-primary/50 transition-all">
                <Award className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">Awards Sponsorship</h4>
                <p className="text-white/70 text-sm mb-3">Sponsor category at the annual CDAIO Excellence Awards</p>
                <p className="text-primary font-semibold">$20,000 per category</p>
              </div>
              <div className="border border-white/20 rounded-lg p-6 hover:border-primary/50 transition-all">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">Community Sponsorship</h4>
                <p className="text-white/70 text-sm mb-3">Year-round visibility in member forums and events</p>
                <p className="text-primary font-semibold">Custom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section id="partnership-form" className="py-16 md:py-24 px-4 bg-white/5 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Partnership Opportunities</h2>
            <p className="text-lg text-white/70">
              Let's design a partnership that delivers measurable ROI for your organization.
            </p>
          </div>

          <form onSubmit={handlePartnershipSubmit} className="space-y-6 border border-white/20 rounded-xl p-6 md:p-8 bg-background">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input id="companyName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactName">Contact Name *</Label>
                <Input id="contactName" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input id="title" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="partnerEmail">Email *</Label>
                <Input id="partnerEmail" type="email" required />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="partnerPhone">Phone *</Label>
                <Input id="partnerPhone" type="tel" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest">Partnership Interest *</Label>
                <select id="interest" required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  <option value="">Select...</option>
                  <option value="platinum">Sponsorship Package (Platinum)</option>
                  <option value="gold">Sponsorship Package (Gold)</option>
                  <option value="silver">Sponsorship Package (Silver)</option>
                  <option value="digital">Digital Marketing Opportunities</option>
                  <option value="content">Content Partnership</option>
                  <option value="custom">Custom Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Budget Range (Optional)</Label>
              <select id="budget" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <option value="">Select...</option>
                <option value="10-25">$10,000 - $25,000</option>
                <option value="25-50">$25,000 - $50,000</option>
                <option value="50-100">$50,000 - $100,000</option>
                <option value="100+">$100,000+</option>
                <option value="discuss">To be discussed</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="objectives">What are your partnership objectives? *</Label>
              <Textarea id="objectives" required className="min-h-[150px]" maxLength={2500} placeholder="Maximum 500 words" />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Request Partnership Discussion
            </Button>
          </form>
        </div>
      </section>

      {/* ROI Statistics */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Partnership Impact by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-white/70">CDAIOs in global network</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">85%</div>
              <p className="text-white/70">C-level decision-makers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2,000+</div>
              <p className="text-white/70">Annual summit attendees</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$2B+</div>
              <p className="text-white/70">AI value created by community</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">92%</div>
              <p className="text-white/70">Partner satisfaction rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <p className="text-white/70">Countries represented</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Members & Partners Say</h2>
          <Tabs defaultValue="members" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="members">Members</TabsTrigger>
              <TabsTrigger value="partners">Partners</TabsTrigger>
            </TabsList>
            <TabsContent value="members" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-white/20 bg-background">
                  <CardContent className="pt-6">
                    <p className="text-white/80 mb-4 italic">"The networking value alone is worth 10x the membership fee. I've connected with peers who helped me navigate our AI transformation."</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                      <div>
                        <p className="font-semibold">Sarah Chen</p>
                        <p className="text-sm text-white/60">CDAIO, Global Tech Corp</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-white/20 bg-background">
                  <CardContent className="pt-6">
                    <p className="text-white/80 mb-4 italic">"The podcast library is incredible. I listen during my commute and always learn something actionable I can apply immediately."</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                      <div>
                        <p className="font-semibold">Michael Rodriguez</p>
                        <p className="text-sm text-white/60">VP AI Strategy, FinServe Inc</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-white/20 bg-background">
                  <CardContent className="pt-6">
                    <p className="text-white/80 mb-4 italic">"The summit discount paid for my membership in the first month. The quality of content and speakers is unmatched."</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                      <div>
                        <p className="font-semibold">Dr. Priya Sharma</p>
                        <p className="text-sm text-white/60">Chief AI Officer, Healthcare Plus</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="partners" className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-white/20 bg-background">
                  <CardContent className="pt-6">
                    <p className="text-white/80 mb-4 italic">"Our partnership generated 150+ qualified leads and established us as thought leaders in the AI space."</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-bold">LOGO</span>
                      </div>
                      <div>
                        <p className="font-semibold">Tech Solutions Corp</p>
                        <p className="text-sm text-white/60">Platinum Partner 2024</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-white/20 bg-background">
                  <CardContent className="pt-6">
                    <p className="text-white/80 mb-4 italic">"The quality of attendees is exceptional. Every conversation was with a decision-maker. ROI was clear within 3 months."</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-bold">LOGO</span>
                      </div>
                      <div>
                        <p className="font-semibold">AI Innovations Inc</p>
                        <p className="text-sm text-white/60">Gold Partner 2024</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-white/20 bg-background">
                  <CardContent className="pt-6">
                    <p className="text-white/80 mb-4 italic">"The year-round engagement opportunities kept our brand top-of-mind with the CDAIO community."</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-bold">LOGO</span>
                      </div>
                      <div>
                        <p className="font-semibold">Enterprise AI Platform</p>
                        <p className="text-sm text-white/60">Content Partner 2024</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-white/20 rounded-lg px-6">
              <AccordionTrigger>What's the difference between Associate and Full Membership?</AccordionTrigger>
              <AccordionContent>
                Associate Membership is designed for emerging AI leaders and individual contributors, offering lifelong podcast access and a 25% discount on one summit ticket. Full Membership is for Chief Digital & AI Officers, providing all Associate benefits plus 25% discount on ALL summits for one year, peer mentorship, research reports, and enhanced networking opportunities.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border border-white/20 rounded-lg px-6">
              <AccordionTrigger>How long does the lifelong podcast access last?</AccordionTrigger>
              <AccordionContent>
                Lifelong means permanent access to our entire Intelligence in Action podcast library (500+ episodes) for as long as you maintain your membership. Even if you don't renew, you'll retain access to all episodes published during your membership period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border border-white/20 rounded-lg px-6">
              <AccordionTrigger>Can I upgrade from Associate to Full Membership?</AccordionTrigger>
              <AccordionContent>
                Yes! You can upgrade at any time. We'll prorate the cost based on the remaining months in your membership year. Contact us at hello@cognivia.ai to upgrade.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border border-white/20 rounded-lg px-6">
              <AccordionTrigger>What happens to my summit discount if I don't use it?</AccordionTrigger>
              <AccordionContent>
                For Associate Members, your 25% discount on one summit ticket is valid for any future Cognivia Summit - it never expires. For Full Members, you have unlimited 25% discounts on all summits during your one-year membership period.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border border-white/20 rounded-lg px-6">
              <AccordionTrigger>Can I customize a sponsorship package?</AccordionTrigger>
              <AccordionContent>
                Absolutely! While we offer Platinum, Gold, and Silver tiers, we're happy to create custom partnership packages that align with your specific marketing objectives and budget. Fill out the partnership form to start the conversation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="border border-white/20 rounded-lg px-6">
              <AccordionTrigger>What is the attendee profile at Cognivia events?</AccordionTrigger>
              <AccordionContent>
                85% of our attendees are C-level executives (CDOs, CAIOs, CTOs, CIOs), with the remaining 15% being VPs and Directors in AI and digital transformation roles. They represent organizations with $100M+ in annual revenue across technology, financial services, healthcare, retail, and manufacturing sectors.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/50 bg-primary/5 hover:border-primary transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Join as a Member</h3>
                <p className="text-white/70 mb-6">
                  Access lifelong learning, exclusive events, and a global network of AI leaders
                </p>
                <Button size="lg" onClick={() => scrollToSection('membership')}>
                  View Membership Plans
                </Button>
              </CardContent>
            </Card>
            <Card className="border-primary/50 bg-primary/5 hover:border-primary transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
                <p className="text-white/70 mb-6">
                  Connect with 10,000+ CDAIOs and position your brand as an AI innovation leader
                </p>
                <Button size="lg" onClick={() => scrollToSection('sponsorship')}>
                  Explore Sponsorship
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default JoinSponsorship;