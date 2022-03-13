import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css/bundle';
import './Day.css'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Grid, Icon } from '@mui/material';
import ReactPlayer from 'react-player';
import { VolumeUp } from '@mui/icons-material';
import { useSpeechSynthesis } from "react-speech-kit";
import Iframe from 'react-iframe'
import { width } from '@mui/system';



function Day() {

  const { speak } = useSpeechSynthesis();
  const handleEnd = () => {
    console.log(`speech ended`)

  }
  const handleSpeak = () => {
    console.log(`speaking`)
  }
  const location = useLocation();
  const data = location.state.data;
  const id = location.state.index;
  const day = data.filter((day, index) => index === id)[0]
  const [value] = useState('Step 1 Pivot your back foot and turn your knee inward to initiate the punch Step 2 Twist your hips and chest towards your target Step 3 Extend your fist and allow your arm to turn inwards as you strike Step 4 Strike the target with your middle knuckle and follow through')
  const [kick] = useState('Step 1 Lift your back knee Step 2 Point your knee towards your target Step 3 Pay attention to your kicking foot Step 4 Snap your leg up  Step 5 Strike the target Step 6 Pull your foot back Step 7 Practice ')
  console.log(day)
  return (
    <>
      {/* {day.number}
      {day.time}
      <p>hello</p> */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation

      >
        <SwiperSlide>
          <Card className='card1' sx={{ marginTop: '15vh', marginBottom: '7.8vh' ,width:'50%', display:'flex', alignItems:'center',justifyContent:'center' }}>
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                Warm Up
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Follow the following video to perform your daily warm up exercise
              </Typography>
              <ReactPlayer url='https://www.youtube.com/watch?v=CSrBaHX3HxQ' controls="true" />
            </CardContent>

          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className='card1' sx={{ marginTop: '5vh', marginBottom: '7.8vh' ,width:'50%', display:'flex', alignItems:'center',justifyContent:'center' }}>
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                Exercise 1
              </Typography>
              <Grid container sx={{ display: 'flex' }}>
                <Grid item >
                  <Typography variant="p" color="text.secondary">
                    Follow the following steps to learn how to throw a punch
                  </Typography>
                  
                  <pre>
                    1.Pivot your back foot and turn your knee inward to initiate the punch <br />
                    2.Twist your hips and chest towards your target<br />
                    3.Extend your fist and allow your arm to turn inwards as you strike<br />
                    4.Strike the target with your middle knuckle and follow through
                  </pre>
                </Grid>
                <Grid item>
                  <Button sx={{ color: 'black' }} onClick={() => speak({ text: value, rate: '0.53', onEnd: handleEnd(), speaking: handleSpeak() })}><VolumeUp /></Button>
                </Grid>
              </Grid>
              <Iframe url="http://192.168.43.93:8501"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />
            </CardContent>

          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className='card1' sx={{ marginTop: '5vh', marginBottom: '7.8vh' ,width:'50%', display:'flex', alignItems:'center',justifyContent:'center'}}>
            <CardContent>
              <Typography gutterBottom variant="h3" component="div">
                Exercise 2
              </Typography>
              <Grid container sx={{ display: 'flex' }}>
                <Grid item >
                  <Typography variant="p" color="text.secondary">
                    Follow the following steps to learn how to execute a front kick
                  </Typography>
                  <pre>
                    1.Lift your back knee <br />
                    2.Point your knee towards your target<br />
                    3.Pay attention to your kicking foot<br />
                    4.Snap your leg up <br/>
                    5.Strike the target <br/>
                    6.Pull your foot back <br/>
                    7.Practice
                  </pre>
                </Grid>
                <Grid item>
                  <Button sx={{ color: 'black' }} onClick={() => speak({ text: kick, rate: '0.53', onEnd: handleEnd(), speaking: handleSpeak() })}><VolumeUp /></Button>
                </Grid>
              </Grid>
              <Iframe url="http://streamlit.io"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />
            </CardContent>

          </Card>
        </SwiperSlide>


      </Swiper>
    </>
  )
}

export default Day