import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Wrench } from 'lucide-react';

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
 * HomeScreen Component
 * 
 * Landing screen with:
 * - Name and role display
 * - Confident, minimal intro
 * - Entry points to Projects and Fixes
 */
export default function HomeScreen({ onNavigate }) {
    return (
        <div className="screen">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-6"
            >
                {/* Hero Section */}
                <motion.div variants={fadeInUp} className="mt-8">
                    <span className="tag tag-dark">React Native Developer</span>
                </motion.div>

                <motion.div variants={fadeInUp}>
                    <h1 className="heading-xl">
                        ABRAR<br />AHMED A H
                    </h1>
                </motion.div>

                <motion.p variants={fadeInUp} className="text-body" style={{ maxWidth: '280px' }}>
                    I build mobile apps that solve real problems.
                    Clean architecture, thoughtful UX, production-ready code.
                </motion.p>

                {/* Quick Stats */}
                <motion.div
                    variants={fadeInUp}
                    className="flex gap-4 mt-2"
                >
                    <div className="flex flex-col">
                        <span className="heading-md">3+</span>
                        <span className="text-small">Years Experience</span>
                    </div>
                    <div style={{ width: 1, background: 'var(--color-gray-200)' }} />
                    <div className="flex flex-col">
                        <span className="heading-md">10+</span>
                        <span className="text-small">Apps Shipped</span>
                    </div>
                </motion.div>

                {/* Entry Points */}
                <motion.div variants={fadeInUp} className="flex flex-col gap-3 mt-4">
                    <motion.button
                        className="card card-interactive card-pastel-blue flex items-center justify-between"
                        onClick={() => onNavigate('projects')}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex items-center gap-3">
                            <Briefcase size={20} />
                            <div className="flex flex-col" style={{ alignItems: 'flex-start' }}>
                                <span className="heading-sm">Projects</span>
                                <span className="text-small">Real apps, real impact</span>
                            </div>
                        </div>
                        <ArrowRight size={20} />
                    </motion.button>

                    <motion.button
                        className="card card-interactive card-pastel-green flex items-center justify-between"
                        onClick={() => onNavigate('fixes')}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex items-center gap-3">
                            <Wrench size={20} />
                            <div className="flex flex-col" style={{ alignItems: 'flex-start' }}>
                                <span className="heading-sm">Fixes</span>
                                <span className="text-small">Production problem-solving</span>
                            </div>
                        </div>
                        <ArrowRight size={20} />
                    </motion.button>
                </motion.div>

                {/* Philosophy Quote */}
                <motion.div
                    variants={fadeInUp}
                    className="mt-6"
                    style={{
                        padding: 'var(--space-4)',
                        borderLeft: '2px solid var(--color-black)',
                    }}
                >
                    <p className="text-body" style={{ fontStyle: 'italic' }}>
                        "Ship it. Then make it better."
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
