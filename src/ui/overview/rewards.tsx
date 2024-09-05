import Heading from "@/theme/components/heading";
import Text from "@/theme/components/text";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import linebox from '../../icons/linebox.svg'


const useStyles = makeStyles({
  mainBox: {
    backgroundColor: '#101012',
    border: '1px solid #1D1D20',
    borderRadius: '12px',
    padding: '1rem 0.4rem',
    textAlign:'center',
    height:'100%',
    transition:'0.5s',
    '&:hover':{
      border: '1px solid #00FFFF',
    },
    '@media(max-width : 600px)':{
      flexWrap: 'wrap !important',
      flexDirection: 'column-reverse !important',
      textAlign: 'center !important',
     }
  },
  img:{
    filter:'grayscale(1)',
    '@media(max-width : 1200px)':{
      width:'100%'
    }
  }
})

interface props {
  reward_hding: any;
  reward_text: any;
  Image_r: any;
}

const Rewards = ({ reward_hding, reward_text, Image_r }: props) => {
  const classes = useStyles();
  return (
    <>
      <Grid item lg={3} md={3} sm={12} xs={12}>
        <Box className={classes.mainBox}
        >
          <Box>
            <Image className={classes.img} src={Image_r} alt={""} />
          </Box>
          
          <Box>
            <Typography sx={{
              fontFamily:'Bruce Forever !important',
              '@media(max-width : 600px)':{
                fontSize:'18px'
              }
            }} variant="h6">{reward_hding}</Typography>
            <Box>
          <Image src={linebox} alt={""} />
          </Box>
            <Typography color={'#fff'}>{reward_text}</Typography>
          </Box>
          
          
        </Box>
      </Grid>
    </>
  )
}

export default Rewards
