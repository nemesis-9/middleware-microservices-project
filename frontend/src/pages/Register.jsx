import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from '../components/Spinner';
import { register, reset } from '../features/authentication/authSlice';

function Register() {
    // State for the form
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        password: ''
    });

    // De-structure the fields from the form data
    const { firstname, lastname, phone, email, password } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        if (isSuccess || user) {
            navigate('/login');
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
            firstname,
            lastname,
            phone,
            email,
            password
        };

        dispatch(register(userData));
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
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
                maxWidth: '900px',
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
                    <section className='heading' style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <h1 style={{ color: '#333' }}>Sign Up</h1>
                    </section>

                    <section className='form' style={{ width: '100%' }}>
                        <form onSubmit={onSubmit}>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    id='firstname'
                                    name='firstname'
                                    value={firstname}
                                    placeholder='Enter Your First Name'
                                    onChange={onChange}
                                    style={{
                                        padding: '10px',
                                        marginBottom: '15px',
                                        width: '100%',
                                        borderRadius: '5px',
                                        border: '1px solid #ccc',
                                    }}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='text'
                                    id='lastname'
                                    name='lastname'
                                    value={lastname}
                                    placeholder='Enter Your Last Name'
                                    onChange={onChange}
                                    style={{
                                        padding: '10px',
                                        marginBottom: '15px',
                                        width: '100%',
                                        borderRadius: '5px',
                                        border: '1px solid #ccc',
                                    }}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='number'
                                    id='phone'
                                    name='phone'
                                    value={phone}
                                    placeholder='Enter Your Phone Number'
                                    onChange={onChange}
                                    style={{
                                        padding: '10px',
                                        marginBottom: '15px',
                                        width: '100%',
                                        borderRadius: '5px',
                                        border: '1px solid #ccc',
                                    }}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={email}
                                    placeholder='Enter Your Email'
                                    onChange={onChange}
                                    style={{
                                        padding: '10px',
                                        marginBottom: '15px',
                                        width: '100%',
                                        borderRadius: '5px',
                                        border: '1px solid #ccc',
                                    }}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    value={password}
                                    placeholder='Enter Your Password'
                                    onChange={onChange}
                                    style={{
                                        padding: '10px',
                                        marginBottom: '20px',
                                        width: '100%',
                                        borderRadius: '5px',
                                        border: '1px solid #ccc',
                                    }}
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
                                   
                                    Register
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
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    textAlign: 'center',
                }}>
                    <h1 style={{ fontSize: '36px', marginBottom: '20px', color: '#fff' }}>Sri Tel Ltd</h1>  
                    <div>
                    <p style={{ marginBottom: '20px', fontSize: '16px' }}>Already Have An Account?</p>
                    <Link to='/login'>
                        <button style={{
                            padding: '10px 20px',
                            backgroundColor: 'transparent',
                            color: '#fff',
                            border: '2px solid #fff',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontSize: '16px',
                        }}>
                            Login
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
