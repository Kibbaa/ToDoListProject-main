import { chakra } from "@chakra-ui/react";
import React from "react";
import { IconButton, Flex, HStack,Button } from "@chakra-ui/react";
import { ArrowDownIcon,ArrowUpIcon } from '@chakra-ui/icons'


function ButtonsSort({ setSortTypeSelected, setStatus, setCurrentPage, status,sortTypeSelected}){
    
    const upHandler = () =>{
        setSortTypeSelected('up')
    }
    const downHandler = () =>{
        setSortTypeSelected('down')
    }
    const setStatusAllHandler = () => {
        setStatus('all')
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
        <Flex>
        {/* <div className="sort-buttons"> */}
          {/* <div className="buttons-date"> */}
            <HStack marginRight='60px'
            my='10px'>
            <IconButton
            fontSize='25px' 
            icon={<ArrowUpIcon/>}
            color={`${(sortTypeSelected === 'up') ? 'pink.800' : 'pink.300'}`} 
            onClick={upHandler} >
            </IconButton>
            <IconButton     
            fontSize='25px'
            icon={<ArrowDownIcon/>}
            color={`${(sortTypeSelected === 'down') ? 'pink.800' : 'pink.300'}`} 
            className={`${(sortTypeSelected === 'down') ? 'button-date-down-select' : "button-date-down" }`} 
            onClick={downHandler}>
            
            </IconButton>
            </HStack>
                {/* </div> */}
                <HStack>
                    <Button color={`${(status === 'all') ? 'pink.800' : 'pink.300'}`} 
                    onClick={setStatusAllHandler}>All</Button>
                    <Button color={`${(status === 'undone') ? 'pink.800' : 'pink.300'}`} 
                    onClick={setStatusUndoneHandler}>Open</Button>
                    <Button color={`${(status === 'done') ? 'pink.800' : 'pink.300'}`}
                    onClick={setStatusDoneHandler}>Closed</Button>
                </HStack>
                </Flex>
                // </div>
    )
    }

export default ButtonsSort