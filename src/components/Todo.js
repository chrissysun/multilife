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

    // categorize task as work  
    const workHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    // adjust whether it's categorized as 'work'
                    ...item, work: !item.work
                }
            }
            return item;
        }));
    };

    // categorize task as personal project  
    const personalProjectHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    // adjust whether it's categorized as 'personal project'
                    ...item, personalProject: !item.personalProject
                }
            }
            return item;
        }));
    };

    // categorize task as family  
    const familyHandler = () => {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    // adjust whether it's categorized as 'family'
                    ...item, family: !item.family
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
                ${todo.school ? "school" : ""}
                ${todo.work ? "work" : ""}
                ${todo.personalProject ? "personalProject" : ""}
                ${todo.family ? "family" : ""}
                `}>
                    {text}
            </li>
            <button onClick = {completeHandler} className = "complete-btn">
                <i className = "fas fa-check"></i>
            </button>
            <button onClick = {schoolHandler} className = "school-btn">
                <i className = "fas fa-book"></i>
            </button>
            <button onClick = {workHandler} className = "work-btn">
                <i className = "fas fa-briefcase"></i>
            </button>
            <button onClick = {personalProjectHandler} className = "personalProject-btn">
                <i className = "fas fa-laptop"></i>
            </button>
            <button onClick = {familyHandler} className = "family-btn">
                <i className = "fas fa-home"></i>
            </button>
            <button onClick = {deleteHandler} className = "trash-btn">
                <i className = "fas fa-trash"></i>
            </button>  
        </div>
    );
}

export default Todo;