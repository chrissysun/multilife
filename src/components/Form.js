import React from "react";

const Form = ({ input, setInput, todos, setTodos, setStatus }) => {
    
    // handle text input
    const inputHandler = (e) => {
        setInput(e.target.value);
    };

    // handle input after submission
    const submitTodoHandler = (e) => {
        e.preventDefault(); // prevent refresh
        setTodos([
            ...todos, 
            {text: input, completed: false, id: Math.random() * 1000},
            // update Math.random such that unique numbers are generated
        ]);
        setInput(''); // clear entry box after submission
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }; 

    return (
        <form>
            <input 
                value = {input}
                onChange = {inputHandler} 
                type= "text" 
                className= "todo-input" 
            />
            <button onClick = {submitTodoHandler} className= "todo-button" type= "submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className= "select">
            <select onChange = {statusHandler} name= "todos" className= "filter-todo">
                <option value= "all">All</option>
                <option value= "completed">Completed</option>
                <option value= "incomplete">Incomplete</option>
            </select>
        </div>
      </form>
    );
};

export default Form;