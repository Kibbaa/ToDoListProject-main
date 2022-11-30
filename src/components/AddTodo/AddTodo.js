import { Button, HStack, Input,Divider } from "@chakra-ui/react";
import React from "react";

function AddTodo( { saveTodo, value, inputHandler } ){
    return(
        <form>
            <HStack>
                <Input
                fontWeight='bold'
                color='pink.100'
                _placeholder={{opacity:0.4, color: 'pink.100'}}
                size='lg'
                focusBorderColor='pink.600'
                placeholder="Add task"
                 value={value} 
                 onChange = {(e)=>inputHandler(e)}/>
                 <Button
                 fontWeight='bold'
                 size='lg'
                 colorScheme='pink'
                 variant='ghost'
                 type='submit' onClick={saveTodo}> + Add</Button>
            </HStack>
        </form>
        // <form>
        //     <input
        //     className="todo-input" 
        //     placeholder="Add task"
        //     value={value} 
        //     onChange = {(e)=>inputHandler(e)}/>
        //     <button type='submit' className="todo-button" onClick={saveTodo}> + Add</button>
        //  </form>
    )
}

export default AddTodo;