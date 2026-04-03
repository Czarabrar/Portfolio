import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectContent({ project, scrollable = true, isDarkMode = false }) {
    const [activeStep, setActiveStep] = useState(0);

    const handleScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        const width = e.target.offsetWidth;
        const index = Math.round(scrollLeft / width);
        setActiveStep(index);
    };

    // Handle both single project and array of projects
    const projects = Array.isArray(project) ? project : [project];
    const isMulti = projects.length > 1;

    const themeColor = '#06b6d4'; // Cyan for projects
    const subTextColor = isDarkMode ? '#a3a3a3' : '#4b5563';

    if (isMulti) {
        return (
            <div className={`phone-content scrollbar-hide ${scrollable ? 'h-full overflow-y-auto' : ''} ${isDarkMode ? 'project-content-dark' : ''}`} style={{ padding: '50px 0.75rem 4rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ padding: '0 0.5rem', marginBottom: '-0.5rem' }}>
                        <h2 style={{ fontSize: '0.75rem', fontWeight: '900', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Personal Projects</h2>
                    </div>
                    {projects.map((proj, pIdx) => (
                        <div
                            key={pIdx}
                            className="device-card"
                            style={{
                                margin: 0,
                                padding: '1.5rem',
                                background: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '1.5rem',
                                boxShadow: isDarkMode ? '0 10px 30px -10px rgba(0, 0, 0, 0.5)' : '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
                            }}
                        >
                            <div style={{ fontSize: '0.65rem', fontWeight: '900', color: themeColor, marginBottom: '0.35rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{proj.type}</div>
                            <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: '1.2' }}>{proj.title}</h4>
                            <p style={{ fontSize: '0.8rem', color: subTextColor, lineHeight: '1.6', marginBottom: '1.5rem' }}>{proj.intro}</p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                                {proj.features && proj.features.map((feature, fIdx) => {
                                    const Icon = feature.icon;
                                    return (
                                        <div key={fIdx} style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                                            <div style={{ marginTop: '0.15rem', padding: '0.4rem', borderRadius: '0.6rem', background: isDarkMode ? 'rgba(6, 182, 212, 0.1)' : 'var(--color-pastel-blue)' }}>
                                                <Icon size={14} color={themeColor} />
                                            </div>
                                            <div>
                                                <div style={{ fontSize: '0.8rem', fontWeight: '800', color: 'var(--text-primary)' }}>{feature.title}</div>
                                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>{feature.desc}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.25rem' }}>
                                {proj.tech && proj.tech.map((t) => (
                                    <span key={t} className="device-pill" style={{ margin: 0, padding: '2px 10px', fontSize: '0.6rem' }}>{t}</span>
                                ))}
                            </div>

                            {proj.githubUrl && (
                                <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.75rem', fontWeight: '800', color: themeColor, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <Github size={16} /> View on GitHub →
                                </a>
                            )}
                        </div>
                    ))}

                    <div style={{ textAlign: 'center', padding: '1rem 0', opacity: 0.3 }}>
                        <div style={{ fontSize: '0.6rem', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '3px' }}>Timeline Ends</div>
                    </div>
                </div>
            </div>
        );
    }

    // Single project view (Carousel style)
    const singleProj = projects[0];
    return (
        <div className={`phone-content scrollbar-hide ${scrollable ? 'h-full overflow-y-auto' : ''} ${isDarkMode ? 'project-content-dark' : ''}`} style={scrollable ? { paddingBottom: '90px' } : {}}>
            <div className="project-header">
                <h4 className="project-title project-title-override" style={{ color: '#3B82F6' }}>{singleProj.title}</h4>
                <p className="project-type" style={{ color: subTextColor }}>{singleProj.type}</p>
            </div>

            <p className="project-intro" style={{ color: subTextColor }}>{singleProj.intro}</p>

            {/* Feature Carousel */}
            {singleProj.features && (
                <>
                    <div
                        className="carousel-container"
                        onScroll={handleScroll}
                    >
                        {singleProj.features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="carousel-slide">
                                    <div className={`feature-card ${feature.color}`}>
                                        <div className="feature-title">
                                            <Icon size={16} />
                                            {feature.title}
                                        </div>
                                        <p className="feature-desc">{feature.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Pagination Dots */}
                    <div className="carousel-dots">
                        {singleProj.features.map((_, index) => (
                            <div
                                key={index}
                                className={`carousel-dot ${index === activeStep ? 'active' : ''}`}
                            />
                        ))}
                    </div>
                </>
            )}

            <div className="tech-tags">
                {singleProj.tech && singleProj.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                ))}
            </div>
        </div>
    );
}
