import React from "react";

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
        <div className="sort-buttons">
          <div className="buttons-date">
            <button 
            className={`${(sortTypeSelected === 'up') ? 'button-date-up-select' : 'button-date-up'}`} 
            onClick={upHandler} >
            <span className="material-symbols-outlined">arrow_upward</span>
            </button>
            <button 
            className={`${(sortTypeSelected === 'down') ? 'button-date-down-select' : "button-date-down" }`} 
            onClick={downHandler}>
            <span className="material-symbols-outlined">arrow_downward</span>
            </button>
                </div>
                <div className="buttons-by-done">
                    <button className={`${(status === 'all') ? 'button-by-done-all-select' : "button-by-done-all"}`} 
                    onClick={setStatusAllHandler}>All</button>
                    <button className={`${(status === 'undone') ? 'button-by-done-open-select' : "button-by-done-open"}`} 
                    onClick={setStatusUndoneHandler}>Open</button>
                    <button className={`${(status === 'done') ? 'button-by-done-closed-select' : "button-by-done-closed"}`}
                    onClick={setStatusDoneHandler}>Closed</button>
                </div>
                </div>
    )
    }

export default ButtonsSort