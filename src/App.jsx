import { motion } from 'framer-motion';
import {
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Zap,
  Bell,
  Users,
  Tablet,
  Layers,
  Shield,
  Package,
  Award,
  BadgeCheck,
  Cloud,
  Code,
  Home,
  Briefcase,
  Wrench,
  User,
  Moon,
  Sun
} from 'lucide-react';
import { useState, useEffect } from 'react';

/* ===================================
   PROJECT DATA
=================================== */

const aleloProject = {
  title: 'Alelo',
  type: 'E-commerce App',
  intro: 'I rebuilt the mobile experience for Alelo, an e-commerce platform connecting local buyers and sellers. Focus on real-time logistics and clean UX.',
  features: [
    {
      icon: Layers,
      title: 'UI Redesign',
      desc: 'Simplified navigation, cleaner product cards, and a checkout that doesn\'t lose users.',
      color: 'feature-card-blue',
    },
    {
      icon: MapPin,
      title: 'Google Maps',
      desc: 'Real-time distance calculation and route visualization for buyers and sellers.',
      color: 'feature-card-green',
    },
    {
      icon: Zap,
      title: 'Power Optimization',
      desc: 'Refactored tracking logic to use geofencing and adaptive intervals.',
      color: 'feature-card-orange',
    },
    {
      icon: Users,
      title: 'Real-time Tracking',
      desc: 'Live updates for both buyer and seller. No refresh button needed.',
      color: 'feature-card-purple',
    },
    {
      icon: Bell,
      title: 'Notifications',
      desc: 'Smart push notifications with targeting logic for relevant alerts.',
      color: 'feature-card-cyan',
    },
  ],
  tech: ['React Native', 'Google Maps SDK', 'Firebase', 'Redux'],
};

const ackumenProject = {
  title: 'Ackumen',
  type: 'Enterprise App',
  intro: 'Large-scale enterprise application for a chemical manufacturing company. Built for reliability at scale, every single day.',
  features: [
    {
      icon: Shield,
      title: 'Enterprise Standards',
      desc: 'Proper authentication, role-based access, audit logging for compliance.',
      color: 'feature-card-blue',
    },
    {
      icon: Tablet,
      title: 'Tablet Compatibility',
      desc: 'Every screen works perfectly on both phone and tablet with responsive layouts.',
      color: 'feature-card-green',
    },
    {
      icon: Package,
      title: 'Module Ownership',
      desc: 'Owned inventory tracking, delivery scheduling, and quality checks end-to-end.',
      color: 'feature-card-purple',
    },
    {
      icon: Layers,
      title: 'Scalable Architecture',
      desc: 'Clean separation, efficient data fetching, offline-first where needed.',
      color: 'feature-card-orange',
    },
  ],
  tech: ['React Native', 'TypeScript', 'Redux Toolkit', 'REST APIs'],
};

const fixes = [
  {
    id: 1,
    problem: 'App crashed when users switched tabs rapidly during data fetch',
    fix: 'Implemented proper cleanup with AbortController and race condition guards',
    impact: 'Zero crash reports from this issue',
  },
  {
    id: 2,
    problem: 'FlatList performance degraded with 500+ items',
    fix: 'Added getItemLayout, optimized with React.memo, implemented windowing',
    impact: 'Consistent 60fps scrolling',
  },
  {
    id: 3,
    problem: 'Android back button inconsistent across nested navigators',
    fix: 'Built custom back handler respecting navigation hierarchy',
    impact: 'Predictable navigation',
  },
  {
    id: 4,
    problem: 'Images flickered when scrolling through product grids',
    fix: 'Implemented FastImage caching with placeholder shimmer',
    impact: 'Smooth image loading',
  },
  {
    id: 5,
    problem: 'Push notifications failing on certain Android devices',
    fix: 'Fixed FCM token refresh and channel configuration for Android 8+',
    impact: '99.2% delivery rate',
  },
  {
    id: 6,
    problem: 'Memory leaks from background location tracking',
    fix: 'Proper lifecycle management and cleanup on unmount',
    impact: '40% memory reduction',
  },
];

/* ===================================
   PHONE MOCKUP COMPONENT
=================================== */

function PhoneMockup({ project }) {
  return (
    <motion.div
      className="phone-wrapper"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="phone-label">
        <h3 className="phone-label-title">{project.title}</h3>
        <p className="phone-label-subtitle">{project.type}</p>
      </div>

      <div className="phone-frame">
        <div className="phone-screen">
          <div className="phone-content">
            <div className="project-header">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-type">{project.type}</p>
            </div>

            <p className="project-intro">{project.intro}</p>

            {project.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className={`feature-card ${feature.color}`}>
                  <div className="feature-title">
                    <Icon size={16} />
                    {feature.title}
                  </div>
                  <p className="feature-desc">{feature.desc}</p>
                </div>
              );
            })}

            <div className="tech-tags">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ===================================
   MAIN APP
=================================== */

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <a href="#" className="logo">ABRAR</a>
          <nav>
            <ul className="nav-links">
              <li><a href="#projects" className="nav-link">Projects</a></li>
              <li><a href="#fixes" className="nav-link">Fixes</a></li>
              <li><a href="#about" className="nav-link">About</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <Sun /> : <Moon />}
          </button>
        </div>
      </header>

      {/* Hero Section - Enhanced with Photo & Tech Icons */}
      <section className="hero">
        <div className="hero-container">
          {/* Left: Content */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-tag">
              <span className="hero-tag-dot"></span>
              git commit -m "hire me"
            </div>

            <h1 className="hero-title">
              ABRAR<br />AHMED A H
            </h1>

            <p className="hero-subtitle">
              React Native Developer building mobile apps that solve real problems.
              Clean architecture, thoughtful UX, production-ready code.
            </p>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-value">1.7+</span>
                <span className="hero-stat-label">Years Experience</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">React Native</span>
                <span className="hero-stat-label">Specialist</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">Enterprise</span>
                <span className="hero-stat-label">Level Projects</span>
              </div>
            </div>

            <motion.a
              href="#projects"
              className="hero-cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
              <ArrowDown size={18} />
            </motion.a>
          </motion.div>

          {/* Right: Profile Photo with Floating Icons */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="profile-container">
              <motion.img
                src="/profile.png"
                alt="ABRAR AHMED A H"
                className="profile-image"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
              <div className="profile-decoration"></div>
              <div className="profile-dots"></div>
            </div>

            {/* Floating Tech Stack Icons - OUTSIDE profile-container */}
            <div className="tech-icons-container">
              {/* React Native */}
              <motion.div
                className="floating-icon"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="2.5" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
                </svg>
              </motion.div>

              {/* TypeScript */}
              <motion.div
                className="floating-icon"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18v18H3V3zm15.5 10.08h-2.5v5.42h-1.5v-5.42h-2.5V12h6.5v1.08zM7.5 13.08V18H6V13.08H3.5V12H10v1.08H7.5z" />
                </svg>
              </motion.div>

              {/* Firebase */}
              <motion.div
                className="floating-icon"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.5 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.23 17.16L7.46 2.92 10.26 8.16 12 5.23l6.77 11.93zM12 14.62l3.54-2.77L12 5.23 8.46 11.85z" />
                </svg>
              </motion.div>

              {/* Redux */}
              <motion.div
                className="floating-icon"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.63 16.56c.78-.02 1.4-.67 1.38-1.47-.02-.78-.66-1.4-1.44-1.4h-.05c-.8.03-1.42.7-1.4 1.5.02.39.19.73.44.98-.93 1.84-2.36 3.2-4.5 4.3-1.44.75-2.95 1.02-4.47.83-1.25-.16-2.2-.69-2.84-1.58-.94-1.3-1.03-2.72-.27-4.1.55-.98 1.4-1.7 1.95-2.1-.1-.38-.27-1-.37-1.45-4.4 3.18-3.95 7.5-2.64 9.32 1 1.38 3.03 2.24 5.25 2.24.6 0 1.2-.05 1.8-.18 3.83-.75 6.7-3.06 8.16-6.87zM20.95 13c-2.3-2.7-5.68-4.18-9.53-4.18h-.5c-.28-.58-.87-.96-1.54-.96h-.05c-.8.03-1.42.7-1.4 1.5.02.78.66 1.4 1.44 1.4h.05c.7-.02 1.28-.5 1.5-1.1h.55c2.3 0 4.47.67 6.44 1.97 1.5 1 2.58 2.27 3.18 3.77.5 1.25.48 2.47-.08 3.5-.84 1.55-2.24 2.42-4.12 2.42-1.2 0-2.35-.37-2.95-.63-.3.26-.84.7-1.22.98 1.2.56 2.42.87 3.58.87 2.66 0 4.62-1.47 5.38-2.94.8-1.6.75-4.36-1.73-7.6zM7.48 16.93c.02.78.66 1.4 1.44 1.4h.05c.8-.03 1.42-.7 1.4-1.5-.02-.78-.66-1.4-1.44-1.4h-.05c-.05 0-.13 0-.2.02-.74-1.24-1.05-2.58-.94-4.03.08-1.08.45-2.02 1.1-2.78.53-.64 1.57-1 2.3-1.03 2-.04 2.84 2.45 2.9 3.44l1.37.42c-.37-3.2-2.42-4.72-4.4-4.72-1.82 0-3.5 1.32-4.17 3.27-.9 2.6-.32 5.1.83 7.07-.1.15-.22.4-.2.84z" />
                </svg>
              </motion.div>

              {/* JavaScript */}
              <motion.div
                className="floating-icon"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3h18v18H3V3zm4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.77 2.53-2.42v-5.84h-1.7v5.77c0 .8-.33 1.02-.86 1.02-.52 0-.75-.36-.99-.79l-1.52.71zm5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.98-1.32-1.35-2.4-1.35-1.51 0-2.48.96-2.48 2.23 0 1.38.82 2.03 2.05 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.4.82z" />
                </svg>
              </motion.div>

              {/* Git */}
              <motion.div
                className="floating-icon"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.62 11.11l-8.73-8.73a1.3 1.3 0 00-1.78 0L9.03 4.46l2.26 2.26a1.55 1.55 0 011.97 1.97l2.17 2.17a1.55 1.55 0 11-.93.87l-2.03-2.03v5.35a1.55 1.55 0 11-1.28-.02V9.54a1.55 1.55 0 01-.84-2.04L8.13 5.28 2.38 11a1.3 1.3 0 000 1.78l8.73 8.73a1.3 1.3 0 001.78 0l8.73-8.62a1.3 1.3 0 000-1.78z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ArrowDown size={20} />
          <span>Scroll</span>
        </motion.div>
      </section>

      {/* Projects Section - Two Phones */}
      <section id="projects" className="projects-section">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Real apps solving real problems. Scroll inside each phone to explore the full story.
          </p>
        </div>

        <div className="phones-container">
          <PhoneMockup project={aleloProject} />
          <PhoneMockup project={ackumenProject} />
        </div>
      </section>

      {/* Fixes Section */}
      <section id="fixes" className="fixes-section">
        <div className="section-header">
          <h2 className="section-title">Production Fixes</h2>
          <p className="section-subtitle">
            Real issues I've diagnosed and resolved. No exaggeration—just problems and solutions.
          </p>
        </div>

        <div className="fixes-grid">
          {fixes.map((fix) => (
            <motion.div
              key={fix.id}
              className="fix-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: fix.id * 0.05 }}
            >
              <span className="fix-number">{fix.id}</span>
              <p className="fix-problem">{fix.problem}</p>
              <div className="fix-solution">
                <p className="fix-solution-label">Fix</p>
                <p className="fix-solution-text">{fix.fix}</p>
              </div>
              <p className="fix-impact"><strong>Impact:</strong> {fix.impact}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-header">
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            Engineer speaking to another engineer.
          </p>
        </div>

        <div className="about-content">
          <div className="about-grid">
            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="about-card-title">Who I Am</h3>
              <p className="about-card-content">
                I'm a React Native developer who cares about the details.
                I've shipped apps used by thousands, and I've fixed the bugs that come with that territory.
              </p>
            </motion.div>

            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="about-card-title">How I Work</h3>
              <p className="about-card-content">
                I learn by doing. When I hit a wall, I dig into source code, read docs thoroughly,
                and figure it out. I ask questions that add value.
              </p>
            </motion.div>

            <motion.div
              className="about-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="about-card-title">What I Believe</h3>
              <p className="about-card-content">
                Ship first, optimize later—but always optimize. Every bug is a missing test.
                The user's phone is slower than yours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications-section">
        <div className="section-header">
          <h2 className="section-title">Certifications & Badges</h2>
          <p className="section-subtitle">
            Continuous learning and validated skills.
          </p>
        </div>

        <div className="certifications-grid">
          {/* Google Firebase */}
          <motion.div
            className="cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <div className="cert-icon" style={{ background: 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #FBBC05 75%, #EA4335 100%)' }}>
              <Cloud size={28} style={{ color: 'white' }} />
            </div>
            <div className="cert-content">
              <span className="cert-issuer">Google</span>
              <h3 className="cert-title">Web Apps with Firebase</h3>
              <p className="cert-desc">Firebase development skills</p>
            </div>
            <BadgeCheck className="cert-badge" size={24} />
          </motion.div>

          {/* Cisco JavaScript Essentials */}
          <motion.div
            className="cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="cert-icon cert-icon-cisco">
              <Code size={28} />
            </div>
            <div className="cert-content">
              <span className="cert-issuer">Cisco</span>
              <h3 className="cert-title">JavaScript Essentials 1</h3>
              <p className="cert-desc">JavaScript & Programming</p>
            </div>
            <BadgeCheck className="cert-badge" size={24} />
          </motion.div>

          {/* Accenture Mobile */}
          <motion.div
            className="cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="cert-icon" style={{ background: 'linear-gradient(135deg, #A100FF 0%, #7B00CC 100%)' }}>
              <Tablet size={28} style={{ color: 'white' }} />
            </div>
            <div className="cert-content">
              <span className="cert-issuer">Accenture</span>
              <h3 className="cert-title">Digital Skills: Mobile</h3>
              <p className="cert-desc">Mobile Application Development</p>
            </div>
            <BadgeCheck className="cert-badge" size={24} />
          </motion.div>

          {/* Udemy Courses */}
          <motion.div
            className="cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="cert-icon cert-icon-udemy">
              <Award size={28} />
            </div>
            <div className="cert-content">
              <span className="cert-issuer">Udemy</span>
              <h3 className="cert-title">Professional Courses</h3>
              <p className="cert-desc">Prompt Engineering, React Native & more</p>
            </div>
            <div className="cert-count">5+</div>
          </motion.div>
        </div>

        {/* See More Link */}
        <motion.div
          className="cert-see-more"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://www.linkedin.com/in/abrar-ahmed-mca"
            target="_blank"
            rel="noopener noreferrer"
            className="see-more-link"
          >
            See More on LinkedIn →
          </a>
        </motion.div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <h2 className="footer-title">Let's Work Together</h2>
          <p className="footer-subtitle">
            Open to new opportunities and interesting projects.
          </p>

          <div className="contact-links">
            <a href="mailto:abrarahmedah@gmail.com" className="contact-link">
              <Mail className="contact-link-icon" />
              <span className="contact-link-text">abrarahmedah@gmail.com</span>
            </a>

            <a href="https://github.com/Czarabrar" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github className="contact-link-icon" />
              <span className="contact-link-text">GitHub</span>
            </a>

            <a href="https://www.linkedin.com/in/abrar-ahmed-mca" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin className="contact-link-icon" />
              <span className="contact-link-text">LinkedIn</span>
            </a>
          </div>

          <p className="footer-copyright">
            © 2026 ABRAR AHMED A H. Built with React.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ===================================
   MOBILE FRAME VIEW COMPONENT
=================================== */

function MobileFrameView() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'fixes', label: 'Fixes', icon: Wrench },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  // Project detail view
  const renderProjectDetail = (project) => (
    <div className="mobile-project-detail">
      <button className="mobile-back-btn" onClick={() => setSelectedProject(null)}>
        ← Back to Projects
      </button>
      <h2 className="mobile-project-title">{project.name}</h2>
      <span className="mobile-project-type">{project.type}</span>
      <p className="mobile-project-intro">{project.intro}</p>

      <h3 className="mobile-detail-heading">Key Features</h3>
      {project.features.map((feature, idx) => (
        <div key={idx} className="mobile-feature-card" style={{ background: feature.color }}>
          <div className="mobile-feature-title">{feature.title}</div>
          <div className="mobile-feature-desc">{feature.desc}</div>
        </div>
      ))}

      <h3 className="mobile-detail-heading">Tech Stack</h3>
      <div className="mobile-tech-tags">
        {project.stack.map((tech, idx) => (
          <span key={idx} className="mobile-tech-tag">{tech}</span>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="mobile-home">
            {/* Hero section with overlapping design */}
            <div className="mobile-hero-overlay">
              {/* Background flowing text - left side */}
              <div className="mobile-text-flow mobile-text-left">
                <span className="flow-text flow-text-large">REACT</span>
                <span className="flow-text flow-text-medium">NATIVE</span>
                <span className="flow-text flow-text-small">DEVELOPER</span>
              </div>

              {/* Profile image - center, overlapping */}
              <div className="mobile-profile-hero">
                <img src="/profile.png" alt="ABRAR AHMED" className="mobile-profile-img" />
              </div>

              {/* Background flowing text - right side */}
              <div className="mobile-text-flow mobile-text-right">
                <span className="flow-text flow-text-large">1.7+</span>
                <span className="flow-text flow-text-medium">YEARS</span>
                <span className="flow-text flow-text-small">EXPERIENCE</span>
              </div>
            </div>

            {/* Name below image */}
            <div className="mobile-name-section">
              <h1 className="mobile-hero-name">ABRAR AHMED</h1>
              <span className="mobile-hero-role">React Native Developer</span>
            </div>

            {/* Stats row */}
            <div className="mobile-stats-row">
              <div className="mobile-stat">
                <span className="mobile-stat-value">1.7+</span>
                <span className="mobile-stat-label">Years</span>
              </div>
              <div className="mobile-stat">
                <span className="mobile-stat-value">React Native</span>
                <span className="mobile-stat-label">Specialist</span>
              </div>
              <div className="mobile-stat">
                <span className="mobile-stat-value">Enterprise</span>
                <span className="mobile-stat-label">Projects</span>
              </div>
            </div>

            {/* Available tag */}
            <div className="mobile-available-tag">
              <span className="available-dot"></span>
              git commit -m "hire me"
            </div>
          </div>
        );
      case 'projects':
        // If a project is selected, show detail view
        if (selectedProject) {
          return renderProjectDetail(selectedProject);
        }
        // Otherwise show project list
        return (
          <div className="mobile-section">
            <h2 className="mobile-section-title">Projects</h2>
            <p className="mobile-section-subtitle">Tap to view details</p>

            <div
              className="mobile-card mobile-card-clickable"
              style={{ background: 'var(--color-pastel-orange)' }}
              onClick={() => setSelectedProject({
                name: 'Alelo',
                type: 'E-commerce App',
                intro: 'A comprehensive e-commerce platform built with React Native, featuring real-time order tracking and seamless payment integration.',
                features: [
                  { title: 'Real-time Logistics', desc: 'Live order tracking with Google Maps integration', color: 'var(--color-pastel-blue)' },
                  { title: 'Power Optimization', desc: 'Reduced battery usage by 40% for background location', color: 'var(--color-pastel-green)' },
                  { title: 'Payment Integration', desc: 'Secure payment gateway with multiple options', color: 'var(--color-pastel-purple)' },
                  { title: 'Push Notifications', desc: 'Real-time order updates and promotions', color: 'var(--color-pastel-cyan)' },
                ],
                stack: ['React Native', 'Redux', 'Firebase', 'Google Maps', 'Node.js']
              })}
            >
              <div className="mobile-card-title">Alelo →</div>
              <div className="mobile-card-desc">E-commerce app with real-time logistics, Google Maps, and power optimization</div>
            </div>

            <div
              className="mobile-card mobile-card-clickable"
              style={{ background: 'var(--color-pastel-purple)' }}
              onClick={() => setSelectedProject({
                name: 'Ackumen',
                type: 'Enterprise App',
                intro: 'A robust enterprise application for a chemical company, designed to handle complex workflows and tablet support.',
                features: [
                  { title: 'Tablet Support', desc: 'Responsive layouts optimized for larger screens', color: 'var(--color-pastel-orange)' },
                  { title: 'Scalable Architecture', desc: 'Built to handle thousands of daily users', color: 'var(--color-pastel-blue)' },
                  { title: 'Offline Mode', desc: 'Full functionality even without internet', color: 'var(--color-pastel-green)' },
                  { title: 'Role-based Access', desc: 'Different interfaces for different user roles', color: 'var(--color-pastel-pink)' },
                ],
                stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'SQLite', 'REST APIs']
              })}
            >
              <div className="mobile-card-title">Ackumen →</div>
              <div className="mobile-card-desc">Enterprise chemical company app with tablet support and scalable architecture</div>
            </div>
          </div>
        );
      case 'fixes':
        return (
          <div className="mobile-section">
            <h2 className="mobile-section-title">Fixes</h2>
            <p className="mobile-section-subtitle">Production problem-solving</p>
            {fixes.slice(0, 4).map((fix) => (
              <div key={fix.id} className="mobile-card">
                <div className="mobile-card-title">{fix.problem.substring(0, 50)}...</div>
                <div className="mobile-card-desc" style={{ background: 'var(--color-pastel-green)', padding: '8px', borderRadius: '8px', marginTop: '8px' }}>
                  {fix.fix.substring(0, 60)}...
                </div>
              </div>
            ))}
          </div>
        );
      case 'about':
        return (
          <div className="mobile-section">
            <h2 className="mobile-section-title">About</h2>
            <div className="mobile-card" style={{ background: 'var(--color-pastel-blue)' }}>
              <div className="mobile-card-title">Who I Am</div>
              <div className="mobile-card-desc">React Native developer who cares about the details. Shipped apps used by thousands.</div>
            </div>
            <div className="mobile-card" style={{ background: 'var(--color-pastel-green)' }}>
              <div className="mobile-card-title">How I Work</div>
              <div className="mobile-card-desc">I learn by doing. When stuck, I dig into source code and figure it out.</div>
            </div>
            <div className="mobile-card" style={{ background: 'var(--color-pastel-purple)' }}>
              <div className="mobile-card-title">MCA Graduate</div>
              <div className="mobile-card-desc">Computer Science background with continuous learning mindset.</div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="mobile-section">
            <h2 className="mobile-section-title">Contact</h2>
            <p className="mobile-section-subtitle">Let's talk about opportunities</p>
            <a href="mailto:abrarahmedah@gmail.com" className="mobile-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <div className="mobile-card-title">📧 Email</div>
              <div className="mobile-card-desc">abrarahmedah@gmail.com</div>
            </a>
            <a href="https://github.com/Czarabrar" target="_blank" rel="noopener noreferrer" className="mobile-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <div className="mobile-card-title">💻 GitHub</div>
              <div className="mobile-card-desc">github.com/Czarabrar</div>
            </a>
            <a href="https://www.linkedin.com/in/abrar-ahmed-mca" target="_blank" rel="noopener noreferrer" className="mobile-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <div className="mobile-card-title">💼 LinkedIn</div>
              <div className="mobile-card-desc">linkedin.com/in/abrar-ahmed-mca</div>
            </a>
            <div className="mobile-card" style={{ background: 'var(--color-pastel-green)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }}></span>
                <span className="mobile-card-title" style={{ marginBottom: 0 }}>Available for Work</span>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mobile-frame-wrapper">
      <div className="mobile-phone-container">
        {/* Theme toggle button for mobile */}
        <button className="mobile-theme-toggle" onClick={toggleTheme}>
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <div className="mobile-phone-screen">
          <div className="mobile-app-content">
            {renderContent()}
          </div>
        </div>
        <nav className="mobile-bottom-nav">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                className={`mobile-nav-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon />
                <span className="mobile-nav-label">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

/* ===================================
   MAIN APP WITH RESPONSIVE VIEWS
=================================== */

function MainApp() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileFrameView /> : <App />;
}

export default MainApp;
