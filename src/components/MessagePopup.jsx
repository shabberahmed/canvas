import React from 'react';

const MessagePopup = ({ isOpen, message, onClose }) => {
  return (
    <div className={`message-popup ${isOpen ? 'open' : ''}`}>
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MessagePopup;
