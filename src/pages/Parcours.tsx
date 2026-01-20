import { Link } from "react-router-dom";
import { Building2, Calendar, MapPin, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    period: "2020 - 2026",
    company: "Tech Power Electronics",
    role: "Directeur Général",
    roleSecondLine: "et Président depuis 2023",
    location: "France",
    description: "Direction générale d'une ETI spécialisée dans l'électronique de puissance. Structuration et retour à la profitabilité.",
    achievements: [
      "Transformation organisationnelle",
      "Mise en place d'un CODIR performant",
      "Développement de nouveaux marchés"
    ]
  },
  {
    period: "2018 - 2019",
    company: "Tereos",
    role: "Directeur Industriel",
    location: "Ile de la Réunion",
    description: "Direction industrielle de sites de production agroalimentaire. Optimisation des processus et amélioration de la performance.",
    achievements: [
      "Déploiement Lean Manufacturing",
      "Réduction des coûts de production",
      "Amélioration de la qualité produit"
    ]
  },
  {
    period: "2014 - 2018",
    company: "Groupe Basan",
    role: "Directeur Industriel",
    location: "Madagascar",
    description: "Direction industrielle dans un contexte international multiculturel. Gestion de sites de production et développement des équipes locales.",
    achievements: [
      "Management de 1 500 collaborateurs",
      "Développement des compétences locales",
      "Amélioration de la productivité"
    ]
  },
  {
    period: "2009 - 2014",
    company: "V33",
    role: "Directeur Industriel",
    location: "France",
    description: "Direction industrielle groupe pour ce leader européen des peintures et lasures. Pilotage de plusieurs sites de production.",
    achievements: [
      "Transformation technologique",
      "Augmentation des capacités de production",
      "Excellence opérationnelle"
    ]
  },
  {
    period: "2003 - 2009",
    company: "Michelin",
    role: "Directeur de site",
    roleSecondLine: "puis Responsable Industriel",
    location: "Brésil & France",
    description: "Évolution au sein du groupe Michelin de directeur de site à responsable industriel. Management d'équipes multiculturelles et pluridisciplinaires.",
    achievements: [
      "Gestion de sites de production",
      "Déploiement des standards groupe",
      "Formation et développement des équipes"
    ]
  }
];

const Parcours = () => {
  return (
    <div className="min-h-screen bg-background dark">
      <Header />
      <main className="pt-24">
        <section className="py-24 bg-card relative">
          <div className="container mx-auto px-6">
            {/* Back button */}
            <div className="mb-8">
              <Link to="/#about">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Retour
                </Button>
              </Link>
            </div>

            {/* Section header */}
            <div className="text-center mb-16">
              <span className="text-sm font-medium text-primary uppercase tracking-widest">
                Expérience
              </span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Mon Parcours Professionnel
              </h1>
              <div className="w-16 h-px bg-primary mx-auto" />
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

              {experiences.map((exp, index) => (
                <div 
                  key={exp.company}
                  className={`relative mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-background ${
                    index % 2 === 0 ? 'left-0 md:left-1/2 md:-translate-x-1/2' : 'left-0 md:left-1/2 md:-translate-x-1/2'
                  }`} />

                  {/* Content card */}
                  <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
                      {/* Period */}
                      <div className={`flex items-center gap-2 text-sm text-primary mb-3 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>

                      {/* Company & Role */}
                      <div className="mb-3">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {exp.role}
                          {exp.roleSecondLine && <span className="block text-lg font-medium">{exp.roleSecondLine}</span>}
                        </h3>
                        <div className={`flex items-center gap-2 text-muted-foreground mt-1 ${
                          index % 2 === 0 ? 'md:justify-end' : ''
                        }`}>
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                          <span className="text-border">•</span>
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <ul className={`space-y-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        {exp.achievements.map((achievement) => (
                          <li 
                            key={achievement} 
                            className={`text-sm text-foreground/80 flex items-center gap-2 ${
                              index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA to go back */}
            <div className="text-center mt-16">
              <Link to="/#about">
                <Button variant="outline" size="lg" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Retour à l'accueil
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Parcours;
