import React from "react";

function TodoList ({edit , editTodo, deleteTodo,
     saveTodoEdit, setValueEdit, valueEdit,
      changeStatus,paginationArray,
     }){  

    //  const inputEditHandler = (e) => {
    //     e.target.classList.add('edit')
    //     // const inputEdit = 
    //     //  e.target.focus()
    //     //  e.target.onblur()
    //      console.log(e.target);
    //  }
    //  const saveEditHandler = (id) =>{
    //     saveTodoEdit(id)
    //  }
    //  const saveEditEnter = (e) =>{
    //     if (e.keyCode == 13){
    //         saveTodoEdit(id) 
    //     }
    //  }
     const saveTodoEnter = () =>{

     }
    return(
        <div className="task-pannels">
        {
            paginationArray.map(item => (
                
                <div className="single-task" key = {item.id}>
                    {
                     <div className="checkbox-div">
                       <input onChange={()=> changeStatus(item.id)} id="input-checkbox" checked={item.status}
                       className="checkbox-status-item" type="checkbox"/>
                       </div>
                    }  
                    {
                    edit == item.id ? 
                    <div className="input-edit-single-task">
                        <form>
                            <input
                            autoFocus
                            className="input-edit"
                            placeholder="Add edit task"
                            onChange={(e) => setValueEdit(e.target.value)} 
                            value = {valueEdit}/> 
                            
                            </form>
                        <div className="button-save-edit-div">
                            <button className="todo-button-save" onClick={() => saveTodoEdit(item.id)}>Save edit</button>
                        </div> 
                        </div>
                        :
                        <div className="task-delete-window">
                            <div onDoubleClick={() => editTodo(item.id, item.title)} className="task-window" >
                                {item.title}
                                {item.addingDate}
                            </div>
                            <div className="buttons-task-group">
                                <button className="todo-button-delete" onClick={ () => deleteTodo(item.id)}><span className="material-symbols-outlined">delete_forever</span></button>      
                            </div>
                    </div>
                    }

                    
                </div>
            
            ))
        }
        </div>
    )
}

export default TodoList;
