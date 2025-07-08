export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  // {
  //   year: "2019—Present",
  //   institution: "Zhejiang University",
  //   degree: "Ph.D. in Information and Communication Engineering",
  //   advisor: "Prof. Lu Yu and Prof. Yiyi Liao",
  // },
  // {
  //   year: "2015—2019",
  //   institution: "Hunan University",
  //   degree: "B.S. in Electronic Information Engineering",
  //   // thesis: "Algorithmic Approaches to Causal Discovery",
  //   // Optional links to thesis
  //   // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  // },
];
