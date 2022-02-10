import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import '../../../Styles/SocietyMembers.css'

const SocietyMembersScreen = () => {
  return <>

      <div className="notification text-center p-4 mt-2">
            <i class="bi bi-shield-fill-check ver-icon"></i>
      </div>

      <div className="mt-4 p-2 w-75 m-auto">
        <div className="info-icon bg-white">
          <i class="bi bi-info-circle pe-2 pt-2"></i>
          <p className="d-inline-block pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
        </div>
      </div>

      <div className="container-xl mt-4">

        <Card className="w-75 m-auto member-con">
          <Card.Body>
            <div className="container-xl">
            <i class="bi bi-person-fill text-secondary mem-icon"></i>
            <p className="d-inline-block ps-3">Maluleka Lebo Lovers</p>
            <p className="ps-1 mem-email">loversMjolo@gmail.com</p>
            </div>
            <i class="bi bi-chevron-right mem-info-con"></i>
          </Card.Body>
        </Card>

      </div>

  </>;
};

export default SocietyMembersScreen;