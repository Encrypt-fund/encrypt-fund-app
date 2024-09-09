"use client"

import { Box, Grid, InputBase,  Slider,  TextField, Typography, styled, useTheme } from "@mui/material";
import Link from "next/link";
import { useContext, useState } from "react";
import { ColorModeContext } from "@/context";


const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: "1.5rem",
    borderRadius: '12px',
    '@media(max-width : 600px)': {
        padding: "1rem",
        marginTop: '0.8rem'
    }
}));

const ListBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem'
}));

const StyledSlider = styled(Slider)(
    ({ theme }) => `
    .MuiSlider-root {
        background-color: red;
        padding:5px
      }
    .MuiSlider-rail {
      background-color: #41236B;
      padding:4px
    }
    .MuiSlider-track {
      background: linear-gradient(0deg, #932AC3, #7B35D8);
    }
    .MuiSlider-thumb {
        background: linear-gradient(0deg, #932AC3, #7B35D8);
      }
  `
);

const Earningcalculate = () => {
    const [ramaValue, setRamaValue] = useState<string>('10,000 RUSD');
    const [isActive, setIsActive] = useState(false);

    const Ramahandle = () => {
        setRamaValue('10,000 RUSD');
        setIsActive(!isActive)
    };

    const Usdhandle = () => {
        setRamaValue('7,951.13 USD');
        setIsActive(!isActive)
    };

    const [value, setValue] = useState<number[]>([10,]);
    const [valueTwo, setValueTwo] = useState<number[]>([365]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    const handleChangeTwo = (event: Event, newValue: number | number[]) => {
        setValueTwo(newValue as number[]);
    };

    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <>
            <Box mt={3}>
                <Typography variant="h6">Earnings Calculator</Typography>

                <Grid container spacing={2} mt={1.5}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <StyledBox>
                            
                            <Typography fontWeight={300} sx={{ opacity: '60%' }} >Amount</Typography>
                            <ListBox>

                                <Box flex={'70%'}>
                                    <Box
                                        sx={{
                                            backgroundColor: theme.palette.secondary.contrastText,
                                            padding: '0.8rem',
                                            borderRadius: '6px'
                                        }}
                                    >{ramaValue}</Box>
                                </Box>
                                <Box
                                    sx={{
                                        backgroundColor: theme.palette.secondary.contrastText,
                                        display: 'flex',
                                        gap: '5px',
                                        alignItems: 'center',
                                        padding: '4px 5px',
                                        borderRadius: '6px',


                                    }}
                                >
                                    <Box
                                        sx={{
                                            background: isActive ? theme.palette.secondary.contrastText : 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                            padding: '6px 10px',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                        onClick={Ramahandle} >RUSD</Box>
                                    <Box sx={{
                                        background: !isActive ? theme.palette.secondary.contrastText : 'linear-gradient(0deg, #932AC3, #7B35D8)',
                                        padding: '6px 10px',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }} onClick={Usdhandle}>USD</Box>
                                </Box>

                            </ListBox>
                            <Typography sx={{ opacity: '60%', marginTop: '3.6rem' }}>Validator commission</Typography>
                            <Box sx={{
                                display: 'flex', justifyContent: 'space-between',
                                gap: '1rem',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
                                <StyledSlider
                                    value={value}
                                    onChange={handleChange}
                                    aria-labelledby="range-slider"
                                    min={0}
                                    max={100}
                                />
                                <Typography>{value}%</Typography>
                            </Box>

                            <Typography sx={{ opacity: '60%', marginTop: '3.6rem' }}>Staking duration</Typography>
                            <Box sx={{
                                display: 'flex', justifyContent: 'space-between',
                                gap: '1rem',
                                alignItems: 'center',
                                marginBottom: '1rem'
                            }}>
                                <StyledSlider
                                    value={valueTwo}
                                    onChange={handleChangeTwo}
                                    aria-labelledby="range-slider"
                                    min={0}
                                    max={365}
                                  
                                />
                                <Typography>{valueTwo}Days</Typography>
                            </Box>
                        </StyledBox>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                       
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Earningcalculate;