import React from "react";
import { Heading } from "@chakra-ui/react";
 
function Header(){
    
    return(
        <Heading 
        size='xl'
        fontWeight='extrabold'
        mt='12'
        mb='10'
        color='#FFFFFF'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        >
        ToDo List
        </Heading>
        //  <div className="header">ToDo List</div>
    )
}

export default Header