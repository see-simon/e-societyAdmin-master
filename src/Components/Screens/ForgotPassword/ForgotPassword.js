import React from "react";
import Logo from '../../Images/logo.png';
import '../../Styles/ForgotScreen.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Card,Form,Button} from 'react-bootstrap';

const ForgotPassword = () => {
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
                            <p>Please enter your registered email address to receive email reset link.</p>
                        <hr className="p-0 m-0 hor-line"/>
                    </div>

                    <div className="inputs mt-3 justify-content-center align-items-center tex-center">
                        <Form className="form pe-5 ps-5 mt-4 w-75">

                            <div className="mb-4 input-in">
                                <div className="acc-icon-input"><i class="bi bi-envelope-fill"></i></div>
                                <input type="email" class="form-control" id="userEmailAccount" aria-describedby="userEmail" placeholder='Enter Email Address'></input>
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
