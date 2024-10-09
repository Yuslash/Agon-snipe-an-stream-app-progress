import React from 'react';
import './FuturisticAlert.css';

const FuturisticAlert = ({ message, onClose }) => {
    return (
        <div className="alert-overlay">
            <div className="alert-box">
                <p>{message}</p>
                <button className="alert-close-btn" onClick={onClose}>✖</button>
            </div>
        </div>
    );
};

export default FuturisticAlert;
