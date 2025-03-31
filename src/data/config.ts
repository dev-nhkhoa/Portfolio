const config = {
  title: "nhkhoa / Business Analyst",
  role: "3rd year student at VLU",
  description: {
    long: "Explore the portfolio of ANH KHOA, a 3rd year student at VLU. Discover my latest work, including CalendarVLU and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of ANH KHOA, a 3rd year student at VLU and innovative projects.",
  },
  keywords: [
    "nhkhoa",
    "portfolio",
    "developer",
    "busines analyst",
    "GSAP",
    "React",
    "Next.js",
    "Framer Motion",
  ],
  author: "nhkhoa",
  email: "work.nhkhoa@gmail.com",
  site: "https://nhkhoa.live",
  

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://www.linkedin.com/in/nhkhoa/",
    instagram: "https://www.instagram.com/nhkhoa.a",
    facebook: "https://www.facebook.com/nhkhoa.a/",
    github: "https://github.com/dev-nhkhoa",
  },

  about: {
    introduce: `Hello! I’m nhkhoa, a 3rd year student at VLU. I’m passionate about applying modern tools to improve business operations, aiming to elevate companies into the future of digital transformation.`,
    freetime: `In my spare time, I often enjoy playing PUBG PC alongside my closest friends. Having invested over 2,000 hours, I’m confident that my duo skills rank among the finest in Vietnam :D Additionally, feel free to explore my tech stack listed below.`
  },
};
export { config };
