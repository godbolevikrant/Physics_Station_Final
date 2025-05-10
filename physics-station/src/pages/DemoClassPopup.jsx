import React, { useState, useEffect } from 'react';

const DemoClassPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`popup-overlay ${visible ? 'visible' : ''}`}>
      <div className="popup">
        <h2 className="title">📢 Demo Classes Notice</h2>
        <p className="message">
        "We are pleased to announce that we offer demo classes. Due to limited availability, we encourage you to register promptly. To secure your spot, kindly click the <b>'Join Now'</b> button or contact us directly for further assistance."
        </p>
        <button className="button" onClick={() => setVisible(false)}>
          Got it!
        </button>
      </div>
    </div>
  );
};

export default DemoClassPopup;
