import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Search from "./Search";
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined';
import Button from 'react-bootstrap/Button';
import '../App.css';
import {useEffect, useState } from 'react';
import axios from 'axios';


// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function BasicTable(props: any) {

const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
    .get(`https://api.qa.gessa.io/cms/surveyForm/?filters={"title":"final_mid submission"}&page=0&size=100`)
    .then((res) =>{
      // console.log(res)
      setMyData(res.data.result.data)});
  
  }, []);
  
console.log(myData);

  return (
    <div>
    <Search > </Search>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 850 }} aria-label="simple table">
          <TableHead>
            <TableRow className='but'>
              <TableCell className='but'>
                <h5>Survey Name</h5>
                <Button className='up' variant="outline-primary"><UnfoldMoreOutlinedIcon> </UnfoldMoreOutlinedIcon></Button>
              </TableCell>
              <TableCell className='but' align="left">
                <h5>Created By</h5>
                <Button className='up' variant="outline-primary"><UnfoldMoreOutlinedIcon> </UnfoldMoreOutlinedIcon></Button>
              </TableCell>
              <TableCell className='but' align="left">
                <h5>Status</h5>
                <Button className='up' variant="outline-primary"><UnfoldMoreOutlinedIcon> </UnfoldMoreOutlinedIcon></Button>
              </TableCell>
              <TableCell className='but' align="left">
                <h5>No. of Questions</h5>
                <Button className='up' variant="outline-primary"><UnfoldMoreOutlinedIcon> </UnfoldMoreOutlinedIcon></Button>
              </TableCell>
              <TableCell className='but' align="left">
                <h5>Created On</h5>
                <Button className='up' variant="outline-primary"><UnfoldMoreOutlinedIcon> </UnfoldMoreOutlinedIcon></Button>
              </TableCell>
              <TableCell className='but' align="left">
                <h5>Expiry On</h5>
                
                <Button className='up' variant="outline-primary"><UnfoldMoreOutlinedIcon> </UnfoldMoreOutlinedIcon></Button>
              </TableCell>
            </TableRow>
          </TableHead>
 
          <TableBody>
  {myData.map((get) => {
    const { name, email, title, expiry, createdBy, questionNumber, status, updatedAt} = get; // "Expiary-Date" corrected to "expiryDate"
    return (
      <TableRow key={name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
        <TableCell component="th" scope="row">
          {title}
        </TableCell>
        
        <TableCell align="left">{name}</TableCell>
        <TableCell align="left">{status}</TableCell>
        <TableCell align="left">{questionNumber}</TableCell>
        <TableCell align="left">{updatedAt}</TableCell>
        <TableCell align="left">{expiry}</TableCell>
         {/* <TableCell align="left">{row.protein}</TableCell>
        <TableCell align="left">{row.protein}</TableCell>  */}
       </TableRow>
    );
  })} 
 </TableBody> 

          {/* <TableBody>
            {myData.map((post) => {
              const {name, email, title, Expiary-Date} = get;
              
              <TableRow key={name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{title}</TableCell>
                <TableCell align="left">{Expiary-Date}</TableCell>
                {/* <TableCell align="left">{row.protein}</TableCell>
                <TableCell align="left">{row.protein}</TableCell> */}
              {/* </TableRow> */}
            {/* })}  */}
          {/* </TableBody> */}
        </Table>
      </TableContainer>
    </div>
    )}   

