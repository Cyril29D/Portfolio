import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-muted py-10 md:py-32">
        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-foreground pb-7">
              <h2>À propos</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                  Actuellement en MSc Architecte de Systèmes d&apos;Information à
                  Epitech (2025-2028), issu d&apos;un BTS SIO option SLAM. Rigoureux
                  et curieux, je m&apos;intéresse aussi bien au développement
                  (full-stack) qu&apos;au DevOps et à l&apos;intelligence artificielle.
                  Je recherche une alternance pour mettre en pratique mes acquis,
                  monter en compétences sur ces domaines et contribuer à des
                  projets innovants.
                </p>

                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-border">
                  {[
                    { count: "3+", label: "Années d'études" },
                    { count: "5+", label: "Projets réalisés" },
                    { count: "8", label: "Technologies maîtrisées" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-foreground">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src="/images/icon/lang-icon.svg"
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-foreground">Langues</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["Français", "Anglais"].map((lang, index) => (
                      <Badge key={index} className="h-full bg-card rounded-full">
                        <p className="bg-card py-2 md:py-3.5 px-4 md:px-5 text-base xl:text-xl text-muted-foreground">
                          {lang}
                        </p>
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
