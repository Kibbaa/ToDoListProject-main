import React, { useState,useEffect } from 'react';
import Header from './components/header/header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Pagination from './components/pagination/Pagination';
import ButtonsSort from './components/sort buttons/ButtonsSort';
import { getAllTodos } from './services/instance';
import './App.css';
import {Alert, Flex,} from '@chakra-ui/react'

function App() {
  //STATES
  const [error, setError] = useState(false)
  const [todos, setTodo] = useState([]);
  const [valueEdit, setValueEdit] = useState('');
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState('');
  const [sortTypeSelected, setSortTypeSelected] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState('')
  const [countTodos, setCountTodos] = useState('')
  
 //123

  const getTodos = async () =>{
    try{
      const {data} = await getAllTodos({status, sortTypeSelected,todosPerPage,currentPage})
      setCountTodos(data.count)
      setTodo(data.tasks)

    }catch(error){
    }
  }
  // STATUS FUNC
  function changeStatus(uuid){
    const newTodo = todos.filter( item => {
        if( item.uuid === uuid) {
            item.done = !item.done
        }
        return item
        
    });
    setTodo(newTodo)
  };
//PAGINATION
  const todosPerPage = 7;
  const numberOfPages = [];

    for (let i=1; i <= Math.ceil(countTodos / todosPerPage); i++ ){
      numberOfPages.push(i) 
     }

//EDIT TODO FUNC
  function editTodo (uuid, name) {
    setValueEdit(name)
    setEdit(uuid)
  };
  useEffect(()=> {
    getTodos(); 
  },[currentPage,sortTypeSelected,status])

  return (
    
    <Flex
    justify='center'
    align='center'
    h="100vh"
    w='auto'
    bgGradient='linear(to-l, #7928CA, #FF0080)'
    >
    <Flex
     direction='column'
     justify='center'
     align='center'
     maxW='700px'
     bg='black'
     h='670px'
     borderRadius='10px'
     >
        
        <Header />
        <AddTodo 
        // submitAddHandler={submitAddHandler}
        setError={setError}
        setValue={setValue}
        getTodos={getTodos}
        value={value}
        />
        {error == true ? 
        <Alert></Alert>:
          
        <ButtonsSort
        sortTypeSelected={sortTypeSelected}
        status={status}
        setCurrentPage={setCurrentPage}
        setSortTypeSelected={setSortTypeSelected}
        setStatus={setStatus}
        />
        }
        <TodoList
     
        getTodos={getTodos}
        setEdit={setEdit}
        todos={todos}
        edit = {edit}
        editTodo ={editTodo}
        setValueEdit={setValueEdit}
        valueEdit={valueEdit}
        changeStatus={changeStatus}
       />
      {(numberOfPages.length > 0) ?(
        <Pagination
        setCurrentPage={setCurrentPage}
        numberOfPages={numberOfPages}
        currentPage={currentPage}
         />  
      ): ''}
      </Flex>
      
      </Flex>
  );
  }

export default App;
