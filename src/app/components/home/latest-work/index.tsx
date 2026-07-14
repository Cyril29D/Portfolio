"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/work-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projets" className="scroll-mt-24">
      <div className="bg-muted">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex items-center justify-between gap-2 border-b border-foreground pb-7 mb-9 md:mb-16">
              <h2>Projets</h2>
              <p className="text-xl text-primary">( 04 )</p>
            </div>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6 -ml-0">
                {workData?.map((value: any, index: any) => {
                  const CardInner = (
                    <>
                      <div className="relative">
                        {value?.image ? (
                          <Image
                            src={value.image}
                            alt={value?.title}
                            width={570}
                            height={414}
                            className="rounded-lg w-full h-60 xl:h-72 object-cover"
                          />
                        ) : (
                          <div className="rounded-lg w-full h-60 xl:h-72 bg-card border border-border flex items-center justify-center">
                            <span className="text-5xl font-semibold text-muted-foreground">
                              {value?.title?.charAt(0)}
                            </span>
                          </div>
                        )}
                        {value?.url && (
                          <span className="absolute top-0 left-0 backdrop-blur-xs bg-primary/15 w-full h-full hidden group-hover:flex rounded-lg">
                            <span className="flex justify-center items-center p-5 w-full">
                              <svg
                                width="65"
                                height="64"
                                viewBox="0 0 65 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  x="0.333374"
                                  width="64"
                                  height="64"
                                  rx="32"
                                  fill="var(--primary)"
                                />
                                <path
                                  d="M25.6667 25.3333H39M39 25.3333V38.6666M39 25.3333L25.6667 38.6666"
                                  stroke="#FFFF"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 xl:gap-3">
                        <div className="flex items-center justify-between gap-2">
                          <h5>{value?.title}</h5>
                          {value?.url && (
                            <Image
                              src={"/images/icon/right-arrow-icon.svg"}
                              alt="right-arrow-icon"
                              width={30}
                              height={30}
                            />
                          )}
                        </div>
                        <p>{value?.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {value?.tech?.map((t: string, i: number) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-card rounded-md text-xs text-muted-foreground border border-border"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{value?.period}</p>
                      </div>
                    </>
                  );

                  return (
                    <div
                      key={index}
                      className="group flex flex-col gap-3 xl:gap-6 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3"
                    >
                      {value?.url ? (
                        <Link
                          href={value.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col gap-3 xl:gap-6"
                        >
                          {CardInner}
                        </Link>
                      ) : (
                        CardInner
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-between gap-6 mt-9 xl:mt-14">
              <div className="flex items-center gap-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    aria-label={`Aller au projet ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      index === selectedIndex
                        ? "w-6 bg-primary"
                        : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  aria-label="Projet précédent"
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  aria-label="Projet suivant"
                  className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
