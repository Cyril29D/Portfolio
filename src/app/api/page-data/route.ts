import { NextResponse } from "next/server";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "cyrildelly9@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:cyrildelly9@gmail.com"
    },
    {
      type: "phone",
      label: "07 63 95 63 23",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+33763956323"
    }
  ],
  socialItems: [
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/cyr-d/"
    },
    {
      platform: "github",
      icon: "/images/icon/github-icon.svg",
      link: "https://github.com/cyril29D"
    }
  ]
};

const educationData = {
  education: [
    {
      title: "Master of Science — Epitech (2025–2028)",
      description: "Formation d’excellence en informatique et en technologies numériques : intelligence artificielle, cloud computing, architecture logicielle et gestion de projet."
    },
    {
      title: "BTS SIO, option SLAM (2022–2024)",
      description: "Services informatiques aux organisations, option solutions logicielles et applications métiers : développement web, bases de données, PHP, JavaScript et Laravel."
    },
    {
      title: "Bac professionnel MELEC (2019–2022)",
      description: "Métiers de l’électricité et de ses environnements connectés : systèmes électriques, domotique, équipements connectés et maintenance."
    }
  ],
  skills: [
    { name: "HTML", icon: "html5" },
    { name: "CSS", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "PHP", icon: "php" },
    { name: "Python", icon: "python" },
    { name: "Java", icon: "java" },
    { name: "MySQL", icon: "mysql" }
  ]
};

const contactLinks = {
  socialLinks: [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/cyr-d/"
    },
    {
      title: "GitHub",
      href: "https://github.com/cyril29D"
    }
  ],
  contactInfo: [
    {
      type: "email",
      label: "cyrildelly9@gmail.com",
      link: "mailto:cyrildelly9@gmail.com"
    },
    {
      type: "phone",
      label: "07 63 95 63 23",
      link: "tel:+33763956323"
    }
  ]
};

export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
