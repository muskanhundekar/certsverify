import React from "react";
import "./GenCert.css";
import logo from "../assets/logo.png";
import qr from "../assets/qr.png";

export default function Certificate({ username, uid }) {
  return (
    <div>
      <div class="cert-div">
        <div class="top-view">
          <div class="scan-area">
            <img src={qr} alt="qr-code" class="qr-code" />
            <p class="qr-text">Scan Here to Verify Authenticity</p>
          </div>
          <div class="text-area">
            <p class="cert-text">CERTIFICATE</p>
            <p class="desc-text">OF PARTICIPATION</p>
          </div>
        </div>
        <div class="cert-abt">
          <p> THIS CERTIFICATE IS HEREBY PRESENTED TO </p>
          <p class="cert-name" id="cert-name">
            {" "}
            {username}{" "}
          </p>
          <p> Verification ID (UUID): {uid}</p>
        </div>
        <div class="event-abt">
          <p>For end-to-end participation in the</p>
          <strong>
            {/* <p>The Event Name</p> */}
            <p></p>
          </strong>
          {/* <p>DATE</p> */}
          <p>&nbsp;</p>
          <strong>
            <p>&nbsp;</p>
          </strong>
        </div>
        <div class="org-abt">
          <img src={logo} alt="logo" class="org-logo" />
          <hr class="line" />
          <strong>
            <p class="org-text">ORGANIZED & HOSTED BY</p>
          </strong>
        </div>
      </div>
    </div>
  );
}
