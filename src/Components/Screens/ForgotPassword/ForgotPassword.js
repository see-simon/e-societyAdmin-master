import React, { useRef, useState } from "react";
import Logo from '../../Images/logo.png';
import '../../Styles/ForgotScreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Card,Form,Button,Alert} from 'react-bootstrap';
import { useAuth } from "../../../contexts/AuthContext";
const ForgotPassword = () => {
    const emailRef =useRef()
    const {resetPassword}=useAuth()
    const [error,setError]=useState('')
    const [message,setMessage]=useState('')

    const  handleSubmit = async (e)=>{
        e.preventDefault()
        
        try{
          
          setError('')
         
          await resetPassword(emailRef.current.value)
          setMessage('Check your inbox for further instructions')
         
        } catch{
          setError('failed to reset Password')
        }
        
      }
  return <>
    <Container className="p-2 main-login-con" >
        <div className="container-xl p-5 mt-2">
            <Card className=" bg-light con-login">
                <Card.Body className="justify-content-center text-center con-login">

                <div className="icon">
                    <i class="bi bi-arrow-left icon-back text-start"></i>
                </div>
                    <img src={Logo} alt="logo"/>
                            
                    <div className="justify-content-center text-center align-items-center info-con mt-2">
                        <hr className="p-0 m-0 hor-line"/>
                        {error && <Alert variant="danger">{error}</Alert>}
                            <p>Please enter your registered email address to receive email reset link.</p>
                        <hr className="p-0 m-0 hor-line"/>
                    </div>

                    <div className="inputs mt-3 justify-content-center align-items-center tex-center">
                        <Form className="form pe-5 ps-5 mt-4 w-75" onSubmit={handleSubmit}>

                            <div className="mb-4 input-in">
                                <div className="acc-icon-input"><i class="bi bi-envelope-fill"></i></div>
                                <input type="email" required ref={emailRef}
                                 class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter Email Address'></input>
                            </div>

                            <Button type="submit" className="btn d-block acc-update-btn mt-4">SUBMIT</Button>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </Container>
  </>;
};

export default ForgotPassword;
