import React, { Fragment } from 'react';

export default function AccountInformation() {

    return (
      <Fragment>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="username" />
        </div>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" placeholder="first name" />
        </div>
        <div>
          <label htmlFor="lastname">last Name:</label>
          <input type="text" id="lastname" name="lastname" placeholder="last name" />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input type="email" id="email" name="email" placeholder="email" />
        </div>
        <div>
          <label htmlFor="phone">phone:</label>
          <input type="phone" id="phone" name="phone" placeholder="phone #" />
        </div>
        <div>
          <label htmlFor="bio">bio:</label>
          <textarea id="bio" name="bio" placeholder="bio"></textarea>
        </div>
        <div style={{ width: '100%'}}>
          <input type="submit" value="Update" />
        </div>
      </Fragment>
    );
};