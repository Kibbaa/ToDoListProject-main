import { Box } from "@chakra-ui/react";
import React from "react";
import Todo from "../Todo/Todo";

function TodoList ({edit , editTodo, deleteTodo,
     saveTodoEdit, setValueEdit, valueEdit,
      changeStatus,paginationArray, setEdit
     }){  

    return(
       <Box>
        {
            paginationArray.map(item => <Todo 
            task={item} key={item.id}
            changeStatus={changeStatus}
            valueEdit={valueEdit}
            setValueEdit={setValueEdit}
            saveTodoEdit={saveTodoEdit}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            edit={edit}
            setEdit={setEdit}
            /> )
        }
                </Box>
    )
}

export default TodoList;
