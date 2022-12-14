import { Flex } from "@chakra-ui/react";
import React from "react";
import Todo from "../Todo/Todo";
import Loader from '../Loader/Loader'

function TodoList ({edit , todos, editTodo, setValueEdit, valueEdit,
      changeStatus,loading, setEdit, getTodos,setError
     }){  

    
        return(
       <Flex 
       pos='relative'
       width='100%'
       maxWidth='820px'
       alignItems='center'
    //    h='430px'
       flexDir='column'>
        { loading === true ? <Loader/> : null
        }
        {
            todos.map(item => <Todo
            setError={setError} 
            getTodos={getTodos}
            task={item} key={item.uuid}
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
