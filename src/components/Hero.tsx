import logo from "@/assets/logo-orgatek.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent blur-3xl" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo - LCP element, no lazy loading, high priority, no animation delay */}
          <div className="mb-8">
            <img 
              src={logo} 
              alt="ORGATEK - Organiser pour Performer" 
              width={400}
              height={240}
              className="h-40 md:h-52 lg:h-60 w-auto mx-auto"
              loading="eager"
              decoding="sync"
              fetchPriority="high"
            />
          </div>

          {/* Main headline */}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Conseil en{" "}
            <span className="text-gradient-silver">Organisation</span> &{" "}
            <span className="text-gradient-silver">Structuration</span>{" "}
            d'Entreprises
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            + de 25 ans d'expérience en direction industrielle et direction générale au service 
            de la performance de votre entreprise
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href="#about"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            >
              Découvrir mon parcours
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-primary text-foreground font-medium rounded-md hover:bg-primary/10 transition-all duration-200"
            >
              Me contacter
            </a>
          </div>

          {/* Target audience badge */}
          <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-sm text-muted-foreground uppercase tracking-widest">
              Entreprises industrielles • France & International
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
