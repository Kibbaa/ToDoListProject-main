import React from "react";

function Pagination({nextPage, previousPage, handlerPagination,NumberOfPages}) {
    return(
       <ul className="pagination-window">
        <button onClick={previousPage}>previous</button>
        {/* { {NumberOfPages.map()

           } */}
           
        <button onClick={nextPage}>next</button>


       </ul>
    )
}

export default Pagination;