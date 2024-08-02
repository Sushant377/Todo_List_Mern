import { useState } from "react";
import axios from "axios";

function Create() {
    const [task, setTask] = useState("");
    const [successMessage, setSuccessMessage] = useState(""); // State for success message

    const handleAdd = () => {
        axios.post('http://localhost:3001/addtask', { task: task })
            .then(result => {
                console.log(result); // Log the result for debugging
                setSuccessMessage(`Task "${result.data.task}" added successfully!`); // Update success message
                setTask(""); // Clear input field
            })
            .catch(err => {
                console.error('Error occurred:', err.response ? err.response.data : err.message);
                setSuccessMessage(""); // Clear message on error
            });
    };

    return (
        <div className="create_form">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter Task Here"
            />
            <button type="button" onClick={handleAdd}>Add</button>
            {successMessage && <p>{successMessage}</p>} {/* Display success message */}
        </div>
    );
}

export default Create;
