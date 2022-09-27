import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AppRoutes from "../AppRoutes";
import Sidebar from "../SideBar/Sidebar";
import SignIn from "../../Pages/SignIn";
import "../Layout/layout.css";
import Topnav from "../Topnav/Topnav";

import { useSelector, useDispatch } from "react-redux";
import ThemeAction from "../../Redux/Actions/ThemeAction";
import { useLogify } from "react-logify";

const Layout = () => {
  const { user, onLogin, onLogout } = useLogify();
  const themeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Route
          render={(props) => (
            <div
              className={`layout ${themeReducer.mode} ${themeReducer.color}`}
            >
              {!user.id && <SignIn onLogin={onLogin} />}
              {user.id && (
                <>
                  <Sidebar {...props} />
                  <div className="layout__content">
                    <Topnav userName={user?.name} onLogout={onLogout}/>
                    <div className="layout__content-main">
                      <AppRoutes />
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        />
      </BrowserRouter>
    </>
  );
};

export default Layout;
