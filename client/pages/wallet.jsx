import React, { Fragment, useState } from 'react';
import MHeader from '../components/header.tsx'; 
import Lft_menu from '../components/lft_menu.tsx'; 
import PstGlb_Mod from '../components/m/pstGlb_mod.tsx';
import ChatMsg_Mod from '../components/media/chatMsg.tsx';

const KodoWallet = () => {
    const [isHovered, setIsHovered] = useState(false);

    const currencies = [
        { value: 'USD', label: 'US Dollar', rate: 1 }, // Assuming USD as base
        { value: 'EUR', label: 'Euro', rate: 0.85 },
        { value: 'JPY', label: 'Japanese Yen', rate: 110 },
        { value: 'GBP', label: 'British Pound', rate: 0.75 },
        { value: 'CNY', label: 'Chinese Yuan', rate: 6.45 },
        // Add more currencies and their conversion rates as needed
    ];

    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0].value);
    const [convertedAmount, setConvertedAmount] = useState(5); // Initial amount in the selected currency (5 * baseKodoTokens)
    const [baseKodoTokens, setBaseKodoTokens] = useState(100); // Base amount of Kodo tokens (100 = $5)
    const [inputKodoTokens, setInputKodoTokens] = useState(0); // User-entered Kodo tokens amount

    const handleCurrencyChange = (currencies, selectedCurrency, inputKodoTokens, baseKodoTokens, event) => {
        const newCurrency = event.target.value;
        setSelectedCurrency(newCurrency);
    
        // Find the conversion rate for the selected currency
        const currency = currencies.find(c => c.value === newCurrency);
        if (currency) {
            const newAmount = (parseFloat(inputKodoTokens) * currency.rate * parseFloat(baseKodoTokens)).toFixed(2);
            setConvertedAmount(newAmount);
        }

        // Check if the node is a child of the parent node before removing it
        if (event.target.parentNode) {
            event.target.parentNode.removeChild(event.target);
        }
    };
    
    const handleKodoTokensChange = (currencies, selectedCurrency, baseKodoTokens, event) => {
        const newKodoTokens = event.target.value;
        setInputKodoTokens(newKodoTokens);
    
        // Find the conversion rate for the selected currency
        const currency = currencies.find(c => c.value === selectedCurrency);
        if (currency) {
            const newAmount = (parseFloat(newKodoTokens) * currency.rate * parseFloat(baseKodoTokens)).toFixed(2);
            setConvertedAmount(newAmount);
        }
    
        // Check if the node is a child of the parent node before removing it
        if (event.target.parentNode) {
            event.target.parentNode.removeChild(event.target);
        }
    };
    const CurrencySelect = ({ selectedCurrency, onCurrencyChange }) => {
        
        return (
            <select value={selectedCurrency} onChange={onCurrencyChange} style={{ backgroundColor: 'transparent' }}>
                {currencies.map((currency) => (
                    <option key={currency.value} value={currency.value}>
                        {currency.label}
                    </option>
                ))}
            </select>
        );
    };
    

    return (
        <Fragment>
            <MHeader />
            <main>
                <Lft_menu />
                <div className="cntr_wrp p10">
                    <div className="kWallet_Wpr glbl-PULL">
                        <div className="kWallet_Hdr">
                            <h1>Kodo Wallet</h1>
                        </div>
                        <div className="kWallet_Bdy">
                            <div className="kWallet_BdyItm">
                                <div className="dI">
                                    <span>Kodotokens</span>
                                </div>
                                <div className="fR">
                                    <span className="totalKodotokens">5,050</span>
                                </div>
                            </div>
                            <div className="kWallet_BdyItm" style={{ backgroundColor: '#2f3f2f' }}>
                                <div className="col1 dI">
                                    <span>
                                    <input
                                        type="number"
                                        placeholder="token amount"
                                        className="kWallet_Inp"
                                        onChange={(event) => handleKodoTokensChange(currencies, selectedCurrency, baseKodoTokens, event)}
                                        style={{ backgroundColor: 'transparent' }}
                                    />
                                    </span>
                                </div>
                                <div className="col3 fR">
                                    <span className="currencyConvert">{convertedAmount}</span>
                                </div>
                            </div>
                            <div className="kWallet_BdyItm cvtBtn" style={{ backgroundColor: '#2f3f2f', }}>
                                <button>Convert kodotokens to your currency</button>
                                <span className="fR">
                                <CurrencySelect
                                    selectedCurrency={selectedCurrency}
                                    onCurrencyChange={(event) => handleCurrencyChange(currencies, selectedCurrency, inputKodoTokens, baseKodoTokens, event)}
                                />
                                </span>
                            </div>
                            <div className="kWallet_BdyItm">
                                <div className="dI">
                                    <span>$600.00</span>
                                </div>
                                <div className="fR">
                                    <span>Transfer ready</span>
                                </div>
                            </div>
                            <div className="kWallet_BdyItm">
                                <div style={{ textAlign: 'center' }}>
                                    <span>Secure transfer options below</span>
                                </div>
                            </div>
                            <button
                                className="kWallet_BdyItm" 
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={{
                                    // Add your base styles here
                                    background: 'linear-gradient(to right, #a960ee, #ff333d, #90e0ff, #ffcb57)',
                                    padding: '10px 20px',
                                    border: 'none',
                                    color: '#fff',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    borderRadius: '15px',
                                    opacity: '0.7',
                                    width: '100%',
                                    padding: '20px',
                                    // Add the hover style
                                    ...(isHovered && {
                                        background: 'linear-gradient(to right, #ff333d, #a960ee, #ffcb57, #90e0ff)',
                                        opacity: '1',
                                    }),
                                }}
                                >
                                <div style={{ textAlign: 'center', color: '#fff', fontWeight: '700', fontSize: '20px' }}>
                                    <span>STRIPE</span>
                                </div>
                            </button>
                            <div className="kWallet_BdyItm">
                            </div>
                            <button 
                                className="kWallet_BdyItm" 
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                style={{ 
                                    background: '#fff', 
                                    borderRadius: '15px', 
                                    opacity: '0.7',
                                    padding: '20px',
                                    width: '100%', 
                                    // Add the hover style
                                    ...(isHovered && {
                                        opacity: '1',
                                    }),
                                }}>
                                <div style={{ textAlign: 'center', color: '#fff', margin: 'opx auto' }}>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/800px-PayPal.svg.png" style={{ height: '30px', width: 'auto' }}/>
                                 </div>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
			<ChatMsg_Mod/>
            <PstGlb_Mod />
        </Fragment>
    );
};

export default KodoWallet;
