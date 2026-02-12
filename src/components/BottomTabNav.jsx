import React from 'react';
import { Home, Briefcase, Target, FileText, Mail } from 'lucide-react';

export default function BottomTabNav({ activeTab, setActiveTab }) {
    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'ai', label: 'AI', icon: Target },
        { id: 'projects', label: 'Projects', icon: Briefcase },
        { id: 'resume', label: 'Resume', icon: FileText },
        { id: 'contact', label: 'Contact', icon: Mail },
    ];

    return (
        <div className="device-bottom-nav">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;

                return (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`nav-item-btn ${isActive ? 'active' : ''}`}
                    >
                        <div className="nav-icon-wrapper">
                            <Icon
                                size={22}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                        </div>
                        <span className="nav-label">{item.label}</span>
                    </button>
                );
            })}
        </div>
    );
}
