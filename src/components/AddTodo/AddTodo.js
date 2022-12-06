import { Button, chakra, HStack, Input } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import {Alert} from '@chakra-ui/react'


function AddTodo( { value, setValue ,submitAddHandler } ){
    
    const inputHandler = (e) => {
        setValue(e.target.value)
        
        };


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
                 variant='solid'
                 type='submit' onClick={submitAddHandler}> + Add</Button>
            </HStack>
        </form>
    )
}

export default AddTodo;
