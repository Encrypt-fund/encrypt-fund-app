'use client'
import Heading from "@/theme/components/heading";
import Text from "@/theme/components/text";
import Image from "next/image";
import banner_shape01 from '../../icons/banner_shape01.svg'
import banner_shape02 from '../../icons/banner_shape02.svg'
import CountdownTimer from "./countdownTimer";
import { makeStyles } from '@mui/styles';
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import backward from '../../icons/backward.svg'



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
        alignItems: 'center'

    },
    timerText: {
        fontSize: '2rem',
        backgroundColor: '#fff',
        color: '#000',
        padding: '16px 24px',
        borderRadius: '12px',
        width: '120px',    
    },
    dotBox: {
        textAlign: 'center'
    },
    arrowBtn: {
        textAlign: 'center'
    },
    line:{
        width: '50%',
        height: '1px',
        background: 'linear-gradient(90deg, #071616, #00FFFF, #071616)',
        margin:'3rem auto auto auto'
    }
});



const Bnr = ({resultOfIcoDetail}:any) => {
    const classes = useStyles();

      
    const targetDate = new Date(resultOfIcoDetail?.data ?Number(resultOfIcoDetail?.data?.startAt)*1000: new Date().getTime());
    return (
        <>
            <Box className={classes.dotBox} mt={3}>
                <Heading heading={'Discover the Next Big Opportunity:'} />
                <Heading heading={'Our ICO is Live'} />
            </Box>
            {/* <Box className={classes.dotBox} mt={2}>
                <Text text={'A new smart block chain based marketplace for trading digital'} />
                <Text text={'goods & assets according.'} />
            </Box> */}
            <Box className={classes.dotBox} mt={2}>
                <Text text={'MUMBLE Chat: Secure, decentralized messaging app powered by'} />
                <Text text={"ramestta's web3 technology."} />
            </Box>

            <Box>
                <Box className={classes.line}/>
            </Box>

            <Box>
                <Grid container spacing={2}>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Box className={classes.dotBox}>
                            <Image src={banner_shape01} alt="" />
                        </Box>

                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <CountdownTimer targetDate={targetDate} />
                    </Grid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <Box className={classes.dotBox}>
                            <Image src={banner_shape02} alt="" />
                        </Box>
                    </Grid>

                </Grid>
                <Box className={classes.arrowBtn}>
                    <Link href={""}><Image style={{ width: '60px', height: '50px', mixBlendMode: 'color-burn' }} src={backward} alt={""} /></Link>
                </Box>
            </Box>
        </>
    )
}

export default Bnr;


