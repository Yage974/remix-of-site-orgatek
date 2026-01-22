import { Link } from "react-router-dom";
import { 
  Target, 
  Users, 
  Settings, 
  BarChart3, 
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoOrga360 from "@/assets/logo-orga360.png";

const pillars = [
  {
    icon: Target,
    title: "Gouvernance et prise de décision",
    description: "Analyse des rôles décisionnels, des circuits d'arbitrage et du niveau d'autonomie."
  },
  {
    icon: Users,
    title: "Organisation et répartition des rôles",
    description: "Clarté des responsabilités, cohérence de la structure et maîtrise des interfaces."
  },
  {
    icon: Settings,
    title: "Processus et fonctionnement opérationnel",
    description: "Fluidité des processus clés, dépendances aux personnes et points de blocage."
  },
  {
    icon: BarChart3,
    title: "Pilotage et indicateurs de performance",
    description: "Indicateurs réellement utiles à la décision et capacité d'anticipation."
  },
  {
    icon: MessageSquare,
    title: "Communication et coordination",
    description: "Circulation de l'information, alignement des équipes et partage des priorités."
  }
];

const offers = [
  {
    name: "ORGA360™ Start",
    description: "Diagnostic organisationnel rapide pour retrouver de la lisibilité et clarifier les priorités.",
    icon: Sparkles
  },
  {
    name: "ORGA360™ Growth",
    description: "Structuration de l'organisation pour accompagner la croissance et renforcer le pilotage.",
    icon: TrendingUp
  },
  {
    name: "ORGA360™ Premium",
    description: "Diagnostic approfondi pour sécuriser les décisions stratégiques et les transformations majeures.",
    icon: Shield
  }
];

const benefits = [
  "Mieux comprendre son organisation",
  "Prendre des décisions plus rapides et plus justes",
  "Structurer durablement l'entreprise",
  "Réduire la charge mentale",
  "Améliorer la performance globale"
];

const Method = () => {
  return (
    <section id="method" className="py-24 bg-[#090909] relative">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Méthode exclusive
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
            Ma Méthode
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8" />
          
          {/* Logo ORGA360 */}
          <div className="flex justify-center mb-8">
            <img 
              src={logoOrga360} 
              alt="ORGA360™ - Méthode de diagnostic organisationnel" 
              className="h-24 md:h-36 lg:h-42 w-auto"
              width={420}
              height={168}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">ORGA360™</strong> est une méthode de diagnostic organisationnel 
              développée par <strong className="text-foreground">ORGATEK™</strong> pour les dirigeants de PME 
              qui souhaitent structurer leur organisation, améliorer leur performance et sécuriser leurs décisions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cette méthode permet de prendre du recul sur l'organisation de l'entreprise, d'identifier 
              les véritables leviers d'amélioration et de décider sur des bases claires et objectives.
            </p>
            <p className="text-primary font-medium mt-4 italic">
              "Voir clair dans son organisation est souvent la première étape avant toute transformation."
            </p>
          </div>

          {/* Why section */}
          <div className="bg-card rounded-xl p-8 mb-16 border border-border">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
              Pourquoi le diagnostic organisationnel devient<br />un enjeu stratégique
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              Avec la croissance de l'entreprise, l'organisation évolue plus lentement que l'activité.<br />
              Les conséquences les plus fréquentes sont : décisions plus lentes, responsabilités floues, 
              surcharge du dirigeant, tensions internes.
            </p>
            <p className="text-foreground font-medium text-center">
              Dans la majorité des cas, il ne s'agit pas d'un problème de compétences ou de management,<br />
              mais d'un problème d'organisation.
            </p>
            <div className="mt-6 p-4 bg-background rounded-lg border border-primary/30">
              <p className="text-center text-primary font-medium">
                ORGA360™ repose sur un principe simple : on ne peut pas améliorer durablement 
                la performance d'une entreprise sans comprendre précisément son organisation réelle.
              </p>
            </div>
            <div className="text-center mt-6">
              <a href="#contact">
                <Button className="gap-2">
                  Faire le point sur votre organisation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* 5 Pillars */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4 text-center">
              Les 5 piliers de la méthode ORGA360™
            </h3>
            <div className="flex justify-center mb-6">
              <img 
                src={logoOrga360} 
                alt="ORGA360™" 
                className="h-16 md:h-20 lg:h-24 w-auto"
                width={240}
                height={96}
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              La méthode ORGA360™ analyse l'organisation de l'entreprise à travers cinq piliers 
              complémentaires et indissociables.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <div 
                  key={pillar.title}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <pillar.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-3xl font-display font-bold text-primary/30">{index + 1}</span>
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-primary font-medium mt-8 italic">
              "Agir sur un seul pilier ne suffit pas : la performance organisationnelle est systémique."
            </p>
          </div>

          {/* Offers */}
          <div className="mb-16">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
              Trois niveaux d'accompagnement
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {offers.map((offer) => (
                <div 
                  key={offer.name}
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 text-center group"
                >
                  <offer.icon className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-display font-semibold text-foreground mb-3">
                    {offer.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {offer.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Chaque entreprise bénéficie du niveau d'accompagnement le plus pertinent à son contexte.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-card rounded-xl p-8 mb-16 border border-border">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
              Les bénéfices d'un diagnostic ORGA360™
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 italic">
              "La méthode ne décide pas à la place du dirigeant. Elle lui apporte un cadre clair pour décider."
            </p>
          </div>

        </div>
      </div>

      {/* Section divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Method;
