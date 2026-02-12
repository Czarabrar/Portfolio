import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Icons for the steps
import { ScanSearch, FileSearch, BrainCircuit, Code, CheckCircle } from 'lucide-react';
import './Stepper.css';

const icons = [ScanSearch, FileSearch, BrainCircuit, Code, CheckCircle];

export default function Stepper({ steps }) {
    const [activeStep, setActiveStep] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    // Ref for viewport detection
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    // Auto-play logic
    useEffect(() => {
        if (!isInView || isComplete) return;

        const interval = setInterval(() => {
            setActiveStep((prev) => {
                if (prev < steps.length - 1) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    setIsComplete(true);
                    return prev;
                }
            });
        }, 1500); // Switch every 1.5 seconds

        return () => clearInterval(interval);
    }, [isInView, isComplete, steps.length]);

    // Handle manual click
    const handleStepClick = (index) => {
        setActiveStep(index);
        // If they click, we can either stop auto-play or just let it finish.
        // For now, let's assume clicking means they want to see that specific one,
        // but if it's already complete, we just set active.
        if (index === steps.length - 1) setIsComplete(true);
    };

    // Calculate progress (0 to 1)
    const progress = activeStep / (steps.length - 1);

    return (
        <div className="stepper-scroll-container" ref={containerRef}>
            <div className="stepper-sticky-view">
                <div className="stepper-content-wrapper">

                    <div className="stepper-header">
                        <h2 className="stepper-title">AI-Assisted Engineering</h2>
                        <p className="stepper-subtitle">
                            How I use AI as a reasoning partner inside real debugging workflows.
                        </p>
                    </div>

                    <div className="stepper-track">
                        {/* Connecting Line - Background */}
                        <div className="stepper-line-bg" />

                        {/* Connecting Line - Fill (Animated) */}
                        <div
                            className="stepper-line-fill"
                            style={{
                                '--progress-scale': progress
                            }}
                        />

                        {/* Steps */}
                        <div className="stepper-steps">
                            {steps.map((step, index) => {
                                const Icon = icons[index] || CheckCircle;

                                // Logic: 
                                // If complete, ALL are "active" (colored).
                                // If not complete, only indices <= activeStep are active.
                                const isActive = isComplete ? true : index <= activeStep;

                                // Current pulse effect: only while animating
                                const isCurrent = !isComplete && index === activeStep;

                                // Description visibility:
                                // If complete -> Show ALL
                                // If not complete -> Show only CURRENT
                                const showDescription = isComplete || index === activeStep;

                                return (
                                    <div
                                        key={index}
                                        className={`stepper-item ${isActive ? 'active' : ''}`}
                                        onClick={() => handleStepClick(index)}
                                    >
                                        {/* Step Marker */}
                                        <div className="stepper-marker-wrapper">
                                            <div
                                                className="stepper-marker"
                                                style={{
                                                    backgroundColor: isActive ? step.color : 'transparent',
                                                    borderColor: isActive ? step.color : 'var(--color-gray-300)',
                                                    transform: isCurrent ? 'scale(1.2)' : 'scale(1)',
                                                    boxShadow: isActive ? `0 0 20px ${step.color}60` : 'none'
                                                }}
                                            >
                                                <Icon size={20} color={isActive ? '#fff' : 'var(--text-muted)'} />
                                            </div>
                                            <span className="stepper-number" style={{ opacity: isActive ? 1 : 0.5 }}>
                                                0{index + 1}
                                            </span>
                                        </div>

                                        {/* Step Content */}
                                        <div className="stepper-info">
                                            <h3
                                                className="stepper-step-title"
                                                style={{ color: isActive ? step.color : 'var(--text-muted)' }}
                                            >
                                                {step.title}
                                            </h3>

                                            <AnimatePresence mode="popLayout">
                                                {showDescription && (
                                                    <motion.div
                                                        className="stepper-step-desc"
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: -10 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <p>{step.description}</p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

