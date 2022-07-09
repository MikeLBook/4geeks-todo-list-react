import React, {useState} from "react";
import ListInput from './ListInput.jsx'
import ListItem from './ListItem.jsx'

const App = () => {
	// array of strings
	const [toDoList, setToDoList] = useState([]) 

	// takes in a string as an argument
	// adds the string to the toDoList
	const addItem = (listItem) => {
		const newList = [...toDoList]
		newList.push(listItem)
		setToDoList(newList)
	}

	// takes in an index as an argument
	// removes the item at that index from toDoList
	const removeItem = (index) => {
		const newList = [...toDoList]
		newList.splice(index, 1)
		setToDoList(newList)
	}

	return (
		<div className="container">
			<h1 className="title">To Do List</h1>
			<div className="card my-card">
				<ListInput addItem={addItem} />
				<ul className="list-group list-items">
					{toDoList.map((listItem, index) => 
						<ListItem 
							key={`${listItem}-${index}`}
							listItem={listItem} 
							index={index} 
							removeItem={removeItem} 
						/>
					)}
				</ul>
			</div>
		</div>
	);
};

export default App;
