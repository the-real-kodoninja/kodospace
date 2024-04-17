import React, { Fragment, useState } from 'react';

export default function ExpView_Video () {

    const [visibleVideos, setVisibleVideos] = useState(6);
    const handleViewMore = () => {
        setVisibleVideos(prevVisibleVideos => prevVisibleVideos + 6);
    };

    return (
        <Fragment>
            <div className="expView_Video">
                <ul className="expView_VideosList">
                    <h2>Featured Videos</h2>
                    {Array.from({ length: 30 }).slice(0, visibleVideos).map((_, index) => (
                        <li key={index}>
                            <div className="expView_VidThumb">
                                <img src="img/no_imgLnk.svg" alt="video thumbnail"/>
                            </div>
                            <div className="expView_VidInfo">
                                <img src="img/no_imgLnk2.svg" alt="user photo"/>
                                <div className="dI">
                                    <div className="expView_VidTitle">This is a vid title mate</div>
                                    <div className="expView_VidUname">@kodoninja</div>
                                    <div>
                                        <span>247 views</span>
                                        <span>&nbsp;&#x2022;&nbsp;</span>
                                        <span className="expView_VidDate">2 min ago</span>
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