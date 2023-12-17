import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'


const Feed = () => {
    return (
        <Box flex={8} p={2}>
            <Post icon='U' title='Usman khan' date='19/5/2023' color='green' />
            <Post icon='Q' title='Qasim Ali' date='29/5/2023' color='blue' />
            <Post icon='A' title='Amir khan' date='10/5/2023' color='red' />
            <Post icon='Q' title='Qasim Ali' date='29/5/2023' color='blue' />
            <Post icon='U' title='Usman khan' date='19/5/2023' color='green' />
        </Box>
    )
}

export default Feed
