import React from 'react';
import DeviceFrame from './DeviceFrame';
import BottomTabNav from './BottomTabNav';

export default function AppShell({ children, variant = 'mobile', activeTab, setActiveTab }) {
    const isMobile = variant === 'mobile';

    return (
        <DeviceFrame variant={variant}>
            {/* Scrollable Content Area */}
            <div className="device-content-scroller">
                {children}
            </div>

            {/* Bottom Nav Area */}
            <BottomTabNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </DeviceFrame>
    );
}
