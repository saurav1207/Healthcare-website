import React from "react";
import Layout from "./../components/Layout";
import { message, Tabs, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/NotificationPage.css';

const NotificationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  //   handle read notification
  const handleMarkAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/get-all-notification",
        {
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("somthing went wrong");
    }
  };

  // delete notifications
  const handleDeleteAllRead = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/delete-all-notification",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Somthing Went Wrong In Ntifications");
    }
  };
  return (
    <Layout>
      {/* <h2 className="p-3 text-center">Notification Page</h2> */}
      
      <h2 className="p-3 text-center" style={{ background: "#f2f2f2", color: "#333", fontWeight: "bold", borderRadius: "8px" }}>Notification Page</h2>
      <Tabs defaultActiveKey="0">
        <Tabs.TabPane tab={<span style={{ paddingLeft: '15px' }}>UNREAD</span>} key="0">
          <div className="d-flex justify-content-end">
            <Button type="primary" style={{ marginRight: '10px' }} onClick={handleMarkAllRead}>Mark All Read</Button>
          </div>
          <div className="notification-list">
            {user?.notifcation.map((notificationMgs) => (
              <div className="notification-item" onClick={() => navigate(notificationMgs.onClickPath)}>
                <div className="notification-message">{notificationMgs.message}</div>
                <div className="notification-time">{notificationMgs.time}</div>
              </div>
            ))}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="READ" key="1">
          <div className="d-flex justify-content-end">
            <Button type="primary" style={{ marginRight: '10px' }} onClick={handleDeleteAllRead}>Delete All Read</Button>
          </div>
          <div className="notification-list">
            {user?.seennotification.map((notificationMgs) => (
              <div className="notification-item" onClick={() => navigate(notificationMgs.onClickPath)}>
                <div className="notification-message">{notificationMgs.message}</div>
                <div className="notification-time">{notificationMgs.time}</div>
              </div>
            ))}
          </div>
        </Tabs.TabPane>
      </Tabs>

    </Layout>
  );
};

export default NotificationPage;
