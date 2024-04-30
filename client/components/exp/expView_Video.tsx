import React, { Fragment, useState } from 'react';
import { useRouter } from 'next/router';

export default function ExpView_Video () {

    const [visibleVideos, setVisibleVideos] = useState(6);
    const handleViewMore = () => {
        setVisibleVideos(prevVisibleVideos => prevVisibleVideos + 6);
    };

    const router = useRouter();


    const handleNavigation = (videoId) => {
        router.push(`/watch/v=${videoId}`);
      };

    const DummyData = [
        {
            vid: 'u6g5g6tbc46',
            img: "img/no_imgLnk.svg", 
            title: "This is a vid title mate",
            username: "@kodoninja", 
            views: "247 views",
            date: "2 min ago"
        },
        {
            vid: 'n76tbr5ve4',
            img: "img/no_imgLnk.svg", 
            title: "Another vid title",
            username: "@user2", 
            views: "150 views",
            date: "5 min ago"
        },
        {
            vid: '46ert576u9n',
            img: "img/no_imgLnk.svg", 
            title: "Yet another vid title",
            username: "@user3", 
            views: "300 views",
            date: "10 min ago"
        },
        {
            vid: '42354yf76',
            img: "img/no_imgLnk.svg", 
            title: "This is a vid title mate",
            username: "@kodoninja", 
            views: "247 views",
            date: "2 min ago"
        },
        {
            vid: 'jbi9iy9009u',
            img: "img/no_imgLnk.svg", 
            title: "Another vid title",
            username: "@user2", 
            views: "150 views",
            date: "5 min ago"
        },
        {
            vid: '86byp87567',
            img: "img/no_imgLnk.svg", 
            title: "Yet another vid title",
            username: "@user3", 
            views: "300 views",
            date: "10 min ago"
        },
        {
            vid: 'i8yb67ii76',
            img: "img/no_imgLnk.svg", 
            title: "This is a vid title mate",
            username: "@kodoninja", 
            views: "247 views",
            date: "2 min ago"
        },
        {
            vid: '3w54ycetyrc65',
            img: "img/no_imgLnk.svg", 
            title: "Another vid title",
            username: "@user2", 
            views: "150 views",
            date: "5 min ago"
        },
        {
            vid: 'iyl890709o',
            img: "img/no_imgLnk.svg", 
            title: "Yet another vid title",
            username: "@user3", 
            views: "300 views",
            date: "10 min ago"
        },
    ];

    return (
        <Fragment>
            <div className="expView_Video">
                <ul className="expView_VideosList">
                    <h2>Featured Videos</h2>
                    {DummyData.slice(0, visibleVideos).map((video, index) => (
                        <li key={video.vid}>
                            <div className="expView_VidThumb" onClick={() => handleNavigation(video.vid)}>
                                <img src={video.img} alt="video thumbnail"/>
                            </div>
                            <div className="expView_VidInfo">
                                <img src={video.img} alt="user photo"/>
                                <div className="dI">
                                    <div className="expView_VidTitle">{video.title}</div>
                                    <div className="expView_VidUname">{video.username}</div>
                                    <div>
                                        <span>{video.views}</span>
                                        <span>&nbsp;&#x2022;&nbsp;</span>
                                        <span className="expView_VidDate">{video.date}</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    {visibleVideos < 30 && (
                        <button onClick={handleViewMore} style={{ display: 'block', margin: '20px auto' }}>
                            View More
                        </button>
                    )}
                </ul>
            </div>
        </Fragment>
    );
};