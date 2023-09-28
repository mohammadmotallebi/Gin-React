'use client'
import React, {Suspense, useEffect} from 'react';
import {Box} from '@mui/material';


export default function ({children}:{children:React.ReactNode}){

    return (
       <Box>
           {children}
         </Box>
    )

}