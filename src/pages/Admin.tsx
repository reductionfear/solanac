import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Loader2 } from "lucide-react";
import { format } from "date-fns";

interface Booking {
  id: string;
  wallet_address: string;
  transaction_signature: string;
  selected_slot: string;
  amount_sol: number;
  google_meet_url: string;
  booking_status: string;
  created_at: string;
}

export default function Admin() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching bookings:", error);
    } else {
      setBookings(data || []);
    }
    setLoading(false);
  };

  const isPastMeeting = (slot: string) => {
    try {
      const slotDate = new Date(slot);
      return slotDate < new Date();
    } catch {
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <Card className="max-w-7xl mx-auto">
        <CardHeader>
          <CardTitle className="font-display text-3xl">Admin Dashboard</CardTitle>
          <CardDescription>Track all chess consultation bookings</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : bookings.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No bookings yet
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date Booked</TableHead>
                    <TableHead>Meeting Time</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Wallet Address</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Transaction</TableHead>
                    <TableHead>Meet Link</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>
                        {format(new Date(booking.created_at), "MMM dd, yyyy HH:mm")}
                      </TableCell>
                      <TableCell className="font-medium">
                        {booking.selected_slot}
                      </TableCell>
                      <TableCell>
                        <Badge variant={isPastMeeting(booking.selected_slot) ? "secondary" : "default"}>
                          {isPastMeeting(booking.selected_slot) ? "Past" : "Upcoming"}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-mono text-xs">
                        {booking.wallet_address.slice(0, 8)}...{booking.wallet_address.slice(-8)}
                      </TableCell>
                      <TableCell>{booking.amount_sol} SOL</TableCell>
                      <TableCell className="font-mono text-xs">
                        <a
                          href={`https://explorer.solana.com/tx/${booking.transaction_signature}?cluster=mainnet-beta`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {booking.transaction_signature.slice(0, 8)}...
                        </a>
                      </TableCell>
                      <TableCell>
                        <a
                          href={booking.google_meet_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm"
                        >
                          Open
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
