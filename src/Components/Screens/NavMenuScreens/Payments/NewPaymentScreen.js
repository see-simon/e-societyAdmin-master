import React ,{useEffect,useState}from 'react';
import '../Payments/style.css';
import { db } from '../../../../firebase';
import Table from "react-bootstrap/Table";
const NewPaymentScreen = () => {
  const [Payment, setPayment] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [Firstname,setFirstname]=useState('')

  // useEffect(()=>{
  //   db.ref('payment').on("value",(snapshot)=>{
  //     setPayment({
  //           ...snapshot.val(), 
  //       })
        
  //   })
  //   console.log(Payment," simon thobejane")
  // },[])

  useEffect(()=>{
    // db.ref(`/payment/`).on('value',snap=>{
      
    //   setFirstname(snap.val() && snap.val().Firstname);


    // })
    db.ref('payment').on('value',snap=>{
      
      setPayment({...snap.val() });
      

    }) 
  },[])

console.log(bookings,'simom')
  return (
    <div className="container-fluid m-0 bg-light pt-3"> 
    <div className="container-fluid">
      <h4 className="fw-bold text-secondary text-center">MEMBER  PAYMENTS</h4>
      <div className="mb-4 mt-2 w-50 input-in">
          <div className="acc-icon-input"><i class="bi bi-search"></i></div>
          <input type="email" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Search members payments'></input>
      </div>  

      <div className="row">
       
        <div className="col col-md-2 bg-light pay-table">Member ID</div>
        <div className="col col-md-2 bg-light pay-table">Name</div>
        <div className="col col-md-2 bg-light pay-table">Email</div>
        <div className="col col-md-2 bg-light pay-table">Phone Number</div>
        <div className="col col-md-2 bg-light pay-table">Amount Paid</div>
        <div className="col col-md-2 bg-light pay-table">Payment Date</div>
      </div>

    

       {/* {
        Payment.map((id,element) => 
        <h1>
          {element[id].Price}
        </h1>
        )
      }  */}
      <div className="container m-0 p-2 h-75 w-100">
        
          {Payment ? (
        <Table
          striped
          bordered
          hover
          size="sm"
          style={{ marginTop: "10px", width: "100%" }}
        >
          <thead>
            <tr>
              <th>Member ID</th>
              <th>Name</th>
              <th>Email</th>
              
              <th>Event type</th>
              <th>Amount Paid</th>
              <th>Payment Date</th>
              
            </tr>
          </thead>
          <tbody>
            {Object.keys(Payment).map((id,payment) => (
              <tr key={payment.id}>
              <>
                <>
                  <td>{Payment[id].uid}</td>
                  <td>{Payment[id].name}</td>
                  <td>{Payment[id].email}</td>
                  
                  <td>{Payment[id].eventtype}</td>
                  <td>{Payment[id].fee}</td>
                  <td>{Payment[id].Cdate}</td>
                  
                 
                  
                </>
                </>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="container roomerror">
          <div className="row my-5">
            <div className="col-md-6 col-12 mx-auto">
              <div className="card shadow-lg border-0 p-4 error">
                <h1 className="text-center display-4">No bookings.</h1>
                
              </div>
            </div>
          </div>
        </div>
      )}

      </div>

</div>
    </div>
  )
}

export default NewPaymentScreen