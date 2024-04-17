import React, { Fragment } from 'react';

export default function ChangeYourPassword() {

    return (
      <Fragment>
        <div style={{ width: '100%'}}>
          <label htmlFor="baseName" style={{ margin: '0px 0px 10px 0px' }}>current password</label>
          <input 
            type="password" 
            id="password_1" 
            name="password_1" 
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ width: '100%'}}>
          <label htmlFor="password_2a" style={{ margin: '0px 0px 10px 0px' }}>New password</label>
          <input 
            type="password" 
            id="password_2a" 
            name="password_2a" 
            placeholder='At least 8 characters, at least 1 number and at least 1 letter, 1 upper and 1 lower case letter'
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ width: '100%'}}>
          <label htmlFor="password_3a" style={{ margin: '0px 0px 10px 0px' }}>Re-type New password</label>
          <input 
            type="password" 
            id="password_3a" 
            name="password_3a" 
            placeholder='At least 8 characters, at least 1 number and at least 1 letter, 1 upper and 1 lower case letter'
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ width: '100%'}}>
          <input type="submit" value="Change Password" />
        </div>
      </Fragment>
    );
};