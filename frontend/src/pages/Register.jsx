import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import Spinner from '../components/Spinner';
import { register, reset } from '../features/authentication/authSlice';

function Register() {

    //state for the form
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        phone:'',
        email:'',
        password:''
    })

    //de-structure the fields from that
    const {firstname, lastname, phone, email, password} = formData;
    console.log(formData)

    //de-structure the form data
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    )

    useEffect( ()=>{

        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/login')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])


    const onChange = (e) => {
        //we pass function to set form data
        //we are setting form data to an object
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            firstname,
            lastname,
            phone,
            email,
            password
        }

        //when we submit, we want to dispatch our register function
        dispatch(register(userData))
    }

    if(isLoading){
        return <Spinner />
    }

    return (

        <>
            <section className='heading'>
                <h1>Register to Sri Care Application</h1>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
                <div className='form-group'>
                        <input type='text'
                               id='firstname'
                               name='firstname'
                               value={firstname}
                               placeholder='Enter Your First Name'
                               onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input type='text'
                               id='lastname'
                               name='lastname'
                               value={lastname}
                               placeholder='Enter Your Last Name'
                               onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input type='number'
                               id='phone'
                               name='phone'
                               value={phone}
                               placeholder='Enter Your Phone Number'
                               onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input type='email'
                               id='email'
                               name='email'
                               value={email}
                               placeholder='Enter Your Email'
                               onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input type='password'
                               id='password'
                               name='password'
                               value={password}
                               placeholder='Enter Your Password'
                               onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='submit-btn'>
                            Register
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register;