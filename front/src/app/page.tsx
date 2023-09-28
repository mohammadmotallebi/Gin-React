'use client'
import Image from 'next/image'
import styles from './page.module.css'
import {QueryClient, QueryClientProvider, useQuery} from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
    <Post />
    </QueryClientProvider>

  )
}

interface Post {
    isFetching: boolean;
    isLoading: boolean;
    error: any;
    data: any;
}

function Post() {
    const { isLoading, error, data, isFetching }: Post = useQuery('repoData', () =>
        fetch('http://localhost:8080/ping').then(res =>
            res.json()
        )
    )

    // @ts-ignore
    return (
        <div>
            {isLoading ? (
                'Loading...'
            ) : error ? (
                <span>Error: {error.message}</span>
            ) : (
                <div>
                    <h1>{data.message}</h1>
                </div>
            )}

        </div>
    )
}
