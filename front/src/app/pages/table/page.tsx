'use client'
import React, {Suspense, useEffect} from 'react';
import Table from './Table';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Menu from "@components/Menu";
import Loading from "./loading";


export default function (){

    const dark = createTheme({
        palette: {
            mode: 'dark',

        },
    });


    return (
        <ThemeProvider theme={dark}>
            <Menu>
                <Suspense fallback={<Loading/>}>
<Table/>
                </Suspense>
            </Menu>
        </ThemeProvider>
    )

}