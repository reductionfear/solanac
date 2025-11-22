-- Create bookings table to store all meeting information
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  wallet_address TEXT NOT NULL,
  transaction_signature TEXT NOT NULL,
  selected_slot TEXT NOT NULL,
  amount_sol NUMERIC NOT NULL,
  google_meet_url TEXT NOT NULL,
  booking_status TEXT NOT NULL DEFAULT 'confirmed',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert bookings (public booking system)
CREATE POLICY "Anyone can create bookings"
ON public.bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create policy to allow anyone to view bookings (for admin page)
CREATE POLICY "Anyone can view bookings"
ON public.bookings
FOR SELECT
TO anon, authenticated
USING (true);

-- Create index for faster queries
CREATE INDEX idx_bookings_created_at ON public.bookings(created_at DESC);