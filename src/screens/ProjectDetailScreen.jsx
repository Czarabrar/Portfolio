import { motion } from 'framer-motion';
import { MapPin, Zap, Bell, Users, Tablet, Layers, Shield, Package } from 'lucide-react';
import StackHeader from '../components/StackHeader';

const projectData = {
    alelo: {
        name: 'Alelo',
        subtitle: 'E-commerce App',
        intro: 'Redesigned the Alelo mobile checkout flow, reducing drop-offs by adopting a distraction-free UX. Slashed background battery drain by actively managing location polling while maintaining real-time logistics tracking.',
        sections: [
            {
                title: 'UI Redesign',
                icon: Layers,
                color: 'card-pastel-blue',
                content: 'I redesigned the entire buyer and seller flows. Simplified navigation, cleaner product cards, and a checkout that doesn\'t lose users. Conversion improved because the app stopped getting in the way.',
            },
            {
                title: 'Google Maps Integration',
                icon: MapPin,
                color: 'card-pastel-green',
                content: 'I integrated Google Maps for real-time distance calculation and route visualization. Buyers see exactly where their order is coming from. Sellers see delivery zones that make sense.',
            },
            {
                title: 'Power Optimization',
                icon: Zap,
                color: 'card-pastel-orange',
                content: 'Location tracking was killing battery life. I refactored the tracking logic to use geofencing and adaptive intervals. Same functionality, fraction of the battery drain.',
            },
            {
                title: 'Real-time Tracking',
                icon: Users,
                color: 'card-pastel-purple',
                content: 'I built the real-time distance and duration system. Both buyer and seller see live updates. No refresh button needed. The data just works.',
            },
            {
                title: 'Notification System',
                icon: Bell,
                color: 'card-pastel-cyan',
                content: 'Push notifications that actually matter. Order updates, delivery status, seller responses. I built the targeting logic so users get relevant alerts, not spam.',
            },
        ],
        tech: ['React Native', 'Google Maps SDK', 'Firebase', 'Redux'],
    },
    ackumen: {
        name: 'Ackumen',
        subtitle: 'Enterprise Chemical Company App',
        intro: 'Scaled critical enterprise modules for a chemical manufacturing application. Ensured strict compliance with audit standards, enabling reliable data capture and offline syncing for field workers in connectivity-dead zones.',
        sections: [
            {
                title: 'Enterprise Standards',
                icon: Shield,
                color: 'card-pastel-blue',
                content: 'I followed strict enterprise patterns: proper authentication flows, role-based access, audit logging. The kind of boring, important work that keeps companies compliant.',
            },
            {
                title: 'Tablet Compatibility',
                icon: Tablet,
                color: 'card-pastel-green',
                content: 'Field workers use tablets. I made sure every screen, every interaction, worked perfectly on both phone and tablet. Responsive layouts, appropriate touch targets, the full deal.',
            },
            {
                title: 'Module Ownership',
                icon: Package,
                color: 'card-pastel-purple',
                content: 'I owned multiple modules end-to-end: inventory tracking, delivery scheduling, quality checks. Each module had to integrate seamlessly while remaining maintainable on its own.',
            },
            {
                title: 'Scalable Architecture',
                icon: Layers,
                color: 'card-pastel-orange',
                content: 'Built to scale. Clean separation of concerns, efficient data fetching, offline-first where needed. The architecture supports hundreds of users without breaking a sweat.',
            },
        ],
        tech: ['React Native', 'TypeScript', 'Redux Toolkit', 'REST APIs'],
    },
    gullycric: {
        name: 'GullyCric',
        subtitle: 'Real-time Cricket Scoring App (Mobile)',
        intro: 'Developed an offline-first cricket scoring app designed for gully and local matches, ensuring reliable tracking without internet dependence.',
        sections: [
            {
                title: 'Problem',
                icon: Layers,
                color: 'card-pastel-blue',
                content: 'Local cricket matches lack reliable digital scoring tools, especially in low or no internet environments, making match tracking inconsistent and manual.',
            },
            {
                title: 'Architecture & Approach',
                icon: Package,
                color: 'card-pastel-purple',
                content: 'Designed a mobile-first, offline-first React Native application using local state management to ensure uninterrupted match tracking. Focused on fast UI updates and minimal dependency on external services.',
            },
            {
                title: 'Challenges & Solutions',
                icon: Shield,
                color: 'card-pastel-green',
                content: 'Handled real-time score updates without backend dependency by optimizing local state flows. Ensured smooth user experience even with rapid scoring interactions and no network availability.',
            }
        ],
        tech: ['React Native CLI', 'Offline-first Architecture', 'Local State Management']
    },
    atmos: {
        name: 'Atmos',
        subtitle: 'News & Weather App (Mobile)',
        intro: 'Built a unified platform combining real-time weather updates with curated news content for a seamless user experience.',
        sections: [
            {
                title: 'Problem',
                icon: Layers,
                color: 'card-pastel-green',
                content: 'Users often rely on multiple apps for weather updates and news, leading to fragmented user experience and increased app switching.',
            },
            {
                title: 'Architecture & Approach',
                icon: Package,
                color: 'card-pastel-orange',
                content: 'Built a unified mobile application integrating weather and news APIs. Implemented asynchronous data fetching with optimized UI rendering for seamless content consumption.',
            },
            {
                title: 'Challenges & Solutions',
                icon: Shield,
                color: 'card-pastel-blue',
                content: 'Managed multiple API responses efficiently while maintaining performance. Designed fallback states and loading strategies to ensure smooth UX under varying network conditions.',
            }
        ],
        tech: ['React Native', 'API Integration', 'Async Data Handling']
    },
    'clash-of-imaan': {
        name: 'Clash of Imaan',
        subtitle: 'Real-time Quiz & Challenge App',
        intro: 'Developed an interactive quiz platform with 1v1 battles, daily challenges, and leaderboard engagement, focusing on real-time synchronized interactions.',
        sections: [
            {
                title: 'Problem',
                icon: Layers,
                color: 'card-pastel-purple',
                content: 'Lack of engaging and interactive quiz platforms for group participation and family engagement, especially during events like Ramadan.',
            },
            {
                title: 'Architecture & Approach',
                icon: Package,
                color: 'card-pastel-green',
                content: 'Developed a structured quiz system with support for 1v1 battles, daily challenges, and leaderboard tracking. Focused on dynamic quiz flows and real-time interaction handling.',
            },
            {
                title: 'Challenges & Solutions',
                icon: Shield,
                color: 'card-pastel-orange',
                content: 'Handled synchronization of quiz states and scoring logic across different gameplay modes. Designed scalable challenge systems to maintain engagement and consistency.',
            }
        ],
        tech: ['React Native', 'Real-time Gameplay Logic', 'User Engagement System']
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
    },
};

/**
 * ProjectDetailScreen Component
 * 
 * Story-driven project presentation
 * Shows the journey: problem → solution → impact
 */
export default function ProjectDetailScreen({ projectId, onBack }) {
    const project = projectData[projectId];

    if (!project) {
        return (
            <div className="screen">
                <p>Project not found</p>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <StackHeader title={project.name} onBack={onBack} />

            <div className="app-content" style={{ paddingTop: 0 }}>
                <div className="screen">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-5"
                    >
                        {/* Header */}
                        <motion.div variants={fadeInUp}>
                            <span className="tag">{project.subtitle}</span>
                            <p className="text-body mt-3">{project.intro}</p>
                        </motion.div>

                        {/* Story Sections */}
                        {project.sections.map((section, index) => {
                            const Icon = section.icon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className={`card ${section.color}`}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <Icon size={20} />
                                        <h3 className="heading-sm">{section.title}</h3>
                                    </div>
                                    <p className="text-body">{section.content}</p>
                                </motion.div>
                            );
                        })}

                        {/* Tech Stack */}
                        <motion.div variants={fadeInUp} className="mt-2">
                            <h4 className="text-small mb-2" style={{ fontWeight: 600 }}>Tech Stack</h4>
                            <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                                {project.tech.map((tech) => (
                                    <span key={tech} className="tag tag-dark">{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
