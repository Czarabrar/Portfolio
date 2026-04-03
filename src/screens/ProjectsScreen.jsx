import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Building2, Github, ExternalLink, Gamepad2, GraduationCap, Activity, Cloud } from 'lucide-react';

const featuredProjects = [
    {
        id: 'gullycric',
        name: 'GullyCric',
        type: 'Real-time Cricket App',
        icon: Activity,
        color: 'card-pastel-blue',
        tagline: 'Offline-first cricket scoring app designed for gully and local matches.',
        highlights: ['React Native CLI', 'Offline-first Arch', 'Local State'],
        github: 'https://github.com/Czarabrar/gullycric-score-tracker',
        demo: null,
    },
    {
        id: 'atmos',
        name: 'Atmos',
        type: 'News & Weather App',
        icon: Cloud,
        color: 'card-pastel-green',
        tagline: 'Unified platform combining real-time weather updates with curated news content.',
        highlights: ['React Native', 'API Integration', 'Async Data'],
        github: 'https://github.com/Czarabrar/atmos-news-weather-app',
        demo: null,
    },
    {
        id: 'clash-of-imaan',
        name: 'Clash of Imaan',
        type: 'Real-time Quiz App',
        icon: Gamepad2,
        color: 'card-pastel-purple',
        tagline: 'Interactive quiz platform with 1v1 battles, daily challenges, and leaderboards.',
        highlights: ['React Native', 'Real-time Logic', 'User Engagement'],
        github: 'https://github.com/Czarabrar/clash-of-imaan-quiz-app',
        demo: null,
    }
];

const projects = [
    {
        id: 'alelo',
        name: 'Alelo',
        type: 'E-commerce App',
        icon: ShoppingBag,
        color: 'card-pastel-orange',
        tagline: 'Connecting buyers and sellers with real-time logistics',
        highlights: ['UI Redesign', 'Google Maps', 'Real-time Tracking'],
    },
    {
        id: 'ackumen',
        name: 'Ackumen',
        type: 'Enterprise Solution',
        icon: Building2,
        color: 'card-pastel-purple',
        tagline: 'Chemical company operations management at scale',
        highlights: ['Tablet Support', 'Module Architecture', 'Enterprise Standards'],
    },
];

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
};

/**
 * ProjectsScreen Component
 * 
 * Project list with cards linking to detail screens
 * Displays Alelo (E-commerce) and Ackumen (Enterprise)
 */
export default function ProjectsScreen({ onProjectSelect }) {
    return (
        <div className="screen">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-5"
            >
                <motion.div variants={fadeInUp}>
                    <h1 className="heading-lg">Featured Projects</h1>
                    <p className="text-body mt-2">
                        High-impact personal projects showcasing product thinking and technical depth.
                    </p>
                </motion.div>

                {featuredProjects.map((project) => {
                    const Icon = project.icon;
                    return (
                        <motion.button
                            key={project.id}
                            variants={fadeInUp}
                            className={`card card-interactive ${project.color}`}
                            onClick={() => onProjectSelect(project.id)}
                            whileTap={{ scale: 0.98 }}
                            style={{ textAlign: 'left' }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 'var(--radius-lg)',
                                            background: 'var(--color-black)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Icon size={20} color="white" />
                                    </div>
                                    <div>
                                        <h3 className="heading-md">{project.name}</h3>
                                        <span className="text-small">{project.type}</span>
                                    </div>
                                </div>
                                <ArrowRight size={20} />
                            </div>

                            <p className="text-body mb-3">{project.tagline}</p>

                            <div className="flex gap-2 mb-4" style={{ flexWrap: 'wrap' }}>
                                {project.highlights.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-small" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>
                                        <Github size={16} /> Code
                                    </a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-small" style={{ color: 'var(--color-text)', textDecoration: 'none', fontWeight: 600 }}>
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.button>
                    );
                })}

                <motion.div variants={fadeInUp} className="mt-4">
                    <h2 className="heading-md">Enterprise & Client Work</h2>
                    <p className="text-body mt-2">
                        Real-world applications solving complex business problems at scale.
                    </p>
                </motion.div>

                {projects.map((project) => {
                    const Icon = project.icon;
                    return (
                        <motion.button
                            key={project.id}
                            variants={fadeInUp}
                            className={`card card-interactive ${project.color}`}
                            onClick={() => onProjectSelect(project.id)}
                            whileTap={{ scale: 0.98 }}
                            style={{ textAlign: 'left' }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 'var(--radius-lg)',
                                            background: 'var(--color-black)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Icon size={20} color="white" />
                                    </div>
                                    <div>
                                        <h3 className="heading-md">{project.name}</h3>
                                        <span className="text-small">{project.type}</span>
                                    </div>
                                </div>
                                <ArrowRight size={20} />
                            </div>

                            <p className="text-body mb-3">{project.tagline}</p>

                            <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                                {project.highlights.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </motion.button>
                    );
                })}

                <motion.div variants={fadeInUp} className="mt-4">
                    <p className="text-small text-muted" style={{ textAlign: 'center' }}>
                        Tap a project to explore the full story
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
