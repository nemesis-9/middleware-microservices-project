import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link , useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

import { login, reset } from "../features/authentication/authSlice";
import Header from "../components/Header";

function Login() {
    // State for the form
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // De-structure the fields from the form data
    const { username, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error("Invalid Login");
        }

        if (isSuccess) {
            navigate('/home');
        }

        dispatch(reset());
    }, [user, isError, isSuccess, message, navigate, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            username,
            password
        };

        dispatch(login(userData));
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
        
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
           
            padding: '20px',
        }}>
            <div style={{
                display: 'flex',
                background: '#fff',
                borderRadius: '10px',
                boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
                overflow: 'hidden',
                maxWidth: '800px',
                width: '100%',
            }}>
                {/* Form Section */}
                <div style={{
                    flex: '1',
                    padding: '40px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <h2 style={{ marginBottom: '20px', color: '#333' }}>Login</h2>
                    <section className='form' style={{ width: '100%' }}>
                        <form onSubmit={onSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    className='form-control'
                                    id='username'
                                    name='username'
                                    value={username}
                                    placeholder='Enter your Phone Number'
                                    onChange={onChange}
                                    style={{ padding: '10px', marginBottom: '20px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='password'
                                    name='password'
                                    value={password}
                                    placeholder='Enter Password'
                                    onChange={onChange}
                                    style={{ padding: '10px', marginBottom: '20px', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
                                />
                            </div>
                            <div className='form-group'>
                                <button type='submit' className='submit-btn' style={{
                                    padding: '10px 20px',
                                    width: '50%',
                                    background: '#FF416C',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                }}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </section>
                </div>

                {/* Welcome Section */}
                <div style={{
                    flex: '1',
                    background: '#FF416C',
                    color: '#fff',
                    padding: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}> 
                    <h1 style={{ fontSize: '36px', marginBottom: '20px', color: '#fff' }}>Sri Tel Ltd</h1>                    
                    <p style={{ marginBottom: '20px', fontSize: '16px' }}>Don't have an account?</p>
                    <Link to='/register'>
                    <button style={{
                        padding: '10px 20px',
                        backgroundColor: 'transparent',
                        color: '#fff',
                        border: '2px solid #fff',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        background: '#FF416C'
                    }}>
                        Sign Up
                    </button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;
