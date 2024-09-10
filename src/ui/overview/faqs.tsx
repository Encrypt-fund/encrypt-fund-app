import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Grid, Typography, styled, useTheme } from "@mui/material"
import SouthIcon from '@mui/icons-material/South';
import { useContext, useState } from "react";
import { ColorModeContext } from "@/context";
import Heading from "@/theme/components/heading";



const Accordion_list = [
    {
        id: 1,
        title: 'what is ICO?',
        text: 'ICO stands for Initial Coin Offering, a fundraising method where new cryptocurrencies or tokens are sold to investors before being listed on exchanges, often used by startups to raise capital for their projects.'
    },
    {
        id: 2,
        title: 'How EF Mining and Reward Tiers work.',
        text: 'When you participate in the ICO by buying EF tokens, those tokens are locked in a contract for 365 days. As a result, you earn more tokens over time through a process called minining. The basic idea is that you get a small percentage of extra tokens every hour based on the amount you initially locked.'
    },
    {
        id: 3,
        title: 'What is  self minining process.',
        text: 'The minining process in the ICO allows users to buy EF tokens from the ICO portal. The purchased EF tokens are instantly locked in a contract, and users earn a basic minining rate of 0.001% per hour on their locked amount. Additionally, users can increase their minining percentage by referring direct users, according to the Self minining  tiers. '
    },
    {
        id: 4,
        title: 'What are the types of self minining tiers.',
        text: 'Starter Minting Speed: For investments between $1 and $100. - Silver Minting Speed: For investments between $101 and $500. - Gold Minting Speed: For investments between $501 and $2000. - Platinum Minting Speed: For investments between $2001 and $5000.'
    },
     

]


const StyledBox = styled(Box)(({ theme }) => ({
    margin: '0rem 4rem',
    '@media(max-width : 600px)': {
        margin: '0rem 1.5rem',
    }

}));

const Faqs = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel: any | any | ((prevState: any) => any)) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <StyledBox>


                <Box sx={{ textAlign: 'center', margin: '4rem 0rem 2rem 0rem' }}>
                    <Heading heading={"Ask Quick Question"} />
                    <Box sx={{
                        width: '30%',
                        height: '1px',
                        background: 'linear-gradient(90deg, #071616, #00FFFF, #071616)',
                        margin: '3rem auto 3rem auto',
                        '@media(max-width : 600px)': {
                            margin: '1.5rem auto 1.5rem auto',
                        }
                    }} />
                </Box>
                <Grid container spacing={2}>

                    <Grid item lg={12} md={12} sm={12} xs={12}>

                        {Accordion_list.map((item, index) => (
                            <Accordion
                                key={index}
                                expanded={expanded === `panel${index}` as any}
                                onChange={handleChange(`panel${index}`)}
                                sx={{
                                    backgroundColor: '#1C1C20',
                                    borderRadius: '6px',
                                    boxShadow: 'inherit',
                                    marginTop: '1rem',
                                    padding: '5px',
                                    '&.Mui-expanded': {
                                        background: 'linear-gradient(359deg, #00FFFF, #00FFFF)',
                                        marginTop: '1rem',
                                        color: '#000'
                                    },
                                }}>
                                <AccordionSummary

                                    sx={{
                                        fontWeight: 700,
                                        color: expanded === `panel${index}` as any ? '#000' : '#fff',
                                    }}
                                    expandIcon={<SouthIcon sx={{ color: expanded === `panel${index}` as any ? '#000' : '#fff' }} />}
                                    aria-controls={`panel${index}-content`}
                                    id={`panel${index}-header`}

                                >
                                    {item.title}
                                </AccordionSummary>
                                <AccordionDetails>

                                    {item.text}

                                </AccordionDetails>
                            </Accordion>
                        ))}

                    </Grid>

                </Grid>

            </StyledBox>

            <Box sx={{
                padding: '5rem 0rem',
                '@media(max-width : 900px)': {
                    padding: '2rem 0rem',
                }
            }}>

            </Box>
        </>
    )
}

export default Faqs


