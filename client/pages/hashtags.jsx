import React, { Fragment, useState } from 'react'
import MHeader from '../components/header.tsx';
import Tooltip from "../components/tooltip.jsx";
import Lft_menu from '../components/lft_menu.tsx'; 
import axios from 'axios';
// post global modules
import PstGlb_Mod from '../components/m/pstGlb_mod.tsx';
import ChatMsg_Mod from '../components/media/chatMsg.tsx';

export default function ExploreApp () {

	const [visibleCount, setVisibleCount] = useState(10); // State to manage the number of visible playlists

    // Function to handle "View More" button click
    const handleViewMore = () => {
        setVisibleCount((prevVisibleCount) => prevVisibleCount + 10);
    };

    const filterItems = [
        'Javascript',
        'Gaming',
        'RVs',
        'Music',
        'C++',
        'Linux',
        'Fast chess',
        'Camping',
        'Live',
        'Mixes',
        'Lo-Fi',
        'AI',
        'Computer programmer',
        'Computer engineering',
        'code',
      ];

      return (
        <Fragment>
            <MHeader/>
            <main>
                <Lft_menu/>
                <div className="cntr_wrp p10">
                    <div className="hashTag_View-Wpr glbl-PULL">
                        <ul className="hashTag_View">
                            {Object.entries(filterItems).slice(0, visibleCount).map(([key, value]) => (
                                <li key={key}>
                                    {'#'+value.replace(/\s/g, '')}
                                    <span className="fR">
                                        <span style={{ margin: '0px 10px 0px 0px' }}>
										<Tooltip text={'add #'+value.replace(/\s/g, '')+' to your kodospace'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
											</Tooltip>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                            </svg>
                                        </span>
                                    </span>
                                </li>
                            ))}
                        </ul>
						{visibleCount < filterItems.length && (
                            <button onClick={handleViewMore} className="viewMoreBtn">View More</button>
                        )}
                    </div>	
                </div>
            </main>
			<ChatMsg_Mod/>
            <PstGlb_Mod/>
        </Fragment>
    );
}
