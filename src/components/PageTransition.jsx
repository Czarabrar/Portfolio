import { motion, AnimatePresence } from 'framer-motion';

/**
 * PageTransition Component
 * 
 * Wraps screen content with app-like transition animations
 * - Fade + slide up on enter
 * - Fade on exit
 */
const pageVariants = {
    initial: {
        opacity: 0,
        y: 10,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: [0.16, 1, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
        },
    },
};

export default function PageTransition({ children, keyId }) {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={keyId}
                variants={pageVariants}
                initial="initial"
                animate="enter"
                exit="exit"
                style={{ height: '100%' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
