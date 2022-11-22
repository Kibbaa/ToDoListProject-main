import React from "react";

function Pagination({nextPage, previousPage, paginateHandler,NumberOfPages}) {
    return(
      <div className="pagination-window">  
            <button className="btn-prev-item" onClick={previousPage}><span className="material-symbols-outlined">arrow_forward_ios</span></button>
               <ul className="paginate-all-items">
               { NumberOfPages.map(number =>(
                 <li key={number} className='paginate-item-li'>
                   <a className="paginate-single-item" href="#" onClick={() => paginateHandler(number)}>
                     {number}
                   </a>
                 </li> 
               ))
               }
               </ul>
            <button className="btn-next-item" onClick={nextPage}><span className="material-symbols-outlined">arrow_forward_ios</span></button>
      </div>
    )
}

export default Pagination;