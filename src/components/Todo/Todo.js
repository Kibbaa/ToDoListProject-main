import React, {useRef} from "react";
import { IconButton, Flex, Button, Checkbox, Input, } from "@chakra-ui/react";
import { DeleteIcon } from '@chakra-ui/icons'
import { deleteTodo,editPatchTodo,statusPatchTodo } from "../../services/instance";

function Todo({task,changeStatus,valueEdit,setValueEdit,setEdit,editTodo,edit,getTodos}){
    
    const inputValue = useRef(null)
    
    const deleteHandler = async () => {
        try{
            await deleteTodo(task);
            await getTodos();
        }catch(error){

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
                console.log('123');
                console.log(error);
            }
        }

    }
    const EditTodoHandler = async () => {
            try{
            await editPatchTodo(task,inputValue);
            await getTodos();
            setEdit(!edit)
            } catch(error){
                console.log('123');
                console.log(error);
            }
        }

    
    const statusHandler = async () => {
        try{
        await statusPatchTodo(task);
        await getTodos();
        }catch{

        }

    }
    // const statusHandler = () =>{
    //     axios.patch(`${process.env.REACT_APP_BASE_URL}task/${process.env.REACT_APP_userId}/${task.uuid}`,
    //     {
	// 		done: !task.done,
	// 		createdAt: task.createdAt,
	// 		updatedAt: new Date(),
    //     })
    //     .then(() =>{
    //         getTodos();
    //     })
    //     .catch((error) =>{
    //         if (error.response.status === 422){
    //             alert(`Task lenght shouldn't be empty`)
    //         } else if(error.response.status === 400){
    //             alert('Task shoold be unique')
    //         }
    //     })

    // }
    return(
        <Flex 
        max-width='700px' 
        justifyContent='space-between'
        alignItems='center' 
        flexDir='row' 
        border='solid' 
        borderRadius='6px'
        borderColor='purple.400'
        mb='2px'
        ml='10px'
        mr='10px'
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
                    <Flex justifyContent='center' alignItems='center'
                    overflow="hidden">
                            <Flex
                            width='310px'
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
                            fontSize='10px'>
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