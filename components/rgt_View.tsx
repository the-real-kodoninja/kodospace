import React, { Fragment, useState } from 'react';

export default function Rgt_View() {

    let uid: number;
    let pid: number;
    let trnd_aside_usr: string = '@testUsr';
    const trendingVideos = [  // Array of trending post objects
    { uid: 1, pid: 3, description: 'A video about a cool cat, negroms', thumb: 'no_imgLnk.svg' },
    { uid: 2, pid: 4, description: 'road to earthroamer', thumb: 'no_imgLnk.svg' },
    { uid: 3, pid: 5, description: 'road to earthroamer', thumb: 'no_imgLnk.svg' },
    { uid: 4, pid: 6, description: 'road to earthroamer', thumb: 'no_imgLnk.svg' },
    { uid: 5, pid: 7, description: 'road to earthroamer', thumb: 'no_imgLnk.svg' },
  ];

  const trendingPosts = [  // Array of trending post objects
    { hashtag: '#trendHash1', description: 'Something about it 1' },
    { hashtag: '#trendHash2', description: 'Something about it 2' },
    { hashtag: '#trendHash2', description: 'Something about it 3' },
    { hashtag: '#trendHash2', description: 'Something about it 4' },
    { hashtag: '#trendHash2', description: 'Something about it 5' },
    // ... add more trending posts objects
  ];

  return (
    <>
      <aside className="rgt_asd fR" style={{ display: 'inline' }}>
      <ul className="rgt_pnl">
          <div className="rgt_pHdr">Trending videos</div>
          {trendingVideos.map((post) => (
            <li key={pid}>  
                <div className="">
                    <img src={'img/'+post.thumb}/>
                </div>
                <div className="rgt_pFtr">
                    <img className="rgt_uImg_1" src="img/no_imgLnk2.svg"/>
                    <span><b>{post.description}</b></span>
                    <div className="rgt_pUsr">{trnd_aside_usr}</div>
                </div>
            </li>
          ))}
        </ul>
        <ul className="rgt_pnl">
          <div className="rgt_pHdr">Trending posts</div>
          {trendingPosts.map((post) => (
            <li key={post.hashtag}>  {/* Use a unique key for each post */}
                <div className="rgt_pFtr dI w100">
                    <div className="dI">
                        <img className="rgt_uImg_1" src="img/no_imgLnk2.svg"/>
                        <div className="rgt_pUsr">{trnd_aside_usr}</div>
                        <b>{post.hashtag}</b>
                        <div>{post.description}</div>
                    </div>
                    <div className="fR dI">
                        <img className="rgt_uImg_2" src="img/no_imgLnk.svg"/>
                    </div>
                </div>
            </li>
          ))}
        </ul>
        <ul className="rgt_pnl">
          <div className="rgt_pHdr">Trending users</div>
          {trendingPosts.map((post) => (
            <li key={post.hashtag}>  {/* Use a unique key for each post */}
                <div className="rgt_pFtr dI w100">
                    <div className="dI">
                        <img className="rgt_uImg_1" src="img/no_imgLnk2.svg"/>
                        <div className="rgt_pUsr">{trnd_aside_usr}</div>
                        <b>{post.hashtag}</b>
                        <div>{post.description}</div>
                    </div>
                    <div className="fR dI">
                        <img className="rgt_uImg_2" src="img/no_imgLnk.svg"/>
                    </div>
                </div>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
