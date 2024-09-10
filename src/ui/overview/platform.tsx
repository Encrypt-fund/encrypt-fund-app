import Heading from "@/theme/components/heading";
import Text from "@/theme/components/text";
import { Box, Grid } from "@mui/material";
import Image from "next/image";
import { makeStyles } from '@mui/styles';
import Rewards from "./rewards";
import features_img01 from '../../icons/features_img01.svg'
import features_img02 from '../../icons/features_img02.svg'
import features_img03 from '../../icons/features_img03.svg'
import features_img04 from '../../icons/features_img04.svg'


const useStyles = makeStyles({
    mainBox: {
        textAlign: 'center',
        '@media(max-width : 600px)': {
            flexWrap: 'flex',
            flexDirection: 'column-reverse',
            textAlign: 'center'
        }
    },
    mainBoxWrap: {
        padding: '5rem 2rem 1rem 2rem',
        '@media(max-width : 600px)': {
            padding: '2rem 1rem 1rem 1rem',
        }
    }
})



const Platform = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.mainBoxWrap}>
                <Box className={classes.mainBox}>
                    <Heading heading={'Revolutionary platform with Exlusive '} />
                    <Heading heading={'Reward and Benefits.'} />
                </Box>
                <Box sx={{
                    width: '50%',
                    height: '1px',
                    background: 'linear-gradient(90deg, #071616, #00FFFF, #071616)',
                    margin: '3rem auto 3rem auto',
                    '@media(max-width : 600px)': {
                        margin: '1.5rem auto 1.5rem auto',
                    }
                }} />
                <Grid container spacing={2} color={'#fff'}>
                    <Rewards reward_hding={'Utility token'} reward_text={'EF serves as a medium of exchange within the MumbleChat ecosystem, enabling users to access premium features, purchase virtual goods, and participate in community activities.'} Image_r={features_img01} />
                    <Rewards reward_hding={'Incentivizing User Engagement'} reward_text={'EF tokens are used to incentivize user engagement within the platform. Users earn EF tokens for various activities, such as chatting, participating in group discussions, responding to daily prompts, and inviting new members.'} Image_r={features_img02} />
                    <Rewards reward_hding={'Rewards and Benefits'} reward_text={'EF token holders are entitled to rewards and benefits within the MumbleChat ecosystem. These rewards may include access to exclusive content, discounts on platform services, and voting rights in governance decisions.'} Image_r={features_img03} />
                    <Rewards reward_hding={'Staking Program'} reward_text={'EF token holders have the opportunity to stake their tokens in the MumbleChat platform to earn additional rewards. By staking their tokens, users contribute to the security and stability of the network while earning staking rewards proportional to the amount and duration of their staked tokens.'} Image_r={features_img04} />
                </Grid>

            </Box>
        </>
    )
}

export default Platform
