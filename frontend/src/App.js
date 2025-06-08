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
  Globe
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
    'Programming Languages': ['Python', 'Java', 'JavaScript', 'PHP'],
    'Frameworks': ['FastAPI', 'React', 'Bootstrap'],
    'Databases': ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
    'AI/ML': ['Keras', 'TensorFlow', 'Scikit-learn', 'Deep Learning', 'NLP'],
    'Data Visualization': ['Matplotlib', 'Seaborn', 'Power BI'],
    'Big Data': ['Kafka', 'Spark', 'PySpark', 'Docker', 'MLlib']
  };

  const education = [
    {
      degree: "Master en Intelligence Artificielle et Science des Données",
      institution: "Faculté des Sciences et Techniques, Tanger",
      period: "2024 - Présent",
      icon: <Brain className="w-5 h-5" />
    },
    {
      degree: "Licence en Génie Informatique",
      institution: "Faculté des Sciences et Techniques, Settat",
      period: "2023 - 2024",
      icon: <Code className="w-5 h-5" />
    },
    {
      degree: "Diplôme en Mathématiques, Informatique et Physique",
      institution: "Faculté des Sciences et Techniques, Settat",
      period: "2021 - 2023",
      icon: <Cpu className="w-5 h-5" />
    }
  ];

  const projects = [
    {
      title: "Application Web d'Analyse Prédictive",
      description: "Développement d'une interface utilisateur pour l'automatisation du prétraitement des données avec implémentation de multiples algorithmes de Machine Learning accessibles aux non-programmeurs.",
      technologies: ["Streamlit", "Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
      type: "Machine Learning",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Analyse des Sentiments sur Produits Amazon en Temps Réel",
      description: "Conception d'une architecture complète de traitement de données massives en temps réel avec prétraitement avancé du texte et analyse prédictive en temps réel.",
      technologies: ["Kafka", "Zookeeper", "Spark", "MongoDB", "Docker", "Python", "PySpark MLlib"],
      type: "Big Data & IA",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Plateforme E-commerce pour Vente de Comptes",
      description: "Développement d'une plateforme sécurisée pour la vente de comptes avec implémentation d'un portefeuille digital pour la gestion des transactions financières.",
      technologies: ["HTML/CSS", "PHP", "MySQL", "JavaScript", "jQuery"],
      type: "Full Stack",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="font-bold text-xl text-blue-600 dark:text-blue-400">
                REDA WAFIK
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-16">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-5"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1655393001768-d946c97d6fd1)'
            }}
          />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              REDA WAFIK
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Étudiant en Master en Intelligence Artificielle et Science des Données avec formation en ingénierie logicielle. 
              Passionné par le développement de solutions intégrant l'IA et l'apprentissage automatique.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:redawafik0@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Mail className="w-5 h-5" />
                Contact
              </a>
              <a href="tel:+212699566323" className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Phone className="w-5 h-5" />
                +212 699-566323
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://linkedin.com/in/reda-wafik-985497269" target="_blank" rel="noopener noreferrer" 
                 className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a href="mailto:redawafik0@gmail.com" 
                 className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-colors">
                <Mail className="w-6 h-6 text-red-600" />
              </a>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Formation</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      {edu.icon}
                    </div>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{edu.period}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Certifications</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Machine Learning Specialization</h3>
                    <p className="text-gray-600 dark:text-gray-300">DeepLearning.AI, Université de Stanford</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">Focus: Apprentissage supervisé</p>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">Février 2025</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Compétences Techniques</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-full">
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
        <section className="py-20 relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 dark:opacity-3"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71)'
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Projets</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      {project.icon}
                    </div>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{project.type}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Expérience Professionnelle</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Stage de fin d'études - Plateforme e-commerce</h3>
                    <p className="text-gray-600 dark:text-gray-300">FST Settat</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p>• Développement d'une plateforme e-commerce avec gestion des commandes et facturation</p>
                  <p>• Technologies : HTML, CSS, Bootstrap, JavaScript, PHP (POO, MVC), MySQL</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Languages Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Langues</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">ع</span>
                </div>
                <h3 className="font-bold mb-1">Arabe</h3>
                <p className="text-gray-600 dark:text-gray-300">Maternelle</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">Fr</span>
                </div>
                <h3 className="font-bold mb-1">Français</h3>
                <p className="text-gray-600 dark:text-gray-300">Technique</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">En</span>
                </div>
                <h3 className="font-bold mb-1">Anglais</h3>
                <p className="text-gray-600 dark:text-gray-300">Technique</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-8">Prêt pour un Stage PFA</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              À la recherche d'opportunités dans l'analyse de données, l'intelligence artificielle ou le développement
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:redawafik0@gmail.com" className="flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                <Mail className="w-5 h-5" />
                redawafik0@gmail.com
              </a>
              <a href="tel:+212699566323" className="flex items-center gap-2 px-8 py-4 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                <Phone className="w-5 h-5" />
                +212 699-566323
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 REDA WAFIK. Tous droits réservés.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;