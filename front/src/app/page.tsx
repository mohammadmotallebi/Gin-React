'use client'
import Dashboard from "@components/Dashboard";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Menu from "@components/Menu";


export default function () {
const dark = createTheme({
        palette: {
            mode: 'dark',

        },
    });

    return (
    <ThemeProvider theme={dark}>
        <Menu>
        <Dashboard/>
        </Menu>
    </ThemeProvider>
  )
}

// interface Post {
//     isFetching: boolean;
//     isLoading: boolean;
//     error: any;
//     data: any;
// }
//
// function Post() {
//     const { isLoading, error, data, isFetching }: Post = useQuery('repoData', () =>
//         fetch('http://localhost:8080/ping').then(res =>
//             res.json()
//         )
//     )
//
//     // @ts-ignore
//     return (
//         <div>
//             {isLoading ? (
//                 'Loading...'
//             ) : error ? (
//                 <span>Error: {error.message}</span>
//             ) : (
//                 <div>
//                     <h1>{data.message}</h1>
//                 </div>
//             )}
//
//         </div>
//     )
// }
