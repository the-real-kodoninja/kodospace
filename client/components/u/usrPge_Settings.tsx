import React, { useState } from 'react';

// Account Information
import AccountInformation from '../set/accountInformation.tsx';
import NameDisplay from '../set/nameDisplay.tsx';
import ChangeYourPassword from '../set/changeYourPassword.tsx';
import DownloadYourData from '../set/downloadYourData.tsx';
import Membership from '../set/membership.tsx';
import DeactivateYourAccount from '../set/deactivateYourAccount.tsx';
// Privacy and safety
import YourPost from '../set/yourPost.tsx';
import NSFW from '../set/nsfw.tsx';
import BlockedUsers from '../set/blockedUsers.tsx';
import HiddenContent from '../set/hiddenContent.tsx';
// notifcations
import ReportedContent from '../set/reportedContent.tsx';
// currency
import KodoToken from '../set/kodoToken.tsx';
import KodoCoin from '../set/kodoCoin.tsx';


const menuItems = [
    {
      title: 'Your account',
      subItems: [
        { name: 'Account Information', component: AccountInformation },
        { name: 'Name Display', component: NameDisplay },
        { name: 'Change your password', component: ChangeYourPassword },
        { name: 'Download your data', component: DownloadYourData },
        { name: 'Membership', component: Membership },
        { name: 'Deactivate your account', component: DeactivateYourAccount },
      ],
    },
    {
      title: 'Privacy and Safety',
      subItems: [
        { name: 'Your post', component: YourPost },
        { name: 'NSFW Settings', component: NSFW },
        { name: 'Blocked users', component: BlockedUsers },
        { name: 'Hidden content', component: HiddenContent },
      ],
    },
    {
      title: 'Notifications',
      subItems: [
        { name: 'Reported content', component: ReportedContent },
      ],
    },
    {
      title: 'Currency',
      subItems: [
        { name: 'Kodotoken', component: KodoToken },
        { name: 'Kodocoin', component: KodoCoin },
      ],
    },
  ];

  export default function UsrPge_Settings() {
    const [selectedMainItem, setSelectedMainItem] = useState(null);
    const [selectedSubItem, setSelectedSubItem] = useState(null);
    const [showSubItems, setShowSubItems] = useState(false); // State to track visibility of sub-items
  
    const handleMainItemClick = (item) => {
      setSelectedMainItem(item);
      setSelectedSubItem(null); // Reset sub item selection
      setShowSubItems(true); // Show sub-items for the selected main item
    };
  
    const handleSubItemClick = (subItem) => {
      setSelectedSubItem(subItem);
    };
  
    const handleBackClick = () => {
      setShowSubItems(false); // Hide sub-items and show main titles again
      // setSelectedMainItem(null); // Reset main item selection
    };
  
    const renderContent = () => {
      if (!selectedSubItem) return <div>Select an item</div>;
      const ComponentToRender = selectedSubItem.component;
      return (
        <div className="usrPge_SetView_MainInr">
          <h2>{selectedMainItem.title}</h2>
          <h4>{selectedSubItem.name}</h4>
          <div className="p10"><ComponentToRender /></div>
        </div>
      );
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }} className="usrPge_SetView">
          <div className="usrPge_SetViewInr">
            {!showSubItems && (
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index} onClick={() => handleMainItemClick(item)}>
                    {item.title}
                  </li>
                ))}
              </ul>
            )}
            {showSubItems && selectedMainItem && (
              <>
                <ul>
                  {selectedMainItem.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} onClick={() => handleSubItemClick(subItem)}>
                      {subItem.name}
                    </li>
                  ))}
                  <li onClick={handleBackClick}>Back</li>
                </ul>
              </>
            )}
          </div>
          <div className="usrPge_SetView_Main">
            {renderContent()}
          </div>
        </div>
      );
    };