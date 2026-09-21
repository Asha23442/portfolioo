import { ResumeData } from '../types/resume';

export const INITIAL_RESUME_DATA: ResumeData = {
  personalInfo: {
    name: 'ASHA H',
    title: 'Software Engineer | AI-ML & Full-Stack Developer',
    location: 'Bangalore, Karnataka, India',
    phone: '+91-9380557729',
    email: 'ashareddy042@gmail.com',
    linkedin: 'https://linkedin.com/in/asha-h',
    github: 'https://github.com/Asha23442',
    portfolio: 'https://github.com/Asha23442/portfolio'
  },
  summary:
    'Motivated Computer Science & Engineering graduate (CGPA 8.7) with hands-on internship experience in native Android development and responsive full-stack web applications. Proficient in Python, Java, modern JavaScript/TypeScript, and Machine Learning, with a solid grounding in Data Structures and DBMS. Proven track record of developing end-to-end solutions—including AI diagnostic applications, mobile emergency safety platforms, and scalable e-commerce systems. Oracle Cloud Infrastructure (OCI) Foundations Associate and IBM-certified in Data Science, focused on delivering reliable, performant software.',
  skillCategories: [
    {
      id: 'languages',
      name: 'Programming Languages',
      skills: ['Python', 'Java', 'C++', 'C', 'Kotlin', 'JavaScript (ES6+)', 'TypeScript']
    },
    {
      id: 'web',
      name: 'Web & Frontend Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Three.js', 'Tailwind CSS', 'Responsive UI']
    },
    {
      id: 'backend',
      name: 'Backend & APIs',
      skills: ['Flask (Python)', 'RESTful APIs', 'Authentication', 'Microservices Basics']
    },
    {
      id: 'database',
      name: 'Databases & Cloud',
      skills: ['MySQL', 'SQL', 'MongoDB', 'Firebase (Firestore, Realtime DB, Auth)', 'Oracle Cloud (OCI)', 'AWS Basics', 'Google Cloud']
    },
    {
      id: 'aiml',
      name: 'AI, ML & Data Analytics',
      skills: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Deep Learning / CNN', 'Generative AI Tools & Prompting', 'Power BI']
    },
    {
      id: 'tools',
      name: 'Developer Tools & Platforms',
      skills: ['Git', 'GitHub', 'Android Studio', 'VS Code', 'Jupyter Notebook', 'Google Colab', 'Postman']
    },
    {
      id: 'core',
      name: 'Core Computer Science',
      skills: ['Data Structures & Algorithms', 'Object-Oriented Programming (OOPs)', 'Database Management Systems (DBMS)', 'Operating Systems Concepts']
    }
  ],
  experience: [
    {
      id: 'exp-1',
      title: 'Android App Development Intern',
      company: 'Mind Matrix.io (VTU Internship)',
      location: 'Bangalore, India',
      startDate: 'Feb 2026',
      endDate: 'May 2026',
      type: 'Internship',
      bullets: [
        'Engineered native Android mobile modules leveraging Generative AI utilities and APIs on the MindMatrix platform.',
        'Developed interactive UI flows, asynchronous background services, and robust client-side validation logic.',
        'Collaborated in Agile sprints with engineering mentors, conducting code reviews, unit testing, and technical documentation.'
      ]
    },
    {
      id: 'exp-2',
      title: 'Web Development Intern',
      company: 'Yugayatra Retail OPC Private Limited',
      location: 'Bangalore, India',
      startDate: 'Jan 2025',
      endDate: 'Mar 2025',
      type: 'Internship',
      bullets: [
        'Built responsive web interfaces and reusable frontend components using modern HTML5, CSS3, and JavaScript.',
        'Integrated dynamic frontend views with backend endpoints, optimizing asset delivery and cross-browser rendering speed.',
        'Developed and deployed production-ready modules, adhering strictly to version control standards with Git/GitHub.'
      ]
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'AI-Powered Pneumonia & Disease Diagnosis (OmniCorn)',
      technologies: ['Python', 'Deep Learning (CNN)', 'Flask', 'Scikit-learn', 'Android Studio'],
      description: 'Medical imaging and diagnostic AI application analyzing clinical inputs and chest radiography to predict conditions with high precision.',
      bullets: [
        'Implemented computer vision & machine learning algorithms to classify pathological indicators from biomedical datasets.',
        'Designed lightweight Flask RESTful APIs to deliver real-time inference to client applications with sub-second latency.',
        'Conducted model evaluation through confusion matrices, precision-recall metrics, and feature importance analysis.'
      ],
      githubUrl: 'https://github.com/Asha23442/AI_powered_pneumonia_diagnosis',
      featured: true,
      category: 'AI/ML'
    },
    {
      id: 'proj-2',
      title: 'Diabetes Risk Prediction System',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask'],
      description: 'End-to-end predictive healthcare web system estimating diabetes onset probability from patient biomarker parameters.',
      bullets: [
        'Executed exploratory data analysis (EDA), outlier imputation, and standard feature scaling on diagnostic clinical datasets.',
        'Trained and evaluated classification models (Logistic Regression, Decision Trees, Ensembles) achieving robust cross-validation scores.',
        'Created an intuitive web interface allowing medical staff to input diagnostic measurements and receive instant risk projections.'
      ],
      githubUrl: 'https://github.com/Asha23442/diabetes_risk',
      featured: true,
      category: 'AI/ML'
    },
    {
      id: 'proj-3',
      title: 'Women Safety Emergency Response Application',
      technologies: ['Android Studio', 'Java', 'Google Maps API', 'Firebase'],
      description: 'Personal safety mobile app providing rapid SOS distress signaling, live location tracking, and trusted contact alerts.',
      bullets: [
        'Architected one-touch emergency trigger initiating automated SOS dispatch, SMS transmission, and audio alerts.',
        'Integrated Google Maps Geolocation APIs for continuous real-time coordinate streaming to designated emergency contacts.',
        'Utilized Firebase Realtime Database for instantaneous cloud synchronization and encrypted contact directory storage.'
      ],
      githubUrl: 'https://github.com/Asha23442/womensafety',
      featured: true,
      category: 'Mobile'
    },
    {
      id: 'proj-4',
      title: 'BiteBazar — Food E-Commerce Platform',
      technologies: ['Java', 'MySQL', 'Firebase', 'TypeScript'],
      description: 'Full-featured online food ordering platform with dynamic menu catalog, real-time cart persistence, and order tracking.',
      bullets: [
        'Implemented catalog search, dynamic category filtering, and relational database schema in MySQL for item inventories.',
        'Constructed persistent cart checkout workflow, user authentication, and profile order history tracking.',
        'Integrated Firebase for real-time order state updates and transactional notifications.'
      ],
      githubUrl: 'https://github.com/Asha23442/Bitebazar',
      featured: true,
      category: 'Web'
    },
    {
      id: 'proj-5',
      title: 'GateBell — Smart Visitor Management System',
      technologies: ['Java', 'Firebase', 'OTP API', 'Android Studio'],
      description: 'Premise security management system incorporating automated OTP validation and visitor logging for residential/office complexes.',
      bullets: [
        'Engineered two-factor OTP verification protocol ensuring authenticated guest check-ins and preventing unauthorized entry.',
        'Developed visitor log dispatch, instant host arrival alerts, and approval tracking dashboard.',
        'Implemented cloud audit records in Firebase for transparent access control reporting.'
      ],
      githubUrl: 'https://github.com/Asha23442/Gatebell',
      featured: false,
      category: 'Systems'
    },
    {
      id: 'proj-6',
      title: '3D Interactive Portfolio Website',
      technologies: ['React.js', 'Three.js', 'JavaScript', 'CSS3', 'Tailwind CSS'],
      description: 'Modern, high-performance portfolio featuring interactive 3D graphics to highlight engineering projects and technical stack.',
      bullets: [
        'Engineered responsive 3D canvas viewports using Three.js with optimized render loops for smooth 60fps performance.',
        'Implemented modular React components with accessible navigational architecture and dynamic project modals.',
        'Configured cross-device responsive styling guaranteeing seamless presentation across mobile, tablet, and desktop viewports.'
      ],
      githubUrl: 'https://github.com/Asha23442/portfolio',
      featured: true,
      category: 'Web'
    },
    {
      id: 'proj-7',
      title: 'PressWala — Categorized Digital News Platform',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
      description: 'Content publishing web platform allowing users to curate, explore, and publish categorized news reports.',
      bullets: [
        'Developed content authoring interface with markdown support, image attachments, and category tagging.',
        'Connected Firebase Firestore backend for instantaneous multi-category feed queries and reader engagement metrics.'
      ],
      githubUrl: 'https://github.com/Asha23442/Presswala',
      featured: false,
      category: 'Web'
    },
    {
      id: 'proj-8',
      title: 'Gokula Health Management Application',
      technologies: ['Kotlin', 'Android Studio', 'HTML', 'Java'],
      description: 'Operational management app facilitating patient records, customer health status updates, and transaction logging.',
      bullets: [
        'Developed native Android views in Kotlin to record and track customer health and dairy account ledgers.',
        'Integrated real-time data synchronization for transactional accuracy and payment reconciliation.'
      ],
      githubUrl: 'https://github.com/Asha23442/GokulHealth',
      featured: false,
      category: 'Mobile'
    }
  ],
  education: [
    {
      id: 'edu-1',
      degree: 'Bachelor of Engineering in Computer Science and Engineering',
      institution: 'Vijaya Vittala Institute of Technology',
      location: 'Bangalore, Karnataka',
      startDate: '2022',
      endDate: '2026',
      gradeLabel: 'CGPA',
      grade: '8.7 / 10',
      details: 'Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems (SQL), Operating Systems, Computer Networks, Software Engineering.'
    },
    {
      id: 'edu-2',
      degree: 'Pre-University Course (PCMB - Physics, Chemistry, Math, Biology)',
      institution: 'Vishwamanava PU College',
      location: 'Seebara, Chitradurga, Karnataka',
      startDate: '2020',
      endDate: '2022',
      gradeLabel: 'Percentage',
      grade: '65.8%',
      details: 'Focused on foundational sciences, mathematics, and analytical reasoning.'
    },
    {
      id: 'edu-3',
      degree: 'Secondary School Leaving Certificate (10th Standard)',
      institution: 'STSRHS',
      location: 'Nayakanahatty, Karnataka',
      startDate: '2019',
      endDate: '2020',
      gradeLabel: 'Percentage',
      grade: '85.6%',
      details: 'Distinction in secondary school education with strong marks in Mathematics and Science.'
    }
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'Oracle Cloud Infrastructure Foundations Associate',
      issuer: 'Oracle University',
      date: 'Sep 2025'
    },
    {
      id: 'cert-2',
      name: 'Python 101 for Data Science (PY0101EN)',
      issuer: 'IBM / Cognitive Class',
      date: 'Aug 2025'
    },
    {
      id: 'cert-3',
      name: 'Data Analytics Essentials',
      issuer: 'Cisco Networking Academy',
      date: 'Aug 2025'
    },
    {
      id: 'cert-4',
      name: 'Android App Development using GenAI (VTU Internship)',
      issuer: 'MindMatrix',
      date: 'May 2026'
    },
    {
      id: 'cert-5',
      name: 'Learn Generative AI',
      issuer: 'EduBridge / Capgemini / AICTE',
      date: 'Apr 2025'
    },
    {
      id: 'cert-6',
      name: 'Build Your Own Generative AI Model',
      issuer: 'NxtWave',
      date: 'Feb 2025'
    },
    {
      id: 'cert-7',
      name: 'Cybersecurity Program',
      issuer: 'Intel & DIYA',
      date: '2025'
    },
    {
      id: 'cert-8',
      name: 'Networking and Web Technology',
      issuer: 'Infosys Springboard',
      date: 'Mar 2025'
    },
    {
      id: 'cert-9',
      name: 'Green Skills & Artificial Intelligence (Skills4Future)',
      issuer: 'Edunet / AICTE / Shell',
      date: 'Dec 2024'
    },
    {
      id: 'cert-10',
      name: 'Software Engineer Intern Completion',
      issuer: 'Yuga Yatra Retail OPC Pvt. Ltd.',
      date: '2025'
    },
    {
      id: 'cert-11',
      name: 'VTU EBSCO & AMA Training',
      issuer: 'EBSCO Information Services',
      date: 'Mar 2025'
    }
  ],
  achievements: [
    {
      id: 'ach-1',
      title: 'National Conference Participation',
      organization: 'VVIT, CSE Department',
      date: 'May 2025',
      description: 'Participated in the departmental technical conference presenting insights on modern software engineering paradigms.'
    },
    {
      id: 'ach-2',
      title: 'Structuring and Publishing Research Paper Workshop',
      organization: 'Vijaya Vittala Institute of Technology',
      date: 'Nov 2024',
      description: 'Completed technical workshop on academic literature synthesis, peer-review methodology, and scientific paper indexing.'
    }
  ],
  languages: ['English (Professional Working)', 'Kannada (Native)', 'Hindi (Conversational)'],
  interests: ['Machine Learning Systems', 'Mobile Computing', 'Open Source Contribution', 'Cloud Architecture']
};
