import React,{useEffect,useState} from 'react';
import { auth,db } from '../../../../../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Alert} from 'react-bootstrap';
const ManageEvents = () => {
  const [Firstname,setFirstname]=useState('')
  const user = auth.currentUser.uid
  useEffect(()=>{
    db.ref(`/user/`+ user).on('value',snap=>{
      
      setFirstname(snap.val() && snap.val().Firstname);


    })
    
  },[])
  const values ={
    events:"",
    Price:"",
    
  
  };
  
  const [initialState,setState]=useState(values)
  const {events,Price}=initialState;       
  const handleInputChange =(e)=>{
    let {name,value}=e.target;
    setState({
        ...initialState,
        [name]:value,
    });
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    
        db.ref('Event').push(initialState)
        // history.push("/") 
        // ,(err)=>{
         // if(err){
        //    console.log(err);
       // }
  //  }
}

  return <>
      <div>
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
        
      <div className="container-xl mt-4 ms-4 p-2 w-75 h-75 ">
      <label class="text-muted">Add Events</label>
      <form onSubmit={handleSubmit}>
        <div class="input-group mb-6">
          <div class="input-group-prepend">
            <label class="input-group-text" for="gender3">Event Type</label>
          </div>
          <select class="custom-select" id="gender3">
            <option selected>Choose...</option>
            <option value={events} name="Wedding" onChange={handleInputChange}>Wedding</option>
            <option value={events} name="Party" onChange={handleInputChange} >Party</option>
          </select>

          <div className="mb-7 mt-7 w-50 input-in">
          
                  
         <input type="tel" class="form-control" name="Price" value={Price} onChange={handleInputChange} placeholder='Enter Price'></input>
              </div>
        </div>
        <Button type='submit' className="btn d-block acc-update-btn mt-4">Add Event</Button>
        </form>
        </div>
      </div>
  </>;
};

export default ManageEvents;
