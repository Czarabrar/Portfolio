import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const contacts = [
    {
        id: 'email',
        label: 'Email',
        value: 'abrarahmedah@gmail.com',
        href: 'mailto:abrarahmedah@gmail.com',
        icon: Mail,
        color: 'card-pastel-blue',
    },
    {
        id: 'github',
        label: 'GitHub',
        value: 'github.com/abrarahmed',
        href: 'https://github.com/abrarahmed',
        icon: Github,
        color: 'card-pastel-purple',
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        value: 'linkedin.com/in/abrarahmed',
        href: 'https://linkedin.com/in/abrarahmed',
        icon: Linkedin,
        color: 'card-pastel-cyan',
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
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
    },
};

/**
 * ContactScreen Component
 * 
 * Clean display of contact information
 * Email, GitHub, LinkedIn
 */
export default function ContactScreen() {
    return (
        <div className="screen">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-5"
            >
                <motion.div variants={fadeInUp}>
                    <h1 className="heading-lg">Contact</h1>
                    <p className="text-body mt-2">
                        Let's talk. I'm open to new opportunities and interesting projects.
                    </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-col gap-3">
                    {contacts.map((contact) => {
                        const Icon = contact.icon;
                        return (
                            <motion.a
                                key={contact.id}
                                href={contact.href}
                                target={contact.id !== 'email' ? '_blank' : undefined}
                                rel={contact.id !== 'email' ? 'noopener noreferrer' : undefined}
                                className={`contact-link ${contact.color}`}
                                style={{ background: 'transparent', border: '1px solid var(--color-gray-200)' }}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                            >
                                <div className="contact-icon">
                                    <Icon size={22} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <span className="text-small" style={{ fontWeight: 600 }}>{contact.label}</span>
                                    <p className="text-body" style={{ fontSize: 'var(--font-size-sm)' }}>
                                        {contact.value}
                                    </p>
                                </div>
                                <ExternalLink size={18} color="var(--color-gray-400)" />
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Availability */}
                <motion.div
                    variants={fadeInUp}
                    className="card card-pastel-green mt-4"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div
                            style={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                background: '#22c55e',
                                animation: 'pulse 2s infinite'
                            }}
                        />
                        <span className="heading-sm">Available for Work</span>
                    </div>
                    <p className="text-body">
                        Currently open to full-time positions and contract work.
                        Based in India, flexible with remote.
                    </p>
                </motion.div>

                {/* Response Time */}
                <motion.div variants={fadeInUp} className="mt-2">
                    <p className="text-small text-muted" style={{ textAlign: 'center' }}>
                        I typically respond within 24 hours
                    </p>
                </motion.div>
            </motion.div>

            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
        </div>
    );
}
