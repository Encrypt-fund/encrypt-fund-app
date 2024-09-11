'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material';
import { ColorModeContext } from '@/context';
import { makeStyles } from '@mui/styles';
import Heading from '@/theme/components/heading';
import Buy from './buy';
import Investing from './investing';
import { formatEther } from 'viem';
import { useEffect, useState } from 'react';
import useCheckAllowance from '@/hooks/useCheckAllowance';
import { useAccount, useBlockNumber, useChainId } from 'wagmi';
import { efContractAddresses } from '@/configs';
import { useQueryClient } from '@tanstack/react-query';
 



interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const StyledBox = styled(Box)(({ theme }) => ({
    marginTop: '2.2rem'
}));
function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const useStyles = makeStyles({
     
    box_hding: {

        backgroundColor: '#27313d',
        border: '1px solid #2b3139',
        display: 'flex',
        justifyContent: 'center',
        height: '480px',
        alignItems: 'center',
        borderRadius: '12px'
    },
    comingsoon: {
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #00d632',
        borderRadius: '12px',
        marginTop: '1rem'
    },
    MainHis: {
        margin: '1.5rem 1.5rem 1.5rem 1.5rem'
    }
});

export default function HomeTab({resultOfRusdBalance,resultOfEfTokenPrice}:any) {
    const classes = useStyles();
    const { address } = useAccount()
    const chainId = useChainId()
    const queryClient = useQueryClient()
    const { data: blockNumber } = useBlockNumber({ watch: true })
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();

    const resultOfCheckAllowance = useCheckAllowance({
        spenderAddress: chainId === 1370 ? efContractAddresses.ramestta.ef_invest : efContractAddresses.pingaksha.ef_invest
      })

    // use to refetch
    useEffect(() => {
   
        queryClient.invalidateQueries({ queryKey: resultOfCheckAllowance.queryKey })
     
    }, [blockNumber, queryClient,resultOfCheckAllowance])
    

    return (
        <Box  >



            <Box sx={{ width: '100%', border: '1px solid #2b3139', borderRadius: '8px', padding:'1rem 1rem 2rem 1rem', marginTop: '1.5rem' }}>

                <Box sx={{ textTransform: 'capitalize', }}>
                    <Tabs
                        variant="fullWidth" // Ensure the tabs take up the full width
                        sx={{
                            backgroundColor: '#27313d',
                            borderRadius: '8px',
                            padding: '4px 6px 6px 6px',
                            '.MuiTabs-indicator': {
                                height: 47,
                                color: '#000 !important',
                                background: 'linear-gradient(0deg, #00d632, #00d632)',
                                borderRadius: '8px',
                                backgroundColor: 'transparent',
                            },
                            '.Mui-selected': {
                                color: "#000 !important",
                                textTransform: 'capitalize',
                                zIndex: '1',
                            }
                        }} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{ textTransform: 'capitalize', color: "#999", border: '1px solid #00d63247', borderRadius: '8px', flex: 1, '@media(max-width : 600px)': { padding: '12px 10px' } }} label="Invest" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'capitalize', color: "#999", border: '1px solid #00d63247', borderRadius: '8px', margin: '0px 0px 0px 10px', flex: 1, '@media(max-width : 600px)': { padding: '12px 10px' } }} label="Buy" {...a11yProps(1)} />
                        
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                <Investing 
                resultOfRusdBalance={resultOfRusdBalance} 
                resultOfEfTokenPrice={resultOfEfTokenPrice}
                resultOfCheckAllowance={resultOfCheckAllowance}
                />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                <Buy 
                    resultOfRusdBalance={resultOfRusdBalance} 
                    resultOfEfTokenPrice={resultOfEfTokenPrice}
                    resultOfCheckAllowance={resultOfCheckAllowance}
                 />
                </CustomTabPanel>
                 
            </Box>
        </Box>
    );
}
