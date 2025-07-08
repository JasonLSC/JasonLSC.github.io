export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  // {
  //   year: "2024",
  //   conference: "NeurIPS",
  //   title: "Scalable Causal Discovery in High-Dimensional Time Series",
  //   authors: "Jane Smith, Sarah Johnson, Yue Zhang",
  //   paperUrl: "https://arxiv.org/abs/2409.15476",
  //   codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
  //   //bibtex: "https://arxiv.org/abs/2409.15476.bib",
  //   tldr: "Using causal discovery to find the causal structure of high-dimensional time series data.",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1561622539-dffbfc2008fd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   award: "🏆 Best Paper Award",
  //   // if you have an image in public/images, you can use it like this:
  //   // imageUrl: "/images/publication-image.jpg"
  // },
  // {
  //   year: "2023",
  //   conference: "ICML",
  //   title: "Robust Causal Discovery Under Distribution Shift",
  //   authors: "Jane Smith, Xue Chen, Sarah Johnson",
  //   paperUrl: "https://arxiv.org/abs/2302.13095",
  //   codeUrl: "https://github.com/jsmith/robust-causal-discovery",
  // },
  {
    year: "2025",
    conference: "In submission",
    title: "GSCodec Studio: A Modular Framework for Gaussian Splat Compression",
    authors: "Sicheng Li, Chengzhen Wu, Hao Li, Xiang Gao, Yiyi Liao, Lu Yu",
    paperUrl: "https://arxiv.org/abs/2506.01822",
    codeUrl: "https://github.com/JasonLSC/GSCodec_Studio",
    imageUrl: "/images/gscodec_studio.png",
  },  
  {
    year: "2025",
    conference: "CVPR",
    title: "GIFStream: 4D Gaussian-based Immersive Video with Feature Stream",
    authors: "Hao Li, Sicheng Li, Xiang Gao, Abudouaihati Batuer, Lu Yu, Yiyi Liao",
    paperUrl: "https://arxiv.org/abs/2505.07539v1",
    codeUrl: "https://github.com/XDimLab/GIFStream",
    imageUrl: "/images/gifstream.png",
  },
  {
    year: "2024",
    conference: "CVPR",
    title: "NeRFCodec: Neural Feature Compression Meets Neural Radiance Fields for Memory-Efficient Scene Representation",
    authors: "Sicheng Li, Hao Li, Lu Yu, Yiyi Liao",
    paperUrl: "https://openaccess.thecvf.com/content/CVPR2024/papers/Li_NeRFCodec_Neural_Feature_Compression_Meets_Neural_Radiance_Fields_for_Memory-Efficient_CVPR_2024_paper.pdf",
    codeUrl: "https://github.com/JasonLSC/NeRFCodec_public",
    imageUrl: "/images/nerfcodec.png",
  },
  {
    year: "2023",
    conference: "CVPR",
    title: "SteerNeRF: Accelerating NeRF Rendering via Smooth Viewpoint Trajectory",
    authors: "Sicheng Li, Hao Li, Yue Wang, Yiyi Liao, Lu Yu",
    paperUrl: "https://arxiv.org/abs/2212.08476",
    codeUrl: "https://github.com/JasonLSC/SteerNeRF_official",
    imageUrl: "/images/steernef.png",
  }
];
