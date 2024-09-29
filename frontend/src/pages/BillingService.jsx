import React, {useState} from 'react'
import Spinner from "../components/Spinner";
import axios from 'axios';
import Header from '../components/Header';

export default function BillingService() {

    const textStyle = {
        width: '375px',
        marginRight : '50px'
    };

    const buttonStyle = {
        width: '375px',
    };

    const [phone, setPhone] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [billingDetails, setBillingDetails] = useState(null);
    const [error, setError] = useState(null);

    const viewBill = async () => {
        setError('');
        setBillingDetails(null);
        try {
            if (!phone.trim() || !(phone.length === 10)) {
                alert('Please enter a valid phone number.');
                return;
            }

            setLoading(true);

            const response = await axios.get(`http://localhost:8765/billing/current-bill/${phone}`);
            const data = response.data;

            if (data.status === 'OK' && data.bill) {
                setBillingDetails(data.bill);
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError('Error fetching billing details. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const payBill = async () => {
        try {
            setLoading(true);

            const response = await axios.post(`http://localhost:8765/billing/pay-bill/${billingDetails.id}`, {
                userId: billingDetails.userId,
                amount: billingDetails.amount,
            });

            const data = response.data;

            if (data.status === 'OK') {
                setShowSuccessModal(true);

            } else {
                setShowErrorModal(true);
            }
        } catch (error) {
            setShowErrorModal(true);
        } finally {
            setLoading(false);
        }
    };


  return (
    <> 
    <Header></Header>
        <div className='row'>
            <div><h2>Billing Service</h2></div>
            <p style={{ textAlign: 'center' }}>
            Manage your bills effortlessly. View, track, and pay your bills with ease, all in one place. Stay on top of your payments and keep your services running smoothly. Your finances, your control—it's all just a tap away!
            </p>
            <br /><br /><br />
            
            {loading && <Spinner />}
            <div className="text-center" style={{border : "1px solid black" , width:"40%" , marginLeft: "30%"}}>
                <form className="row g-3" style={{display:'flex' , flexDirection:'column' , alignItems : "center" , padding: "50px 0 50px"}}>
                    <div className="col-auto">
                        <label htmlFor="phone" className="visually-hidden">
                            Phone Number
                        </label>
                        <input
                            style={{marginLeft:'5%'}}
                            type="text"
                            className="form-control"
                            id="phone"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="col-auto" >
                        <button
                            style={{width:'100%' , marginLeft : '7%' , marginTop : '10%' }}
                            type="button"
                            className="btn btn-primary"
                            onClick={viewBill}
                        >
                            View Your Current Bill
                        </button>
                    </div>
                </form>
            </div>

            {billingDetails && (
                <div>
                    <br /><br /><br />
                    <h4>Your Current Bill Details</h4>
                    <p>Phone Number: {billingDetails.userId}</p>
                    <p>Amount: {billingDetails.amount}</p>
                    <p>Paid: {billingDetails.paid ? 'Yes' : 'No'}</p>
                    {!billingDetails.paid && (
                        <button
                            type='button'
                            className='btn btn-success'
                            onClick={payBill}
                        >
                            Pay Bill
                        </button>
                    )}
                </div>
            )}
            {error && <p className='text-danger'>{error}</p>}

        </div>

        {/* Success Modal */}
        {billingDetails && (
            <div
                className={`modal fade ${showSuccessModal ? 'show' : ''}`}
                tabIndex='-1'
                role='dialog'
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
                        <h3>Bill Payment Successfully</h3>
                        <br /><br />
                        <p>
                            Thank you for the payment!
                        </p>
                        <p>
                            <strong>Phone Number:</strong> {phone}
                        </p>
                        <p>
                            <strong>Payment Amount: </strong> Rs. {billingDetails.amount}
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {setShowSuccessModal(false);setError('');
                                setBillingDetails(null);}}
                        >
                            Close
                        </button>
                    </div>
                </div>
                </div>
            </div>
        )}

        {/* Error Modal */}

        {billingDetails && (
            <div
                className={`modal fade ${showErrorModal ? 'show' : ''}`}
                tabIndex='-1'
                role='dialog'
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
                            <h3>Error Processing Payment</h3>
                            <br /><br /><br />
                            <p>
                                There was an error processing your payment request. Please try again.
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => {setShowErrorModal(false);setError('');
                                    setBillingDetails(null);}}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </>
  );
}
