import React, { Fragment, useState } from 'react';
import timeAgo from "../addons/timeAgo.tsx";
import Link from 'next/link';
import MHeader from '../components/header.tsx'; 
import Lft_menu from '../components/lft_menu.tsx'; 
import axios from 'axios';
import ChatMsg_Mod from '../components/media/chatMsg.tsx';
import PstGlb_Mod from '../components/m/pstGlb_mod.tsx';

const History = () => {

const historyData = [
	{
		thumb: "img/no_imgLnk.svg", // Replace with your thumbnail path
		type: "photo",
		data: "You liked a photo by @timDale.",
		date: new Date("2024-04-18"), // Replace with the actual date
	},
	{
		thumb: "img/no_imgLnk.svg", // Replace with your thumbnail path
		type: "video",
		data: "You added a video by @k2 to your favorites.",
		date: new Date("2024-04-15"), // Replace with the actual date
	},
	{
		thumb: "img/no_imgLnk.svg", // Replace with your thumbnail path
		type: "video",
		data: "You viewed this video",
		date: new Date("2024-04-10"), // Replace with the actual date
	},
	{
		thumb: "img/no_imgLnk.svg", // Replace with your thumbnail path
		type: "post",
		data: "You commented on a post by @Neptune",
		date: new Date("2024-04-07"), // Replace with the actual date
	},
	{
		thumb: "img/no_imgLnk.svg", // Replace with your thumbnail path
		type: "photo",
		data: "You updated your profile photo",
		date: new Date("2024-04-05"), // Replace with the actual date
	},
	{
		thumb: "img/no_imgLnk.svg", // Replace with your thumbnail path
		type: "video",
		data: "You saw a video by @tamtammy",
		date: new Date("2024-04-02"), // Replace with the actual date
	},
	{
		thumb: "img/no_imgLnk.svg", // Replace with your thumbnail path
		type: "video",
		data: "You commented on this video",
		date: new Date("2024-03-31"), // Replace with the actual date
	},
	{
		thumb: "img/no_imgLnk.svg", // Replace with your thumbnail path
		type: "photo",
		data: "You commented on this photo",
		date: new Date("2024-03-28"), // Replace with the actual date
	},
	{
		thumb: "img/no_imgLnk.svg", // Replace with your thumbnail path
		type: "photo",
		data: "You liked this photo by @batCat",
		date: new Date("2024-03-25"), // Replace with the actual date
	},
	{
		thumb: "img/no_imgLnk.svg", // Replace with your thumbnail path
		type: "reel",
		data: "You commented on a reel by @hellcat",
		date: new Date("2024-03-20"), // Replace with the actual date
	} 
];

	return (
		<Fragment>
			<MHeader />
				<main>
				<Lft_menu />

			<div className="cntr_wrp p10">
				<div className="modalHistory_Wpr glbl-PULL">
					<ul className="modalHistory_Inr">
				  {/* Map through historyData to create list items */}
				  {historyData.map((historyItem, index) => (
				    <li key={index}>
				      <span>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
							</svg>
					  </span>
				      <span><img src={historyItem.thumb} alt=""/></span>
				      <span className="modalHstryType">{historyItem.type}</span>
				      <span className="modalHstryData">{historyItem.data}</span>
						<span className="fR"><small>{timeAgo(new Date(historyItem.date))}</small></span>	
					  </li>
				  ))}
				</ul>
				</div>
			</div>
			</main>
			<ChatMsg_Mod />
			<PstGlb_Mod />
		</Fragment>
	);
}

export default History;
