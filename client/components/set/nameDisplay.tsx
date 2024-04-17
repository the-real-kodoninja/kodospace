import React, { useState, Fragment } from 'react';

export default function NameDisplay() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

    return (
      <Fragment>
        <p>You’re apart of the kodoverse meaning all platforms are inner connected. Post a photo on kodospace it’ll show on all platforms. Give a film ratting on kodofilms it shows on on platforms. For instance while your looking through your feed on kodotrading you can see new courses added on kodoacademy.</p>

        <p>A post will contain two @ symbols. The first being your username the second being the kodoverse post origin. You’ll know exactly where that post originated. You may set your base extension on your user profile to whichever you choose. For instance you may spend more time on kodohealth so you may want to set your base extension to @kodohealth or to none at all.</p>
        <div className="usrInp_view_1">
          <div>
          <input 
            type="radio" 
            id="username" 
            name="nameOption" 
            value="username" 
            checked={selectedOption === 'username'} 
            onChange={handleChange} 
          />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input 
            type="radio" 
            id="firstName" 
            name="nameOption" 
            value="firstName" 
            checked={selectedOption === 'firstName'} 
            onChange={handleChange} 
          />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div>
          <input 
            type="radio" 
            id="lastName" 
            name="nameOption" 
            value="lastName" 
            checked={selectedOption === 'lastName'} 
            onChange={handleChange} 
          />
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div>
          <input 
            type="radio" 
            id="firstLastName" 
            name="nameOption" 
            value="firstLastName" 
            checked={selectedOption === 'firstLastName'} 
            onChange={handleChange} 
          />
          <label htmlFor="firstLastName">First & Last Name</label>
        </div>
        <div style={{ width: '100%',  margin: '10px 0px' }}>
          <input type="text" id="nmeDisply" name="name" placeholder="Your name viewed to the kodoverse" style={{ width: '100%' }} />
        </div>
        <div style={{ width: '100%'}}>
        <label htmlFor="baseName" style={{ margin: '0px 0px 10px 0px' }}>base extension @userEXAMPLE</label>
          <input 
            type="text" 
            id="baseName" 
            name="nameOption" 
            value="baseName" 
            checked={selectedOption === 'baseName'} 
            onChange={handleChange} 
            style={{ width: '100%' }}
          />
        </div>
        </div>
      </Fragment>
    );
};