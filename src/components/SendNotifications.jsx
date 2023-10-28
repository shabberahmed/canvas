import React, { useState } from "react";
import axios from "axios"; // Import Axios
import "../styles/send-notifications.css";

const SendNotifications = () => {
  const [notificationType, setNotificationType] = useState("Select");
  const [comment, setComment] = useState("");

  const handleNotificationTypeChange = (event) => {
    setNotificationType(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSendNotification = async () => {
    try {
      // Create a data object with the form values
      const data = {
        notificationType,
        comment,
      };

      // Send a POST request to your Node.js backend
      const response = await axios.post("https://karyakartha-server.onrender.com/api/send-notification", data);

     alert("Submitted")
      console.log(response.data);
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  };

  return (
    <>
      <div className="send-notifications-container">
        <div className="container">
          <div className="form-text">
            <h2>Send Notification</h2>
          </div>
          <div className="send-notifications-form-container">
            <select value={notificationType} onChange={handleNotificationTypeChange}>
              <option value="Select">Select</option>
              <option value="Send Notifications To All">Send Notifications To All</option>
              <option value="Send Notifications By Booth">Send Notifications By Booth</option>
            </select>

            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="10"
              placeholder="Comment"
              value={comment}
              onChange={handleCommentChange}
            ></textarea>

            <button className="btn send-notification-btn" onClick={handleSendNotification}>
              Send Notification
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendNotifications;
