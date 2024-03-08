// Form.js

import React from 'react';
import { useData } from './context';
import './form.css'; // Import the CSS file

const Form = ({ id }) => {
    console.log(id)
    const { handleInputChange, handleSubmit, formData } = useData();

    const sendDataToBackend = async () => {
        try {
            const response = await fetch(`http://localhost:5000/add/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Convert form data to JSON string
            });
            const data = await response.json();
            console.log('Data sent to backend:', data);
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };

    return (
        <div className="form-container">
            <h2>Form</h2>
            <form onSubmit={(event) => {
                handleSubmit(event)
                sendDataToBackend()
            }}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Hobby:</label>
                    <input
                        id="hobbies"
                        name="hobbies"
                        value={formData.hobbies}
                        onChange={handleInputChange}
                        required
                    ></input>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Form;
