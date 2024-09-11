'use client'
import { Box, Grid, InputBase, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Heading from "@/theme/components/heading";
import TableEarn from "./tableEarn";
import { useAccount, useBalance, useBlockNumber, useChainId, useReadContract } from "wagmi";
import { Address, formatEther, zeroAddress } from "viem";
import { convertToAbbreviated } from "@/lib/convertToAbbreviated";
import { efTokenAbi } from "@/configs/abi/efTokenAbi";
import { formatTier, efContractAddresses } from "@/configs";
import { efInvestAbi } from "@/configs/abi/efInvest";
import { formatNumberToCurrencyString } from "@/lib/formatNumberToCurrencyString";
import { efReferralAbi } from "@/configs/abi/efReferral";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { rusdAbi } from "@/configs/abi/rusd";

const useStyles = makeStyles({
    mainDiv: {
        margin: '10px',
        minHeight: '100vh',

    },
    box_hding: {

        backgroundColor: '#27313d',
        border: '1px solid #2b3139',
        display: 'flex',
        justifyContent: 'center',
        height: '480px',
        alignItems: 'center',
        borderRadius: '12px'
    },
    Card: {
        backgroundColor: '#27313d',
        border: '1px solid #00d63247',
        padding: '10px',
        borderRadius: '8px',
        textAlign: 'center',
        height:'100%'
    },
    cardlist: {
        padding: '10px',
    },
    boxCr: {
        border: '1px solid #2b3139',
        borderRadius: '4px',
        marginTop: '1.5rem'
    }



});


interface props {
    Earning: string;
}


const Earning = ({ Earning }: props) => {
    const classes = useStyles();
    const { address } = useAccount()
    const chainId = useChainId()
    const queryClient = useQueryClient()
    const { data: blockNumber } = useBlockNumber({ watch: true })

    const resultOfBalance = useReadContract({
        abi: rusdAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.rusd_Token : efContractAddresses.pingaksha.rusd_Token,
        functionName: 'balanceOf',
        args: [address as Address],
        account: address
    })

    const resultOfUserInvest = useReadContract({
        abi: efInvestAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_invest : efContractAddresses.pingaksha.ef_invest,
        functionName: 'user2Invest',
        args: [address as Address],
        account: zeroAddress
    })

    const resultOfUserInvestLength = useReadContract({
        abi: efInvestAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_invest : efContractAddresses.pingaksha.ef_invest,
        functionName: 'totalInvestedLengthForUser',
        args: [address as Address],
        account: zeroAddress
    })


    const resultOfUserInvestList = useReadContract({
        abi: efInvestAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_invest : efContractAddresses.pingaksha.ef_invest,
        functionName: 'user2InvestList',
        args: [address as Address, BigInt(0), Number(resultOfUserInvestLength?.data) > 0 ? resultOfUserInvestLength.data as bigint : BigInt(0)],
        account: zeroAddress
    })

    const resultOfUserTierAndBoostRateInPercent = useReadContract({
        abi: efInvestAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_invest : efContractAddresses.pingaksha.ef_invest,
        functionName: 'getTierAndBoostRateInPercent',
        args: [Number(resultOfUserInvest?.data?.amount) > 0 ? resultOfUserInvest?.data?.amount as bigint : BigInt(0)],
        account: zeroAddress
    })

    const resultOfUsergReferralsCount= useReadContract({
        abi: efReferralAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_referral : efContractAddresses.pingaksha.ef_referral,
        functionName: 'getReferralsCount',
        args: [address as Address],
        account: zeroAddress
    })




    // const {data:mintRatePerHour} = useReadContract({
    //     abi: efInvestAbi,
    //     address: chainId === 1370 ? efContractAddresses.ramestta.ef_invest : efContractAddresses.pingaksha.ef_invest,
    //     functionName: 'calculateMintRewards',
    //     args: [Number(resultOfUserInvest?.data?.amount) > 0 ? resultOfUserInvest?.data?.amount as bigint : BigInt(0),Number(resultOfUsergReferralsCount?.data) > 0 ? resultOfUsergReferralsCount?.data  as bigint : BigInt(0)],
    //     account: zeroAddress,
    //     query:{
    //         select(data) {
    //             return Number(data[1])/1e15
    //         },
    //     }
    // })





    // const totalUnclaimedRewards= resultOfUserInvestList?.data?.reduce((previousValue,currentValue)=> previousValue+  )

    const Card = [
        {
            id: 1,
            Title: 'Ramestta Wallet Balance',
            Amount: `$${convertToAbbreviated(formatEther?.(BigInt?.(resultOfBalance?.data ? resultOfBalance.data.toString() : 0)), 3)}`,
            data: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfBalance?.data ? resultOfBalance.data.toString() : 0))) * 0.05, 3)}`
        },
        {
            id: 2,
            Title: 'Your Invest',
            Amount: `$${convertToAbbreviated(formatEther?.(BigInt?.(resultOfUserInvest?.data ? resultOfUserInvest.data.amount.toString() : 0)), 3)}`,
            data: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfUserInvest?.data ? resultOfUserInvest.data.amount.toString() : 0))) * 0.05, 3)}`
        },
        {
            id: 3,
            Title: 'Claimed Income',
            Amount: `$${convertToAbbreviated(formatEther?.(BigInt?.(resultOfUserInvest?.data ? resultOfUserInvest.data.claimedMintRewards.toString() : 0)), 5)}`,
            data: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfUserInvest?.data ? resultOfUserInvest.data.claimedMintRewards.toString() : 0))) * 0.05, 5)}`
        },
        {
            id: 4,
            Title: 'Unclaimed Income',
            Amount: `$${"0.00000"
                }`,
            data: '$0.00000'
        },
        {
            id: 5,
            Title: 'Current Tier',
            Amount: `${formatTier(Number(resultOfUserTierAndBoostRateInPercent?.data?.[0]))}`,
            data: ``
        },
        {
            id: 7,
            Title: 'Per Hour Base Speed(%)',
            Amount: `${(0.25/24).toFixed(2)}`,
            data: ``
        },
        {
            id: 8,
            Title: 'Per Day Base Speed(%)',
            Amount: `${0.25}`,
            data: ''
        },
    ]

    // use to refetch
useEffect(() => {
    queryClient.invalidateQueries({ queryKey:resultOfUserInvestList.queryKey }) 
}, [blockNumber, queryClient,resultOfUserInvestList])
    return (
        <>

            <Box className={classes.mainDiv}>

                <Typography
                    sx={{
                        fontFamily: 'Coolvetica Rg!important',
                        color: '#00d632',
                        '@media(max-width : 1200px)': {
                            fontSize: '22px',
                            '@media(max-width : 900px)': {
                                fontSize: '20px'
                            }
                        }

                    }}
                    variant="h4">{Earning} Income</Typography>

                <Box className={classes.boxCr}>
                    <Box className={classes.cardlist}>
                        <Grid container spacing={2} justifyContent={"center"}>
                            {Card.map((item, index) => (
                                <Grid key={index} item lg={3} md={3} sm={6} xs={12}>
                                    <Box className={classes.Card}>
                                        <Typography color={'#fff'}>{item.Title}</Typography>
                                        <Typography color={'#fff'} variant="h6">{item.Amount}</Typography>
                                        {/* <Typography color={'#999'}>{item.data}</Typography> */}
                                    </Box>
                                </Grid>
                            ))}

                        </Grid>
                    </Box>

                </Box>
                
                 <Box className={classes.boxCr} sx={{ marginTop: '1rem' }}>
                    <TableEarn resultOfUserInvestList={resultOfUserInvestList?.data} mintRatePerYear={0.00000} />
                </Box>
                
            </Box>

        </>
    )
}

export default Earning