'use client'
import { Box, Grid, InputBase, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Heading from "@/theme/components/heading";
import TableEarn from "./tableEarn";
import { useAccount, useBalance, useBlockNumber, useChainId, useReadContract } from "wagmi";
import { Address, formatEther, zeroAddress } from "viem";
import { convertToAbbreviated } from "@/lib/convertToAbbreviated";
import { mmctTokenAbi } from "@/configs/abi/mmctTokenAbi";
import { formatTier, mmctContractAddresses } from "@/configs";
import { mmctStakingAbi } from "@/configs/abi/mmctStaking";
import { formatNumberToCurrencyString } from "@/lib/formatNumberToCurrencyString";
import { mmctReferralAbi } from "@/configs/abi/mmctReferral";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

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
        padding: '1rem',
        borderRadius: '8px',
        textAlign: 'center'
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
        abi: mmctTokenAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_token : mmctContractAddresses.pingaksha.mmct_token,
        functionName: 'balanceOf',
        args: [address as Address],
        account: address
    })

    const resultOfUserStaked = useReadContract({
        abi: mmctStakingAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
        functionName: 'user2Staked',
        args: [address as Address],
        account: zeroAddress
    })

    const resultOfUserStakedLength = useReadContract({
        abi: mmctStakingAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
        functionName: 'totalStakedLengthForUser',
        args: [address as Address],
        account: zeroAddress
    })


    const resultOfUserStakedList = useReadContract({
        abi: mmctStakingAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
        functionName: 'user2StakedList',
        args: [address as Address, BigInt(0), Number(resultOfUserStakedLength?.data) > 0 ? resultOfUserStakedLength.data as bigint : BigInt(0)],
        account: zeroAddress
    })

    const resultOfUserTierAndBoostRateInPercent = useReadContract({
        abi: mmctStakingAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
        functionName: 'getTierAndBoostRateInPercent',
        args: [Number(resultOfUserStaked?.data?.volumeInUSD) > 0 ? resultOfUserStaked?.data?.volumeInUSD as bigint : BigInt(0)],
        account: zeroAddress
    })

    const resultOfUsergReferralsCount= useReadContract({
        abi: mmctReferralAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_referral : mmctContractAddresses.pingaksha.mmct_referral,
        functionName: 'getReferralsCount',
        args: [address as Address],
        account: zeroAddress
    })



    const resultOfUserPositionAndBoostRateInPercent = useReadContract({
        abi: mmctStakingAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
        functionName: 'getPositionAndBoostRateInPercent',
        args: [Number(resultOfUsergReferralsCount?.data) > 0 ? resultOfUsergReferralsCount?.data  as bigint : BigInt(0)],
        account: zeroAddress
    })

    const {data:mintRatePerHour} = useReadContract({
        abi: mmctStakingAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
        functionName: 'calculateMintRate',
        args: [Number(resultOfUserStaked?.data?.volumeInUSD) > 0 ? resultOfUserStaked?.data?.volumeInUSD as bigint : BigInt(0),Number(resultOfUsergReferralsCount?.data) > 0 ? resultOfUsergReferralsCount?.data  as bigint : BigInt(0)],
        account: zeroAddress,
        query:{
            select(data) {
                return Number(data[1])/1e15
            },
        }
    })





    // const totalUnclaimedRewards= resultOfUserStakedList?.data?.reduce((previousValue,currentValue)=> previousValue+  )

    const Card = [
        {
            id: 1,
            Title: 'Ramestta Wallet Balance',
            Amount: `${convertToAbbreviated(formatEther?.(BigInt?.(resultOfBalance?.data ? resultOfBalance.data.toString() : 0)), 3)} EF`,
            data: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfBalance?.data ? resultOfBalance.data.toString() : 0))) * 0.05, 3)}`
        },
        {
            id: 2,
            Title: 'Your Stake',
            Amount: `${convertToAbbreviated(formatEther?.(BigInt?.(resultOfUserStaked?.data ? resultOfUserStaked.data.amount.toString() : 0)), 3)} EF`,
            data: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfUserStaked?.data ? resultOfUserStaked.data.amount.toString() : 0))) * 0.05, 3)}`
        },
        {
            id: 3,
            Title: 'Claimed Rewards',
            Amount: `${convertToAbbreviated(formatEther?.(BigInt?.(resultOfUserStaked?.data ? resultOfUserStaked.data.claimedMintRewards.toString() : 0)), 5)} EF`,
            data: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfUserStaked?.data ? resultOfUserStaked.data.claimedMintRewards.toString() : 0))) * 0.05, 5)}`
        },
        {
            id: 4,
            Title: 'Unclaimed Rewards',
            Amount: `${" 0.00000 EF"
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
            id: 6,
            Title: 'Your Position',
            Amount: `${Number(resultOfUserPositionAndBoostRateInPercent?.data?.[0])+1}`,
            data: ``
        },
        {
            id: 7,
            Title: 'Per Hour Base Speed(%)',
            Amount: `${mintRatePerHour?mintRatePerHour.toFixed(5):'0.00000'}`,
            data: ``
        },
        {
            id: 8,
            Title: 'Per Day Base Speed(%)',
            Amount: `${mintRatePerHour?(mintRatePerHour*24).toFixed(5):'0.00000'}`,
            data: ''
        },
    ]

    // use to refetch
useEffect(() => {
    queryClient.invalidateQueries({ queryKey:resultOfUserStakedList.queryKey }) 
}, [blockNumber, queryClient,resultOfUserStakedList])
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
                    variant="h4">{Earning} Reward</Typography>

                <Box className={classes.boxCr}>
                    <Box className={classes.cardlist}>
                        <Grid container spacing={2}>
                            {Card.map((item, index) => (
                                <Grid key={index} item lg={3} md={3} sm={6} xs={12}>
                                    <Box className={classes.Card}>
                                        <Typography color={'#fff'}>{item.Title}</Typography>
                                        <Typography color={'#fff'} variant="h6">{item.Amount}</Typography>
                                        <Typography color={'#999'}>{item.data}</Typography>
                                    </Box>
                                </Grid>
                            ))}

                        </Grid>
                    </Box>

                </Box>
                
                 <Box className={classes.boxCr} sx={{ marginTop: '1rem' }}>
                    <TableEarn resultOfUserStakedList={resultOfUserStakedList?.data} mintRatePerYear={mintRatePerHour?mintRatePerHour*24*365:0.00000} />
                </Box>
                
            </Box>

        </>
    )
}

export default Earning