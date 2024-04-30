import React, { Fragment,useState, useEffect } from 'react'
import timeAgo from "../../addons/timeAgo.tsx";

const CommentReplyModal = ({ showNewComment, commentViewHeight, fakeComments, selectedPost, toggledMenuPostId }) => {


    return (
        <Fragment>
            <div className="modalMediaCmntView" style={{ height: commentViewHeight }}>
                {fakeComments.map((comment) => (
                    <Fragment key={comment.id}>
                        <div>                                  
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
                                    <div>
                                        <img src="img/no_imgLnk2.svg" alt="" className="modalMediaUsr_Img1" />
                                        <div className="modalMediaCmntReply_Cntr">             
                                            <div className="modalMediaCmntReply_Inr">
                                                <span>@{comment.uid}</span>
                                                <span>
                                                    <small>{timeAgo(new Date(comment.dateTime))}</small>
                                                </span>
                                                {selectedPost && comment.data && <div dangerouslySetInnerHTML={{ __html: comment.data }} />}
                                            </div>     
                                            <div className="modalMediaCmntReply_Stat">
                                                <span>0&nbsp;</span>
                                                <span>&#x2022;&nbsp;</span>
                                                <span>like&nbsp;</span>
                                                <span>&nbsp;reply</span>
                                            </div>
                                            {Array.from({ length: 3 }).map((_, index) => (
                                    <div>
                                        <img src="img/no_imgLnk2.svg" alt="" className="modalMediaUsr_Img1" />
                                        <div className="modalMediaCmntReply_Cntr">             
                                            <div className="modalMediaCmntReply_Inr">
                                                <span>@{comment.uid}</span>
                                                <span>
                                                    <small>{timeAgo(new Date(comment.dateTime))}</small>
                                                </span>
                                                {selectedPost && comment.data && <div dangerouslySetInnerHTML={{ __html: comment.data }} />}
                                            </div>     
                                            <div className="modalMediaCmntReply_Stat">
                                                <span>0&nbsp;</span>
                                                <span>&#x2022;&nbsp;</span>
                                                <span>like&nbsp;</span>
                                                <span>&nbsp;reply</span>
                                            </div>
                                        </div>
                                    </div>
                                    ))}
                                        </div>
                                        
                                    </div>
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
            </div>
        </Fragment>
    );
};

export default CommentReplyModal;