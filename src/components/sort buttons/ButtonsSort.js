
import React from "react";
import { IconButton, Flex, HStack,Button } from "@chakra-ui/react";
import { ArrowDownIcon,ArrowUpIcon } from '@chakra-ui/icons'


function ButtonsSort({loading, setSortTypeSelected, setStatus, setCurrentPage, status,sortTypeSelected}){
    
    
    const upHandler = () =>{
        setSortTypeSelected('asc')
    }
    const downHandler = () =>{
        setSortTypeSelected('desc')
    }
    const setStatusAllHandler = () => {
        setStatus('')
        setCurrentPage(1)
    }
    const setStatusDoneHandler = () =>{
        setStatus('done')
        setCurrentPage(1)
    }
    const setStatusUndoneHandler = () =>{
        setStatus('undone')
        setCurrentPage(1)
    }

    return(
        <Flex 
        justifyContent='space-between'
        maxWidth='500px'
        
        >
            <HStack 
            marginRight='60px'
            my='10px'>
            <IconButton
            fontSize='25px' 
            icon={<ArrowUpIcon/>}
            color={`${(sortTypeSelected === 'asc') ? 'pink.800' : 'pink.300'}`} 
            onClick={upHandler}
            disabled={loading} >
            </IconButton>
            <IconButton     
            fontSize='25px'
            icon={<ArrowDownIcon/>}
            color={`${(sortTypeSelected === 'desc') ? 'pink.800' : 'pink.300'}`} 
            onClick={downHandler} 
            disabled={loading}>
            </IconButton>
            </HStack>  
                <HStack>
                    <Button color={`${(status === '') ? 'pink.800' : 'pink.300'}`} 
                    onClick={setStatusAllHandler} disabled={loading}>All</Button>
                    <Button color={`${(status === 'undone') ? 'pink.800' : 'pink.300'}`} 
                    onClick={setStatusUndoneHandler} disabled={loading}>Open</Button>
                    <Button color={`${(status === 'done') ? 'pink.800' : 'pink.300'}`}
                    onClick={setStatusDoneHandler} disabled={loading}>Closed</Button>
                </HStack>
                </Flex>
    )
    }

export default ButtonsSort