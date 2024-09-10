"use client"
import { Box, Grid, InputBase, LinearProgress, Slider, TextField, Tooltip, Typography, linearProgressClasses, styled, useTheme } from "@mui/material";
import Link from "next/link";
import { useContext, useState } from "react";
import { ColorModeContext } from "@/context";


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

const ListBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem'
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 30,
    borderRadius: 30,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        width: '100% !important'
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 30,
        background: 'linear-gradient(90deg, #080808, #00ffff78)',
    },
}));

const ValueLabelComponent = (props: { children: any; open: any; value: any; }) => {
    const { children, open, value } = props;

    return (
        <Tooltip
            open={open}
            enterTouchDelay={0}
            placement="top"
            title={`$${value}`}
            arrow
        >
            {children}
        </Tooltip>
    );
};


const Slidercoin = ({setValue}:{setValue:any}) => {

    const [valueTop, setValueTop] = useState<number[]>([0.05,]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValueTop(newValue as number[]);
        setValue(newValue as number[])
    };

    return (
        <>
            <Box mt={4}>





                <Box sx={{
                    display: 'flex', justifyContent: 'space-between',
                    gap: '1rem',
                    alignItems: 'center',
                    marginBottom: '1rem'
                }}>

                    <StyledSlider
                        value={valueTop}
                        onChange={handleChange}
                        aria-labelledby="range-slider"
                        min={0.05}
                        step={0.001}
                        max={10}
                        valueLabelDisplay="auto"
                        slots={{valueLabel:ValueLabelComponent}}
                        slot="lol"
                        sx={{
                            backgroundColor: '#101012',
                            border: '1px solid #1D1D20',
                            borderRadius: '30px',
                            '&.Mui-active': {
                                boxShadow: '0 0 0 14px rgba(0, 0, 255, 0.16)', // Change this to your desired active color
                            },
                        }}
                    />
                    {/* <BorderLinearProgress variant="determinate" value={valueTop as any} /> */}
                    {/* <Typography color={'#fff'}>{value}%</Typography> */}

                </Box>
                <Box textAlign={'center'}><Typography color={'#fff'}>Move the slider to see how much your EF will be worth at different price targets!</Typography></Box>
            </Box>
        </>
    )
}

export default Slidercoin;