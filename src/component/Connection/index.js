import React from "react";
import "./index.css";
const Connection = () => {
  return (
    <div className="bg-Connection">
      <div className="Connection-img">
        <img src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705756432/Group_2_ya2nn2.svg" />
      </div>
      <p className="Connection-heading">Let’s Establish a Connection Now</p>
      <div className="connection-btn-container">
        <div className="call-btn">
          <p className="call">Call Now</p>
          <img src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705760970/Icon_ft7uo7.svg" />
        </div>
        <div className="mail-btn">
          <p className="mail">Mail to</p>
          <img src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705761015/Icon_1_hvotg8.svg" />
        </div>
      </div>
    </div>
  );
};

export default Connection;
