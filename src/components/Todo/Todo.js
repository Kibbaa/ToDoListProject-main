import React from "react";
import { IconButton, Flex, Button, Checkbox, Input, } from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons'
import axios from "axios";

function Todo({task,changeStatus,valueEdit,setValueEdit,setEdit,saveTodoEdit,deleteTodo,editTodo,edit,getTodos}){
    const deleteHandler = () =>{
        axios.delete(`${process.env.REACT_APP_BASE_URL}task/${process.env.REACT_APP_userId}/${task.uuid}`)
            .then(() => {
                getTodos();
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const EditTodoHeandlerOnKey = (e) =>{
        if (e.keyCode == 27){
            setEdit(!edit)
        }else if(e.keyCode == 13){
        axios.patch(`${process.env.REACT_APP_BASE_URL}task/${process.env.REACT_APP_userId}/${task.uuid}`,
        {
            name: valueEdit ,
            done: task.done ,
            createdAt: task.createdAt ,
            updatedAt: new Date(),


        }
        )
        .then(() =>{
            getTodos();
            setEdit(!edit);
        })
        .catch((error) =>{
            console.log(error);
        })
    }
}
const EditTodoHeandler = () =>{
    axios.patch(`${process.env.REACT_APP_BASE_URL}task/${process.env.REACT_APP_userId}/${task.uuid}`,
    {
        name: valueEdit ,
        done: task.done ,
        createdAt: task.createdAt ,
        updatedAt: new Date(),


    }
    )
    .then(() =>{
        getTodos();
        setEdit(!edit);
    })
    .catch((error) =>{
        console.log(error);
    })
}
    const statusHandler = () =>{
        axios.patch(`${process.env.REACT_APP_BASE_URL}task/${process.env.REACT_APP_userId}/${task.uuid}`,
        {
			done: !task.done,
			createdAt: task.createdAt,
			updatedAt: new Date(),
        })
        .then(() =>{
            getTodos();
        })
        .catch((error) =>{
            console.log(error);
        })

    }
    const  handlerEditBlur = () =>{
        
        setEdit(!edit)
     }
    return(
        <Flex 
        width='400px' 
        justifyContent='space-between'
        alignItems='center' 
        flexDir='row' 
        border='solid' 
        borderRadius='6px'
        borderColor='purple.400'
        mb='2px'
        >
            {
            <Flex>
            <Checkbox
            iconColor='green.400'
            size='lg'
            mx='5px'
            colorScheme='purple'
            onChange={statusHandler} 
            isChecked={task.done}/>
            </Flex>
            }  
            {
            edit == task.uuid ? 
            <Flex >
                    <Input
                    fontWeight='bold'
                    color='white'
                    variant='flushed'
                    // onBlur={handlerEditBlur}
                    onKeyDown={EditTodoHeandlerOnKey}
                    autoFocus
                    placeholder="Add edit task"
                    onChange={(e) => setValueEdit(e.target.value)} 
                    value = {valueEdit}/>      
                <Flex>
                    <Button 
                     color='purple.500'
                     size='sm'
                     ml='5px'
                     mr='8px'
                     my='6px'
                     fontSize='13px'
                    onClick={EditTodoHeandler}
                    >
                        Save edit
                    </Button>
                </Flex> 
            </Flex>
                        :
                    <Flex justifyContent='center' alignItems='center'>
                            <Flex
                            width='324px'
                            outline='none'
                            fontWeight='700'
                            color='white'
                            justifyContent='space-between'
                            onDoubleClick={() => editTodo(task.uuid, task.name)} >
                                <Flex>
                                {task.name}
                                </Flex>
                                <Flex>
                                {task.createdAt}
                                </Flex>
                            </Flex>
                    </Flex>
                    }
                    {
                        <Flex mr='8px'>
                        <IconButton
                        color='purple.500'
                        size='sm'
                        my='6px'
                        fontSize='20px'
                        icon={<DeleteIcon/>}
                        onClick={deleteHandler}>
                        </IconButton>      
                        </Flex>
                    }

                    
            </Flex>
    )
}
export default Todo