import React, { useState } from 'react'

const TodoApp = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");

    // addition operation
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === "") return;
        setTodo([...todo, input])
        setInput("");
    }
    // delete operation
    const handleDelete = (index) => {
        const newTodo = [...todo];
        newTodo.splice(index, 1);
        setTodo(newTodo);
    }
    // edit operation
    const handleEdit = (index) => {
        const newTodo = [...todo];
        const editedTodo = prompt('Enter the updated todo', newTodo[index]);
        newTodo[index] = editedTodo;
        setTodo(newTodo);
    }

    return (
        <>
            <ul>
                <li>TodoApp</li><br />
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter your todo here' value={input} onChange={(e) => setInput(e.target.value)} />
                    <button>Add</button>
                </form>
                <ol>
                    {
                        todo.map((todo, index) => (
                            <li key={index}>
                                {todo}
                                <button onClick={handleDelete}>Delete</button>
                                {/* <button onClick={handleEdit}>Edit</button> */}
                                <button onClick={() => handleEdit(index)}>Edit</button>
                            </li>
                        ))
                    }
                </ol>
            </ul>

        </>
    )
}

export default TodoApp