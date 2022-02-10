import React ,{useState,useEffect}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import {Routes,Route,Switch} from 'react-router-dom';
import '../../../Styles/AddEvents.css'
import CreateEvents from '../EventsNavScreens/CreateEventsScreen/CreateEvents';
import EventReports from '../EventsNavScreens/EventsReportsScreen/EventReports';
import ManageEvents from '../EventsNavScreens/ManageEventsScreen/ManageEvents';
import { auth,db } from '../../../../firebase';
import { useAuth } from '../../../../contexts/AuthContext';
const AddEventsScreen = () => {
  const [Firstname,setFirstname]=useState('')
  const user = auth.currentUser.uid
  useEffect(()=>{
    db.ref(`/user/`+ user).on('value',snap=>{
      
      setFirstname(snap.val() && snap.val().Firstname);


    })
    
  },[])
  return <>
    
    {/* icon */}
    <div className="notification text-end p-4">
          <i class="bi bi-bell-fill not-icon text-white"></i>
    </div>
        <h4 className="fw-bold p-4 text-secondary header">WELCOME BACK</h4>
        <h6 className="fw-bold p-4 name">{Firstname}</h6>
        
      {/* <hr/> */}
      <div className="container-xl">
        <ul>
          <li className="p-0 m-0 list-events d-inline-block">
              <a href="/"> 
                  <p className="text-secondary text-start links d-inline-block">Create Events</p>
              </a>
          </li>

          <li className="ps-4 ms-4 list-event d-inline-block">
              <a href="/manage"> 
                  <p className="text-secondary text-start links d-inline-block">Manage Events</p>
              </a>
          </li>

          <li className="ps-4 ms-4 list-event d-inline-block">
              <a href="/eventReport"> 
                  <p className="text-secondary text-start links d-inline-block">Events Reports</p>
              </a>
          </li>

        </ul>
      </div>

      <hr className="me-4 ms-4"/>
        
      <div className="container-xl mt-4 ms-4 p-2 w-75 h-75">
        <Card className="events-con p-0 m-0 h-75">
          <Card.Body>
          <Switch>						
        <Route exact path="/" ><CreateEvents/></Route> 
                <Route exact path="/manage"><ManageEvents/></Route> 
                <Route exact path="eventReport" ><EventReports/></Route>
                <Route exact path="createEvents"><CreateEvents/></Route> 
              
              </Switch>
          </Card.Body>
        </Card>
      </div>


  </>;
};

export default AddEventsScreen;
