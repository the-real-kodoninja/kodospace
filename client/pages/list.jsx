import React, { Fragment, useState } from 'react'
import MHeader from '../components/header.tsx';
import Tooltip from "../components/tooltip.jsx";
import Lft_menu from '../components/lft_menu.tsx'; 
import axios from 'axios';
// post global modules
import PstGlb_Mod from '../components/m/pstGlb_mod.tsx';
import ChatMsg_Mod from '../components/media/chatMsg.tsx';

export default function ListApp () {
	const [othListCount, setothListCount] = useState(5); // State to manage the number of visible playlists
	const [myListCount, setmyListCount] = useState(5); // State to manage the number of visible playlists

	const handleViewMoreOth = () => {
        setothListCount((prevothListCount) => prevothListCount + 5);
    };
	const handleViewMoreMy = () => {
        setmyListCount((prevmyListCount) => prevmyListCount + 5);
    };


	let othListCnt = 20;
	let myListCnt = 20;
    
      return (
        <Fragment>
            <MHeader/>
            <main>
                <Lft_menu/>
                <div className="cntr_wrp p10">
                    <div className="glbl-PULL">
						<div className="list_View_All">
							<h2>Explore other list</h2>
							{Array.from({ length: othListCnt }).slice(0, othListCount).map((_, index) => (
							<div className="list_View_Itm">
								<div className="list_View_ImgOvly">
									<img src="img/no_imgLnk2.svg"/>
									<div className="imgOvlry_1 dI" style={{ backgroundColor: 'rgb(152 63 174 / 85%)' }}></div>
								</div>
								<div className="dI" style={{ width: '80%' }}>
									<div className="listItem_Hdr">
										<b>List name</b>
										<span>34 spaces</span>
									</div>
									<div className="listItem_Ftr">
										<div>
											<img src="img/no_imgLnk2.svg"/>
											<img src="img/no_imgLnk2.svg"/>
											<img src="img/no_imgLnk2.svg"/>
											<img src="img/no_imgLnk2.svg"/>
											<img src="img/no_imgLnk2.svg"/>
										</div>
										<span>+10 followers</span>
									</div>
								</div>
							</div>
							))}
							{othListCount < othListCnt && (
                                <button onClick={handleViewMoreOth} className="viewMoreBtn">View More</button>
                            )}
						</div>
						<div className="list_View_All">
							<h2>My list</h2>
							{Array.from({ length: myListCnt }).slice(0, myListCount).map((_, index) => (
							<div className="list_View_Itm">
								<div className="list_View_ImgOvly">
									<img src="img/no_imgLnk2.svg"/>
									<div className="imgOvlry_1 dI" style={{ backgroundColor: 'rgb(63 174 72 / 85%)' }}></div>
								</div>
								<div className="dI" style={{ width: '80%' }}>
									<div className="listItem_Hdr">
										<b>List name</b>
										<span>34 spaces</span>
									</div>
									<div className="listItem_Ftr">
										<div>
											<img src="img/no_imgLnk2.svg"/>
											<img src="img/no_imgLnk2.svg"/>
											<img src="img/no_imgLnk2.svg"/>
											<img src="img/no_imgLnk2.svg"/>
											<img src="img/no_imgLnk2.svg"/>
										</div>
										<span>+10 followers</span>
									</div>
								</div>
							</div>
							))}
							{myListCount < myListCnt && (
                                <button onClick={handleViewMoreMy} className="viewMoreBtn">View More</button>
                            )}
						</div>
					</div>	
				</div>
            </main>
            <ChatMsg_Mod/>
            <PstGlb_Mod/>
        </Fragment>
    );
}
