import { motion } from 'framer-motion';
import { Home, Briefcase, Wrench, User, Mail } from 'lucide-react';

const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'fixes', label: 'Fixes', icon: Wrench },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
];

/**
 * BottomNav Component
 * 
 * App-style bottom tab navigation with:
 * - 5 tabs: Home, Projects, Fixes, About, Contact
 * - Active state indicators with smooth animations
 * - iOS/Android-appropriate styling
 */
export default function BottomNav({ activeTab, onTabChange }) {
    return (
        <nav className="bottom-nav">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                    <button
                        key={tab.id}
                        className={`nav-item ${isActive ? 'active' : ''}`}
                        onClick={() => onTabChange(tab.id)}
                        aria-label={tab.label}
                    >
                        <motion.div
                            className="nav-icon"
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.1 }}
                        >
                            <Icon
                                size={24}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                        </motion.div>
                        <span className="nav-label">{tab.label}</span>
                        {isActive && (
                            <motion.div
                                layoutId="activeTab"
                                style={{
                                    position: 'absolute',
                                    bottom: 'calc(var(--safe-area-bottom) + 58px)',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: 4,
                                    height: 4,
                                    borderRadius: '50%',
                                    background: 'var(--color-black)',
                                }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                );
            })}
        </nav>
    );
}
