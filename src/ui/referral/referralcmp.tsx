"use client"
import { Box, Grid } from "@mui/material";
import Sidebardb from "../dashboard/sidebardb";
import Dsboard from "../dashboard/dsboard";
import DashboardHeader from "../shared/dashboardHeader";
import Referral from "./referral";
import ReferralTab from "./referralTab";
import Refer from "../dashboard/refer";
import ComingSoon from "../leaderboard/comingSoon";
import Footer from "../shared/footer";














const Raferralcmp = () => {


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
                         
                        <ReferralTab/>
                        <Footer/>
                        {/* <ComingSoon/> */}
                    </Grid>
                </Grid>
            </Box>
        </>

    );
}


export default Raferralcmp