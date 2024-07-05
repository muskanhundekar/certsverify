import React from "react";
import "./GenCert.css";
import logo from "../assets/logo.png";
import qr from "../assets/qr.png";

export default function Certificate({
  username,
  uid,
  certificate_type,
  description,
}) {
  return (
    <div>
      <div className="cert-div">
        <div className="top-view">
          <div className="scan-area">
            <img src={qr} alt="qr-code" className="qr-code" />
            <p className="qr-text" style={{ color: "#054554" }}>
              Scan Here to Verify Authenticity
            </p>
          </div>
          <div className="text-area">
            <p className="cert-text">CERTIFICATE</p>
            <p className="desc-text">
              OF {certificate_type?.toUpperCase() ?? "certificate_type"}
            </p>
          </div>
        </div>
        <div className="cert-abt">
          <p> THIS CERTIFICATE IS HEREBY PRESENTED TO </p>
          <p className="cert-name" id="cert-name" style={{ color: "#638f42" }}>
            {username}
          </p>
          <h3 className="text1">
            {description ?? "For end-to-end participation in the"}
          </h3>
          <p className="text">
            An honorable mention for extraordinary contribution
          </p>
          <p> to the project to achieve a milestone.</p>
          <p> Verification ID : {uid}</p>
        </div>
        {/* <div className="event-abt">
          <strong><p>The Event Name</p></strong>
          <p>DATE</p> 
          <p>&nbsp;</p>
          <strong>
            <p>&nbsp;</p>
          </strong>
        </div> */}
        {/* <div className="org-abt">
          <img src={logo} alt="logo" className="org-logo" />
          <hr className="line" />
          <strong>
            <p className="org-text">ORGANIZED & HOSTED BY</p>
          </strong>
        </div> */}
        <div className="o-abt">
          <img src={logo} alt="logo" className="o-logo" />
          {/* <hr className="line" /> */}
          <strong></strong>
        </div>
      </div>
    </div>
  );
}
