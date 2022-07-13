import React, {useState} from 'react';

const ListItem = (props) => {
    const [showDelete, setShowDelete] = useState(false)

    return (
        <li 
            className="d-flex justify-content-between align-items-center list-item"
            style={props.listItem.done ? {backgroundColor: 'lightgrey'} : {}}
            onMouseEnter={() => setShowDelete(true)}
            onMouseLeave={() => setShowDelete(false)}
        >
            <span style={props.listItem.done ? {textDecoration: 'line-through'} : {}}>{props.listItem.label}</span>
            {showDelete && 
                <button 
                    type="button" 
                    className={props.listItem.done ? "btn btn-warning" : "btn btn-danger"}
                    onClick={() => props.toggleDone(props.index)}
                >
                    {props.listItem.done ? 'Mark Incomplete' : 'Mark Complete'}
                </button>
            }
        </li>
    )
}

export default ListItem