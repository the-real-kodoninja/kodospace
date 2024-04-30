import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Draggable from 'react-draggable';
import MHeader from '../../components/header.tsx'; 
import Lft_menu from '../../components/lft_menu.tsx'; 
import axios from 'axios';
import timeAgo from "../../addons/timeAgo.tsx";
import UsrPge_fltr from '../../components/u/usrPge_fltr.tsx';
import PstGlb_Mod from '../../components/m/pstGlb_mod.tsx';
import ChatMsg_Mod from '../../components/media/chatMsg.tsx';

//user modules
import Donate_mod from '../../components/u/donate_mod.jsx';

export default function UserPage() {
    const router = useRouter();
    const { username } = router.query;
    const [showDonatePopup, setShowDonatePopup] = useState(false);
    const toggleDonatePopup = () => setShowDonatePopup(!showDonatePopup);

	const [showUpdateIMGS, setUpdateIMGS] = useState(false);
    const toggleUsrIMGS = () => setUpdateIMGS(!showUpdateIMGS);

    const [isInfoVisible, setIsInfoVisible] = useState(true);
    const [isUserImgLarge, setIsUserImgLarge] = useState(false);
    const [isBannerLarge, setIsBannerLarge] = useState(false);
    const [module, setModule] = useState('');
	const [userImgSrc, setUserImgSrc] = useState('img/IMG_0029_Original.jpg'); // State for user image source
    const [bannerImgSrc, setBannerImgSrc] = useState('img/bnr_06e8b9506b77b155cca25953d7833740.png'); // State for banner image source
    
    const toggleInfoVisibility = () => setIsInfoVisible(!isInfoVisible);

    
	const clxBtn = (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
		</svg>
	);

	const handleUserImgChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setUserImgSrc(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleBannerImgChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setBannerImgSrc(URL.createObjectURL(event.target.files[0]));
        }
    };
	
 	return (
		<Fragment>
			<MHeader/>
			<main>
				<Lft_menu/>
				<div className="usrPgeHdr">
				<div className="usrPgeHdr_Info">
					{isInfoVisible && (
						<div className="usrPge_HdrCnt" onClick={() => setIsUserImgLarge(true)}>
							<div>
                                <img className="usrPgeHdr_usrImg" src={userImgSrc}/>
                                {showUpdateIMGS && (
                                <div className="usrPgeHdr_usrImgEdit pA" onClick={() => document.getElementById('userImageInput').click()}>
                                    <input type="file" id="userImageInput" style={{display: 'none'}} onChange={handleUserImgChange} accept="image/*"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 usrPgeHdr_usrImgEdit_SVG">
                                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                </div>
                                )}
                            </div>
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
										<img src={userImgSrc}/>
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
											<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cP" onClick={toggleUsrIMGS}>
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
					<Draggable axis="y" bounds="parent">
						<img className="usrPgeBnrHdr_usrImg" src={bannerImgSrc}/>
					</Draggable>
					{showUpdateIMGS && (
						<div className="usrPgeBnr_Edit pA" onClick={() => document.getElementById('bannerImageInput').click()}>
							<input type="file" id="bannerImageInput" style={{display: 'none'}} onChange={handleBannerImgChange} accept="image/*"/>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 usrPgeHdr_usrImgEdit_SVG">
									<path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
								</svg>
                            </div>
                            )}
						{isBannerLarge && (
						<div className="bannerLargeBackdrop" onClick={() => setIsBannerLarge(false)}>
							<div className="bannerLargeView" onClick={e => e.stopPropagation()}>
								<button className="bannerCloseBtn" onClick={() => setIsBannerLarge(false)}>
									{clxBtn}
								</button>
								<img src={bannerImgSrc}/>
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
						<Donate_mod toggleDonatePopup={toggleDonatePopup}/>
					)}
				</div>
			</main>
			<ChatMsg_Mod/>
			<PstGlb_Mod/>
		</Fragment>
 	);
 };