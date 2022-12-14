import React from "react";
import { IconButton, Flex, Button, ButtonGroup } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

function Pagination({numberOfPages, currentPage, setCurrentPage}) {

  const previousPage = () => setCurrentPage(prev=>prev-1);
  const nextPage = () => setCurrentPage(prev=>prev+1);
  const paginateHandler = (number) => setCurrentPage(number);
  
  return(
    
      <Flex
      pos='absolute'
      bottom='0'
      minWidth='300px'
      maxWidth='800px'
      justifyContent='space-between'
      my='10px'>  
            <IconButton
            color='pink.800'
            fontSize='35px'
            icon={<ChevronLeftIcon/>}
            isDisabled={currentPage === 1} onClick={previousPage}>
            </IconButton>
               <ButtonGroup
               fontSize='20px'
               display='flex'
               alignItems='center'
               justifyContent='center'>
               { numberOfPages.map(number =>(
                 <Flex key={number} >
                   <Button
                   color={`${(currentPage === number) ? 'pink.800' : 'pink.300'}`}
                   fontSize='22px'
                   size='sm'
                   href="#" onClick={() => paginateHandler(number)}>
                     {number}
                   </Button>
                 </Flex> 
               ))
               }
               </ButtonGroup>
            <IconButton 
            color='pink.800'
            fontSize='35px'
            icon={<ChevronRightIcon/>}
            isDisabled={currentPage === numberOfPages.length} onClick={nextPage}>
            </IconButton>
      </Flex>
    
    )
}

export default Pagination;