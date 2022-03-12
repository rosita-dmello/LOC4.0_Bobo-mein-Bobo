import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import logo from '../user/sign_in.svg'
import './Dashboard.css'
import 'swiper/css/bundle';
import { Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
export default function Dashboard() {
  const daily = {
    
    margin: '0.4rem'
  }

  const bonus = {
    margin: '0.4rem',
    marginTop:'3rem'
  }
  const days = [1, 2, 3, 4, 5]
  return (
    <div style={{padding: '2.5vw' }}>
      <h2 style={daily}>Daily Exercises</h2>
      {/* <Card sx={{ display: 'flex' ,  width:'25%',  margin:'100px'}} className='card card1' >
       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
         <CardContent sx={{ flex: '1 0 auto' }}>
           <Typography component="div" variant="h5">
             Day 1
           </Typography>
           <Typography variant="subtitle1" color="text.secondary" component="div">
             Time required: 35 mins
           </Typography>
         </CardContent>
       </Box>
       <CardMedia
        component="img"
        sx={{ width: '151px', marginLeft:'20px' }}
        image={logo}
        alt="Live from space album cover"
      />
    </Card> */}
      <Swiper modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        
      >
        {
          days.map((index) => {
            return (
              <SwiperSlide key={index}>
                {<Card sx={{ display: 'flex', width: '100%' }} className='card card1' >
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        Day {index}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Time required: 35 mins
                      </Typography>
                    </CardContent>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: '151px', marginLeft: '20px' }}
                    image={logo}
                    alt="Live from space album cover"
                  />
                </Card>}
              </SwiperSlide>
            )
          })
        }
      </Swiper>

      <h2 style={bonus}>Bonus Exercises</h2>
      <Swiper modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        
      >
        {
          days.map((index) => {
            return (
              <SwiperSlide key={index}>
                {<Card sx={{ display: 'flex', width: '100%' }} className='card card1' >
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="h5">
                        Day {index}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary" component="div">
                        Time required: 35 mins
                      </Typography>
                    </CardContent>
                  </Box>
                  <CardMedia
                    component="img"
                    sx={{ width: '151px', marginLeft: '20px' }}
                    image={logo}
                    alt="Live from space album cover"
                  />
                </Card>}
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}
