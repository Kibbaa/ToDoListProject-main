import React, { useState,useEffect } from 'react';
import Header from './components/header/header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Pagination from './components/pagination/Pagination';
import ButtonsSort from './components/sort buttons/ButtonsSort';
import './App.css';

function App() {
  //STATES
  const [todos, setTodo] = useState([
    {id:1, title:'1', status: true, date: 1 },
    {id:2, title:'2', status: true, date: 2},
    {id:3, title:'3', status: true, date: 3},
    {id:4, title:'4', status: false, date: 4},
    {id:5, title:'5', status: false, date: 5},
    {id:6, title:'6', status: false, date: 6},
    {id:7, title:'7', status: false, date: 7},
  ]);
  const [valueEdit, setValueEdit] = useState('');
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  const [sortTypeSelected, setSortTypeSelected] = useState('up');
  const [currentPage, setCurrentPage] = useState(1);
  const [status, setStatus] = useState('all')
  

  // Sort by date with down
  const dateUp = () =>{
    return [...todos].sort((a, b) => a.date-b.date ) 
  };
  // Sort by date down
  const dateDown = () => { 
    return [...todos].sort( (a, b) => b.date-a.date )
  };
  // Sort by date with pag
  const sortedArrayTodos = (() => {
    if (sortTypeSelected === 'up'){
      return dateUp();
    } else if(sortTypeSelected === 'down'){
      return dateDown();
    }
  })

  //STATUS FUNC
// function statusTodo(id){
//   const newTodo = todos.filter( item => {
//       if( item.id == id) {
//           item.status = !item.status
//       }
//       return item
      
//   });
//   setTodo(newTodo)
// };
//Handler for filter todos
  const filterHandler = (arr) => {
    if(status === 'done'){
      return arr.filter(todo => todo.status === false)
    } else if(status === 'undone'){
      return arr.filter(todo => todo.status === true)}
     else if (status === 'all'){
      return arr
    }
  }
  //Filter FunC
  const filteredArr = (() => {
    const FilteredTodos = filterHandler(sortedArrayTodos())
    return FilteredTodos
  })

//PAGINATION
  const todosPerPage = 7;
  const NumberOfPages = [];
  const PaginationArray = (() =>{
    for (let i=1; i <= Math.ceil(filteredArr().length / todosPerPage); i++ ){
      NumberOfPages.push(i) 
     };
  const LastIndexTodo = currentPage * todosPerPage
  const FirtIndexTodo = LastIndexTodo - todosPerPage
  return filteredArr().slice(FirtIndexTodo, LastIndexTodo);
 })
 
//  const handlerPagination
 const previousPage = () => setCurrentPage(prev=>prev-1);
 const nextPage = () => setCurrentPage(prev=>prev+1);
  
  const paginateHandler = (number) => setCurrentPage(number)

  //ADD TODO FUNCTION
  const inputHandler = (e) => {
    setValue(e.target.value)
    };
  const saveTodo = (e) => {
    setTodo([
        ...todos, {
              id: todos.length + 1,
              title: value,
              status: false,
              date: Date.now(),
              addingDate: ' ' + new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
         }
      ]);
      e.preventDefault()
    };
//DELETE TODO FUNC
function deleteTodo(id) {
  const newTodo = todos.filter( item => item.id !== id);
  setTodo(newTodo);
};
//EDIT TODO FUNC
function editTodo (id, title) {
  setValueEdit(title)
  setEdit(id)
};
// //FILTER BY DONE/UNDONE
// function todoFilter(status) {
//   if(status === 'all'){
//       setFiltered(todos)
//   } else{
//       let newTodo = [...todos].filter(item => item.status === status)
//       setFiltered(newTodo)
//   }
// };
//SAVE EDIT TODO FUNC
function saveTodoEdit (id){
  const newTodo = [...todos].map(item => {
      if (item.id == id){
          item.title = valueEdit
      }
      return item
  });
  setTodo(newTodo);
  setEdit(null);
  };

//Filter by Date
// function filterByDate(){
//   if(filterDate === 'up'){
//       const dateUp = [...todos].sort( (a, b) => a.date-b.date )
//           setTodo(dateUp);
//   } else if (filterDate === 'down'){
//       const dateDown = [...todos].sort( (a, b) => b.date-a.date )
//           setTodo(dateDown)
//   }
//   };
// //Pagination
//  const NumberOfPages = [];
//  const todosPerPage = 7
//  const LastIndexTodo = currentPage * todosPerPage
//  const FirtIndexTodo = LastIndexTodo - todosPerPage
//  const pagi = filtered.slice(FirtIndexTodo, LastIndexTodo);
//  for (let i=1; i <= Math.ceil(todos.length / todosPerPage); i++ ){
//   NumberOfPages.push(i) 
//  };
// //  const handlerPagination
//  const previousPage = () => setCurrentPage(prev=>prev-1);
//  const nextPage = () => setCurrentPage(prev=>prev+1);
//  const paginateHandler = (number) => setCurrentPage(number)
useEffect(()=>{
  filteredArr()
},[status])

useEffect(() =>{
  setTodo(sortedArrayTodos())
},[sortTypeSelected]);

  return (
    <div className="App-all">
        <Header 
        />

        <AddTodo 
        value={value}
        inputHandler={inputHandler}
        saveTodo={saveTodo}/>
        <ButtonsSort
        setSortTypeSelected={setSortTypeSelected}
        sortedArrayTodos={sortedArrayTodos}
        setStatus={setStatus}
        />

        <TodoList
        todos={todos}
        edit = {edit}
        editTodo ={editTodo}
        deleteTodo={deleteTodo}
        PaginationArray={PaginationArray}
        saveTodoEdit={saveTodoEdit}
        setValueEdit={setValueEdit}
        valueEdit={valueEdit}
       />

        <Pagination
        NumberOfPages={NumberOfPages}
        paginateHandler={paginateHandler}
        previousPage={previousPage}
        nextPage={nextPage}
         />
    </div>
  );
  }

export default App;
