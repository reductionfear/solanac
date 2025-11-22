import { SolanaWalletProvider } from "@/components/SolanaWalletProvider";
import { BookingHero } from "@/components/BookingHero";
import { BookingFlow } from "@/components/BookingFlow";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <SolanaWalletProvider>
      <div className="min-h-screen flex flex-col">
        <BookingHero />
        <BookingFlow />
        <Footer />
      </div>
    </SolanaWalletProvider>
  );
};

export default Index;
