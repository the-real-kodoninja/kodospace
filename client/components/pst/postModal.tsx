import React, { Fragment,useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import timeAgo from "../../addons/timeAgo.tsx";
import dynamic from 'next/dynamic';
const VideoPlayer = dynamic(() => import('../media/videoPlayer.tsx'), { ssr: false });
// import DOMPurify from 'dompurify';

const PostModal = ({ mainPostData, fakeComments, pstMnuView, toggledMenuPostId, openModal, displayedImageCount, setDisplayedImageCount, extractImageSrc, toggleCommentsPopup }) => {
	
	const router = useRouter();
	const { query } = router;
	const isUserPage = !!query.username;

    const [likeCount, setLikeCount] = useState(0);
    const [isClicked, setIsClicked] = useState(false);
    const handleLike = async (pid) => {
        setTimeout(() => {
            setIsClicked(true);
        }, 300); // Adjust timeout for animation duration (300ms in this example)
        // Increment the local like count for immediate feedback
        setLikeCount(likeCount + 1);
    
        // Send the like count update to the server
        try {
            await fetch('/api/update-like-count', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ pid: pid, newLikeCount: likeCount + 1 }),
            });
            // Handle response from the server
            console.log('Like count updated successfully');
        } catch (error) {
            console.error('Failed to update like count', error);
            // Optionally, revert the like count increment on error
            setLikeCount(likeCount - 1);
            setIsClicked(false);
        }
    };

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        // Set the isClient state to true once the component has mounted
        setIsClient(true);
    }, []);

    // const sanitizedData = DOMPurify.sanitize(value.data);
    // <div dangerouslySetInnerHTML={{ __html: sanitizedData.replace(/<img[^>]*>/g, "").replace(/https?:\/\/[^\s]+(?:\.mp4|\.avi|\.mov)/g, '') }} onClick={() => openModal(value)}></div>

    const [isSticky, setIsSticky] = useState(false);

    interface mainPostData {
        pid: string;
        date: string;
        data: string;
        // Add other properties as needed
    }
    
    interface PostModalProps {
        mainPostData: { [key: string]: mainPostData };
        fakeComments: any; // Define this type more specifically if possible
        pstMnuView: (pid: string) => void;
        toggledMenuPostId: string;
        openModal: (value: mainPostData) => void;
        displayedImageCount: number;
        setDisplayedImageCount: (count: number) => void;
        extractImageSrc: (data: string) => string[];
        toggleCommentsPopup: () => void;
    }

     // Handle scroll to adjust sidebar top position and input visibility
     useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos >= 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Fragment>
            {/* {Object.entries(posts).map(([id, post]) => (
                {/* // Render your post component here, using post data */}
            {/* ))} */} 
			{!isUserPage &&            
			<div className="newPst_Mod" style={{ top: isSticky ? '0' : '112px' }}>
                <div>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <img src="img/no_imgLnk2.svg"/>
                    ))}
                    <span>+14</span>
                </div>
            </div>
			}
            {isClient && Object.entries(mainPostData).map(([key, value]: [string, mainPostData]) => (
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
                        <div onClick={() => pstMnuView(value.pid)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                        <div className="fR">
                            <ul key="toggled-content" className={toggledMenuPostId === value.pid ? 'mnPst_Mnu pA' : 'mnPst_Mnu pA dN'}>
                                <li>view</li>
                                <li>update</li>
                                <li>hide</li>
                                <li>delete</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mnPst_Bdy">
                    <div>
                        {/* Strip and display text without images or videos */}
                        <div dangerouslySetInnerHTML={{ __html: value.data.replace(/<img[^>]*>/g, "").replace(/https?:\/\/[^\s]+(?:\.mp4|\.avi|\.mov)/g, '') }} onClick={() => openModal(value)}></div>
                        
                        {/* Extract and display images */}
                        <div>
                        {extractImageSrc(value.data).slice(0, displayedImageCount).map((src, index) => (
                            <img key={index} src={src} alt={`Post image ${index}`} style={{ width: extractImageSrc(value.data).length > 1 ? '50%' : '100%', display: 'inline-block', height: extractImageSrc(value.data).length > 1 ? '210px' : 'auto' }} onClick={() => openModal(value)}/>
                        ))}
                            {extractImageSrc(value.data).length > displayedImageCount && (
                                <div className="modalMediaVmre" onClick={() => setDisplayedImageCount(displayedImageCount + 4)}>+{extractImageSrc(value.data).length - displayedImageCount} more</div>
                            )}
                        </div>
                        {/* Display video if present in the data */}
                        {isClient && value.data.match(/https?:\/\/.*\.(mp4|avi|mov)/) && <VideoPlayer src={value.data.match(/https?:\/\/.*\.(mp4|avi|mov)/)[0]} />}
                    </div>
                </div>
                <div className="mnPst_Ftr">
                    <div className="dI">
                        <span>
                            <span className="likeBtnCounterModule">{likeCount}&nbsp;</span>
                            <span>&#x2022;&nbsp;</span>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className={`w-6 h-6 likeBtnModule ${isClicked ? 'clicked' : ''}`}
                        onClick={() => handleLike(value.pid)}>
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" onClick={toggleCommentsPopup}>
                                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </Fragment>
    );
};

export default PostModal;
