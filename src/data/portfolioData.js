import {
    MapPin,
    Layers,
    Bell,
    Zap,
    Shield,
    Tablet,
    Wrench,
    Code,
    Calendar,
    Building,
    Cloud,
    Terminal,
    Award,
    BadgeCheck,
} from 'lucide-react';

/* ===================================
   PROJECT DATA
   =================================== */

export const aleloProject = {
    title: 'Location-Based Commerce App',
    type: 'High-performance mobile platform',
    intro: 'Built and optimized a real-time, location-driven mobile application connecting users and vendors. Designed for daily usage with strong focus on performance, reliability, and smooth UX on low-end devices.',
    features: [
        {
            icon: MapPin,
            title: 'Real-Time Location Tracking',
            desc: 'Live location updates with optimized background listeners and lifecycle-aware handling.',
            color: 'feature-card-blue',
        },
        {
            icon: Layers,
            title: 'Maps & Distance Intelligence',
            desc: 'Integrated Google Maps with distance calculation, ETA estimation, and route visualization.',
            color: 'feature-card-green',
        },
        {
            icon: Bell,
            title: 'Push Notifications',
            desc: 'Implemented real-time notifications for order updates and delivery coordination.',
            color: 'feature-card-purple',
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            desc: 'Optimized large dynamic lists, caching strategies, and render cycles to reduce load time.',
            color: 'feature-card-orange',
        },
    ],
    tech: ['React Native', 'Google Maps SDK', 'Firebase', 'Redux', 'Javascript(ES6+)', 'Third Party API Integration', 'Battery Optimization', 'List Optimization', 'Firebase'
    ],
};

export const ackumenProject = {
    title: 'Enterprise Operations Platform',
    type: 'Scalable, compliance-ready mobile system',
    intro: 'Contributed to a large-scale enterprise mobile application used daily in an industrial environment. Focused on reliability, maintainability, and long-term scalability across Android and iOS.',
    features: [
        {
            icon: Shield,
            title: 'Enterprise Standards',
            desc: 'Implemented secure authentication, role-based access, and audit-friendly workflows.',
            color: 'feature-card-blue',
        },
        {
            icon: Layers, // Scalable Architecture
            title: 'Scalable Architecture',
            desc: 'Worked with modular architecture, efficient data fetching, and offline-first patterns.',
            color: 'feature-card-green',
        },
        {
            icon: Tablet, // Cross-Device Support
            title: 'Cross-Device Support',
            desc: 'Ensured seamless compatibility across phones and tablets with responsive layouts.',
            color: 'feature-card-purple',
        },
        {
            icon: Wrench, // Legacy Code Modernization (using Wrench as it fits 'fixing/modernizing')
            title: 'Legacy Code Modernization',
            desc: 'Refactored legacy flows to improve maintainability while preserving business-critical logic.',
            color: 'feature-card-orange',
        },
    ],
    tech: ['React Native', 'TypeScript', 'Redux Toolkit', 'REST APIs', 'version Upgrade', 'Ios Specific Features', 'Android Specific Features', 'android permissions', 'real time notifications'],
};

export const resumeData = {
    summary: "React Native Developer with 2+ years of experience building and maintaining scalable cross-platform mobile applications. Strong focus on performance optimization, real-time features, and Android production debugging. Experienced in delivering stable, high-quality applications used daily by real users.",
    experience: [
        {
            title: "Digital Transformation Engineer – React Native",
            company: "Ideassion Technology Solutions, Chennai",
            period: "July 2024 – Present",
            highlights: [
                "Optimized data-heavy real-time screens using caching and render optimization, reducing load times by approximately 35%.",
                "Built and optimized production React Native features targeting performance on low-end Android devices.",
                "Owned end-to-end location tracking, push notifications, and delivery workflows supporting 100+ daily users.",
                "Led React Native and Android SDK upgrades for Google Play policy compliance with zero-downtime releases.",
                "Resolved critical Android 14 background ANR issues, contributing to the open-source React Native ecosystem."
            ]
        }
    ],
    skills: {
        core: {
            category: "Core Development",
            items: ["React Native", "JavaScript (ES6+)", "Redux Toolkit", "Context API"]
        },
        mobile: {
            category: "Mobile & Real-Time",
            items: ["Android SDK", "Google Maps SDK", "Push Notifications", "Background Services"]
        },
        tools: {
            category: "Tools & AI",
            items: ["Firebase", "Git", "Android Studio", "AI-Assisted Development"]
        }
    }
};

export const aiWorkflowSteps = [
    {
        number: 1,
        title: "Isolate the Signal",
        description: "Read the ANR trace, filter logcat noise, and pin down exactly which thread is blocked before forming any theory.",
        color: "#06b6d4" // Cyan
    },
    {
        number: 2,
        title: "Map the Context",
        description: "Trace the Android lifecycle path, check background service state, and identify platform constraints.",
        color: "#14b8a6" // Teal
    },
    {
        number: 3,
        title: "Generate Hypotheses",
        description: "Use AI to list possible root causes from the stack trace, then rank each by likelihood against the actual device logs.",
        color: "#3b82f6" // Blue
    },
    {
        number: 4,
        title: "Targeted Fix",
        description: "Write the fix for one specific path — a foreground service flag, a missing null check — and test it on the exact device.",
        color: "#8b5cf6" // Violet
    },
    {
        number: 5,
        title: "Verify & Document",
        description: "Run the repro steps again, confirm the fix holds under poor network and low memory, then log the pattern.",
        color: "#10b981" // Emerald
    }
];
