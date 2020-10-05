import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {

    // handle completing items in to-do list
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    // mark completed as true
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    };
    
    // handle deleting items in to-do list
    const deleteHandler = () => {
      setTodos(todos.filter((el) => el.id !== todo.id));  
    };

    // attempt at making school begin
    const schoolHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, school: !item.school
                }
            }
            return item;
        }));
    };
    // attempt at making school end

    return (
        <div className = "todo">
            {/* <li className = {`todo-item ${todo.completed ? "completed" : ""}`}>
                {text} //ORIGINAL
            </li>  */}
            {/* school start */}
            <li className = {`todo-item ${todo.completed ? "completed" : ""} 
                ${todo.school ? "school" : ""}`}>
                {text}
            </li>
            
            {/* school end */}
            <button onClick = {completeHandler} className = "complete-btn">
                <i className = "fas fa-check"></i>
            </button>
            <button onClick = {deleteHandler} className = "trash-btn">
                <i className = "fas fa-trash"></i>
            </button>

            {/* attempt at making school begin */}
            <button onClick = {schoolHandler} className = "school-btn">
                <i className = "fas fa-book"></i>
            </button>
            {/* attempt at making school end */}
            
        </div>
    );
}

export default Todo;