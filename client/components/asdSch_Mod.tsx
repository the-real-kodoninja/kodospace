import React, { Fragment, useState } from 'react';

export default function AsdSch_Mod({ isMenuToggled }) {
  const [searchText, setSearchText] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.trim() !== '') {
      setIsSearchActive(true);
    } else {
      setIsSearchActive(false);
    }
  };

  return (
    <Fragment>
      <li>
        <input
          type="search"
          placeholder="search"
          className={isMenuToggled ? 'lft_mnuTgl asdSch dN' : 'lft_mnuTgl asdSch'}
          onChange={handleSearchChange}
        />
      </li>
      {isSearchActive && (
        <div className="asdModRsl-Wpr">
          <div className="asdModRsl-Hdr">
            <span>{searchText}</span>
          </div>
          <div className="asdModRsl-Bdy">
            
          </div>
        </div>
      )}
    </Fragment>
  );
}