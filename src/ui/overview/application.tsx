
import { Box, Grid, Tooltip, Typography,  } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import Image from 'next/image';
import control from '../../icons/control.svg'
import Heading from '@/theme/components/heading';
import Link from 'next/link';
import download_btn01 from '../../icons/download_btn01.png'
import download_btn02 from '../../icons/download_btn02.png'


const CustomTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#00FFFF !important', // Change to your desired background color
        color: '#000 !important',          // Change to your desired text color
        fontSize: '18px !important',
    },
}))(Tooltip);

const useStyles = makeStyles({
    box: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
    },
    round: {
        width: '30px',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '6rem',
        justifyContent: 'center',
        backgroundColor: '#000',
        boder: '1px solid #1D1D20'
    },
    wrap: {
        display: 'flex',
        alignItems: 'center',
        gap: '3rem',
        marginTop: '3rem',
        '@media(max-width : 900px)': {
            justifyContent: 'center',
            '@media(max-width : 600px)': {
                flexWrap: 'wrap',
                gap: '1rem',
            }
        }
    },
    wrap2: {
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        marginTop: '3rem',
        '@media(max-width : 900px)': {
            justifyContent: 'center',
            '@media(max-width : 600px)': {
                flexWrap: 'wrap',
                gap: '1rem',
            }
        }
    },
    mainBox: {
        backgroundColor: '#101012',
        border: '1px solid rgba(43 44 56 / 46%)',
        padding: '2rem 2rem 0rem 2rem',
        margin: '0rem 2rem 0rem 2rem',
        borderRadius: '12px',
        '@media(max-width : 600px)': {
            margin: '0rem 1rem 0rem 1rem',
        }
    },
    image__box: {
        '@media(max-width : 1200px)': {
            width: '100%',
            height: '100%'
        }
    }

})


const Application = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.mainBox}>
                <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{
                            marginTop: '10rem',
                            '@media(max-width:900px)': {
                                marginTop: '1rem',
                            }
                        }}>
                            <Box sx={{
                                '@media(max-width : 900px)': {
                                    textAlign: 'center'
                                }
                            }}>
                                <Heading heading={"Control Application"} />
                                <Heading heading={"From Your Mobile"} />
                            </Box>
                            <Box className={classes.wrap}>
                                <Box className={classes.box}>
                                    <Typography className={classes.round} color={'#fff'}>1</Typography>
                                    <Typography variant='h6' color={'#fff'}>White Paper</Typography>
                                </Box>
                                <Box className={classes.box}>
                                    <Typography className={classes.round} color={'#fff'}>2</Typography>
                                    <Typography variant='h6' color={'#fff'}>Privacy & Policy</Typography>
                                </Box>
                            </Box>

                            <Box className={classes.wrap2}>
                                <CustomTooltip title="Coming Soon" placement="top">
                                    <Link href={'javascript:void(0)'}>
                                        <Image src={download_btn01} alt={''} width={180} />
                                    </Link>
                                </CustomTooltip>

                                <CustomTooltip title="Coming Soon" placement="top">
                                <Link href={'javascript:void(0)'}>
                                        <Image src={download_btn02} alt={''} width={180} />
                                    </Link>
                                </CustomTooltip>

                                



                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Image src={control} alt={''} className={classes.image__box} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Application
