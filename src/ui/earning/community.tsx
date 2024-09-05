import { Box, Grid, InputBase, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Heading from "@/theme/components/heading";
import TableEarn from "./tableEarn";
import { useAccount, useChainId, useReadContract } from "wagmi";
import { Address, formatEther, zeroAddress } from "viem";
import { convertToAbbreviated } from "@/lib/convertToAbbreviated";
import { mmctTokenAbi } from "@/configs/abi/mmctTokenAbi";
import { mmctContractAddresses } from "@/configs";
import { mmctStakingAbi } from "@/configs/abi/mmctStaking";
import { formatNumberToCurrencyString } from "@/lib/formatNumberToCurrencyString";
import TableCummunityEarn from "./tableCummunityEarn";


const useStyles = makeStyles({
    mainDiv: {
        margin: '10px',
        minHeight: '100vh',
    },
    box_hding: {

        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        display: 'flex',
        justifyContent: 'center',
        height: '480px',
        alignItems: 'center',
        borderRadius: '12px'
    },
    Card: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        padding: '1rem',
        borderRadius: '8px',
        textAlign: 'center'
    },
    cardlist: {
        padding: '10px',
    },
    boxCr: {
        border: '1px solid #1D1D20',
        borderRadius: '4px',
        marginTop: '1.5rem'
    }



});


 


const Community = () => {
    const classes = useStyles();
    const { address } = useAccount()
    const chainId = useChainId()

    const resultOfUserCommunityReward = useReadContract({
        abi: mmctStakingAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
        functionName: 'user2CommunityRewardInfo',
        args: [address as Address],
        account: zeroAddress
    })

    const Card = [
         
        {
            id: 1,
            Title: 'Claimed Rewards',
            Amount: `${convertToAbbreviated(formatEther?.(BigInt?.(resultOfUserCommunityReward?.data ? resultOfUserCommunityReward.data.claimedReward.toString() : 0)),5)}`,
            data: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfUserCommunityReward?.data ? resultOfUserCommunityReward.data.claimedReward.toString() : 0))) * 0.05,5)}`
        },
        {
            id: 2,
            Title: 'Unclaimed Rewards',
            Amount: `${convertToAbbreviated(formatEther?.(BigInt?.(resultOfUserCommunityReward?.data ? resultOfUserCommunityReward.data.amount.toString() : 0)),5)}`,
            data: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfUserCommunityReward?.data ? resultOfUserCommunityReward.data.amount.toString() : 0))) * 0.05,5)}`
        },
    ]
    return (
        <>

            <Box className={classes.mainDiv}>

                <Typography
                    sx={{
                        fontFamily: 'Bruce Forever !important',
                        color: '#00FFFF',
                        '@media(max-width : 1200px)': {
                            fontSize: '22px',
                            '@media(max-width : 900px)': {
                                fontSize: '20px'
                            }
                        }

                    }}
                    variant="h4">Community Reward</Typography>

                <Box className={classes.boxCr}>
                    <Box className={classes.cardlist}>
                        <Grid container spacing={2}>
                            {Card.map((item, index) => (
                                <Grid key={index} item lg={6} md={6} sm={6} xs={12}>
                                    <Box className={classes.Card}>
                                        <Typography color={'#fff'}>{item.Title}</Typography>
                                        <Typography color={'#fff'} variant="h6">{item.Amount} MMCT</Typography>
                                        <Typography color={'#999'}>{item.data}</Typography>
                                    </Box>
                                </Grid>
                            ))}

                        </Grid>
                    </Box>

                </Box>
                <Box className={classes.boxCr} sx={{ marginTop: '1rem' }}>
                    <TableCummunityEarn resultOfUserCommunityReward={resultOfUserCommunityReward} />
                </Box>
            </Box>

        </>
    )
}

export default Community