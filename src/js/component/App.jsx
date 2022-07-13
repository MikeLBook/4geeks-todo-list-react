import React, {useEffect, useState} from "react";
import InputForm from './InputForm.jsx'
import ListItem from './ListItem.jsx'
// API functions are imported from another file
import {getList, createList, updateList, deleteList} from '../API.js'

const App = () => {
	const [toDoList, setToDoList] = useState([]) 
	const [userName, setUserName] = useState('mbook')

	useEffect(() => {
		getList(userName, setToDoList)
	}, [userName])

	const addToDo = (label) => {
		const newList = [...toDoList]
		newList.push({label: label, done: false})
		updateList(userName, newList, setToDoList)
	}

	const toggleDone = (index) => {
		const newList = [...toDoList]
		newList[index].done = !newList[index].done
		updateList(userName, newList, setToDoList) 
	}

	return (
		<div className="container">
			<h1 className="title">To Do List</h1>
			
			<div className="card my-card">
				<InputForm label={`Current Username is '${userName}'. Enter a new username: `} submit={(inputValue) => {setUserName(inputValue)}} />
				{toDoList.length === 0 && 
				<button className="btn btn-success mt-4" onClick={() => createList(userName, setToDoList)}>
					Create New List
				</button>}
			</div>

			{toDoList.length > 0 && 
			<div className="card my-card mt-2">
				<InputForm label={'Enter a new list item: '} submit={addToDo} />
				<ul className="list-group list-items">
					{toDoList.map((listItem, index) => 
						<ListItem 
							key={`${listItem.label}-${index}`}
							listItem={listItem} 
							index={index} 
							toggleDone={toggleDone} 
						/>
					)}
				</ul>
				<button className="btn btn-danger mt-4" onClick={() => deleteList(userName, setToDoList)}>
					Clear all tasks 
				</button>
			</div>}
		</div>
	);
};

export default App;
