export interface Project {
  id: string;
  title: string;
  description: string;
  category: "AI/ML" | "Full Stack" | "Data Science" | "Agentic AI";
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  
  // Detailed view fields
  status?: string;
  detailedDescription?: string;
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "autostack",
    title: "AutoStack",
    description: "Transforms simple prompts into ready-to-use web applications using agentic AI. Showcases automation, design generation, and modern full-stack workflows.",
    category: "Agentic AI",
    tags: ["Agentic AI", "LLMs", "Next.js", "TypeScript"],
    githubUrl: "https://github.com/Sekhar2186/AutoStack",
    demoUrl: "https://auto-stack-mu.vercel.app/",
    featured: true,
    status: "Building",
    detailedDescription: "AutoStack is an advanced generative AI platform that converts natural language instructions into fully functional, production-ready web applications. Leveraging agentic workflows with LangGraph and state-of-the-art LLMs, the platform auto-generates the backend logic, interactive frontend interfaces, and database schemas dynamically.",
    features: [
      "Natural Language to Full-Stack App generation in under 2 minutes",
      "Multi-Agent collaboration powered by LangGraph for robust error handling and refinement",
      "Automated theme generation with customized styling and component assemblies",
      "Sandboxed code execution and validation before delivery",
      "Seamless export/download options for local development"
    ]
  },
  {
    id: "luxro",
    title: "Luxro",
    description: "A full-stack eCommerce Platform with secure authentication, product management, and cart functionality. Built to simulate real-world online shopping experience using modern web technologies",
    category: "Full Stack",
    tags: ["Next.js", "TypeScript", "MongoDB", "TailwindCSS"],
    githubUrl: "https://github.com/Sekhar2186/Luxro",
    demoUrl: "https://luxro-ten.vercel.app/",
    featured: true,
    status: "Completed",
    detailedDescription: "Luxro is a modern full-stack eCommerce platform designed for high performance and optimal user experience. Built with Next.js and TypeScript, it features a scalable serverless architecture, secure user authentication with JWT/OAuth, real-time database management using MongoDB, and an intuitive responsive design powered by TailwindCSS.",
    features: [
      "Secure, seamless authentication and profile management",
      "Robust product management, including advanced search, filtering, and categorization",
      "Persistent cart functionality synced across user sessions",
      "Integrated payment gateway simulation with smooth checkout flows",
      "Comprehensive admin dashboard for order tracking and inventory management"
    ]
  },
  {
    id: "crypto-pulse",
    title: "CryptoPulse",
    description: "A cryptocurrency tracking and prediction system with real-time price updates and daily tech news.",
    category: "Data Science",
    tags: ["Pandas", "Express", "Next.js", "Cryptocurrency APIs", "News APIs"],
    githubUrl: "https://github.com/Sekhar2186/CryptoCurrency-Tracker",
    demoUrl: "https://crypto-currency-tracker-kappa.vercel.app",
    featured: false,
    status: "Completed",
    detailedDescription: "CryptoPulse is an analytics dashboard that tracks cryptocurrency price volatility, gathers relevant technological news, and implements sentiment analysis. By monitoring public APIs, user sentiment trends, and market historical data, CryptoPulse provides visual charts representing asset trends alongside predictive indicators calculated using statistical rolling metrics.",
    features: [
      "Live cryptocurrency price tracking using CoinGecko and Binance APIs",
      "Aggregated tech and crypto news feeds powered by automated RSS parsing",
      "Sentiment analysis on news headlines to gauge market confidence trends",
      "Interactive price chart visualizations with custom period selections",
      "Personalized watchlist and price alert configuration tools"
    ]
  },
  {
    id: "cancer-classification",
    title: "Cancer Classification (Gene-Based)",
    description: "A machine learning project for classifying cancer types using gene expression data. Focused on feature selection, model training, and evaluation for accurate prediction.",
    category: "AI/ML",
    tags: ["Python", "Numpy", "Pandas", "Scikit-Learn", "XGBoost"],
    githubUrl: "https://github.com/Sekhar2186/cancer-classification",
    demoUrl: "",
    featured: true,
    status: "All Systems Operational",
    detailedDescription: "This machine learning research project focuses on identifying and classifying cancer sub-types by analyzing high-dimensional genomic and gene expression datasets. Due to the high dimensionality of genomic data, the project implements advanced feature selection algorithms and dimensionality reduction (PCA) prior to feeding features into optimized classification models like XGBoost and Support Vector Machines.",
    features: [
      "Advanced genomics data preprocessing and normalization pipelines",
      "Dimensionality reduction using Principal Component Analysis (PCA) and SelectKBest",
      "High-performance ensemble classification utilizing XGBoost and Random Forests",
      "Cross-validation and hyperparameter optimization using Grid Search",
      "Detailed confusion matrix and ROC-AUC curve performance evaluations"
    ]
  },
  {
    id: "pixel-revive",
    title: "PixelRevive",
    description: "A digital image processing project focused on restoring old and damaged photographs. Applied filtering, enhancement, and noise reduction techniques to improve visual quality.",
    category: "AI/ML",
    tags: ["Python", "OpenCV", "Scikit-Image", "DIP Techniques"],
    githubUrl: "https://github.com/Sekhar2186/PixelRevive",
    demoUrl: "",
    featured: false,
    status: "All Systems Operational",
    detailedDescription: "PixelRevive is a computer vision and digital image processing utility designed to clean up and restore degraded historical photographs. Utilizing algorithms for scratch removal, contrast enhancement, histogram equalization, and adaptive thresholding, it automatically revives faded colors and clears physical damages from digitized photographs.",
    features: [
      "Advanced scratch and blemish detection using contour analysis",
      "Adaptive noise reduction using bilateral filtering and Gaussian smoothing",
      "Contrast and lighting correction via Contrast Limited Adaptive Histogram Equalization (CLAHE)",
      "Automated inpainting algorithms to fill in missing parts of images",
      "Before-and-after interactive comparison rendering"
    ]
  },
  {
    id: "gesture-sense",
    title: "GestureSense",
    description: "Real-time hand gesture recognition using hand landmarks feature extraction and ML models. Focused on accuracy, low latency, and real-time performance.",
    category: "AI/ML",
    tags: ["OpenCV", "MediaPipe", "Scikit-Learn"],
    githubUrl: "https://github.com/Sekhar2186/GestureSense",
    demoUrl: "",
    featured: false,
    status: "All Systems Operational",
    detailedDescription: "GestureSense is a real-time computer vision system built to recognize hand gestures and translate them into system commands or actions. Utilizing Google MediaPipe for high-fidelity hand landmark detection and tracking, the system feeds coordinate offsets into custom Scikit-Learn classifiers to predict user gestures with high accuracy and sub-millisecond latencies.",
    features: [
      "Real-time multi-hand landmark tracking from standard webcams",
      "Custom gesture definition with feature extraction of relative joint angles",
      "Machine learning model training pipeline using Random Forest and SVM classifiers",
      "Integration layer to translate gestures into keypresses or mouse operations",
      "Visual overlay debugging window displaying hand skeleton tracks"
    ]
  }
];
