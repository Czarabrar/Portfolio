import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail,
    Github,
    Linkedin,
    Calendar,
    Building,
    Code,
    Briefcase,
    Target,
    FileText,
    Download,
    Terminal,
    Tablet,
    Award,
    Cloud,
    ExternalLink,
    ChevronRight
} from 'lucide-react';

import AppShell from '../components/AppShell';
import PhoneMockup from '../components/PhoneMockup';
import ProjectContent from '../components/ProjectContent';
import { aleloProject, ackumenProject, resumeData, aiWorkflowSteps } from '../data/portfolioData';

export default function DeviceLayout({ isDark, toggleTheme, variant = 'mobile' }) {
    const [activeTab, setActiveTab] = useState('home');
    const [selectedProject, setSelectedProject] = useState('alelo');

    const isTablet = variant === 'tablet';

    // Animation variants
    const tabVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <motion.div
                        key="home"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tabVariants}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className={`home-section-device is-${variant}`}
                        style={{ position: 'relative', height: '100%', overflow: 'hidden' }}
                    >
                        {/* Theme Toggle - Top Right Absolute */}
                        <button
                            onClick={toggleTheme}
                            className="theme-toggle-mobile"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                            ) : (
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                            )}
                        </button>

                        {/* Background Title Text (Lowest Layer) */}
                        <div className="home-bg-title">
                            REACT NATIVE ENGINEER
                        </div>

                        {/* Middle Layer: Portrait Image */}
                        <div className="home-image-container">
                            <img
                                src={`${import.meta.env.BASE_URL}${isDark ? 'profile-dark.png' : 'profile-light.png'}`}
                                alt="Profile"
                            />
                            <div className="home-image-gradient-overlay" />
                        </div>

                        {/* Foreground Content Layer */}
                        <div className="home-text-content">
                            <h1 className="home-title-device">ABRAR AHMED A H</h1>

                            <p className="home-desc-device">
                                Architecting reliable, production-ready mobile systems with performance-first thinking — enhanced by structured AI-assisted problem solving.
                                <br /><br />
                                Clean architecture. Real-time workflows. Scalable design.
                                <br />
                                <span style={{ fontWeight: '800', color: 'var(--text-primary)', marginTop: '0.5rem', display: 'inline-block' }}>
                                    2.0+ Years building intelligent, production-grade mobile applications
                                </span>
                            </p>
                        </div>
                    </motion.div>
                );

            case 'ai':
                return (
                    <motion.div
                        key="ai"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tabVariants}
                        transition={{ duration: 0.4 }}
                        className="device-flex-col device-padding"
                    >
                        <header className="device-header">
                            <h2 className="device-title">AI PARTNER</h2>
                            <p className="device-subtitle">Reasoning Workflow</p>
                        </header>

                        <div className="device-scroll-y">
                            {aiWorkflowSteps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="device-card"
                                    style={{ position: 'relative', paddingLeft: '3.5rem' }}
                                >
                                    <div style={{
                                        position: 'absolute',
                                        left: '1rem',
                                        top: '1rem',
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        background: 'var(--text-primary)',
                                        color: 'var(--bg-primary)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '0.75rem',
                                        fontWeight: '900'
                                    }}>
                                        {idx + 1}
                                    </div>
                                    <h3 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '0.25rem' }}>{step.title}</h3>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{step.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                );

            case 'projects':
                return (
                    <motion.div
                        key="projects"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tabVariants}
                        transition={{ duration: 0.4 }}
                        className="device-flex-col"
                    >
                        <div className="device-padding" style={{ paddingBottom: '0.5rem' }}>
                            <h2 className="mobile-project-title">PROJECTS</h2>
                            <p className="mobile-project-subtitle">Case Studies</p>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1rem' }}>
                                <button
                                    onClick={() => setSelectedProject('alelo')}
                                    className="device-card"
                                    style={{
                                        margin: 0,
                                        padding: '0.75rem',
                                        borderColor: selectedProject === 'alelo' ? 'var(--text-primary)' : 'var(--border-color)',
                                        background: selectedProject === 'alelo' ? (isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)') : 'transparent'
                                    }}
                                >
                                    <div style={{ fontSize: '0.6rem', fontWeight: '900', color: '#06b6d4', marginBottom: '0.25rem', letterSpacing: '0.5px' }}>COMMERCE</div>
                                    <div style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-primary)' }}>MOBILE APP</div>
                                </button>
                                <button
                                    onClick={() => setSelectedProject('ackumen')}
                                    className="device-card"
                                    style={{
                                        margin: 0,
                                        padding: '0.75rem',
                                        borderColor: selectedProject === 'ackumen' ? 'var(--text-primary)' : 'var(--border-color)',
                                        background: selectedProject === 'ackumen' ? (isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)') : 'transparent'
                                    }}
                                >
                                    <div style={{ fontSize: '0.6rem', fontWeight: '900', color: '#a855f7', marginBottom: '0.25rem', letterSpacing: '0.5px' }}>ENTERPRISE</div>
                                    <div style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--text-primary)' }}>PLATFORM</div>
                                </button>
                            </div>
                        </div>

                        <div style={{ flex: 1, position: 'relative', background: 'transparent', borderTop: '1px solid var(--border-color)', overflow: 'hidden' }}>
                            <ProjectContent
                                project={selectedProject === 'alelo' ? aleloProject : ackumenProject}
                                scrollable={true}
                                isDarkMode={isDark}
                            />
                        </div>
                    </motion.div>
                );

            case 'resume':
                return (
                    <motion.div
                        key="resume"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tabVariants}
                        transition={{ duration: 0.4 }}
                        className="device-flex-col device-padding"
                    >
                        <header className="device-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h2 className="device-title">RESUME</h2>
                                <p className="device-subtitle">Experience & Skills</p>
                            </div>
                            <a
                                href={`${import.meta.env.BASE_URL}Abrar_Ahmed_React_Native_Dev.pdf`}
                                download
                                className="device-btn-primary"
                                style={{ padding: '0.5rem', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                <Download size={20} />
                            </a>
                        </header>

                        <div className="device-scroll-y">
                            <div className="device-card" style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)' }}>
                                <p style={{ fontSize: '0.8rem', fontWeight: '600', lineHeight: '1.5' }}>{resumeData.summary}</p>
                            </div>

                            <h3 className="device-subtitle" style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>EXPERIENCE</h3>
                            {resumeData.experience.map((exp, idx) => (
                                <div key={idx} style={{ marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--text-primary)' }}>
                                    <div style={{ fontSize: '0.9rem', fontWeight: '900' }}>{exp.title}</div>
                                    <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#06b6d4' }}>{exp.company}</div>
                                    <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '2px' }}>{exp.period}</div>
                                    <ul style={{ marginTop: '0.5rem', padding: 0, listStyle: 'none' }}>
                                        {exp.highlights.slice(0, 2).map((h, i) => (
                                            <li key={i} style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginBottom: '4px', display: 'flex', gap: '4px' }}>
                                                <span>•</span> <span>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                            <h3 className="device-subtitle" style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>SKILLS</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingBottom: '1rem' }}>
                                {[
                                    ...resumeData.skills.core.items,
                                    ...resumeData.skills.mobile.items,
                                    ...resumeData.skills.tools.items
                                ].map((skill, i) => (
                                    <span key={i} className="device-pill">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );

            case 'contact':
                return (
                    <motion.div
                        key="contact"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tabVariants}
                        transition={{ duration: 0.4 }}
                        className="device-flex-col device-padding"
                    >
                        <header className="device-header">
                            <h2 className="device-title">LET'S CONNECT</h2>
                            <p className="device-subtitle">Available for opportunities</p>
                        </header>

                        <div className="device-scroll-y">
                            {[
                                { label: 'Email', value: 'abrarahmedpbt53@gmail.com', icon: Mail, href: 'mailto:abrarahmedpbt53@gmail.com', color: '#ef4444' },
                                { label: 'LinkedIn', value: '/in/abrar-ahmed-mca', icon: Linkedin, href: 'https://linkedin.com/in/abrar-ahmed-mca', color: '#2563eb' },
                                { label: 'GitHub', value: '@Czarabrar', icon: Github, href: 'https://github.com/Czarabrar', color: 'var(--text-primary)' }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="device-card"
                                    style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="device-icon-box" style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', marginRight: '1rem' }}>
                                        <item.icon size={20} color={item.color} />
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontSize: '0.6rem', fontWeight: '900', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{item.label}</div>
                                        <div style={{ fontSize: '0.8rem', fontWeight: '800', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.value}</div>
                                    </div>
                                    <ExternalLink size={14} color="var(--border-color)" />
                                </motion.a>
                            ))}

                            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.5rem 1rem',
                                    background: 'rgba(34, 197, 94, 0.1)',
                                    borderRadius: '1rem',
                                    border: '1px solid rgba(34, 197, 94, 0.2)'
                                }}>
                                    <div style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%' }} />
                                    <span style={{ fontSize: '0.7rem', fontWeight: '900', color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Available for hire</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return (
        <AppShell variant={variant} activeTab={activeTab} setActiveTab={setActiveTab}>
            <AnimatePresence mode="wait">
                {renderContent()}
            </AnimatePresence>
        </AppShell>
    );
}
