import { motion } from 'framer-motion';

/**
 * ElectricCircleCard - A circular container with an animated electric border effect.
 * Used to wrap step icons in the AI stepper.
 * 
 * @param {boolean} isActive - Whether the electric effect should be active
 * @param {React.ReactNode} children - The content (icon) to display inside
 * @param {string} className - Additional CSS classes
 */
function ElectricCircleCard({ isActive, children, className = '' }) {
    return (
        <motion.div
            className={`electric-circle ${isActive ? 'electric-active' : ''} ${className}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
                scale: isActive ? 1.05 : 1,
                opacity: 1
            }}
            transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1]
            }}
        >
            <div className="electric-circle-inner">
                {children}
            </div>
            {isActive && (
                <motion.div
                    className="electric-ring"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </motion.div>
    );
}

export default ElectricCircleCard;
