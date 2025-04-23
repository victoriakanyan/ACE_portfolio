const projects = [
  {
    id: "karate-designs",
    title: "Karate Designs CN",
    year: "2025",
    description:
      "A modern portfolio website for a creative karate design brand. Includes interactive animations, a dynamic gallery, and pastel neon branding.",
    link: "https://karatedesignscn.com",
    image: "/projects/karatedesigns.mov", // or GIF/MP4
    tech: [
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "EmailJS", icon: "/icons/emailjs.svg" },
    ],
    side: "right",
  },

  {
    id: 1,
    title: "E-Commerce Website",
    year: "2023",
    side: "left",
    description:
      "A full-stack ecommerce platform built with Next.js and Stripe integration.",
  },
  {
    id: 2,
    title: "Portfolio Redesign",
    year: "2022",
    side: "right",
    description:
      "A sleek, interactive portfolio for a design client using GSAP and Tailwind.",
  },
  {
    id: 3,
    title: "Startup Landing Page",
    year: "2021",
    side: "left",
    description:
      "Landing page for a fintech startup with animations, form validation, and SEO.",
  },
];

export default projects;
