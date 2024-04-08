import React, { Fragment,useState,useEffect } from 'react'
import MHeader from '../components/header.tsx'; 
import Lft_menu from '../components/lft_menu.tsx'; 
import Hdr_fltr from '../components/hdr_fltr.tsx';
import MnPst_View from '../components/mnPst_View.tsx'
import Rgt_View from '../components/rgt_View.tsx';
import MFooter from '../components/footer.tsx'; 
import axios from 'axios';
 
export default function home () {
	const [data, setData] = useState([]);

 	return (
		<Fragment>
			<MHeader/>
			<main>
				<Lft_menu/>
				<div className="cntr_wrp dI pA p10">
					<Hdr_fltr/>
					<div className="mnVwbdy">
						<MnPst_View/>
						<Rgt_View/>
					</div>
				</div>
			</main>
			<MFooter/>
		</Fragment>
 	)
 }