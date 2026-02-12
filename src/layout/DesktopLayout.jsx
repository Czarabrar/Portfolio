import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowDown,
    Mail,
    Github,
    Linkedin,
    MapPin,
    Zap,
    Bell,
    Tablet,
    Layers,
    Shield,
    Award,
    BadgeCheck,
    Cloud,
    Code,
    Home,
    Briefcase,
    Wrench,
    FileText,
    Calendar,
    Building,
    Terminal,
    Download,
    Target,
} from 'lucide-react';

import Stepper from '../components/Stepper';
import PhoneMockup from '../components/PhoneMockup';
import { aleloProject, ackumenProject, resumeData, aiWorkflowSteps } from '../data/portfolioData';

/* ===================================
   NEON STEPPER SECTION (WRAPPER)
   =================================== */

function NeonStepperSection({ steps }) {
    return (
        <div id="ai">
            <Stepper steps={steps} />
        </div>
    );
}

export default function DesktopLayout({ isDark, toggleTheme }) {
    return (
        <div className="landing-page">
            {/* Header */}
            <header className="header">
                <div className="header-content">
                    <a href="#" className="logo">ABRAR</a>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#projects" className="nav-link">Projects</a></li>
                            <li><a href="#ai" className="nav-link">AI</a></li>
                            <li><a href="#resume" className="nav-link">Resume</a></li>
                            <li><a href="#contact" className="nav-link">Contact</a></li>
                        </ul>
                    </nav>
                    <motion.button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        whileTap={{ scale: 0.9 }}
                        initial={false}
                        animate={{ rotate: isDark ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        aria-label="Toggle theme"
                    >
                        {isDark ? (
                            <motion.div
                                key="moon"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ position: 'absolute' }}
                            >
                                {/* Modern Moon SVG */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="currentColor" fillOpacity="0.2" />
                                </svg>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="sun"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ position: 'absolute' }}
                            >
                                {/* Modern Sun SVG */}
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.2" />
                                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                </svg>
                            </motion.div>
                        )}
                    </motion.button>
                </div>
            </header>

            {/* Hero Section - Editorial Layout v2 */}
            <section className="hero hero-v2">
                <div className="hero-container-v2">
                    {/* Left Column: Content */}
                    <motion.div
                        className="hero-content-left"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="hero-name-block">
                            <h2 className="hero-name">ABRAR AHMED A H</h2>
                            <div className="hero-tag-v2">
                                <span className="hero-tag-dot"></span>
                                Available for hire
                            </div>
                        </div>

                        <p className="hero-description-v2">
                            Architecting reliable, production-ready mobile systems with performance-first thinking — enhanced by structured AI-assisted problem solving.
                            <br /><br />
                            Clean architecture. Real-time workflows. Scalable design.
                        </p>

                        <div className="hero-stats-row">
                            <div className="stat-item">
                                <span className="stat-value">2.0+</span>
                                <span className="stat-label">Years of Experience</span>
                            </div>
                        </div>

                        <div className="hero-actions">
                            <motion.a
                                href="#projects"
                                className="hero-cta-primary"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                View Projects
                                <ArrowDown size={18} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Column: Visuals (Headline + Image) */}
                    <div className="hero-visuals-right">
                        {/* Background Text Layer */}
                        <motion.div
                            className="hero-text-layer"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            <h1 className="hero-headline-v2">
                                <span className="headline-word">React</span>
                                <span className="headline-word">Native</span>
                                <span className="headline-word">Engineer</span>
                            </h1>
                        </motion.div>

                        {/* Profile Image Overlay */}
                        <motion.div
                            className="hero-image-layer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="hero-profile-container">
                                <img
                                    src={`${import.meta.env.BASE_URL}${isDark ? 'profile-dark.png' : 'profile-light.png'}`}
                                    alt="ABRAR AHMED A H"
                                    className="hero-profile-image"
                                />
                            </div>
                        </motion.div>

                        {/* Foreground Text Layer (Outline) */}
                        <motion.div
                            className="hero-text-layer-front"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            aria-hidden="true"
                        >
                            <h1 className="hero-headline-v2">
                                <span className="headline-word front-word">React</span>
                                <span className="headline-word front-word">Native</span>
                                <span className="headline-word front-word">Engineer</span>
                            </h1>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    <ArrowDown size={20} />
                    <span>Scroll</span>
                </motion.div>
            </section>

            {/* Electric Card "About Me" Section - ADDED AFTER HERO */}
            <section id="about-new" className="electric-section">
                <motion.div
                    className="electric-card-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="electric-gradient"></div>
                    <div className="electric-card-content">
                        <h2 className="electric-title">About Me</h2>
                        <p className="electric-text">
                            I build reliable, real-time mobile applications that perform well in production—not just in demos.
                            With over 2 years of experience in React Native, I’ve delivered features used daily by real users,
                            focusing on performance, stability, and smooth user experience.
                        </p>
                        <p className="electric-text">
                            My work includes live location tracking, push notifications, background services, and scalable UI architecture.
                            I care deeply about shipping clean, maintainable code that survives real-world usage and continuous updates.
                        </p>
                    </div>
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

            {/* AI Section - Horizontal Neon Stepper */}
            <NeonStepperSection steps={aiWorkflowSteps} />

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
                        className="cyberpunk-card cyber-google"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="cyber-content">
                            <div className="cyber-icon-wrapper">
                                {/* Google Colors Cloud */}
                                <Cloud size={24} style={{ color: '#34A853' }} />
                            </div>
                            <span className="cyber-issuer">Google</span>
                            <h3 className="cyber-title">Web Apps with Firebase</h3>
                            <p className="cyber-desc">Firebase development skills</p>
                        </div>
                        <BadgeCheck className="cyber-badge" size={20} />
                    </motion.div>

                    {/* Cisco JavaScript Essentials */}
                    <motion.div
                        className="cyberpunk-card cyber-cisco"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="cyber-content">
                            <div className="cyber-icon-wrapper">
                                {/* Cisco Blue Network/Wifi */}
                                <Terminal size={24} style={{ color: '#00bceb' }} />
                            </div>
                            <span className="cyber-issuer">Cisco</span>
                            <h3 className="cyber-title">JavaScript Essentials 1</h3>
                            <p className="cyber-desc">JavaScript & Programming</p>
                        </div>
                        <BadgeCheck className="cyber-badge" size={20} />
                    </motion.div>

                    {/* Accenture Mobile */}
                    <motion.div
                        className="cyberpunk-card cyber-accenture"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="cyber-content">
                            <div className="cyber-icon-wrapper">
                                {/* Accenture Purple Tablet/Device */}
                                <Tablet size={24} style={{ color: '#A100FF' }} />
                            </div>
                            <span className="cyber-issuer">Accenture</span>
                            <h3 className="cyber-title">Digital Skills: Mobile</h3>
                            <p className="cyber-desc">Mobile Application Development</p>
                        </div>
                        <BadgeCheck className="cyber-badge" size={20} />
                    </motion.div>

                    {/* Udemy Courses */}
                    <motion.div
                        className="cyberpunk-card cyber-udemy"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="cyber-content">
                            <div className="cyber-icon-wrapper">
                                {/* Udemy Purple Award */}
                                <Award size={24} style={{ color: '#A435F0' }} />
                            </div>
                            <span className="cyber-issuer">Udemy</span>
                            <h3 className="cyber-title">Professional Courses</h3>
                            <p className="cyber-desc">Prompt Engineering, React Native & more</p>
                        </div>
                        <div className="cyber-badge" style={{ fontSize: '14px', fontWeight: 'bold' }}>5+</div>
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

            {/* Resume Section */}
            <section id="resume" className="resume-section">
                <div className="section-header">
                    <h2 className="section-title">Resume</h2>
                    <p className="section-subtitle">
                        Experience and skills at a glance.
                    </p>
                </div>

                <div className="resume-container">
                    {/* Summary */}
                    <motion.div
                        className="resume-summary"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p>{resumeData.summary}</p>
                    </motion.div>

                    <div className="resume-grid">
                        {/* Experience */}
                        <motion.div
                            className="resume-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="resume-card-header">
                                <Building size={20} />
                                <h3>Experience</h3>
                            </div>
                            {resumeData.experience.map((exp, idx) => (
                                <div key={idx} className="experience-item">
                                    <div className="experience-header">
                                        <span className="experience-title">{exp.title}</span>
                                        <span className="experience-period">
                                            <Calendar size={14} />
                                            {exp.period}
                                        </span>
                                    </div>
                                    <span className="experience-company">{exp.company}</span>
                                    <ul className="experience-highlights">
                                        {exp.highlights.map((h, i) => (
                                            <li key={i}>{h}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            className="resume-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="resume-card-header">
                                <Code size={20} />
                                <h3>Skills</h3>
                            </div>
                            {Object.entries(resumeData.skills).map(([key, skillGroup]) => (
                                <div key={key} className="skills-group">
                                    <h4>{skillGroup.category}</h4>
                                    <div className="skills-tags">
                                        {skillGroup.items.map((skill, idx) => (
                                            <span key={idx} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="resume-download-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href={`${import.meta.env.BASE_URL}Abrar_Ahmed_React_Native_Dev.pdf`}
                                download
                                className="resume-download-btn"
                            >
                                <Download size={20} />
                                Download PDF Resume
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
            <footer id="contact" className="footer">
                <div className="footer-content">
                    <h2 className="footer-title">Let's Work Together</h2>
                    <p className="footer-subtitle">
                        Open to new opportunities and interesting projects.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:abrarahmedpbt53@gmail.com" className="contact-link">
                            <Mail className="contact-icon" />
                            <span className="contact-link-text">abrarahmedpbt53@gmail.com</span>
                        </a>
                        <a href="https://github.com/Czarabrar" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <Github size={24} />
                            <span className="contact-link-text">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/abrar-ahmed-mca" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <Linkedin size={24} />
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
