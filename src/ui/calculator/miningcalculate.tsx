import { Box, Grid, IconButton, InputBase, Slider, styled, Tooltip, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import CalculateTab from "./calculateTab";
import Link from "next/link";
import InfoIcon from '@mui/icons-material/Info';
import m1 from '../../icons/m1.svg'
import m2 from '../../icons/m2.svg'
import m3 from '../../icons/m3.svg'
import m4 from '../../icons/m4.svg'
import Image from "next/image";
import InnerTab from "./innerTab";
import { useState } from "react";
import HoverTool from "@/theme/components/hoverTool";
// import MiningCalculatorTable from "./miningCalculatorTable";



const useStyles = makeStyles({
    coin__lunch: {
        textAlign: 'center',
    },
    mainDiv: {
        padding: '1.5rem',
    },
    mainBox: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        borderRadius: '8px',
        padding: '1rem'
    },
    sBox: {
        backgroundColor: '#000',
        border: '1px solid #1D1D20',
        padding: '10px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    eftool: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    max_btn__wrap: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        borderRadius: '8px',
        display: 'flex',
        padding: '2px',
        marginTop: '0.5rem'
    },
    max_btn: {
        backgroundColor: '#00FFFF',
        padding: '10px 20px',
        borderRadius: '8px',
        color: '#000',
        textDecoration: 'none',
        fontWeight: 500,
    },

});

const EFBOX = [
    {
        id: 1,
        Title: '1',
        date: '200.00',
        ef: '20',
        icon: m1,
    },
    {
        id: 2,
        Title: '10',
        date: '2k',
        ef: '200',
        icon: m2,
    },
    {
        id: 3,
        Title: '30',
        date: '6k',
        ef: '600',
        icon: m3,
    },
    {
        id: 4,
        Title: '100',
        date: '20k',
        ef: '2000',
        icon: m4,
    },
]



const StyledSlider = styled(Slider)(
    ({ theme }) => `
     padding: 10px !important;
    .MuiSlider-root {
        background-color: #fff !important;
        padding:16px
      }
    .MuiSlider-rail {
      background: linear-gradient(90deg, #080808, #00FFFF);
      padding:12px
    }
      
    .MuiSlider-track {
      background: linear-gradient(0deg, #fff, #fff);
       
    }
    .MuiSlider-thumb {
        background: linear-gradient(0deg, #00FFFF, #00FFFF);
        padding:20px
      }
  `
);

const Miningcalculate = () => {
    const classes = useStyles();
    const [valueTop, setValueTop] = useState<number[]>([0,]);
    const [inputInUsd, setInputInUsd] = useState<string>('');
    

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValueTop(newValue as number[]);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputInUsd(e.target.value.trim());
    };


    

    return (
        <>
            <Box className={classes.mainDiv}>
                <Box className={classes.coin__lunch}>
                    <Typography fontSize={20} color={'#fff'}>Calculate your mining potential on all miners below</Typography>
                </Box>

                <Box className={classes.coin__lunch}>
                    <Typography color={'#fff'}>How many coins will I mine <Box component={'span'}><Link href={""} style={{ textDecoration: 'none', color: '#00FFFF' }}>per day?</Link></Box></Typography>
                </Box>

                <Typography mt={3} color={'#fff'} variant="h6">Enter how much $ you want to invest.</Typography>
                <Box className={classes.max_btn__wrap}>
                    <InputBase
                        onChange={(e) => setInputInUsd(e.target.value.trim())}
                        value={inputInUsd}
                        type={'number'}
                        sx={{
                            flex: 1,
                            color: '#fff',
                            width: '100%',
                            padding: '0.3rem 0.5rem',
                            ':-moz-placeholder': {
                                color: 'fff',
                            },
                            '& input[type=number]': {
                                '-moz-appearance': 'textfield',
                              },
                              '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                                '-webkit-appearance': 'none',
                                margin: 0,
                              },
                        }}
                        
                        fullWidth
                        placeholder={'Enter Amount in $'}

                    />
                    {/* <Link className={classes.max_btn} href={""}>Max</Link> */}
                </Box>

                <Typography variant="h6" mt={2} mb={2} color={'#fff'}>Members <Typography component={'span'}><HoverTool Title={"How many people you referred?"} /></Typography></Typography>

               
                <Box sx={{ margin: '0rem 2rem 0rem 2rem' }}>
                    
                        <StyledSlider
                            value={valueTop}
                            onChange={handleChange}
                            aria-labelledby="range-slider"
                            min={0}
                            max={100}
                            valueLabelDisplay="auto"
                            sx={{
                                backgroundColor: '#101012',
                                border: '1px solid #1D1D20',
                                borderRadius: '30px',
                                '&.Mui-active': {
                                    boxShadow: '0 0 0 14px rgba(0, 0, 255, 0.16)', // Change this to your desired active color
                                },
                            }}
                        />
                     
                </Box>

                {/* { Number(inputInUsd)>0 && <MiningCalculatorTable inputInUsd={inputInUsd} member={valueTop[0].toString()} />} */}
            </Box>
        </>
    )
}

export default Miningcalculate