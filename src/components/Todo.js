import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {

    // complete ("check off") task
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    // adjust whether it's categorized as 'completed'
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    };

    // categorize task as school  
    const schoolHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    // adjust whether it's categorized as 'school'
                    ...item, school: !item.school
                }
            }
            return item;
        }));
    };
    
    // delete task from to-do list
    const deleteHandler = () => {
      setTodos(todos.filter((el) => el.id !== todo.id));  
    };

    return (
        <div className = "todo">
            <li className = {`todo-item ${todo.completed ? "completed" : ""} 
                ${todo.school ? "school" : ""}`}>
                {text}
            </li>
            <button onClick = {completeHandler} className = "complete-btn">
                <i className = "fas fa-check"></i>
            </button>
            <button onClick = {schoolHandler} className = "school-btn">
                <i className = "fas fa-book"></i>
            </button>
            <button onClick = {deleteHandler} className = "trash-btn">
                <i className = "fas fa-trash"></i>
            </button>  
        </div>
    );
}

export default Todo;