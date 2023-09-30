'use client'
import React, {Suspense, useEffect} from 'react';
import T1 from './t1';
import T2 from './t2';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Menu from "@components/Menu";
import Loading from "./loading";
import Grid from "@mui/material/Unstable_Grid2";


export default function (){

    const dark = createTheme({
        palette: {
            mode: 'dark',

        },
    });


    return (
        <ThemeProvider theme={dark}>
            <Menu>
                <Grid container spacing={4}>
                    <Grid md>
                <Suspense fallback={<Loading/>}>
                        <T1/>
                </Suspense>
                </Grid>
                    <Grid md>
                        <Suspense fallback={<Loading/>}>
                            <T2/>
                        </Suspense>
                    </Grid>
                </Grid>
            </Menu>
        </ThemeProvider>
    )

}