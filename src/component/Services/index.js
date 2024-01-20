import React from "react";
import "./index.css";
const Services = () => {
  return (
    <div class="background-container">
      <div className="service-Text-Container">
        <div className="m-5">
          <p className="services-header">Our Services</p>
          <p className="services-paragraph">
            Lorem ipsum dolor sit amet consectetur. Tristique pellentesque lorem
            tincidunt tortor.
          </p>
        </div>
        <div className="service-card-container">
          <div>
            <div className="servicecard-1">
              <img
                className="servicecard-image"
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705754350/icon_qo1zq1.png"
              />
              <p className="servicecard-text">Engineering</p>
            </div>
            <div className="servicecard-2">
              <img src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705755933/Featured_icon_lxll07.png" />
              <p className="servicecard-text-2">Engineering</p>
            </div>
            <div className="servicecard-2">
              <img src="https://res.cloudinary.com/drvjsegeb/image/upload/v1705755939/3_l6sbwx.png" />
              <p className="servicecard-text-2">Engineering</p>
            </div>
          </div>
          <div className="service-card-container-text">
            <p className="service-card-container-text-heading">
              Engineering Solutions
            </p>
            <p className="service-card-container-text-para">
              Lorem ipsum dolor sit amet consectetur. Tellus vitae orci nunc a
              massa arcu. Amet tortor ut leo blandit vitae scelerisque eget.
              Lorem ipsum dolor sit amet consectetur. Tellus vitae orci nunc a
              massa arcu. Amet tortor ut leo blandit vitae scelerisque
              eget.Lorem ipsum dolor sit amet consectetur.
            </p>
            <button className="service-card-container-text-btn">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
