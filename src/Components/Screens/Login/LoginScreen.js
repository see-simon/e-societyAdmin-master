import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/LoginScreen.css'
import { Container,Card,Form,Button,Alert} from 'react-bootstrap';
import Logo from '../../Images/logo.png';
import auth from '../../Images/login.png';
import { Link,useHistory } from 'react-router-dom'
import { useAuth } from "../../../contexts/AuthContext";

const LoginScreen = () => {
    const emailRef=useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error,setError]=useState('')
     const  history = useHistory()
     const  handleSubmit = async (e)=>{
        e.preventDefault()
        
        try{
          setError('')
          
          await login(emailRef.current.value,passwordRef.current.value)
          .then( res=>{
            try {
                
                  localStorage.setItem("user", res.user.uid)
              } catch (e) {
                // saving error
                console.log('no data')
              }
          })
          
          history.push('/societyMembers')
        } catch{
          setError('failed to sign in check Email/Password')
        }
      
      }
  return <>

    <Container className="p-2 main-login-con" >

        <div className="container-xl p-5 mt-2">
            <div className="row bg-light bg-con">
            
                <div className="col col-md-7">
                    <Card className="con-login">
                        <Card.Body className="justify-content-center text-center con-login">
                            <img src={Logo} alt="logo"/>
                            <h5 className="text-secondary proj-name">e-society administrator</h5>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <div className="inputs mt-3 justify-content-center align-items-center tex-center">
                                <Form className="form" onSubmit={handleSubmit}>
                                    <div className="inputs-con">
                                        <div className="mb-4 mt-5 w-75 input-in">
                                            {/* <label for="exampleInputEmail1" class="form-label acc-label">Email Address</label> */}
                                            <div className="acc-icon-input"><i class="bi bi-envelope-fill"></i></div>
                                            <input type="email" required ref={emailRef}
                                             class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='example@gmail.com'></input>
                                        </div>

                                        <div className="mb-0 w-75 input-in">
                                            {/* <label for="exampleInputEmail1" class="form-label acc-label">Email Address</label> */}
                                            <div className="acc-icon-input"><i class="bi bi-lock-fill"></i></div>
                                            <input type="password" required ref={passwordRef}
                                            class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter Password'></input>
                                        </div>
                                    </div>

                                <Button type="submit" className="btn d-block acc-update-btn mt-4">SIGN IN</Button>

                                <div className="row mt-5 w-50 m-auto">
                                    <div className="col col-md-8 ps-3">
                    <Link to='/Forgotpassword' className="text-secondary">Forgot Password?</Link>

                                        {/* <p className="text-secondary">Forgot Password?</p> */}
                                    </div>
                                    <div className="col col-md-4">
                                    
                                    {/* <p className="me-4 text-white">Create Account</p> */}
                                    </div>
                                </div>
                                </Form>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col col-md-5">
                    <h5 className="text-center p-2 text-primary fw-bold wel-txt">Welcome To e-Society Administrator Portal</h5>
                    <p className="instructions">please enter your verified credentials to login to our system.</p>
                    <img src={auth} alt="auth" className="auth-img"/>
                    <Link to='/RegisterScreen' className="me-4 text-secondary text-center login-acc">Create Account</Link>
                    {/* <p className="me-4 text-secondary text-center login-acc">Create Account</p> */}
                </div>
            </div>
        </div>

    </Container>

  </>;
};

export default LoginScreen;
