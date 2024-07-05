import { useState, useRef } from "react";
import Regsistration_formApi from "../Api/Regsistration_form.api";
import React from 'react';
import "./reg.css"





export default function RegistrationForm() {
  const [setModalState] = useState({
    name: '',
    uuid: '',
  });
  const modalButtonRef = useRef(null);
  const submitButtonHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    try {
      const res = await Regsistration_formApi.createNewCertificate(data);
      const response = res.data;
      setModalState({
        name: `${response[0]} ${response[1]}`,
        uuid: response[2],
      });
      modalButtonRef.current?.click();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div class="container mt-3 custom-container">
      <form onSubmit={submitButtonHandler} className="form">
        <div class="row">
          <div class="col-sm-12 mx-t3 mb-4">
            <h2 class="text-center">Registration Form</h2>
          </div>
          <div class="col-sm-4 form-group" id="col">
            <label for="name-f">First Name</label>
            <input type="text" class="form-control" name="fname" id="name-f" placeholder="Enter your first name." required />
          </div>
          <div class="col-sm-4 form-group">
            <label for="name-l">Last name</label>
            <input type="text" class="form-control" name="lname" id="name-l" placeholder="Enter your last name." required />
          </div>
          <div class="col-sm-4 form-group" id="col">
            <label for="name-f">Certificate type</label>
            <input type="text" class="form-control" name="type" id="c" placeholder="type" required />
          </div>
          <div class="col-sm-4 form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" name="email" id="email" placeholder="Enter your email." required />
          </div>
          <div class="col-sm-4 form-group" id="col">
            <label for="address-1">Address</label>
            <input type="text" class="form-control custom-input" name="Locality" id="address-1" placeholder="Locality/House/Street no." required />
          </div>
          <div class="col-sm-2 form-group" id="address-2">
            <label for="address-1">Country</label>
            <input type="Country" class="form-control" name="Locality" placeholder="country" required />
          </div>
          <div class="col-sm-2 form-group" id="address-3">
            <label for="address-1">State</label>
            <input type="State" class="form-control" name="Locality" placeholder="state" required />
          </div>
          <div class="col-sm-4 form-group" id="col">
            <label for="address-1">Description</label>
            <input type="address" class="form-control" name="Locality" id="address-1" placeholder="Locality/House/Street no." required />
          </div>
          <div class="col-sm-4 form-group">
            <label for="tel">Mobile</label>
            <input type="tel" name="phone" class="form-control" id="tel" placeholder="Enter Your Contact Number." required />
          </div>
          <div class="col-sm-4 form-group" id="col">
            <label for="pass">University Name</label>
            <input type="Password" name="password" class="form-control" id="pass" placeholder="Enter your university name" required />
          </div>
          <div class="col-sm-4 form-group">
            <label for="State">State</label>
            <input type="address" class="form-control" name="State" id="State" placeholder="Enter your state name." required />
          </div>
          <div class="col-sm-4 form-group" id="col">
            <label for="pass2">Event Name</label>
            <input type="event" name="event" class="form-control" id="pass2" placeholder="Enter event name" required />
          </div>
          <div class="col-sm-4 form-group">
            <label for="pass2">Degree</label>
            <input type="text" name="cnf-password" class="form-control" id="pass2" placeholder="Enter your degree qualification" required />
          </div>
          <div class="col-sm-12" id="check">
            <input type="checkbox" class="form-check d-inline" id="chb" required /><label for="chb" class="form-check-label">&nbsp;I accept all terms and conditions.
            </label>
          </div>
          <div class="col-sm-12 form-group mb-0" id="btn">
            <button class="btn btn-primary float-right">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}