"use client"
import { Box, Grid } from "@mui/material";
import Sidebardb from "../dashboard/sidebardb";
import Dsboard from "../dashboard/dsboard";
import DashboardHeader from "../shared/dashboardHeader";
import Profile from "./profile";
import ComingSoon from "../leaderboard/comingSoon";
 
 














const Profilecmp = () => {


    return (

        <>
            <Box
                sx={{ backgroundColor: '#1e2329' }}>
                <Grid container spacing={0}>
                    <Grid item lg={2.5} md={2.5} sm={12} xs={12} borderRight={'1px solid #2b3139'}>
                        <Box sx={{ '@media(max-width : 900px)': { display: 'none' } }}>
                            <Sidebardb />
                        </Box>

                    </Grid>
                    <Grid item lg={9.5} md={9.5} sm={12} xs={12}>
                        <DashboardHeader />
                     {/* <Profile/> */}
                     <ComingSoon/>
                    </Grid>
                </Grid>
            </Box>
        </>

    );
}


export default Profilecmp