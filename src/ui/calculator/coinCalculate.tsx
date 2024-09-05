import { Box, InputBase, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import CalculateTab from "./calculateTab";
import InnerTab from "./innerTab";
import { useState } from "react";

const useStyles = makeStyles({
    coin__lunch: {
        textAlign: 'center',
    },
    mainDiv: {
        padding: '1.5rem',
        '@media(max-width : 600px)':{
            padding: '0.5rem',
        }
    },
    max_btn__wrap: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        borderRadius: '8px',
        padding: '2px',
        marginTop: '0.5rem',
    },
    top__input: {
        marginTop: '1.5rem'
    }
});

const CoinCalculate = () => {
    const classes = useStyles();
    const [value,setValue]=useState("")
    const [value1,setValue1]= useState<number[]>([0.05,]);
    const [selectedCurrency, setSelectedCurrency] = useState('0.05');
    return (
        <>
            <Box className={classes.mainDiv}>
                <Box className={classes.coin__lunch}>
                    <Typography fontSize={20} color={'#fff'}>Calculate your profits on coin launch</Typography>
                </Box>

                <Box className={classes.top__input}>
                    <Typography color={'#fff'}>Enter how much MMCT coins you have in the input below.</Typography>
                    <Box className={classes.max_btn__wrap}>
                        <InputBase
                        value={value}
                        onChange={(e)=>setValue(e.target.value)}
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
                            placeholder={'0.00 MMCT'}
                            type={'number'}
                        />
                    </Box>
                </Box>

                <Box className={classes.top__input}>
                    <Typography color={'#fff'}>USD Amount</Typography>
                    <Box className={classes.max_btn__wrap}>
                        {/* <InputBase
                        value={Number(value)*0.05}
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
                            placeholder={'$0.00'}
                            type={'number'}
                            disabled={value===''?true:false}
                        /> */}
                        <Typography    
                        sx={{
                                flex: 1,
                                width: '100%',
                                padding: '0.55rem 0.5rem',
                            }} 
                            color={value?'#fff':'#999'}>
                            {value && value1?`$${Number(value)*Number(selectedCurrency&& Number(value1)<=0.05?selectedCurrency:value1)}`:'$0.00'}
                        </Typography>
                    </Box>
                </Box>

                <InnerTab setValue={setValue1} selectedCurrency={selectedCurrency} setSelectedCurrency={setSelectedCurrency} />
            </Box>
        </>
    )
}

export default CoinCalculate