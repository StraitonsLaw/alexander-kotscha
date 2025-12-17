import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Impressum = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container px-6 py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Zurück</span>
          </Link>

          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
            Impressum
          </h1>

          <address className="text-muted-foreground not-italic leading-relaxed space-y-1">
            <p className="font-medium text-foreground">DEVELOPMENT INSTITUTE LLC</p>
            <p>1209 MOUNTAIN ROAD PL NE</p>
            <p>ALBUQUERQUE, NM 87110</p>
          </address>
        </div>
      </div>
    </main>
  );
};

export default Impressum;
