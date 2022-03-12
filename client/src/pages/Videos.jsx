import React from 'react'
import {Box} from "@mui/material"
import ReactPlayer from 'react-player'
import Iframe from 'react-iframe'

function Videos() {
  return (
    <Box>
        <Box> 
        <ReactPlayer url='https://www.youtube.com/watch?v=RpHCeooyqNo' controls="true" />
        <Iframe url="http://streamlit.io"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </Box>

    </Box>
  )
}

export default Videos