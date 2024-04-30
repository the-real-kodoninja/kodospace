import React, { Fragment, useState, useEffect } from 'react';
import timeAgo from "../addons/timeAgo.tsx";
import MHeader from '../components/header.tsx'; 
import Lft_menu from '../components/lft_menu.tsx'; 
import axios from 'axios';
import ChatMsg_Mod from '../components/media/chatMsg.tsx';
import PstGlb_Mod from '../components/m/pstGlb_mod.tsx';

const Playlist = () => {
    const calculateMargin = (index) => index * 30; // Function to calculate margin

    let playLstCnt: number = 10; // Total number of playlists
    let vidCnt: number = 4;
    let vidExt: number = 4;

    const [visibleCount, setVisibleCount] = useState(5); // State to manage the number of visible playlists
	const [visibleCount2, setVisibleCount2] = useState(5); // State to manage the number of visible playlists

    // Function to handle "View More" button click
    const handleViewMore = () => {
        setVisibleCount((prevVisibleCount) => prevVisibleCount + 5);
    };

	const handleViewMore2 = () => {
        setVisibleCount2((prevVisibleCount2) => prevVisibleCount2 + 5);
    };

    return (
        <Fragment>
            <MHeader />
            <main>
                <Lft_menu />
                <div className="cntr_wrp p10">
                    <div className="glbl-PULL">
                        <div className="Playlist_ViewAll">
                            <h1>Featured Playlist</h1>
                            {Array.from({ length: playLstCnt }).slice(0, visibleCount).map((_, index) => (
                                <div className="usrPlay_View dB" key={index}>
                                    <ul>
                                        <li>
                                            <div className="usrPlay_VidVw">
                                                {Array.from({ length: vidCnt }).map((_, i) => (
                                                    <div
                                                        key={`${index}-${i}`}
                                                        className="usrPlay_VidThmb"
                                                        style={{ margin: `0px 0px 0px ${calculateMargin(i)}px` }}
                                                    >
                                                        <img src="img/no_imgLnk.svg" alt="Thumbnail"/>
                                                        {i === vidExt - 1 && <div className="usrPlay_CntMre"><span>{'+ '+vidExt}</span></div>}
                                                    </div>
                                                ))}
                                            </div>
                                            <div style={{ margin: '20px 0px 0px 318px', width: '350px' }}>
                                                <div>How to be an airbender</div>
                                                <div>
                                                    <span>{timeAgo(new Date('2024-04-06T10:00:00'))}</span>
                                                    <span className="fR">4:04:00</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                            {visibleCount < playLstCnt && (
                                <button onClick={handleViewMore} className="viewMoreBtn">View More</button>
                            )}
                        </div>
						<div className="Playlist_ViewAll">
                            <h1>My Playlist</h1>
                            {Array.from({ length: playLstCnt }).slice(0, visibleCount2).map((_, index) => (
                                <div className="usrPlay_View dB" key={index}>
                                    <ul>
                                        <li>
                                            <div className="usrPlay_VidVw">
                                                {Array.from({ length: vidCnt }).map((_, i) => (
                                                    <div
                                                        key={`${index}-${i}`}
                                                        className="usrPlay_VidThmb"
                                                        style={{ margin: `0px 0px 0px ${calculateMargin(i)}px` }}
                                                    >
                                                        <img src="img/no_imgLnk.svg" alt="Thumbnail"/>
                                                        {i === vidExt - 1 && <div className="usrPlay_CntMre"><span>{'+ '+vidExt}</span></div>}
                                                    </div>
                                                ))}
                                            </div>
                                            <div style={{ margin: '20px 0px 0px 318px', width: '350px' }}>
                                                <div>How to be an airbender</div>
                                                <div>
                                                    <span>{timeAgo(new Date('2024-04-06T10:00:00'))}</span>
                                                    <span className="fR">4:04:00</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                            {visibleCount2 < playLstCnt && (
                                <button onClick={handleViewMore2} className="viewMoreBtn">View More</button>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <ChatMsg_Mod />
            <PstGlb_Mod />
        </Fragment>
    );
};

export default Playlist;
