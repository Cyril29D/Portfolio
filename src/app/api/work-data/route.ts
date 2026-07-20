import { NextResponse } from "next/server";

const workData = [
  {
    title: "TalkMe — Plateforme de conversation",
    description: "Application de messagerie instantanée en temps réel, avec gestion des comptes, des serveurs et des salons.",
    period: "2026",
    tech: ["Next.js", "Nest", "Socket.io", "Supabase", "Prisma"],
    images: [
      "/images/work/talkme-home.png",
      "/images/work/talkme-dashboard.png"
    ],
    url: "https://github.com/Cyril29D/TalkMe",
    slug: "talkme"
  },
  {
    title: "Bernstein — Orchestration Kubernetes",
    description: "Orchestration Kubernetes d’une application de vote multiservice. Contribution : déploiement de Traefik, RBAC, service NodePort et anti-affinité pour la haute disponibilité.",
    period: "2026",
    tech: ["Kubernetes", "Traefik", "Docker", "YAML", "cAdvisor"],
    image: "/images/work/bernstein-kubernetes.png",
    url: "https://github.com/Cyril29D/Bernstein",
    slug: "bernstein"
  },
  {
    title: "AgentMerchant — Plateforme commerciale intelligente",
    description: "Application d’assistance commerciale pour agents et marchands, avec gestion des produits, des commandes et des paiements.",
    period: "2026",
    tech: ["Next.js", "TypeScript", "Node.js", "Stripe", "Tailwind CSS"],
    image: "/images/work/work-img-6.jpg",
    url: "https://github.com/Cyril29D/AgentMerchant",
    slug: "agent-merchant"
  },
  {
    title: "MY_MARVIN — Jenkins as Code",
    description: "Projet DevOps configurant une instance Jenkins entièrement par le code, sans action manuelle.",
    period: "2025",
    tech: ["Jenkins", "Groovy", "Docker", "Git"],
    image: "/images/work/my-marvin.png",
    url: "https://github.com/Cyril29D/My_Marvin",
    slug: "my-marvin"
  },
  {
    title: "Neozik — Jeu de rythme",
    description: "Jeu de rythme à défilement vertical développé en Java avec libGDX, en équipe de trois, dans le cadre de la Pré-MSc à Epitech.",
    period: "2025",
    tech: ["Java", "libGDX", "Gradle"],
    image: "/images/work/neozik.png",
    url: "https://github.com/Cyril29D/Neozik",
    slug: "neozik"
  },
  {
    title: "Pendu — Jeu dans le terminal",
    description: "Jeu du pendu en ligne de commande développé en Python, dans le cadre de la Pré-MSc à Epitech.",
    period: "2025",
    tech: ["Python"],
    image: "/images/work/pendu-terminal.png",
    url: "https://github.com/Cyril29D/Hangman_Command_Line",
    slug: "pendu"
  },
  {
    title: "Job Board — Offres d'emploi",
    description: "Plateforme web de publication et de recherche d’offres d’emploi, avec recherche et filtrage avancés.",
    period: "2025",
    tech: ["React", "PostgreSQL", "Tailwind CSS"],
    image: "/images/work/myjob.png",
    url: "https://github.com/Cyril29D/MyJob",
    slug: "job-board"
  }
];

export const GET = async () => {
  return NextResponse.json({
    workData
  });
};
