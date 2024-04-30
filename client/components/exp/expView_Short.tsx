import React, { Fragment, useState } from 'react';

export default function ExpView_Short() {

    const [visibleShorts, setVisibleShorts] = useState(10);
    const handleViewMore3 = () => {
        setVisibleShorts(prevVisibleShorts => prevVisibleShorts + 10);
    };

    return (
        <Fragment>
            <div className="expView_Shorts">
                <ul className="expView_ShortList">
                    <h2>Featured Shorts</h2>
                    {Array.from({ length: 30 }).slice(0, visibleShorts).map((_, index) => (
                        <li key={index} style={{ width: '164px' }}>
                            <div className="expView_ShortThumb">
                                <img src="img/no_imgLnk2.svg" alt="Short thumbnail"/>
                            </div>
                            <div className="expView_ShortInfo">
                                <div className="dI">
                                    <div className="expView_ShortTitle">This is a Short title mate</div>
                                    <div className="expView_ShortUname">@kodoninja</div>
                                    <div>
                                        <span>247 followers</span>
                                        <span>&nbsp;&#x2022;&nbsp;</span>
                                        <span className="expView_ShortDate">2 min ago</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    {visibleShorts < 30 && (
                        <button onClick={handleViewMore3} style={{ display: 'block', margin: '20px auto' }}>
                            View More
                        </button>
                    )}
                </ul>
            </div>
        </Fragment>
    );
};