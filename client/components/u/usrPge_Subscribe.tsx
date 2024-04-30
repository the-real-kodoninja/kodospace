import React, { Fragment, useState, useEffect } from 'react';
import timeAgo from "../../addons/timeAgo.tsx";

export default function UsrPge_Subscribe() {
  const [subscriptionPlans, setSubscriptionPlans] = useState([
    {
      id: 1,
      level: 'basic',
      cost: '$1.99',
      desc: 'This is the basic level, perfect for casual users.',
    },
    {
      id: 2,
      level: 'premium',
      cost: '$4.99',
      desc: 'This is the next up level, with additional features.',
    },
  ]);

  // New state to track the number of displayed users
  const [displayedUsersCount, setDisplayedUsersCount] = useState(5);

  // Function to handle "Load More" button click
  const loadMoreUsers = () => {
    setDisplayedUsersCount(displayedUsersCount + 5);
  };

  const [newPlanLevel, setNewPlanLevel] = useState('');
  const [newPlanCost, setNewPlanCost] = useState('');
  const [newPlanDesc, setNewPlanDesc] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleNewPlanSubmit = async (e) => {
    e.preventDefault();

    // Replace with your actual logic to create a new plan (e.g., API call)
    // This example assumes a successful API call and updates state
    const newPlan = {
      id: subscriptionPlans.length + 1,
      level: newPlanLevel,
      cost: newPlanCost,
      desc: newPlanDesc,
    };
    setSubscriptionPlans([...subscriptionPlans, newPlan]);

    // Clear form fields and hide form after successful submission
    setNewPlanLevel('');
    setNewPlanCost('');
    setNewPlanDesc('');
    setShowCreateForm(false);
  };



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
const UsrSubView = ({ user }) => {

    const { id, usrNme, usrImg, liveStat, subType, fllwBtn } = user;

    return (
        <div key={id} className="topSupPnl_Usr">
            <div className="dI">
                <img src={"img/"+usrImg} alt={usrNme}/>
                <span>{usrNme}</span>
                <span>{timeAgo(new Date(liveStat))}</span>
            </div> 
            <div className="fR">
                <span>{subType}</span>
                <button>{fllwBtn}</button>
            </div>
        </div>
    );
};

  

  // temp user load out
  const usersData = [
    { id: 1, usrNme: 'kodoninja', usrImg: 'no_imgLnk2.svg', liveStat: 2, subType: 'basic', fllwBtn: 'following' }
  ];
  
  // Filling the rest using a loop (assuming user names and image links follow a pattern)
  for (let i = 1; i <= 20; i++) {
    usersData.push({
      id: i,
      usrNme: `user${i}`,
      usrImg: `no_imgLnk2.svg`,
      liveStat: getRandomDate().toString(), // Convert to string before pushing
      subType: Math.random() > 0.5 ? 'basic' : 'premium', // Random account type, added missing comma here
      fllwBtn: Math.random() > 0.5 ? 'following' : 'follow', // Random follow button state
    });
  }

  return (
    <Fragment>
      {subscriptionPlans.length === 0 && !showCreateForm ? (
        <div>
            You currently have no subscription plans. Have your followers subscribe to your custom tier plans however many as you'd like. You'll earn monthly as your followers will get instant access to your exclusive content for each tier.&nbsp;
            <button className="usrSubCreateBtn w100 dB p10" onClick={() => setShowCreateForm(true)}>Create a plan</button>
        </div>
        ) : null}

        {subscriptionPlans.length > 0 && (
        <Fragment>
            <div className="topSupPnl">
                <span>Top supporters</span>
                {usersData
                  .sort((a, b) => {
                    // Sort by subscription level first ('premium' before 'basic')
                    if (a.subType === 'premium' && b.subType === 'basic') return -1;
                    if (a.subType === 'basic' && b.subType === 'premium') return 1;
                    
                    // Then sort by subscription date (oldest first)
                    return new Date(a.liveStat).getTime() - new Date(b.liveStat).getTime();
                  })
                  .slice(0, displayedUsersCount) // Only display a limited number of users
                  .map((user) => (
                    <UsrSubView key={user.id} user={user} />
                  ))}
            </div>
            {displayedUsersCount < usersData.length && ( // Only show the button if there are more users to load
              <button onClick={loadMoreUsers} className="loadMoreBtn">Load More</button>
            )}
            <div className="usrSubTeir">
                <h2>Subscription Plans</h2>
                {subscriptionPlans.map((plan) => (
                <div key={plan.id} className="SubView_Wpr">
                    <div>
                    <b>{plan.level}</b>
                    </div>
                    <div>{plan.cost}</div>
                    <div className="subView_Sub">{plan.desc}</div>
                    <button className="subView_Btn">Subscribe</button>
                </div>
                ))}
            </div>
        </Fragment>
        )}
      {showCreateForm && (
        <form className="createSubTeir" onSubmit={handleNewPlanSubmit}>
        <h2>Create New Plan</h2>
        <input
          type="text"
          id="newPlanLevel"
          placeholder="Add your level: Basic?"
          value={newPlanLevel}
          onChange={(e) => setNewPlanLevel(e.target.value)}
        />
        <input
          type="text"
          id="newPlanCost"
          placeholder="Cost per month"
          value={newPlanCost}
          onChange={(e) => setNewPlanCost(e.target.value)}
        />
        <textarea
          id="newPlanDesc"
          value={newPlanDesc}
          placeholder="Description:"
          onChange={(e) => setNewPlanDesc(e.target.value)}
        />
        <button type="submit">Create Plan</button>
        <button type="button" onClick={() => setShowCreateForm(false)}>Cancel</button>
      </form>
      )}
    </Fragment>
  );
}
