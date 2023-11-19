import React from 'react';
import {Box} from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';


export default function Toggler({darkMode, handleClick}) {
    const transition = 'all 250ms ease'

   return (
      <Box fontSize={'1.5rem'} sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
         {
            darkMode ?
               <span onClick={handleClick} aria-label="Full Moon" role="img"><LightModeIcon/></span>
               :
               <span onClick={handleClick} aria-label="New Moon" role="img"><LightModeIcon/></span>
         }
      </Box>
   )
}