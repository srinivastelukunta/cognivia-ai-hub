import { useState } from "react";
import { format } from "date-fns";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteConfirmDialog from "./DeleteConfirmDialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Subscriber {
  id: string;
  email: string;
  is_verified: boolean;
  is_media_professional: boolean;
  subscribed_at: string;
  verified_at: string | null;
}

interface SubscribersTableProps {
  subscribers: Subscriber[];
  onDelete: (id: string) => void;
}

const SubscribersTable = ({ subscribers, onDelete }: SubscribersTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedSubscriber, setSelectedSubscriber] = useState<Subscriber | null>(null);
  const [deleting, setDeleting] = useState(false);

  const filteredSubscribers = subscribers.filter((sub) =>
    sub.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = (subscriber: Subscriber) => {
    setSelectedSubscriber(subscriber);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!selectedSubscriber) return;

    setDeleting(true);
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .delete()
        .eq("id", selectedSubscriber.id);

      if (error) throw error;

      toast.success(`Deleted subscriber: ${selectedSubscriber.email}`);
      onDelete(selectedSubscriber.id);
      setDeleteDialogOpen(false);
      setSelectedSubscriber(null);
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete subscriber");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          placeholder="Search by email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Email</TableHead>
              <TableHead>Verified</TableHead>
              <TableHead>Media Professional</TableHead>
              <TableHead>Subscribed</TableHead>
              <TableHead>Verified Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSubscribers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground">
                  {searchTerm ? "No subscribers found" : "No subscribers yet"}
                </TableCell>
              </TableRow>
            ) : (
              filteredSubscribers.map((subscriber) => (
                <TableRow key={subscriber.id}>
                  <TableCell className="font-medium">{subscriber.email}</TableCell>
                  <TableCell>
                    <Badge variant={subscriber.is_verified ? "default" : "secondary"}>
                      {subscriber.is_verified ? "Verified" : "Unverified"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={subscriber.is_media_professional ? "default" : "outline"}>
                      {subscriber.is_media_professional ? "Yes" : "No"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {format(new Date(subscriber.subscribed_at), "MMM d, yyyy")}
                  </TableCell>
                  <TableCell>
                    {subscriber.verified_at
                      ? format(new Date(subscriber.verified_at), "MMM d, yyyy")
                      : "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDeleteClick(subscriber)}
                      disabled={deleting}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {selectedSubscriber && (
        <DeleteConfirmDialog
          open={deleteDialogOpen}
          onOpenChange={setDeleteDialogOpen}
          onConfirm={handleDeleteConfirm}
          email={selectedSubscriber.email}
        />
      )}
    </div>
  );
};

export default SubscribersTable;
