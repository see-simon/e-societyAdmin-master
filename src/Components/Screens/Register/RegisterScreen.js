import React,{useRef,useState} from "react";
import Logo from '../../Images/logo.png';
import '../../Styles/RegisterScreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Card,Form,Button} from 'react-bootstrap';

import { useAuth } from "../../../contexts/AuthContext";
import { Link,useHistory } from 'react-router-dom'

const RegisterScreen = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error,setError]=useState('')
  return <>

    <Container className="p-2 main-login-con w-100 h-100" >
            <div className="container-xl p-5 mt-2">
                <Card className=" bg-light con-login">  
                        <Card.Body className="justify-content-center text-center con-login">
                            <img src={Logo} alt="logo"/>
                            
                            <div className="justify-content-center text-center align-items-center info-con">
                                <hr className="p-0 m-0"/>
                                    <p>Please enter your credentials to get started with our application</p>
                                <hr className="p-0 m-0"/>
                            </div>
                           
                            <div className="inputs mt-3 justify-content-center align-items-center tex-center">
                                <Form className="form pe-5 ps-5 mt-4">
                                    <div className="inputs-con">
                                        
                                        <div className="row">
                                            <div className="col col-md-6">
                                                <div className="mb-4 input-in">
                                                    <div className="acc-icon-input"><i class="bi bi-envelope-fill"></i></div>
                                                    <input type="email" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter Email Address'></input>
                                                </div>
                                            </div>
                                            <div className="col col-md-6">
                                                <div className="mb-4 input-in">
                                                        <div className="acc-icon-input"><i class="bi bi-telephone-fill"></i></div>
                                                        <input type="tel" class="form-control" id="userEmailAccount" aria-describedby="userPhone" placeholder='Enter Phone Number'></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col col-md-6">
                                                <div className="mb-4 input-in">
                                                        <div className="acc-icon-input"><i class="bi bi-file-person-fill"></i></div>
                                                        <input type="name" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter First Name'></input>
                                                </div>
                                            </div>
                                            <div className="col col-md-6">
                                                <div className="mb-4 input-in">
                                                        <div className="acc-icon-input"><i class="bi bi-file-person-fill"></i></div>
                                                        <input type="name" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter Last Name'></input>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col col-md-6">
                                                <div className="mb-0  input-in">
                                                    <div className="acc-icon-input"><i class="bi bi-file-person-fill"></i></div>
                                                    <input type="password" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter Password'></input>
                                                </div>
                                            </div>
                                            <div className="col col-md-6">
                                                <div className="mb-0 input-in">
                                                    <div className="acc-icon-input"><i class="bi bi-lock-fill"></i></div>
                                                    <input type="password" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Password Confirm'></input>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>

                                <Button type="submit" className="btn d-block acc-update-btn mt-4">SIGN UP</Button>

                                <div className="row mt-5 w-50 m-auto">
                                    <div className="col col-md-8 ps-3">
                                        <p className="text-secondary">Already have an account? Sign In</p>
                                    </div>
                                    <div className="col col-md-4">
                                    
                                     
                                    </div>
                        </div>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </Container>
      

  </>;
};

export default RegisterScreen;
