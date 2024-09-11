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
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media(max-width : 600px)': {
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem'
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
        marginTop: '10px'
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
    box_List: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
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


const Buy = ({resultOfRusdBalance,resultOfEfTokenPrice,resultOfCheckAllowance}:any) => {
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

    const { writeContractAsync, data, isPending: isPendingBuyForWrite } = useWriteContract(
        {
            mutation: {
                onSettled(data, error, variables, context) {
                    if (error) {
                        toast.error(extractDetailsFromError(error.message as string) as string)
                    } else {
                        toast.success("Your EF Buy successfully")
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
        abi: efIcoAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_ico : efContractAddresses.pingaksha.ef_ico,
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


    }, [resultOfSaleDetails?.data, initialProgressValue]);




    const progressValue = initialProgressValue > 0 ? ((initialProgressValue - value2) / initialProgressValue) * 100 : 0;


    const resultOfUserContribution = useReadContract({
        abi: efIcoAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_ico : efContractAddresses.pingaksha.ef_ico,
        functionName: 'user2SaleType2Contributor',
        args: [address as Address, 0],
        account: zeroAddress
    })

    const resultOfRamaPriceInUSD = useReadContract({
        abi: efIcoAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_ico : efContractAddresses.pingaksha.ef_ico,
        functionName: 'ramaPriceInUSD',
        args: [],
        account: zeroAddress
    })

    const resultOfBalance = useReadContract({
        abi: efTokenAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_token : efContractAddresses.pingaksha.ef_token,
        functionName: 'balanceOf',
        args: [address as Address],
        account: address
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

    // const handleChange2 = (event: Event, newValue: number) => {
    //     setValue2(newValue);
    // };

    // use to refetch
    // useEffect(() => {
    //     queryClient.invalidateQueries({ queryKey: balanceOfRama.queryKey })
    //     queryClient.invalidateQueries({ queryKey: resultOfSaleDetails.queryKey })
    //     queryClient.invalidateQueries({ queryKey: resultOfUserContribution.queryKey })
    //     queryClient.invalidateQueries({ queryKey: resultOfRamaPriceInUSD.queryKey })
    //     queryClient.invalidateQueries({ queryKey: resultOfBalance.queryKey })
    //     queryClient.invalidateQueries({ queryKey: resultOfUserTeamReward.queryKey })
    //     queryClient.invalidateQueries({ queryKey: resultOfReferralDetail.queryKey })
    // }, [blockNumber, queryClient, balanceOfRama, resultOfSaleDetails, resultOfUserContribution, resultOfRamaPriceInUSD, resultOfBalance, resultOfUserTeamReward, resultOfReferralDetail])



    return (
        <>
            <Box  >
                <Grid container spacing={2}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Box className={classes.step__three}>
                            <Box className={classes.coin_hding}>
                                <Typography variant="h5" color={'#fff'}>Buy Coins</Typography>
                            </Box>
                            <Box className={classes.middleBox}>

                                {/* <Box textAlign={'center'} mt={3}>
                                    <Typography>  <Typography component={'span'} color={'#fff'}>Private Sale</Typography></Typography>
                                </Box> */}

                                <Box className={classes.currentsale}>
                                    <Box>
                                        <Typography color={'#999'}>Total Coin Sales USD</Typography>
                                        <Typography sx={{
                                            '@media(max-width : 600px)':{
                                                textAlign:'center'
                                            }
                                        }} variant="h6" color={'#fff'} fontWeight={500}>{formatNumberToCurrencyString(
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
                                        <Typography sx={{
                                            '@media(max-width : 600px)':{
                                                textAlign:'center'
                                            }
                                        }} variant="h6" color={'#fff'} fontWeight={500}>{formatNumberToCurrencyString(
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
                                        background: 'linear-gradient(90deg, #080808, #00d632)',
                                        border: '1px solid #2b3139',
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
                                <Box className={classes.currentsale2} mt={2}>
                                    <Typography fontWeight={500} color={'#fff'}>EF Price : ${
                                        Number(
                                            formatEther?.(BigInt?.(resultOfEfTokenPrice?.data ? resultOfEfTokenPrice?.data?.toString() : 0))
                                    ).toFixed(2)
                                    }</Typography>
                                    {/* <Typography fontWeight={500} color={'#fff'}>Pre-Sale: $0.1</Typography> */}
                                </Box>

                                <Box className={classes.rama__log}>
                                    <Image src={rmesta} alt={""} />
                                    <Typography variant="h5" fontWeight={500} color={'#fff'}>RUSD</Typography>
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
                                        placeholder={'Enter Amount in RUSD'}
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

                                            {/* <Box className={classes.box_List}>
                                                <Image src={rmesta} alt={""} width={40} />
                                                <Typography color={'#999'}>RUSD PRICE:
                                                    <Typography component={'span'} color={'#fff'}> ${
                                                        Number(
                                                            formatEther?.(BigInt?.(resultOfRamaPriceInUSD?.data ? resultOfRamaPriceInUSD.data.toString() : 0)))
                                                    }
                                                    </Typography>
                                                </Typography>
                                            </Box> */}
                                        </>
                                    }
                                    <Box className={classes.box_List}>
                                        <Image src={shield} alt={""} width={50} />
                                        <Typography color={'#999'}>EF WORTH : <Typography component={'span'} color={'#fff'}>{
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
                                    // <Button

                                    //     disabled={

                                    //         (!buyInput || isPendingBuyForWrite || isLoading || (
                                    //             buyInput && (Number(buyInput) *
                                    //                 Number(
                                    //                     formatEther?.(BigInt?.(resultOfRamaPriceInUSD?.data ? resultOfRamaPriceInUSD.data.toString() : 0)))
                                    //             ) < 10
                                    //         ) || (
                                    //                 Number(formatEther?.(BigInt?.(balanceOfRama?.data?.value ? balanceOfRama?.data?.value.toString() : 0))) < Number(Number(buyInput) > 0 ? buyInput : 0)
                                    //             ) || (
                                    //                 !referrerAddress || !resultOfReferralDetail?.data?.[2].result
                                    //             ) && resultOfReferralDetail?.data?.[3]?.result === zeroAddress
                                    //         )
                                    //     }
                                    //     fullWidth={true}
                                    //     className={classes.buy__btn}
                                    //     sx={{
                                    //         opacity: !((
                                    //             !buyInput || isPendingBuyForWrite || isLoading || (
                                    //                 buyInput && (Number(buyInput) *
                                    //                     Number(
                                    //                         formatEther?.(BigInt?.(resultOfRamaPriceInUSD?.data ? resultOfRamaPriceInUSD.data.toString() : 0)))
                                    //                 ) < 10
                                    //             ) || (
                                    //                 Number(formatEther?.(BigInt?.(balanceOfRama?.data?.value ? balanceOfRama?.data?.value.toString() : 0))) < Number(Number(buyInput) > 0 ? buyInput : 0)
                                    //             ) || (
                                    //                 !referrerAddress || !resultOfReferralDetail?.data?.[2].result
                                    //             ) && resultOfReferralDetail?.data?.[3]?.result === zeroAddress
                                    //         ))
                                    //             ? "1" : '0.3'
                                    //     }}
                                    //     onClick={async () => {
                                    //         await writeContractAsync({
                                    //             abi: efIcoAbi,
                                    //             address: chainId === 1370 ? efContractAddresses.ramestta.ef_ico : efContractAddresses.pingaksha.ef_ico,
                                    //             functionName: 'buy',
                                    //             args: [0, (resultOfReferralDetail?.data?.[3]?.result !== zeroAddress ? resultOfReferralDetail?.data?.[3]?.result as Address : referrerAddress as Address)],
                                    //             account: address,
                                    //             value: parseEther(buyInput),
                                    //         })


                                    //     }} >Buy
                                    //     {
                                    //         (isPendingBuyForWrite || isLoading) && <CircularProgress size={18} color="inherit" />
                                    //     }
                                    // </Button>
                                    <Button
                                        disabled={true}
                                        fullWidth={true}
                                        className={classes.buy__btn}
                                        sx={{
                                            opacity: '0.3'
                                        }}
                                    >Coming Soon

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
                                        <Typography component={'span'} fontWeight={200} color={'red'}>Insufficient RUSD Balance</Typography>
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
                                                        '@media(max-width : 600px)': {
                                                            fontSize: '11px',
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
                                            <Typography fontWeight={200} color={'#00d632'} textAlign={'center'} mt={1}>Note: If you have no any  valid referrer address then you can use this community referrer.</Typography>
                                            <Box sx={{ background: 'linear-gradient(90deg, #08080800, #00d632, #08080800)', gap: 1, justifyContent: 'center', padding: 1, display: 'flex', marginTop: '1rem', borderRadius: '8px', alignItems: 'center', }}>
                                                <Typography component={'h6'} fontWeight={700} color={'#000'}>Referrer:  </Typography>
                                                <AddressCopy hrefLink={`https://encryptfund.com/?ref=0xBE4A7Ae76F7cceD70e0aec65aBd74DC84BB9D9C9`} text={"0xBE4A7Ae76F7cceD70e0aec65aBd74DC84BB9D9C9"} addresstext={"0xBE4...BB9D9C9"} />
                                            </Box>
                                            {/* </Box> */}


                                        </Box>
                                    )}
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default Buy