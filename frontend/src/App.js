import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import {
  Activity, Award, BrainCircuit, BriefcaseBusiness, Check, ChevronRight,
  Cpu, Database, Download, ExternalLink, FileText, Github, GraduationCap,
  Layers, Linkedin, Loader2, Mail, Menu, Phone, Sparkles, Terminal, Workflow, X, Zap
} from 'lucide-react';

/* Devicon slugs for recognizable technology logos. Names without a reliable
   public logo fall back to a plain glyph badge (see TechIcon). */
const TECH_SLUGS = {
  'Kafka': 'apachekafka', 'Apache Kafka': 'apachekafka',
  'Spark': 'apachespark', 'Spark Streaming': 'apachespark', 'PySpark MLlib': 'apachespark',
  'Flink': 'apacheflink',
  'Airflow': 'apacheairflow',
  'RabbitMQ': 'rabbitmq',
  'Docker': 'docker', 'Docker Compose': 'docker',
  'Python': 'python',
  'JavaScript': 'javascript',
  'PostgreSQL': 'postgresql',
  'MongoDB': 'mongodb',
  'Cassandra': 'apachecassandra',
  'Redis': 'redis',
  'FastAPI': 'fastapi',
  'Flask': 'flask', 'Flask API': 'flask',
  'Angular': 'angularjs',
  'TensorFlow': 'tensorflow',
  'PyTorch': 'pytorch',
  'scikit-learn': 'scikitlearn',
  'React': 'react',
  'Laravel': 'laravel',
  'Tailwind CSS': 'tailwindcss',
  'MEAN': 'mongodb',
};

const data = {
  en: {
    nav: ['Experience', 'Academic Background', 'Projects', 'Skills', 'Profile', 'Credentials', 'Contact'],
    role: 'Data Engineering & AI',
    status: 'Fresh graduate — open to professional opportunities and projects',
    kicker: 'Systems for data, pipelines, and applied AI',
    titleA: 'Building useful intelligence',
    titleB: 'from complex data.',
    intro: 'Fresh graduate with a strong foundation in data engineering and artificial intelligence, and the full-stack ability to build the applications that put that work in front of people. Open to professional opportunities and to development or technical projects.',
    view: 'View CV', download: 'Download PDF', contact: 'Let’s connect',
    profileTag: 'Profile', profile: 'A systems-minded approach to data.',
    about: 'I am a fresh graduate in Data Engineering and Artificial Intelligence, with a strong technical foundation across data warehousing, pipeline orchestration, message-driven architectures and real-time analytics, complemented by machine learning and AI. I also have full-stack development ability, so I can design, build and ship the applications that put that data and AI work in front of users. I am ready and available for professional opportunities, and open to development and technical projects.',
    focusTag: 'Focus areas',
    focusAreas: [
      ['Master in AI & Data Science', GraduationCap],
      ['Data Engineering', Database],
      ['Artificial Intelligence', BrainCircuit],
      ['Business Intelligence', Activity],
      ['Full-Stack Development', Terminal],
    ],
    stats: [['3', 'Internships completed'], ['3', 'End-to-end systems shipped'], ['10+', 'Data & AI tools used in production'], ['4', 'Academic milestones completed']],
    exp: 'Experience', expTag: 'Career', expSub: 'Roles where I designed and shipped data and AI systems end to end.',
    projects: 'Selected work', projTag: 'Case studies', projSub: 'Systems I designed end-to-end — click a project to see the architecture, approach and outcome.',
    skills: 'Technical capabilities', skillsTag: 'Toolkit', skillsSub: 'The stack I use to move data reliably and build AI on top of it.',
    education: 'Academic Background', eduTag: 'Academic background',
    certs: 'Credentials', certsTag: 'Professional archive', certText: 'Training and certificates collected alongside academic work.',
    preview: 'Preview', close: 'Close preview',
    cv: 'Curriculum vitae', cvText: 'A concise record of education, experience, projects and technical work.',
    contactTag: 'Contact',
    contactTitle: 'Interested in building or researching with data?',
    contactText: 'I welcome conversations about AI, data engineering, machine learning and research opportunities.',
    footer: 'Designed as a living technical record.',
    focus: 'Focus', approach: 'Approach', problem: 'Problem', solution: 'Solution', outcomes: 'Outcomes', stack: 'Stack', year: 'Year',
    experience: [
      {
        period: 'Feb 2026 — Jul 2026', role: 'Final-Year Project Intern', org: 'TE Connectivity',
        title: 'Integrated Business Intelligence Platform for Manufacturing and Finance KPIs',
        bullets: [
          'Designed a dimensional PostgreSQL Data Warehouse using a star schema with snapshot-based historization to model CIP and Fixed Assets data for structured decision-support analytics.',
          'Orchestrated automated ETL pipelines with Apache Airflow, distributing monthly SAP ERP data extraction, transformation, and KPI computation across RabbitMQ and Celery workers.',
          'Engineered a FastAPI backend with role-based access control and Redis-cached KPI retrieval, powering interactive BI dashboards for manufacturing and finance KPI monitoring.',
          'Developed an AI assistant integrating LangChain with a self-hosted Ollama LLM for natural-language Text-to-SQL querying, enforcing deterministic SQL validation for read-only, domain-restricted, and prompt-injection-resistant access.'
        ]
      },
      {
        period: 'Jul 2025 — Sep 2025', role: 'Data Engineer Intern', org: 'TE Connectivity',
        title: 'Quality and Production Real-Time Monitoring Application',
        bullets: [
          'Analyzed an existing HYDRA MES, AWS Lambda, and Aurora DB batch pipeline based on two-minute polling and designed a four-layer distributed architecture covering ingestion, streaming, storage, and visualization.',
          'Implemented a clustered RabbitMQ ingestion layer and a three-broker Apache Kafka streaming layer publishing machine data, quality metrics, and production KPIs into partitioned topics.',
          'Deployed an Apache Flink cluster with JobManagers and three TaskManagers to compute real-time KPI aggregations including cycle time, temperature, and scrap rate.',
          'Implemented a hybrid storage architecture using Redis for recent KPI data and Cassandra for historical data, and delivered real-time Grafana dashboards with threshold-based anomaly alerts.',
          'Automated deployment and orchestration using Python and Docker Compose.'
        ]
      },
      {
        period: 'Apr 2025 — Jun 2025', role: 'Full-Stack Developer Intern', org: 'E-Commerce Platform for a Bookstore',
        title: 'Admin Panel and Client Section',
        bullets: [
          'Designed and developed a two-sided e-commerce platform with Laravel, React, and Tailwind CSS to display and sell bookstore products.',
          'Built an Admin Panel covering order management, product and category management, sales reporting, and automatic invoice generation.',
          'Built a Client Section featuring category-based product browsing, product detail pages, a shopping cart, order placement with tracking, automatic invoice access, and user account management.'
        ]
      }
    ],
    academic: [
      { school: 'FST Tangier', degree: 'Master in Artificial Intelligence & Data Science', period: '2024 – 2026' },
      { school: 'FST Settat', degree: 'Licence in Computer Engineering', period: '2023 – 2024' },
      { school: 'FST Settat', degree: 'DEUST in Mathematics, Physics & Computer Science', period: '2021 – 2023' },
      { school: 'Lycée Général El Ketani', degree: 'Baccalaureate in Physical Sciences', period: '2020 – 2021' }
    ],
    projectList: [
      {
        tag: 'NLP · BIG DATA', title: 'Real-Time Amazon Customer Review Sentiment Analysis', year: '2025',
        flow: ['Kafka ingestion', 'Spark Streaming', 'TF-IDF features', 'PySpark MLlib', 'Live dashboard'],
        problem: 'Understanding customer sentiment across a large, continuous stream of Amazon reviews as it arrives.',
        solution: 'A real-time pipeline ingesting reviews via Kafka for distributed stream processing, with an NLP preprocessing and feature-engineering stage (lemmatization, TF-IDF) and train/validation/test splits.',
        outcomes: [
          'Trained and compared classification models with PySpark MLlib, tuning hyperparameters and selecting the best model on validation data.',
          'Designed an architecture for real-time prediction display and an offline analytics dashboard backed by MongoDB.'
        ],
        tags: ['Kafka', 'Spark Streaming', 'PySpark MLlib', 'NLP']
      },
      {
        tag: 'COMPUTER VISION', title: 'Content-Based Image Retrieval with YOLO', year: '2025',
        flow: ['YOLOv8n detection', 'Feature extraction', 'Similarity search', 'Flask API'],
        problem: 'Retrieving visually similar objects across an image collection without manual tagging.',
        solution: 'A content-based image retrieval system using YOLOv8n to detect and localize objects across a 15-category collection, with a feature-extraction pipeline combining color histograms, Tamura/Gabor texture descriptors, and Hu moments with contour orientation.',
        outcomes: [
          'Built a Flask/Flask-RESTful API to compute image descriptors, consumed by a MEAN-stack web app.',
          'Designed a similarity-search workflow retrieving and ranking visually similar detected objects.'
        ],
        tags: ['Computer Vision', 'Object Detection', 'Feature Extraction', 'Flask']
      },
      {
        tag: 'LLM · DEVELOPER TOOLS', title: 'AI Linux CMD Assistant', year: '2025',
        flow: ['Llama 2 base', 'PEFT (LoRA) tuning', 'FastAPI serving', 'React interface'],
        problem: 'Developers need fast, specialised help with Linux commands without leaving their workflow.',
        solution: 'Fine-tuned Llama 2 with PEFT (LoRA), served by FastAPI with GPU detection and CPU fallback.',
        outcomes: ['Built a React/Vite and Tailwind interface.', 'Implemented the fine-tuning workflow with Transformers, PEFT, PyTorch and Pandas.'],
        tags: ['Llama 2', 'PEFT (LoRA)', 'FastAPI', 'React']
      }
    ],
    groups: [
      ['Data engineering', ['Kafka', 'Spark', 'Flink', 'Airflow', 'RabbitMQ', 'Celery', 'ETL', 'n8n'], Database],
      ['AI & machine learning', ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'scikit-learn', 'TensorFlow', 'PyTorch', 'PySpark MLlib', 'LangChain', 'Ollama', 'Text-to-SQL'], BrainCircuit],
      ['Programming & data', ['Python', 'SQL', 'JavaScript', 'PostgreSQL', 'MongoDB', 'Cassandra', 'Redis'], Terminal],
      ['Web & infrastructure', ['FastAPI', 'Flask', 'Angular', 'Docker', 'Docker Compose', 'REST APIs'], Layers]
    ],
    certificates: [
      ['Supervised Machine Learning: Regression and Classification', 'DeepLearning.AI · Feb 2025', '/ml.pdf', 'Machine learning'],
      ['Fundamentals of Deep Learning', 'NVIDIA · Nov 2025', '/dl_nvidia.pdf', 'Deep learning'],
      ['SAP FICO (Finance and Controlling)', 'Udemy Course Completion · Aug 2026', '/fico.pdf', 'Finance & controlling']
    ]
  },
  fr: {
    nav: ['Expérience', 'Formation académique', 'Projets', 'Compétences', 'Profil', 'Certifications', 'Contact'],
    role: 'Data Engineering & IA',
    status: 'Jeune diplômé — ouvert aux opportunités professionnelles et aux projets',
    kicker: 'Des systèmes pour la donnée, les pipelines et l’IA appliquée',
    titleA: 'Concevoir une intelligence utile',
    titleB: 'à partir de données complexes.',
    intro: 'Jeune diplômé avec de solides bases en ingénierie de la donnée et en intelligence artificielle, ainsi que la capacité full-stack de construire les applications qui mettent ce travail entre les mains des utilisateurs. Ouvert aux opportunités professionnelles et aux projets de développement.',
    view: 'Voir le CV', download: 'Télécharger le PDF', contact: 'Me contacter',
    profileTag: 'Profil', profile: 'Une approche systémique de la donnée.',
    about: 'Je suis un jeune diplômé en Data Engineering et Intelligence Artificielle, avec une solide base technique en entrepôts de données, orchestration de pipelines, architectures événementielles et analytique temps réel, complétée par le machine learning et l’IA. J’ai également la capacité de développer en full-stack, ce qui me permet de concevoir, construire et livrer les applications qui exposent ce travail data et IA aux utilisateurs. Je suis disponible pour des opportunités professionnelles, et ouvert aux projets de développement et techniques.',
    focusTag: 'Domaines de compétence',
    focusAreas: [
      ['Master IA & Science des Données', GraduationCap],
      ['Data Engineering', Database],
      ['Intelligence Artificielle', BrainCircuit],
      ['Business Intelligence', Activity],
      ['Développement Full-Stack', Terminal],
    ],
    stats: [['3', 'Stages réalisés'], ['3', 'Systèmes livrés de bout en bout'], ['10+', 'Outils data & IA utilisés en production'], ['4', 'Étapes académiques complétées']],
    exp: 'Expérience', expTag: 'Parcours', expSub: 'Des rôles où j’ai conçu et livré des systèmes data et IA de bout en bout.',
    projects: 'Projets sélectionnés', projTag: 'Études de cas', projSub: 'Des systèmes conçus de bout en bout — cliquez sur un projet pour voir l’architecture, l’approche et le résultat.',
    skills: 'Compétences techniques', skillsTag: 'Boîte à outils', skillsSub: 'La stack que j’utilise pour faire circuler la donnée et construire de l’IA dessus.',
    education: 'Formation académique', eduTag: 'Parcours académique',
    certs: 'Certifications', certsTag: 'Archive professionnelle', certText: 'Formations et certificats obtenus en parallèle de mon parcours académique.',
    preview: 'Aperçu', close: 'Fermer l’aperçu',
    cv: 'Curriculum vitæ', cvText: 'Un aperçu concis de ma formation, de mes expériences, projets et compétences techniques.',
    contactTag: 'Contact',
    contactTitle: 'Envie de construire ou de faire de la recherche autour de la donnée ?',
    contactText: 'Je serais ravi d’échanger à propos de l’IA, du data engineering, du machine learning et des opportunités de recherche.',
    footer: 'Conçu comme un carnet technique évolutif.',
    focus: 'Objectif', approach: 'Approche', problem: 'Problème', solution: 'Solution', outcomes: 'Résultats', stack: 'Stack', year: 'Année',
    experience: [
      {
        period: 'Fév 2026 — Juil 2026', role: 'Stagiaire Projet de fin d’études', org: 'TE Connectivity',
        title: 'Plateforme de Business Intelligence intégrée pour les KPI manufacturing et finance',
        bullets: [
          'Conception d’un entrepôt de données PostgreSQL dimensionnel en schéma en étoile avec historisation par snapshots pour modéliser les données CIP et immobilisations à des fins d’analyse décisionnelle.',
          'Orchestration de pipelines ETL automatisés avec Apache Airflow, distribuant l’extraction mensuelle des données SAP ERP, leur transformation et le calcul des KPI via RabbitMQ et des workers Celery.',
          'Conception d’un backend FastAPI avec contrôle d’accès basé sur les rôles et mise en cache des KPI via Redis, alimentant des dashboards BI interactifs pour le suivi des KPI manufacturing et finance.',
          'Développement d’un assistant IA intégrant LangChain avec un LLM Ollama auto-hébergé pour l’interrogation Text-to-SQL en langage naturel, avec validation SQL déterministe pour un accès en lecture seule, restreint au domaine et résistant aux injections de prompt.'
        ]
      },
      {
        period: 'Juil 2025 — Sep 2025', role: 'Stagiaire Data Engineer', org: 'TE Connectivity',
        title: 'Application de monitoring temps réel qualité et production',
        bullets: [
          'Analyse d’un pipeline batch existant (MES HYDRA, AWS Lambda, Aurora DB) basé sur un polling toutes les deux minutes, et conception d’une architecture distribuée en quatre couches : ingestion, streaming, stockage et visualisation.',
          'Mise en place d’une couche d’ingestion RabbitMQ clusterisée et d’une couche de streaming Apache Kafka à trois brokers publiant les données machines, indicateurs qualité et KPI de production dans des topics partitionnés.',
          'Déploiement d’un cluster Apache Flink avec JobManagers et trois TaskManagers pour calculer en temps réel des agrégations de KPI telles que le temps de cycle, la température et le taux de rebut.',
          'Mise en place d’un stockage hybride avec Redis pour les KPI récents et Cassandra pour l’historique, et livraison de dashboards Grafana temps réel avec alertes basées sur des seuils.',
          'Automatisation du déploiement et de l’orchestration avec Python et Docker Compose.'
        ]
      },
      {
        period: 'Avr 2025 — Juin 2025', role: 'Stagiaire Full-Stack Developer', org: 'Plateforme e-commerce de librairie',
        title: 'Espace administrateur et espace client',
        bullets: [
          'Conception et développement d’une plateforme e-commerce à deux volets avec Laravel, React et Tailwind CSS pour présenter et vendre des produits de librairie.',
          'Développement d’un panneau d’administration couvrant la gestion des commandes, des produits et catégories, les rapports de vente et la génération automatique de factures.',
          'Développement d’un espace client avec navigation par catégories, pages détail produit, panier, passation de commande avec suivi, accès automatique aux factures et gestion du compte utilisateur.'
        ]
      }
    ],
    academic: [
      { school: 'FST Tanger', degree: 'Master Intelligence Artificielle & Science des Données', period: '2024 – 2026' },
      { school: 'FST Settat', degree: 'Licence en Génie Informatique', period: '2023 – 2024' },
      { school: 'FST Settat', degree: 'DEUST Mathématiques, Physique & Informatique', period: '2021 – 2023' },
      { school: 'Lycée Général El Ketani', degree: 'Baccalauréat Sciences Physiques', period: '2020 – 2021' }
    ],
    projectList: [
      {
        tag: 'NLP · BIG DATA', title: 'Analyse temps réel des avis clients Amazon', year: '2025',
        flow: ['Ingestion Kafka', 'Spark Streaming', 'Features TF-IDF', 'PySpark MLlib', 'Dashboard temps réel'],
        problem: 'Comprendre le sentiment client dans un flux massif et continu d’avis Amazon, au moment où il se produit.',
        solution: 'Un pipeline temps réel ingérant les avis via Kafka pour un traitement de flux distribué, avec une étape de prétraitement NLP et de feature engineering (lemmatisation, TF-IDF) et des découpages train/validation/test.',
        outcomes: [
          'Entraînement et comparaison de modèles de classification avec PySpark MLlib, réglage des hyperparamètres et sélection du meilleur modèle sur les données de validation.',
          'Conception d’une architecture pour l’affichage des prédictions en temps réel et d’un dashboard analytique hors ligne adossé à MongoDB.'
        ],
        tags: ['Kafka', 'Spark Streaming', 'PySpark MLlib', 'NLP']
      },
      {
        tag: 'COMPUTER VISION', title: 'Recherche d’images par contenu avec YOLO', year: '2025',
        flow: ['Détection YOLOv8n', 'Extraction de features', 'Recherche par similarité', 'API Flask'],
        problem: 'Retrouver des objets visuellement similaires dans une collection d’images sans étiquetage manuel.',
        solution: 'Un système de recherche d’images par contenu utilisant YOLOv8n pour détecter et localiser des objets sur une collection de 15 catégories, avec un pipeline d’extraction de features combinant histogrammes de couleur, descripteurs de texture Tamura/Gabor et moments de Hu avec orientation de contour.',
        outcomes: [
          'Développement d’une API Flask/Flask-RESTful pour calculer les descripteurs d’images, consommée par une application web MEAN-stack.',
          'Conception d’un workflow de recherche par similarité pour retrouver et classer les objets détectés visuellement similaires.'
        ],
        tags: ['Computer Vision', 'Détection d’objets', 'Extraction de features', 'Flask']
      },
      {
        tag: 'LLM · DEVELOPER TOOLS', title: 'Assistant IA Linux CMD', year: '2025',
        flow: ['Base Llama 2', 'Fine-tuning PEFT (LoRA)', 'Service FastAPI', 'Interface React'],
        problem: 'Offrir une aide rapide et spécialisée sur les commandes Linux sans quitter son flux de travail.',
        solution: 'Llama 2 fine-tuné avec PEFT (LoRA), servi par FastAPI avec détection GPU et fallback CPU.',
        outcomes: ['Interface React/Vite et Tailwind.', 'Pipeline de fine-tuning avec Transformers, PEFT, PyTorch et Pandas.'],
        tags: ['Llama 2', 'PEFT (LoRA)', 'FastAPI', 'React']
      }
    ],
    groups: [
      ['Data engineering', ['Kafka', 'Spark', 'Flink', 'Airflow', 'RabbitMQ', 'Celery', 'ETL', 'n8n'], Database],
      ['IA & machine learning', ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'scikit-learn', 'TensorFlow', 'PyTorch', 'PySpark MLlib', 'LangChain', 'Ollama', 'Text-to-SQL'], BrainCircuit],
      ['Programmation & données', ['Python', 'SQL', 'JavaScript', 'PostgreSQL', 'MongoDB', 'Cassandra', 'Redis'], Terminal],
      ['Web & infrastructure', ['FastAPI', 'Flask', 'Angular', 'Docker', 'Docker Compose', 'REST APIs'], Layers]
    ],
    certificates: [
      ['Supervised Machine Learning: Regression and Classification', 'DeepLearning.AI · Fév 2025', '/ml.pdf', 'Machine learning'],
      ['Fundamentals of Deep Learning', 'NVIDIA · Nov 2025', '/dl_nvidia.pdf', 'Deep learning'],
      ['SAP FICO (Finance and Controlling)', 'Udemy Course Completion · Août 2026', '/fico.pdf', 'Finance & controlling']
    ]
  }
};

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('in'); io.unobserve(el); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
function Reveal({ children, as: Tag = 'div', className = '' }) {
  const ref = useReveal();
  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}

function useCountUp(target, active) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const match = String(target).match(/[\d.]+/);
    const num = match ? parseFloat(match[0]) : 0;
    if (!num) { setValue(0); return; }
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setValue(num); return; }
    let raf;
    const duration = 1200;
    const start = performance.now();
    const tick = now => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * num * 10) / 10);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => raf && cancelAnimationFrame(raf);
  }, [active, target]);
  return value;
}

function StatCard({ n, l }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setActive(true); io.unobserve(el); }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const value = useCountUp(n, active);
  const suffix = /\+/.test(String(n)) ? '+' : '';
  const display = Number.isInteger(value) ? value : value.toFixed(1);
  return (
    <div className="glass" ref={ref}>
      <b className="mono">{active ? `${display}${suffix}` : '0'}</b>
      <span>{l}</span>
    </div>
  );
}

/* Progressive type / delete animation for the hero headline. Falls back to
   the full static string when the user prefers reduced motion. */
function useTypewriter(text) {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setDisplay(text); return; }
    let timer;
    let i = 0;
    let deleting = false;
    setDisplay('');
    const tick = () => {
      if (!deleting) {
        i += 1;
        setDisplay(text.slice(0, i));
        if (i >= text.length) { deleting = true; timer = setTimeout(tick, 2000); return; }
        timer = setTimeout(tick, 42);
      } else {
        i -= 1;
        setDisplay(text.slice(0, Math.max(i, 0)));
        if (i <= 0) { deleting = false; timer = setTimeout(tick, 600); return; }
        timer = setTimeout(tick, 22);
      }
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [text]);
  return display;
}

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    const fine = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add('has-custom-cursor');

    let mx = -100, my = -100, rx = -100, ry = -100, raf;
    const move = e => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) { dot.style.transform = `translate(${mx}px, ${my}px)`; }
    };
    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      if (ring) { ring.style.transform = `translate(${rx}px, ${ry}px)`; }
      raf = requestAnimationFrame(loop);
    };
    const over = e => {
      const target = e.target instanceof Element ? e.target.closest('a, button, .glass, .skill-card, .project-head, input, textarea, .tech-chip, [role="dialog"] button') : null;
      document.body.classList.toggle('cursor-active', !!target);
    };
    const down = () => document.body.classList.add('cursor-click');
    const up = () => document.body.classList.remove('cursor-click');
    const leave = () => document.body.classList.add('cursor-hidden');
    const enter = () => document.body.classList.remove('cursor-hidden');

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
      if (raf) cancelAnimationFrame(raf);
      document.body.classList.remove('has-custom-cursor', 'cursor-active', 'cursor-click', 'cursor-hidden');
    };
  }, []);
  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}

function Modal({ doc, close, label }) {
  if (!doc) return null;
  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={doc.title} onMouseDown={close}>
      <div className="viewer" onMouseDown={e => e.stopPropagation()}>
        <header><div><small>{label}</small><h2>{doc.title}</h2></div><button onClick={close} aria-label={label}><X /></button></header>
        <iframe title={doc.title} src={`${doc.file}#view=FitH`} />
        <footer><span>{label}</span><a className="btn btn-primary" href={doc.file} download><Download />{doc.download}</a></footer>
      </div>
    </div>
  );
}

/* Replaces the previous placeholder "system status" card with an honest
   summary of the author's actual focus areas. */
function FocusCard({ t }) {
  return (
    <div className="sys-card glass mono">
      {t.focusAreas.map(([label, Icon], i) => (
        <div className="row" key={i}>
          <span className="focus-icon"><Icon /></span>
          <b>{label}</b>
        </div>
      ))}
    </div>
  );
}

function TechIcon({ name }) {
  const slug = TECH_SLUGS[name];
  const [failed, setFailed] = useState(false);
  if (!slug || failed) {
    return <span className="tech-fallback" aria-hidden="true">{name.charAt(0)}</span>;
  }
  return (
    <img
      className="tech-logo"
      src={`https://cdn.jsdelivr.net/gh/devicon/devicon/icons/${slug}/${slug}-original.svg`}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function ProjectPanel({ p, index, t, open, onToggle }) {
  return (
    <div className={`project-panel glass ${open ? 'open' : ''}`}>
      <button className="project-head" onClick={onToggle} aria-expanded={open}>
        <span className="idx mono">0{index + 1}</span>
        <span className="titles">
          <small>{p.tag}{p.year ? ` · ${p.year}` : ''}</small>
          <h3>{p.title}</h3>
        </span>
        <span className="chevron"><ChevronRight /></span>
      </button>
      <div className="project-body">
        <div className="project-body-inner">
          <div>
            <div className="project-flow">
              {p.flow.map((f, i) => (
                <React.Fragment key={f}>
                  <span>{f}</span>
                  {i < p.flow.length - 1 && <Workflow />}
                </React.Fragment>
              ))}
            </div>
            <div className="pblock"><span>{t.problem}</span><p>{p.problem}</p></div>
            <div className="pblock"><span>{t.solution}</span><p>{p.solution}</p></div>
            <div className="tags">{p.tags.map(x => <em key={x} className="tech-chip"><TechIcon name={x} />{x}</em>)}</div>
          </div>
          <div>
            <div className="pblock"><span>{t.outcomes}</span>
              <ul>{p.outcomes.map(o => <li key={o}>{o}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('portfolio-language') || 'en');
  const [menu, setMenu] = useState(false);
  const [doc, setDoc] = useState(null);
  const [openProject, setOpenProject] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [formState, setFormState] = useState('idle'); // idle | sending | success | error
  const t = data[lang];
  const heroRef = useRef(null);
  const typedHeadline = useTypewriter(`${t.titleA} ${t.titleB}`);
  const partA = typedHeadline.slice(0, t.titleA.length);
  const partB = typedHeadline.slice(t.titleA.length);

  useEffect(() => { document.documentElement.lang = lang; localStorage.setItem('portfolio-language', lang); }, [lang]);
  useEffect(() => { const f = e => e.key === 'Escape' && setDoc(null); window.addEventListener('keydown', f); return () => window.removeEventListener('keydown', f); }, []);
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const move = e => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
    };
    el.addEventListener('mousemove', move);
    return () => el.removeEventListener('mousemove', move);
  }, []);

  const open = (file, title) => setDoc({ file, title, download: t.download });
  const ids = ['experience', 'academic', 'projects', 'skills', 'profile', 'credentials', 'contact'];
  const sendMessage = async event => {
    event.preventDefault();
    if (formState === 'sending') return;
    const service = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_8t33o08';
    const template = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_732imsn';
    const key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'qzrpmGOiFdFwNyOuf';
    setFormState('sending');
    setFormStatus(lang === 'fr' ? 'Envoi en cours…' : 'Sending…');
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ service_id: service, template_id: template, user_id: key, template_params: { name: form.name, email: form.email, time: new Date().toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-GB'), message: form.message, reply_to: form.email } }) });
      if (!response.ok) throw new Error('EmailJS error');
      setForm({ name: '', email: '', message: '' });
      setFormState('success');
      setFormStatus(lang === 'fr' ? 'Message envoyé. Merci !' : 'Message sent. Thank you!');
      setTimeout(() => setFormState(s => (s === 'success' ? 'idle' : s)), 4000);
    } catch {
      setFormState('error');
      setFormStatus(lang === 'fr' ? 'Impossible d’envoyer le message. Essayez à nouveau ou contactez-moi par email.' : 'Unable to send the message. Please try again or email me directly.');
    }
  };

  return (
    <>
      <CustomCursor />
      <div className="aurora" aria-hidden="true"><i className="a1" /><i className="a2" /><i className="a3" /><i className="a4" /></div>
      <div className="noise" aria-hidden="true" />
      <div className="page">
        <header className="header">
          <div className="header-inner glass">
            <a className="brand" href="#top"><span className="dot" />Reda Wafik</a>
            <nav className={menu ? 'show glass' : ''}>{ids.map((id, i) => <a href={'#' + id} onClick={() => setMenu(false)} key={id}>{t.nav[i]}</a>)}</nav>
            <div className="tools">
              <button onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} className="mono">{lang === 'en' ? 'FR' : 'EN'}</button>
              <button className="hamburger" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? <X /> : <Menu />}</button>
            </div>
          </div>
        </header>

        <main id="top">
          {/* Personal introduction: fresh graduate, data + AI foundation, full-stack ability, open to work */}
          <section className="hero" ref={heroRef}>
            <div className="hero-copy">
              <p className="status-pill glass mono"><i className="live" /><Sparkles />{t.status}</p>
              <p className="eyebrow-line mono"><Activity />{t.kicker}</p>
              <h1>{partA}{partB && <span className="grad">{partB}</span>}<span className="caret" aria-hidden="true" /></h1>
              <p className="lede">{t.intro}</p>
              <div className="actions">
                <a className="btn btn-primary" href="#projects">{t.nav[2]}<ChevronRight /></a>
                <button className="btn btn-ghost glass" onClick={() => open('/CV.pdf', t.cv)}><FileText />{t.view}</button>
              </div>
              <div className="social-row">
                <a href="https://linkedin.com/in/reda-wafik-985497269" target="_blank" rel="noreferrer"><Linkedin /></a>
                <a href="https://github.com/REDA09" target="_blank" rel="noreferrer"><Github /></a>
                <a href="mailto:redawafik0@gmail.com"><Mail /></a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="photo-frame">
                <div className="inner"><img src="/photo.jpg" alt="Reda Wafik" /></div>
              </div>
              <FocusCard t={t} />
            </div>
          </section>

          <Reveal as="section">
            <section id="experience" className="section">
              <div className="section-head">
                <p className="tag mono"><BriefcaseBusiness />{t.expTag}</p>
                <h2>{t.exp}</h2>
                <p>{t.expSub}</p>
              </div>
              <div className="timeline">
                {t.experience.map(x => (
                  <article key={x.org + x.period}>
                    <time className="mono">{x.period}</time>
                    <small className="mono">{x.org}</small>
                    <h3>{x.role}</h3>
                    <p className="exp-title">{x.title}</p>
                    <ul className="exp-bullets">
                      {x.bullets.map(b => <li key={b}>{b}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal as="section">
            <section id="academic" className="section">
              <div className="section-head">
                <p className="tag mono"><GraduationCap />{t.eduTag}</p>
                <h2>{t.education}</h2>
              </div>
              <div className="academic-grid">
                {t.academic.map((x, i) => (
                  <div className="academic-card glass" key={x.degree + i}>
                    <div className="icon"><GraduationCap /></div>
                    <div>
                      <small className="mono">{x.period}</small>
                      <h3>{x.degree}</h3>
                      <p>{x.school}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal as="section">
            <section id="projects" className="section">
              <div className="section-head">
                <p className="tag mono"><Zap />{t.projTag}</p>
                <h2>{t.projects}</h2>
                <p>{t.projSub}</p>
              </div>
              <div className="project-list">
                {t.projectList.map((p, i) => (
                  <ProjectPanel key={p.title} p={p} index={i} t={t} open={openProject === i} onToggle={() => setOpenProject(openProject === i ? -1 : i)} />
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal as="section">
            <section id="skills" className="section">
              <div className="section-head">
                <p className="tag mono"><BrainCircuit />{t.skillsTag}</p>
                <h2>{t.skills}</h2>
                <p>{t.skillsSub}</p>
              </div>
              <div className="skills-grid">
                {t.groups.map(([name, list, Icon]) => (
                  <div className="skill-card glass" key={name}>
                    <div className="icon"><Icon /></div>
                    <h3>{name}</h3>
                    <div>{list.map(x => <em key={x} className="tech-chip"><TechIcon name={x} />{x}</em>)}</div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal as="section" className="section profile" >
            <div id="profile">
              <p className="section-head tag mono"><Cpu />{t.profileTag}</p>
              <h2>{t.profile}</h2>
              <div className="profile-stats">
                {t.stats.map(([n, l]) => <StatCard n={n} l={l} key={l} />)}
              </div>
            </div>
            <div className="profile-text">
              <p>{t.about}</p>
              <a href="#contact" className="link">{t.contact}<ChevronRight /></a>
            </div>
          </Reveal>

          <Reveal as="section">
            <section id="credentials" className="section">
              <div className="section-head">
                <p className="tag mono"><Award />{t.certsTag}</p>
                <h2>{t.certs}</h2>
                <p className="sub">{t.certText}</p>
              </div>
              <div className="certs">
                {t.certificates.map(x => (
                  <div className="cert-card glass" key={x[2]}>
                    <div className="top"><Award /><small className="mono">{x[3]}</small></div>
                    <h3>{x[0]}</h3>
                    <p>{x[1]}</p>
                    <button className="preview-btn" onClick={() => open(x[2], x[0])}>
                      <span className="preview-btn-icon"><ExternalLink /></span>
                      <span>{t.preview}</span>
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal as="section">
            <section className="section">
              <div className="cv-panel glass">
                <div>
                  <p className="section-head tag mono" style={{ marginBottom: '.6rem' }}><FileText />{t.cv}</p>
                  <h2>{t.cv}</h2>
                  <p>{t.cvText}</p>
                </div>
                <div className="actions">
                  <button className="preview-btn preview-btn-lg" onClick={() => open('/CV.pdf', t.cv)}>
                    <span className="preview-btn-icon"><FileText /></span>
                    <span>{t.preview}</span>
                  </button>
                  <a className="btn btn-ghost glass" href="/CV.pdf" download><Download />{t.download}</a>
                </div>
              </div>
            </section>
          </Reveal>

          <Reveal as="div" className="contact">
            <div id="contact" className="contact-panel glass">
              <p className="tag">{t.contactTag}</p>
              <h2>{t.contactTitle}</h2>
              <p>{t.contactText}</p>
              <div className="contact-layout">
                <div className="contact-direct">
                  <a className="email-link" href="mailto:redawafik0@gmail.com">redawafik0@gmail.com <ChevronRight /></a>
                  <a className="phone-link" href="tel:+212699566323"><Phone />+212 699 566 323</a>
                </div>
                <form className={`contact-form state-${formState}`} onSubmit={sendMessage}>
                  <label>{lang === 'fr' ? 'Votre nom' : 'Your name'}<input required name="name" autoComplete="name" disabled={formState === 'sending'} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></label>
                  <label>{lang === 'fr' ? 'Votre email' : 'Your email'}<input required type="email" name="email" autoComplete="email" disabled={formState === 'sending'} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></label>
                  <label>{lang === 'fr' ? 'Votre message' : 'Your message'}<textarea required name="message" rows="4" disabled={formState === 'sending'} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /></label>
                  <button className={`btn btn-primary submit-btn ${formState}`} type="submit" disabled={formState === 'sending'}>
                    {formState === 'sending' && <><Loader2 className="spin" />{lang === 'fr' ? 'Envoi…' : 'Sending…'}</>}
                    {formState === 'success' && <><Check />{lang === 'fr' ? 'Envoyé !' : 'Sent!'}</>}
                    {(formState === 'idle' || formState === 'error') && <><Mail />{lang === 'fr' ? 'Envoyer le message' : 'Send message'}</>}
                  </button>
                  {formStatus && <p className={`form-status ${formState}`} aria-live="polite">{formStatus}</p>}
                </form>
              </div>
            </div>
          </Reveal>
        </main>

        <footer>
          <span className="mono">© {new Date().getFullYear()} REDA WAFIK</span>
          <span className="mono">{t.footer}</span>
          <span className="mono">GitHub · LinkedIn</span>
        </footer>

        <Modal doc={doc} close={() => setDoc(null)} label={t.close} />
      </div>
    </>
  );
}

export default App;