import React, { useEffect, useState } from "react";
import './Loginsignup.css'

import user_icon from '../../assets/person.png';
import email_icon from '../../assets/email.png';
import password_icon from '../../assets/password.png';
import { Form, useNavigate } from "react-router-dom";
import * as yup from 'yup'


const Loginsignup = ({updateLogin, updateUser}) => {

    const navigate = useNavigate();
    const [action, setAction] = useState("Login");
    const isLogin = action === "Login";
    const isRegister = action === "Sign Up";

    const registerSchema = yup.object().shape({
        firstname: yup.string().required("First name is required"),
        lastname: yup.string().required("Last name is required"),
        email: yup.string().email("Invalid email format").required("Email is required"),
        password: yup.string().required("Password is required"),
        phoneNumber: yup.string().required("Contact number is required"),
        services: yup.string().required("Services number is required"),
        userLocation: yup.string().required("Locatinon number is required"),
        // Define validation rules for other fields
    });
    const loginSchema = yup.object().shape({
        email: yup.string().email("Invalid email format").required("Email is required"),
        password: yup.string().required("Password is required"),
        // Define validation rules for other fields
    });

    const [regFormData, setRegFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phoneNumber: '',
        services:'',
        userLocation:'',
        confirmPassword: ''
    });
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isPassMatched, setIsPassMatched] = useState(true);

    const handleChange = async (event) => {
        const { name, value } = event.target;
        setRegFormData(prevregFormData => ({
          ...prevregFormData,
          [name]: value
        }));
    };

    const handleLoginChange = async (event) => {
        const { name, value } = event.target;
        setLoginFormData(prevLoginFormData => ({
          ...prevLoginFormData,
          [name]: value
        }));
    };

    const handlePassword = async (event) => {
        const { name, value } = event.target;
        setRegFormData(prevregFormData => ({
            ...prevregFormData,
            [name]: value
          }));

        if (value !== regFormData.password) {
            setIsPassMatched(false)
        }
        else{setIsPassMatched(true)};
    };
    

    const handleBlur = async (event) => {
        event.preventDefault();
        const { name, value } = event.target;
    
        try {
            // Validate the field individually
            await yup.reach(registerSchema, name).validate(value);
            // Clear the error if validation succeeds
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: ""
            }));
        } catch (validationError) {
            // Update the error message if validation fails
            setErrors(prevErrors => ({
                ...prevErrors,
                [name]: validationError.message
            }));
        }
    };
   


    
    async function handleSubmit(event) {
        event.preventDefault();
        console.log(regFormData)
        if(action === "Sign Up"){
            for (const key in regFormData) {
                if (regFormData[key].trim() === '') {
                    alert('Please fill in all fields.');
                    return; 
                }
            }
            try {
                const response = await fetch('http://localhost:3000/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' // Set content type to JSON
                    },
                    body: JSON.stringify(regFormData)
                });
                const user = await response.json();
                
                console.log('This is the reponse:', user);
                setRegFormData({
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    phoneNumber: '',
                    services:'',
                    userLocation:'',
                    confirmPassword: ''
                })
            } catch (error) {
                console.error('Error:', error);
            }
        }
        if(action === "Login"){
            for (const key in loginFormData) {
                if (loginFormData[key].trim() === '') {
                    alert('Please fill in all fields.');
                    return; 
                }
            }
            try {
                const response = await fetch('http://localhost:3000/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' // Set content type to JSON
                    },
                    body: JSON.stringify(loginFormData)
                });
                const user = await response.json();
                if(user.message === "Successful login"){
                    updateUser(user.user);
                    updateLogin(true);
                    navigate("/home");
                }else{ alert(user.message)}
                console.log('This is the reponse:', user);
                setLoginFormData({
                    email: '',
                    password: '',
                })
            } catch (error) {
                console.error('Error:', error);
            }
        }
        
    }
    useEffect(() => {
        
        console.log(action)
    }, [action]);

    const cities = [
        "Caloocan City",
        "Makati City",
        "Malabon City",
        "Mandaluyong City",
        "Manila City",
        "Marikina City",
        "Muntinlupa City",
        "Navotas City",
        "Parañaque City",
        "Pasay City",
        "Pasig City",
        "Pateros",
        "Quezon City",
        "San Juan City",
        "Taguig City",
        "Valenzuela City"
    ];
    const services = [
        "Construction",
        "Maintenance & Services",
        "Transportation",
        "Manufacturing",
        "Security",
        "Technician & Mechanical",
        "Retail & Hospitality",
        "Writing and Content Creation",
        "Administration",
        "Education",
        "Online Marketing",
        "Multimedia",
        "Fitness",
        "Childcare",
        "Development and IT Services",
        "Project Management"
    ];
    

    return (<>
        <div className="login-container">
            <div className="login-header">
                <div className="login-text">{action}</div>
                <div className="underline"></div>
            </div>
           
            <form onSubmit={handleSubmit} >
                
                <div className={action === "Login" ? "login-inner-container-noOver inputs" : "login-inner-container inputs"}>
                    {action === "Login" ? "" : 
                    (<>
                    <div>
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                onChange={handleChange} 
                                name = "firstname" 
                                value={regFormData.firstname}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.firstname && <p className="error-validity">{errors.firstname}</p>}
                    </div>
                    
                    <div>
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                onChange={handleChange} 
                                name = "lastname" 
                                value={regFormData.lastname}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.lastname && <p className="error-validity">{errors.lastname}</p>}
                    </div>

                    <div>
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <input 
                                type="tel" 
                                placeholder="Contact Number" 
                                pattern="[0-9]+" 
                                onChange={handleChange} 
                                name = "phoneNumber" 
                                value={regFormData.phoneNumber}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.phoneNumber && <p className="error-validity">{errors.phoneNumber}</p>}
                    </div>

                    <div onBlur={handleBlur}>
                        <div className="input">
                            <img src={user_icon} alt="" />
                            {/* <input type="select" placeholder="Location"/> */}
                            <select className="location" onChange={handleChange} name = "userLocation" value={regFormData.userLocation}>
                                <option value="" disabled>
                                    Select a location
                                </option>
                                {cities.map((el, i) => (
                                    <option key={i} value={el}>{el}</option>)
                                )}
                            </select>
                        </div>
                        {errors.location && <p className="error-validity">{errors.location}</p>}
                    </div>

                    <div onBlur={handleBlur}>
                        <div className="input">
                            <img src={user_icon} alt="" />
                            <select className="services" onChange={handleChange} name = "services" value={regFormData.services}>
                                <option value="" disabled>
                                    Select a service
                                </option>
                                {services.map((el, i) => (
                                    <option key={i} value={el}>{el}</option>)
                                )}
                            </select>
                        </div>
                        {errors.services && <p className="error-validity">{errors.services}</p>}
                    </div>
                    </>)}
                    <div>           
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input 
                                type="email" 
                                placeholder="Email" 
                                onChange={action === "Sign Up" ? handleChange : handleLoginChange} 
                                name = "email" 
                                value={action === "Sign Up" ? regFormData.email : loginFormData.email}
                                onBlur={handleBlur}
                            />
                        </div>
                        {errors.email && action ==="Sign Up" && <p className="error-validity">{errors.email}</p>}
                        {errors.email && action ==="Login" && <p className="error-validity">{errors.email}</p>}
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            onChange={action === "Sign Up" ? handleChange : handleLoginChange} 
                            name = "password" 
                            value={action === "Sign Up" ? regFormData.password : loginFormData.password}
                        />
                    </div>
                    
                    {action === "Sign Up" && <div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input 
                                type="password" 
                                placeholder="Confirm Password" 
                                onChange={(e) => {handlePassword(e); handleBlur(e)}}
                                name="confirmPassword"
                                value={regFormData.confirmPassword}
                            />
                        </div>
                        {isPassMatched === false && (<p className="error-validity">did not matched</p>)}
                    </div>}

                </div>
                <div className="submit-container">
                    <button 
                        className={action === "Login" ? "submit" : "gray"} 
                        type={isLogin ? "submit" : "button"} 
                        onClick={() => {
                            setTimeout(() => {
                                setAction("Login");
                            }, 100); // Adjust the delay time as needed
                        }}
                    >
                        Login
                    </button>
                    <button 
                        className={action === "Sign Up" ? "submit" : "gray"} 
                        type={isRegister ? "submit" : "button"} 
                        onClick={() => {
                            setTimeout(() => {
                                setAction("Sign Up");
                            }, 100); // Adjust the delay time as needed
                        }}
                    >
                        Sign Up
                    </button>
                </div>
                
            </form>
            
        </div>
        
    </>)
}

export default Loginsignup;