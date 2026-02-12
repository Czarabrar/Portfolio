import React from 'react';

const icons = [
    // Git
    {
        id: 'git',
        path: <path d="M15.6 2.6a2 2 0 0 0-2.8 0L9 6.4a2 2 0 1 1-2.6 2.6L2.6 12.8a2 2 0 0 0 0 2.8l5.2 5.2a2 2 0 0 0 2.8 0l3.8-3.8a2 2 0 1 1 2.6-2.6l3.8-3.8a2 2 0 0 0 0-2.8l-5.2-5.2z M12 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /> // Simplified generic
    },
    // React Native
    {
        id: 'react',
        path: <g><circle cx="12" cy="12" r="2" /><path d="M12 21.36c-1.57 0-3.13-.57-4.24-1.69C5.51 17.42 5.51 14.28 7.76 12 5.51 9.72 5.51 6.58 7.76 4.33c2.25-2.25 5.9-2.25 8.14 0 2.25 2.25 2.25 5.39 0 7.67 2.25 2.28 2.25 5.42 0 7.67-2.25 2.25-5.9 2.25-8.14 0" stroke="currentColor" fill="none" strokeWidth="1.5" /><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" stroke="currentColor" fill="none" strokeWidth="1.5" /><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" stroke="currentColor" fill="none" strokeWidth="1.5" /></g>
    },
    // JavaScript (ES6+)
    {
        id: 'js',
        path: <path d="M3 3h18v18H3V3m14.5 13.5v-7h-1.5v5h-2v-1.5h1.5v-1h-2.5v3.5a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1m-5 0v-2.5a1 1 0 0 0-1-1h-2v4.5h1.5v-1h-1.5v-1h2v2h-3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1h-1.5z" /> // Abstracted JS box
    },
    // TypeScript
    {
        id: 'ts',
        path: <path d="M2 3h20v18H2V3m16 9v4.5h-1.5v-1h-1v1h-1.5v-5.5h4m-3 1v2.5h1v-2.5h-1m-3-1v5.5H8.5V9H7V7.5h5V9h-1.5" /> // Abstracted TS
    },
    // Redux
    {
        id: 'redux',
        path: <path d="M12 2L9 7l3 5 3-5-3-5m0 12l-3 5h6l-3-5m-5-3l-5 3v6l5 3 3-5-3-7m10 0l-3 7 3 5 5-3v-6l-5-3" stroke="currentColor" fill="none" strokeWidth="1.5" />
    },
    // Firebase
    {
        id: 'firebase',
        path: <path d="M4.63 10.5l-1.07-3.29a.53.53 0 0 1 .84-.57l2.83 2.8L4.63 10.5zm.9 1.54l-3.9 3.63a.51.51 0 0 1-.78-.54l1.6-4.91 3.08 1.82zm2.18-5.38a.53.53 0 0 1 .9 0l6.2 11.4-8.8-4.93 1.7-6.47zm7.66 7.84l1.32-.76-2.52-4.66-2.28 4.2 3.48 1.22z" />
    },
    // Android
    {
        id: 'android',
        path: <path d="M4.53 14h14.94c.3 0 .53-.23.53-.53V8.12c0-.3-.23-.53-.53-.53H4.53c-.3 0-.53.23-.53.53v5.35c0 .3.23.53.53.53zM5.33 3.47L7.04 6.4c.83-.34 1.75-.54 2.76-.58l-.01-.01.01.01c.72 0 1.41.09 2.05.25l1.71-2.96a.54.54 0 0 1 .74-.21.53.53 0 0 1 .2.73l-1.8 3.12c1.7.92 2.9 2.63 3.08 4.67H4.3c.18-2.04 1.38-3.75 3.08-4.67L5.58 3.67a.53.53 0 0 1 .2-.73.54.54 0 0 1 .74.21h-.01zM7.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm11 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    },
    // iOS (Apple)
    {
        id: 'ios',
        path: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.89 13.9c-.31.81-1.04 1.6-1.86 1.6-.54 0-.82-.32-1.57-.32-.76 0-1 .31-1.54.31-.88 0-1.63-.82-2.18-1.93-1.12-2.25-.2-5.46 2.08-5.58.74-.04 1.27.46 1.7.46.41 0 1.13-.57 1.93-.49.34.01 1.27.13 1.86.95-.98.57-1.63 2.04-1.3 3.25.04.1.08.2.14.28.18.25.43.43.72.54-.15.38-.26.7-.42.93zm-1.84-6.88c.38-.45.64-1.1.56-1.74-.58.02-1.28.38-1.68.84-.35.4-.62 1.04-.55 1.67.65.05 1.26-.3 1.67-.77z" />
    },
    // REST API
    {
        id: 'api',
        path: <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-1.07 3.97-2.9 5.4z" />
    },
    // Google Maps
    {
        id: 'maps',
        path: <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    },
    // Notifications
    {
        id: 'notify',
        path: <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
    },
    // CI/CD
    {
        id: 'cicd',
        path: <path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6a5.87 5.87 0 0 1-2.8-.7l-1.46 1.46A7.93 7.93 0 0 0 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46A7.93 7.93 0 0 0 12 4C7.58 4 4 7.58 4 12H1l4 4 4-4H6z" />
    }
];

export default function TechStackMarquee() {
    return (
        <div className="tech-marquee-wrapper" aria-hidden="true">
            <div className="tech-marquee-track">
                {/* First Set */}
                {icons.map((icon, index) => (
                    <div key={`original-${icon.id}`} className="tech-icon-item">
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tech-icon-svg">
                            {icon.path}
                        </svg>
                    </div>
                ))}

                {/* Duplicate Set for Loop */}
                {icons.map((icon, index) => (
                    <div key={`dup-${icon.id}`} className="tech-icon-item">
                        <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tech-icon-svg">
                            {icon.path}
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
}
