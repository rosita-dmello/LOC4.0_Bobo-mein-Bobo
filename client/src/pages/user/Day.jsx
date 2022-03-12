import React from 'react'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/bundle';
import './Day.css'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';



function Day() {
  const location = useLocation();
  const data = location.state.data;
  const id = location.state.index;
  const day = data.filter((day, index) => index === id)[0]
  console.log(day)
  return (
    <>
      {day.number}
      {day.time}
      <p>hello</p>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation

      >
        <SwiperSlide>
          <Card>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          exercise 1
        </SwiperSlide>



      </Swiper>
    </>
  )
}

export default Day