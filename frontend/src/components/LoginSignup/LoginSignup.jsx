import React, { useContext, useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { IoMdCloseCircle } from "react-icons/io";
import Swal from 'sweetalert2';
import { useAuth } from "../../context/AuthContext";


const Loginsignup = () => {

    const navigate = useNavigate();
    const [action, setAction] = useState("Sign Up");
    const isLogin = action === "Login"
    const isRegister = action === "Sign Up";
    const isResetPassword = action === "ResetPassword";
    const {handleLogin, handleCloseModal} = useAuth();

    const registerSchema = yup.object().shape({
        firstname: yup.string().required("First name is required"),
        lastname: yup.string().required("Last name is required"),
        email: yup.string().email("Invalid email format").required("Email is required"),
        password: yup.string().required("Password is required"),
        phoneNumber: yup.string().required("Contact number is required"),
        isEmployer: yup.string(),
    });

    const [regFormData, setRegFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        isEmployer: false
    });
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    });
    const [resetPasswordFormData, setResetPasswordFormData] = useState({
        email: '',
    });
    const [errors, setErrors] = useState({});
    const [isPassMatched, setIsPassMatched] = useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;

        // For radio buttons, set the value directly
        if (name === 'isEmployer') {
            setRegFormData(prevregFormData => ({
                ...prevregFormData,
                [name]: value
            }));
        } else {
            // For other fields, update normally
            setRegFormData(prevregFormData => ({
                ...prevregFormData,
                [name]: value
            }));
        }
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
        else { setIsPassMatched(true) };
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

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.pop-container')) {
                handleCloseModal();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleCloseModal]);


    async function handleSubmit(event) {
        event.preventDefault();
        console.log(regFormData);
        if (action === "Sign Up") {
            for (const key in regFormData) {
                if (typeof regFormData[key] === 'string' && regFormData[key].trim() === '') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please fill in all fields!',
                    });
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
                // console.log('This is the response:', user);
                if (user.message === "Successful Registration") {
                    setAction('Login');
                } else if (user.message.includes('duplicate key error')) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Email already exists!',
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `Please try again, ${user.message}`,
                    });
                }

            } catch (error) {
                console.error('Error:', error);
            }
        }
        if (action === "Login") {
            for (const key in loginFormData) {
                if (loginFormData[key].trim() === '') {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please Fill in all the Fields!',
                    });
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
                if (user.message === "Successful login") {
                    localStorage.setItem('token', user.token)
                    localStorage.setItem('user', JSON.stringify(user.user))
                    handleLogin()
                } else { alert(user.message) }
                console.log('This is the reponse:', user);
                setLoginFormData({
                    email: '',
                    password: '',
                })
            } catch (error) {
                console.error('Error:', error);
            }
        }

        if (action === "ResetPassword") {
            try {
                const response = await fetch('http://localhost:3000/auth/reset-password', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify(resetPasswordFormData)
                });
                const result = await response.json();

                if (result.success) {
                    // Reset password success
                    alert('Password reset successful.');
                    setAction('Login');
                } else {
                    // Reset password failed
                    alert(`Password reset failed: ${result.message}`);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg shadow-lg lg:h-4/5 w-full lg:w-3/4 pop-container flex flex-col lg:flex-row justify-center items-center overflow-hidden relative">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-red-600 text-2xl hover:text-gray-800 focus:outline-none z-50">
                    <IoMdCloseCircle />
                </button>
                <div className="hidden md:block w-full lg:w-2/4 bg-white rounded-l-lg justify-center items-center overflow-hidden relative">
                    <div className="bg-white z-50">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Working_man-obrero_2.jpg/640px-Working_man-obrero_2.jpg" alt="Description of your image" className="object-cover w-full h-full rounded-l-lg bg-white" />
                    </div>
                    <div className="absolute top-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
                        {(isResetPassword || isRegister) && (
                            <div className="text-center text-white">
                                <div className="text-center my-5">
                                    <a href="#" className="text-lg text-white hover:bg-orange-800 p-2 rounded-lg" onClick={() => setAction("ResetPassword")}>Forgot Password?</a>
                                </div>
                                <p className="text-sm">
                                    {isRegister && !isResetPassword ? "Already have an account? " : "Don't have an account? "}
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:bg-white p-1 rounded-lg"
                                        onClick={() => {
                                            if (isRegister) {
                                                setAction("Login");
                                            } else {
                                                setAction("Sign Up");
                                            }
                                        }}>
                                        {isRegister ? "Login!" : "Sign Up!"}
                                    </a>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="w-full p-8 bg-white overflow-y-auto  relative lg:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">{isRegister ? "Create an Account!" : isResetPassword ? "Reset Password" : "Login"}</h3>
                    <form onSubmit={handleSubmit}>
                        {/* First Name and Last Name */}
                        {isRegister && (
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="firstname" className="block text-sm font-bold text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value={regFormData.firstname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:border-blue-500"
                                        placeholder="Enter your first name"
                                    />
                                    {errors.firstname && <p className="error-validity text-red-500 text-xs mt-1">{errors.firstname}</p>}
                                </div>
                                <div>
                                    <label htmlFor="lastname" className="block text-sm font-bold text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastname"
                                        name="lastname"
                                        value={regFormData.lastname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:border-blue-500"
                                        placeholder="Enter your last name"
                                    />
                                    {errors.lastname && <p className="error-validity text-red-500 text-xs mt-1">{errors.lastname}</p>}
                                </div>
                            </div>
                        )}
                        {/* Email */}
                        {!isResetPassword && (
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={isRegister ? regFormData.email : isResetPassword ? resetPasswordFormData.email : loginFormData.email}
                                    onChange={isRegister ? handleChange : handleLoginChange}
                                    onBlur={handleBlur}
                                    className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your email"
                                />
                                {errors.email && <p className="error-validity text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>
                        )}
                        {/* Phone Number */}
                        {isRegister && (
                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={regFormData.phoneNumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your phone number"
                                />
                                {errors.phoneNumber && <p className="error-validity text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                            </div>
                        )}
                        {/* Password */}
                        {(isRegister || isLogin) && (
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={isRegister ? regFormData.password : loginFormData.password}
                                    onChange={isRegister ? handleChange : handleLoginChange}
                                    className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your password"
                                />
                                {errors.password && <p className="error-validity text-red-500 text-xs mt-1">{errors.password}</p>}
                            </div>
                        )}
                        {/* Confirm Password */}
                        {isRegister && (
                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={regFormData.confirmPassword}
                                    onChange={handlePassword}
                                    onBlur={handleBlur}
                                    className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Confirm your password"
                                />
                                {isPassMatched === false && <p className="error-validity text-red-500 text-xs mt-1">Passwords do not match</p>}
                            </div>
                        )}
                        {/* User Type (Looking for Talent / Looking for Job) */}
                        {isRegister && (
                            <div className="mb-6">
                                <label className="block text-sm font-bold text-center text-gray-700">What are you looking for?</label>
                                <div className="flex justify-between mx-2">
                                    <div className="flex items-center mt-2">
                                        <input
                                            type="radio"
                                            id="lookingForTalent"
                                            name="isEmployer"
                                            value={true}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="mr-2"
                                        />
                                        <label htmlFor="lookingForTalent" className="text-sm text-gray-800">Looking for Talent</label>
                                    </div>
                                    <div className="flex items-center mt-2">
                                        <input
                                            type="radio"
                                            id="lookingForJob"
                                            name="isEmployer"
                                            value={false}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="mr-2"
                                        />
                                        <label htmlFor="lookingForJob" className="text-sm text-gray-800">Looking for Job</label>
                                    </div>
                                    {errors.isEmployer && <p className="error-validity text-red-500 text-xs mt-1">{errors.isEmployer}</p>}
                                </div>
                            </div>
                        )}
                        {/* Reset Password form */}
                        {isResetPassword && (
                            <>
                                {/* Email */}
                                <div className="mb-4">
                                    <label htmlFor="resetEmail" className="block text-sm font-bold text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="resetEmail"
                                        name="resetEmail"
                                        value={resetPasswordFormData.email}
                                        onChange={(e) => setResetPasswordFormData({ email: e.target.value })}
                                        className="w-full px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:border-blue-500"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </>
                        )}
                        {/* Submit Button */}
                        <div className="mb-6">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                            >
                                {isRegister ? "Register Account" : isResetPassword ? "Reset Password" : "Login"}
                            </button>
                        </div>
                    </form>
                    {!isRegister ? (
                        <div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                {isRegister || isLogin ? (
                                    <a href="#" className="text-sm text-blue-500 hover:text-blue-800" onClick={() => setAction("ResetPassword")}>Forgot Password?</a>
                                ) : (<a href="#" className="text-sm text-blue-500 hover:text-blue-800" onClick={() => setAction("Login")}>Back to Login?</a>
                                )}
                            </div>
                            {/* Toggle Register/Login */}
                            <div className="text-center">
                                <p className="mt-4 text-sm">
                                    <a
                                        href="#"
                                        className="inline-block text-sm text-gray-500 align-baseline hover:text-gray-800"
                                        onClick={() => {
                                            if (isRegister) {
                                                setAction("Login");
                                            } else {
                                                setAction("Sign Up");
                                            }
                                        }}>
                                        {isRegister ? (
                                            <span>
                                                Already have an account? <span className="text-blue-500">Login!</span>
                                            </span>
                                        ) : (
                                            <span>
                                                Don't have an account? <span className="text-blue-500">Sign Up!</span>
                                            </span>
                                        )}
                                    </a>
                                </p>
                            </div>
                        </div>
                    ) : null}

                </div>
            </div>
        </div>
    );
}


export default Loginsignup;