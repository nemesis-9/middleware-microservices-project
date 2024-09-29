import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner'

function ServiceActivation() {
    const [roamingPhone, setRoamingPhone] = useState('');
    const [ringTonePhone, setRingTonePhone] = useState('');
    const [dataTopUpPhone, setDataTopUpPhone] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputStyle = {
        width: '350px',
        height:'50px'// Adjust the width as needed
    };

    const buttonStyle = {
        width: '200px',
        height:'45px'
    };

    const handleRoamingActivation = async () => {
        try {

            if (!roamingPhone.trim() || !(roamingPhone.length === 10)) {
                alert('Please enter valid phone number.');
                return;
            }

            setLoading(true);

            const response = await axios.post(`http://localhost:8765/telco-service/roaming/activate/${roamingPhone}`);
            console.log(response.data);

            // If the request is successful, show the success modal
            setShowSuccessModal(true,);
        } catch (error) {
            console.error('Error activating Roaming Service:', error);
            setShowErrorModal(true);
        }  finally {
            setLoading(false);
        }
    };

    const handleRoamingDeactivation = async () => {
        try {

            if (!roamingPhone.trim() || !(roamingPhone.length === 10)) {
                alert('Please enter valid phone number.');
                return;
            }

            setLoading(true);

            const response = await axios.post(`http://localhost:8765/telco-service/roaming/deactivate/${roamingPhone}`);
            console.log(response.data);

            // If the request is successful, show the success modal
            setShowSuccessModal(true,);
        } catch (error) {
            console.error('Error deactivating Roaming Service:', error);
            setShowErrorModal(true);
        }  finally {
            setLoading(false);
        }
    };

    const handleRingToneActivation = async () => {
        try {

            if (!ringTonePhone.trim() || !(ringTonePhone.length === 10)) {
                alert('Please enter valid phone number.');
                return;
            }

            setLoading(true);

            const response = await axios.post(`http://localhost:8765/telco-service/ringtone/activate/${ringTonePhone}`);
            console.log(response.data);

            // Add any logic or state updates based on the response if needed
        } catch (error) {
            console.error('Error activating Ring Tone Service:', error);
            setShowErrorModal(true);
        }  finally {
            setLoading(false);
        }
    };

    const handleRingToneDeactivation = async () => {
        try {

            if (!ringTonePhone.trim() || !(ringTonePhone.length === 10)) {
                alert('Please enter valid phone number.');
                return;
            }

            setLoading(true);

            const response = await axios.post(`http://localhost:8765/telco-service/ringtone/deactivate/${ringTonePhone}`);
            console.log(response.data);

            // If the request is successful, show the success modal
            setShowSuccessModal(true,);
        } catch (error) {
            console.error('Error deactivating Ring Tone Service:', error);
            setShowErrorModal(true);
        }  finally {
            setLoading(false);
        }
    };

    const handleDataTopUpActivation = async () => {
        try {

            if (!dataTopUpPhone.trim() || !(dataTopUpPhone.length === 10)) {
                alert('Please enter valid phone number.');
                return;
            }

            setLoading(true);

            const response = await axios.post(`http://localhost:8765/telco-service/data-top-up/activate/${dataTopUpPhone}`);
            console.log(response.data);

            // If the request is successful, show the success modal
            setShowSuccessModal(true,);
        } catch (error) {
            console.error('Error activating Data Top Up Service:', error);
            setShowErrorModal(true);
        }  finally {
            setLoading(false);
        }
    };

    const handleDataTopUpDeactivation = async () => {
        try {

            if (!dataTopUpPhone.trim() || !(dataTopUpPhone.length === 10)) {
                alert('Please enter valid phone number.');
                return;
            }

            setLoading(true);

            const response = await axios.post(`http://localhost:8765/telco-service/data-top-up/deactivate/${dataTopUpPhone}`);
            console.log(response.data);

            // If the request is successful, show the success modal
            setShowSuccessModal(true,);
        } catch (error) {
            console.error('Error deactivating Data Top Up Service:', error);
            setShowErrorModal(true);
        }  finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='row'>
                <div><h2 className='text-xl font-extrabold text-slate-950'>Service Activations</h2></div>
                <br /><br /><br />
                {loading && <Spinner />}
                <div>
                    <h4>Roaming Service</h4>
                    <div className='container border-rounded bg-light col-auto p-3'>
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    value={roamingPhone}
                                    className="form-control"
                                    style={inputStyle}
                                    onChange={(e) => setRoamingPhone(e.target.value)}
                                />
                            </div>
                            <div className="col-auto">
                                <button type="button" style={buttonStyle} className="btn btn-primary mb-3 mx-3" onClick={handleRoamingActivation}>Activate</button>
                                <button type="button" style={buttonStyle} className="btn btn-danger mb-3 mx-3" onClick={handleRoamingDeactivation}>Deactivate</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h4>Ring Tone Service</h4>
                    <div className='container border-rounded bg-light col-auto p-3'>
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    className="form-control"
                                    style={inputStyle}
                                    value={ringTonePhone}
                                    onChange={(e) => setRingTonePhone(e.target.value)}
                                />
                            </div>
                            <div className="col-auto">
                                <button type="button" style={buttonStyle} className="btn btn-primary mb-3 mx-3" onClick={handleRingToneActivation}>Activate</button>
                                <button type="button" style={buttonStyle} className="btn btn-danger mb-3 mx-3" onClick={handleRingToneDeactivation}>Deactivate</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h4>Data Top Up Service</h4>
                    <div className='container border-rounded bg-light col-auto p-3'>
                        <div className="row align-items-center">
                            <div className="col-auto">
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    className="form-control"
                                    style={inputStyle}
                                    value={dataTopUpPhone}
                                    onChange={(e) => setDataTopUpPhone(e.target.value)}
                                />
                            </div>
                            <div className="col-auto">
                                <button type="button" style={buttonStyle} className="btn btn-primary mb-3 mx-3" onClick={handleDataTopUpActivation}>Activate</button>
                                <button type="button" style={buttonStyle} className="btn btn-danger mb-3 mx-3" onClick={handleDataTopUpDeactivation}>Deactivate</button>
                            </div>
                        </div>
                    </div>
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
                                <h3>Service Activated/Deactivated Successfully</h3>
                                <br /><br />
                                <p>
                                    Thank you for the service activation!
                                </p>
                                <p>
                                    <strong>Phone Number:</strong>
                                    {roamingPhone ? roamingPhone : ringTonePhone ? ringTonePhone : dataTopUpPhone ? dataTopUpPhone : ''}
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
                                <h3>Error Processing Service Activation/Deactivation</h3>
                                <br /><br /><br />
                                <p>
                                    There was an error processing your service activation/deactivation request. Please try again.
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

export default ServiceActivation;