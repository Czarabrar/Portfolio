import React from 'react';

export default function DeviceFrame({ children, variant = 'mobile' }) {
    const isMobile = variant === 'mobile';

    return (
        <div className="device-immersive-shell">
            <div className={`physical-device-frame ${variant}`}>
                {/* Side Buttons (Physical) */}
                <div className="device-side-silent" />
                <div className="device-side-vol-up" />
                <div className="device-side-vol-down" />
                <div className="device-side-power" />

                <div className="device-screen-wrapper">
                    {/* Notch / Dynamic Island */}
                    {isMobile && <div className="device-notch" />}

                    {/* Content Area */}
                    {children}

                    {/* Bottom Home Indicator */}
                    <div className="device-home-indicator" />
                </div>
            </div>
        </div>
    );
}
