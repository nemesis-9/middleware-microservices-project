import React, { useState } from 'react';
import Spinner from '../components/Spinner';
import axios from 'axios';

function RingTonePersonalisation() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedRingtone, setSelectedRingtone] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const inputStyle = {
        width: '350px',
        height: '40px',
    };

    const buttonStyle = {
        width: '200px',
        height: '45px',
    };

    const handleSetRingtone = async () => {
        try {
            if (!phoneNumber.trim() || !(phoneNumber.length === 10)) {
                alert('Please enter a valid phone number.');
                return;
            }

            if (!selectedRingtone) {
                alert('Please select a ringtone.');
                return;
            }

            setLoading(true);

            const response = await axios.post(
                `http://localhost:8765/ringtone-personalization/set-ringtone/${phoneNumber}`,
                {
                        song_name: selectedRingtone,
                        artist:"Unknown"
                    }
                );

            console.log(response.data);

            // If the request is successful, show the success modal
            setShowSuccessModal(true);
        } catch (error) {
            console.error('Error setting Ringtone:', error);
            setShowErrorModal(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <h2>Ring Tone Personalisation</h2>
            <br />

            <p style={{ textAlign: 'center' }}>
                Customize your ringtone to express your unique style.
                Select your preference and make it truly yours.
                Set the tone that resonates with you, and let it ring in your way. The choice is yours!
            </p>

            <br />
            <br />

            <div>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                    <div style={{ marginRight: '20px' }}>
                        <h4>Set Your Ring Tone</h4>

                        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
                            <input
                                type="text"
                                placeholder="Enter Phone Number"
                                value={phoneNumber}
                                className="form-control"
                                style={inputStyle}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />

                            <select
                                className="form-control"
                                style={{ ...inputStyle, marginLeft: '10px' }}
                                onChange={(e) => setSelectedRingtone(e.target.value)}
                            >
                                <option value="">Select a Ringtone</option>
                                <option value="My Heart Will Go Song">My Heart Will Go Song</option>
                                <option value="Salli Song">Salli Song</option>
                                <option value="Moon and Light Song">Moon and Light Song</option>
                                <option value="Despasito Song">Despasito Song</option>
                                <option value="Broken Angel Song">Broken Angel Song</option>
                            </select>

                            <button
                                type="submit"
                                className="btn btn-primary mb-1 mx-3"
                                style={buttonStyle}
                                onClick={handleSetRingtone}
                            >
                                Set Song
                            </button>
                        </div>
                    </div>
                </div>
            </div>

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
                            <h3>Ringtone Set Successfully</h3>
                            <br /><br />
                            <p>
                                Thank you for setting the ringtone!
                            </p>
                            <p>
                                <strong>Phone Number:</strong> {phoneNumber}
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
                            <h3>Error Setting Ringtone</h3>
                            <br /><br /><br />
                            <p>
                                There was an error setting the ringtone. Please try again.
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

            {loading && <Spinner />}
        </>
    );
}

export default RingTonePersonalisation;