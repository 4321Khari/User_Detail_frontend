import { createContext, useContext, useState } from "react";


const dataContext = createContext()

export function useData() {
    const data = useContext(dataContext)
    return data;
}


export default function DataContext({ children }) {

    const [selectedItems, setSelectedItems] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        hobbies: ''
    });

    // Function to handle form input changes
    const handleInputChange = (event) => {

        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        //handleupdate()

        setFormData({

            name: '',
            phone: '',
            email: '',
            hobbies: ''
        })

    }

    const delteRequest = async (id) => {

        try {
            const response = await fetch(`http://localhost:5000/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Convert form data to JSON string
            });
            const data = await response.json();
            console.log('Data sent to backend:', data);
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };

    const handleCheckboxChange = async (id) => {
        console.log(id);
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(itemId => itemId !== id));
            console.log("id is", selectedItems);
        } else {
            setSelectedItems([...selectedItems, id]);
        }

    }

    const sendSelectedDataToEmail = async () => {
        try {
            const response = await fetch('http://localhost:5000/sendData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ selectedItems: selectedItems })
            });

            if (!response.ok) {
                throw new Error('Failed to send data to backend');
            }

            const responseData = await response.json();
            console.log('Data sent to backend:', responseData);
        } catch (error) {
            console.error('Error sending data to backend:', error);
        }
    };




    return (
        <dataContext.Provider value={{ handleInputChange, handleSubmit, formData, delteRequest, handleCheckboxChange, sendSelectedDataToEmail }}>
            {children}

        </dataContext.Provider>
    )

}