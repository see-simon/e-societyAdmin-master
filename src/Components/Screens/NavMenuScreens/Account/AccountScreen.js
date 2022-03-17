import React,{useState,useRef,useEffect} from 'react';
import profile from '../../../Images/prof.png';
import '../../../Styles/AccountScreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Alert,Modal} from 'react-bootstrap';
import { Link,useHistory, } from 'react-router-dom'
import { useAuth } from '../../../../contexts/AuthContext';
import { auth } from '../../../../firebase';
import { db } from '../../../../firebase';

const AccountScreen = () => {

  const emailRef=useRef()
  const passwordRef=useRef()
  const [Firstname,setFirstname]=useState('')
    const [Phonenumber,setPhonenumber]=useState('')
    const [name, setName] = useState('');

  const {currentUser,updateEmail,updatePassword}=useAuth()
  const [error,setError]=useState('')
  const user = auth.currentUser.uid

  const [code , setCode] = useState('')

  useEffect(()=>{
    db.ref(`/user/`+ user).on('value',snap=>{
      
      setFirstname(snap.val() && snap.val().Firstname);
  setPhonenumber(snap.val().Phonenumber)
  setCode(snap.val().societyCode)
setName(snap.val().SocietyName)

    })
    
  },[])

  const history = useHistory()
  const  handleSubmit= (e)=>{
    e.preventDefault()
    
    const promises=[]
    
    setError('')

    if (emailRef.current.value !== currentUser.email){
        promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value !== currentUser.email){
        promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then(()=>{
        history.push('/')
    }).catch(()=>{
        setError('failed to update account')
    })
    
  }

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShowModal = () => setShow(true);



  return <div className="container-fluid account-main-container m-0 p-0">
      <h4 className="fw-bold p-4 text-secondary">ACCOUNT DETAILS</h4>

      <div className="container-fluid inputs-con mt-5">
        <Form className="m-5">

            <div className="mb-4 mt-5 w-75 input-in">
            {error && <Alert variant="danger">{error}</Alert>}
                  <label for="exampleInputEmail1" class="form-label acc-label">Society Pin</label>
                  <div className="acc-icon-input"> </div>
                  <input type="email" 
                  class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder={code}></input>
              </div>

              <div className="mb-4 mt-2 w-75 input-in">
                  <label for="exampleInputEmail1" class="form-label acc-label">Society Email Address</label>
                  <div className="acc-icon-input"><i class="bi bi-envelope-fill"></i></div>
                  <input type="email" ref={emailRef} required defaultValue={currentUser?.email}
                   class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='lawrencesekgoka085@gmail.com'></input>
              </div>

              <div className="mb-4 mt-2 w-75 input-in">
                  <label for="exampleInputEmail1" class="form-label acc-label">Society Name</label>
                  <div className="acc-icon-input"><i class="bi bi-person-fill"></i> </div>
                  <input type="tel" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder={name}></input>
              </div>

              <div className="mb-4 mt-2 w-75 input-in">
                  <label for="exampleInputEmail1" class="form-label acc-label">Password</label>
                  <div className="acc-icon-input"><i class="bi bi-lock-fill"></i></div>
                  <input type="password" ref={passwordRef} disabled  
                  class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='**************'></input>
                  <div className="acc-icons-edit text-primary">
                    {/* <button onclick={handleShow} className="btn btn-primary">Edit</button> */}
                    <Button type="button" onClick={handleShowModal} className="edit-password-btn">Edit</Button>
                  </div>

                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Change Password</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>please enter your new password below and confirm it.</Modal.Body>

                      <div className="m-3">
                        <div className="acc-icon-input"><i class="bi bi-lock-fill"></i></div>
                        <input type="password" ref={passwordRef} required  
                        class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='New Password'></input>
                      </div>

                      <div className="m-3">
                        <div className="acc-icon-input"><i class="bi bi-lock-fill"></i></div>
                        <input type="password" ref={passwordRef} required  
                        class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Confirm Password'></input>
                      </div>
                      <Modal.Footer>

                        <Button variant="secondary" onClick={handleClose}>
                          Cancel
                        </Button>

                        <Button variant="danger" onClick={handleClose}>
                          Save Changes
                        </Button>

                      </Modal.Footer>
                    </Modal>
              </div>

              <Button type="submit" className="btn d-block acc-update-btn mt-4">UPDATE DETAILS</Button>

        </Form>
      </div>
  </div>;
};

export default AccountScreen;
