import React, { useEffect, useState } from 'react';
import './dashboard.css'; // Import your CSS file for styling
import Popup from "reactjs-popup"
import Form from './form';
import { useData } from './context';

const Dashboard = () => {
    // const {handleupdate}=useData()
    // Sample data for the table    
    const [fetchedData, setFetchedData, ] = useState([])
    var key = null;
    const { delteRequest,handleCheckboxChange,sendSelectedDataToEmail } = useData()

    useEffect(() => {
        fetchData();

    },);

    // Function to fetch data from backend

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/get'); // Replace this with your backend endpoint
            const data = await response.json();
            setFetchedData(data);
            // console.log("id is", fetchedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };


    return (
        <div className="dashboard-container">
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Hobby</th>
                        <th>Update/Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {fetchedData.map(item => (
                        <tr key={item._id}>


                            <td><input type="checkbox" onChange={() => handleCheckboxChange(item._id)} /></td>

                            <td>{key = item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.hobbies}</td>
                            <td>

                                <Popup trigger={<button className="update-button"  >
                                    Update
                                </button>}
                                    contentStyle={{
                                        maxWidth: '600px',
                                        width: '90%',
                                        padding: '20px',
                                        borderRadius: '8px',
                                        backgroundColor: '#333', // Dark background color
                                        color: '#fff' // Text color
                                    }}
                                >   {key = item._id}
                                    <Form id={key} />

                                </Popup>
                                <button className="delete-button" onClick={() => delteRequest(item._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={sendSelectedDataToEmail}>Send selected data to email</button>
        </div>
    );
};

export default Dashboard;
