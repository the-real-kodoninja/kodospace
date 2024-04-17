import React, { Fragment,useState } from 'react'
import timeAgo from "../addons/timeAgo.tsx";
import VideoPlayer from '../components/media/videoPlayer.tsx';
// import AdaptiveImage from '../addons/adaptiveImage.tsx';

export default function MnPst_View () {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showNewComment, setShowNewComment] = useState(false);
    const [commentViewHeight, setCommentViewHeight] = useState('285px');
    const [displayedImageCount, setDisplayedImageCount] = useState(4);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (post, imageUrl = '') => {
        setSelectedPost({ ...post, imageUrl }); // Include the imageUrl in the selectedPost state
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
    };
    // example python backend call
    const mainPostData = {
        1: { pid: 1, type: "post:video", data: "something to be posted https://archive.org/serve/FOXNEWSW_20221020_230000_Jesse_Watters_Primetime/FOXNEWSW_20221020_230000_Jesse_Watters_Primetime.mp4?t=367/427&exact=1&ignore=x.mp4", date: '2024-04-06T10:00:00' },
        2: { pid: 1, type: "post:video", data: "something to be posted https://archive.org/serve/FOXNEWSW_20220325_230000_Jesse_Watters_Primetime/FOXNEWSW_20220325_230000_Jesse_Watters_Primetime.mp4?t=446/506&exact=1&ignore=x.mp4", date: '2024-04-06T10:00:00' },
        3: { pid: 2, type: "user:following", data: "This is another text example <img src'https://kodoninja.com/img/tgl/11140144_10206598809038992_6106877438164771864_o.jpg'/><img src'https://kodoninja.com/img/tgl/12188072_10208149125155926_1168067731155751633_o.jpg'/><img src='https://kodoninja.com/img/tgl/12440637_10209083836483125_7581954651496921759_o.jpg'/><img src'https://kodoninja.com/img/tgl/11269006_10206915239149547_4167205007271155598_o.jpg'/> ", date: "4/6/2024" },
        4: { pid: 3, type: "post:text", data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <img src='http://www.pbase.com/duncanc/image/120216512/original.jpg'/><img src='https://cdn.fstoppers.com/styles/xlarge/s3/media/2023/03/29/nando-juxta-position-fibonacci.jpg?_gl=1*y1ej07*_ga*NzgzNzM1MzEzLjE3MTMzMzM0NTg.*_ga_J13NKB0C5P*MTcxMzMzMzQ1Ny4xLjAuMTcxMzMzMzQ1Ny42MC4wLjA.'/><img src='https://cdn.fstoppers.com/styles/xlarge/s3/media/2023/03/29/nando-juxta-position-6.jpg'/><img src='https://cdn.fstoppers.com/styles/xlarge/s3/media/2023/03/29/nando-juxta-position-2.jpg'/><img src=''/><img src='https://cdn.fstoppers.com/styles/xlarge/s3/media/2023/03/29/nando-juxta-position.jpg'/>", date: "4/7/2024" },
        5: { pid: 4, type: "user:comment", data: "This is a comment on a post", date: "4/8/2024" },
        6: { pid: 5, type: "post:image", data: "Hello, World!<img src='img/no_imgLnk.svg'/>", date: "4/9/2024" },
        7: { pid: 6, type: "comment:video", data: "something to be posted", date: "4/10/2024" }
    };

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

      const extractImageSrc = (data) => {
        // Updated regex to match both single and double quotes around the src attribute
        const imgRegex = /<img src=["'](.*?)["']/g;
        let match;
        const images = [];
        while ((match = imgRegex.exec(data)) !== null) {
            if (match[1]) images.push(match[1]);
        }
        return images;
    };
   

    const [ispstMnuToggled, setIspstMnuToggled] = useState(false);

	const pstMnuView = () => {
        setIspstMnuToggled(!ispstMnuToggled);
    };

    const toggleNewCommentView = () => {
        setShowNewComment(!showNewComment);
        setCommentViewHeight(showNewComment ? '285px' : '450px'); 
        document.querySelector('.modalMediaCmntView').style.margin = showNewComment ? '0px' : '10px 0px 0px';
    };

   

    let cmntCnt: number = 25;

    return (
        <Fragment>
            <div className="dI" style={{ width: 'auto', display: 'ruby' }}>
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
                            <div onClick={pstMnuView}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </div>
                            <div className="fR">
                                <ul key="toggled-content" className={ispstMnuToggled ? 'mnPst_Mnu pA' : 'mnPst_Mnu pA dN'}>
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
                            <div dangerouslySetInnerHTML={{ __html: value.data.replace(/<img[^>]*>/g, "").replace(/https?:\/\/[^\s]+(?:\.mp4|\.avi|\.mov)/g, '') }} onClick={() => openModal(value, value.type === "post:image" ? value.imageUrl : '')}></div>
                            
                            {/* Extract and display images */}
                            <div>
                            {extractImageSrc(value.data).slice(0, displayedImageCount).map((src, index) => (
                                <img key={index} src={src} alt={`Post image ${index}`} style={{ width: extractImageSrc(value.data).length > 1 ? '50%' : '100%', display: 'inline-block', height: extractImageSrc(value.data).length > 1 ? '210px' : 'auto' }} onClick={() => openModal(value, value.type === "post:image" ? value.imageUrl : '')}/>
                            ))}
                                {extractImageSrc(value.data).length > displayedImageCount && (
                                    <div className="modalMediaVmre" onClick={() => setDisplayedImageCount(displayedImageCount + 4)}>+{extractImageSrc(value.data).length - displayedImageCount} more</div>
                                )}
                            </div>
                            {/* Display video if present in the data */}
                            {value.data.match(/https?:\/\/.*\.(mp4|avi|mov)/) && (
                                <VideoPlayer src={value.data.match(/https?:\/\/.*\.(mp4|avi|mov)/)[0]} />
                            )}
                        </div>
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
                {isModalOpen && (
                <div className="modalBackdrop">
                    <div className="modalMedia_View">
                        <img src={extractImageSrc(selectedPost.data)[currentImageIndex]} alt={`Post image ${currentImageIndex}`} />
                    </div>
                    
                    <div className="modalMediaContent">
                        <div className="modalMediaContent_SVGHdr">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setCurrentImageIndex((currentImageIndex - 1 + extractImageSrc(selectedPost.data).length) % extractImageSrc(selectedPost.data).length)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setCurrentImageIndex((currentImageIndex + 1) % extractImageSrc(selectedPost.data).length)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z" />
                            </svg>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 modalMediaClx" onClick={closeModal} style={{ display: 'dI' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <div className="modalMediaHeader dI">
                            <img src="img/no_imgLnk2.svg" alt="User" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                            <div>
                                <span>Username</span>
                                <div><small>{timeAgo(new Date(selectedPost.date))}</small></div>
                            </div>
                        </div>
                        <div className="modalMediaBody">
                            {selectedPost && (
                                <Fragment>
                                    <div dangerouslySetInnerHTML={{ __html: selectedPost.data.replace(/<img[^>]*>/g, "") }}></div>
                                    
                                    {/* Additional content like views, likes, etc. */}
                                </Fragment>
                            )}
                        </div>
                        <div className="modalMediaFtr">
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
                                        <span>{cmntCnt}&nbsp;</span>
                                        <span>&#x2022;&nbsp;</span>
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 modalViewCmnts" stroke="#b51616" 
                                    stroke-width="1" onClick={toggleNewCommentView}>
                                        <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
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
                                                <div onClick={pstMnuView}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                                    </svg>
                                                </div>
                                                <div className="fR">
                                                    <ul key="toggled-content" className={ispstMnuToggled ? 'mnPst_Mnu pA' : 'mnPst_Mnu pA dN'}>
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
                        </div>
                    </div>
                </div>
            )}
            </div>
        </Fragment>
    );
};