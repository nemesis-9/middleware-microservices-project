import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from "../features/authentication/authSlice";

function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

    return (
        <header className='header'>
            <div>
                <Link to='/'>Sri Care Application</Link>
            </div>
            <ul>
                {user?(
                    <li>
                        <button className='login-btn' onClick={onLogout}>Logout</button>
                    </li>
                ):(<>
                    <li>
                        <Link to='/login'>
                            <button type='submit' className='login-btn'>
                                Login
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/register'>
                            <button type='submit' className='reg-btn'>
                                Register
                            </button>
                        </Link>
                    </li>
                </>)}

            </ul>

        </header>
    )
}

export default Header;