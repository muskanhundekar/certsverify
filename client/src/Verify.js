import React, { useState } from "react";
import Modal from "react-modal";
import ReactToPdf from "react-to-pdf";

import "./verify.css";

import Certificate from "./GeneralCert2/Certificate";
import InternCert from "./Intern/InternCert";
import AwardsCert from "./Awards/AwardsCert";

const url = "http://localhost:8000/certs/";
// const url = "http://146.190.48.141:8000/certs/";
// const url = "https://certs.thirdeyedata.io:8000/certs/";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // overflow: "scroll"
  },
};

export default function Verify() {
  const [uid, setUid] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const [popupErr, setPopupErr] = useState(false);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const ref = React.createRef();

  const options = {
    orientation: "landscape",
    unit: "in",
    format: [9, 6.3],
  };

  function closeModal() {
    setIsOpen(false);
  }

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ u_id: uid }),
  };

  const verify = () => {
    fetch(`${url}verify/`, requestOptions)
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          console.log(json.data);
          setUserData(json.data);
          setIsOpen(true);
          setPopupErr(false);
        } else if (json.status === 400) {
          setUserData({
            name: "",
            email: "",
          });
          setPopupErr(true);
        }
      }).catch((error) => {
        setPopupErr(true);
      })
      ;
  };

  return (
    <div
      className="container"
      style={{ paddingTop: "10%", overflowY: "scroll" }}
    >
      <div className="container main">
        <form>
          <label className="up-text" for="uid">
            Verify Your Certificate Id
          </label>
          <br />
          <br />
          <input
            style={{ textAlign: "center" }}
            className="input"
            type="text"
            id="uid"
            name="uid"
            onChange={(e) => setUid(e.target.value)}
            value={uid}
          />
          <br />
          <br />
        </form>
        <div
          className="btn btn-success"
          style={{ width: "200px", margin: "0 auto" }}
          onClick={() => verify()}
        >
          Verify
        </div>
      </div>
      {popupErr && (
        <div id="pop-up-err" className="container pop-up_2">
          <span style={{ fontWeight: "800" }}>
            Sorry, this certificate id is not valid!
          </span>
        </div>
      )}
      {userData.event_name == "Learning Path Program" ?
        <div id="pop-up-err" className="pop-up_3 container">
          <p className="fs-4">The UID {uid} is valid. <br /> This certificate has been issued to <span className="fs-4 fw-bold">{userData.username}</span>.</p>
        </div> :
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <div style={{ overflow: "scroll" }}>
            <div style={{ fontWeight: "800" }}>Verifed</div>
            <div ref={ref} x={0.5} y={0.5} scale={1.0}>
              {userData.certificate_type == "Internship" &&
                <InternCert
                  username={userData.username}
                  uid={uid}
                  event_name={userData.event_name}
                  event_date={userData.event_date}
                />
              }
              {userData.certificate_type == "ACHIEVEMENT" &&
                <AwardsCert
                  username={userData.username}
                  designation={userData.designation}
                  emp_id={userData.emp_id}
                  event_date={userData.event_date}
                />
              }
              {
                userData.certificate_type == "" &&
                <Certificate
                  username={userData.username}
                  certificate_type={userData.certificate_type}
                  description={userData.description}
                  uid={uid}
                />
              }
            </div>
            <br />
            <div className="">
              <button
                onClick={closeModal}
                className="btn"
                style={{ marginInline: "10px" }}
              >
                {" "}
                Close
              </button>
              <ReactToPdf targetRef={ref} filename={userData.username} options={options}>
                {({ toPdf }) => (
                  <button onClick={toPdf} className="btn">
                    Downlaod pdf
                  </button>
                )}
              </ReactToPdf>
            </div>
          </div>
        </Modal>
      }
    </div>
  );
}
