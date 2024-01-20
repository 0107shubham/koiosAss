import React from "react";
import "./index.css";
const Footer = () => {
  return (
    <div className="bg-footer-container">
      <div className="flex flex-row">
        <img src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705760961/Frame_1_mxtcis.svg" />
        <p className="com-text">Koios Engineering Solutions</p>
      </div>
      <div className="flex flex-row ">
        <p className="para-text-footer">Engineering</p>
        <p className="para-text-footer">Software</p>
        <p className="para-text-footer">Edu-Tech</p>
      </div>
      <div className="flex flex-row ">
        <p className="para-text-footer">About Us</p>
        <p className="para-text-footer">Careers</p>
      </div>
      <div class="horizontal-line"></div>
      <div className="copyright">
        <div className="flex flex-row ">
          <img
            className="m-5"
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705760954/1_vggxmj.svg"
          />
          <img
            className="m-5"
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705760949/2_sc9jx0.svg"
          />
        </div>
        <div>
          <p className="para-text-footer">© 2023 All rights reserved.</p>
        </div>
        <div className="flex flex-row items-center">
          <p className="para-text-footer">Privacy Policy</p>
          <div class="vertical-line"></div>
          <p className="para-text-footer">Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
