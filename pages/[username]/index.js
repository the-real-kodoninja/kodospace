import { Fragment,useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import MHeader from '../../components/header.tsx'; 
import Lft_menu from '../../components/lft_menu.tsx'; 
import MFooter from '../../components/footer.tsx'; 
import axios from 'axios';
import timeAgo from "../../addons/timeAgo.tsx";
// user modules
import UsrPge_fltr from '../../components/u/usrPge_fltr.tsx';
// post global modules
import PstGlb_Mod from '../../components/m/pstGlb_mod.tsx';

 
export default function UserPage() {
	const router = useRouter();
  	const { username } = router.query;

	// State to control the visibility of the donation popup
	const [showDonatePopup, setShowDonatePopup] = useState(false);

	// Function to toggle the donation popup visibility
	const toggleDonatePopup = () => {
	  setShowDonatePopup(!showDonatePopup);
	};
	
	const handleClick = async (filter) => {
		// Implement your logic to handle filter selection (e.g., update state, fetch data)
		setSelectedFilter(filter);
		setIsLoading(true);
		// ... fetch data based on filter (replace with your logic)
		const fetchedContent = await UsrPge_Post(); // Call UsrPge_Post for now (replace with logic)
		setContent(fetchedContent);
		setIsLoading(false);
	  };

	const [selectedAmount, setSelectedAmount] = useState('');

	const handleAmountSelect = (amount) => {
		const formattedAmount = formatNumberWithCommas(amount);
		setSelectedAmount(formattedAmount);
	};

	const [donationType, setDonationType] = useState('single'); // 'single' or 'monthly'

	const formatNumberWithCommas = (value) => {
		// Remove all non-numeric characters except the dot for decimal point
		const numericValue = value.replace(/[^0-9.]/g, '');
		// Format the number with commas
		const parts = numericValue.split('.');
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		return parts.join('.');
	};


 	return (
		<Fragment>
			<MHeader/>
			<main>
				<Lft_menu/>
				<div className="usrPgeHdr">
					<div className="usrPgeHdr_Info pA">
						<div>
							<img className="usrPgeHdr_usrImg" src="img/IMG_0029_Original.jpg"/>
							<div className="usrPgeHdr_usrStat dI">
								<div>{username}</div>
								<div>{timeAgo(new Date('2024-04-07T01:55:00'))}</div>
								<div>3 followers</div>
							</div>
						</div>
						<div className="fR">
							<div className="usrPgeHdr_btns">
								<button>Follow</button>
								<button onClick={toggleDonatePopup}>Donate </button>
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
										<path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
									</svg>
								</span>
							</div>
						</div>
					</div>
					<div className="usrPgeBnr">
						<img src="img/bnr_06e8b9506b77b155cca25953d7833740.png"/>
					</div>
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
			<MFooter/>
		</Fragment>
 	);
 };