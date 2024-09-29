import React, { useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner'
import Header from '../components/Header';

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
        <div className="container mt-5">
            <Header></Header>
            <h2 className="text-center mb-4 font-weight-bold text-primary">Service Activations</h2>
    
            {loading && <Spinner />}
            <div style={{display:"grid", gridTemplateColumns: "1fr 1fr 1fr" , gap: "15px"}}>
            {/* Roaming Service */}
            <div  style={{ borderRadius: '6px', display:'flex', flexDirection:'column' , border: '2px solid #ddd'  , width: '350px' }}>
                <h4 style={{marginTop: '20px'}}>Roaming Service</h4>
                <div>
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            value={roamingPhone}
                            className="form-control mb-3"
                            style={{marginLeft: '25%' , marginTop: '10px'}}
                            onChange={(e) => setRoamingPhone(e.target.value)}
                        />
                    </div>
               </div>
                    <div className="" >
                        <button type="button" style={{ ...buttonStyle, backgroundColor: '#007bff', color: '#fff' }} className="btn mb-3 mx-2" onClick={handleRoamingActivation}>Activate</button>
                        <button type="button" style={{ ...buttonStyle, backgroundColor: '#dc3545', color: '#fff' }} className="btn mb-3 mx-2" onClick={handleRoamingDeactivation}>Deactivate</button>
                    </div>
                </div>
            </div>
    
            {/* Ring Tone Service */}
            <div  style={{ borderRadius: '6px', display:'flex', flexDirection:'column' , border: '2px solid #ddd'  , width: '350px' }}>
                <h4 style={{marginTop: '20px'}}>Ring Tone Service</h4>
                <div>
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            className="form-control mb-3"
                            style={{marginLeft: '25%' , marginTop: '10px'}}
                            value={ringTonePhone}
                            onChange={(e) => setRingTonePhone(e.target.value)}
                        />
                    </div>
                    </div>
                    <div >
                        <button type="button" style={{ ...buttonStyle, backgroundColor: '#007bff', color: '#fff' }} className="btn mb-3 mx-2" onClick={handleRingToneActivation}>Activate</button>
                        <button type="button" style={{ ...buttonStyle, backgroundColor: '#dc3545', color: '#fff' }} className="btn mb-3 mx-2" onClick={handleRingToneDeactivation}>Deactivate</button>
                    </div>
                </div>
            </div>
    
            {/* Data Top Up Service */}
            <div  style={{ borderRadius: '6px', display:'flex', flexDirection:'column' , border: '2px solid #ddd' , width: '350px'  }}>
                <h4 style={{marginTop: '20px'}}>Data Top Up Service</h4>
                <div>
                <div className="row align-items-center" style={{border: 'none'}}>
                    <div className="col-md-8" >
                        <input
                            type="text"
                            placeholder="Enter Phone Number"
                            className="form-control mb-3"
                            style={{marginLeft: '25%' , marginTop: '10px'}}
                            value={dataTopUpPhone}
                            onChange={(e) => setDataTopUpPhone(e.target.value)}
                        />
                    </div>
                    </div>
                    <div >
                        <button type="button" style={{ ...buttonStyle, backgroundColor: '#007bff', color: '#fff' }} className="btn mb-3 mx-2" onClick={handleDataTopUpActivation}>Activate</button>
                        <button type="button" style={{ ...buttonStyle, backgroundColor: '#dc3545', color: '#fff' }} className="btn mb-3 mx-2" onClick={handleDataTopUpDeactivation}>Deactivate</button>
                    </div>
                </div>
            </div>
            </div>
    
            {/* Success Modal */}
            {showSuccessModal && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <h3>Service Activated/Deactivated Successfully</h3>
                                <p className="mt-4">
                                    Thank you for the service activation!
                                </p>
                                <p>
                                    <strong>Phone Number:</strong> {roamingPhone || ringTonePhone || dataTopUpPhone}
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => setShowSuccessModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
    
            {/* Error Modal */}
            {showErrorModal && (
                <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <h3>Error Processing Service Activation/Deactivation</h3>
                                <p className="mt-4">
                                    There was an error processing your service activation/deactivation request. Please try again.
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => setShowErrorModal(false)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
    
}

export default ServiceActivation;