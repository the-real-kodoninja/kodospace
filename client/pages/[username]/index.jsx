import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import MHeader from '../../components/header.tsx'; 
import Lft_menu from '../../components/lft_menu.tsx'; 
import timeAgo from "../../addons/timeAgo.tsx";
import UsrPge_fltr from '../../components/u/usrPge_fltr.tsx';
import PstGlb_Mod from '../../components/m/pstGlb_mod.tsx';

export default function UserPage() {
    const router = useRouter();
    const { username } = router.query;
    const [showDonatePopup, setShowDonatePopup] = useState(false);
    const [selectedAmount, setSelectedAmount] = useState('');
    const [donationType, setDonationType] = useState('single');
    const [isInfoVisible, setIsInfoVisible] = useState(true);
    const [isUserImgLarge, setIsUserImgLarge] = useState(false);
    const [isBannerLarge, setIsBannerLarge] = useState(false);
    const [module, setModule] = useState('');

    const toggleDonatePopup = () => setShowDonatePopup(!showDonatePopup);
    const handleAmountSelect = (amount) => setSelectedAmount(formatNumberWithCommas(amount));
    const toggleInfoVisibility = () => setIsInfoVisible(!isInfoVisible);

    const formatNumberWithCommas = (value) => {
        const numericValue = value.replace(/[^0-9.]/g, '');
        const parts = numericValue.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    };

	const clxBtn = (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
		</svg>
	);
	
 	return (
		<Fragment>
			<MHeader/>
			<main>
				<Lft_menu/>
				<div className="usrPgeHdr">
				<div className="usrPgeHdr_Info">
					{isInfoVisible && (
						<div className="usrPge_HdrCnt" onClick={() => setIsUserImgLarge(true)}>
							<img className="usrPgeHdr_usrImg" src="img/IMG_0029_Original.jpg"/>
							<div className="usrPgeHdr_usrStat dI">
								<div>{username}</div>
								<div>{timeAgo(new Date('2024-04-07T01:55:00'))}</div>
								<div>3 followers</div>
							</div>
							{isUserImgLarge && (
								<div className="bannerLargeBackdrop" onClick={() => setIsUserImgLarge(false)}>
									<div className="bannerLargeView" onClick={e => e.stopPropagation()}>
										<button className="bannerCloseBtn" onClick={() => setIsUserImgLarge(false)}>
											{clxBtn}
										</button>
										<img src="img/IMG_0029_Original.jpg"/>
									</div>
								</div>
							)}
						</div>
                        )}
                        <div className="fR">
							<div className="usrPgeHdr_btns">
								{isInfoVisible && (
									<div className="dI">
										<button>Follow</button>
										<button onClick={toggleDonatePopup}>Donate </button>
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
											</svg>
										</span>
									</div>
								)}
								<span>
    								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isInfoVisible ? '' : 'svg-active'}`} onClick={toggleInfoVisibility}>
        								<path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
										<path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
									</svg>
								</span>
							</div>
						</div>
					</div>
					
					<div className="usrPgeBnr" onClick=	{() => setIsBannerLarge(true)}>
						<img src="img/bnr_06e8b9506b77b155cca25953d7833740.png"/>
						{isBannerLarge && (
						<div className="bannerLargeBackdrop" onClick={() => setIsBannerLarge(false)}>
							<div className="bannerLargeView" onClick={e => e.stopPropagation()}>
								<button className="bannerCloseBtn" onClick={() => setIsBannerLarge(false)}>
									{clxBtn}
								</button>
								<img src="img/bnr_06e8b9506b77b155cca25953d7833740.png"/>
							</div>
						</div>
						)}
					</div>
					<div style={{ height: isInfoVisible ? '67px' : '245px' }}></div>
					<UsrPge_fltr/>
					<div>
					{module === 'likes' && <LikesComponent />}
					{module === 'followers' && <FollowersComponent />}
					{/* Add more conditions for other modules */}
					</div>
					{showDonatePopup && (
					<div className="donatePopup">
						<form className="donateForm">
							<h2>Donate</h2>
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
								<button onClick={toggleDonatePopup}>Close</button>
							</div>
						</form>
					</div>
					)}
				</div>
			</main>
			<PstGlb_Mod/>
		</Fragment>
 	);
 };