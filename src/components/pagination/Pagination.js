import React from "react";
import { IconButton, Flex, ListItem, UnorderedList, Button, ButtonGroup } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

function Pagination({nextPage, previousPage, paginateHandler,numberOfPages, currentPage}) {
    

  
  return(
    
      <Flex
      width='500px'
      justifyContent='space-between'
      my='10px'>  
            <IconButton
            color='pink.800'
            fontSize='35px'
            icon={<ChevronLeftIcon/>}
            isDisabled={currentPage == 1} onClick={previousPage}>
            </IconButton>
               <ButtonGroup
               fontSize='20px'
               display='flex'
               alignItems='center'
               justifyContent='center'>
               { numberOfPages.map(number =>(
                 <Flex key={number} >
                   <Button
                   color='pink.700'
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
            isDisabled={currentPage == numberOfPages.length} onClick={nextPage}>
            </IconButton>
      </Flex>
    
    )
}

export default Pagination;