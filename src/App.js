import React, { useState,useEffect } from 'react';
import Header from './components/header/header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Pagination from './components/pagination/Pagination';
import ButtonsSort from './components/sort buttons/ButtonsSort';
import { getAllTodos } from './services/instance';
import './App.css';
import { Flex} from '@chakra-ui/react'
import {Alert,AlertIcon,AlertTitle} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
function App() {
  //STATES
  const [error, setError] = useState('')
  const [todos, setTodo] = useState([]);
  const [valueEdit, setValueEdit] = useState('');
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState('');
  const [sortTypeSelected, setSortTypeSelected] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState('')
  const [countTodos, setCountTodos] = useState('')
  const [loading,setLoading] = useState('')

  const errorClose = () =>{
    setError('')
  }
  const getTodos = async () =>{
    try{
      setLoading(true)
      const {data} = await getAllTodos({status, sortTypeSelected,todosPerPage,currentPage})
      setCountTodos(data.count)
      setTodo(data.tasks)
      setLoading(false)
    }catch(error){
      setLoading(false)
       setError(error.message)
        
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
  useEffect(()=>{
    if (todos.length < 1 && currentPage >= 1) {
			setCurrentPage(1)}
  },[countTodos,todos.length])
  useEffect(()=> {
    getTodos(); 
  },[currentPage,sortTypeSelected,status])

  return (
  <>
   
    <Flex
    justify='center'
    align='center'
    h="100vh"
    w='auto'
    bgGradient='linear(to-l, #7928CA, #FF0080)'
    >
   <Flex
    top='0' 
    position='absolute'>
    <Alert
					borderRadius='5px'
					maxWidth='sm'
					status='error'
					opacity={`${error ? '1' : '0'}`}
					transition=' opacity 0.3s ease-in-out'
				>
					<AlertIcon />
					<AlertTitle w='100%'>
						{error}
					</AlertTitle>
					<CloseIcon
						onClick={errorClose}
						_hover={{ cursor: 'pointer' }}
					/>
				</Alert>
        </Flex>
    <Flex
     direction='column'
    //  justify='center'
     align='center'
     maxW='800px'
     bg='black'
     mh='670px'
     borderRadius='10px'
     minWidth='60%'
     minHeight='85%'
     pb='60px'
     pos='relative'
     >
        
        <Header />
        <AddTodo 
        setLoading={setLoading}
        setError={setError}
        setValue={setValue}
        getTodos={getTodos}
        value={value}
        />
        {error == true ? 
        <Alert></Alert>:
          
        <ButtonsSort
        loading={loading}
        sortTypeSelected={sortTypeSelected}
        status={status}
        setCurrentPage={setCurrentPage}
        setSortTypeSelected={setSortTypeSelected}
        setStatus={setStatus}
        />
        }
        <TodoList
        loading={loading}
        setError={setError}
        getTodos={getTodos}
        setEdit={setEdit}
        todos={todos}
        edit = {edit}
        editTodo ={editTodo}
        setValueEdit={setValueEdit}
        valueEdit={valueEdit}
       />
      {(numberOfPages.length > 1) ?(
        <Pagination
        setCurrentPage={setCurrentPage}
        numberOfPages={numberOfPages}
        currentPage={currentPage}
         />  
      ): ''}
      </Flex>
      
      </Flex>
      </>
  );
  }

export default App;
