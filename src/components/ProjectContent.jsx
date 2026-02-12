import React, { useState } from 'react';

export default function ProjectContent({ project, scrollable = true, isDarkMode = false }) {
    const [activeStep, setActiveStep] = useState(0);

    const handleScroll = (e) => {
        const scrollLeft = e.target.scrollLeft;
        const width = e.target.offsetWidth;
        const index = Math.round(scrollLeft / width);
        setActiveStep(index);
    };

    const textColor = '#3B82F6'; // User requested blue color
    const subTextColor = isDarkMode ? '#a3a3a3' : '#4b5563';

    return (
        <div className={`phone-content scrollbar-hide ${scrollable ? 'h-full overflow-y-auto' : ''} ${isDarkMode ? 'project-content-dark' : ''}`} style={scrollable ? { paddingBottom: '90px' } : {}}>
            <div className="project-header">
                <h4 className="project-title project-title-override" style={{ color: textColor }}>{project.title}</h4>
                <p className="project-type" style={{ color: subTextColor }}>{project.type}</p>
            </div>

            <p className="project-intro" style={{ color: subTextColor }}>{project.intro}</p>

            {/* Feature Carousel */}
            <div
                className="carousel-container"
                onScroll={handleScroll}
            >
                {project.features.map((feature, index) => {
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
                {project.features.map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-dot ${index === activeStep ? 'active' : ''}`}
                    />
                ))}
            </div>

            <div className="tech-tags">
                {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                ))}
            </div>
        </div>
    );
}
