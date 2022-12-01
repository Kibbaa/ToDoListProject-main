import React from "react";
import { IconButton, Flex, Button, Checkbox, Input, } from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons'

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
        <Flex 
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
            onChange={()=> changeStatus(task.id)} 
            isChecked={task.status}/>
            </Flex>
            }  
            {
            edit == task.id ? 
            <Flex >
                    <Input
                    width='290px'
                    fontWeight='bold'
                    color='white'
                    variant='flushed'
                    //onBlur={handlerEditBlur}
                    onKeyDown={saveEditEnter}
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
                    onClick={() => saveTodoEdit(task.id)}>
                        Save edit
                    </Button>
                </Flex> 
            </Flex>
                        :
                    <Flex justifyContent='center' alignItems='center'>
                            <Flex
                            outline='none'
                            fontWeight='700'
                            color='white'
                            justifyContent='center'
                            width='353px' 
                            onDoubleClick={() => editTodo(task.id, task.title)} >
                                {task.title}
                                {task.addingDate}
                            </Flex>
                            <Flex mr='8px'>
                                <IconButton
                                color='purple.500'
                                size='sm'
                                my='6px'
                                fontSize='20px'
                                icon={<DeleteIcon/>}
                                onClick={ () => deleteTodo(task.id)}>
                                </IconButton>      
                            </Flex>
                    </Flex>
                    }

                    
            </Flex>
    )
}
export default Todo