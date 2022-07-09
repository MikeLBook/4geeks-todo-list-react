import React, {useState} from 'react';

const ListItem = (props) => {
    const [showDelete, setShowDelete] = useState(false)

    return (
        <li 
            className="d-flex justify-content-between align-items-center list-item"
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
        >
            <span>{props.listItem}</span>
            {showDelete && 
                <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={() => props.removeItem(props.index)}
                >
                    Delete
                </button>
            }
        </li>
    )
}

export default ListItem