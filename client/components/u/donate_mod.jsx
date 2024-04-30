import { Fragment, useState, useEffect } from 'react';


const Donate_mod = ({ toggleDonatePopup }) => {
    const [selectedAmount, setSelectedAmount] = useState('1');
    const [donationType, setDonationType] = useState('once')
    const handleAmountSelect = (amount) => setSelectedAmount(formatNumberWithCommas(amount));

    const formatNumberWithCommas = (value) => {
        const numericValue = value.replace(/[^0-9.]/g, '');
        const parts = numericValue.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    };


    return (
        <Fragment>
            <div className="modalBackdrop">
                <form className="donateForm">
                    <div ClassName="donateModalHdr" style={{ margin: '0px 0px 10px 0px' }}>
                        <span>Donate</span>
                        <span className="fR">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={toggleDonatePopup} style={{ 
                                width: '20px',
                                height: '20px',
                                margin: '0px 10px 0px 0px',
                                display: 'inline-block'
                             }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </span>
                    </div>
                    <div className="radio-group">
                        <div 
                            className={`radio-option ${donationType === 'once' ? 'selected' : ''}`} 
                            onClick={() => setDonationType('once')}
                        >
                            Single Payment
                        </div>
                        <div 
                            className={`radio-option ${donationType === 'monthly' ? 'selected' : ''}`} 
                            onClick={() => setDonationType('monthly')}
                        >
                            Monthly
                        </div>
                        </div>
                    <div className="amount-options">
                        <button 
                            type="button" 
                            className={`amount-option ${selectedAmount === '1' ? 'selected' : ''}`} 
                            onClick={() => handleAmountSelect('1')}
                        >
                            $1
                        </button>
                        <button 
                            type="button" 
                            className={`amount-option ${selectedAmount === '5' ? 'selected' : ''}`} 
                            onClick={() => handleAmountSelect('5')}
                        >
                            $5
                        </button>
                        <button 
                            type="button" 
                            className={`amount-option ${selectedAmount === '10' ? 'selected' : ''}`} 
                            onClick={() => handleAmountSelect('10')}
                        >
                            $10
                        </button>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Custom amount" 
                            className={`amount-option ${selectedAmount !== '1' && selectedAmount !== '5' && selectedAmount !== '10' ? 'selected' : ''}`} 
                            onChange={(e) => handleAmountSelect(e.target.value)}
                            value={selectedAmount === '1' || selectedAmount === '5' || selectedAmount === '10' ? '' : selectedAmount}
                        />
                    </div>
                    <div>
                        <input type="text" placeholder="Your name"/>
                        <textarea placeholder="A message (Optional)"></textarea>
                    </div>
                    <div className="donateSbmtBtn">
                        <button type="submit">Donate {selectedAmount && `$${selectedAmount+' '+donationType}`}</button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};

export default Donate_mod;