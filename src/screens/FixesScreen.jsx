import { motion } from 'framer-motion';

const fixes = [
    {
        id: 1,
        problem: 'App crashed when users switched between tabs rapidly during data fetch',
        fix: 'Implemented proper cleanup with AbortController and race condition guards',
        impact: 'Zero crash reports from this issue in production',
    },
    {
        id: 2,
        problem: 'FlatList performance degraded with 500+ items, causing frame drops',
        fix: 'Added getItemLayout, optimized renderItem with React.memo, implemented windowing',
        impact: 'Consistent 60fps scrolling regardless of list size',
    },
    {
        id: 3,
        problem: 'Android back button behavior was inconsistent across nested navigators',
        fix: 'Built a custom back handler that respects navigation hierarchy and modal states',
        impact: 'Predictable navigation that matches user expectations',
    },
    {
        id: 4,
        problem: 'Images flickered when scrolling through product grids',
        fix: 'Implemented image caching with FastImage and placeholder shimmer loading',
        impact: 'Smooth image loading with no visual jumps',
    },
    {
        id: 5,
        problem: 'Push notifications weren\'t registering on certain Android devices',
        fix: 'Fixed FCM token refresh logic and added proper channel configuration for Android 8+',
        impact: 'Notification delivery rate increased to 99.2%',
    },
    {
        id: 6,
        problem: 'Memory leaks from uncleared event listeners in background location tracking',
        fix: 'Refactored to use proper lifecycle management and cleanup on component unmount',
        impact: 'App memory usage reduced by 40% during extended sessions',
    },
    {
        id: 7,
        problem: 'Form validation ran on every keystroke causing input lag',
        fix: 'Debounced validation and moved heavy checks to blur events',
        impact: 'Instant input response with smart validation timing',
    },
    {
        id: 8,
        problem: 'Deep links failed when app was in killed state on iOS',
        fix: 'Added initial URL handling in app initialization flow before navigation ready',
        impact: 'Deep links work reliably in all app states',
    },
];

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
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
 * FixesScreen Component
 * 
 * Production problem-solving showcase
 * Format: Problem → Fix → Why it mattered
 */
export default function FixesScreen() {
    return (
        <div className="screen">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col"
            >
                <motion.div variants={fadeInUp} className="mb-5">
                    <h1 className="heading-lg">Fixes</h1>
                    <p className="text-body mt-2">
                        Real production issues I've diagnosed and resolved.
                        No exaggeration—just problems and solutions.
                    </p>
                </motion.div>

                {fixes.map((fix) => (
                    <motion.div
                        key={fix.id}
                        variants={fadeInUp}
                        className="fix-item"
                    >
                        <div className="flex items-center mb-2">
                            <span className="fix-number">{fix.id}</span>
                            <span className="text-small" style={{ color: 'var(--color-gray-400)' }}>Problem</span>
                        </div>
                        <p className="text-body mb-3" style={{ fontWeight: 500, color: 'var(--color-black)' }}>
                            {fix.problem}
                        </p>

                        <div className="card card-pastel-green" style={{ padding: 'var(--space-3)' }}>
                            <p className="text-small" style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>
                                Fix
                            </p>
                            <p className="text-body" style={{ fontSize: 'var(--font-size-sm)' }}>
                                {fix.fix}
                            </p>
                        </div>

                        <p className="text-small mt-2" style={{ color: 'var(--color-gray-500)' }}>
                            <strong>Impact:</strong> {fix.impact}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
