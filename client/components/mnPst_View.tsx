import React, { Fragment,useState, useEffect } from 'react';
import timeAgo from "../addons/timeAgo.tsx";
import dynamic from 'next/dynamic';
const VideoPlayer = dynamic(() => import('../components/media/videoPlayer.tsx'), { ssr: false });
// import AdaptiveImage from '../addons/adaptiveImage.tsx';
import PostModal from './pst/postModal.tsx';
import CommentsPopup from '../components/pst/commentsPopup.tsx';
import ModalMedia_View from './pst/modalMedia_View.tsx';
// FIX HYDRATION DEV TEAM


const MnPst_View = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        // Set the isClient state to true once the component has mounted
        setIsClient(true);
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [displayedImageCount, setDisplayedImageCount] = useState(4);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [toggledMenuPostId, setToggledMenuPostId] = useState<number | null>(null);

    const pstMnuView = (pid: number) => {
        if (toggledMenuPostId === pid) {
            setToggledMenuPostId(null); // If the same menu is clicked again, close it
        } else {
            setToggledMenuPostId(pid); // Open the clicked menu
        }
    };

    const openModal = (post, imageUrl = '') => {
        setSelectedPost({ ...post, imageUrl }); // Include the imageUrl in the selectedPost state
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
    };
 
    const mainPostData = {
        1: { pid: 1, type: "post:video", data: "something to be posted https://archive.org/serve/FOXNEWSW_20221020_230000_Jesse_Watters_Primetime/FOXNEWSW_20221020_230000_Jesse_Watters_Primetime.mp4?t=367/427&exact=1&ignore=x.mp4", date: '2024-04-06T10:00:00' },
        2: { pid: 2, type: "post:video", data: "something to be posted https://archive.org/serve/FOXNEWSW_20220325_230000_Jesse_Watters_Primetime/FOXNEWSW_20220325_230000_Jesse_Watters_Primetime.mp4?t=446/506&exact=1&ignore=x.mp4", date: '2024-04-06T10:00:00' },
        3: { pid: 3, type: "user:following", data: "This is another text example <img src'https://kodoninja.com/img/tgl/11140144_10206598809038992_6106877438164771864_o.jpg'/><img src'https://kodoninja.com/img/tgl/12188072_10208149125155926_1168067731155751633_o.jpg'/><img src='https://kodoninja.com/img/tgl/12440637_10209083836483125_7581954651496921759_o.jpg'/><img src'https://kodoninja.com/img/tgl/11269006_10206915239149547_4167205007271155598_o.jpg'/> ", date: "4/6/2024" },
        4: { pid: 4, type: "post:text", data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <img src='http://www.pbase.com/duncanc/image/120216512/original.jpg'/><img src='https://cdn.fstoppers.com/styles/xlarge/s3/media/2023/03/29/nando-juxta-position-fibonacci.jpg?_gl=1*y1ej07*_ga*NzgzNzM1MzEzLjE3MTMzMzM0NTg.*_ga_J13NKB0C5P*MTcxMzMzMzQ1Ny4xLjAuMTcxMzMzMzQ1Ny42MC4wLjA.'/><img src='https://cdn.fstoppers.com/styles/xlarge/s3/media/2023/03/29/nando-juxta-position-6.jpg'/><img src='https://cdn.fstoppers.com/styles/xlarge/s3/media/2023/03/29/nando-juxta-position-2.jpg'/><img src=''/><img src='https://cdn.fstoppers.com/styles/xlarge/s3/media/2023/03/29/nando-juxta-position.jpg'/>", date: "4/7/2024" },
        5: { pid: 5, type: "user:comment", data: "This is a comment on a post", date: "4/8/2024" },
        6: { pid: 6, type: "post:image", data: "Hello, World!<img src='img/no_imgLnk.svg'/>", date: "4/9/2024" },
        7: { pid: 7, type: "comment:video", data: "something to be posted", date: "4/10/2024" }
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
   
    let cmntCnt: number = 25;

    const [isCommentsPopupOpen, setIsCommentsPopupOpen] = useState(false);

    // Function to toggle the popup visibility
    const toggleCommentsPopup = () => {
        setIsCommentsPopupOpen(!isCommentsPopupOpen);
    };


    return (
        <Fragment>
            <div className="dI" style={{ width: 'auto', display: 'ruby' }}>
                <PostModal
                    mainPostData={mainPostData}
                    fakeComments={fakeComments}
                    pstMnuView = {pstMnuView} 
                    toggledMenuPostId={toggledMenuPostId}
                    openModal={openModal}
                    displayedImageCount={displayedImageCount}
                    setDisplayedImageCount={setDisplayedImageCount}
                    extractImageSrc={extractImageSrc}
                    toggleCommentsPopup={toggleCommentsPopup}
                />
                {isModalOpen && (
                    <ModalMedia_View
                        extractImageSrc={extractImageSrc}
                        currentImageIndex={currentImageIndex}
                        setCurrentImageIndex={setCurrentImageIndex}
                        closeModal={closeModal}
                        selectedPost={selectedPost}
                        cmntCnt={cmntCnt}
                        fakeComments={fakeComments}
                        toggledMenuPostId={toggledMenuPostId}
                    />
                )}
                {isCommentsPopupOpen && (
                    <CommentsPopup
                        postData={selectedPost?.data}
                        username={"@TestUser"} 
                        likeCount={14}
                        shareCount={0}
                        dateTime={selectedPost?.date}
                        onClose={toggleCommentsPopup}
                        extractImageSrc={extractImageSrc}
                        selectedPost={selectedPost}
                        fakeComments={fakeComments}
                        toggledMenuPostId={toggledMenuPostId}
                    />
                )}
            </div>
        </Fragment>
    );
};

export default MnPst_View;