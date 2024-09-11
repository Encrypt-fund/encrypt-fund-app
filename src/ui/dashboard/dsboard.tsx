'use client'
import { Box, Button, CircularProgress, circularProgressClasses, CircularProgressProps, Grid, InputBase, LinearProgress, linearProgressClasses, Slider, styled, Typography } from "@mui/material"
import DashboardHeader from "../shared/dashboardHeader"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import dleft from '../../icons/dleft.svg'
import dright from '../../icons/dright.svg'
import Heading from "@/theme/components/heading";
import rmesta from '../../icons/Sheild.svg'
import shield from '../../icons/Sheild.svg'
import slider1 from '../../icons/slider1.svg'
import slider2 from '../../icons/slider2.svg'
import l1 from '../../icons/l1.svg'
import l2 from '../../icons/l2.svg'
import l3 from '../../icons/l3.svg'
import Text from "@/theme/components/text";
import coinline from '../../icons/coinline.svg'
import Link from "next/link";
import dollar from '../../icons/t1.svg'
import r2 from '../../icons/r2.svg'
import AddressCopy from "@/theme/components/addressCopy";
import linkbtnimg from '../../icons/linkbtnimg.svg'
import Refer from "./refer";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useEffect, useState } from "react";
import { useAccount, useBlockNumber, useBalance, useChainId, useReadContract, useReadContracts, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Address, formatEther, parseEther, zeroAddress } from "viem";
import { efTokenAbi } from "@/configs/abi/efTokenAbi";
import { efContractAddresses } from "@/configs";
import { convertToAbbreviated } from "@/lib/convertToAbbreviated";

import { efIcoReferralAbi } from "@/configs/abi/efIcoReferral";
import { efReferralAbi } from "@/configs/abi/efReferral";
import { formatNumberToCurrencyString } from "@/lib/formatNumberToCurrencyString";
import ContributorsTable from "./contributorsTable";
import { efIcoAbi } from "@/configs/abi/efIco";
import ConnectWallet from "../shared/connectWallet";
import { efIcoStakingAbi } from "@/configs/abi/efIcoStaking";
import { efInvestAbi } from "@/configs/abi/efInvest";
import shortenString from "@/lib/shortenString";
import { useSearchParams } from "next/navigation";
import { useQueryClient } from '@tanstack/react-query'
import { extractDetailsFromError } from "@/lib/extractDetailsFromError";
import { toast } from "react-toastify";
import Buy from "./buy";
import HomeTab from "./homeTab";
import useCheckAllowance from "@/hooks/useCheckAllowance";

const useStyles = makeStyles({
    mainDiv: {
        margin: '40px 40px 20px 40px',

        '@media(max-width : 1200px)': {
            margin: '20px 20px 20px 20px',
        }
    },

    step__one: {
        border: '1px solid #2b3139',
        borderRadius: '12px'
    },
    step__one_box: {
        backgroundColor: '#27313d',
        borderRadius: '12px',
        padding:'1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap:'1rem'
        }
    },
    Top_hding: {
        textAlign: 'center'
    },
    box__logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'left',
        '@media(max-width : 600px)': {
            justifyContent: 'center',
        }
    },
    box__logo2: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        justifyContent: 'end',
        '@media(max-width : 600px)': {
            justifyContent: 'center',
        }
    },
    step__two_box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        '@media(max-width : 1200px)': {
            gap: '1.5rem',
            '@media(max-width : 600px)': {
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '0.5rem',
            }
        }
    },

    step__two: {
        marginTop: '1rem',
    },
    list___bx: {
        backgroundColor: '#27313d',
        border: '1px solid #00d63247',
        padding: '1rem',
        borderRadius: '12px',
        textAlign: 'center',
        height: '100%'
    },
    step__three: {
        border: '1px solid #2b3139',
        borderRadius: '12px',
        padding: 4,
        marginTop: '1rem',
        height: '100%'
    },
    coin_hding: {
        backgroundColor: '#27313d',
        padding: '1.5rem',
        borderRadius: '10px 10px 0px 0px',
        textAlign: 'center',
        fontWeight: 500,
    },
    currentsale: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '2rem',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            justifyContent: 'center'
        }
    },
    slider__img: {
        width: '100%'
    },
    currentsale2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
marginTop:'10px'
    },
    rama__log: {
        backgroundColor: '#27313d',
        border: '1px solid #2b3139',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
        alignItems: 'center',
        gap: '10px',
        marginTop: '1.5rem'
    },
    max_btn: {
        backgroundColor: '#00d632!important',
        padding: '10px 20px',
        borderRadius: '8px !important',
        color: '#000 !important',
        textDecoration: 'none',
        fontWeight: 500,
        '&:hover': {
            backgroundColor: '#00d632!important',
            color: '#000 !important'
        }

    },
    max_btn__wrap: {
        backgroundColor: '#27313d',
        border: '1px solid #2b3139',
        borderRadius: '12px',
        display: 'flex',
        padding: '2px',
        marginTop: '0.5rem'
    },
    apply_btn__wrap: {
        backgroundColor: '#27313d',
        border: '1px solid #2b3139',
        borderRadius: '12px',
        display: 'flex',
        padding: '2px',
        marginTop: '0.9rem'
    },

    worth: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        alignItems: 'center',
        padding: '1rem 0rem',
        flexWrap: 'wrap'
    },
    apply: {
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        alignItems: 'center',
        padding: '1rem 0rem'
    },
    validation: {
        display: 'flex',
        justifyContent: 'start',
        gap: '8px',
        alignItems: 'start',
        padding: '1rem 0rem',

    },
    buy__btn: {
        backgroundColor: '#00d632!important',
        padding: '10px 20px !important',
        borderRadius: '30px !important',
        color: '#000 !important',
        textDecoration: 'none',
        fontWeight: 700,
        gap: "8px",
        display: 'flex',
        textAlign: 'center',
        fontSize: '20px',
        '&:hover': {
            backgroundColor: '#00d632',
            color: '#000'
        }
    },
    middleBox: {
        padding: '0rem 2rem 1rem 2rem',
        '@media(max-width : 600px)': {
            padding: '0rem 0.4rem 1rem 0.4rem'
        }
    },
    step__four: {
        border: '1px solid #2b3139',
        borderRadius: '12px',
        padding: '1rem',
        height: '100%'
    },
    step__four2: {
        border: '1px solid #2b3139',
        borderRadius: '12px',


    },
    referral: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem'
    },
    ref__link: {
        backgroundColor: '#00d632',
        padding: '0.5rem 1rem',
        borderRadius: '0px 0px 8px 8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 1
    },
    sldr: {
        width: '100%'
    },
    coinlinewrp: {
        '@media(max-width : 600px)': {
            display: 'none'
        }
    },
    sliderBox: {


        padding: '10px !important',

        '& .MuiSlider-rail': {
            background: 'none',
            height: '30px'
        },
        '& .MuiSlider-track': {
            background: 'linear-gradient(0deg, #fff, #fff)',
        },
        '& .MuiSlider-thumb': {
            background: 'linear-gradient(0deg, #00d632, #00d632)',
            padding: '16px',
        },

    },
    sliderBoxTwo: {
        padding: '10px !important',
        '& .MuiSlider-root': {
            padding: '10px !important'
        },
        '& .MuiSlider-rail': {
            background: 'none',
            height: '30px'
        },
        '& .MuiSlider-track': {
            background: 'linear-gradient(0deg, #fff, #fff)',
        },
        '& .MuiSlider-thumb': {
            background: 'linear-gradient(270deg, #000000, #00d632)',
            padding: '16px',
        },


    },
    validate__box: {
        backgroundColor: '#1e2329',
        margin: '1rem auto auto auto',
        width: '250px',
        textAlign: 'center',
        padding: '10px',
        borderRadius: '30px',
        border: '1px solid red',

    },
    box_List:{
        display:'flex',
        alignItems:'center',
        gap:'10px'
    }

});


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 30,
    borderRadius: 30,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#27313d',
        border: '1px solid #2b3139'
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 30,
        background: 'linear-gradient(90deg, #080808, #00d63278)',
    },
}));


const Dsboard = (props: CircularProgressProps) => {
    const classes = useStyles();
    const [valueTop, setValueTop] = useState<number>(1);
    const searchParams = useSearchParams()
    const [buyInput, setBuyInput] = useState("")
    // const [showInput, setShowInput] = useState<boolean>(false);
    const refParam = searchParams.get('ref')
    const [referrerAddress, setReferrerAddress] = useState<string | null>(refParam)
    const { address } = useAccount()
    const chainId = useChainId()
    const queryClient = useQueryClient()
    const { data: blockNumber } = useBlockNumber({ watch: true, })


    const resultOfEfBalance = useReadContract({
        abi: efTokenAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_token : efContractAddresses.pingaksha.ef_token,
        functionName: 'balanceOf',
        args: [address as Address],
        account: address
    })

    const resultOfRusdBalance = useReadContract({
        abi: efTokenAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.rusd_Token : efContractAddresses.pingaksha.rusd_Token,
        functionName: 'balanceOf',
        args: [address as Address],
        account: address
    })

    const resultOfUserTeamReward = useReadContract({
        abi: efInvestAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_invest : efContractAddresses.pingaksha.ef_invest,
        functionName: 'user2TeamRewardInfo',
        args: [address as Address],
        account: zeroAddress
    })

    const resultOfUserBountyReward = useReadContract({
        abi: efInvestAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_invest : efContractAddresses.pingaksha.ef_invest,
        functionName: 'user2BountyRewardInfo',
        args: [address as Address],
        account: zeroAddress
    })

    const resultOfReferralDetail = useReadContracts({
        contracts: [
            {
                abi: efReferralAbi,
                address: chainId === 1370 ? efContractAddresses.ramestta.ef_referral : efContractAddresses.pingaksha.ef_referral,
                functionName: 'getReferralRewards',
                args: [address as Address]
            },
            {
                abi: efReferralAbi,
                address: chainId === 1370 ? efContractAddresses.ramestta.ef_referral : efContractAddresses.pingaksha.ef_referral,
                functionName: 'getReferralsCount',
                args: [address as Address]
            },
            {
                abi: efReferralAbi,
                address: chainId === 1370 ? efContractAddresses.ramestta.ef_referral : efContractAddresses.pingaksha.ef_referral,
                functionName: 'isValidReferrerOrInvestor',
                args: [address as Address, referrerAddress as Address]
            },
            {
                abi: efReferralAbi,
                address: chainId === 1370 ? efContractAddresses.ramestta.ef_referral : efContractAddresses.pingaksha.ef_referral,
                functionName: 'getReferrer',
                args: [address as Address]
            },
        ]
    })

    const resultOfEfTokenPrice = useReadContract({
        abi: efInvestAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_invest : efContractAddresses.pingaksha.ef_invest,
        functionName: 'getTokenPrice',
        args: [],
        account: zeroAddress
    })


    const Box__list = [
        {
            image: l1,
            title: 'Your Wallet Balance',
            data: `${convertToAbbreviated(formatEther?.(BigInt?.(resultOfEfBalance?.data ? resultOfEfBalance.data.toString() : 0)), 3)} EF`,
            valueInUsd: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfEfBalance?.data ? resultOfEfBalance.data.toString() : 0))) * 0.5, 3)}`
        },
        {
            image: l2,
            title: 'Your Staking Income',
            data: `$0.00000`,
        },
        {
            image: l3,
            title: 'Your Spot Income',
            data: `$${convertToAbbreviated(formatEther?.(BigInt?.(resultOfReferralDetail?.data?.[0].result ? resultOfReferralDetail?.data?.[0].result.toString() : 0)), 5)}`
        },
        {
            image: l2,
            title: 'Your Team Income',
            data: `$${convertToAbbreviated(formatEther?.(BigInt(Number(resultOfUserTeamReward?.data) > 0 ? resultOfUserTeamReward?.data?.claimedReward as bigint : 0)), 5)}`,
        },
        {
            image: l2,
            title: 'Your Bounty Income',
            data: `$${convertToAbbreviated(formatEther?.(BigInt(Number(resultOfUserBountyReward?.data) > 0 ? resultOfUserBountyReward?.data?.claimedReward as bigint : 0)), 5)}`
        },
        {
            image: l2,
            title: 'Your Fix Time Income',
            data: `$0.00000`,
        },
    ]


    // use to refetch
    useEffect(() => {
        // queryClient.invalidateQueries({ queryKey: resultOfCheckAllowance.queryKey })
        queryClient.invalidateQueries({ queryKey: resultOfEfBalance.queryKey })
        queryClient.invalidateQueries({ queryKey: resultOfUserTeamReward.queryKey })
        queryClient.invalidateQueries({ queryKey: resultOfUserBountyReward.queryKey })
        queryClient.invalidateQueries({ queryKey: resultOfReferralDetail.queryKey })
    }, [blockNumber, queryClient,resultOfEfBalance,resultOfUserTeamReward,resultOfUserBountyReward,resultOfReferralDetail])


    

    return (
        <>
            <Box className={classes.mainDiv}>

                <Box className={classes.step__one}>
                    <Box className={classes.step__one_box}>
                        <Box><Image src={dleft} alt={""} /></Box>
                        <Box className={classes.Top_hding}>
                            <Heading heading={"Welcome to Encryptfund"} />
                        </Box>
                        <Box><Image src={dright} alt={""} /></Box>
                    </Box>

                </Box>

                <Box className={classes.step__two}>
                    <Grid container spacing={2}>
                        {Box__list.map((item, index) => (
                            <Grid key={index} item lg={4} md={4} sm={12} xs={12}>
                                <Box className={classes.list___bx}>
                                    <Image src={item.image} alt={""} width={44} style={{backgroundColor:'transparent !important'}}/>
                                    <Typography color={'#fff'}>{item.title}</Typography>
                                    <Typography color={'#fff'} fontWeight={500} variant="h6">{item.data}</Typography>
                                    <Typography color={'#999'}>{item.valueInUsd}</Typography>
                                </Box>
                            </Grid>
                        ))}

                    </Grid>
                </Box>

                <HomeTab 
                  resultOfReferralDetail={resultOfReferralDetail}
                  resultOfRusdBalance={resultOfRusdBalance} 
                  resultOfEfTokenPrice={resultOfEfTokenPrice}
                //   resultOfCheckAllowance={resultOfCheckAllowance}
                  />


                <Refer resultOfReferralDetail={resultOfReferralDetail} />

            </Box>

        </>
    )
}

export default Dsboard