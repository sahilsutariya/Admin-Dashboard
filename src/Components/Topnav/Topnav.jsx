import React from "react";
import Dropdown from "../DropDown/Dropdown";
import "../Topnav/topnav.css";
import notifications from "../../assets/JsonData/notification.json";
import { Link } from "react-router-dom";
import usericon from "../../assets/images/usericon.jpg";
import user_menu from "../../assets/JsonData/user_menus.json";
import ThemeMenu from "../ThemeMenu/ThemeMenu";

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="user" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index, onLogout) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span onClick={onLogout}>{item.content}</span>
    </div>
  </Link>
);

const Topnav = ({ userName, onLogout }) => {
  return (
    <div className="topnav">
      <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <Dropdown
            customToggle={() =>
              renderUserToggle({
                display_name: userName,
                image: usericon,
              })
            }
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index, onLogout)}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
