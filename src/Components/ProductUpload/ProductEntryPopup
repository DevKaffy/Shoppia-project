import React, { useState } from 'react';
import ProductEntryForm from '../ProductEntryForm';

const Popup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup} className='black-button'>Add a Product</button>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>
              X
            </button>
            <ProductEntryForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
