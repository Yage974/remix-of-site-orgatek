import { Network, RefreshCcw, BarChart3, Compass } from "lucide-react";

const services = [
  {
    icon: Network,
    title: "Structuration Organisationnelle",
    description: "Conception et mise en place de structures organisationnelles adaptées à vos enjeux. Définition des rôles, responsabilités et processus clés pour une entreprise efficiente.",
    features: [
      "Audit organisationnel",
      "Design de structures",
      "Définition des processus",
      "Clarification des rôles"
    ]
  },
  {
    icon: RefreshCcw,
    title: "Transformation & Conduite du Changement",
    description: "Accompagnement dans vos projets de transformation. Pilotage du changement avec une approche humaine et méthodique pour une adoption réussie.",
    features: [
      "Stratégie de transformation",
      "Plan de conduite du changement",
      "Communication interne",
      "Accompagnement des équipes"
    ]
  },
  {
    icon: BarChart3,
    title: "Performance Industrielle",
    description: "Amélioration de la performance opérationnelle par le déploiement de méthodologies éprouvées : Lean Manufacturing, amélioration continue, excellence opérationnelle.",
    features: [
      "Diagnostic performance",
      "Déploiement Lean",
      "Optimisation des flux",
      "Indicateurs et pilotage"
    ]
  },
  {
    icon: Compass,
    title: "Accompagnement de Dirigeants",
    description: "Conseil et accompagnement personnalisé des dirigeants dans leurs prises de décision stratégiques. Sparring partner pour les moments clés.",
    features: [
      "Coaching de direction",
      "Animation CODIR",
      "Aide à la décision",
      "Vision stratégique"
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Mes Services
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un accompagnement sur-mesure pour répondre aux défis de votre entreprise,<br />
            de l'audit initial jusqu'à la mise en œuvre opérationnelle.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group p-8 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Section divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Services;
