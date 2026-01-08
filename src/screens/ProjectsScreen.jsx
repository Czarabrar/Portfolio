import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Building2 } from 'lucide-react';

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
                    <h1 className="heading-lg">Projects</h1>
                    <p className="text-body mt-2">
                        Real apps solving real problems. Each project tells a story.
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
