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
      link: "https://www.linkedin.com/in/cyril-delly"
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
      title: "Master of Sciences — Epitech (2025 - 2028)",
      description: "Formation d'excellence en informatique et technologies : intelligence artificielle, cloud computing, architecture logicielle, management de projet."
    },
    {
      title: "BTS SIO, option SLAM — (2022 - 2024)",
      description: "Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers : développement web, bases de données, PHP/JavaScript, Laravel."
    },
    {
      title: "Bac Pro MELEC — (2019 - 2022)",
      description: "Métiers de l'Électricité et de ses Environnements Connectés : systèmes électriques, domotique, équipements connectés, maintenance."
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
      href: "https://www.linkedin.com/in/cyril-delly"
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
