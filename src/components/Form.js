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
            { text: input, 
                completed: false, 
                school: false, 
                work: false,
                personalProject: false,
                family: false,
                selfCare: false,
                id: Math.random() * 1000 // update with unique numbers
            },
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

            {/* Select from drop-down menu */}
            <div className= "select">
            <select onChange = {statusHandler} name= "todos" className= "filter-todo">
                <option value = "all">All</option>
                <option value = "school">School</option>
                <option value = "work">Work</option>
                <option value = "personalProject">Personal Project</option>
                <option value = "family">Family</option>
                <option value = "selfCare">Self-Care</option>
                <option value = "incomplete">Incomplete</option>
                <option value = "completed">Completed</option>
            </select>

        </div>
      </form>
    );
};

export default Form;