import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import '../index.css';
import axios from 'axios';
import Spinner from '../components/Spinner'

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
        <div className="p-3 mb-2 text-center">
            <h3 className="mt-2 mb-2">Data Top Up Service</h3>
            <br /><br /><br /><br /><br />
            {loading && <Spinner />}
            <div className="text-center">
                <form className="row g-3">
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
    );
}