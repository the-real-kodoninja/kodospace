import { Fragment, useState, useEffect } from "react";
import timeAgo from "../../addons/timeAgo.tsx";
import CommentReplyModal from '../../components/pst/commentReplyModal.tsx';
import dynamic from 'next/dynamic';
const VideoPlayer = dynamic(() => import('../../components/media/videoPlayer.tsx'), { ssr: false });

// Correctly destructure the props from the single props object
const CommentsPopup = ({ postData, username, likeCount, shareCount, dateTime, onClose, extractImageSrc, fakeComments, selectedPost, toggledMenuPostId }) => {
    const [displayedImageCount, setDisplayedImageCount] = useState(4);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        // Set the isClient state to true once the component has mounted
        setIsClient(true);
    }, []);

    const [showNewComment, setShowNewComment] = useState(false);
    const [commentViewHeight, setCommentViewHeight] = useState('215px');

    const toggleNewCommentView = () => {
        setShowNewComment(!showNewComment);
        setCommentViewHeight(showNewComment ? '215px' : '380px'); 
        (document.querySelector('.modalMediaCmntView') as HTMLElement).style.margin = showNewComment ? '0px' : '10px 0px 0px';
    };


    return (
        <Fragment>
            <div className="modalBackdrop">
                <div className="modalCmntView_Wpr">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 modalMediaClx" onClick={onClose} style={{ display: 'dI' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div className="modalCmntView_Hdr">
                        <img src="img/no_imgLnk2.svg" alt="" className="modalCmntImgHdr"/>
                        <div>
                            <span>{username}</span>
                            <span>
                                <small>{timeAgo(new Date(dateTime))}</small>
                            </span>
                        </div>
                    </div>
                    <p className="modalPostMediaBdy" style={{ height: commentViewHeight }}>
                    <div dangerouslySetInnerHTML={{ __html: postData ? postData.replace(/<img[^>]*>/g, "").replace(/https?:\/\/[^\s]+(?:\.mp4|\.avi|\.mov)/g, '') : '' }}></div>

                    {extractImageSrc(postData).slice(0, displayedImageCount).map((src, index) => (
                        <img key={index} src={src} alt={`Post image ${index}`} style={{ width: extractImageSrc(postData).length > 1 ? '50%' : '100%', display: 'inline-block', height: extractImageSrc(postData).length > 1 ? '210px' : 'auto' }} />
                    ))}
                    {fakeComments.map((comment) => (
                        <Fragment key={comment.id}>
                            <div className="modalCmntViewReplies">                                  
                                <img src="img/no_imgLnk2.svg" alt="" className="modalMediaUsr_Img1" />
                                <div className="modalMediaCmnt_Wpr">
                                    <div className="modalMediaCmnt_Inr">
                                        <div>
                                            <span>@{comment.uid}</span>
                                            <span>
                                                <small>{timeAgo(new Date(comment.dateTime))}</small>
                                            </span>
                                        </div>    
                                        {selectedPost && comment.data && <div dangerouslySetInnerHTML={{ __html: comment.data }} />}
                                    </div>
                                    <div className="modalMediaCmnt_Stat">
                                        <span>0&nbsp;</span>
                                        <span>&#x2022;&nbsp;</span>
                                        <span>like&nbsp;</span>
                                        <span>&nbsp;reply</span>
                                    </div>
                                    <div className="modalMediaCmntReply_WPr">
                                        {Array.from({ length: 3 }).map((_, index) => (
                                            <CommentReplyModal
                                                showNewComment={showNewComment}
                                                commentViewHeight={commentViewHeight}
                                                fakeComments={fakeComments}
                                                selectedPost={selectedPost}
                                                toggledMenuPostId={toggledMenuPostId}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="dI fR">
                                    <div >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>
                                    </div>
                                    <div className="fR">
                                        <ul key="toggled-content" className={toggledMenuPostId ? 'mnPst_Mnu pA' : 'mnPst_Mnu pA dN'}>
                                            <li>view</li>
                                            <li>update</li>
                                            <li>hide</li>
                                            <li>delete</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </Fragment>
                    ))}
                </p>
                <div className="modalPostMediaScl">
                    <div className="dI">
                        <span>
                            <span>{likeCount}&nbsp;</span>
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
                            <span>{shareCount}&nbsp;</span>
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 modalViewCmnts" stroke="#b51616"   strokeWidth="1" onClick={toggleNewCommentView}>
                                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div style={{ display: showNewComment ? 'none' : 'block' }}>
                    <div className="modalPostMediaFtr">
                        <textarea placeholder="What would you like to reply"></textarea>
                    </div>
                    <div className="modalMediaPostSVG">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                        </svg>
                    </div>
                    <input type="submit" value="post"/>
                </div>
            </div>
        </div>
    </Fragment>
    );
};

export default CommentsPopup;