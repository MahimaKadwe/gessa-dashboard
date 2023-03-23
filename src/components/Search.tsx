
// import {useState}  from 'react';
// import * as React from 'react';
// import { json } from 'express';
// // import Box from '@mui/material/Box';


// export default function SearchBar() {
//     const [searchTerm, setSearchTerm] = useState('');
  
//     const fetchData = (value:any) => {
//         fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then(json => ());
//         console.log(json);
//     }

//     const handleChange = (value:any) => {
//         setSearchTerm(value)
//         fetchData(value) 
//     }
//     function handleSearch(event: React.FormEvent<HTMLFormElement>) {
//       event.preventDefault();
//     //   handleSearch(searchTerm);
//     }
//     // function SearchBar() {
//     return (
//       <form onSubmit={handleSearch}>
//         <input type="text" value={searchTerm} onChange={(e) => handleChange(e.target.value)} />
//         <button type="submit">Search</button>
//       </form>
//     );
//   }


import { useState } from 'react';


type SearchProps = {
    children: React.ReactNode; 
  };
  // export default function Navbar() {
    const Search = (props: SearchProps) => {

  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const fetchData = (value: string) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(json => {
        const results = json.filter((user: { name: string; }) => {
return( value && 
    user && 
    user.name && 
    user.name.toLowerCase().includes(value)
       )
     });
        console.log(results);
      });
  }

  const handleChange = (value: string) => {
    setSearchTerm(value);
    fetchData(value);
  }

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handleSearch(searchTerm);
  }

  const [count, setCount] = useState(0);
//   const incrementCount = () => {
//     setCount(count + 1);
//   };

  return (
    <>
    <form onSubmit={handleSearch}>
      <input type="text" value={searchTerm} onChange={(e) => handleChange(e.target.value)} />
      <button type="submit">Search</button>
      
      <button onClick={()=>setCount(count+1)}>Click Here</button>
      
      {/* <button onClick={props.handleClick} = {handleIncrement} /> */}
    </form>
    Survey {count}
    
    </>
  );
}

export default Search;
