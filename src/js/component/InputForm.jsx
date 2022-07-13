import React, {useState} from 'react';

const InputForm = (props) => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue === '') {
            alert('Input cannot be empty')
        } else {
            props.submit(inputValue)
            setInputValue('')
        }
    }

    return(
        <form onSubmit={handleSubmit} style={{minWidth: '100%'}}>
            <label>{props.label}</label>
            <div className="d-flex">
                <input 
                    type="text" 
                    className="form-control" 
                    style={{width: '85%'}}
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <input 
                    type='submit'
                    style={{marginLeft: 'auto'}}
                    className="btn btn-success" 
                    value='Submit'
                />
            </div>
        </form>
    )
}

export default InputForm