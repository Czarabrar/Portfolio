import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

/**
 * StackHeader Component
 * 
 * Header for stack navigation with back button
 * Used for detail screens within tabs
 */
export default function StackHeader({ title, onBack }) {
    return (
        <motion.header
            className="stack-header"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
            <button className="back-button" onClick={onBack} aria-label="Go back">
                <ArrowLeft size={20} />
            </button>
            <h1 className="stack-title">{title}</h1>
        </motion.header>
    );
}
