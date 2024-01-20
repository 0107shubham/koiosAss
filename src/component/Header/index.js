import React from "react";
import "./index.css";
const Header = () => {
  return (
    <div className="bg-container">
      <div className="flex flex-row items-center ml-6">
        <img src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705675647/Frame_1_jk0ed9.svg" />
        <p className="companyname">Koios Engineering Solutions</p>
      </div>
      <div className="elmnt-bg-container">
        <div className="element-container">
          <p className="header-element">Engineering</p>
          <img src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705678416/01_align_center_amhpmi.svg" />
        </div>
        <div className="element-container">
          <p className="header-element">Software</p>
          <img src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705678416/01_align_center_amhpmi.svg" />
        </div>
        <div className="element-container">
          <p className="header-element">Edu-Tech</p>
          <img src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705678416/01_align_center_amhpmi.svg" />
        </div>
        <div className="element-container">
          <p className="header-element">About Us</p>
        </div>
        <div className="element-container-contact">
          <p className="header-element-contact">Contact Us</p>
          <img src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705680403/01_align_center_1_saz30v.svg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
