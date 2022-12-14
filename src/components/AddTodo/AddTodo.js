import { Button, HStack, Input } from "@chakra-ui/react";
import React, { useRef } from "react";
import { postTask } from "../../services/instance";


function AddTodo( {getTodos,setError } ){
    const ref = useRef(null)
    

    const  submitAddHandler = async (e) =>{
        e.preventDefault()
        try{
            await postTask(ref)
            await getTodos()
            ref.current.value = ''
        }catch(error){
            setError(error.message)
        }
    }
    

    return(
        <form>
            <HStack mx='10px'>
                <Input
                ref={ref}
                fontWeight='bold'
                color='pink.100'
                _placeholder={{opacity:0.4, color: 'pink.100'}}
                size='lg'
                focusBorderColor='pink.600'
                placeholder="Add task"
                />
                <Button
                 fontWeight='bold'
                 size='lg'
                 variant='solid'
                 type='submit' 
                 onClick={submitAddHandler}> + Add</Button>
            </HStack>
        </form>
    )
}

export default AddTodo;
