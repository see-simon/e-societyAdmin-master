import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route,Switch} from 'react-router-dom';
import SideNavBar from '../SideNavBar/SideNavBar';
import AddEventsScreen from '../NavMenuScreens/AddEvents/AddEventsScreen';
import SocietyMembersScreen from '../NavMenuScreens/SocietyMembers/SocietyMembersScreen';
import PaymentScreen from '../NavMenuScreens/Payments/PaymentScreen';
import AccountScreen from '../NavMenuScreens/Account/AccountScreen';
import AboutSociety from '../NavMenuScreens/AboutSociety/AboutSociety';
import ReportScreen from '../NavMenuScreens/Reports/ReportScreen';
import ManageEvents from '../NavMenuScreens/EventsNavScreens/ManageEventsScreen/ManageEvents';
import CreateEvents from '../NavMenuScreens/EventsNavScreens/CreateEventsScreen/CreateEvents';

const NavAndRouters = ({otherNavRouters}) => {
  return <>
      <div className="container-fluid main-con">
					<div className="row p-3 m-2">

							<div className="col col-md-4 d-inline p-0 m-0 d-inline-block">
									<SideNavBar/>
							</div>

							<div className="col col-md-8 p-3">
							
									<div className="container-fluid info-con bg-light w-100 h-100 p-2">
                  <Switch>
                      {/* <Route path='/' element={<AddEventsScreen/>} exact="true"/> */}
                      <Route  exact path='/societyMembers'><SocietyMembersScreen/></Route>
                      <Route exact path='/reports' ><ReportScreen/></Route>
                      <Route  exact path='/about' ><AboutSociety/></Route>
                      <Route exact path='/account'><AccountScreen/></Route>
                      <Route exact path='/events' ><AddEventsScreen/></Route>
                      <Route path='/manage'><ManageEvents/></Route>
                      <Route path='/createEvents'><CreateEvents/></Route>
                  </Switch>
									
									</div>
							
							</div>
					</div>
				</div>
  </>;
};

export default NavAndRouters;
