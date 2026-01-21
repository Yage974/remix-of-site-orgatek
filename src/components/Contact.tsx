import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#090909] relative">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Parlons de votre projet
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Vous avez un projet de transformation, de restructuration ou simplement 
            besoin d'un regard extérieur ? Contactez-moi pour en discuter.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email */}
          <a 
            href="mailto:yann.garnier@orgatek.fr"
            className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">
              Email
            </h3>
            <p className="text-muted-foreground text-sm break-all">
              yann.garnier@orgatek.fr
            </p>
          </a>

          {/* Phone */}
          <a 
            href="tel:+33767415105"
            className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">
              Téléphone
            </h3>
            <p className="text-muted-foreground text-sm">
              +33 (0)7 67 41 51 05
            </p>
          </a>
        </div>

        {/* Availability note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Disponible pour des missions en France et à l'International
          </p>
        </div>
      </div>

      {/* Section divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Contact;
