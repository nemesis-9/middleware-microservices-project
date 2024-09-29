import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faMusic, faDatabase, faFileInvoice } from '@fortawesome/free-solid-svg-icons';


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
            <Header></Header>
           
            <h1 style={{marginLeft: '4%'}}>Welcome to Sri Care Application</h1>
            <br/>
            <br/>
            <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '20%'
        }}>
            {/* Service Activation */}
            <div>
                <Link to='/service-activation'>
                    <button style={{ width: '200px', height: '200px', background: '#FF416C', color: 'white', fontSize: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className='card-btn'>
                        <FontAwesomeIcon icon={faCogs} size="2x" style={{ marginBottom: '15px' }} />
                        Service Activations
                    </button>
                </Link>
            </div>

            {/* Ring Tone Personalization */}
            <div>
                <Link to='/ring-tone-personalization'>
                    <button style={{ width: '200px', height: '200px', background: '#FF416C', color: 'white', fontSize: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className='card-btn'>
                        <FontAwesomeIcon icon={faMusic} size="2x" style={{ marginBottom: '10px' }} />
                        Ring Tone Personalization
                    </button>
                </Link>
            </div>

            {/* Data Top Up */}
            <div>
                <Link to='/data-top-up'>
                    <button style={{ width: '200px', height: '200px', background: '#FF416C', color: 'white', fontSize: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className='card-btn'>
                        <FontAwesomeIcon icon={faDatabase} size="2x" style={{ marginBottom: '10px' }} />
                        Data Top Up
                    </button>
                </Link>
            </div>

            {/* View Bills */}
            <div>
                <Link to='/billing'>
                    <button style={{ width: '200px', height: '200px', background: '#FF416C', color: 'white', fontSize: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className='card-btn'>
                        <FontAwesomeIcon icon={faFileInvoice} size="2x" style={{ marginBottom: '10px' }} />
                        View Bills
                    </button>
                </Link>
            </div>
        </div>

            {/* <Link to='/expenditures'>
                <button className='card-btn'>Go To Expenditures</button>
            </Link> */}
        </>
    )

}

export default Home