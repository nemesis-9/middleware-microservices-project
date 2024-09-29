import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { login, reset } from "../features/authentication/authSlice";

function Login() {

    //state for the form
    const [formData, setFormData] = useState({
        username:'',
        password:''
    })

    //de-structure the fields from that
    const {username, password} = formData;
    console.log(formData)

    //de-structure the form data
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    )

    useEffect( ()=>{

        if(isError){
            toast.error("Invalid Login")
        }

        if(isSuccess ){
            navigate('/home')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const userData = {
            username,
            password
        }

        dispatch(login(userData))
    }

    if(isLoading){
        return <Spinner />
    }

    return (
        <>
            <section className='heading'>
                <h1>Login to Sri Care Application</h1>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group'>
                        <input
                            type='number'
                            className='form-control'
                            id='username'
                            name='username'
                            value={username}
                            placeholder='Please Enter your Phone Number'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='password'
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Please Enter Password'
                            onChange={onChange}
                        />
                    </div>

                    <div className='form-group'>
                        <button type='submit' className='submit-btn'>
                            Login
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login;