

// import './App.css';

// import Cards from './components/Cards';
// import React, { useState } from 'react';
// import Table from './components/Table';
// import Search from './components/Search';
// import Navbar from './components/Navbar';
// import SearchResultsList from './components/SearchResultsList';


// function App() {
  

//   const [mode, setMode] = useState('light');

//   // const togglemode = () => {
//   //   if (mode === 'dark') {
//   //     setMode('light');
//   //     document.body.style.background = 'white';
//   //   } else {
//   //     setMode('dark');
//   //     document.body.style.background = '#0d213f';
//   //   }
//   // };
// const [results, setResults : string] = useState([]);
//   return (
//     <>
//      <Navbar title={''} mode={''} plain={''} togglemode={function (): void {
//         throw new Error('Function not implemented.');
//       } } swithcd={function (): void {
//         throw new Error('Function not implemented.');
//       } } />
      
//       <div className="container">
//         <nav className="comp">
//           <div className="container-fluid ">
//             <span className="navbar-brand" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
//               {/* Lets Analyze Together ! */}
//             </span>
//           </div>
//         </nav>
//         <Cards />
//         <Table>
//           <Search children={undefined} ></Search>
// <div> <SearchResultsList results={results} ></SearchResultsList> </div>
//         </Table>
//       </div>
//       {/* <p plain="kadwe" /> */}
//     </>
//   );
// }

// export default App;


import './App.css';

import Cards from './components/Cards';
import React, { useState } from 'react';
import Table from './components/Table';
import Search from './components/Search';
import Navbar from './components/Navbar';


function App() {
  

  // const [mode, setMode] = useState('light');

  // const togglemode = () => {
  //   if (mode === 'dark') {
  //     setMode('light');
  //     document.body.style.background = 'white';
  //   } else {
  //     setMode('dark');
  //     document.body.style.background = '#0d213f';
  //   }
  // };
 
  return (
    <>
     <Navbar title={''} mode={''} plain={''} togglemode={function (): void {
        throw new Error('Function not implemented.');
      } } swithcd={function (): void {
        throw new Error('Function not implemented.');
      } } />
      
      <div className="container">
        <nav className="comp">
          <div className="container-fluid ">
            {/* <span className="navbar-brand" style={{ color: mode === 'dark' ? 'white' : 'black' }}> */}
              {/* Lets Analyze Together ! */}
            {/* </span> */}
          </div>
        </nav>
        <Cards />
        <Table>
          <Search children={undefined} ></Search>

        </Table>
      </div>
      {/* <p plain="kadwe" /> */}
    </>
  );
}

export default App;
