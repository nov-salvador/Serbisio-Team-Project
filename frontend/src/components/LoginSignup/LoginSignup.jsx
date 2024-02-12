import React, { useState } from "react";
import './Loginsignup.css'

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';


const Loginsignup = () => {

    const [action, setAction] = useState("Login"); 

    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className= {action === "Login" ? "inner-container" : "inner-container" } >
            <div className="inputs">
                {action === "Login" ? "" : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="First Name"/>
                </div>}

                {action === "Login" ? "" : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Last Name"/>
                </div>}

                {action === "Login" ? "" : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="tel" placeholder="Contact Number" pattern="[0-9]+" required/>
                </div>}

                {action === "Login" ? "" : <div className="input">
                    <img src={user_icon} alt="" />
                    {/* <input type="select" placeholder="Location"/> */}
                    <select className="location" placeholder="Location">
                    <option value="">Location</option>
                    <option value="">Caloocan City</option>
                    <option value="">Makati City</option>
                    <option value="">Malabon City</option>
                    <option value="">Mandaluyong City</option>
                    <option value="">Manila City</option>
                    <option value="">Marikina City</option>
                    <option value="">Muntinlupa City</option>
                    <option value="">Navotas City</option>
                    <option value="">Parañaque City</option>
                    <option value="">Pasay City</option>
                    <option value="">Pasig City</option>
                    <option value="">Pateros</option>
                    <option value="">Quezon City</option>
                    <option value="">San Juan City</option>
                    <option value="">Taguig City</option>
                    <option value="">Valenzuela City</option>
                    </select>
                </div>}

                {action === "Login" ? "" : <div className="input">
                    <img src={user_icon} alt="" />
                    <select className="services" placeholder="Services">
                    <option value="">Services</option>
                    <option value="">Construction</option>
                    <option value="">Maintenance & Services</option>
                    <option value="">Transportation</option>
                    <option value="">Manufacturing</option>
                    <option value="">Security</option>
                    <option value="">Technician & Mechanical</option>
                    <option value="">Retail & Hospitality</option>
                    <option value="">Writing and Content Creation</option>
                    <option value="">Administration</option>
                    <option value="">Education</option>
                    <option value="">Online Marketing</option>
                    <option value="">Multimedia</option>
                    <option value="">Fitness</option>
                    <option value="">Childcare</option>
                    <option value="">Development and IT Services</option>
                    <option value="">Project Management</option>
                    </select>
                </div>}
                
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email"/>
                </div>

                
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password"/>
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Confirm Password"/>
                </div>

            </div>
            </div>
            {action === "Sign Up" ? <div></div> : <div className="forgot-password">forgot Password? <span>Click Here!</span></div>}
            
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={ () => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"}  onClick={ () => {setAction("Login")} }>Login</div>
            </div>
        </div>
    )
}

export default Loginsignup;