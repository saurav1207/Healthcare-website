import React from "react";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "./../Data/data";


import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message, Avatar } from "antd";
const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  // =========== doctor menu ===============
  const doctorMenu = [
    {
      name: "Dashboard",
      path: "/",
      icon: "fa-solid fa-house",
    },
    {
      name: "Appointments",
      path: "/doctor-appointments",
      icon: "fa-solid fa-list",
    },

    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "fa-solid fa-user",
    },
  ];
  // =========== doctor menu ===============

  // redering menu list
  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
      ? doctorMenu
      : userMenu;
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6 className="text-light">Doc-Xpert</h6>
              <hr />
            </div>
            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
              <div className={`menu-item `} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="header">
              <div className="header-content" style={{ display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "1rem" }}>
                <div style={{ marginRight: "auto" }}>
                  <button className="mt-3 btn btn-primary" onClick={() => navigate("/video-call")} style={{ marginRight: "1rem" }}>
                    <i className="fa-solid fa-video"></i>
                    Start Video Call
                  </button>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Badge count={user && user.notifcation.length} onClick={() => navigate("/notification")} style={{ marginRight: "0.5rem" }}>
                    <i className="fa-solid fa-bell"></i>
                  </Badge>
                  <Avatar src={user?.avatar || "https://www.w3schools.com/howto/img_avatar.png"} style={{ marginRight: "0.5rem" }} />
                  <Link to="/profile" style={{ marginRight: "0.25 rem" }}>{user?.name}</Link>
                </div>
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
