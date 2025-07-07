export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Sicheng Li",
  title: "Ph.D. Candidate",
  institution: "Zhejiang University",
  // Note that links work in the description
  description:
    "I'm a final-year <a href='https://www.stanford.edu'>PhD candidate</a> working at the intersection of 3D computer vision and visual data compression. My research focuses on developing immersive video systems that support the delivery and rendering of photorealistic 3D video on mobile devices.",
  email: "jasonlisicheng@zju.edu.cn",
  imageUrl:
    "https://images.unsplash.com/photo-1751889974981-69f1416242fd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.com/citations?user=mii6r_oAAAAJ",
  githubUsername: "JasonLSC",
  // linkedinUsername: "janesmith",
  // twitterUsername: "janesmith",
  // blogUrl: "https://",
  // cvUrl: "https://",
  institutionUrl: "https://www.zju.edu.cn",
  // altName: "",
  // secretDescription: "I like dogs.",
};
