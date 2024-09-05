"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material';
import Chart from './chart';
import { makeStyles } from '@mui/styles';
import ChartTwo from './chartTwo';
import { ColorModeContext } from '@/context';

const useStyles = makeStyles({
    listItem: {
        display: 'flex',
        alignItem: 'center',
        gap: '1rem',
        padding: '0.6rem 1rem',
        borderRadius: '8px',
        marginTop: '0.4rem',
         
    },
    round: {

        width: '20px',
        height: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '6rem'
    },
    boxtext: {
        marginTop: '1.5rem'
    },
    mainListBox: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        marginTop:'1.5rem',
        '@media(max-width : 600px)':{
            flexWrap:'wrap',
            justifyContent:'flex-start'
           }
    }

})

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}


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

export default function DistributeTab() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box sx={{ width: '100%', }}>
            <Box>
                <Box sx={{ textTransform: 'capitalize', }}>
                    <CustomTabPanel value={value} index={0}>
                        <>
                            <Chart />
                        </>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                        <>
                            <ChartTwo />
                        </>
                    </CustomTabPanel>
                    <Box sx={{ textAlign: 'center' }}>
                        <Box sx={{
                            backgroundColor: '#101012',
                            border:'1px solid #1D1D20',
                            display: 'inline-block',
                            padding: '6px 8px 8px 8px',
                            borderRadius: '30px'
                        }}>
                            <Tabs
                                variant="scrollable"
                                sx={{


                                    '.MuiTabs-indicator': {
                                        height: 46,
                                        color: '#000 !important',
                                        background: 'linear-gradient(0deg, #00FFFF, #00FFFF)',
                                        borderRadius: '30px',
                                        backgroundColor: 'transparent'

                                    },
                                    '.Mui-selected': {
                                        color: "#000 !important",
                                        textTransform: 'capitalize',
                                        zIndex: '1',
                                    }
                                }} value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab sx={{ textTransform: 'capitalize', color: '#fff' }} label="Funding Allocation" {...a11yProps(0)} />
                                <Tab sx={{ textTransform: 'capitalize', color: '#fff' }} label="Token Distribution" {...a11yProps(1)} />


                            </Tabs>
                        </Box>
                    </Box>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <>

                        <Box className={classes.mainListBox}>
                            <Box component={'ul'}>
                                <Box className={classes.listItem} component={'li'}>
                                    <Typography bgcolor={'#02CACA'} className={classes.round}></Typography>
                                    <Typography fontSize={14} color={'#fff'}>Development (40%)</Typography>
                                </Box>
                                <Box className={classes.listItem} component={'li'}>
                                    <Typography bgcolor={'#116262'} className={classes.round}></Typography>
                                    <Typography fontSize={14} color={'#fff'}>Marketing (30%)</Typography>
                                </Box>
                                
                            </Box>

                            <Box component={'ul'}>
                            <Box className={classes.listItem} component={'li'}>
                                    <Typography bgcolor={'#136F84'} className={classes.round}></Typography>
                                    <Typography fontSize={14} color={'#fff'}>Operations (20%)</Typography>
                                </Box>
                                <Box className={classes.listItem} component={'li'}>
                                    <Typography bgcolor={'#033356'} className={classes.round}></Typography>
                                    <Typography fontSize={14} color={'#fff'}>Legal and Compliance (10%)</Typography>
                                </Box>
                                 
                            </Box>
                        </Box>
                    </>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <>
                    <Box className={classes.mainListBox}>
                            <Box component={'ul'}>
                                <Box className={classes.listItem} component={'li'}>
                                    <Typography bgcolor={'#02CACA'} className={classes.round}></Typography>
                                    <Typography fontSize={14} color={'#fff'}>Team and Development (20%)</Typography>
                                </Box>
                                <Box className={classes.listItem} component={'li'}>
                                    <Typography bgcolor={'#116262'} className={classes.round}></Typography>
                                    <Typography fontSize={14} color={'#fff'}>Marketing and Partnerships (30%)</Typography>
                                </Box>
                                <Box className={classes.listItem} component={'li'}>
                                    <Typography bgcolor={'#136F84'} className={classes.round}></Typography>
                                    <Typography fontSize={14} color={'#fff'}>ICO, Ecosystem and Community Rewards (50%)</Typography>
                                </Box>
                            </Box>

                            {/* <Box component={'ul'}>
                                <Box className={classes.listItem} component={'li'}>
                                    <Typography bgcolor={'#00A3FF'} className={classes.round}></Typography>
                                    <Typography fontSize={14} color={'#fff'}>Team & Advisors (5%)</Typography>
                                </Box>
                                <Box className={classes.listItem} component={'li'}>
                                    <Typography bgcolor={'#033356'} className={classes.round}></Typography>
                                    <Typography fontSize={14} color={'#fff'}>Ecosystem Growth (2.5%)</Typography>
                                </Box>
                                <Box className={classes.listItem} component={'li'}>
                                    <Typography bgcolor={'#55558A'} className={classes.round}></Typography>
                                    <Typography fontSize={14} color={'#fff'}>Liquidity Provision (2.5%)</Typography>
                                </Box>
                            </Box> */}
                        </Box>
                    </>
                </CustomTabPanel>


            </Box>
        </Box>
    );
}