import React from "react";
import "./MailList.css";
function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, Save money!</h1>
      <div className="mailInputContainer">
        <input type="text" placeholder="your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default MailList;
