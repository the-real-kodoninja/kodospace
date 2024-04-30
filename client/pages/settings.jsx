import React, { Fragment, useState, useEffect } from 'react'
import MHeader from '../components/header.tsx'; 
import Lft_menu from '../components/lft_menu.tsx'; 
import axios from 'axios';
// post global modules
import PstGlb_Mod from '../components/m/pstGlb_mod.tsx';
import ChatMsg_Mod from '../components/media/chatMsg.tsx';
// Account Information
import AccountInformation from '../components/set/accountInformation.tsx';
import NameDisplay from '../components/set/nameDisplay.tsx';
import ChangeYourPassword from '../components/set/changeYourPassword.tsx';
import DownloadYourData from '../components/set/downloadYourData.tsx';
import Membership from '../components/set/membership.tsx';
import DeactivateYourAccount from '../components/set/deactivateYourAccount.tsx';
// Privacy and safety
import YourPost from '../components/set/yourPost.tsx';
import NSFW from '../components/set/nsfw.tsx';
import BlockedUsers from '../components/set/blockedUsers.tsx';
import HiddenContent from '../components/set/hiddenContent.tsx';
// notifcations
import ReportedContent from '../components/set/reportedContent.tsx';
// currency
import KodoToken from '../components/set/kodoToken.tsx';
import KodoCoin from '../components/set/kodoCoin.tsx';

 
export default function SettingsApp () {

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


  const [selectedMainItem, setSelectedMainItem] = useState(menuItems[0]); // Set to first main item by default
  const [selectedSubItem, setSelectedSubItem] = useState(menuItems[0].subItems[0]); // Set to first sub-item of the first main item by default
  const [showSubItems, setShowSubItems] = useState(false); // State to track visibility of sub-items
const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    // This effect runs once on mount to set the default selected item
    handleMainItemClick(menuItems[0]); // Automatically select the first main item on load
    handleSubItemClick(menuItems[0].subItems[0]); // Automatically select the first sub-item on load
  }, []);

	

  const handleMainItemClick = (item) => {
    setSelectedMainItem(item);
    setSelectedSubItem(item.subItems[0]); // Automatically select the first sub-item of the new main item
    setShowSubItems(true); // Show sub-items for the selected main item
  };

  const handleSubItemClick = (subItem) => {
    setSelectedSubItem(subItem);
  };

  const handleBackClick = () => {
    setShowSubItems(false); // Hide sub-items and show main titles again
    // Optionally reset to default main and sub item if you want to go back to the initial state
    // setSelectedMainItem(menuItems[0]);
    // setSelectedSubItem(menuItems[0].subItems[0]);
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
        <Fragment>
            <MHeader/>
            <main>
                <Lft_menu/>
                <div className="cntr_wrp p10">
                    <div className="usrPge_SetView glbl-PULL">
                        <div className="usrPge_SetViewInr">
                        {!showSubItems && (
                          <ul>
                            {menuItems.map((item, index) => (
                            <li
                            key={index}
                            onClick={() => {
                              handleMainItemClick(item);
                              setSelectedItem(item);
                            }}
                            className={`${selectedItem && selectedItem.id === item.id? 'active1' : ''}`}
                          >
                            {item.title}
                            </li>
                            ))}
                          </ul>
                          )}
                          {showSubItems && selectedMainItem && (
                            <>
                              <ul>
                          {selectedMainItem.subItems.map((subItem, subIndex) => (
                            <li
                            key={subIndex}
                            onClick={() => {
                              handleSubItemClick(subItem);
                              setSelectedItem(subItem);
                            }}
                            className={`${selectedItem && selectedItem.id === subItem.id? 'active1' : ''}`}
                          >
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
                </div>
            </main>
			<ChatMsg_Mod/>
            <PstGlb_Mod/>
        </Fragment>
    );
}
