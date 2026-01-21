import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-orgatek.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isParcoursPage = location.pathname === "/parcours";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isParcoursPage) {
      e.preventDefault();
      window.location.href = `/${sectionId}`;
    }
  };

  const handleLogoClick = () => {
    if (isParcoursPage) {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          {isParcoursPage ? (
            <Link to="/" onClick={handleLogoClick}>
              <img src={logo} alt="ORGATEK" width={200} height={80} className="h-20 w-auto mb-6" />
            </Link>
          ) : (
            <a href="#">
              <img src={logo} alt="ORGATEK" width={200} height={80} className="h-20 w-auto mb-6" />
            </a>
          )}

          {/* Tagline */}
          <p className="text-muted-foreground text-sm mb-8">
            Conseil en Organisation & Structuration d'Entreprises
          </p>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {isParcoursPage ? (
              <>
                <a href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Qui suis-je
                </a>
                <Link to="/parcours" onClick={() => window.scrollTo(0, 0)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Parcours
                </Link>
                <a href="/#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
                <a href="/#method" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Méthode
                </a>
                <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </>
            ) : (
              <>
                <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Qui suis-je
                </a>
                <Link to="/parcours" onClick={() => window.scrollTo(0, 0)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Parcours
                </Link>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
                <a href="#method" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Méthode
                </a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </>
            )}
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
