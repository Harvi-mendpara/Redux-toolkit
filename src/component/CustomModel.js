import React from 'react';
import "./custom.css"
import { useSelector } from 'react-redux';

const CustomModel = ({ id, setShowPopup }) => {
    const allUser = useSelector((state) => state.data.users)

    const singleUser = allUser.filter((item) => item.id === id);
    console.log('singleUser', singleUser)

    return (

        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={() => setShowPopup(false)}>Close</button>
                <h2>{singleUser[0].name}</h2>
                <h2>{singleUser[0].email}</h2>
                <h2>{singleUser[0].age}</h2>
                <h2>{singleUser[0].gender}</h2>

            </div>
        </div>

    )
}

export default CustomModel
