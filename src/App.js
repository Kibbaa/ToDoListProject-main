import React, { useState,useEffect } from 'react';
import Header from './components/header/header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Pagination from './components/pagination/Pagination';
import './App.css';

function App() {
  //STATES
  const [todos, setTodo] = useState([
    {id:1, title:'1', status: true, date: 0 },
    {id:2, title:'2', status: true, date: 0},
    {id:3, title:'3', status: true, date: 0},
    {id:4, title:'4', status: false, date: 0},
    {id:5, title:'5', status: false, date: 0},
    {id:6, title:'6', status: false, date: 0},
    {id:7, title:'7', status: false, date: 0},
  ]);
  const [valueEdit, setValueEdit] = useState('');
  const [filtered, setFiltered] = useState(todos);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  const [filterDate, setFilterDate] = useState('up');
  const [currentPage, setCurrentPage] = useState(1)


  const sortedArr = ((todos) => {
    
    return []
  })()
  const filteredArr = (() => {

    return []
  })()

  const parginatedArr = (() => {
    
    return []
  })()

    useEffect( () => {
      setFiltered(todos)
    },[todos]);

    useEffect(() =>{
      filterByDate()
    },[filterDate]);

  //ADD TODO FUNCTION
  const inputHandler = (e) => {
    setValue(e.target.value)
    };
  const saveTodo = (e) => {
    setTodo([
        ...todos, {
              id: todos.length + 1,
              title: value,
              status: true,
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
//FILTER BY DONE/UNDONE
function todoFilter(status) {
  if(status === 'all'){
      setFiltered(todos)
  } else{
      let newTodo = [...todos].filter(item => item.status === status)
      setFiltered(newTodo)
  }
};
//STATUS FUNC
function statusTodo(id){
  const newTodo = todos.filter( item => {
      if( item.id == id) {
          item.status = !item.status
      }
      return item
      
  });
  setTodo(newTodo)
};
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
function filterByDate(){
  if(filterDate === 'up'){
      const dateUp = [...todos].sort( (a, b) => a.date-b.date )
          setTodo(dateUp);
  } else if (filterDate === 'down'){
      const dateDown = [...todos].sort( (a, b) => b.date-a.date )
          setTodo(dateDown)
  }
  };
//Pagination
 const NumberOfPages = [];
 const todosPerPage = 7
 const LastIndexTodo = currentPage * todosPerPage
 const FirtIndexTodo = LastIndexTodo - todosPerPage
 const pagi = filtered.slice(FirtIndexTodo, LastIndexTodo);
 for (let i=1; i <= Math.ceil(todos.length / todosPerPage); i++ ){
  NumberOfPages.push(i) 
 };
//  const handlerPagination
 const previousPage = () => setCurrentPage(prev=>prev-1);
 const nextPage = () => setCurrentPage(prev=>prev+1);
 const paginateHandler = (number) => setCurrentPage(number)

  return (
    <div className="App-all">
        <Header />
        <AddTodo 
        value={value}
        inputHandler={inputHandler}
        saveTodo={saveTodo}/>
        <TodoList
        pagi={pagi}
        edit = {edit}
        editTodo ={editTodo}
        deleteTodo={deleteTodo}
        setFiltered={setFiltered}
        filtered={filtered}
        statusTodo={statusTodo}
        saveTodoEdit={saveTodoEdit}
        todoFilter={todoFilter}
        setValueEdit={setValueEdit}
        valueEdit={valueEdit}
        setFilterDate={setFilterDate} />
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
