import React from "react";

function TodoList ({edit,editTodo,deleteTodo,
    statusTodo,saveTodoEdit,todoFilter,setValueEdit,valueEdit,
    setFilterDate, filtered, pagi
     }){  
    // useEffect(()=>{
    //     const newTodos = todos.map(todo=> todosStatus.status.includes(todo.status)).sort(a,b,func(todosStatus.time))
    // },[filters])

    // const todosStatus = {
    //     status:['done','undone'],
    //     time:'up' //'down
    // }
//     function filterByDate(){
//         if(filterDate === 'up'){
//            const dateUp = todo.sort( (a, b) => a.date-b.date )
//     setTodoHandler(dateUp);
//         } else if (filterDate === 'down'){
//             const dateDown = todo.sort( (a, b) => b.date-a.date )
// setTodoHandler(dateDown)
//         }
        
//     }
    return(
        <div className="task-pannels">
            <div className="sort-buttons">
            <div className="buttons-date">
                <button className="button-date-up" onClick={ () => setFilterDate('up')} ><span className="material-symbols-outlined">arrow_upward</span></button>
                <button className="button-date-down" onClick={ () => setFilterDate('down')}><span className="material-symbols-outlined">arrow_downward</span></button>
            </div>
            <div className="buttons-by-done">
                <button className="button-by-done-all" onClick={ () => todoFilter('all') }>All</button>
                <button className="button-by-done-open" onClick={ () => todoFilter(true) }>Open</button>
                <button className="button-by-done-cloused" onClick={ () => todoFilter(false)}>Closed</button>
            </div>
            </div>
        {
            pagi.map( item => (
                <div className="single-task" key = {item.id}>
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
                        <div className="task-window">
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
                            <button className="todo-button-selector" onClick={ () => statusTodo(item.id)}><span className="material-symbols-outlined">select_check_box</span></button>
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
