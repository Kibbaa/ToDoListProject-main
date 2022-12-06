import { Flex } from "@chakra-ui/react";
import React from "react";
import Todo from "../Todo/Todo";

function TodoList ({edit , todos, editTodo, setValueEdit, valueEdit,
      changeStatus, setEdit, getTodos, deleteHandler
     }){  

    return(
       <Flex 
       alignItems='center'
       h='430px'
       flexDir='column'>
        {
            todos.map(item => <Todo 
            getTodos={getTodos}
            task={item} key={item.uuid}
            changeStatus={changeStatus}
            valueEdit={valueEdit}
            setValueEdit={setValueEdit}
            editTodo={editTodo}
            edit={edit}
            setEdit={setEdit}
            /> )
        }
        </Flex>
    )
}

export default TodoList;
