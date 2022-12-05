import { Button, HStack, Input } from "@chakra-ui/react";
import axios from "axios";
import React from "react";


function AddTodo( { saveTodo, value, setValue ,getTodos } ){
    
    const inputHandler = (e) => {
        setValue(e.target.value)
        console.log(e.target.value);
        };

    const submitAddHandler = (e) => {
        e.preventDefault()
        
        axios.post(`${process.env.REACT_APP_BASE_URL}task/${process.env.REACT_APP_userId}`,
        {
            name:value,
            done:false,
            createdAt: new Date(),
            updatedAt: new Date(),
        })
        .then(() => {
            getTodos();
        })
        .catch((error) =>{
            console.log(error);
        }
        )};

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