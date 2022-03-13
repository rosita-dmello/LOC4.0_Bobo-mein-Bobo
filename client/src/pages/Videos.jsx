import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper'
import 'swiper/css/bundle';
import { Card, CardContent } from '@mui/material';
import ReactPlayer from 'react-player';
import { margin } from '@mui/system';


const Videos = () => {
  const data = ['https://www.youtube.com/watch?v=aq3mnDRVIq0', 'https://www.youtube.com/watch?v=KVpxP3ZZtAc', 'https://www.youtube.com/watch?v=CH7DvnTNLuI', 'https://www.youtube.com/watch?v=ORAOkP1h3R0', 'https://www.youtube.com/watch?v=3iNpL_GmPh0', 'https://www.youtube.com/watch?v=Xg_l2oGNXm8', 'https://www.youtube.com/watch?v=iTrJVfvBAT0']


  return (
    <Swiper
      modules={[Pagination]}
      effect='cards'
      spaceBetween={50}
      slidesPerView={1}
      pagination
style={{marginBottom:'4.5%'}}
    >
      {
        data.map((link) => {
          return <SwiperSlide >
            <Card sx={{ width: '70vw', height: '70vh' }}>
              <CardContent>
                <ReactPlayer url={link} controls={true} width='100%' height='68vh' />
              </CardContent>
            </Card>
          </SwiperSlide>
        })
      }
    </Swiper>
  )
}

export default Videos



{/* <ReactPlayer url='https://www.youtube.com/watch?v=RpHCeooyqNo' controls="true" />
        <Iframe url="http://streamlit.io"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/> */}