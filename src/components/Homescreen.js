import React, {useState, useEffect} from 'react'
import Typewriter from "typewriter-effect";
import logo from '../myimage.jpg';

const Homescreen = () => {

    const roles = ["MOBILE DEVELOPER", "FULL STACK DEVELOPER", "MERN STACK DEVELOPER"];
    const [role, setRole] = useState(roles[0]);

    useEffect(() => {
        let var1 = 0;
        const interval = setInterval(() => {
            if(var1 < roles.length-1) {
                var1++;
            }
            else{
                var1 = 0;
            }
            setRole(roles[var1])
          
        }, 2000);
        return () => clearInterval(interval);
      }, []);



    return (
        <div className="container-fluid" id="maindiv">
            <div className="col-9" id="second_container">
            <img src={logo} className="userimage my-3" id="mobileuser" alt="MyImage" />
            <h1 className="myname" style={{color:"skyblue"}}>
            <Typewriter
  
  onInit={(typewriter)=> {

  typewriter
   
  .typeString("VIKASH GUPTA")
  .start();
  }}
  />

            </h1>
            <hr className="bg-white" style={{width: "30rem"}} />
            <br />
            <h3 className="text-white text-start mt-4">{role}</h3>
            </div>
        </div>
    )
}

export default Homescreen
