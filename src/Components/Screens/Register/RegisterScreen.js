import React, { useRef, useState } from "react";
import Logo from '../../Images/logo.png';
import '../../Styles/RegisterScreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

import { useAuth } from "../../../contexts/AuthContext";
import { Link, useHistory } from 'react-router-dom'
import { db } from "../../../firebase";
import { auth } from "../../../firebase";

const RegisterScreen = () => {
    const [Phonenumber, setPhonenumber] = useState("");
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        // const {uid,emailRef,Firstname,Phonenumber,Lastname} = data
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('password do not match')
        }
        try {
            setError('')

            //   await signup(emailRef.current.value,passwordRef.current.value)
            await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
                .then(res => {
                    const user={
                        Firstname: Firstname,
                        Lastname: Lastname,
                        emailRef: emailRef.current.value,
                        Phonenumber: Phonenumber,
                        uid: res.user.uid
                    }
                      console.log(user)
                    db.ref('/user')
                    .child(res.user.uid)
                    .set(user)
                    .then((result) => {
                        console.log(result, "<<<<<<<<<<<<<<<<<<<<<<<<")
                        try {
                
                            localStorage.setItem("user", res.user.uid)
                        } catch (e) {
                          // saving error
                          console.log('no data')
                        }
                        history.push('/societyMembers')
                    }).catch((error) => {
                        console.log(error, "----------------------")
                        setError(error)
                    })
                })
        } catch (error) {
            setError('failed to create an account',)
        }


    }
    return <>

        <Container className="p-2 main-login-con w-100 h-100" >
            <div className="container-xl p-5 mt-2">
                <Card className=" bg-light con-login">
                    <Card.Body className="justify-content-center text-center con-login">
                        <img src={Logo} alt="logo" />

                        <div className="justify-content-center text-center align-items-center info-con">
                            <hr className="p-0 m-0" />
                            <p>Please enter your credentials to get started with our application</p>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <hr className="p-0 m-0" />
                        </div>

                        <div className="inputs mt-3 justify-content-center align-items-center tex-center">
                            <Form className="form pe-5 ps-5 mt-4" onSubmit={handleSubmit}>
                                <div className="inputs-con">

                                    <div className="row">
                                        <div className="col col-md-6">
                                            <div className="mb-4 input-in">
                                                <div className="acc-icon-input"><i class="bi bi-envelope-fill"></i></div>
                                                <input type="email" required ref={emailRef}
                                                    class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter Email Address'></input>
                                            </div>
                                        </div>
                                        <div className="col col-md-6">
                                            <div className="mb-4 input-in">
                                                <div className="acc-icon-input"><i class="bi bi-telephone-fill"></i></div>
                                                <input type="tel" onChange={(e) => setPhonenumber(e.target.value)}
                                                    class="form-control" id="userEmailAccount" aria-describedby="userPhone" placeholder='Enter Phone Number'></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col col-md-6">
                                            <div className="mb-4 input-in">
                                                <div className="acc-icon-input"><i class="bi bi-file-person-fill"></i></div>
                                                <input type="name" onChange={(e) => setFirstname(e.target.value)}
                                                    class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter First Name'></input>
                                            </div>
                                        </div>
                                        <div className="col col-md-6">
                                            <div className="mb-4 input-in">
                                                <div className="acc-icon-input"><i class="bi bi-file-person-fill"></i></div>
                                                <input type="name" onChange={(e) => setLastname(e.target.value)}
                                                    class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter Last Name'></input>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col col-md-6">
                                            <div className="mb-0  input-in">
                                                <div className="acc-icon-input"><i class="bi bi-file-person-fill"></i></div>
                                                <input type="password" required ref={passwordRef}
                                                    class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter Password'></input>
                                            </div>
                                        </div>
                                        <div className="col col-md-6">
                                            <div className="mb-0 input-in">
                                                <div className="acc-icon-input"><i class="bi bi-lock-fill"></i></div>
                                                <input type="password" required ref={passwordConfirmRef}
                                                    class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Password Confirm'></input>
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
