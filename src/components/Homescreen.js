import React, { useState, useEffect } from 'react'
import Typewriter from "typewriter-effect";
import logo from '../myimage.jpg';

const Homescreen = () => {

    const roles = ["MOBILE DEVELOPER", "FULL STACK DEVELOPER", "MERN STACK DEVELOPER"];

    var [count, setCount] = useState(0);
    const [role, setRole] = useState(roles[count]);
    console.log(roles);

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < roles.length) {
                count+=1
                setCount(count);
            }
            else {
                setCount(0);
            }
            setRole(roles[count-1]);

        }, 1500);
        return () => clearInterval(interval);
    });



    return (
        <div className="container-fluid p-3" id="maindiv">
            <div className="mx-0 my-3" id="profileDetails">
                <img src={logo} className="userimage my-3" id="mobileuser" alt="MyImage" />
                <h1 className="myname" style={{ color: "skyblue" }}>
                    <Typewriter onInit={(typewriter) => {
                            typewriter.typeString("VIKASH GUPTA").start();
                        }}
                    />
                </h1>
                <hr className="bg-white w-50" />
                <br />
                <h3 className="text-white mt-4">{role}</h3>
            </div>
        </div>
    )
}

export default Homescreen
