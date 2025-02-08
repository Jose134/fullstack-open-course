import React from 'react';
import './Notification.css';

const Notification = ({ message, type }) => {
    if (message === null) {
        return null;
    }

    const className = 'notification ' + (type === 'error' ? 'error' : 'success');
    console.log('className:', className);
    return (
        <div className={className}>
            {message}
        </div>
    );
};

export default Notification;