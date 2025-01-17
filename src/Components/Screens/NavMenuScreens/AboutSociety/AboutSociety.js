import React, { useEffect, useState,useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Modal } from "react-bootstrap";
import "../../../Styles/AboutSocietyScreen.css";
import { db, auth } from "../../../../firebase";

import emailjs from '@emailjs/browser';


const AboutSociety = () => {
  // modal
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShowModal = () => setShow(true);
  // end of modal

  const [code, setCode] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = auth.currentUser.uid;

  useEffect(() => {
    db.ref(`/user/` + user).on("value", (snap) => {
      setCode(snap.val().societyCode);
      setAddress(snap.val().Address);
      setName(snap.val().SocietyName);
      setEmail(snap.val().emailRef);
    });
  }, []);

  console.log(name,"name")

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ygavo3m', 'template_uc4qcev', form.current, 'TIORF9RNPSLNn6teW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="container-fluid about-society-main-container">
      {/* <div className="notification text-end p-4">
          <i class="bi bi-bell-fill not-icon text-white"></i>
      </div> */}

      <h4 className="fw-bold p-4 text-secondary header mt-3">ABOUT SOCIETY</h4>

      <div className="container-xl m-1">
        <Card className="w-100 society-det-con p-3">
          <Card.Body>
            <div className="society-name-con">
              <div className="container-xl icon">
                <i class="bi bi-people-fill soc-icon pe-3"></i>
                <p className="society-name d-inline-block ps-2">
                 {name} Society
                </p>
              </div>

              <div className="container-xl icons">
                <i class="bi bi-file-text-fill soc-icon-desc pe-3"></i>
                <p className="society-desc d-inline-block ps-2 w-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="row">
                <div className="col col-md-4">
                  <div className="container-xl icon">
                    <i class="bi bi-geo-alt-fill soc-icon-desc pe-3"></i>
                    <p className="details d-inline-block ps-2 lead">
                      {/* Seshego Zone 4, Polokwane, 0700
                       */}
                       {address}
                    </p>
                  </div>
                </div>
                <div className="col col-md-4">
                  <div className="container-xl icon text-end pe-2">
                    <i class="bi bi-calendar-event soc-icon-desc pe-3"></i>
                    <p className="details d-inline-block ps-2 lead">
                      10-Jan-2021
                    </p>
                  </div>
                </div>
                <div className="col col-md-4">
                  <div className="container-xl icon text-end pe-2">
                    <i class="bi bi-shield-fill-check soc-icon-desc pe-3"></i>
                    <p className="details d-inline-block ps-2 lead">
                     {code}
                    </p>
                  </div>
                </div>
              </div>

              {/* <Button type="button" onClick={handleShowModal}> */}
              <div
                className="share-society-code-con d-flex"
                onClick={handleShowModal}
              >
                <i class="bi bi-share-fill text-white share-icon"></i>
              </div>
              {/* </Button> */}

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title className="text-danger">
                    SHARE SOCIETY ACCESS TOKEN
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex m-0 p-0">
                  <p className="lead mx-auto m-0 p-0">
                    You are about to share society access token/society code.
                  </p>
                  </div>
                  
                  {/*<div className="modal-icons">
                    <i class="bi bi-whatsapp text-success media-icon"></i>
                    <i class="ps-4 ms-2 bi bi-envelope-fill media-icon text-success"></i>
                    <i class="ps-4 ms-2 bi bi-chat-left-text-fill media-icon text-success"></i>
                  </div> */}

                  <form style={{ flex: 1}} ref={form} onSubmit={sendEmail}>
                    <div className= "container-xl bg-light w-100 p-0 m-0">
                      <div className="d-flex pt-2 m-0">

                      <div className="d-block me-2 w-100">
                        <label className="d-block">Name</label>
                        <input type="text" name="user_name" className="w-100"/>
                      </div>

                      <div className="d-block w-100">
                        <label className="d-block">Email</label>
                        <input type="email" name="user_email" className="w-100"/>
                      </div>  
                        
                      </div>
                      

                      <div className="pe-4">
                      <div className="d-block w-100 pe-5">
                        <label className="d-none">Message</label>
                        <textarea name="message" id="code" className="w-100 h-0 ps-2 pt-2 me-5" 
                        placeholder={code}
                        // disabled
                        value={code}
                        />
                      </div>
                      </div>
                     

                      <div className="p-0 m-0 d-flex">
                        <input type="submit" value="Send" className="w-50 btn p-0 mx-auto m-0" id="code-btn"/>
                      </div>

                    </div>
                    
                  </form>
    
                </Modal.Body>
              </Modal>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AboutSociety;
