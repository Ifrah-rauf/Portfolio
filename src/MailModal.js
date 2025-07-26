import React, { useState } from "react";
import "./MailModal.css";

const MailModal = ({ isOpen, onClose }) => {
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple POST to Formspree
    fetch("https://formspree.io/f/xldnkqao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _to: "ifrahteachestech@gmail.com",  // fixed recipient
        email: userEmail,
        message: message,
      }),
    })
      .then(() => {
        alert("Message sent!");
        onClose();
      })
      .catch(() => alert("Error sending message."));
  };

  if (!isOpen) return null;

  return (
    <div className="mailOverlay">
      <div className="mailContainer">
        <div className="mailHeader">
          <h2>Contact Me</h2>
          <button className="fxCloseBtn" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="mailBody">
          <form onSubmit={handleSubmit}>
            <label>Your Gmail</label>
            <input
              type="email"
              required
              placeholder="youremail@gmail.com"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea
              required
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <div className="mailButtons">
              <button type="submit">Send</button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MailModal;
