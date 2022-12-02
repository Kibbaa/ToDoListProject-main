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
  const [sortTypeSelected, setSortTypeSelected] = useState('up');
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState('all')
  const [countTodos, setCountTodos] = useState()
  

   const getTodos =  () => {
    axios.get('http://learning.alpacait.ru:3000/v1/tasks/2?order=asc&pp=7&page=1')
    .then(res => {
      setCountTodos(res.data.count)
      console.log(countTodos);
      setTodo(res.data.tasks)
      console.log(res.data.tasks);
    })



  }
  useEffect(()=> {
    getTodos();
  },[])
  



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
    if (sortTypeSelected === 'up'){
      return dateUp();
    } else if(sortTypeSelected === 'down'){
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
  const filterHandler = (arr) => {
    if(status === 'done'){
      return arr.filter(todo => todo.done === true)
    } else if(status === 'undone'){
      return arr.filter(todo => todo.done === false)}
     else if (status === 'all'){
      return arr
    }
  }
  //Filter FunC
  const filteredArr = () => {
    const FilteredTodos = filterHandler(sortedArrayTodos())
    return FilteredTodos
  }

//PAGINATION
  const todosPerPage = 7;
  const numberOfPages = [];
  const array = filteredArr();
    for (let i=1; i <= Math.ceil(array.length / todosPerPage); i++ ){
      numberOfPages.push(i) 
     }
  const LastIndexTodo = currentPage * todosPerPage
  const FirtIndexTodo = LastIndexTodo - todosPerPage
  const paginationArray = array.slice(FirtIndexTodo, LastIndexTodo)
  const previousPage = () => setCurrentPage(prev=>prev-1);
  const nextPage = () => setCurrentPage(prev=>prev+1);
  const paginateHandler = (number) => setCurrentPage(number)

  //ADD TODO FUNCTION
  const inputHandler = (e) => {
    setValue(e.target.value)
    };
  const saveTodo = (e) => {
    if (value !== ''){
    setTodo([
        ...todos, {
              uuid: uuidv4(),
              name: value,
              done: false,
              date: Date.now(),
              createdAt: ' ' + new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
         }
      ]);}
      setValue('')
      e.preventDefault()
      console.log(todos);
    };
//DELETE TODO FUNC
function deleteTodo(uuid) {
  const newTodo = todos.filter( item => item.uuid !== uuid);
  setTodo(newTodo);
  if (paginationArray.length === 1){
    if (currentPage > 1)
    setCurrentPage(prev => prev - 1)
  }
};
//EDIT TODO FUNC
function editTodo (uuid, name) {
  setValueEdit(name)
  setEdit(uuid)
  
};

//SAVE EDIT TODO FUNC
function saveTodoEdit (uuid){
  const newTodo = [...todos].map(item => {
      if (item.uuid == uuid){
          item.name = valueEdit
      }
      return item
  });
  setTodo(newTodo);
  setEdit(null);
  };

useEffect(()=>{
  filteredArr()
},[status,sortTypeSelected])

useEffect(() =>{
  setTodo(sortedArrayTodos())
},[sortTypeSelected]);
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
        value={value}
        inputHandler={inputHandler}
        saveTodo={saveTodo}/>
        <ButtonsSort
        sortTypeSelected={sortTypeSelected}
        status={status}
        setCurrentPage={setCurrentPage}
        setSortTypeSelected={setSortTypeSelected}
        sortedArrayTodos={sortedArrayTodos}
        setStatus={setStatus}
        />

        <TodoList
        setEdit={setEdit}
        todos={todos}
        edit = {edit}
        editTodo ={editTodo}
        deleteTodo={deleteTodo}
        paginationArray={paginationArray}
        saveTodoEdit={saveTodoEdit}
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
