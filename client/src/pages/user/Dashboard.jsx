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
import { CardActionArea, Grid} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useNavigate, Link } from "react-router-dom"



export default function Dashboard(props) {
  const navigate = useNavigate();
  const daily = {
    margin: '0.4rem'
  }

  const bonus = {
    margin: '0.4rem',
    marginTop: '3rem'
  }
  const data = [{ number: 1, time: "35mins" },
  { number: 2, time: "30mins" },
  { number: 3, time: "45mins" },
  { number: 4, time: "40mins" },
  { number: 5, time: "30mins" },
  { number: 6, time: "33mins" },
  { number: 7, time: "37mins" },
  { number: 8, time: "25mins" },
  { number: 9, time: "45mins" },
  { number: 10, time: "39mins" }]

  const days = [1, 2, 3, 4, 5, 6]

  const dayRedirect = (number) => {
    const day = number
    console.log(day)
    // props.setDay(day);
    navigate(`/day/${day}`)
  }

  return (
    <div style={{ padding: '2.5vw' }}>
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
          data.map((day, index) => {
            return (
              <>
                <SwiperSlide key={index}>
                <Link to={'/day'} state={{ data: data, index: index  }} style={{textDecoration:'none'}}>
                  <Card sx={{ display: 'flex', width: '100%' }} className='card card1'   >
                    <CardActionArea >
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                          <Typography component="div" variant="h5">
                            Day {day.number}
                          </Typography>
                          <Typography variant="subtitle1" color="text.secondary" component="div">
                            Time required: {day.time}
                          </Typography>
                        </CardContent>
                      </Box>
                    </CardActionArea>
                    <CardMedia
                      component="img"
                      sx={{ width: '151px', marginLeft: '20px' }}
                      image={logo}
                      alt="Live from space album cover"
                    />
                  </Card>
                  </Link>
                </SwiperSlide>
              </>
            )
          }

          )
        })
        
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
                <Link to={'/bonus'} state={{ data: data, index: index  }} style={{textDecoration:'none'}}>
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
                </Link>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
}
