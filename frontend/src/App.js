import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import {
  Activity, Award, BrainCircuit, BriefcaseBusiness, CalendarDays, ChevronRight,
  Cpu, Database, Download, ExternalLink, FileText, Github, GraduationCap,
  Layers, Linkedin, Mail, Menu, Moon, Phone, Sun, Terminal, Workflow, X, Zap
} from 'lucide-react';

const data = {
  en: {
    nav: ['Profile', 'Experience', 'Projects', 'Skills', 'Credentials'],
    role: 'Data Engineering & AI',
    status: 'Open to research & engineering opportunities',
    kicker: 'Systems for data, pipelines, and applied AI',
    titleA: 'Building useful intelligence',
    titleB: 'from complex data.',
    intro: 'I design data-driven systems across data warehousing, ETL orchestration, real-time streaming and distributed systems — complemented by machine learning and AI.',
    view: 'View CV', download: 'Download PDF', contact: 'Let’s connect',
    profileTag: 'Profile', profile: 'A systems-minded approach to data.',
    about: 'Data Engineering and AI graduate with hands-on experience in dimensional modelling, pipeline orchestration, message-driven architectures and real-time analytics. I am interested in building scalable, reliable data infrastructure and practical AI systems.',
    stats: [['3', 'Internships completed'], ['3', 'End-to-end systems shipped'], ['10+', 'Data & AI tools used in production'], ['2', 'Degrees in CS / AI']],
    exp: 'Experience', expTag: 'Career', expSub: 'Roles where I designed and shipped data and AI systems end to end.',
    projects: 'Selected work', projTag: 'Case studies', projSub: 'Systems I designed end-to-end — click a project to see the architecture, approach and outcome.',
    skills: 'Technical capabilities', skillsTag: 'Toolkit', skillsSub: 'The stack I use to move data reliably and build AI on top of it.',
    education: 'Education', eduTag: 'Academic background',
    certs: 'Credentials', certsTag: 'Professional archive', certText: 'Training and certificates collected alongside academic work.',
    preview: 'Preview', close: 'Close preview',
    cv: 'Curriculum vitae', cvText: 'A concise record of education, experience, projects and technical work.',
    contactTag: 'Contact',
    contactTitle: 'Interested in building or researching with data?',
    contactText: 'I welcome conversations about AI, data engineering, machine learning and research opportunities.',
    footer: 'Designed as a living technical record.',
    focus: 'Focus', approach: 'Approach', problem: 'Problem', solution: 'Solution', outcomes: 'Outcomes', stack: 'Stack',
    experience: [
      ['Feb 2026 — Jul 2026', 'Final-Year Project Intern', 'TE Connectivity', 'Integrated Business Intelligence platform for manufacturing and finance KPIs.', 'Designed a PostgreSQL dimensional warehouse and Airflow ETL pipelines with RabbitMQ and Celery; built FastAPI dashboards and a LangChain/Ollama Text-to-SQL assistant with controlled read-only access.'],
      ['Jul 2025 — Sep 2025', 'Data Engineering Intern', 'TE Connectivity', 'Quality and production real-time monitoring application.', 'Designed ingestion, streaming, storage and visualisation layers with RabbitMQ, Kafka, Flink, Redis, Cassandra and Grafana; automated deployment with Python and Docker Compose.'],
      ['Apr 2025 — Jun 2025', 'Full-Stack Developer Intern', 'Bookstore E-commerce Platform', 'Admin panel and client section for a responsive bookstore platform.', 'Built order, product, category, sales-reporting and invoice workflows with Laravel, React and Tailwind CSS.']
    ],
    education: [
      ['2026', 'Master’s in Artificial Intelligence & Data Science (AIDS)', 'FST Tangier'],
      ['2024', 'Bachelor’s Degree in Computer Engineering', 'FST Settat']
    ],
    projectList: [
      {
        tag: 'NLP · BIG DATA', title: 'Real-Time Amazon Customer Review Sentiment Analysis',
        flow: ['Kafka ingestion', 'Spark Streaming', 'TF-IDF features', 'PySpark MLlib', 'Live dashboard'],
        problem: 'Customer sentiment in large review streams needs to be understood as it arrives, not after the fact.',
        solution: 'Kafka ingestion, Spark Streaming preprocessing, TF-IDF feature engineering and PySpark MLlib model selection.',
        outcomes: ['Built train-validation-test workflows and compared supervised classifiers.', 'Developed a real-time prediction interface with an offline MongoDB-backed dashboard.'],
        tags: ['Apache Kafka', 'Spark Streaming', 'PySpark MLlib', 'NLP']
      },
      {
        tag: 'COMPUTER VISION', title: 'Content-Based Image Retrieval with YOLO',
        flow: ['YOLOv8n detection', 'Feature extraction', 'Similarity search', 'Flask API'],
        problem: 'Finding visually similar objects across an image collection without manual tagging.',
        solution: 'YOLOv8n detection with colour, Tamura/Gabor texture and Hu-moment feature extraction, exposed through a Flask API.',
        outcomes: ['Implemented detection and localisation across a 15-category image collection.', 'Built similarity-search and ranking workflows.'],
        tags: ['YOLOv8n', 'Flask', 'MEAN', 'Computer Vision']
      },
      {
        tag: 'LLM · DEVELOPER TOOLS', title: 'AI Linux CMD Assistant',
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
    nav: ['Profil', 'Expérience', 'Projets', 'Compétences', 'Certifications'],
    role: 'Data Engineering & IA',
    status: 'Ouvert aux opportunités en recherche et ingénierie',
    kicker: 'Des systèmes pour la donnée, les pipelines et l’IA appliquée',
    titleA: 'Concevoir une intelligence utile',
    titleB: 'à partir de données complexes.',
    intro: 'Je conçois des systèmes orientés données : entrepôts, orchestration ETL, streaming temps réel et systèmes distribués, complétés par le machine learning et l’IA.',
    view: 'Voir le CV', download: 'Télécharger le PDF', contact: 'Me contacter',
    profileTag: 'Profil', profile: 'Une approche systémique de la donnée.',
    about: 'Diplômé en Data Engineering et IA, avec une expérience pratique en modélisation dimensionnelle, orchestration de pipelines, architectures événementielles et analytique temps réel. Je m’intéresse aux infrastructures de données fiables et aux systèmes d’IA concrets.',
    stats: [['3', 'Stages réalisés'], ['3', 'Systèmes livrés de bout en bout'], ['10+', 'Outils data & IA utilisés en production'], ['2', 'Diplômes en informatique / IA']],
    exp: 'Expérience', expTag: 'Parcours', expSub: 'Des rôles où j’ai conçu et livré des systèmes data et IA de bout en bout.',
    projects: 'Projets sélectionnés', projTag: 'Études de cas', projSub: 'Des systèmes conçus de bout en bout — cliquez sur un projet pour voir l’architecture, l’approche et le résultat.',
    skills: 'Compétences techniques', skillsTag: 'Boîte à outils', skillsSub: 'La stack que j’utilise pour faire circuler la donnée et construire de l’IA dessus.',
    education: 'Formation', eduTag: 'Parcours académique',
    certs: 'Certifications', certsTag: 'Archive professionnelle', certText: 'Formations et certificats obtenus en parallèle de mon parcours académique.',
    preview: 'Aperçu', close: 'Fermer l’aperçu',
    cv: 'Curriculum vitæ', cvText: 'Un aperçu concis de ma formation, de mes expériences, projets et compétences techniques.',
    contactTag: 'Contact',
    contactTitle: 'Envie de construire ou de faire de la recherche autour de la donnée ?',
    contactText: 'Je serais ravi d’échanger à propos de l’IA, du data engineering, du machine learning et des opportunités de recherche.',
    footer: 'Conçu comme un carnet technique évolutif.',
    focus: 'Objectif', approach: 'Approche', problem: 'Problème', solution: 'Solution', outcomes: 'Résultats', stack: 'Stack',
    experience: [
      ['Fév 2026 — Juil 2026', 'Stagiaire Projet de fin d’études', 'TE Connectivity', 'Plateforme Business Intelligence intégrée pour KPI manufacturing et finance.', 'Conception d’un entrepôt PostgreSQL, pipelines Airflow avec RabbitMQ et Celery, dashboards FastAPI et assistant Text-to-SQL LangChain/Ollama à accès contrôlé.'],
      ['Juil 2025 — Sep 2025', 'Stagiaire Data Engineer', 'TE Connectivity', 'Application temps réel de monitoring qualité et production.', 'Architecture avec RabbitMQ, Kafka, Flink, Redis, Cassandra et Grafana ; déploiement automatisé avec Python et Docker Compose.'],
      ['Avr 2025 — Juin 2025', 'Stagiaire Full-Stack Developer', 'Plateforme e-commerce de librairie', 'Espace administrateur et espace client responsive.', 'Développement de la gestion des commandes, produits, catégories, rapports et factures avec Laravel, React et Tailwind CSS.']
    ],
    education: [
      ['2026', 'Master Intelligence Artificielle & Science des Données (AIDS)', 'FST Tanger'],
      ['2024', 'Licence en Génie Informatique', 'FST Settat']
    ],
    projectList: [
      {
        tag: 'NLP · BIG DATA', title: 'Analyse temps réel des avis clients Amazon',
        flow: ['Ingestion Kafka', 'Spark Streaming', 'Features TF-IDF', 'PySpark MLlib', 'Dashboard temps réel'],
        problem: 'Comprendre le sentiment client dans un flux massif d’avis, au moment où il se produit.',
        solution: 'Ingestion Kafka, prétraitement Spark Streaming, TF-IDF et sélection de modèles PySpark MLlib.',
        outcomes: ['Mise en place des workflows train-validation-test et comparaison de classifieurs supervisés.', 'Interface de prédiction temps réel et dashboard hors ligne adossé à MongoDB.'],
        tags: ['Apache Kafka', 'Spark Streaming', 'PySpark MLlib', 'NLP']
      },
      {
        tag: 'COMPUTER VISION', title: 'Recherche d’images par contenu avec YOLO',
        flow: ['Détection YOLOv8n', 'Extraction de features', 'Recherche par similarité', 'API Flask'],
        problem: 'Retrouver des objets visuellement similaires dans une collection d’images sans étiquetage manuel.',
        solution: 'Détection YOLOv8n, descripteurs couleur, texture Tamura/Gabor et moments de Hu, exposés via une API Flask.',
        outcomes: ['Détection et localisation sur une collection de 15 catégories.', 'Workflows de recherche et classement par similarité.'],
        tags: ['YOLOv8n', 'Flask', 'MEAN', 'Computer Vision']
      },
      {
        tag: 'LLM · DEVELOPER TOOLS', title: 'Assistant IA Linux CMD',
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

function SystemCard({ lang }) {
  const rows = lang === 'fr'
    ? [['Pipeline', <b key="a">ETL actif</b>], ['Latence', <b key="b" className="ok">340ms</b>], ['Files traitées', <b key="c">12,480</b>], ['Assistant SQL', <b key="d" className="ok">Prêt</b>]]
    : [['Pipeline', <b key="a">ETL running</b>], ['Latency', <b key="b" className="ok">340ms</b>], ['Queues processed', <b key="c">12,480</b>], ['SQL assistant', <b key="d" className="ok">Ready</b>]];
  return (
    <div className="sys-card glass mono">
      {rows.map(([k, v], i) => <div className="row" key={i}><span>{k}</span>{v}</div>)}
    </div>
  );
}

function ProjectPanel({ p, index, t, open, onToggle }) {
  return (
    <div className={`project-panel glass ${open ? 'open' : ''}`}>
      <button className="project-head" onClick={onToggle} aria-expanded={open}>
        <span className="idx mono">0{index + 1}</span>
        <span className="titles">
          <small>{p.tag}</small>
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
            <div className="tags">{p.tags.map(x => <em key={x}>{x}</em>)}</div>
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
  const t = data[lang];
  const heroRef = useRef(null);

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
  const ids = ['profile', 'experience', 'projects', 'skills', 'credentials'];
  const sendMessage = async event => {
    event.preventDefault();
    const service = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_8t33o08';
    const template = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_732imsn';
    const key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'qzrpmGOiFdFwNyOuf';
    setFormStatus(lang === 'fr' ? 'Envoi en cours…' : 'Sending…');
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ service_id: service, template_id: template, user_id: key, template_params: { name: form.name, email: form.email, time: new Date().toLocaleString(lang === 'fr' ? 'fr-FR' : 'en-GB'), message: form.message, reply_to: form.email } }) });
      if (!response.ok) throw new Error('EmailJS error');
      setForm({ name: '', email: '', message: '' }); setFormStatus(lang === 'fr' ? 'Message envoyé. Merci !' : 'Message sent. Thank you!');
    } catch { setFormStatus(lang === 'fr' ? 'Impossible d’envoyer le message. Essayez à nouveau ou contactez-moi par email.' : 'Unable to send the message. Please try again or email me directly.'); }
  };

  return (
    <>
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
          <section className="hero" ref={heroRef}>
            <div className="hero-copy">
              <p className="status-pill glass mono"><i className="live" />{t.status}</p>
              <p className="eyebrow-line mono"><Activity />{t.kicker}</p>
              <h1>{t.titleA} <span className="grad">{t.titleB}</span></h1>
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
              <SystemCard lang={lang} />
            </div>
          </section>

          <Reveal as="section" className="section profile" >
            <div id="profile">
              <p className="section-head tag mono"><Cpu />{t.profileTag}</p>
              <h2>{t.profile}</h2>
              <div className="profile-stats">
                {t.stats.map(([n, l]) => <div className="glass" key={l}><b className="mono">{n}</b><span>{l}</span></div>)}
              </div>
            </div>
            <div className="profile-text">
              <p>{t.about}</p>
              <a href="#contact" className="link">{t.contact}<ChevronRight /></a>
            </div>
          </Reveal>

          <Reveal as="section" >
            <section id="experience" className="section">
              <div className="section-head">
                <p className="tag mono"><BriefcaseBusiness />{t.expTag}</p>
                <h2>{t.exp}</h2>
                <p>{t.expSub}</p>
              </div>
              <div className="timeline">
                {t.experience.map(x => (
                  <article key={x[2]}>
                    <time className="mono">{x[0]}</time>
                    <small className="mono">{x[2]}</small>
                    <h3>{x[1]}</h3>
                    <p>{x[3]}</p>
                    <p>{x[4]}</p>
                  </article>
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
                    <div>{list.map(x => <em key={x}>{x}</em>)}</div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal as="section">
            <section className="section">
              <div className="section-head">
                <p className="tag mono"><GraduationCap />{t.eduTag}</p>
                <h2>{t.education}</h2>
              </div>
              <div className="education">
                {data[lang].education.map(x => (
                  <div className="edu-card glass" key={x[1]}>
                    <div className="icon"><CalendarDays /></div>
                    <div><small className="mono">{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p></div>
                  </div>
                ))}
              </div>
            </section>
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
                    <button className="link" onClick={() => open(x[2], x[0])}>{t.preview}<ExternalLink /></button>
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
                  <button className="btn btn-primary" onClick={() => open('/CV.pdf', t.cv)}><FileText />{t.preview}</button>
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
                  <a href="mailto:redawafik0@gmail.com">redawafik0@gmail.com <ChevronRight /></a>
                  <a className="phone-link" href="tel:+212699566323"><Phone />+212 699 566 323</a>
                </div>
                <form className="contact-form" onSubmit={sendMessage}>
                  <label>{lang === 'fr' ? 'Votre nom' : 'Your name'}<input required name="name" autoComplete="name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></label>
                  <label>{lang === 'fr' ? 'Votre email' : 'Your email'}<input required type="email" name="email" autoComplete="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></label>
                  <label>{lang === 'fr' ? 'Votre message' : 'Your message'}<textarea required name="message" rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /></label>
                  <button className="btn btn-primary" type="submit"><Mail />{lang === 'fr' ? 'Envoyer le message' : 'Send message'}</button>
                  {formStatus && <p className="form-status" aria-live="polite">{formStatus}</p>}
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
