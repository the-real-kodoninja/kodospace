import React, { Fragment, useState } from 'react';

export default function ExpView_User() {

    const [visibleUsers, setVisibleUsers] = useState(8);
    const handleViewMore2 = () => {
        setVisibleUsers(prevVisibleUsers => prevVisibleUsers + 8);
    };

    return (
        <Fragment>
            <div className="expView_Users">
                <ul className="expView_UserList">
                    <h2>Featured Users</h2>
                    {Array.from({ length: 30 }).slice(0, visibleUsers).map((_, index) => (
                        <li key={index}>
                            <div className="expView_UsrThumb">
                                <img src="img/no_imgLnk2.svg" alt="user thumbnail"/>
                            </div>
                            <div className="expView_UsrInfo">
                                <div className="dI">
                                    <div className="expView_UsrTitle">This is a user title mate</div>
                                    <div className="expView_UsrUname">@kodoninja</div>
                                    <div>
                                        <span>247 followers</span>
                                        <span>&nbsp;&#x2022;&nbsp;</span>
                                        <span className="expView_UsrDate">2 min ago</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                    {visibleUsers < 30 && (
                        <button onClick={handleViewMore2} style={{ display: 'block', margin: '20px auto' }}>
                            View More
                        </button>
                    )}
                </ul>
            </div>
        </Fragment>
    );
};