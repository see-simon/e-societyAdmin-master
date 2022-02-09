import React from 'react';
import '../../../Styles/Payments.css'
const PaymentScreen = () => {
  return <>
      <div className="container-fluid mt-5">
      <h4 className="fw-bold p-4 text-secondary header">MEMBER  PAYMENTS</h4>
      <div className="mb-4 mt-2 w-50 input-in">
          <div className="acc-icon-input"><i class="bi bi-search"></i></div>
          <input type="email" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Search members payments'></input>
      </div>  

      <div className="row mt-3">
        <div className="col col-md-2 bg-primary">Member ID</div>
        <div className="col col-md-2 bg-danger">Name</div>
        <div className="col col-md-2 bg-success">Email</div>
        <div className="col col-md-2 bg-secondary">Phone Number</div>
        <div className="col col-md-2 bg-dark">Amount Paid</div>
        <div className="col col-md-2 bg-warning">Payment Date</div>
      </div>

      </div>
  </>;
};

export default PaymentScreen;
