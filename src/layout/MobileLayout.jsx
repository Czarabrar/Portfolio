import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail,
    Github,
    Linkedin,
    Calendar,
    Building,
    Code,
    Briefcase,
    Target,
    FileText,
    Download,
    Terminal,
    Tablet,
    Award,
    Cloud
} from 'lucide-react';

import AppShell from '../components/AppShell'; // Import AppShell
import Stepper from '../components/Stepper';
import PhoneMockup from '../components/PhoneMockup';
import { aleloProject, ackumenProject, resumeData, aiWorkflowSteps } from '../data/portfolioData';

// Mobile Header Component - renderedINSIDE the AppShell content flow now?
// Or global? Let's keep it simple. AppShell has nav, but header?
// Maybe just part of "Home" screen or each screen has own header.

export default function MobileLayout({ isDark, toggleTheme }) {
    const [activeTab, setActiveTab] = useState('home');

    // Animation variants for tab transition
    const tabVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 }
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <motion.div
                        key="home"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tabVariants}
                        transition={{ duration: 0.3 }}
                        className="pb-8 px-6 flex flex-col items-center text-center space-y-8"
                    >
                        {/* Header / Theme Toggle */}
                        <div className="w-full flex justify-end py-4">
                            <button
                                onClick={toggleTheme}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm"
                            >
                                {isDark ? (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" fill="currentColor" fillOpacity="0.2" />
                                    </svg>
                                ) : (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="5" fill="currentColor" fillOpacity="0.2" />
                                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Mobile Hero */}
                        <div className="relative w-40 h-40">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-xl opacity-50"></div>
                            <img
                                src={`${import.meta.env.BASE_URL}profile.png`}
                                alt="Profile"
                                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-900 shadow-xl"
                            />
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight">ABRAR AHMED A H</h1>
                            <p className="text-lg text-gray-500 font-medium">React Native Engineer</p>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md mx-auto">
                            Architecting reliable, production-ready mobile systems with performance-first thinking — enhanced by structured AI-assisted problem solving.
                            <br /><br />
                            Clean architecture. Real-time workflows. Scalable design.
                        </p>

                        <div className="flex space-x-4">
                            <button
                                onClick={() => setActiveTab('projects')}
                                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
                            >
                                View Projects
                            </button>
                            <button
                                onClick={() => setActiveTab('contact')}
                                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                Contact
                            </button>
                        </div>

                        {/* Mobile Stats */}
                        <div className="w-full grid grid-cols-2 gap-4 pt-8">
                            <div className="p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                                <div className="text-2xl font-bold">1.7+</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Years Exp</div>
                            </div>
                            <div className="p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                                <div className="text-2xl font-bold">Android</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Specialist</div>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'about':
                return (
                    <motion.div
                        key="about"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tabVariants}
                        transition={{ duration: 0.3 }}
                        className="pb-8 px-4 space-y-12 pt-6"
                    >
                        {/* About Me Card */}
                        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-4">
                            <h2 className="text-2xl font-bold">About Me</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                I build reliable, real-time mobile applications that perform well in production—not just in demos.
                                With over 2 years of experience in React Native, I’ve delivered features used daily by real users.
                            </p>
                        </div>

                        {/* AI Section */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold px-2">AI Workflow</h3>
                            <Stepper steps={aiWorkflowSteps} />
                        </div>

                        {/* Certifications */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold px-2">Certifications</h3>
                            <div className="grid gap-4">
                                {/* Simplified cards for mobile */}
                                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center space-x-4">
                                    <div className="p-2 bg-green-50 rounded-lg"><Cloud className="text-green-600" size={20} /></div>
                                    <div>
                                        <div className="font-semibold text-sm">Google Firebase</div>
                                        <div className="text-xs text-gray-500">Web Apps Development</div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center space-x-4">
                                    <div className="p-2 bg-blue-50 rounded-lg"><Terminal className="text-blue-500" size={20} /></div>
                                    <div>
                                        <div className="font-semibold text-sm">Cisco JavaScript</div>
                                        <div className="text-xs text-gray-500">Essentials 1</div>
                                    </div>
                                </div>
                                <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center space-x-4">
                                    <div className="p-2 bg-purple-50 rounded-lg"><Tablet className="text-purple-600" size={20} /></div>
                                    <div>
                                        <div className="font-semibold text-sm">Accenture Mobile</div>
                                        <div className="text-xs text-gray-500">Digital Skills</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );

            case 'projects':
                return (
                    <motion.div
                        key="projects"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tabVariants}
                        transition={{ duration: 0.3 }}
                        className="pb-8 px-4 space-y-12 pt-6"
                    >
                        <div className="px-2">
                            <h2 className="text-2xl font-bold mb-2">Projects</h2>
                            <p className="text-gray-500 text-sm">Real apps solving real problems.</p>
                        </div>

                        <div className="space-y-12">
                            <PhoneMockup project={aleloProject} />
                            <PhoneMockup project={ackumenProject} />
                        </div>
                    </motion.div>
                );

            case 'resume':
                return (
                    <motion.div
                        key="resume"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tabVariants}
                        transition={{ duration: 0.3 }}
                        className="pb-8 px-4 space-y-8 pt-6"
                    >
                        <div className="px-2 flex justify-between items-center">
                            <h2 className="text-2xl font-bold">Resume</h2>
                            <a href={`${import.meta.env.BASE_URL}Abrar_Ahmed_React_Native_Dev.pdf`} download className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                                <Download size={20} />
                            </a>
                        </div>

                        {/* Experience */}
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"><Building size={20} /></div>
                                <h3 className="font-bold text-lg">Experience</h3>
                            </div>

                            {resumeData.experience.map((exp, idx) => (
                                <div key={idx} className="space-y-3">
                                    <div>
                                        <div className="font-semibold">{exp.title}</div>
                                        <div className="text-sm text-gray-500">{exp.company}</div>
                                        <div className="text-xs text-gray-400 mt-1 flex items-center"><Calendar size={12} className="mr-1" /> {exp.period}</div>
                                    </div>
                                    <ul className="space-y-2 pl-4 border-l-2 border-gray-100 dark:border-gray-800">
                                        {exp.highlights.slice(0, 3).map((h, i) => ( // Show less on mobile?
                                            <li key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{h}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Skills */}
                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"><Code size={20} /></div>
                                <h3 className="font-bold text-lg">Skills</h3>
                            </div>

                            <div className="space-y-6">
                                {Object.entries(resumeData.skills).map(([key, skillGroup]) => (
                                    <div key={key}>
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">{skillGroup.category}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-100 dark:border-gray-700">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                );

            case 'contact':
                return (
                    <motion.div
                        key="contact"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={tabVariants}
                        transition={{ duration: 0.3 }}
                        className="pb-8 px-4 flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 pt-6"
                    >
                        <div className="space-y-2">
                            <h2 className="text-2xl font-bold">Get In Touch</h2>
                            <p className="text-gray-500">Open to new opportunities</p>
                        </div>

                        <div className="w-full max-w-sm space-y-4">
                            <a href="mailto:abrarahmedpbt53@gmail.com" className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-0.5">Email</div>
                                    <div className="font-semibold text-sm truncate">abrarahmedpbt53@gmail.com</div>
                                </div>
                            </a>

                            <a href="https://linkedin.com/in/abrar-ahmed-mca" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-full mr-4"><Linkedin size={20} /></div>
                                <div className="text-left">
                                    <div className="text-xs text-gray-500 font-medium uppercase">LinkedIn</div>
                                    <div className="font-semibold text-sm">Connect on LinkedIn</div>
                                </div>
                            </a>

                            <a href="https://github.com/Czarabrar" target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <div className="p-3 bg-gray-100 text-gray-900 rounded-full mr-4"><Github size={20} /></div>
                                <div className="text-left">
                                    <div className="text-xs text-gray-500 font-medium uppercase">GitHub</div>
                                    <div className="font-semibold text-sm">Check my Code</div>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                );

            default:
                return null;
        }
    };

    return (
        // Wrap entire layout in AppShell
        <AppShell variant="mobile" activeTab={activeTab} setActiveTab={setActiveTab}>
            <AnimatePresence mode="wait">
                {renderContent()}
            </AnimatePresence>
        </AppShell>
    );
}
