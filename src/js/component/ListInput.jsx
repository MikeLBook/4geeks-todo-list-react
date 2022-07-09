import React, {useState} from 'react';

const ListInput = (props) => {
    const [inputValue, setInputValue] = useState('') //string

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue === '') {
            alert('Unable to add empty list items')
        } else {
            props.addItem(inputValue)
            setInputValue('')
        }
    }

    return(
        <form onSubmit={handleSubmit} style={{minWidth: '100%'}}>
            <label>Enter a new list item: </label>
            <div className="d-flex">
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <input type='submit' value="Add List Item"/>
            </div>
        </form>
    )
}

export default ListInput