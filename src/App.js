// import LoginScreen from './Components/Screens/Login/LoginScreen';
import ForgotPassword from './Components/Screens/ForgotPassword/ForgotPassword';
import NavAndRouters from './Components/Screens/NavAndRoutersContainer/NavAndRouters';
import RegisterScreen from './Components/Screens/Register/RegisterScreen';
import './App.css';
import LoginScreen from './Components/Screens/Login/LoginScreen'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path="/">
    <LoginScreen/> 
                  </Route>
                  <Route exact path="/RegisterScreen">
                    <RegisterScreen/>
                  
                  </Route>
                  <Route exact path="/Forgotpassword">
                  <ForgotPassword/> 
                  </Route>
      {/* <LoginScreen/> */}
      
      {/* <ForgotPassword/> */}
      {/* <NavAndRouters/> */}
      </Switch>
    </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
