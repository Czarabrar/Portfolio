import { motion } from 'framer-motion';

/**
 * MobileFrame Component
 * 
 * Wraps the app content in a high-fidelity 2D mobile device frame.
 * - On desktop: Shows a centered phone frame with bezel
 * - On mobile: Renders full-screen like a native app
 */
export default function MobileFrame({ children }) {
  return (
    <div className="mobile-frame-container">
      <motion.div 
        className="mobile-frame"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mobile-screen">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
