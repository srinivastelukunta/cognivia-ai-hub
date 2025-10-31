import { Button } from "@/components/ui/button";
import { Target, Trophy, Mic, FileText, Rocket, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

const Header = () => {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdminStatus(session.user.id);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setTimeout(() => checkAdminStatus(session.user.id), 0);
      } else {
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminStatus = async (userId: string) => {
    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .eq("role", "admin")
      .single();
    
    setIsAdmin(!!data);
  };
  
  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-6 border-b border-white/10 sticky top-0 bg-[hsl(205,67%,16%)]/90 backdrop-blur-md z-50">
      <div className="flex items-center space-x-3">
        <Link to="/">
          <img src="/cognivian-logo.png" alt="Cognivian Logo" className="h-10 w-auto" />
        </Link>
      </div>
      <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-semibold tracking-wide">
        <Link 
          to="/" 
          className={isActive("/") ? "text-primary" : "hover:text-primary transition-colors"}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={isActive("/about") ? "text-primary" : "hover:text-primary transition-colors"}
        >
          About
        </Link>
        <Link 
          to="/join" 
          className={isActive("/join") ? "text-primary" : "hover:text-primary transition-colors"}
        >
          Join/Sponsorship
        </Link>
        <Link 
          to="/press" 
          className={isActive("/press") ? "text-primary" : "hover:text-primary transition-colors"}
        >
          Press
        </Link>
        {isAdmin && (
          <Link 
            to="/admin" 
            className={isActive("/admin") ? "text-primary" : "hover:text-primary transition-colors"}
          >
            Admin
          </Link>
        )}
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
          <a href="/papers" className="flex items-center gap-1.5">
            <FileText className="w-4 h-4" />
            Papers
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
        {user && !isActive("/auth") && !isActive("/admin") && (
          <Button 
            variant="ghost" 
            size="sm" 
            asChild 
            className="text-primary/80 hover:text-primary hover:bg-primary/10 border border-primary/20"
          >
            <Link to="/admin" className="flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              Dashboard
            </Link>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;