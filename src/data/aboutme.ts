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
    `Hi there! I'm a final-year PhD candidate at Zhejiang University advised by <a href="https://person.zju.edu.cn/en/yul">Prof. Lu Yu</a> and <a href="https://yiyiliao.github.io/">Prof. Yiyi Liao</a>. My research interests lie at the intersection of 3D computer vision and visual data compression.<br><br>My long-term research goal is to enable photorealistic, compact, and real-time 6-DoF interactive video streaming applications on mobile devices. This goal involves three key research challenges: efficient scene representation design, efficient compression, and real-time rendering. My previous work addresses these challenges through accelerated rendering and efficient compression of high-fidelity neural radiance fields. Currently, my research focuses on dynamic scene representation and compression with 3D Gaussian splats, supporting real-time interactive free-viewpoint video on edge devices.`,
  email: "jasonlisicheng@zju.edu.cn",
  imageUrl:
    "https://images.unsplash.com/photo-1751889974981-69f1416242fd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  googleScholarUrl: "https://scholar.google.com/citations?user=mii6r_oAAAAJ",
  githubUsername: "JasonLSC",
  // linkedinUsername: "janesmith",
  // twitterUsername: "janesmith",
  // blogUrl: "https://jasonlsc.github.io/blog",
  // cvUrl: "https://",
  institutionUrl: "https://www.zju.edu.cn",
  // altName: "",
  // secretDescription: "I like dogs.",
};
