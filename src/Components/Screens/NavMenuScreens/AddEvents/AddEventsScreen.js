import React ,{useState,useEffect}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import {Routes,Route,Switch, Link} from 'react-router-dom';
import '../../../Styles/AddEvents.css'
import CreateEvents from '../EventsNavScreens/CreateEventsScreen/CreateEvents';
import EventReports from '../EventsNavScreens/EventsReportsScreen/EventReports';
import ManageEvents from '../EventsNavScreens/ManageEventsScreen/ManageEvents';
import { auth,db } from '../../../../firebase';
import Table from "react-bootstrap/Table";
import { useAuth } from '../../../../contexts/AuthContext';
import { useHistory,useParams} from 'react-router-dom';
import styled from "styled-components";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
const StatusTD = styled.td`
  font-weight: bold;
  color: ${(props) => (props.type === "Pending" ? "blue" : "")};
  color: ${(props) => (props.type === "Accepted" ? "green" : "")};
  color: ${(props) => (props.type === "Rejected" ? "red" : "")};
`;
const AddEventsScreen = () => {
  const [events,setEvents]=useState('')
    const [price,setFee]=useState('')
    const [description,setDescription]=useState('')
    const [location,setLocation]=useState('')
    const [date,setDate]=useState('')
    const [time,setTime]=useState('')
  const [bookings, setBookings] = useState([]);
  const [Firstname,setFirstname]=useState('')
  const [code, setCode] = useState('')
  const user = auth.currentUser.uid

  

  useEffect(()=>{

    db.ref('/user/' +user).on('value', snap=>{
      setCode(snap.val() && snap.val().societyCode)
    })

    db.ref(`/user/`+ user).on('value',snap=>{
      
      setFirstname(snap.val() && snap.val().Firstname);


    })
    db.ref('BookEvent').on('value',snap=>{
      
      setBookings({...snap.val() });
      

    }) 
  },[])
  let currentId = useParams();
  const {id}=currentId;
  console.log(code,"hfhbjvfhjjdc")
  
  const updateBooking = (bookingNumb, status) => {

    db.ref('BookEvent').child(bookingNumb).update({Status:status})
    .then(()=>db.ref('BookEvent').once('value'))
    .then(snapshot=>snapshot.val())
    .catch(error => ({
      errorCode: error.code,
      errorMessage: error.message
    }));
    //  db.ref('/BookEvent/').set(bookings[bookingNumb].Status)
    
  };
 
  return <>
    
        <h4 className="fw-bold p-4 text-secondary header mt-3">User Event Requests</h4>
        <h6 className="fw-bold p-4 name text-secondary">{Firstname}</h6>
        
      {/* <hr/> */}
      <div className="container-xl">
        <ul>
          <li className="p-0 m-0 list-events d-inline-block">
              <a href="/"> 
                  <p className="text-secondary text-start links d-inline-block">Manage Events</p>
              </a>
          </li>

          <li className="ps-4 ms-4 list-event d-inline-block">
              <a href="/manage"> 
                  <p className="text-secondary text-start links d-inline-block">Create Events</p>
              </a>
          </li>

          {/* <li className="ps-4 ms-4 list-event d-inline-block">
              <a href="/eventReport"> 
                  <p className="text-secondary text-start links d-inline-block">Events Reports</p>
              </a>
          </li> */}

        </ul>
      </div>

      <hr className="me-4 ms-4"/>
        
      <div className="container m-0 p-2 h-75 w-100">
        <Card className="events-con p-0 m-0 bg-light card-events">
          <Card.Body>
          {bookings ? (
        <Table
          striped
          bordered
          hover
          size="sm"
          style={{ marginTop: "10px", width: "100%" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Events</th>
              <th>Fee</th>
              
              <th>Description</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Status</th>
              <th>Accept</th>
              <th>Reject</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(bookings).map((id,booking) => (

           



  

              <tr key={booking.id}>
                {code == bookings[id].societyCode?(
              <>
              
               
                  <td>{id}</td>
                  <td>{bookings[id].events}</td>
                  <td>{bookings[id].price}</td>
                  
                  <td>{bookings[id].Description}</td>
                  <td>{bookings[id].date}</td>
                  <td>{bookings[id].time}</td>
                  <td>{bookings[id].location}</td>
                  <StatusTD type={bookings[id].Status}>{bookings[id].Status}</StatusTD>
                  {bookings[id].Status === "Pending" ? (
                    <>
                      <td style={{ textAlign: "center" }}>
                        <FaCheckCircle
                          color="green"
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                          }}
                          onClick={() => updateBooking(id, "Accepted")}
                        />
                      </td>
                      <td style={{ textAlign: "center" }}>
 
                        <FaTimesCircle
                          color="red"
                          style={{
                            cursor: "pointer",
                            fontSize: "20px",
                          }}
                          onClick={() => updateBooking(id, "Rejected")}
                        />
                      </td>
                    </>
                  ) : (
                    <></>
                  )}
                  
                 
                </>
                 ):(<h1></h1>)}
                 
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
          {/* <Switch>						
        <Route exact path="/" ><CreateEvents/></Route> 
                <Route exact path="/manage"><ManageEvents/></Route> 
                <Route exact path="/eventReport" ><EventReports/></Route>
                <Route exact path="/createEvents"><CreateEvents/></Route> 
              
              </Switch> */}
          </Card.Body>
        </Card>
      </div>


  </>;
};

export default AddEventsScreen;
