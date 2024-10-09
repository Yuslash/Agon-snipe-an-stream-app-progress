import React, { useState } from 'react';
import FuturisticAlert from './FuturisticAlert';

const AlertApp = () => {
    const [showAlert, setShowAlert] = useState(false);

    const handleShowAlert = () => setShowAlert(true);
    const handleCloseAlert = () => setShowAlert(false);

    return (
        <div className='text-white'>
            <button onClick={handleShowAlert}>Show Futuristic Alert</button>
            {showAlert && (
                <FuturisticAlert
                    message="Welcome to the Future!"
                    onClose={handleCloseAlert}
                />
            )}
        </div>
    );
};

export default AlertApp;
