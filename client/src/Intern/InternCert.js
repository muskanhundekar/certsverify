import React from "react";
import "./Cert.css";
// import logo from "../assets/logo.png";
import logo from "../assets/lp-logo.png";
import qr from "../assets/qr.png";

export default function InternCert({
  username,
  uid,
  event_name,
  event_date,
  certificate_type,
}) {
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
            <p class="desc-text">OF COMPLETION</p>
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
          <p>For participating and successfully completing</p>
          <strong>
            <p className="event-desc">
              {event_name}
            </p>
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
