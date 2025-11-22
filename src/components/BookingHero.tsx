import { Calendar, Video, Shield } from "lucide-react";
import logo from "@/assets/vidit-logo.png";

export const BookingHero = () => {
  return (
    <section className="relative overflow-hidden bg-chess-dark py-20 px-4 sm:px-6 lg:px-8">
      {/* Chess pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 35px,
            hsl(var(--chess-gold)) 35px,
            hsl(var(--chess-gold)) 70px
          )`,
        }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <img src={logo} alt="Vidit Chess" className="h-16 sm:h-20 drop-shadow-2xl" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-chess-light mb-6 drop-shadow-lg">
          Book Your Chess Consultation
        </h1>

        <p className="text-lg sm:text-xl text-chess-light/80 mb-12 max-w-2xl mx-auto">
          Get personalized chess coaching in a 1-on-1 video session. Connect your Solana wallet and secure your spot.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-chess-light/5 rounded-lg backdrop-blur-sm border border-chess-gold/20 hover:border-chess-gold/40 transition-all hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-chess-gold/20 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-chess-gold" />
            </div>
            <h3 className="font-semibold text-chess-light mb-2">Secure Payment</h3>
            <p className="text-sm text-chess-light/70">Pay with Solana wallet</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-chess-light/5 rounded-lg backdrop-blur-sm border border-chess-gold/20 hover:border-chess-gold/40 transition-all hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-chess-gold/20 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-chess-gold" />
            </div>
            <h3 className="font-semibold text-chess-light mb-2">Flexible Slots</h3>
            <p className="text-sm text-chess-light/70">Choose your time</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-chess-light/5 rounded-lg backdrop-blur-sm border border-chess-gold/20 hover:border-chess-gold/40 transition-all hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-chess-gold/20 flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-chess-gold" />
            </div>
            <h3 className="font-semibold text-chess-light mb-2">1-on-1 Session</h3>
            <p className="text-sm text-chess-light/70">Personal guidance</p>
          </div>
        </div>
      </div>
    </section>
  );
};
