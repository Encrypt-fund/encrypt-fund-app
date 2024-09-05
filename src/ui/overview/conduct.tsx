
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import features_two_img01 from '../../icons/g1.gif'
import features_two_img02 from '../../icons/g2.gif'
import features_two_img03 from '../../icons/g3.gif'
import Heading from "@/theme/components/heading";
import Linebx2 from '../../icons/Linebx2.svg'



const useStyles = makeStyles({
    mainBox: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        padding: '30px 20px',
        display: 'flex',
         
        gap:'15px',
        alignItems: 'center',
        borderRadius: '12px',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            justifyContent: 'center'
        }
    },
    img: {
        borderRadius: '30px',
        margin: '0px 10px 0px 10px',
        '@media(max-width : 1200px)': {
            height: '24px'
        }
    },
    secure: {
        paddingTop: '0rem'
    },
    round: {
        borderRadius: '50px',
    },
    hding:{
        '@media(max-width : 600px)':{
            fontSize:'18px !important'
        }

        }
     

})


const Conduct = () => {
    const classes = useStyles();
    const reward_cont = "The World's 1st ICO Platform That Offers Rewards"
    return (
        <>
            <Box
                sx={{ padding: '4rem 2.5rem' }}
            >

                <Box textAlign={'center'}>
                    <Heading heading={"World’s first  decentralized messaging solution that  prioritize users privacy, security, and control over personal data."} />
                    <Box sx={{
                        width: '50%',
                        height: '1px',
                        background: 'linear-gradient(90deg, #071616, #00FFFF, #071616)',
                        margin: '3rem auto 3rem auto',
                        '@media(max-width : 600px)':{
                        margin: '1.5rem auto 1.5rem auto', 
                    }
                    }} />
                </Box>
                <Box className={classes.secure}>
                    <Grid container spacing={2}>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <Box className={classes.mainBox}>
                                <Box >
                                    <Image className={classes.round} src={features_two_img01} alt={""} width={80} />
                                </Box>
                                <Box sx={{
                                    '@media(max-width : 600px)':{
                                        display:'none'
                                    }
                                }}>
                                    <Image src={Linebx2} alt={""}/>
                                </Box>
                                <Box sx={{
                                    '@media(max-width : 600px)': {
                                        textAlign: 'center'
                                    }
                                }}>
                                    <Typography className={classes.hding}   fontFamily={'Bruce Forever!important'} color={'#fff'}>Earn while messaging</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <Box className={classes.mainBox}>
                                <Box>
                                    <Image className={classes.round} src={features_two_img02} alt={""} width={80} />
                                </Box>
                                <Box sx={{
                                    '@media(max-width : 600px)':{
                                        display:'none'
                                    }
                                }}>
                                    <Image src={Linebx2} alt={""}/>
                                </Box>
                                <Box
                                    sx={{
                                        '@media(max-width : 600px)': {
                                            textAlign: 'center'
                                        }
                                    }}
                                >
                                    <Typography className={classes.hding}   fontFamily={'Bruce Forever!important'} color={'#fff'}>No Data stealing</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={4} sm={12} xs={12}>
                            <Box className={classes.mainBox}>
                                <Box >
                                    <Image className={classes.round} src={features_two_img03} alt={""} width={80} />
                                </Box>
                                <Box sx={{
                                    '@media(max-width : 600px)':{
                                        display:'none'
                                    }
                                }}>
                                    <Image src={Linebx2} alt={""}/>
                                </Box>
                                <Box
                                    sx={{
                                        '@media(max-width : 600px)': {
                                            textAlign: 'center'
                                        }
                                    }}
                                >
                                    <Typography className={classes.hding}   fontFamily={'Bruce Forever!important'}color={'#fff'}>App which belongs only to you</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>



            </Box>
        </>
    )
}

export default Conduct
