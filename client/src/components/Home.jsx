import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigator = useNavigate()
    const handleClick = (path) => {
      navigator(`/${path}`)
    };

    
    return (
        <div>
            <div className='grid gap-5 mx-64 my-10 grid-cols-3'>
                <div className="card bg-white border-primary border-2 w-64 hover:scale-110 transition-transform duration-300" onClick={() => handleClick('services')}>
                    <div className="card-body">
                        <h2 className="card-title">Activate Services</h2>
                        <p>Acitivate or deactivate your services</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-white border-primary border-2 w-64 hover:scale-110 transition-transform duration-300" onClick={() => handleClick('bills')}>
                    <div className="card-body">
                        <h2 className="card-title">Bills</h2>
                        <p>Checkout your past and present bills</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-white border-primary border-2 w-64 hover:scale-110 transition-transform duration-300" onClick={() => handleClick('pay')}>
                    <div className="card-body">
                        <h2 className="card-title">Pay</h2>
                        <p>Pay for your bills </p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home