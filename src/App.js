import React, { useState,useEffect } from 'react';
import Header from './components/header/header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Pagination from './components/pagination/Pagination';
import ButtonsSort from './components/sort buttons/ButtonsSort';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import {Flex} from '@chakra-ui/react'
import axios from 'axios';


function App() {
  //STATES
  const [todos, setTodo] = useState([]);
  const [valueEdit, setValueEdit] = useState('');
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState('');
  const [sortTypeSelected, setSortTypeSelected] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState('')
  const [countTodos, setCountTodos] = useState()
  

   const getTodos =  () => {
    axios.get(`${process.env.REACT_APP_BASE_URL}tasks/${process.env.REACT_APP_userId}?filterBy=${status}&order=${sortTypeSelected}&pp=${todosPerPage}&page=${currentPage}`)
      .then(res => {
      setTodo(res.data.tasks)
      setCountTodos(res.data.count);
    })
      .catch((error) => { console.log(error);
      })
      

  }
  useEffect(()=> {
    getTodos();
  },[currentPage,sortTypeSelected,status])
  



  // Sort by date with down
  const dateUp = () =>{
    return [...todos].sort((a, b) => a.date-b.date ) 
  };
  // Sort by date down
  const dateDown = () => { 
    return [...todos].sort( (a, b) => b.date-a.date )
  };
  // Sort by date with pag
  const sortedArrayTodos = () => {
    if (sortTypeSelected === 'asc'){
      return dateUp();
    } else if(sortTypeSelected === 'desc'){
      return dateDown();
    }
  }

  // STATUS FUNC
  function changeStatus(uuid){
    const newTodo = todos.filter( item => {
        if( item.uuid == uuid) {
            item.done = !item.done
        }
        return item
        
    });
    setTodo(newTodo)
  };
// Handler for filter todos
  // const filterHandler = (arr) => {
  //   if(status === 'done'){
  //     return arr.filter(todo => todo.done === true)
  //   } else if(status === 'undone'){
  //     return arr.filter(todo => todo.done === false)}
  //    else if (status === ''){
  //     return arr
  //   }
  // }
  //Filter FunC
  // const filteredArr = () => {
  //   const FilteredTodos = filterHandler(sortedArrayTodos())
  //   return FilteredTodos
  // }

//PAGINATION
  const todosPerPage = 7;
  const numberOfPages = [];
  // const array = filteredArr();
  //   for (let i=1; i <= Math.ceil(array.length / todosPerPage); i++ ){
  //     numberOfPages.push(i) 
  //    }
  // const LastIndexTodo = currentPage * todosPerPage
  // const FirtIndexTodo = LastIndexTodo - todosPerPage
  // const paginationArray = array.slice(FirtIndexTodo, LastIndexTodo)
  const previousPage = () => setCurrentPage(prev=>prev-1);
  const nextPage = () => setCurrentPage(prev=>prev+1);
  const paginateHandler = (number) => setCurrentPage(number)
  
//EDIT TODO FUNC
function editTodo (uuid, name) {
  setValueEdit(name)
  setEdit(uuid)
  
};

//SAVE EDIT TODO FUNC

useEffect(()=> {
  getTodos();
},[currentPage,sortTypeSelected,status])

// useEffect(()=>{
//   filteredArr()
// },[status,sortTypeSelected])

// useEffect(() =>{
//   setTodo(sortedArrayTodos())
// },[sortTypeSelected]);
  return (
    
    // <div className="App-all">
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
     w='520px'
     bg='black'
     h='670px'
     borderRadius='10px'
     >
        <Header />
        
        <AddTodo 
        setValue={setValue}
        getTodos={getTodos}
        value={value}
        />
        <ButtonsSort
        sortTypeSelected={sortTypeSelected}
        status={status}
        setCurrentPage={setCurrentPage}
        setSortTypeSelected={setSortTypeSelected}
        sortedArrayTodos={sortedArrayTodos}
        setStatus={setStatus}
        />

        <TodoList
        getTodos={getTodos}
        setEdit={setEdit}
        todos={todos}
        edit = {edit}
        editTodo ={editTodo}
        // paginationArray={paginationArray}
        setValueEdit={setValueEdit}
        valueEdit={valueEdit}
        changeStatus={changeStatus}
       />
      {(numberOfPages.length > 0) ?(
        <Pagination
        numberOfPages={numberOfPages}
        paginateHandler={paginateHandler}
        previousPage={previousPage}
        nextPage={nextPage}
        currentPage={currentPage}
         />  
      ): ''}
      </Flex>
      </Flex>
    // </div>
  );
  }

export default App;
