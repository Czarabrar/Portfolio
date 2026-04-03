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
    ChevronRight,
    Zap,
    Bell,
    CloudOff,
    Cpu,
    Activity,
    Layers,
    Shield
} from 'lucide-react';

import AppShell from '../components/AppShell';
import PhoneMockup from '../components/PhoneMockup';
import ProjectContent from '../components/ProjectContent';
import { aleloProject, ackumenProject, resumeData, aiWorkflowSteps, gullyCricProject, atmosProject, clashOfImaanProject, whatISolve } from '../data/portfolioData';

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
                        style={{ position: 'relative', height: '100%', overflowY: 'auto', overflowX: 'hidden' }}
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

                            {/* Call to Action for Solutions */}
                            <div style={{ marginTop: '2rem', paddingBottom: '3rem' }}>
                                <button
                                    onClick={() => setActiveTab('solutions')}
                                    className="device-btn-primary"
                                    style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '1rem' }}
                                >
                                    <Shield size={18} /> View Engineering Solutions
                                </button>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'solutions':
                return (
                    <motion.div
                        key="solutions"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tabVariants}
                        transition={{ duration: 0.4 }}
                        className="device-flex-col"
                    >
                        <div className="device-padding device-scroll-y" style={{ paddingBottom: '3rem' }}>
                            <header className="device-header">
                                <h2 className="device-title">SOLUTIONS</h2>
                                <p className="device-subtitle">Expertise & Performance</p>
                            </header>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                                {whatISolve.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={idx} className="device-card" style={{ margin: 0, padding: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                                <div style={{ padding: '0.5rem', borderRadius: '0.75rem', background: 'var(--bg-primary)', border: '1px solid var(--border-color)' }}>
                                                    <Icon size={18} color="#06b6d4" />
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{item.title}</div>
                                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{item.desc}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <header className="device-header" style={{ marginTop: '2.5rem' }}>
                                <h2 className="device-title" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>MODERN WORKFLOW</h2>
                                <p className="device-subtitle">AI-Powered Development</p>
                            </header>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
                                {aiWorkflowSteps.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="device-card"
                                        style={{ position: 'relative', paddingLeft: '3.5rem', margin: 0 }}
                                    >
                                        <div style={{
                                            position: 'absolute',
                                            left: '1rem',
                                            top: '1.25rem',
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            background: 'var(--text-primary)',
                                            color: 'var(--bg-primary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '0.7rem',
                                            fontWeight: '900'
                                        }}>
                                            {idx + 1}
                                        </div>
                                        <h3 style={{ fontSize: '0.85rem', fontWeight: '800', marginBottom: '0.2rem' }}>{step.title}</h3>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{step.description}</p>
                                    </div>
                                ))}
                            </div>
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
                        <div className="device-padding device-scroll-y" style={{ paddingBottom: '2rem' }}>
                            <h2 className="mobile-project-title">PROJECTS</h2>
                            <p className="mobile-project-subtitle">Enterprise & Client Work</p>

                            {/* Enterprise Projects with Full Details */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem', marginBottom: '2.5rem' }}>
                                {[aleloProject, ackumenProject].map((proj) => (
                                    <div key={proj.title} className="device-card" style={{ margin: 0, padding: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                                        <div style={{ fontSize: '0.6rem', fontWeight: '900', color: '#a855f7', marginBottom: '0.25rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{proj.type}</div>
                                        <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{proj.title}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '1rem' }}>{proj.intro}</div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                                            {proj.features.map((feature, idx) => {
                                                const Icon = feature.icon;
                                                return (
                                                    <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                                        <div style={{ marginTop: '0.25rem', padding: '0.4rem', borderRadius: '0.5rem', background: 'var(--bg-primary)' }}>
                                                            <Icon size={14} color="#a855f7" />
                                                        </div>
                                                        <div>
                                                            <div style={{ fontSize: '0.75rem', fontWeight: '800' }}>{feature.title}</div>
                                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>{feature.desc}</div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem' }}>
                                            {proj.tech.map((t) => (
                                                <span key={t} className="device-pill" style={{ fontSize: '0.6rem' }}>{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="mobile-project-subtitle">Featured Personal Work</p>

                            {/* Featured Personal Projects with Full Details */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
                                {[gullyCricProject, atmosProject, clashOfImaanProject].map((proj) => (
                                    <div key={proj.title} className="device-card" style={{ margin: 0, padding: '1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                                        <div style={{ fontSize: '0.65rem', fontWeight: '900', color: '#06b6d4', marginBottom: '0.25rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{proj.type}</div>
                                        <div style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{proj.title}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '1rem' }}>{proj.intro}</div>

                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
                                            {proj.features.map((feature, idx) => {
                                                const Icon = feature.icon;
                                                return (
                                                    <div key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                                        <div style={{ marginTop: '0.25rem', padding: '0.4rem', borderRadius: '0.5rem', background: 'var(--bg-primary)' }}>
                                                            <Icon size={14} color="#06b6d4" />
                                                        </div>
                                                        <div>
                                                            <div style={{ fontSize: '0.75rem', fontWeight: '800' }}>{feature.title}</div>
                                                            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>{feature.desc}</div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', borderTop: '1px solid var(--border-color)', paddingTop: '0.75rem', marginBottom: '1rem' }}>
                                            {proj.tech.map((t) => (
                                                <span key={t} className="device-pill" style={{ fontSize: '0.6rem' }}>{t}</span>
                                            ))}
                                        </div>

                                        {proj.github && (
                                            <a href={proj.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.7rem', fontWeight: '700', color: '#06b6d4', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <Github size={14} /> View on GitHub →
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
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

                            <h3 className="device-subtitle" style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>SKILLS & EXPERTISE</h3>
                            {Object.entries(resumeData.skills).map(([key, skillGroup]) => (
                                <div key={key} style={{ marginBottom: '1.25rem' }}>
                                    <div style={{ fontSize: '0.6rem', fontWeight: '900', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{skillGroup.category}</div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                        {skillGroup.items.map((skill, i) => (
                                            <span key={i} className="device-pill" style={{ margin: 0 }}>{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
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
