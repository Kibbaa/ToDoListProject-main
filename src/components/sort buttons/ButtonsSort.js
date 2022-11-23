import React from "react";

function ButtonsSort({ setSortTypeSelected, setStatus}){
    
    return(
        <div className="sort-buttons">
          <div className="buttons-date">
            <button 
            className="button-date-up" 
            onClick={ () => setSortTypeSelected('up')} >
            <span className="material-symbols-outlined">arrow_upward</span>
            </button>
            <button 
            className="button-date-down" 
            onClick={ () =>setSortTypeSelected('down')}>
            <span className="material-symbols-outlined">arrow_downward</span>
            </button>
                </div>
                <div className="buttons-by-done">
                    <button className="button-by-done-all" onClick={ () => setStatus('all') }>All</button>
                    <button className="button-by-done-open" onClick={ () => setStatus('done') }>Open</button>
                    <button className="button-by-done-cloused" onClick={ () => setStatus('undone')}>Closed</button>
                </div>
                </div>
    )
    }

export default ButtonsSort