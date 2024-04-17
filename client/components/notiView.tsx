import Link from 'next/link';
import { Fragment,useState } from 'react'
 
const NotiView = () => {
  
    const allNotiData = {
        1: { id: 1, type: "user:post", data: "@karma posted on your page", date: "4/5/2024" },
        2: { id: 2, type: "user:like", data: "@kate followed you", date: "4/6/2024" },
        3: { id: 3, type: "post:comment", data: "Commented on your post.: The window to happines starts...", date: "4/7/2024" },
        4: { id: 4, type: "user:comment", data: "@mike commented on your post.: Haaaayyyyy!", date: "4/8/2024" },
        5: { id: 5, type: "user:follow", data: "@virgingina followed you.", date: "4/9/2024" },
        6: { id: 6, type: "user", data: "@boobiespopped is now live.", date: "4/10/2024" }
    };
    

    // user photo img name view
    let tmpUsr: string = '@kodoninja';
    const [isHovered, setIsHovered] = useState(false);

 	return (
        <>
        <ul className="notiVhdr">
            {Object.entries(allNotiData).map(([key, value]) => (
                <li key={key} className="SchRsl_cnt">
                    <div>
                        <img 
                            src="/img/no_imgLnk2.svg"
                            // onMouseEnter={() => setIsHovered(true)}
                            // onMouseLeave={() => setIsHovered(false)}
                        />
                        <div className="dI">
                            <div>{value.data} <small>{value.date}</small></div>
                            <div><small>{value.type}</small></div>
                        </div>
                        <div className="dI fR">
                            <span className="notBtn_1">follow</span>
                            <span className="notBtn_2">live</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
                            </svg>
                        </div>
                    </div>
                </li>
            ))}



  
        </ul>
        <div className="notiVdvr w1oo"></div>
        <div className="notiVftr">
            <div className="dI">Clear all notifications</div>
            <div className="fR dI">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    </>
 	);
 }
 
 export default NotiView;
