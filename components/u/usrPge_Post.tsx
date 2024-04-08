import React, { Fragment,useState } from 'react'
import timeAgo from "../../addons/timeAgo.tsx";
// import AdaptiveImage from '../addons/adaptiveImage.tsx';

export default function UsrPge_Post () {
    // Moved useState inside the component
    const [isUsrpstMnuToggled, setIsUsrpstMnuToggled] = useState(false);
  
    const UsrpstMnuView = () => {
      setIsUsrpstMnuToggled(!isUsrpstMnuToggled);
    };

    // example python backend call
    const mainPostData = {
        1: { pid: 1, type: "post:video", data: "something to be posted", date: '2024-04-06T10:00:00' },
        2: { pid: 2, type: "user:following", data: "This is another text example", date: "4/6/2024" },
        3: { pid: 3, type: "post:text", data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", date: "4/7/2024" },
        4: { pid: 4, type: "user:comment", data: "This is a comment on a post", date: "4/8/2024" },
        5: { pid: 5, type: "post:image", data: "Hello, World!", date: "4/9/2024" },
        6: { pid: 6, type: "comment:video", data: "something to be posted", date: "4/10/2024" }
    };


    return (
        <Fragment>
            <div className="dI" style={{width: 'auto', display: 'inline'}}>
                {Object.entries(mainPostData).map(([key, value]) => (
                <div key={value.pid} className="mnPst_Wpr dI w100">
                    <div className="mnPst_Hdr">
                        <img className="mnPst_HdrImg_1 dI fL" src="img/no_imgLnk2.svg"/>
                        <div className="dI">
                            <div>@kodoninja @kodospace</div>
                            <div>
                                <small>{timeAgo(new Date(value.date))}</small>
                            </div>
                        </div>
                        <div className="dI fR">
                            <div onClick={UsrpstMnuView}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                            <div className="fR">
                                <ul key="toggled-content" className={isUsrpstMnuToggled ? 'mnPst_Mnu pA' : 'mnPst_Mnu pA dN'}>
                                    <li>view</li>
                                    <li>update</li>
                                    <li>hide</li>
                                    <li>delete</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mnPst_Bdy">
                        {value.data}
                        {/* <AdaptiveImage src="img/IMG_0029_Original.jpg" alt="Adaptive image test" /> */}
                    </div>
                    <div className="mnPst_Ftr">
                        <div className="dI">
                            <span>
                                <span>14&nbsp;</span>
                                <span>&#x2022;&nbsp;</span>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                            </svg>
                        </div>
                        &nbsp;
                        &nbsp;
                        <div className="dI">
                            <span>
                                <span>0&nbsp;</span>
                                <span>&#x2022;&nbsp;</span>
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="dI fR">
                            <div className="dI">
                                <span>
                                    <span>0&nbsp;</span>
                                    <span>&#x2022;&nbsp;</span>
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </Fragment>
    );
};