import { Target, TrendingUp, Users, Settings } from "lucide-react";

const competences = [
  {
    icon: Users,
    title: "Management de CODIR",
    description: "Animation et leadership d'équipes de direction multiculturelles et pluridisciplinaires"
  },
  {
    icon: TrendingUp,
    title: "Transformation Organisationnelle",
    description: "Conduite du changement et structuration d'entreprises pour une performance durable"
  },
  {
    icon: Settings,
    title: "Excellence Opérationnelle",
    description: "Déploiement Lean Manufacturing, optimisation des processus et amélioration continue"
  },
  {
    icon: Target,
    title: "Gouvernance PME/ETI/Groupes",
    description: "Structuration et pilotage stratégique adaptés à chaque taille d'organisation"
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            À propos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Qui suis-je
          </h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Intro */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Yann Garnier
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Fort de + de 25 ans d'expérience en <strong className="text-foreground">direction industrielle et direction générale</strong>, 
                j'accompagne les entreprises dans leur transformation organisationnelle et leur quête de performance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Mon parcours m'a conduit à diriger des sites industriels en France et à l'international, 
                avec des équipes allant jusqu'à 1 500 collaborateurs et des chiffres d'affaires de plusieurs 
                centaines de millions d'euros.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ingénieur ENIBe (École Nationale d'Ingénieurs de Belfort) et diplômé de l'EDHEC Business School 
                (Executive Certificate in Advanced Strategic Management), je combine expertise technique et vision stratégique pour des résultats concrets.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-center">
                    <span className="text-4xl font-display font-bold text-gradient-silver">+25</span>
                    <p className="text-sm text-muted-foreground mt-2">Années d'expérience</p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-center">
                    <span className="text-4xl font-display font-bold text-gradient-silver">1500</span>
                    <p className="text-sm text-muted-foreground mt-2">Collaborateurs managés</p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-center">
                    <span className="text-4xl font-display font-bold text-gradient-silver">4</span>
                    <p className="text-sm text-muted-foreground mt-2">Continents</p>
                  </div>
                  <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-center">
                    <span className="text-4xl font-display font-bold text-gradient-silver">+100M€</span>
                    <p className="text-sm text-muted-foreground mt-2">CA piloté</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Competences */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competences.map((comp, index) => (
              <div 
                key={comp.title}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <comp.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-display font-semibold text-foreground mb-2">
                  {comp.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default About;
