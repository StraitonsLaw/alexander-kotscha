import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import alexanderPhoto from "@/assets/alexander-kotscha.png";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container relative z-10 px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Warning badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10 text-primary animate-fade-in"
              style={{ animationDelay: '0.1s', opacity: 0 }}
            >
              <AlertTriangle className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide uppercase">Warnung</span>
            </div>

            {/* Main headline */}
            <h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 animate-fade-in"
              style={{ animationDelay: '0.2s', opacity: 0 }}
            >
              Alexander Kotscha
            </h1>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in"
              style={{ animationDelay: '0.3s', opacity: 0 }}
            >
              Gründer von <span className="text-foreground font-medium">Exclusive Investments</span> mit Rares Drescher
            </p>

            {/* Portrait */}
            <div 
              className="relative inline-block animate-fade-in"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent animate-pulse-glow" />
                <img
                  src={alexanderPhoto}
                  alt="Alexander Kotscha"
                  className="relative w-full h-full object-cover rounded-full border-2 border-primary/20 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            {/* Scroll indicator */}
            <div 
              className="mt-16 animate-fade-in"
              style={{ animationDelay: '0.6s', opacity: 0 }}
            >
              <div className="w-px h-16 mx-auto bg-gradient-to-b from-transparent via-muted-foreground/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container px-6">
          <div className="max-w-3xl mx-auto">
            {/* Section header */}
            <div className="mb-12 text-center">
            <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
                Alexander Kotscha
              </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                Meine Denkweise als Visionär
              </h2>
            </div>

            {/* Quote/Biography */}
            <blockquote className="relative">
              {/* Quote mark */}
              <div className="absolute -top-8 -left-4 text-8xl text-primary/10 font-serif select-none">
                „
              </div>

              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground italic pl-8 border-l-2 border-primary/30">
                <p>
                  Ich habe früh gemerkt, dass ich Menschen mit meiner Art leicht begeistern kann. Ich wirke selbstbewusst, glänze mit großen Visionen und weiß, wie ich ein Gefühl von Exklusivität erschaffe. Viele wollen dazugehören – und ich nutze das aus.
                </p>
                
                <p>
                  Tief in mir steckt ein ständiger Drang nach mehr: mehr Anerkennung, mehr Erfolg, mehr Geschwindigkeit. Ich brauche das Gefühl, außergewöhnlich zu sein, über den Dingen zu stehen. Ein echtes, langfristiges Geschäft aufzubauen wäre mühsam und würde mir die Ungeduld rauben. Also erschaffe ich lieber etwas, das groß aussieht, aber innen leer ist.
                </p>
                
                <p>
                  Ich erzähle mir selbst, dass die Leute doch freiwillig investieren. Wenn sie mir glauben wollen, ist das schließlich nicht mein Problem. Diese Selbstrechtfertigung hält mein Gewissen ruhig. Ich rede mir ein, dass ich einfach nur „cleverer" sei als die anderen und dass der Schein wichtiger ist als die Substanz.
                </p>
                
                <p>
                  Nach außen spiele ich Coolness. Ich tue so, als sei alles unter Kontrolle, und wenn jemand Zweifel äußert, übergehe ich das lächelnd. Die Rolle des erfolgreichen Visionärs gibt mir ein Gefühl von Macht. Ich weiß, dass es ein Spiel ist – ein riskantes – aber es hält mich lebendig. Die Wahrheit zuzugeben würde bedeuten, mein ganzes Konstrukt einstürzen zu lassen. Und davor habe ich mehr Angst als davor, Menschen zu enttäuschen oder zu betrügen.
                </p>
              </div>
            </blockquote>

            {/* Disclaimer */}
            <div className="mt-16 p-6 rounded-lg bg-card border border-border">
              <p className="text-sm text-muted-foreground text-center">
                <span className="text-primary font-medium">Hinweis:</span> Diese Seite dient der Aufklärung und Warnung vor fragwürdigen Geschäftspraktiken. 
                Recherchieren Sie sorgfältig, bevor Sie investieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container px-6">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} · Alexander Kotscha
            </p>
            <Link 
              to="/impressum" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Impressum
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;