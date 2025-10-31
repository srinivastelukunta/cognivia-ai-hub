import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Users, CheckCircle, XCircle, Calendar } from "lucide-react";
import StatsCard from "@/components/admin/StatsCard";
import SubscribersTable from "@/components/admin/SubscribersTable";
import ProtectedRoute from "@/components/admin/ProtectedRoute";
import { subWeeks } from "date-fns";

interface Subscriber {
  id: string;
  email: string;
  is_verified: boolean;
  is_media_professional: boolean;
  subscribed_at: string;
  verified_at: string | null;
}

const Admin = () => {
  const navigate = useNavigate();
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    fetchSubscribers();
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUserEmail(session.user.email || "");
      }
    });

    // Set up realtime subscription
    const channel = supabase
      .channel("newsletter_subscribers_changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "newsletter_subscribers",
        },
        () => {
          fetchSubscribers();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchSubscribers = async () => {
    try {
      const { data, error } = await supabase
        .from("newsletter_subscribers")
        .select("*")
        .order("subscribed_at", { ascending: false });

      if (error) throw error;

      setSubscribers(data || []);
    } catch (error) {
      console.error("Error fetching subscribers:", error);
      toast.error("Failed to load subscribers");
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error signing out");
    } else {
      toast.success("Signed out successfully");
      navigate("/");
    }
  };

  const handleDelete = (id: string) => {
    setSubscribers((prev) => prev.filter((sub) => sub.id !== id));
  };

  const totalSubscribers = subscribers.length;
  const verifiedSubscribers = subscribers.filter((s) => s.is_verified).length;
  const unverifiedSubscribers = totalSubscribers - verifiedSubscribers;
  const oneWeekAgo = subWeeks(new Date(), 1);
  const newThisWeek = subscribers.filter(
    (s) => new Date(s.subscribed_at) >= oneWeekAgo
  ).length;

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <header className="border-b">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
              <p className="text-sm text-muted-foreground">{userEmail}</p>
            </div>
            <Button onClick={handleSignOut} variant="outline">
              Sign Out
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading subscribers...</p>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                  title="Total Subscribers"
                  value={totalSubscribers}
                  icon={Users}
                  description="All newsletter subscribers"
                />
                <StatsCard
                  title="Verified"
                  value={verifiedSubscribers}
                  icon={CheckCircle}
                  description="Email verified subscribers"
                />
                <StatsCard
                  title="Unverified"
                  value={unverifiedSubscribers}
                  icon={XCircle}
                  description="Awaiting verification"
                />
                <StatsCard
                  title="New This Week"
                  value={newThisWeek}
                  icon={Calendar}
                  description="Last 7 days"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">All Subscribers</h2>
                <SubscribersTable
                  subscribers={subscribers}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default Admin;
