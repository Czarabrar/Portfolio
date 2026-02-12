import React from 'react';
import { motion } from 'framer-motion';
import ProjectContent from './ProjectContent';

export default function PhoneMockup({ project, compact = false }) {

    return (
        <motion.div
            className="phone-wrapper"
            style={compact ? { width: '100%', height: '100%', justifyContent: 'center', gap: 0 } : {}}
            initial={compact ? { opacity: 0 } : { opacity: 0, y: 40 }}
            whileInView={compact ? { opacity: 1 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
            {!compact && (
                <div className="phone-label">
                    <h3 className="phone-label-title">{project.title}</h3>
                    <p className="phone-label-subtitle">{project.type}</p>
                </div>
            )}

            <div
                className="phone-frame"
                style={compact ? {
                    width: '100%',
                    height: '100%',
                    maxHeight: '100%',
                    borderRadius: '2rem',
                    padding: '8px',
                    border: 'none',
                    boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                } : undefined}
            >
                {/* Notch/Island - Scale down or hide in compact? Keep for "phone" feel but smaller */}
                {!compact && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[24px] bg-black rounded-b-2xl z-20" />
                )}
                {compact && (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[80px] h-[18px] bg-black rounded-full z-20" />
                )}

                <div
                    className="phone-screen"
                    style={compact ? {
                        borderRadius: '1.5rem'
                    } : undefined}
                >
                    <ProjectContent project={project} />
                </div>
            </div>
        </motion.div>
    );
}
