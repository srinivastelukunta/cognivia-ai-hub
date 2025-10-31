import { Button } from "@/components/ui/button";
import { Target, Trophy, Mic, FileText, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 px-4 md:px-8 border-t border-white/10 bg-[hsl(205,67%,16%)]">
      <div className="flex flex-col items-start max-w-6xl mx-auto gap-6">
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src="/cognivian-logo.png" alt="Cognivian Logo" className="h-8 w-auto" />
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-3 md:gap-4 text-sm">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/join" className="hover:text-primary transition-colors">Join/Sponsorship</Link>
          <Link to="/press" className="hover:text-primary transition-colors">Press</Link>
          <span className="text-white/20">|</span>
          <Button variant="ghost" size="sm" asChild className="text-primary/80 hover:text-primary hover:bg-primary/10 border border-primary/20 h-8">
            <a href="https://summit.cognivian.ai" className="flex items-center gap-1.5">
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
            <a href="/papers" className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              Papers
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
          © 2025 Cognivian.ai · <a href="/conduct" className="hover:text-primary">Code of Conduct</a> · <a href="/accessibility" className="hover:text-primary">Accessibility</a> · <a href="/privacy" className="hover:text-primary">Privacy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;