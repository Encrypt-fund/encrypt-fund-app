"use client"
import { Box, Typography, styled } from "@mui/material";
import Header from "../shared/Header";
import GetInTouch from "../overview/getInTouch";
import Footer from "../shared/footer";
// import Location from "./location";
// import MapLocate from "./mapLocate";
 












const Contactcmp = () => {


    return (

        <>
            <Box
                sx={{
                    backgroundColor: '#010314'
                }}
            >
                <Box sx={{
                    background: 'linear-gradient(359deg, #3DC1F2, #0F101E, #0F101E)',
                    margin: '0rem 1.5rem',
                    padding: '0rem 1rem 1rem 1rem',
                    borderRadius: '12px',
                }}>
                    <Box className={'bnrbg4'}>
                        <Header />
                        
                    </Box>
                </Box>

                {/* <Location />
                <MapLocate/> */}
                <GetInTouch />
                <Footer />
            </Box>
        </>

    );
}


export default Contactcmp