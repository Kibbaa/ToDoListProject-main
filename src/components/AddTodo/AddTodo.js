import { Button, HStack, Input } from "@chakra-ui/react";
import React, { useRef } from "react";
import { postTask } from "../../services/instance";


function AddTodo( { value, setValue ,getTodos } ){
    const ref = useRef(null)
    const inputHandler = (e) => {
        setValue(e.target.value)
        
        };

    const  submitAddHandler = async (e) =>{
        e.preventDefault()
        try{
            await postTask(ref)
            await getTodos()
        }catch{
            console.log(132);
        }
    }
    

    return(
        <form>
            <HStack>
                <Input
                ref={ref}
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
