import React, { useState } from 'react'

const TodoApp = () => {
    const [todo, setTodo] = useState([]);
    const [input, setInput] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === "") return;
        setTodo([...todo, input])
        setInput("");
        
    }
    const handleDelete = (index) => {
        const newTodo = [...todo];
        newTodo.splice(index, 1);
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
                            </li>
                        ))
                    }
                </ol>
            </ul>

        </>
    )
}

export default TodoApp