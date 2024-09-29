import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


function Home() {

    const navigate = useNavigate()

    const {user} = useSelector((state) => state.auth )

    useEffect(() => {

        // if(!user){
        //     navigate('/login')
        // }

    }, [user, navigate])

    return (
        <>
            <h1>Welcome to Sri Care Application</h1>
            <br/>
            <br/>
            <Link to='/service-activation'>
                <button className='card-btn'>Service Activations</button>
            </Link>
            <Link to='/ring-tone-personalization'>
                <button className='card-btn'>Ring Tone Personalization</button>
            </Link>
            <Link to='/data-top-up'>
                <button className='card-btn'>Data Top Up</button>
            </Link>
            <Link to='/billing'>
                <button className='card-btn'>View Bills</button>
            </Link>
            {/* <Link to='/expenditures'>
                <button className='card-btn'>Go To Expenditures</button>
            </Link> */}
        </>
    )

}

export default Home