import React from "react";

function AddTodo( { saveTodo, value, inputHandler } ){
    return(
        <form>
            <input
            className="todo-input" 
            placeholder="Add task"
            value={value} 
            onChange = {(e)=>inputHandler(e)}/>
            <button type='submit' className="todo-button" onClick={saveTodo}> + Add</button>
         </form>
    )
}

export default AddTodo;