import { motion } from 'framer-motion';

const techStack = [
    { category: 'Core', items: ['React Native', 'TypeScript', 'JavaScript'] },
    { category: 'State', items: ['Redux', 'Redux Toolkit', 'Context API'] },
    { category: 'Navigation', items: ['React Navigation', 'Deep Linking'] },
    { category: 'Backend', items: ['Firebase', 'REST APIs', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Xcode', 'Android Studio'] },
];

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
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
 * AboutScreen Component
 * 
 * Professional narrative, tech stack, and philosophy
 * Tone: Engineer speaking to another engineer
 */
export default function AboutScreen() {
    return (
        <div className="screen">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-5"
            >
                <motion.div variants={fadeInUp}>
                    <h1 className="heading-lg">About</h1>
                </motion.div>

                {/* Professional Narrative */}
                <motion.div variants={fadeInUp} className="card card-pastel-blue">
                    <h3 className="heading-sm mb-3">Who I Am</h3>
                    <p className="text-body">
                        I'm a React Native developer who cares about the details.
                        I've shipped apps used by thousands of people, and I've fixed
                        the bugs that come with that territory.
                    </p>
                    <p className="text-body mt-3">
                        I don't just write code that works—I write code that others
                        can read, maintain, and build upon. That's the real job.
                    </p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div variants={fadeInUp}>
                    <h3 className="heading-sm mb-3">Tech Stack</h3>
                    <div className="flex flex-col gap-3">
                        {techStack.map((group) => (
                            <div key={group.category}>
                                <span className="text-small" style={{ fontWeight: 600 }}>
                                    {group.category}
                                </span>
                                <div className="flex gap-2 mt-1" style={{ flexWrap: 'wrap' }}>
                                    {group.items.map((item) => (
                                        <span key={item} className="tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Learning Mindset */}
                <motion.div variants={fadeInUp} className="card card-pastel-green">
                    <h3 className="heading-sm mb-3">How I Work</h3>
                    <p className="text-body">
                        I learn by doing. When I hit a wall, I dig into the source code,
                        read the docs (all of them), and figure it out.
                    </p>
                    <p className="text-body mt-3">
                        I ask questions when I'm stuck, not questions I could answer myself.
                        Senior engineers appreciate that.
                    </p>
                </motion.div>

                {/* Philosophy */}
                <motion.div variants={fadeInUp} className="card card-pastel-purple">
                    <h3 className="heading-sm mb-3">What I Believe</h3>
                    <ul className="flex flex-col gap-2" style={{ paddingLeft: 'var(--space-4)' }}>
                        <li className="text-body">Ship first, optimize later—but always optimize</li>
                        <li className="text-body">Every bug is a missing test</li>
                        <li className="text-body">Good code explains itself, great code doesn't need to</li>
                        <li className="text-body">The user's phone is slower than yours</li>
                    </ul>
                </motion.div>

                {/* Leadership */}
                <motion.div variants={fadeInUp}>
                    <h3 className="heading-sm mb-3">Leadership</h3>
                    <p className="text-body">
                        I've mentored junior developers, led code reviews, and driven
                        technical decisions. Leadership isn't about titles—it's about
                        making the people around you better.
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
}
