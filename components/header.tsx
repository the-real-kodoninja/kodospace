import React, { useState } from 'react';
import Link from 'next/link';
import SchRsl from '../components/schRsl.tsx';
import NotiView from '../components/notiView.tsx';
// import { Lft_MainMnutgl } from '../components/lft_menu.tsx'; 

const MHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inputValue, setInputValue] = useState(''); // State for notification count
  const [displayedText, setDisplayedText] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setInputValue2(event.target.value);
    setDisplayedText(event.target.value);
  };

  // get variables from backend call
  const notiCnt: number = 5; // Notification count
  const notiCvw: string = `${notiCnt} Notifications`;

  const notiClick = () => {
    setIsVisible(!isVisible);
    setInputValue(isVisible ? 'Search Kodospace' : notiCvw); // Conditionally set placeholder
    setInputValue2(''); // Clear input value
    // Clear displayed text (filtering text) only:
    setDisplayedText('');
  };

  const renderSearchText = () => {
    if (displayedText && !isVisible) {
      return (
        <>
          <div className="p10">searching {displayedText}</div>
          <SchRsl />
        </>
      );
    } else {
      return null; // Or return an empty string ''
    }
  };

  // New function to render filtering text when notifications are visible
  const renderFilteringText = () => {
    if (isVisible) {
      const filteringText = inputValue ? `filtering ${inputValue}` : notiCvw; // Use inputValue if available, otherwise "filtering"
      return (
        <div className="p10">{filteringText}</div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <header className="MHeader w100">
        <div>
        <div className="MContainer">
          <span className="MLogo">K</span>
          {/* <Lft_MainMnutgl /> */}
          <div className="MHinner w100">
            <div className="MinCnt">
              <input
                type="search"
                placeholder={inputValue} // Use inputValue for placeholder
                value={inputValue2}
                onChange={handleInputChange}
              />
              <div className="fR">
                <span className="pr-5" style={{margin: '0px 5px 0px 0px'}}>{notiCnt}</span>
                <img
                  src="/img/user-pic_1.0.png"
                  className="glbl_uAHdr dI"
                  onClick={notiClick}
                />
              </div>
              <div className="bdy_cntr_1 hdrDrpdwn">
                {renderFilteringText()} 
                {renderSearchText()}
                {isVisible && <NotiView />}
              </div>
            </div>
          </div>
        </div>
        </div>
      </header>
    </>
  );
};

export default MHeader;