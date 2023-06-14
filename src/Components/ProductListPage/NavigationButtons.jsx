import React from "react";
import "./NavigationButtons.css"

const NavigationButtons = ({ onPrevious, onNext }) => {
  return (
    <div className="navigation-buttons">
      <button className="previous-button" onClick={onPrevious}>
        <i className="fas fa-arrow-left"></i> Previous
      </button>
      <button className="next-button" onClick={onNext}>
        Next <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default NavigationButtons;
