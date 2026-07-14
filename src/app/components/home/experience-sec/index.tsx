import React from "react";

const ExperienceSec = () => {
  const experiences = [
    {
      year: "Janv. - Juin 2024",
      title: "Inventoriste - Étalagiste",
      company: "Placidom",
      type: "Mission",
      tasks: [
        "Comptage et rangement de marchandises",
        "Scannage de référence et saisie de quantités",
        "Facing, nettoyage, remplissage de rayon",
      ],
    },
    {
      year: "Janvier 2024",
      title: "Création et Gestion de Contenu — Stage",
      company: "France Service",
      type: "Stage",
      tasks: [
        "Mise à jour de contenus",
        "Création de site sous WordPress avec DIVI",
        "Rédaction du cahier des charges",
      ],
    },
    {
      year: "2022 - 2024",
      title: "Travaux Pratiques en Développement Full-Stack",
      company: "École | AMEP Redoute",
      type: "Formation",
      tasks: [
        "Gestion de bases de données via MySQL et PHPMyAdmin",
        "Création de sites web avec PHP, JavaScript, HTML et CSS",
        "Réalisation d'applications web avec Laravel",
        "Développement d'applications desktop avec Java",
      ],
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-foreground pb-7 mb-9 md:mb-16">
            <h2>Expérience</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                <div className="">
                  <h3 className="font-bold mb-2 text-foreground">{exp.year}</h3>
                  <h4 className="text-lg font-normal">{exp.title}</h4>
                </div>

                <div className=" relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? "h-40" : "h-30"} bg-muted`}
                    ></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-background flex items-center justify-center ${
                        index === Math.floor(experiences.length / 2) ? "border-primary" : "border-foreground"
                      }`}
                    >
                      {index === Math.floor(experiences.length / 2) && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-foreground font-normal">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-base font-normal">{exp.type}</p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0">
                  <ul className="space-y-2">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed text-base text-muted-foreground">
                        <span className="text-primary mt-0.5">▹</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
