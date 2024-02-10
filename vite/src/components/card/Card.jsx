import React, { useState} from 'react';

export default function Card({imageSrc, title, desc, price }) {
    {/* When user clicks on a card, a desc pops up below */}
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    {/* Makes image bigger when clicked on*/}
    const [isClicked, setIsClicked] = useState(false);

    const toggleSize = () => {
      setIsClicked(!isClicked);
    }

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }
    return (
      <div className={`card ${isClicked ? 'clicked' : ''}`} style={{ margin: '10px', height: '250px' }} onClick={togglePopup}>
        <h3 className={isClicked ? 'bigger' : ''} style={{ textAlign: 'center', marginBottom: '10px'}}>{title}</h3>
        <img src={imageSrc} alt={title} onClick={toggleSize} className={`card-image ${isClicked ? 'bigger' : ''}`} />
      
        {isPopupOpen && (
            <div className="popup">
              <div style={{ height: '10px' }}></div>
                <p>{desc}</p>
                <p>${price} USD</p>
            </div>
        
        )}
      </div>
    );
  }
