import { Box, Grid, InputBase, Typography } from "@mui/material"
import DashboardHeader from "../shared/dashboardHeader"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import dleft from '../../icons/dleft.svg'
import dright from '../../icons/dright.svg'
import Heading from "@/theme/components/heading";
import rmesta from '../../icons/rmesta.svg'
import shield from '../../icons/Sheild.svg'
import slider1 from '../../icons/slider1.svg'
import slider2 from '../../icons/slider2.svg'
import l1 from '../../icons/l1.svg'
import l2 from '../../icons/l2.svg'
import l3 from '../../icons/l3.svg'
import Text from "@/theme/components/text";
import coinline from '../../icons/coinline.svg'
import Link from "next/link";
import r1 from '../../icons/r1.svg'
import r2 from '../../icons/r2.svg'
import AddressCopy from "@/theme/components/addressCopy";
import linkbtnimg from '../../icons/linkbtnimg.svg'

const useStyles = makeStyles({
    mainDiv: {
        margin: '40px 40px 20px 40px',
        minHeight:'100vh',

        '@media(max-width : 1200px)': {
            margin: '20px 20px 20px 20px',
        }
    },
    box_hding:{
         
backgroundColor:'transparent',
border:'1px solid #2b3139',
display:'flex',
justifyContent:'center',
height:'480px',
alignItems:'center',
borderRadius:'12px'
    }
 
     

});


 

const ComingSoon = () => {
    const classes = useStyles();
    return (
        <>

            <Box className={classes.mainDiv}>

                <Box className={classes.box_hding}><Heading heading={"Coming Soon"} /></Box>

            </Box>

        </>
    )
}

export default ComingSoon