import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';
import '../../../Styles/SocietyMembers.css'
import { useHistory,useParams} from 'react-router-dom';
import { db } from '../../../../firebase';
const SocietyMembersScreen = () => {
  let currentId = useParams();
    const {id}=currentId;
  const [user,setUser] = useState({});
  useEffect(()=>{
      db.ref('/user/').on("value",(snapshot)=>{
          setUser({
              ...snapshot.val(),
          })
          
      })
  },[]);
  return <>

      <div className="notification text-center p-4 mt-2 d-flex mx-auto">
            <i class="bi bi-shield-fill-check ver-icon"></i>
      </div>

      <div className="mt-4 p-1 w-75 m-auto info-con p-0">
        <div className="info-icon d-flex m-0 ">
          <i class="bi bi-info-circle ps-3 pe-2 pt-2"></i>
          <p className="d-inline-block pt-2">List of society members </p>
        </div>
      </div>

      <div className="container-xl mt-4">
        
          { Object.keys(user).map((id,index)=>{
              return(
                <>
                <Card className="w-75 m-auto member-con">
          <Card.Body>
            <div className="container-xl">
            <i class="bi bi-person-fill text-secondary mem-icon"></i>
               
                <p className="d-inline-block ps-3">{user[id].Firstname}</p>
                <p className="ps-1 mem-email">{user[id].email}</p>
              
            </div>
            <i class="bi bi-chevron-right mem-info-con"></i>
            </Card.Body>
        </Card>
            </>
            )
            
              })}
          

      </div>

  </>;
};

export default SocietyMembersScreen;
