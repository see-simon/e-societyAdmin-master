import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import '../../../Styles/AboutSocietyScreen.css';

const AboutSociety = () => {
  return <>
      <div className="notification text-end p-4">
          <i class="bi bi-bell-fill not-icon text-white"></i>
      </div>
      
      <h4 className="fw-bold p-4 text-secondary header">ABOUT SOCIETY</h4>

      <div className="container-xl m-5">
        <Card className="w-75 society-det-con">
          <Card.Body>
            <div className="society-name-con">
                <div className="container-xl icon">
                  <i class="bi bi-people-fill soc-icon pe-3"></i>
                  <p className="society-name d-inline-block ps-2">Polite Society</p>
                </div>

                <div className="container-xl icons">
                  <i class="bi bi-file-text-fill soc-icon-desc pe-3"></i>
                  <p className="society-desc d-inline-block ps-2 w-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>

                <div className="row">
                  <div className="col col-md-4">
                      <div className="container-xl icon">
                      <i class="bi bi-geo-alt-fill soc-icon-desc pe-3"></i>
                      <p className="details d-inline-block ps-2 lead">Seshego Zone 4, Polokwane, 0700</p>
                    </div>
                  </div>
                  <div className="col col-md-4">
                    <div className="container-xl icon text-end pe-2">
                      <i class="bi bi-calendar-event soc-icon-desc pe-3"></i>
                      <p className="details d-inline-block ps-2 lead">10-Jan-2021</p>
                    </div>
                  </div>
                  <div className="col col-md-4">
                      <div className="container-xl icon text-end pe-2">
                          <i class="bi bi-shield-fill-check soc-icon-desc pe-3"></i>
                          <p className="details d-inline-block ps-2 lead">tysgs***hssh</p>
                      </div>
                  </div>
                </div>
                
                <div className="notification text-end p-4">
                  <i class="bi bi-share-fill not-icon text-white"></i>
              </div>
                
            </div>
          </Card.Body>
        </Card>
      </div>
  </>;
};

export default AboutSociety;
