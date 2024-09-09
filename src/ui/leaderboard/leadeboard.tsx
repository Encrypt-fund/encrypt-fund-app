import { Box, Grid, InputBase, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Heading from "@/theme/components/heading";
import Tableleader from "./tableleader";
import rmesta from '../../icons/Sheild.svg'
 

const useStyles = makeStyles({
    mainDiv: {
        margin: '40px 40px 20px 40px',
        minHeight: '100vh',

        '@media(max-width : 1200px)': {
            margin: '20px 20px 20px 20px',
        }
    },
    box_hding: {

        backgroundColor: '#1e2329',
        border: '1px solid #2b3139',
        display: 'flex',
        justifyContent: 'center',
        height: '480px',
        alignItems: 'center',
        borderRadius: '12px'
    },
    Card: {
        backgroundColor: '#1e2329',
        border: '1px solid #2b3139',
        padding: '1rem',
        borderRadius: '8px',
        textAlign: 'center'
    },
    cardlist: {
        padding: '10px',
    },
    boxCr:{
        border: '1px solid #2b3139',
        borderRadius:'8px',
        marginTop:'1.5rem'
    },
    logoSide:{
        display:'flex',
        gap:'1rem',
        alignItems:'center'
    },
    rightSide:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap'
    }



});


 



const Leadeboard = () => {
    const classes = useStyles();
    return (
        <>

            <Box className={classes.mainDiv}>
                <Heading heading={"Encryptfund leaderboard"} />

                <Box className={classes.boxCr}>
                <Box className={classes.cardlist}>
                     <Box sx={{
                        backgroundColor:'#1e2329',
                        border:'1px solid #00d63247',
                        borderRadius:'8px',
                        padding:'1rem'
                     }}>
                        <Grid container spacing={0}>
                            <Grid item lg={6} md={6} sm={12} xs={12} alignSelf={'center'}>
                                <Box className={classes.logoSide}>
                                    <Box>
                                        <Image src={rmesta} alt={""}/>
                                    </Box>
                                    <Box>
                                        <Typography color={'#999'}>Rank: <Typography component={'span'} color={'#fff'}>1</Typography></Typography>
                                        <Typography color={'#fff'}>0x2222...5c1</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <Box sx={{
                                    backgroundColor:'#27313d',
                                    padding:'1rem',
                                    borderRadius:'8px',
                                    '@media(max-width : 600px)':{marginTop:'1rem'}
                                }}>
                                <Box className={classes.rightSide}>
                                    <Typography color={'#999'}>Total Transactions</Typography>
                                    <Typography color={'#fff'}>$1,521,530.12</Typography>
                                 </Box>
                                 <Box className={classes.rightSide} mt={1}>
                                    <Typography color={'#999'}>Miners Owned</Typography>
                                    <Typography color={'#fff'}>0</Typography>
                                 </Box>
                                 <Box className={classes.rightSide} mt={1}>
                                    <Typography color={'#999'}>Coin Holdings</Typography>
                                    <Typography color={'#fff'}>138,320,920</Typography>
                                 </Box>
                                </Box>
                            </Grid>
                        </Grid>
                     </Box>
                </Box>
                <Box sx={{padding:'10px' }}>
                <Tableleader/>
                </Box>
                </Box>

            </Box>

        </>
    )
}

export default Leadeboard