import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ImageUpload from '../ImageUpload';


function Popup({ onFileUpload }) {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={openPopup} className='black-button'>Upload Product Image</button>
      {showPopup && (
        ReactDOM.createPortal(
          <div className="popup-overlay">
            <div className="popup-content">
              <button className="close-button" onClick={closePopup}><i className="bi bi-x-lg"></i></button>
              <ImageUpload onFileUpload={onFileUpload} />
            </div>
          </div>,
          document.body
        )
      )}
    </div>
  );
}

export default Popup;







