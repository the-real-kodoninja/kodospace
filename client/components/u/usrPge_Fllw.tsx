import React, { Fragment, useState, useEffect } from 'react';
import timeAgo from "../../addons/timeAgo.tsx";

function getRandomDate() {
    const startYear = 2023; // Adjust as needed (e.g., 2020 for dates since 2020)
    const endYear = new Date().getFullYear(); // Get current year
  
    const randomYear = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
  
    // Generate random month (0-11) and pad with leading zero if needed
    const randomMonth = Math.floor(Math.random() * 12).toString().padStart(2, '0');
  
    // Generate random day within the month (1-31) with padding
    const randomDay = Math.floor(Math.random() * 31) + 1;
    const paddedDay = randomDay.toString().padStart(2, '0');
  
    // Generate random hours (0-23) with padding
    const randomHours = Math.floor(Math.random() * 24).toString().padStart(2, '0');
  
    // Generate random minutes (0-59) with padding
    const randomMinutes = Math.floor(Math.random() * 60).toString().padStart(2, '0');
  
    // Create the date string in the desired format
    const randomDate = `${randomYear}-${randomMonth}-${paddedDay}T${randomHours}:${randomMinutes}:00`;
  
    return new Date(randomDate);
  }

// Reusable component for both followers and following views
const UsrFllwView = ({ user }) => {

    const { id, usrNme, usrImg, liveStat, fllwBtn } = user;

    return (
      <div key={id} className="usrFllw_Wpr">
        <img src={"img/"+usrImg} alt={usrNme} className="usrFllw_Img"/>
        <div className="usrFllw_Rgt">
            <div>{usrNme}</div> 
            <div>{timeAgo(new Date(liveStat))}</div> 
            <button className="usrFllw_Btn">{fllwBtn}</button>      
        </div>
    </div>
    );
};

export function UsrPge_Followers() {
    // backend call logic for followers goes here to load below
    const usersData = [
        { id: 1, usrNme: 'kodoninja', usrImg: 'no_imgLnk2.svg', liveStat: 2, fllwBtn: 'following' }
      ];
      
      // Filling the rest using a loop (assuming user names and image links follow a pattern)
      for (let i = 1; i <= 20; i++) {
        usersData.push({
          id: i,
          usrNme: `user${i}`,
          usrImg: `no_imgLnk2.svg`,
          liveStat: getRandomDate().toString(), // Convert to string before pushing
          fllwBtn: Math.random() > 0.5 ? 'following' : 'follow', // Random follow button state
        });
      }
      return (
        <div>
          {usersData.map((user) => (
            <UsrFllwView key={user.id} user={user} />
          ))}
        </div>
      );
}
  
export function UsrPge_Following() {
    // backend call logic for following goes here to load below
    const usersData = [
        { id: 1, usrNme: 'kodoninja', usrImg: 'no_imgLnk2.svg', liveStat: 2, fllwBtn: 'following' }
      ];
      
      // Filling the rest using a loop (assuming user names and image links follow a pattern)
      for (let i = 1; i <= 20; i++) {
        usersData.push({
          id: i,
          usrNme: `user${i}`,
          usrImg: `no_imgLnk2.svg`,
          liveStat: getRandomDate().toString(), // Convert to string before pushing
          fllwBtn: Math.random() > 0.5 ? 'following' : 'follow', // Random follow button state
        });
      }
      return (
        <div>
          {usersData.map((user) => (
            <UsrFllwView key={user.id} user={user} />
          ))}
        </div>
      );
}