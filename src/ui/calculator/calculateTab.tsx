"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material';
import { ColorModeContext } from '@/context';
import { makeStyles } from '@mui/styles';
import Heading from '@/theme/components/heading';
import InnerTab from './innerTab';



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
    mainDiv: {

    },

});

export default function CalculateTab() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box className={classes.mainDiv}>



            <Box sx={{ width: '100%', marginTop: '1.5rem' }}>

                <Box sx={{
                    textTransform: 'capitalize',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'

                }}>
                    <Tabs

                        sx={{

                            '.MuiTabs-indicator': {
                                height: 47,
                                color: '#000',
                                background: 'linear-gradient(0deg, #00FFFF, #00FFFF)',
                                borderRadius: '8px',
                                backgroundColor: 'transparent',
                            },
                            '.Mui-selected': {
                                color: "#000 !important",
                                textTransform: 'capitalize',
                                zIndex: '1',
                            }
                        }} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{ textTransform: 'capitalize', color: "#999",border:'1px solid #02b5b56b',borderRadius:'8px',margin:'0px 10px', }} label="Private Sale" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'capitalize', color: "#999",border:'1px solid #02b5b56b',borderRadius:'8px',margin:'0px 10px', }} label="Pre-Sale" {...a11yProps(1)} />
                        <Tab sx={{ textTransform: 'capitalize', color: "#999",border:'1px solid #02b5b56b',borderRadius:'8px',margin:'0px 10px', }} label="Public Sale" {...a11yProps(2)} />
                    </Tabs>

                    <Box><Typography>$0.001</Typography></Box>
                </Box>
                {/* <CustomTabPanel value={value} index={0}>
                    <Box mt={2}>
                        <InnerTab />
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box mt={2}>
                    <InnerTab />
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Box mt={2}>
                    <InnerTab />
                    </Box>
                </CustomTabPanel> */}
            </Box>
        </Box>
    );
}
