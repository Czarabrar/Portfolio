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
    Activity,
    Package,
    Gamepad2,
    CloudOff,
    Target,
    Cpu,
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

export const gullyCricProject = {
    title: 'GullyCric',
    type: 'Offline-first Cricket Scoring App',
    intro: 'Built an offline-first cricket scoring app for gully and local matches — no internet required. Focused on reliable local state management and fast score updates.',
    features: [
        {
            icon: Layers,
            title: 'Problem',
            desc: 'Local matches lack reliable digital tools. Manual tracking is error-prone with no internet fallback.',
            color: 'feature-card-blue',
        },
        {
            icon: Package,
            title: 'Architecture & Approach',
            desc: 'Offline-first React Native CLI app with locally managed match state, ensuring uninterrupted tracking without any backend.',
            color: 'feature-card-green',
        },
        {
            icon: Shield,
            title: 'Challenges & Solutions',
            desc: 'Handled rapid real-time score interactions and edge cases without network — optimized local state flows for smooth UX.',
            color: 'feature-card-purple',
        },
    ],
    tech: ['React Native CLI', 'Offline-first Architecture', 'Local State Management'],
    github: 'https://github.com/Czarabrar/gullycric-score-tracker',
};

export const atmosProject = {
    title: 'Atmos',
    type: 'News & Weather App',
    intro: 'Unified weather and news into one seamless app, eliminating the need to switch between multiple apps. Built with async API handling and optimized rendering.',
    features: [
        {
            icon: Layers,
            title: 'Problem',
            desc: 'Users switch between multiple apps for weather and news — creating a fragmented daily experience.',
            color: 'feature-card-blue',
        },
        {
            icon: Cloud,
            title: 'Architecture & Approach',
            desc: 'Integrated weather + news APIs in a single React Native app with async data fetching and optimized UI rendering.',
            color: 'feature-card-green',
        },
        {
            icon: Shield,
            title: 'Challenges & Solutions',
            desc: 'Managed multiple concurrent API responses and implemented fallback states and loaders for varying network conditions.',
            color: 'feature-card-purple',
        },
    ],
    tech: ['React Native', 'REST API Integration', 'Async Data Handling'],
    github: 'https://github.com/Czarabrar/atmos-news-weather-app',
};

export const clashOfImaanProject = {
    title: 'Clash of Imaan',
    type: 'Real-time Quiz & Challenge App',
    intro: 'Built a real-time 1v1 quiz platform with daily challenges and leaderboards — designed for group engagement during events like Ramadan.',
    features: [
        {
            icon: Gamepad2,
            title: 'Problem',
            desc: 'No engaging quiz platform existed for family and group participation during events like Ramadan.',
            color: 'feature-card-blue',
        },
        {
            icon: Package,
            title: 'Architecture & Approach',
            desc: 'Structured 1v1 battle system with daily challenges and leaderboard tracking. Firebase-backed real-time state sync.',
            color: 'feature-card-green',
        },
        {
            icon: Shield,
            title: 'Challenges & Solutions',
            desc: 'Synchronized quiz state and scoring logic across gameplay modes using server-authoritative timestamps for fairness.',
            color: 'feature-card-purple',
        },
    ],
    tech: ['React Native', 'Firebase', 'Real-time Logic', 'Redux'],
    github: 'https://github.com/Czarabrar/clash-of-imaan-quiz-app',
};

// Combined object for PhoneMockup desktop frame — three personal projects as carousel slides
export const personalProjectsPhoneData = {
    title: 'Personal Projects',
    type: 'Open-source & Side Projects',
    intro: 'A collection of high-impact personal apps built to solve real problems — offline-first, real-time, and full-featured.',
    features: [
        {
            icon: Activity,
            title: 'GullyCric',
            desc: 'Offline-first cricket scoring app for local matches. No internet needed — pure local state management.',
            color: 'feature-card-blue',
        },
        {
            icon: Cloud,
            title: 'Atmos',
            desc: 'Unified weather + news app. One app replacing two — async API handling with smooth fallback UX.',
            color: 'feature-card-green',
        },
        {
            icon: Gamepad2,
            title: 'Clash of Imaan',
            desc: '1v1 real-time quiz battles with leaderboards. Server-authoritative scoring for fairness.',
            color: 'feature-card-purple',
        },
    ],
    tech: ['React Native', 'Firebase', 'Offline-first', 'Real-time Logic'],
};


export const whatISolve = [
    {
        title: "Performance & Responsiveness",
        desc: "Optimize slow mobile apps by reducing unnecessary re-renders and improving state handling. Improved load times and UI responsiveness for real-world usage.",
        icon: Zap,
        color: "feature-card-orange"
    },
    {
        title: "Production Issues & Stability",
        desc: "Debug and resolve critical production issues like crashes, ANRs, and inconsistent behavior. Handle network issues and device constraints.",
        icon: Activity,
        color: "feature-card-red"
    },
    {
        title: "Real-Time & Interactive Systems",
        desc: "Build and manage real-time features such as live updates, dynamic flows, and user interactions with smooth state synchronization.",
        icon: Bell,
        color: "feature-card-purple"
    },
    {
        title: "Offline-First & Network Handling",
        desc: "Design applications that work reliably in low/no internet conditions with robust fallback strategies and local data handling.",
        icon: CloudOff,
        color: "feature-card-blue"
    },
    {
        title: "Scalable Feature Architecture",
        desc: "Structure features in a modular way for long-term scalability. Simplify complex workflows into clean, reusable components.",
        icon: Layers,
        color: "feature-card-green"
    },
    {
        title: "User-Centric Product Thinking",
        desc: "Focus on usability, clarity, and engagement. Translate real-world problems into practical, intuitive solutions.",
        icon: Target,
        color: "feature-card-orange"
    },
    {
        title: "AI-Assisted Development",
        desc: "Leverage AI tools with structured prompting to accelerate development and rapid prototyping while maintaining high quality.",
        icon: Cpu,
        color: "feature-card-blue"
    }
];

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
        realtime: {
            category: "Real-Time Systems",
            items: ["Location Tracking", "Push Notifications", "Background Services", "Google Maps SDK"]
        },
        platform: {
            category: "Mobile Platform",
            items: ["Android SDK", "iOS Deployment", "Version Upgrades", "Native Modules"]
        },
        practices: {
            category: "Architecture & Practices",
            items: ["Clean Architecture", "Performance Optimization", "ANR Debugging", "Git / CI/CD"]
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
