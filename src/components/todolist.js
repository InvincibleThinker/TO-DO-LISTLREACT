import React from "react";
//import componentes
import Todo from "./todo";



const TodoList = ({todos, setTodos, filteredTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo todos={todos} todo={todo} setTodos={setTodos} key={todo.id} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;