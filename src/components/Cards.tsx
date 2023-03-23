

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// export default function BasicCard() {
//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }

// import * as React from 'react';
import React, { useState } from "react";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HourglassTopOutlinedIcon from "@mui/icons-material/HourglassTopOutlined";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import Search from "./Search";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
// import Search from './Search';

export default function OutlinedCard(props: any) {
    const [value, setValue] = useState<number>(0);

    

  return (
    <div className="cardcontainer">
      <div className="card">
        {/* <img src="https://example.com/image.jpg" alt="Example Image"> </img> */}
        <div className="card-content">
          <FactCheckIcon className="first"></FactCheckIcon>
          {/* <Search children={undefined}></Search> */}
          {/* {count} */}
          <h3 className="carnum"> </h3>
          <p>Total Surveys </p>
          {/* <a href="#" className='button'>Learn More</a> */}
        </div>
      </div>

      <div className="card">
        {/* <img src="https://example.com/image.jpg" alt="Example Image"> </img> */}
        <div className="card-content">
          <HourglassTopOutlinedIcon className="rin"> </HourglassTopOutlinedIcon>
          <h3 className="carnum"> 21 </h3>
          <p>Ongoing Surveys </p>
          {/* <a href="#" className='button'>Learn More</a> */}
        </div>
      </div>

      <div className="card">
        {/* <img src="https://example.com/image.jpg" alt="Example Image"> </img> */}
        <div className="card-content">
          <CalendarMonthRoundedIcon className="first">
            {" "}
          </CalendarMonthRoundedIcon>
          <h3 className="carnum"> 21 </h3>
          <p>Draft Surveys </p>
          {/* <a href="#" className='button'>Learn More</a> */}
        </div>
      </div>

      <div className="card">
        {/* <img src="https://example.com/image.jpg" alt="Example Image"> </img> */}
        <div className="card-content">
          <CheckCircleOutlineRoundedIcon className="first">
            {" "}
          </CheckCircleOutlineRoundedIcon>
          <h3 className="carnum"> 21 </h3>
          <p>Completed Surveys </p>
          {/* <a href="#" className='button'>Learn More</a> */}
        </div>
      </div>
    </div>
  );
}

