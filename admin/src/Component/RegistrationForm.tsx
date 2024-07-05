import { useRef, useState } from "react";
import Regsistration_formApi from "../Api/Regsistration_form.api";

export default function RegistrationForm(): JSX.Element {
  const modalButtonRef = useRef<HTMLButtonElement>(null);
  const [modalState, setModalState] = useState({
    name: "",
    uuid: "",
  });
  const submitButtonHandler = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const res = await Regsistration_formApi.createNewCertificate(data);
      const response = res.data as string[];
      setModalState({
        name: `${response[0]} ${response[1]}`,
        uuid: response[2],
      });
      modalButtonRef.current?.click();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container form_box " style={{ marginTop: "2rem" }}>
      <form onSubmit={submitButtonHandler} id="registration_form">
        <div className="container row" style={{ width: "100%" }}>
          <input
            type="text"
            className="second"
            style={{ width: "30%" }}
            id="fname"
            name="fname"
            placeholder="First Name"
          />

          <input
            type="text"
            className="second"
            style={{ width: "30%", marginLeft: "5%" }}
            id="lname"
            name="lname"
            placeholder="Last Name"
          />
          <input
            type="text"
            className="second"
            style={{ width: "30%", marginLeft: "5%" }}
            id="lname"
            name="certificate_type"
            placeholder="Certificate Type"
          />
        </div>
        <br />
        <div className="container row" style={{ width: "100%" }}>
          <input
            type="text"
            className="second"
            style={{ width: "30%" }}
            id="city"
            name="city"
            placeholder="City"
          />
          <input
            type="text"
            className="second"
            style={{ width: "30%", marginLeft: "5%" }}
            id="state"
            name="state"
            placeholder="State"
          />
          <input
            type="text"
            className="second"
            style={{ width: "30%", marginLeft: "5%" }}
            id="country"
            name="country"
            placeholder="Country"
          />
        </div>
        <br />
        <div className="container row" style={{ width: "100%" }}>
          <textarea
            className="second"
            style={{ width: "100%" }}
            id="address"
            name="address"
            rows={3}
            placeholder="Address"
          />
        </div>
        <br />
        <div className="container row" style={{ width: "100%" }}>
          <textarea
            className="second"
            style={{ width: "100%" }}
            id="description"
            name="description"
            rows={3}
            placeholder="Description"
          />
        </div>
        <br />
        <div className="container row" style={{ width: "100%" }}>
          <input
            type="text"
            className="third"
            id="mob"
            name="mob"
            placeholder="Mobile"
          />
          <input
            type="text"
            className="third"
            style={{ marginLeft: "20%" }}
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <br />
        <div className="container row" style={{ width: "100%" }}>
          <input
            type="text"
            className="third"
            id="univ"
            name="univ"
            placeholder="University Name"
          />
          <input
            type="text"
            className="third"
            style={{ marginLeft: "20%" }}
            id="degree"
            name="degree"
            placeholder="Degree"
          />
        </div>
        <br />
        <div className="container row" style={{ width: "100%" }}>
          <input
            type="text"
            className="third"
            id="ename"
            name="ename"
            placeholder="Event Name"
          />
          <input
            className="third"
            style={{ marginLeft: "20%" }}
            type="date"
            id="edate"
            name="edate"
            placeholder="Event Date"
          />
        </div>
        <br />
        <div style={{ marginLeft: "40%" }}>
          <button type="submit" formTarget="registration_form" className="sub">
            Submit
          </button>
        </div>
      </form>
      <div>
        <button
          type="button"
          className="btn d-none btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          ref={modalButtonRef}
        >
          Launch demo modal
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Success
                </h1>
              </div>
              <div className="modal-body">
                <p>Name:{modalState.name}</p>
                <p>Uuid:{modalState.uuid}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  OK
                </button>
                {/* <button type="button" className="btn btn-primary">
                  Save changes
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
