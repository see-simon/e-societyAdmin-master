import React from 'react';
import profile from '../../../Images/prof.png';
import '../../../Styles/AccountScreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button} from 'react-bootstrap';

const AccountScreen = () => {
  return <>
      <h4 className="fw-bold p-4 text-secondary">My Account</h4>

      <div className="container-fluid img-con">
          <img src={profile} alt="profile" className="prof-img"/>
      </div>

      <div className="container-fluid inputs-con mt-5">
        <Form className="m-5">

            <div className="mb-4 mt-5 w-75 input-in">
                  <label for="exampleInputEmail1" class="form-label acc-label">Full Names</label>
                  <div className="acc-icon-input"><i class="bi bi-person-fill"></i></div>
                  <input type="email" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Lawrence Sekgoka'></input>
              </div>

              <div className="mb-4 mt-2 w-75 input-in">
                  <label for="exampleInputEmail1" class="form-label acc-label">Email Address</label>
                  <div className="acc-icon-input"><i class="bi bi-envelope-fill"></i></div>
                  <input type="email" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='lawrencesekgoka085@gmail.com'></input>
              </div>

              <div className="mb-4 mt-2 w-75 input-in">
                  <label for="exampleInputEmail1" class="form-label acc-label">Phone Number</label>
                  <div className="acc-icon-input"><i class="bi bi-telephone-fill"></i></div>
                  <input type="tel" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='0812565362'></input>
              </div>

              <div className="mb-4 mt-2 w-75 input-in">
                  <label for="exampleInputEmail1" class="form-label acc-label">Password</label>
                  <div className="acc-icon-input"><i class="bi bi-lock-fill"></i></div>
                  <input type="tel" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='**************'></input>
                  <div className="acc-icons-edit text-primary"><p>Edit</p></div>
              </div>

              <Button type="submit" className="btn d-block acc-update-btn mt-4">UPDATE DETAILS</Button>

        </Form>
      </div>
  </>;
};

export default AccountScreen;
