import React from "react";

function TodoList ({edit , editTodo, deleteTodo,
     saveTodoEdit, setValueEdit, valueEdit,
      changeStatus,paginationArray
     }){  
    return(
        <div className="task-pannels">
        {
            paginationArray.map(item => (
                <div className="single-task" key = {item.id}>
                    {<div>
                       <input id="input-checkbox" checked={item.status ? true:false}
                       className="checkbox-status-item" onChange={() => changeStatus(item.id)} type="checkbox"/>
                       <span className="span-chechbox">
                       </span>
                     </div>
                    }
                    {
                    edit == item.id ? 
                        <div>
                            <input
                            className="input-edit"
                            placeholder="Add edit task"
                            onChange={(e) => setValueEdit(e.target.value)} 
                            value = {valueEdit}/> 
                            
                        </div>
                        :
                        <div className="task-window" >
                            {item.title}
                            {item.addingDate}
                        </div>
                    }

                    {
                        edit == item.id ?
                        <div className="button-save-edit-div">
                            <button className="todo-button-save" onClick={ () => saveTodoEdit(item.id)}>Save edit</button>
                        </div> 
                                : 
                        <div className="buttons-task-group">
                            <button className="todo-button-delete" onClick={ () => deleteTodo(item.id)}><span className="material-symbols-outlined">delete_forever</span></button>
                            <button className="todo-button-edit" onClick={ () => editTodo(item.id, item.title)}><span className="material-symbols-outlined">edit</span></button>        
                        </div>
                    }
                    
                </div>
            ))
        }
        </div>
    )
}

export default TodoList;
