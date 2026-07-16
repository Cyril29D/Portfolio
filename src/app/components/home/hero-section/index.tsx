import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <p className="mb-4 w-fit rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Disponible pour une alternance
              </p>
              <div className="flex items-center gap-8">
                <h1>Cyril Delly</h1>
                <div className="wave">
                  <Image
                    src={"/images/home/banner/wave-icon.svg"}
                    alt="Main qui salue"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              <h1>MSc Architecte de systèmes d’information</h1>
            </div>
            <p className="text-muted-foreground font-normal max-w-md xl:max-w-xl">
              MSc Architecte de systèmes d’information à Epitech. À la
              recherche d’une alternance en développement full-stack, DevOps
              ou IA.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#projets"
                data-umami-event="Voir mes projets"
                className="rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-85"
              >
                Voir mes projets
              </Link>
              <Link
                href="#contact"
                data-umami-event="Me contacter"
                className="rounded-full border border-primary px-5 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Me contacter
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-sm mx-auto lg:mx-0 lg:justify-self-end">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src={"/images/home/banner-photo/profile.jpg"}
                alt="Cyril Delly"
                fill
                sizes="(max-width: 1024px) 320px, 380px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
