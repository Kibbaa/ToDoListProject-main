import React, {useRef} from "react";
import { IconButton, Flex, Button, Checkbox, Input, } from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons'
import { deleteTodo,editPatchTodo,statusPatchTodo } from "../../services/instance";

function Todo({task,valueEdit,setValueEdit,setEdit,editTodo,edit,getTodos,setError}){
    
    const inputValue = useRef(null)
    
    const deleteHandler = async (e) => {
        e.target.disabled = true
        try{ 
            await deleteTodo(task);
            await getTodos();
        }catch(error){
            e.target.disabled = false
            setError(error.message)
        }
    }
    
    const EditTodoHandlerOnKey = async (e) => {
        if (e.keyCode === 27){
            setEdit(!edit)
        }
        if(e.keyCode === 13){
            try{
            await editPatchTodo(task,inputValue);
            await getTodos();
            setEdit(!edit)
            } catch(error){
                setError(error.message)
            }
        }

    }
    const EditTodoHandler = async () => {
            try{
            await editPatchTodo(task,inputValue);
            await getTodos();
            setEdit(!edit)
            } catch(error){
                setError(error.message)
            }
        }

    
    const statusHandler = async () => {
        try{
        await statusPatchTodo(task);
        await getTodos();
        }catch(error){
            setError(error.message)
        }

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
        
        maxWidth='800px' 
        width='100%'
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
            edit === task.uuid ? 
            <Flex width='100%' >
                    <Input
                    ref={inputValue}
                    fontWeight='bold'
                    color='white'
                    variant='flushed'
                    // onBlur={handlerEditBlur}
                    // onKeyDown={EditTodoHeandlerOnKey}
                    onKeyDown={EditTodoHandlerOnKey}
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
                    onClick={EditTodoHandler}
                    >
                        Save edit
                    </Button>
                </Flex> 
            </Flex>
                        :
                    <Flex
                    padding='10px' w={['xs','sm','md','2xl','3xl']} justifyContent='center' alignItems='center'
                    overflow="hidden">
                            <Flex
                            // w={['xs','sm','md','2xl','3xl']}
                            // maxWidth='200px'
                            width='100%'
                            outline='none'
                            fontWeight='700'
                            color='white'
                            justifyContent='space-between'
                            onDoubleClick={() => editTodo(task.uuid, task.name)}
                            overflow='hidden'
                            whiteSpace='nowrap'
                            textOverflow='ellipsis'
                            >
                                {task.name} 
                                
                            </Flex>
                            <Flex
                            color='pink.200'
                            ml='5px'
                            fontSize="14px">
                                {task.createdAt}
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