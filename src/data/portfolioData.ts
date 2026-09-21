export interface PortfolioProject {
  id: string;
  title: string;
  tagline: string;
  category: 'AI/ML' | 'Mobile' | 'Web' | 'Systems';
  technologies: string[];
  description: string;
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface PortfolioExperience {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface PortfolioEducation {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: string;
  highlights?: string;
}

export interface PortfolioCertification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: 'Cloud' | 'AI/ML' | 'Software' | 'Foundations';
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Asha H',
    role: 'Software Engineer',
    subRole: 'AI-ML, Android & Full-Stack Developer',
    location: 'Bangalore, Karnataka, India',
    email: 'ashareddy042@gmail.com',
    phone: '+91-9380557729',
    github: 'https://github.com/Asha23442',
    linkedin: 'https://linkedin.com/in/asha-h',
    portfolioRepo: 'https://github.com/Asha23442/portfolio',
    bio: 'Computer Science and Engineering graduate (CGPA 8.7) from Vijaya Vittala Institute of Technology with proven hands-on internship experience in native Android development and modern full-stack web applications. Passionate about architecting AI-driven diagnostic tools, smart security solutions, and high-performance applications with Python, Java, and Cloud platforms.',
    stats: [
      { label: 'Academic CGPA', value: '8.7', helper: 'B.E. Computer Science' },
      { label: 'Public GitHub Repos', value: '25+', helper: 'github.com/Asha23442' },
      { label: 'Industry Internships', value: '2', helper: 'Android & Web' },
      { label: 'Verified Certifications', value: '11+', helper: 'Oracle, IBM, Cisco' }
    ]
  },

  about: {
    heading: 'Engineering scalable systems with curiosity & precision.',
    paragraphs: [
      'I am an aspiring Software Engineer based in Bangalore, Karnataka, holding a Bachelor of Engineering in Computer Science and Engineering from Vijaya Vittala Institute of Technology with a strong CGPA of 8.7.',
      'My technical journey blends rigorous algorithmic fundamentals with practical product development. During my internships at Mind Matrix.io and Yugayatra Retail, I engineered native Android features integrating Generative AI tools and developed responsive web solutions backed by cloud architectures.',
      'I actively explore the intersection of machine learning, mobile security, and cloud scalability—building real-world applications that solve tangible problems, from medical diagnostics to emergency safety platforms.'
    ],
    pillars: [
      {
        title: 'Core Software Engineering',
        desc: 'Strong grounding in Data Structures, Algorithms, Object-Oriented Programming (Java/C++), and relational DBMS.'
      },
      {
        title: 'AI & Machine Learning',
        desc: 'Developing classification models, deep learning pipelines, and predictive health analytics using Python, Scikit-learn, and Flask.'
      },
      {
        title: 'Android & Mobile Development',
        desc: 'Building responsive native Android applications with Kotlin, Java, Android Studio, Google Maps API, and Firebase.'
      },
      {
        title: 'Cloud & Full-Stack Web',
        desc: 'Certified in Oracle Cloud Infrastructure (OCI), experienced in React.js, Tailwind CSS, REST APIs, MySQL, and Firebase.'
      }
    ]
  },

  skills: [
    {
      category: 'Programming Languages',
      skills: ['Python', 'Java', 'C++', 'C', 'Kotlin', 'JavaScript (ES6+)', 'TypeScript', 'SQL']
    },
    {
      category: 'AI / Machine Learning',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Deep Learning (CNN)', 'Flask APIs', 'Matplotlib', 'Generative AI Tools']
    },
    {
      category: 'Web & Frontend',
      skills: ['React.js', 'Three.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design', 'JavaScript']
    },
    {
      category: 'Databases & Cloud',
      skills: ['MySQL', 'SQL', 'MongoDB', 'Firebase (Firestore, Realtime DB)', 'Oracle Cloud (OCI)', 'AWS Basics', 'Google Cloud']
    },
    {
      category: 'Mobile Development',
      skills: ['Android Studio', 'Kotlin', 'Java for Android', 'Google Maps API', 'Mobile Security', 'Background Services']
    },
    {
      category: 'Developer Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Postman', 'Power BI']
    }
  ],

  experiences: [
    {
      id: 'exp-1',
      role: 'Android App Development Intern',
      company: 'Mind Matrix.io (VTU Internship)',
      duration: 'Feb 2026 – May 2026',
      location: 'Bangalore, India',
      type: 'Technical Internship',
      summary: 'Focused on developing native Android modules and integrating cutting-edge Generative AI tools on the MindMatrix platform.',
      achievements: [
        'Engineered responsive native Android interfaces using Java and Kotlin, streamlining user workflows.',
        'Integrated Generative AI SDKs and third-party RESTful APIs to automate interactive mobile features.',
        'Conducted thorough unit testing, bug resolution, and participated in Agile sprint reviews with senior engineering mentors.',
        'Documented technical architectures and workflow diagrams to facilitate smooth cross-team feature handoffs.'
      ],
      technologies: ['Android Studio', 'Java', 'Kotlin', 'Generative AI Tools', 'REST APIs', 'Git']
    },
    {
      id: 'exp-2',
      role: 'Web Development Intern',
      company: 'Yugayatra Retail OPC Private Limited',
      duration: 'Jan 2025 – Mar 2025',
      location: 'Bangalore, India',
      type: 'Technical Internship',
      summary: 'Contributed to front-end development, responsive UI optimization, and dynamic API integrations.',
      achievements: [
        'Built accessible, responsive web interfaces using HTML5, CSS3, JavaScript, and modular component structures.',
        'Integrated client-side state with backend services, optimizing web asset loading speeds across mobile and desktop browsers.',
        'Built and deployed end-to-end web modules following clean coding guidelines and Git version control workflows.'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Git', 'GitHub']
    }
  ] as PortfolioExperience[],

  projects: [
    {
      id: 'p-1',
      title: 'AI-Powered Pneumonia & Disease Diagnosis',
      tagline: 'Deep Learning & Medical Imaging Diagnostic System',
      category: 'AI/ML',
      technologies: ['Python', 'Deep Learning (CNN)', 'Flask', 'Scikit-learn', 'Computer Vision'],
      description: 'An AI-powered clinical decision-support application analyzing patient parameters and chest radiographs to detect pneumonia with high diagnostic accuracy.',
      highlights: [
        'Trained Convolutional Neural Network (CNN) architectures on biomedical imaging datasets.',
        'Deployed a lightweight Flask REST API service returning real-time risk predictions with low latency.',
        'Evaluated model performance using precision-recall curves, ROC-AUC metrics, and confusion matrix validation.'
      ],
      githubUrl: 'https://github.com/Asha23442/AI_powered_pneumonia_diagnosis',
      featured: true
    },
    {
      id: 'p-2',
      title: 'Diabetes Risk Prediction System',
      tagline: 'End-to-End Machine Learning Healthcare Pipeline',
      category: 'AI/ML',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask'],
      description: 'A predictive healthcare web application forecasting the probability of diabetes onset based on clinical biomarker data.',
      highlights: [
        'Performed exploratory data analysis (EDA), outlier imputation, and standard feature scaling on diagnostic datasets.',
        'Trained and evaluated classification models (Logistic Regression, Decision Trees, Ensembles) achieving high cross-validation scores.',
        'Designed an intuitive web frontend enabling medical practitioners to input patient records and receive instant diagnostic projections.'
      ],
      githubUrl: 'https://github.com/Asha23442/diabetes_risk',
      featured: true
    },
    {
      id: 'p-3',
      title: 'Women Safety Emergency Response App',
      tagline: 'Real-Time SOS & Geolocation Mobile Platform',
      category: 'Mobile',
      technologies: ['Android Studio', 'Java', 'Google Maps API', 'Firebase'],
      description: 'A dedicated personal safety Android application providing instant SOS emergency alerts, live GPS location tracking, and automated SMS alerts to trusted contacts.',
      highlights: [
        'Architected one-touch distress trigger activating automated SMS transmission with real-time GPS coordinates.',
        'Integrated Google Maps API for live location streaming and route tracking during emergencies.',
        'Utilized Firebase Realtime Database for encrypted contact management and instantaneous cloud synchronization.'
      ],
      githubUrl: 'https://github.com/Asha23442/womensafety',
      featured: true
    },
    {
      id: 'p-4',
      title: 'BiteBazar — Food E-Commerce Platform',
      tagline: 'Full-Stack Food Ordering & Cart Management System',
      category: 'Web',
      technologies: ['Java', 'MySQL', 'Firebase', 'TypeScript'],
      description: 'An online food ordering platform featuring interactive menu catalogs, responsive cart management, secure user profiles, and order tracking.',
      highlights: [
        'Engineered responsive catalog filtering and relational database schema in MySQL for product inventories.',
        'Constructed persistent cart checkout workflow, user authentication, and order status updates.',
        'Synchronized order states with Firebase for instant notifications.'
      ],
      githubUrl: 'https://github.com/Asha23442/Bitebazar',
      featured: true
    },
    {
      id: 'p-5',
      title: 'GateBell — Smart Visitor Management',
      tagline: 'OTP-Verified Premise Access Control System',
      category: 'Systems',
      technologies: ['Java', 'Firebase', 'OTP API', 'Android Studio'],
      description: 'A premise security solution incorporating automated OTP phone verification, guest logging, and host approval tracking for residential and commercial complexes.',
      highlights: [
        'Designed two-factor OTP verification protocol preventing unauthorized building entry.',
        'Implemented real-time visitor check-in logs, resident notifications, and host approval status.',
        'Stored audit records securely in Firebase for administrative compliance.'
      ],
      githubUrl: 'https://github.com/Asha23442/Gatebell',
      featured: false
    },
    {
      id: 'p-6',
      title: '3D Interactive Portfolio Website',
      tagline: 'Performant 3D Web Showcase with React & Three.js',
      category: 'Web',
      technologies: ['React.js', 'Three.js', 'JavaScript', 'Tailwind CSS'],
      description: 'An interactive portfolio website leveraging Three.js and modern React to deliver immersive 3D graphics, project showcases, and responsive design.',
      highlights: [
        'Engineered responsive 3D viewports utilizing Three.js with optimized 60fps rendering.',
        'Implemented modular React components with accessible navigation and dynamic project views.',
        'Achieved full mobile, tablet, and desktop viewport responsiveness.'
      ],
      githubUrl: 'https://github.com/Asha23442/portfolio',
      featured: true
    },
    {
      id: 'p-7',
      title: 'Busly — Smart Bus Tracking App',
      tagline: 'Transit Route Tracking & Schedule Navigation',
      category: 'Mobile',
      technologies: ['Kotlin', 'Android Studio', 'Google Maps API'],
      description: 'A mobility Android application developed in Kotlin to provide commuters with real-time transit route information, stop schedules, and travel updates.',
      highlights: [
        'Developed native Android views in Kotlin with clean lifecycle management and coroutines.',
        'Integrated map overlays and GPS coordinates for intuitive commuter travel planning.'
      ],
      githubUrl: 'https://github.com/Asha23442/Busly',
      featured: false
    },
    {
      id: 'p-8',
      title: 'Automated Resume Screening & Ranking',
      tagline: 'NLP Keyword Extraction & Candidate Matching',
      category: 'AI/ML',
      technologies: ['Python', 'NLP', 'Scikit-learn', 'TF-IDF'],
      description: 'A machine learning system applying Natural Language Processing to parse technical resumes, evaluate keyword density, and objectively rank applicants against job criteria.',
      highlights: [
        'Built automated text tokenization and TF-IDF similarity calculation pipeline.',
        'Generated objective candidate match scores across core technical competencies.'
      ],
      githubUrl: 'https://github.com/Asha23442/Resume-Screening-and-Ranking',
      featured: false
    },
    {
      id: 'p-9',
      title: 'PressWala — Digital News Platform',
      tagline: 'Categorized Publishing & Article Sharing Portal',
      category: 'Web',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
      description: 'A content publishing web portal where users can read, share, and publish categorized news articles with real-time database updates.',
      highlights: [
        'Developed an authoring interface supporting category tagging and media embedding.',
        'Connected Firebase Firestore for instantaneous multi-category queries.'
      ],
      githubUrl: 'https://github.com/Asha23442/Presswala',
      featured: false
    },
    {
      id: 'p-10',
      title: 'Gokula Health Management',
      tagline: 'Healthcare & Dairy Customer Ledger System',
      category: 'Mobile',
      technologies: ['Kotlin', 'Android Studio', 'HTML', 'Java'],
      description: 'A healthcare and dairy customer operational management application tracking customer health status, real-time updates, and payment reconciliation.',
      highlights: [
        'Developed native Android management views for recording customer accounts and transaction ledgers.',
        'Integrated real-time data synchronization for operational accuracy.'
      ],
      githubUrl: 'https://github.com/Asha23442/GokulHealth',
      featured: false
    }
  ] as PortfolioProject[],

  education: [
    {
      id: 'edu-1',
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      institution: 'Vijaya Vittala Institute of Technology',
      location: 'Bangalore, Karnataka',
      period: '2022 – 2026',
      score: '8.7 / 10',
      scoreType: 'CGPA',
      highlights: 'Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (SQL), Operating Systems, Computer Networks, Software Engineering.'
    },
    {
      id: 'edu-2',
      degree: 'Pre-University Course (PCMB)',
      institution: 'Vishwamanava PU College',
      location: 'Seebara, Chitradurga, Karnataka',
      period: '2020 – 2022',
      score: '65.8%',
      scoreType: 'Percentage',
      highlights: 'Focus on Physics, Chemistry, Mathematics, and Biology with strong analytical fundamentals.'
    },
    {
      id: 'edu-3',
      degree: 'Secondary School Leaving Certificate (10th)',
      institution: 'STSRHS',
      location: 'Nayakanahatty, Karnataka',
      period: '2019 – 2020',
      score: '85.6%',
      scoreType: 'Percentage',
      highlights: 'Distinction with exceptional academic performance in Science and Mathematics.'
    }
  ] as PortfolioEducation[],

  certifications: [
    {
      id: 'c-1',
      name: 'Oracle Cloud Infrastructure Foundations Associate',
      issuer: 'Oracle University',
      date: 'Sep 2025',
      category: 'Cloud'
    },
    {
      id: 'c-2',
      name: 'Python 101 for Data Science (PY0101EN)',
      issuer: 'IBM / Cognitive Class',
      date: 'Aug 2025',
      category: 'AI/ML'
    },
    {
      id: 'c-3',
      name: 'Data Analytics Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'Aug 2025',
      category: 'AI/ML'
    },
    {
      id: 'c-4',
      name: 'Android App Development using GenAI',
      issuer: 'MindMatrix (VTU Internship)',
      date: 'May 2026',
      category: 'Software'
    },
    {
      id: 'c-5',
      name: 'Learn Generative AI',
      issuer: 'EduBridge / Capgemini / AICTE',
      date: 'Apr 2025',
      category: 'AI/ML'
    },
    {
      id: 'c-6',
      name: 'Build Your Own Generative AI Model',
      issuer: 'NxtWave',
      date: 'Feb 2025',
      category: 'AI/ML'
    },
    {
      id: 'c-7',
      name: 'Cybersecurity Program',
      issuer: 'Intel & DIYA',
      date: '2025',
      category: 'Foundations'
    },
    {
      id: 'c-8',
      name: 'Networking and Web Technology',
      issuer: 'Infosys Springboard',
      date: 'Mar 2025',
      category: 'Software'
    },
    {
      id: 'c-9',
      name: 'Green Skills & Artificial Intelligence (Skills4Future)',
      issuer: 'Edunet / AICTE / Shell',
      date: 'Dec 2024',
      category: 'AI/ML'
    },
    {
      id: 'c-10',
      name: 'Software Engineer Intern Completion',
      issuer: 'Yuga Yatra Retail OPC Pvt. Ltd.',
      date: '2025',
      category: 'Software'
    },
    {
      id: 'c-11',
      name: 'VTU EBSCO & AMA Training',
      issuer: 'EBSCO Information Services',
      date: 'Mar 2025',
      category: 'Foundations'
    }
  ] as PortfolioCertification[],

  workshops: [
    {
      title: 'National Conference Participation in CSE',
      org: 'VVIT, CSE Department',
      date: 'May 2025',
      details: 'Participated in the departmental technical conference presenting insights on modern software engineering paradigms.'
    },
    {
      title: 'Structuring and Publishing Research Paper Workshop',
      org: 'Vijaya Vittala Institute of Technology',
      date: 'Nov 2024',
      details: 'Completed hands-on workshop on research methodology, literature review synthesis, and scientific paper indexing.'
    }
  ]
};
