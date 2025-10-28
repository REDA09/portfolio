import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Moon, 
  Sun, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  MapPin, 
  Calendar,
  ExternalLink,
  Code,
  Database,
  Brain,
  BarChart3,
  Cpu,
  Globe,
  Download,
  Award,
  Briefcase,
  GraduationCap,
  FileText,
  Eye,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);
  const [showCertModal, setShowCertModal] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const skills = {
    'Machine Learning': ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'MLlib (Spark)', 'NLP'],
    'Big Data': ['Kafka', 'RabbitMQ', 'Spark', 'Flink', 'Airflow', 'Docker', 'ETL'],
    'Bases de Données': ['Oracle', 'MySQL', 'SQL Server', 'PostgreSQL', 'MongoDB', 'Cassandra', 'Redis'],
    'Développement': ['Python', 'Java', 'JavaScript', 'FastAPI', 'React'],
    'Visualisation': ['Power BI', 'Grafana', 'Matplotlib', 'Seaborn']
  };

  const education = [
    {
      degree: "Master en Intelligence Artificielle et Science des Données (AIDS)",
      institution: "FST Tanger",
      period: "2024 - Présent",
      icon: <Brain className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      degree: "Licence en Génie Informatique",
      institution: "FST Settat",
      period: "2023 - 2024",
      icon: <Code className="w-5 h-5" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Diplôme en Mathématiques, Informatique et Physique (MIP)",
      institution: "FST Settat",
      period: "2021 - 2023",
      icon: <Cpu className="w-5 h-5" />,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const experiences = [
    {
      title: "Stage Data Engineer",
      company: "TE CONNECTIVITY",
      period: "2025 (2 mois)",
      description: "Mise en place d'un pipeline de monitoring industriel avec dashboard temps réel",
      achievements: [
        "Conception d'une architecture distribuée basée sur RabbitMQ, Kafka et Apache Flink pour le traitement de flux massifs de données en temps réel",
        "Développement d'un pipeline de collecte, traitement et agrégation pour surveiller la qualité et la performance de la production",
        "Intégration de Redis pour la gestion du cache temps réel et de Cassandra pour le stockage historique des métriques",
        "Conception d'un dashboard Grafana interactif affichant les indicateurs clés (KPI), détections d'anomalies et alertes de production",
        "Optimisation du débit et de la latence des flux via tuning Flink et partitionnement Kafka"
      ],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Stage de fin d'études",
      company: "FST Settat",
      period: "2024",
      description: "Développement d'une plateforme e-commerce complète",
      achievements: [
        "Développement d'une plateforme e-commerce avec gestion des commandes et facturation",
        "Technologies : HTML, CSS, Bootstrap, JavaScript, PHP (POO, MVC), MySQL"
      ],
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-blue-500 to-indigo-500"
    }
  ];

  const projects = [
    {
      title: "Système d'Analyse Intelligente des Avis Clients",
      description: "Architecture complète de traitement de données massives en temps réel avec NLP pour l'analyse de sentiments sur des millions d'avis produits Amazon.",
      achievements: [
        "Collecte et prétraitement de millions d'avis produits (tokenisation, stopwords, lemmatisation)",
        "Vectorisation via TF-IDF et embeddings pour la représentation sémantique du texte",
        "Entraînement de modèles ML (Logistic Regression, Random Forest, SVM) sur Spark MLlib",
        "Intégration d'un pipeline Big Data temps réel avec Kafka et Spark Streaming",
        "Développement d'une interface web interactive avec React pour la visualisation des tendances de satisfaction"
      ],
      technologies: ["NLP", "MLlib", "Spark", "Kafka", "React"],
      type: "NLP & Big Data",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Application Web d'Analyse Prédictive",
      description: "Plateforme interactive permettant aux non-programmeurs d'automatiser le prétraitement des données et d'entraîner des modèles ML.",
      achievements: [
        "Développement d'une plateforme interactive permettant d'importer et explorer des datasets",
        "Automatisation du prétraitement des données et entraînement multi-algorithmes",
        "Visualisation dynamique des performances et interprétation des modèles via matplotlib et seaborn",
        "Export de modèles entraînés pour réutilisation et comparaison de scénarios prédictifs"
      ],
      technologies: ["ML", "Streamlit", "Scikit-learn", "Pandas", "Matplotlib"],
      type: "Machine Learning",
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Surveillance Intelligente de la Qualité de l'Air",
      description: "Système IoT avec Machine Learning pour la prédiction et la surveillance de la qualité de l'air en temps réel.",
      achievements: [
        "Simulation de capteurs IoT (CO, NOx, Température, Humidité) et ingestion temps réel",
        "Entraînement d'un modèle Random Forest avec évaluation par cross-validation pour la prédiction de la qualité de l'air",
        "Déploiement d'une API prédictive avec FastAPI et orchestration via Node-RED",
        "Intégration de dashboards IoT sur Node-RED et Adafruit IO pour la visualisation en temps réel",
        "Mise en place d'alertes WhatsApp (Twilio) et publication MQTT pour notification instantanée"
      ],
      technologies: ["IoT", "ML", "FastAPI", "Cloud", "Node-RED"],
      type: "IoT & ML",
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Plateforme E-commerce pour Vente de Comptes",
      description: "Plateforme sécurisée pour la vente de comptes avec système de portefeuille digital et gestion des transactions.",
      achievements: [
        "Développement d'une plateforme sécurisée pour la vente de comptes",
        "Implémentation d'un portefeuille digital pour la gestion des transactions financières",
        "Architecture MVC avec PHP orienté objet"
      ],
      technologies: ["HTML/CSS", "PHP", "MySQL", "JavaScript", "jQuery"],
      type: "Full Stack",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const DocumentModal = ({ show, onClose, title, pdfUrl, downloadName }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
        <div className="relative w-full max-w-6xl h-[90vh] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600">
            <h3 className="text-2xl font-bold text-white flex items-center gap-3">
              <FileText className="w-6 h-6" />
              {title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="h-[calc(100%-140px)] overflow-auto">
            <iframe
              src={pdfUrl}
              className="w-full h-full"
              title={title}
            />
          </div>

          {/* Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-center gap-4">
            <a
              href={pdfUrl}
              download={downloadName}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-0.5 font-semibold"
            >
              <Download className="w-5 h-5" />
              Télécharger
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-semibold"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                REDA WAFIK
              </div>
              <div className="flex items-center gap-4">
                <a href="#contact" className="hidden sm:block px-4 py-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  Me contacter
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all hover:scale-110"
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Profile Photo */}
            <div className="mb-8 animate-float">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                  <img 
                    src="/photo.jpg" 
                    alt="REDA WAFIK" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                    <span className="text-4xl font-bold text-white">RW</span>
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                REDA WAFIK
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
              Étudiant en Master IA & Science des Données
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              À la recherche d'un stage PFE à partir de Février 2026
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up animation-delay-600">
              <a href="mailto:redawafik0@gmail.com" className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-2xl transition-all transform hover:-translate-y-1 font-semibold">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Me contacter
              </a>
              <a href="tel:+212699566323" className="flex items-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all transform hover:-translate-y-1 font-semibold">
                <Phone className="w-5 h-5" />
                +212 699-566323
              </a>
            </div>
            
            <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-800">
              <a href="https://linkedin.com/in/reda-wafik-985497269" target="_blank" rel="noopener noreferrer" 
                 className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-110">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a href="https://github.com/REDA09" target="_blank" rel="noopener noreferrer" 
                 className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-110">
                <Github className="w-6 h-6 text-gray-800 dark:text-white" />
              </a>
              <a href="mailto:redawafik0@gmail.com" 
                 className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-110">
                <Mail className="w-6 h-6 text-red-600" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                À Propos
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                Étudiant en dernière année de Master en Intelligence Artificielle et Science des Données (AIDS) à la FST Tanger, 
                passionné par l'analyse, la valorisation et la modélisation des données. Motivé par la mise en œuvre de solutions 
                innovantes en Intelligence Artificielle, Data Science, Machine Learning, Data Engineering et Big Data, je suis 
                actuellement à la recherche d'un stage de fin d'études (PFE) à partir de Février 2026 dans tous les domaines 
                liés à l'IA et à la Data, afin de mettre en pratique mes compétences techniques et analytiques au service de 
                projets concrets et impactants.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <Briefcase className="w-10 h-10 inline-block mr-3" />
              Expérience Professionnelle
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                  <div className={`h-2 bg-gradient-to-r ${exp.gradient}`}></div>
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${exp.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                          <span className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient} flex-shrink-0`}></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <GraduationCap className="w-10 h-10 inline-block mr-3" />
              Formation
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <div key={index} className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className={`inline-flex p-3 bg-gradient-to-r ${edu.gradient} rounded-xl shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                    {edu.icon}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">{edu.period}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              <Award className="w-10 h-10 inline-block mr-3" />
              Certifications
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                <div className="h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">Machine Learning Specialization</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">DeepLearning.AI & Stanford University</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">via Coursera</p>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold">
                        <Calendar className="w-4 h-4" />
                        Février 2025
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => setShowCertModal(true)}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-0.5 font-semibold"
                    >
                      <Eye className="w-5 h-5" />
                      Voir le certificat
                    </button>
                    <a
                      href="/Coursera J8GWDBSXULTB.pdf"
                      download="Certificat-Machine-Learning-REDA-WAFIK.pdf"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all font-semibold"
                    >
                      <Download className="w-5 h-5" />
                      Télécharger
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Compétences Techniques
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2">
                  <h3 className="text-lg font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
                    <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-sm rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300 cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projets Clés
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${project.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                        {project.icon}
                      </div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-2">Réalisations :</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`}></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-xs rounded-lg font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Langues
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">ع</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Arabe</h3>
                <p className="text-gray-600 dark:text-gray-400">Maternelle</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">Fr</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Français</h3>
                <p className="text-gray-600 dark:text-gray-400">Technique</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">En</span>
                </div>
                <h3 className="font-bold text-xl mb-2">Anglais</h3>
                <p className="text-gray-600 dark:text-gray-400">Technique</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt pour un Stage PFE</h2>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
              À partir de Février 2026
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">
              À la recherche d'opportunités dans l'IA, la Data Science, le Machine Learning, le Data Engineering et le Big Data
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <a href="mailto:redawafik0@gmail.com" className="group flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-2xl font-semibold text-lg">
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                redawafik0@gmail.com
              </a>
              <a href="tel:+212699566323" className="flex items-center gap-3 px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-purple-600 transition-all transform hover:-translate-y-1 shadow-2xl font-semibold text-lg">
                <Phone className="w-6 h-6" />
                +212 699-566323
              </a>
            </div>
            
            {/* CV Download Section */}
            <div className="mt-12 pt-12 border-t border-white/30">
              <h3 className="text-3xl font-bold mb-8 flex items-center justify-center gap-3">
                <FileText className="w-8 h-8" />
                Mon CV
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setShowCVModal(true)}
                  className="group flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-all transform hover:-translate-y-1 shadow-2xl font-semibold text-lg"
                >
                  <Eye className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Voir le CV
                </button>
                <a 
                  href="/CV_REDA_WAFIK.pdf" 
                  download="CV-REDA-WAFIK.pdf"
                  className="group flex items-center gap-3 px-8 py-4 border-2 border-white rounded-full hover:bg-white hover:text-purple-600 transition-all transform hover:-translate-y-1 shadow-2xl font-semibold text-lg"
                >
                  <Download className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  Télécharger CV
                </a>
              </div>
              <p className="text-sm mt-6 opacity-80">
                Curriculum vitae complet avec expériences, formations et projets
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  REDA WAFIK
                </p>
                <p className="text-sm text-gray-400 mt-1">Intelligence Artificielle & Science des Données</p>
              </div>
              
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/reda-wafik-985497269" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all transform hover:-translate-y-1">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/REDA09" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-all transform hover:-translate-y-1">
                  <Github className="w-5 h-5" />
                </a>
                <a href="mailto:redawafik0@gmail.com" 
                   className="p-3 bg-gray-800 rounded-full hover:bg-red-600 transition-all transform hover:-translate-y-1">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
              <p>&copy; 2025 REDA WAFIK. Tous droits réservés.</p>
            </div>
          </div>
        </footer>

        {/* Modals */}
        <DocumentModal 
          show={showCVModal}
          onClose={() => setShowCVModal(false)}
          title="Curriculum Vitae"
          pdfUrl="/CV_REDA_WAFIK.pdf"
          downloadName="CV-REDA-WAFIK.pdf"
        />

        <DocumentModal 
          show={showCertModal}
          onClose={() => setShowCertModal(false)}
          title="Certificat Machine Learning"
          pdfUrl="/Coursera J8GWDBSXULTB.pdf"
          downloadName="Certificat-Machine-Learning-REDA-WAFIK.pdf"
        />

      </div>
    </div>
  );
}

export default App;