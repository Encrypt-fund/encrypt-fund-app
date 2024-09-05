import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Grid, Paper, Box } from '@mui/material';
import Image from 'next/image';
import dots from '../../icons/dots.svg'

const useStyles = makeStyles({
  countdownContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2rem'

  },
  paper: {
    padding: '20px',
    textAlign: 'center',
    color: '#fff',
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    '@media(max-width : 1200px)': {
      padding: '10px',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }

  },
  timerText: {
    fontSize: '2rem',
    backgroundColor: '#101012',
    border: '1px solid #049192',
    color: '#00FFFF',
    padding: '16px 24px',
    borderRadius: '12px',
    width: '120px',
    '@media(max-width : 1200px)': {
      width: '212px',
      padding: '16px 16px',
      '@media(max-width : 900px)': {
        width: '155px',
        '@media(max-width : 900px)': {
          width: '122px',
        }
      }
    }
  },
});

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const classes = useStyles();
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(intervalId);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <Box className={classes.countdownContainer}>
      {(targetDate!==undefined && timeLeft.seconds!==0 && timeLeft.minutes!==0 && timeLeft.hours!==0 && timeLeft.days!==0) ? (
        <Box className={classes.paper}>
          <Typography className={classes.timerText} variant="h4">
            {timeLeft.days}
            <Typography>days</Typography>
          </Typography>
          <Typography sx={{ '@media(max-width : 1200px)': { display: 'none' } }}><Image src={dots} alt={''} /></Typography>
          <Typography className={classes.timerText} variant="h4">{timeLeft.hours}
            <Typography>hours</Typography>

          </Typography>
          <Typography sx={{ '@media(max-width : 1200px)': { display: 'none' } }}><Image src={dots} alt={''} /></Typography>
          <Typography className={classes.timerText} variant="h4">{timeLeft.minutes}
            <Typography>mins</Typography>
          </Typography>
          <Typography sx={{ '@media(max-width : 1200px)': { display: 'none' } }}><Image src={dots} alt={''} /></Typography>
          <Typography className={classes.timerText} variant="h4">{timeLeft.seconds}
            <Typography>secs</Typography>
          </Typography>
        </Box>
      ) : (
        <Box className={classes.paper}>
        <Typography className={classes.timerText} variant="h4">
          {/* {timeLeft.days} */}
          <Typography>L</Typography>
        </Typography>
        <Typography sx={{ '@media(max-width : 1200px)': { display: 'none' } }}><Image src={dots} alt={''} /></Typography>
        <Typography className={classes.timerText} variant="h4">
          {/* {timeLeft.hours} */}
          <Typography>I</Typography>

        </Typography>
        <Typography sx={{ '@media(max-width : 1200px)': { display: 'none' } }}><Image src={dots} alt={''} /></Typography>
        <Typography className={classes.timerText} variant="h4">
          {/* {timeLeft.minutes} */}
          <Typography>V</Typography>
        </Typography>
        <Typography sx={{ '@media(max-width : 1200px)': { display: 'none' } }}><Image src={dots} alt={''} /></Typography>
        <Typography className={classes.timerText} variant="h4">
          {/* {timeLeft.seconds} */}
          <Typography>E</Typography>
        </Typography>
      </Box>
      )
      }
    </Box>
  );
};

export default CountdownTimer;
