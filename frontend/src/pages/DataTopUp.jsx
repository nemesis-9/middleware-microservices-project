import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import '../index.css';
import axios from 'axios';
import Spinner from '../components/Spinner'
import Header from '../components/Header';

export default function DataTopUp() {
    const textStyle = {
        width: '270px',
    };

    const buttonStyle = {
        width: '300px',
    };

    const [phone, setPhone] = useState('');
    const [amount, setAmount] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleTopUp = async () => {
        try {

            if (!phone.trim() || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
                alert('Please enter valid phone number and amount.');
                return;
            }

            setLoading(true);

            const requestData = {
                phone: phone,
                amount: parseFloat(amount),
            };

            const response = await axios.post(`http://localhost:8765/data-top-up/user/${phone}/top-up`, requestData);
            console.log(response.data)

            // If the request is successful, show the success modal
            setShowSuccessModal(true,);
        } catch (error) {
            console.error('Error making the top-up request:', error);
            setShowErrorModal(true);
        }  finally {
            setLoading(false);
        }
    };

    return (
        <>
        <Header></Header>
        <div className="p-3 mb-2 text-center">
            <h2>Data Top Up Service</h2>
            <p style={{ textAlign: 'center' }}>
            Stay connected without interruptions. Choose the data top-up plan that suits your needs, and ensure you're always online. Power up your browsing, streaming, and socializing with a seamless data experience. The choice is yours to keep the world at your fingertips!
            </p>
            <br /><br />
            {loading && <Spinner />}
            <div className="text-center" style={{border : "1px solid black" , width:"40%" , marginLeft: "30%"}}>
                <form className="row g-3" style={{display:'flex' , flexDirection:'column' , alignItems : "center" , padding: "50px 0 50px"}}>
                    <div className="col-auto">
                        <label htmlFor="phone" className="visually-hidden">
                            Phone Number
                        </label>
                        <input
                            style={textStyle}
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="amount" className="visually-hidden">
                            Enter Amount
                        </label>
                        <input
                            style={textStyle}
                            type="text"
                            className="form-control"
                            id="amount"
                            placeholder="Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <button
                            style={buttonStyle}
                            type="button"
                            className="btn btn-primary mb-3"
                            onClick={handleTopUp}
                        >
                            TopUp
                        </button>
                    </div>
                </form>
            </div>

            {/* Success Modal */}
            <div
                className={`modal fade ${showSuccessModal ? 'show' : ''}`}
                tabIndex="-1"
                role="dialog"
                style={{
                    display: showSuccessModal ? 'block' : 'none',
                }}
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-body">
                            <h3>Data Top Up Successfully</h3>
                            <br /><br />
                            <p>
                                Thank you for the top-up!
                            </p>
                            <p>
                                <strong>Phone Number:</strong> {phone}
                            </p>
                            <p>
                                <strong>Top-Up Amount: </strong> Rs. {amount}
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => setShowSuccessModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Error Modal */}
            <div
                className={`modal fade ${showErrorModal ? 'show' : ''}`}
                tabIndex="-1"
                role="dialog"
                style={{
                    display: showErrorModal ? 'block' : 'none',
                }}
            >
                <div
                    className="modal-dialog modal-dialog-centered"
                    role="document"
                >
                    <div className="modal-content">
                        <div className="modal-body">
                            <h3>Error Processing Top-Up</h3>
                            <br /><br /><br />
                            <p>
                                There was an error processing your top-up request. Please try again.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => setShowErrorModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}