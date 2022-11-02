import React from 'react';
import './loadingOverlay.scss'

export default function LoadingOverlay(props) {
    return (
        <div className="loading-overlay">
            <div className="loader"></div>
        </div>
    );
}

