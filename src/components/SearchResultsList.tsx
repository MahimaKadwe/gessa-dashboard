import React from 'react';
import "../App.css";

// const SearchResultsList = () => {

    interface SearchResultsListProps {
        results: string[];
    
      }
function SearchResultsList(props: SearchResultsListProps) {

  return (
    <div className ="results-list">
        <div> A</div>
        <div> B</div>
        <div> C</div>
        <div> A</div>
        <div> B</div>
        <div> C</div>
      
    </div>
  )
}

// }

export default SearchResultsList;
