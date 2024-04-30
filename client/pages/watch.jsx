import React, { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import timeAgo from "../addons/timeAgo.tsx";
import dynamic from 'next/dynamic';
import MHeader from '../components/header.tsx'; 
import Lft_menu from '../components/lft_menu.tsx'; 
import axios from 'axios';
import ChatMsg_Mod from '../components/media/chatMsg.tsx';
// post global modules
import PstGlb_Mod from '../components/m/pstGlb_mod.tsx';
import CommentReplyModal from '../components/pst/commentReplyModal.tsx';
import VideoPlayer from '../components/media/videoPlayer.tsx';
// const VideoPlayer = dynamic(() => import('../components/media/videoPlayer.tsx'), { ssr: false });

const MediaView = () => {
  const router = useRouter();
  const { v } = router.query; // Access the 'v' query parameter

  useEffect(() => {
    // You can use the 'v' parameter here to fetch data or perform other actions
    console.log(v); // This will log the value of 'v' to the console
  }, [v]); // This effect will re-run whenever the 'v' parameter changes

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        // Set the isClient state to true once the component has mounted
        setIsClient(true);
    }, []);
  // const router = useRouter();

  const videoPull = [
    {
      url: 'https://archive.org/serve/FOXNEWSW_20221020_230000_Jesse_Watters_Primetime/FOXNEWSW_20221020_230000_Jesse_Watters_Primetime.mp4?t=367/427&exact=1&ignore=x.mp4',
      title: 'Primetime on FOX News AOC to sexy for tv',
      author: '@kodoninja @kodospace',
      date: '10/20/2022',
    },
  ];

  const fakeComments = [
    { id: 1, uid: 101, pid: 5, data: "Really enjoyed this post, thanks for sharing!", dateTime: "2024-04-10T12:30:00" },
    { id: 2, uid: 102, pid: 3, data: "I have a different perspective on this. Let's discuss. <img src='https://cdn.fstoppers.com/styles/xlarge/s3/media/2023/03/29/nando-juxta-position-9.jpg'/>", dateTime: "2024-04-11T15:45:00" },
    { id: 3, uid: 103, pid: 1, data: "This is exactly what I was looking for, great job!", dateTime: "2024-04-12T09:20:00" },
    { id: 4, uid: 104, pid: 2, data: "Could you provide more details on this topic?", dateTime: "2024-04-13T17:05:00" },
    { id: 5, uid: 105, pid: 4, data: "I disagree with your point. Here's why...", dateTime: "2024-04-14T08:15:00" },
    { id: 6, uid: 106, pid: 5, data: "Amazing insight, thanks for sharing!", dateTime: "2024-04-15T10:00:00" },
    { id: 7, uid: 107, pid: 3, data: "I never thought about it this way before.", dateTime: "2024-04-16T14:30:00" },
    { id: 8, uid: 108, pid: 1, data: "This helped me understand the topic better, thanks.", dateTime: "2024-04-17T16:45:00" },
    { id: 9, uid: 109, pid: 2, data: "Looking forward to more posts like this.", dateTime: "2024-04-18T11:30:00" },
    { id: 10, uid: 110, pid: 4, data: "This post is underrated.", dateTime: "2024-04-19T13:00:00" },
    { id: 11, uid: 111, pid: 5, data: "Your posts are always so insightful.", dateTime: "2024-04-20T18:20:00" },
    { id: 12, uid: 112, pid: 3, data: "I learned something new today, thanks!", dateTime: "2024-04-21T12:10:00" },
    { id: 13, uid: 113, pid: 1, data: "Can't wait to see what you post next.", dateTime: "2024-04-22T09:50:00" },
    { id: 14, uid: 114, pid: 2, data: "This is a topic that needs more attention.", dateTime: "2024-04-23T15:15:00" },
    { id: 15, uid: 115, pid: 4, data: "You've opened my eyes to new perspectives.", dateTime: "2024-04-24T10:05:00" },
    { id: 16, uid: 116, pid: 5, data: "This is a very thought-provoking post.", dateTime: "2024-04-25T17:30:00" },
    { id: 17, uid: 117, pid: 3, data: "Appreciate the depth and detail you've provided.", dateTime: "2024-04-26T14:00:00" },
    { id: 18, uid: 118, pid: 1, data: "Your content is always so rich and informative.", dateTime: "2024-04-27T16:20:00" },
    { id: 19, uid: 119, pid: 2, data: "This discussion is so necessary. ", dateTime: "2024-04-28T13:45:00" },
    { id: 20, uid: 120, pid: 4, data: "Thanks for shedding light on this subject.", dateTime: "2024-04-29T11:00:00" }
  ];

  let selectedPost, toggledMenuPostId;

  const [showNewComment, setShowNewComment] = useState(false);
    const [commentViewHeight, setCommentViewHeight] = useState('285px');

    const toggleNewCommentView = () => {
        setShowNewComment(!showNewComment);
        setCommentViewHeight(showNewComment ? '285px' : '450px'); 
        (document.querySelector('.modalMediaCmntView') as HTMLElement).style.margin = showNewComment ? '0px' : '10px 0px 0px';
    };

    let playListCount = 15;
  
  return (
    <Fragment>
      <MHeader />
      <main>
        <Lft_menu />
        <div className="cntr_wrp p10">
            <div className="modalWatchVideo_Wpr glbl-PULL">
                <div className="modalWatchVideo_VidPnl">
                {isClient && videoPull[0] && videoPull[0].url && (
                    <VideoPlayer src={videoPull[0].url.match(/https?:\/\/.*\.(mp4|avi|mov)/)[0]} />
                )}
                </div>
                <div className="modalwatchVideo_Hdr">
                    <h1>{videoPull[0].title}</h1>
                    <div className="modalwatchVideo_UsrStat">
                      <img src="/img/IMG_0029_Original.jpg"/>
                      <div className="dI">
                        <div>{videoPull[0].author}</div>
                        <small>{timeAgo(new Date(videoPull[0].date))}</small>
                      </div>
					  <div className="dI">
						<button className="bg_watch_btn1">follow</button>
						<button className="bg_Watch_btn2">subscribe</button>
						</div>
						<div className="fR" style={{ margin: '15px 0px 0px 0px' }}>
							<div className="dI likeModuleVideo">
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  										<path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
									</svg>
									<span>1.2k</span>	
								</div>
								<div>
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  										<path strokeLinecap="round" strokeLinejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
									</svg>
									<span>0</span>
								</div>
							</div>
						</div>
                    </div>
                </div>
				<div className="modalVideoStat">
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  							<path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
							</svg>
						<span>share</span>
					</span>
					<span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  							<path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
						</svg>
						<span>download</span>
					</span>
					<span className="fR">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
						</svg>
					</span>
				</div>
                <div className="modalwatchVideo_Abt">
                  <div><small>updated {timeAgo(new Date(videoPull[0].date))}</small></div>
                  <div>This is a plane where you can put anythig </div>
                </div>
                {/* <div className="modalwatchVideo_Mvd">
                  <h2>Related videos</h2>
                  {Array.from({ length: 7 }).map((_, index) => (
                    <div className="modalwatchVideo_MVw">
                      <img src="img/no_imgLnk.svg" className="modalVidThumb_Mvw"/>
                      <div>
                        <img src="img/no_imgLnk2.svg" className="modalVidThumb_Mvu"/>
                        <div className="dI">
                          <div>{videoPull[0].author}</div>
                          <small>{timeAgo(new Date(videoPull[0].date))}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div> */}
                <div className="modalPlaylist_View">
                  <div className="modalPlaylist_Hdr">
                    <h1>Playlist</h1>
                    <span className="fR">{playListCount}</span>
                  </div>
                  <div className="modalPlaylist_Bdy">
                    {Array.from({ length: playListCount }).map((_, i) => (
                    <div className="modalPlaylist_Itm">
                      <span className="fL">{i}</span>
                      <img src="img/no_imgLnk.svg"/>
                      <div className="modalPlaylist_ItmDtl">
                        <span>The name iof video {i}</span>
                        <span className="fR">? time ago</span>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
                <div className="modalwatchVideo_Cmnt">
                  <div>
                    <h2>251 Comments</h2>
                    <span className="fR">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                      </svg>
                    </span>
                  </div>
                  <div className="modalwatchVideo_Cmnt_wrp">
                    <div className="modalMediaNewCmnt" style={{ display: showNewComment ? 'none' : 'block' }}>
                      <textarea placeholder="What would you like to say?"></textarea>
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
                    <CommentReplyModal
                        showNewComment={showNewComment}
                        commentViewHeight={commentViewHeight}
                        fakeComments={fakeComments}
                        selectedPost={selectedPost}
                        toggledMenuPostId={toggledMenuPostId}
                        />
                  </div>
                </div>
            </div>
        </div>
      </main>
      <ChatMsg_Mod />
      <PstGlb_Mod />
    </Fragment>
    );
  };

export default MediaView;  
