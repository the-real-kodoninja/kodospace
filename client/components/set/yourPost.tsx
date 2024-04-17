import React, { useState, Fragment } from 'react';

export default function YourPost() {
  // Separate state for each toggle
  const [isToggledSensMat, setIsToggledSensMat] = useState(false);
  const [isToggledFlwPost, setIsToggledFlwPost] = useState(false);
  const [isToggledSubPost, setIsToggledSubPost] = useState(false);

  // Separate toggle functions for each state
  const tgl_sens_mat = () => setIsToggledSensMat(!isToggledSensMat);
  const tgl_flw_post = () => setIsToggledFlwPost(!isToggledFlwPost);
  const tgl_sub_post = () => setIsToggledSubPost(!isToggledSubPost);

  return (
    <Fragment>
      <div className="usrTgl_set">
        <div onClick={tgl_sens_mat} style={{ backgroundColor: isToggledSensMat ? '#ccc' : '#ccc', borderColor: isToggledSensMat ? '#999' : '#999' }}>
          <div style={{ backgroundColor: isToggledSensMat ? 'rgb(128, 73, 73)' : '#fff', left: isToggledSensMat ? '32px' : '1px', boxShadow: isToggledSensMat ? '0 0 5px rgb(128, 73, 73)' : 'none' }} />
        </div>
        <label htmlFor="tgl_sens_mat">
          Mark your post as having sensitive material.
        </label>
      </div>
      <div className="usrTgl_set">
        <div onClick={tgl_flw_post} style={{ backgroundColor: isToggledFlwPost ? '#ccc' : '#ccc', borderColor: isToggledFlwPost ? '#999' : '#999' }}>
          <div style={{ backgroundColor: isToggledFlwPost ? 'rgb(128, 73, 73)' : '#fff', left: isToggledFlwPost ? '32px' : '1px', boxShadow: isToggledFlwPost ? '0 0 5px rgb(128, 73, 73)' : 'none' }} />
        </div>
        <label htmlFor="tgl_flw_post">
          Allow to have only your followers see your post
        </label>
      </div>
      <div className="usrTgl_set">
        <div onClick={tgl_sub_post} style={{ backgroundColor: isToggledSubPost ? '#ccc' : '#ccc', borderColor: isToggledSubPost ? '#999' : '#999' }}>
          <div style={{ backgroundColor: isToggledSubPost ? 'rgb(128, 73, 73)' : '#fff', left: isToggledSubPost ? '32px' : '1px', boxShadow: isToggledSubPost ? '0 0 5px rgb(128, 73, 73)' : 'none' }} />
        </div>
        <label htmlFor="tgl_sub_post">
          Allow to have only your subscribers see your post
        </label>
      </div>
    </Fragment>
  );
};