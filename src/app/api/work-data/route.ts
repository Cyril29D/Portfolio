import { NextResponse } from "next/server";

const workData = [
  {
    title: "TalkMe — Plateforme de conversation",
    description: "Application de messagerie instantanée en temps réel, avec gestion de comptes, serveurs et salons.",
    period: "2026",
    tech: ["Next.js", "Nest", "Socket.io", "Supabase", "Prisma"],
    slug: "talkme"
  },
  {
    title: "MY_MARVIN — Jenkins as Code",
    description: "Projet DevOps configurant une instance Jenkins entièrement par le code, sans action manuelle.",
    period: "2025",
    tech: ["Jenkins", "Groovy", "Docker", "Git"],
    image: "/images/work/my-marvin.png",
    slug: "my-marvin"
  },
  {
    title: "Neozik — Jeu de rythme",
    description: "Jeu de rythme à défilement vertical développé en Java avec libGDX, en équipe de 3, dans le cadre de la Pre-MSc à Epitech.",
    period: "2025",
    tech: ["Java", "libGDX", "Gradle"],
    image: "/images/work/neozik.png",
    url: "https://github.com/Cyril29D/Neozik",
    slug: "neozik"
  },
  {
    title: "Pendu — Jeu dans le terminal",
    description: "Jeu du pendu en ligne de commande développé en Python, dans le cadre de la Pre-MSc à Epitech.",
    period: "2025",
    tech: ["Python"],
    image: "/images/work/pendu-terminal.png",
    slug: "pendu"
  },
  {
    title: "Job Board — Offres d'emploi",
    description: "Plateforme web de publication et recherche d'offres d'emploi, avec recherche et filtrage avancés.",
    period: "2025",
    tech: ["React", "PostgreSQL", "Tailwind CSS"],
    image: "/images/work/myjob.png",
    url: "https://github.com/Cyril29D/MesAnimes_Laravel",
    slug: "job-board"
  }
];

export const GET = async () => {
  return NextResponse.json({
    workData
  });
};
