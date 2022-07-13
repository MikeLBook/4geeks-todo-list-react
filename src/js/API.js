export const getList = (userName, setToDoList) => {
    fetch(`https://assets.breatheco.de/apis/fake/todos/user/${userName}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.status === 200) { 
            return response.json() 
        }
    })
    .then(data => {
        if (data !== undefined) {
            setToDoList(data)
        } else {
            setToDoList([])
        }
    })
    .catch(err => console.log('error: ', err))
}

export const createList = (userName, setToDoList) => {
    fetch(`https://assets.breatheco.de/apis/fake/todos/user/${userName}`, {
        method: "POST",
        body: JSON.stringify([]),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.status === 200) { 
            return response.json() 
        }
    })
    .then(data => {
        if (data !== undefined) {
            getList(userName, setToDoList)
        }
    })
    .catch(err => console.log('error: ', err))
}

export const updateList = (userName, newList, setToDoList) => {
    fetch(`https://assets.breatheco.de/apis/fake/todos/user/${userName}`, {
        method: "PUT",
        body: JSON.stringify(newList),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.status === 200) {
            getList(userName, setToDoList)
        }
    })
    .catch(err => {
        console.log('error: ', err)
    })
}

export const deleteList = (userName, setToDoList) => {
    fetch(`https://assets.breatheco.de/apis/fake/todos/user/${userName}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.status === 200) {
            setToDoList([])
        } else {
            return response.json()
        }
    })
    .catch(err => {
        console.log('error: ', err)
    })
}