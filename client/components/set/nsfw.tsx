import React, { useState, Fragment } from 'react';

export default function NSFW() {
  // Separate state for each toggle
  const [isToggledSensMat, setIsToggledSensMat] = useState(false);
  const [isToggledBlrPost, setIsToggledBlrPost] = useState(false);

  // Separate toggle functions for each state
  const tgl_sens_mat = () => setIsToggledSensMat(!isToggledSensMat);
  const tgl_blr_post = () => setIsToggledBlrPost(!isToggledBlrPost);

  return (
    <Fragment>
      <div className="usrTgl_set">
        <div onClick={tgl_sens_mat} style={{ backgroundColor: isToggledSensMat ? '#ccc' : '#ccc', borderColor: isToggledSensMat ? '#999' : '#999' }}>
          <div style={{ backgroundColor: isToggledSensMat ? 'rgb(128, 73, 73)' : '#fff', left: isToggledSensMat ? '32px' : '1px', boxShadow: isToggledSensMat ? '0 0 5px rgb(128, 73, 73)' : 'none' }} />
        </div>
        <label htmlFor="tgl_sens_mat">
          Display sensitive 18+ material
        </label>
      </div>
      <div className="usrTgl_set">
        <div onClick={tgl_blr_post} style={{ backgroundColor: isToggledBlrPost ? '#ccc' : '#ccc', borderColor: isToggledBlrPost ? '#999' : '#999' }}>
          <div style={{ backgroundColor: isToggledBlrPost ? 'rgb(128, 73, 73)' : '#fff', left: isToggledBlrPost ? '32px' : '1px', boxShadow: isToggledBlrPost ? '0 0 5px rgb(128, 73, 73)' : 'none' }} />
        </div>
        <label htmlFor="tgl_blr_post">
          Blur sensitive 18+ material
        </label>
      </div>
    </Fragment>
  );
};