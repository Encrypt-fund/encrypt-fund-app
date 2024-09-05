'use client'
import { Box, Button, CircularProgress, circularProgressClasses, CircularProgressProps, Grid, InputBase, LinearProgress, linearProgressClasses, Slider, styled, Typography } from "@mui/material"
import DashboardHeader from "../shared/dashboardHeader"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import dleft from '../../icons/dleft.svg'
import dright from '../../icons/dright.svg'
import Heading from "@/theme/components/heading";
import rmesta from '../../icons/rmesta.svg'
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
import { mmctTokenAbi } from "@/configs/abi/mmctTokenAbi";
import { mmctContractAddresses } from "@/configs";
import { convertToAbbreviated } from "@/lib/convertToAbbreviated";

import { mmctReferralAbi } from "@/configs/abi/mmctReferral";
import { formatNumberToCurrencyString } from "@/lib/formatNumberToCurrencyString";
import ContributorsTable from "./contributorsTable";
import { mmctIcoAbi } from "@/configs/abi/mmctIco";
import ConnectWallet from "../shared/connectWallet";
import { mmctStakingAbi } from "@/configs/abi/mmctStaking";
import shortenString from "@/lib/shortenString";
import { useSearchParams } from "next/navigation";
import { useQueryClient } from '@tanstack/react-query'
import { extractDetailsFromError } from "@/lib/extractDetailsFromError";
import { toast } from "react-toastify";

const useStyles = makeStyles({
    mainDiv: {
        margin: '40px 40px 20px 40px',

        '@media(max-width : 1200px)': {
            margin: '20px 20px 20px 20px',
        }
    },

    step__one: {
        border: '1px solid #1D1D20',
        borderRadius: '12px'
    },
    step__one_box: {
        backgroundColor: '#101012',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            justifyContent: 'center'
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
        backgroundColor: '#101012',
        border: '1px solid #02b5b56b',
        padding: '1rem',
        borderRadius: '12px',
        textAlign: 'center',
        height: '100%'
    },
    step__three: {
        border: '1px solid #1D1D20',
        borderRadius: '12px',
        padding: 4,
        marginTop: '1rem',
        height: '100%'
    },
    coin_hding: {
        backgroundColor: '#101012',
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
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem',
        alignItems: 'center',
        gap: '10px',
        marginTop: '1.5rem'
    },
    max_btn: {
        backgroundColor: '#00FFFF !important',
        padding: '10px 20px',
        borderRadius: '8px !important',
        color: '#000 !important',
        textDecoration: 'none',
        fontWeight: 500,
        '&:hover': {
            backgroundColor: '#00ffff !important',
            color: '#000 !important'
        }

    },
    max_btn__wrap: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
        borderRadius: '12px',
        display: 'flex',
        padding: '2px',
        marginTop: '0.5rem'
    },
    apply_btn__wrap: {
        backgroundColor: '#101012',
        border: '1px solid #1D1D20',
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
        backgroundColor: '#00FFFF !important',
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
            backgroundColor: '#00ffff',
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
        border: '1px solid #1D1D20',
        borderRadius: '12px',
        padding: '1rem',
        height: '100%'
    },
    step__four2: {
        border: '1px solid #1D1D20',
        borderRadius: '12px',


    },
    referral: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem'
    },
    ref__link: {
        backgroundColor: '#00FFFF',
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
            background: 'linear-gradient(0deg, #00FFFF, #00FFFF)',
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
            background: 'linear-gradient(270deg, #000000, #00FFFF)',
            padding: '16px',
        },


    },
    validate__box: {
        backgroundColor: '#101012',
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
        backgroundColor: '#101012',
        border: '1px solid #1D1D20'
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 30,
        background: 'linear-gradient(90deg, #080808, #00ffff78)',
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

    const { writeContractAsync, data, isPending: isPendingBuyForWrite} = useWriteContract(
        {
            mutation:{
               onSettled(data, error, variables, context) {
                   if(error){
                       toast.error(extractDetailsFromError(error.message as string) as string)
                   }else{
                       toast.success("Your MMCT Buy successfully")
                   }
               },
            }
           }
    )
    const { isLoading } = useWaitForTransactionReceipt({
        hash: data,
    })

    const balanceOfRama = useBalance({
        address: address
    })


    const handleMax = () => {
        setBuyInput((formatEther?.(BigInt?.(balanceOfRama?.data?.value ? balanceOfRama?.data?.value.toString() : 0))))
    }
    // const handleChange = (event: Event, newValue: number) => {
    //     setValueTop(newValue);
    // }

    const resultOfSaleDetails = useReadContract({
        abi: mmctIcoAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_ico : mmctContractAddresses.pingaksha.mmct_ico,
        functionName: 'saleType2IcoDetail',
        args: [0],
        account: zeroAddress
    })

    const [value2, setValue2] = useState<number>(0);
    const [initialProgressValue, setInitialProgressValue] = useState<number>(0);
    useEffect(() => {
        if (resultOfSaleDetails?.data) {
            const tokenAmount = BigInt(resultOfSaleDetails.data.tokenAmount?.toString() || '0');
            const saleQuantity = BigInt(resultOfSaleDetails.data.saleQuantity?.toString() || '0');
            const tokenAmountInEther = Number(formatEther(tokenAmount));
            const saleQuantityInEther = Number(formatEther(saleQuantity));

            if (!initialProgressValue) {
                setInitialProgressValue(tokenAmountInEther);
            }

            setValue2(((tokenAmountInEther - (tokenAmountInEther - saleQuantityInEther)) > 0 ? (tokenAmountInEther - (tokenAmountInEther - saleQuantityInEther)) : 0));
        }


    }, [resultOfSaleDetails?.data,initialProgressValue]);




    const progressValue = initialProgressValue > 0 ? ((initialProgressValue - value2) / initialProgressValue) * 100 : 0;


    const resultOfUserContribution = useReadContract({
        abi: mmctIcoAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_ico : mmctContractAddresses.pingaksha.mmct_ico,
        functionName: 'user2SaleType2Contributor',
        args: [address as Address, 0],
        account: zeroAddress
    })

    const resultOfRamaPriceInUSD = useReadContract({
        abi: mmctIcoAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_ico : mmctContractAddresses.pingaksha.mmct_ico,
        functionName: 'ramaPriceInUSD',
        args: [],
        account: zeroAddress
    })

    const resultOfBalance = useReadContract({
        abi: mmctTokenAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_token : mmctContractAddresses.pingaksha.mmct_token,
        functionName: 'balanceOf',
        args: [address as Address],
        account: address
    })

    const resultOfUserCommunityReward = useReadContract({
        abi: mmctStakingAbi,
        address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
        functionName: 'user2CommunityRewardInfo',
        args: [address as Address],
        account: zeroAddress
    })

    const resultOfReferralDetail = useReadContracts({
        contracts: [
            {
                abi: mmctReferralAbi,
                address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_referral : mmctContractAddresses.pingaksha.mmct_referral,
                functionName: 'getReferralRewards',
                args: [address as Address]
            },
            {
                abi: mmctReferralAbi,
                address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_referral : mmctContractAddresses.pingaksha.mmct_referral,
                functionName: 'getReferralsCount',
                args: [address as Address]
            },
            {
                abi: mmctReferralAbi,
                address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_referral : mmctContractAddresses.pingaksha.mmct_referral,
                functionName: 'isValidReferrerOrStaker',
                args: [address as Address, referrerAddress as Address]
            },
            {
                abi: mmctReferralAbi,
                address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_referral : mmctContractAddresses.pingaksha.mmct_referral,
                functionName: 'getReferrer',
                args: [address as Address]
            },
        ]
    })

    const Box__list = [
        {
            image: l1,
            title: 'Your Wallet Balance',
            data: `${convertToAbbreviated(formatEther?.(BigInt?.(resultOfBalance?.data ? resultOfBalance.data.toString() : 0)), 3)} MMCT`,
            valueInUsd: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfBalance?.data ? resultOfBalance.data.toString() : 0))) * 0.05, 3)}`
        },
        {
            image: l2,
            title: 'Your Coin Worth at Launch',
            data: `$${resultOfUserContribution?.data ? Number(Number(formatEther?.(BigInt?.(resultOfUserContribution?.data?.volume ? resultOfUserContribution?.data?.volume.toString() : 0))) * Number(formatEther?.(BigInt?.(resultOfSaleDetails?.data?.saleRateInUsd ? resultOfSaleDetails?.data?.saleRateInUsd.toString() : 0)))).toFixed(3) : 0.000}`,
            valueInUsd: ''
        },
        {
            image: l3,
            title: 'Your Spot Earnings',
            data: `${convertToAbbreviated(formatEther?.(BigInt?.(resultOfReferralDetail?.data?.[0].result ? resultOfReferralDetail?.data?.[0].result.toString() : 0)), 3)} MMCT`,
            valueInUsd: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfReferralDetail?.data?.[0].result ? resultOfReferralDetail?.data?.[0].result.toString() : 0))) * 0.05, 3)}`
        },
        {
            image: l1,
            title: 'Your Community Earnings',
            data: `${convertToAbbreviated(formatEther?.(BigInt(Number(resultOfUserCommunityReward?.data) > 0 ? resultOfUserCommunityReward?.data?.claimedReward as bigint : 0)), 5)} MMCT`,
            valueInUsd: `${formatNumberToCurrencyString(Number(formatEther?.(BigInt(Number(resultOfUserCommunityReward?.data) > 0 ? resultOfUserCommunityReward?.data?.claimedReward as bigint : 0))) * 0.05, 5)}`
        },
    ]

    // const handleChange2 = (event: Event, newValue: number) => {
    //     setValue2(newValue);
    // };

    // use to refetch
    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: balanceOfRama.queryKey })
        queryClient.invalidateQueries({ queryKey: resultOfSaleDetails.queryKey })
        queryClient.invalidateQueries({ queryKey: resultOfUserContribution.queryKey })
        queryClient.invalidateQueries({ queryKey: resultOfRamaPriceInUSD.queryKey })
        queryClient.invalidateQueries({ queryKey: resultOfBalance.queryKey })
        queryClient.invalidateQueries({ queryKey: resultOfUserCommunityReward.queryKey })
        queryClient.invalidateQueries({ queryKey: resultOfReferralDetail.queryKey })
    }, [blockNumber, queryClient,balanceOfRama,resultOfSaleDetails,resultOfUserContribution,resultOfRamaPriceInUSD,resultOfBalance,resultOfUserCommunityReward,resultOfReferralDetail])

    

    return (
        <>
            <Box className={classes.mainDiv}>

                <Box className={classes.step__one}>
                    <Box className={classes.step__one_box}>
                        <Box><Image src={dleft} alt={""} /></Box>
                        <Box className={classes.Top_hding}>
                            <Heading heading={"Welcome to"} />
                            <Heading heading={"Mumblechat Dashboard"} />
                        </Box>
                        <Box><Image src={dright} alt={""} /></Box>
                    </Box>

                    <Box sx={{ padding: '0rem 0.5rem', marginTop: '1rem' }}>
                        <Grid container spacing={2} sx={{ flexWrap: 'inherit',  }}>
                            <Grid item lg={2.5} md={2.7} sm={2} xs={2.5} alignSelf={'center'}>
                                <Box className={classes.box__logo}>
                                    <Image src={rmesta} alt={""} />
                                    <Typography sx={{'@media(max-width : 900px)':{display:'none'}}} color={'#fff'}>Ramestta</Typography>
                                </Box>
                            </Grid>
                            <Grid item lg={7} md={6} sm={8} xs={7} >
                                <Box sx={{


                                    marginBottom: '1rem'
                                }}>
                                    <Box sx={{ textAlign: 'center', marginBottom: 1 }}><Typography fontFamily={'Bruce Forever!important'} color={'#00ffff'}>{valueTop}%</Typography></Box>
                                    <BorderLinearProgress variant="determinate" value={valueTop as any} />
                                    {/* <Slider
                                        value={value}
                                        onChange={handleChange}
                                        aria-labelledby="range-slider"
                                        min={0}
                                        max={100}
                                        className={classes.sliderBox}
                                        sx={{
                                            background: 'linear-gradient(90deg, #080808, #00FFFF)',
                                            border: '1px solid #1D1D20',
                                            borderRadius: '30px',
                                            padding: '10px 10px 10px 0px',
                                            '&.Mui-active': {
                                                boxShadow: '0 0 0 14px rgba(0, 0, 255, 0.16)', // Change this to your desired active color
                                            },
                                        }}
                                    /> */}


                                </Box>
                            </Grid>
                            <Grid item lg={3} md={3.3} sm={2} xs={2.5} alignSelf={'center'}>
                                <Box className={classes.box__logo2}>
                                    <Typography sx={{'@media(max-width : 900px)':{display:'none'}}} color={'#fff'}>Mumblechat</Typography>
                                    <Image src={shield} alt={""} width={60} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>







                </Box>

                <Box className={classes.step__two}>
                    <Grid container spacing={2}>
                        {Box__list.map((item, index) => (
                            <Grid key={index} item lg={3} md={3} sm={12} xs={12}>
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

                <Grid container spacing={2}>
                    <Grid item lg={7} md={6} sm={12} xs={12}>
                        <Box className={classes.step__three}>
                            <Box className={classes.coin_hding}>
                                <Typography variant="h5" color={'#fff'}>Buy Coins</Typography>
                            </Box>
                            <Box className={classes.middleBox}>

                                <Box textAlign={'center'} mt={3}>
                                    <Typography>  <Typography component={'span'} color={'#fff'}>Private Sale</Typography></Typography>
                                </Box>

                                <Box className={classes.currentsale}>
                                    <Box>
                                        <Typography color={'#999'}>Total Coin Sales USD</Typography>
                                        <Typography variant="h6" color={'#fff'} fontWeight={500}>{formatNumberToCurrencyString(
                                            resultOfSaleDetails?.data ?
                                                Number(
                                                    formatEther?.(BigInt?.(resultOfSaleDetails?.data?.saleRateInUsd ? resultOfSaleDetails?.data?.saleRateInUsd.toString() : 0))) *
                                                Number(formatEther?.(BigInt?.(resultOfSaleDetails?.data?.tokenAmount ? resultOfSaleDetails?.data?.tokenAmount.toString() : 0)))
                                                : 0
                                        )}</Typography>
                                    </Box>
                                    <Box>
                                        <Image className={classes.coinlinewrp} src={coinline} alt={""} />
                                    </Box>
                                    <Box textAlign={'end'}>
                                        <Typography color={'#999'}>Total Coins Sold</Typography>
                                        <Typography variant="h6" color={'#fff'} fontWeight={500}>{formatNumberToCurrencyString(
                                            resultOfSaleDetails?.data ?
                                                Number(
                                                    formatEther?.(BigInt?.(resultOfSaleDetails?.data?.saleRateInUsd ? resultOfSaleDetails?.data?.saleRateInUsd.toString() : 0))) *
                                                (
                                                    Number(formatEther?.(BigInt?.(resultOfSaleDetails?.data?.tokenAmount ? resultOfSaleDetails?.data?.tokenAmount.toString() : 0))) -
                                                    Number(formatEther?.(BigInt?.(resultOfSaleDetails?.data?.saleQuantity ? resultOfSaleDetails?.data?.saleQuantity.toString() : 0)))
                                                )
                                                : 0
                                        )}</Typography>
                                    </Box>
                                </Box>

                                <Box mt={3} mb={0.5} sx={{ position: 'relative' }}>
                                    <Box sx={{
                                        textAlign: 'center',
                                        position: 'absolute',
                                        left: '2.8rem',
                                        top: '0.1rem',
                                        zIndex: '1',

                                    }}
                                    ><Typography color={'#fff'}> Remaining:{convertToAbbreviated(value2, 4)}</Typography></Box>
                                    <Box>
                                        {/* <Slider
                                    value={valueTop}
                                    // onChange={handleChange2}
                                    aria-labelledby="range-slider"
                                    min={0}
                                    max={100}
                                    className={classes.sliderBoxTwo}
                                    sx={{
                                        background: 'linear-gradient(90deg, #080808, #00FFFF)',
                                        border: '1px solid #1D1D20',
                                        borderRadius: '30px',
                                        padding: '10px 10px 10px 0px',
                                        '&.Mui-active': {
                                            boxShadow: '0 0 0 14px rgba(0, 0, 255, 0.16)', // Change this to your desired active color
                                        },
                                    }}
                                /> */}
                                        <BorderLinearProgress variant="determinate" value={progressValue} />
                                    </Box>

                                </Box>
                                <Box className={classes.currentsale2}>
                                    <Typography fontWeight={500} color={'#fff'}>$0.05 = 1 MMCT</Typography>
                                    {/* <Typography fontWeight={500} color={'#fff'}>Pre-Sale: $0.1</Typography> */}
                                </Box>

                                <Box className={classes.rama__log}>
                                    <Image src={rmesta} alt={""} />
                                    <Typography variant="h5" fontWeight={500} color={'#fff'}>RAMA</Typography>
                                </Box>
                                <Box className={classes.max_btn__wrap}>
                                    <InputBase
                                        value={buyInput}
                                        onChange={(e) => setBuyInput(e.target.value)}
                                        sx={{
                                            flex: 1,
                                            color: '#fff',
                                            width: '100%',
                                            padding: '0.3rem 0.5rem',
                                            ':-moz-placeholder': {
                                                color: 'fff',
                                            },
                                            '& input[type=number]': {
                                                '-moz-appearance': 'textfield',
                                            },
                                            '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                                                '-webkit-appearance': 'none',
                                                margin: 0,
                                            },
                                        }}
                                        fullWidth
                                        placeholder={'Enter Amount in RAMA'}
                                        type={'number'}
                                    />
                                    <Button className={classes.max_btn} onClick={handleMax} href={""} >Max</Button>
                                </Box>
                                <Box className={classes.worth}>
                                    {(resultOfRamaPriceInUSD?.data && buyInput) &&
                                        <>
                                           <Box className={classes.box_List}>
                                           <Image src={dollar} alt={""} width={40} />
                                            <Typography color={'#999'}>COST:
                                                <Typography component={'span'} color={'#fff'}> ${
                                                    ((Number(Number(buyInput) > 0 ? buyInput : 0) *
                                                        Number(
                                                            formatEther?.(BigInt?.(resultOfRamaPriceInUSD?.data ? resultOfRamaPriceInUSD.data.toString() : 0)))
                                                    )
                                                    ).toFixed(2)

                                                }
                                                </Typography>
                                            </Typography>
                                           </Box>

                                            <Box className={classes.box_List}>
                                            <Image src={rmesta} alt={""} width={40} />
                                            <Typography color={'#999'}>RAMA PRICE:
                                                <Typography component={'span'} color={'#fff'}> ${
                                                    Number(
                                                        formatEther?.(BigInt?.(resultOfRamaPriceInUSD?.data ? resultOfRamaPriceInUSD.data.toString() : 0)))
                                                }
                                                </Typography>
                                            </Typography>
                                            </Box>
                                        </>
                                    }
                                    <Box className={classes.box_List}>
                                    <Image src={shield} alt={""} width={50} />
                                    <Typography color={'#999'}>MMCT WORTH : <Typography component={'span'} color={'#fff'}>{
                                        buyInput && resultOfRamaPriceInUSD?.data && resultOfSaleDetails?.data ? ((Number(Number(buyInput) > 0 ? buyInput : 0) *
                                            Number(
                                                formatEther?.(BigInt?.(resultOfRamaPriceInUSD?.data ? resultOfRamaPriceInUSD.data.toString() : 0)))
                                        ) /
                                            Number(
                                                formatEther?.(BigInt?.(resultOfSaleDetails?.data?.saleRateInUsd ? resultOfSaleDetails?.data?.saleRateInUsd.toString() : 0)))
                                        ).toFixed(2) : "0.00"
                                    }</Typography></Typography>
                                    </Box>
                                </Box>

                                {address ?
                                    <Button

                                        disabled={

                                            (!buyInput || isPendingBuyForWrite || isLoading || (
                                                buyInput && (Number(buyInput) *
                                                    Number(
                                                        formatEther?.(BigInt?.(resultOfRamaPriceInUSD?.data ? resultOfRamaPriceInUSD.data.toString() : 0)))
                                                ) < 10
                                            ) || (
                                                    Number(formatEther?.(BigInt?.(balanceOfRama?.data?.value ? balanceOfRama?.data?.value.toString() : 0))) < Number(Number(buyInput) > 0 ? buyInput : 0)
                                                ) || (
                                                    !referrerAddress || !resultOfReferralDetail?.data?.[2].result
                                                ) && resultOfReferralDetail?.data?.[3]?.result === zeroAddress
                                            )
                                        }
                                        fullWidth={true}
                                        className={classes.buy__btn}
                                        sx={{
                                            opacity: !((
                                                !buyInput || isPendingBuyForWrite || isLoading || (
                                                    buyInput && (Number(buyInput) *
                                                        Number(
                                                            formatEther?.(BigInt?.(resultOfRamaPriceInUSD?.data ? resultOfRamaPriceInUSD.data.toString() : 0)))
                                                    ) < 10
                                                ) || (
                                                    Number(formatEther?.(BigInt?.(balanceOfRama?.data?.value ? balanceOfRama?.data?.value.toString() : 0))) < Number(Number(buyInput) > 0 ? buyInput : 0)
                                                ) || (
                                                    !referrerAddress || !resultOfReferralDetail?.data?.[2].result
                                                ) && resultOfReferralDetail?.data?.[3]?.result === zeroAddress
                                            ))
                                                ? "1" : '0.3'
                                        }}
                                        onClick={async () => {
                                            await writeContractAsync({
                                                abi: mmctIcoAbi,
                                                address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_ico : mmctContractAddresses.pingaksha.mmct_ico,
                                                functionName: 'buy',
                                                args: [0, (resultOfReferralDetail?.data?.[3]?.result !== zeroAddress ? resultOfReferralDetail?.data?.[3]?.result as Address : referrerAddress as Address)],
                                                account: address,
                                                value: parseEther(buyInput),
                                            })


                                        }} >Buy
                                        {
                                            (isPendingBuyForWrite || isLoading) && <CircularProgress size={18} color="inherit" />
                                        }
                                    </Button>
                                    :
                                    <ConnectWallet />
                                }

                                {
                                    buyInput && (Number(buyInput) *
                                        Number(
                                            formatEther?.(BigInt?.(resultOfRamaPriceInUSD?.data ? resultOfRamaPriceInUSD.data.toString() : 0)))
                                    ) < 10 &&
                                    <Box className={classes.validate__box} >
                                        <Typography component={'span'} fontWeight={200} color={'red'}>Minimum Contribution $10</Typography>
                                    </Box>
                                }
                                {
                                    Number(formatEther?.(BigInt?.(balanceOfRama?.data?.value ? balanceOfRama?.data?.value.toString() : 0))) < Number(Number(buyInput) > 0 ? buyInput : 0) &&
                                    <Box className={classes.validate__box} >
                                        <Typography component={'span'} fontWeight={200} color={'red'}>Insufficient RAMA Balance</Typography>
                                    </Box>
                                }

                                {/* {
                                    !showInput && (
                                        <Box className={classes.apply} onClick={() => setShowInput(true)} >
                                            <Typography component={'span'} fontWeight={200} color={'#fff'}>Do you have any Referrer?</Typography>
                                        </Box>
                                    )
                                } */}
                                {
                                    (resultOfReferralDetail?.data && resultOfReferralDetail?.data?.[3]?.result === zeroAddress) && (
                                        <Box>
                                            <Box className={classes.apply_btn__wrap}>
                                                <InputBase
                                                    value={referrerAddress}
                                                    onChange={(e) => setReferrerAddress(e.target.value as Address)}
                                                    sx={{
                                                        flex: 1,
                                                        color: '#fff',
                                                        width: '100%',
                                                        padding: '0.3rem 0.5rem',
                                                        ':-moz-placeholder': {
                                                            color: 'fff',
                                                        },
                                                        '@media(max-width : 600px)':{
                                                            fontSize:'11px',
                                                        }
                                                    }}
                                                    fullWidth
                                                    placeholder={'Enter Referrer Address'}
                                                    type={'text'}
                                                />
                                                {/* <Button sx={{
                                                    '@media(max-width : 600px)':{
                                                            fontSize:'12px',
                                                            minWidth:'50px',
                                                            padding:'6px 6px'
                                                        }
                                                }} className={classes.max_btn} onClick={(e) => setReferrerAddress((resultOfReferralDetail?.data && resultOfReferralDetail?.data?.[3]?.result !== zeroAddress) ? resultOfReferralDetail?.data?.[3]?.result as Address : referrerAddress)} >Apply</Button> */}


                                            </Box>
                                            {
                                                (referrerAddress && !resultOfReferralDetail?.data?.[2].result) && (

                                                    <Box className={classes.validate__box} >
                                                        <Typography component={'span'} fontWeight={200} color={'red'}>Your Referrer is Invalid</Typography>
                                                    </Box>
                                                )}
                                            {/* <Box className={classes.validate__box} > */}
                                            <Typography fontWeight={200} color={'#00FFFF'} textAlign={'center'} mt={1}>Note: If you have no any  valid referrer address then you can use this community referrer.</Typography>
                                            <Box sx={{ background: 'linear-gradient(90deg, #0808088a, #00FFFF, #0808088a)', gap: 1, justifyContent: 'center', padding: 1, display: 'flex', marginTop: '1rem', borderRadius: '8px', alignItems: 'center', }}>
                                                <Typography component={'h6'} fontWeight={700} color={'#000'}>Referrer:  </Typography>
                                                <AddressCopy hrefLink={`https://ico.mumblechat.com/dashboard/?ref=0x3B1E0F41ea1a6b1426b9C57262C73e7cD3FDa9af`} text={"0x3B1E0F41ea1a6b1426b9C57262C73e7cD3FDa9af"} addresstext={"0x3B1...3FDa9af"} />
                                            </Box>
                                            {/* </Box> */}


                                        </Box>
                                    )}
                            </Box>

                        </Box>
                    </Grid>
                    <Grid item lg={5} md={6} sm={12} xs={12}>
                        <Box className={classes.step__three}>
                            <Box className={classes.coin_hding}>
                                <Typography variant="h5" color={'#fff'}>Your Mining Portfolio</Typography>
                            </Box>
                            <ContributorsTable resultOfRamaPriceInUSD={resultOfRamaPriceInUSD?.data} />
                        </Box>
                    </Grid>
                </Grid>


                <Refer resultOfReferralDetail={resultOfReferralDetail} />

            </Box>

        </>
    )
}

export default Dsboard