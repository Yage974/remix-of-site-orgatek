import logo from "@/assets/logo-orgatek.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img src={logo} alt="ORGATEK" className="h-20 w-auto mb-6" />

          {/* Tagline */}
          <p className="text-muted-foreground text-sm mb-8">
            Conseil en Organisation & Structuration d'Entreprises
          </p>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Qui suis-je
            </a>
            <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Parcours
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Divider */}
          <div className="w-16 h-px bg-border mb-8" />

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © 2026 ORGATEK. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
