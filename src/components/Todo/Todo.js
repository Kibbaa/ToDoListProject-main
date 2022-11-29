import React from "react";
function Todo({task,changeStatus,valueEdit,setValueEdit,setEdit,saveTodoEdit,deleteTodo,editTodo,edit}){

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
     const saveEditEnter = (e) =>{
        if (e.keyCode == 13){
            saveTodoEdit(task.id) 
            e.target.blur()
        } else if (e.keyCode == 27){

            setEdit(!edit)
            e.target.blur()
        }
    }
    const  handlerEditBlur = () =>{
        setEdit(!edit)

     }
    return(
<div className="single-task">
                    {
                     <div className="checkbox-div">
                       <input onChange={()=> changeStatus(task.id)} id="input-checkbox" checked={task.status}
                       className="checkbox-status-item" type="checkbox"/>
                       </div>
                    }  
                    {
                    edit == task.id ? 
                    <div className="input-edit-single-task">
                        <form>
                            <input
                            onBlur={handlerEditBlur}
                            onKeyDown={saveEditEnter}
                            autoFocus
                            className="input-edit"
                            placeholder="Add edit task"
                            onChange={(e) => setValueEdit(e.target.value)} 
                            value = {valueEdit}/> 
                            
                            </form>
                        <div className="button-save-edit-div">
                            <button className="todo-button-save" onClick={() => saveTodoEdit(task.id)}>Save edit</button>
                        </div> 
                        </div>
                        :
                        <div className="task-delete-window">
                            <div onDoubleClick={() => editTodo(task.id, task.title)} className="task-window" >
                                {task.title}
                                {task.addingDate}
                            </div>
                            <div className="buttons-task-group">
                                <button className="todo-button-delete" onClick={ () => deleteTodo(task.id)}><span className="material-symbols-outlined">delete_forever</span></button>      
                            </div>
                    </div>
                    }

                    
                </div>
    )
}
export default Todo