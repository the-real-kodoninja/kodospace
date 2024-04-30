import React, { Fragment, useState } from 'react';
import MHeader from '../components/header.tsx'; 
import Lft_menu from '../components/lft_menu.tsx'; 
import PstGlb_Mod from '../components/m/pstGlb_mod.tsx';

const Monetization = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('Win up to $1,000,000.00');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedModuleData, setSelectedModuleData] = useState(null); // State to store selected module data

  const handleClick = (event) => {
    const clickedText = event.target.textContent;
    setSelectedCurrency(clickedText);
    setIsPopupOpen(true);
  
    // Extract the index from the clicked key
    const clickedIndex = parseInt(event.target.getAttribute('data-key'));
  
    // Find the corresponding data based on the extracted key (number)
    const selectedData = monetization.find(item => item.key === clickedIndex);
    setSelectedModuleData(selectedData ? selectedData.value : null); // Correctly set selected module data
  };

  

  const handlePopupClose = () => {
    setIsPopupOpen(false);
    setSelectedModuleData(null); // Reset selected module data on close
  };

  const monetization = [
    { key: 1, value: 'This is for the first module that has been clicked' },
    { key: 2, value: 'This is for the second module that has been clicked' },
    { key: 3, value: 'This is for the third module that has been clicked' },
    { key: 4, value: 'This is for the fourth module that has been clicked' },
  ];


    return (
        <Fragment>
            <MHeader />
            <main>
                <Lft_menu />
                <div className="cntr_wrp dI pA p10">
                    <div className="monIntro_Wpr">
                        <div className="monIntro_Inr">
                            <div key={1} data-key={1} onClick={handleClick}>Win up to $1,000,000.00</div>
                            <div key={2} data-key={2} onClick={handleClick}>Ads revenue sharing</div>
                            <div key={3} data-key={3} onClick={handleClick}>Brand advertisment & more</div>
                            <div key={4} data-key={4} onClick={handleClick}>Subscriptions</div>
                        </div>
                    </div>
                    {isPopupOpen && ( // Conditionally render popup content
                        <div className="monIntro_Full popup">
                            <div className="monIntro_Full_Hdr">
                                <h1>{selectedCurrency}</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={handlePopupClose}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                            </div> 
                            <div className="monIntro_Full_Bdy">
                                {selectedModuleData && <p>{selectedModuleData}</p>}
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <PstGlb_Mod />
        </Fragment>
    );
};

export default Monetization;