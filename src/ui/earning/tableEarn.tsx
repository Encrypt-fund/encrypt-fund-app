'use client'
import { Box, Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import r2 from '../../icons/r2.svg'
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import { convertToAbbreviated } from "@/lib/convertToAbbreviated";
import shortenString from "@/lib/shortenString";
import { useAccount, useBlockNumber, useChainId, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Address, formatEther, zeroAddress } from "viem";
import { mmctStakingAbi } from "@/configs/abi/mmctStaking";
import { formatTier, mmctContractAddresses } from "@/configs";
import { formatNumberToCurrencyString } from "@/lib/formatNumberToCurrencyString";
import HoverTool from "@/theme/components/hoverTool";
import AddressCopy from "@/theme/components/addressCopy";
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from "react";
import { extractDetailsFromError } from "@/lib/extractDetailsFromError";
import { toast } from "react-toastify";


const useStyles = makeStyles({
    tableContainer: {
        // maxHeight: 100,
        '&::-webkit-scrollbar': {
            width: '12px',
        },
        '&::-webkit-scrollbar-track': {
            background: '#101012',
            borderRadius: '0px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#2b3139',
            borderRadius: '10px',
            border: '3px solid #101012',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
        },
    },
    stakebtn: {
        backgroundColor: 'transparent',
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #00ffff !important',
        color: '#00ffff !important',
        textDecoration: 'none',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#00ffff !important',
            color: '#000 !important'
        }
    },
    stakebtn__wrp: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'end'
    },
    noData: {
        height: '50px',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        justifyItems: "center",
        backgroundColor: '#1e2329'
    }
});

const TableEarn = ({ resultOfUserStakedList, mintRatePerYear }: { resultOfUserStakedList: any, mintRatePerYear: Number }) => {
    const classes = useStyles();

    const { address } = useAccount()
    const chainId = useChainId()
    // const queryClient = useQueryClient()
    // const { data: blockNumber } = useBlockNumber({ watch: true })

    // const TableList = [
    //     {
    //         id: 1,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Starter',
    //         tri365d: '1000',
    //         tcr: '100',
    //         rr: '10'
    //     },
    //     {
    //         id: 2,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Silver',
    //         tri365d: '1000',
    //         tcr: '100',
    //         rr: '10'
    //     },
    //     {
    //         id: 3,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Gold',
    //         tri365d: '1000',
    //         tcr: '100',
    //         rr: '10'
    //     },
    //     {
    //         id: 4,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Platinum',
    //         tri365d: '1000',
    //         tcr: '100',
    //         rr: '10'
    //     },
    //     {
    //         id: 5,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Daimond',
    //         tri365d: '1000',
    //         tcr: '100',
    //         rr: '10'
    //     },
    //     {
    //         id: 6,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Elite',
    //         tri365d: '1000',
    //         tcr: '100',
    //         rr: '10'
    //     },

    // ];

    const Reward = ({ index }: { index: number }) => {
        const mintReward = useReadContract({
            abi: mmctStakingAbi,
            address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
            functionName: 'calculateMintRewards',
            args: [address as Address, BigInt(index)],
            account: zeroAddress
        })
        const { writeContractAsync, data, isPending: isPendingClaimForWrite, isSuccess: isSuccess1, isError: isError1 } = useWriteContract({
            mutation: {
                onSettled(data, error, variables, context) {
                    if (error) {
                        toast.error(extractDetailsFromError(error.message as string) as string)
                    } else {
                        toast.success("Reward claimed successfully")
                    }
                },
            }
        })
        const { isLoading, isSuccess, isError } = useWaitForTransactionReceipt({
            hash: data,
        })
        // use to refetch
        // useEffect(() => {
        //     queryClient.invalidateQueries({ queryKey: mintReward.queryKey })
        // }, [blockNumber, queryClient])
        return (

            <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} align="left">
                <Typography color={'#fff'}>{Number(mintReward?.data) > 0 ? Number(formatEther?.(BigInt?.(mintReward?.data ? mintReward.data.toString() : 0))).toFixed(5) : '0.00000'} EF
                    <Button
                        disabled={
                            (isPendingClaimForWrite || isLoading)
                        }
                        className={classes.stakebtn}
                        sx={{
                            opacity: !(
                                isPendingClaimForWrite || isLoading
                            ) ? "1" : '0.3',
                            marginLeft: '7px'
                        }}
                        onClick={async () => {
                            await writeContractAsync({
                                abi: mmctStakingAbi,
                                address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
                                functionName: 'claimRewards',
                                args: [BigInt(index)],
                                account: address
                            })
                        }}
                    >Claim
                        {
                            (isPendingClaimForWrite || isLoading) && <CircularProgress sx={{ ml: "7px" }} size={18} color="inherit" />
                        }
                    </Button>
                </Typography>
                <Typography color={'#999'}>${Number(mintReward?.data) > 0 ? (Number(formatEther?.(BigInt?.(mintReward?.data ? mintReward.data.toString() : 0))) * 0.05).toFixed(5) : '0.00000'}</Typography>
            </TableCell>
        )
    }


    const Action = ({ index }: { index: number }) => {
        const { writeContractAsync, data, isPending: isPendingUnstakeForWrite } = useWriteContract({
            mutation: {
                onSettled(data, error, variables, context) {
                    if (error) {
                        toast.error(extractDetailsFromError(error.message as string) as string)
                    } else {
                        toast.success("Unstake successfully")
                    }
                },
            }
        })
        const { isLoading } = useWaitForTransactionReceipt({
            hash: data,
        })
        return (
            <Box className={classes.stakebtn__wrp}>
                <Button
                    disabled={
                        (isPendingUnstakeForWrite || isLoading)
                    }
                    className={classes.stakebtn}
                    sx={{
                        opacity: !(
                            isPendingUnstakeForWrite || isLoading
                        ) ? "1" : '0.3',
                        marginLeft: '7px'
                    }}
                    onClick={async () => {
                        await writeContractAsync({
                            abi: mmctStakingAbi,
                            address: chainId === 1370 ? mmctContractAddresses.ramestta.mmct_staking : mmctContractAddresses.pingaksha.mmct_staking,
                            functionName: 'unstake',
                            args: [BigInt(index)],
                            account: address
                        })
                    }}

                >Unstake
                    {
                        (isPendingUnstakeForWrite || isLoading) && <CircularProgress sx={{ ml: "7px" }} size={18} color="inherit" />
                    }
                </Button>
            </Box>
        )
    }




    return (
        <Box>
            <TableContainer className={classes.tableContainer}>
                <Table sx={{ minWidth: 1500, backgroundColor: '#1e2329', border: '1px solid #2b3139', borderRadius: '8px' }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#27313d' }}>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 16, color: '#fff' }}>User</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 16, color: '#fff' }} align="left">SA <HoverTool Title={"Staked Amount"} /></TableCell>
                            {/* <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 16, color: '#fff' }} align="left">Tier</TableCell> */}
                            <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 16, color: '#fff' }} align="left">Reward</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 16, color: '#fff' }} align="left">TRI365D <HoverTool Title={"Total Reward in 365 Days"} /></TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 16, color: '#fff' }} align="left">TCR <HoverTool Title={"Till Claimed Rewards"} /></TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 16, color: '#fff' }} align="left">RR <HoverTool Title={"Remaining Rewards"} /></TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 16, color: '#fff' }} align="left">ST <HoverTool Title={"Start Time"} /></TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 16, color: '#fff' }} align="left">LC <HoverTool Title={"Last Claimed"} /></TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 16, color: '#fff' }} align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody style={{ alignItems: 'center' }}>

                        {
                            resultOfUserStakedList?.length > 0 ? resultOfUserStakedList.map((item: any, index: number) => (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} component="th" scope="row">
                                        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                            <Image src={r2} alt={"lol"} width={50} />
                                            <AddressCopy
                                                textColor="#00ffff !important"
                                                hrefLink={
                                                    chainId === 1370 ? `https://ramascan.com/address/${address}` :
                                                        `https://pingaksha.ramascan.com/address/${address}`
                                                }
                                                text={address as string}
                                                addresstext={shortenString(address as Address)} />

                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} align="left">
                                        <Typography color={'#fff'}>{convertToAbbreviated(formatEther?.(BigInt?.(item?.amount ? item.amount.toString() : 0)), 3)} EF</Typography>
                                        <Typography color={'#999'}>{formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(item?.amount ? item.amount.toString() : 0))) * 0.05, 3)}</Typography>
                                    </TableCell>
                                    {/* <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} align="left">
                                    <Typography color={'#fff'}>{formatTier(Number(item.tier))}</Typography>

                                </TableCell> */}

                                    <Reward index={index} />

                                    <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} align="left">
                                        <Typography color={'#fff'}>{convertToAbbreviated((Number(mintRatePerYear) * Number(formatEther?.(BigInt?.(item?.amount ? item.amount.toString() : 0))) / 100), 5)} EF</Typography>
                                        <Typography color={'#999'}>{formatNumberToCurrencyString((Number(mintRatePerYear) * Number(formatEther?.(BigInt?.(item?.amount ? item.amount.toString() : 0))) / 100) * 0.05, 5)}</Typography>
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} align="left">
                                        <Typography color={'#fff'}>{convertToAbbreviated(formatEther?.(BigInt?.(item?.claimedMintRewards ? item.claimedMintRewards.toString() : 0)), 5)} EF</Typography>
                                        <Typography color={'#999'}>{formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(item?.claimedMintRewards ? item.claimedMintRewards.toString() : 0))) * 0.05, 5)}</Typography>
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} align="left">
                                        <Typography color={'#fff'}>{convertToAbbreviated(((Number(mintRatePerYear) * Number(formatEther?.(BigInt?.(item?.amount ? item.amount.toString() : 0))) / 100) - Number(formatEther?.(BigInt?.(item?.claimedMintRewards ? item.claimedMintRewards.toString() : 0)))), 5)} EF</Typography>
                                        <Typography color={'#999'}>{formatNumberToCurrencyString(((Number(mintRatePerYear) * Number(formatEther?.(BigInt?.(item?.amount ? item.amount.toString() : 0))) / 100) - Number(formatEther?.(BigInt?.(item?.claimedMintRewards ? item.claimedMintRewards.toString() : 0)))) * 0.05, 5)}</Typography>
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} align="left">
                                        <Typography color={'#fff'}>{new Date(Number(item?.startTime) * 1000).toLocaleString()}</Typography>
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} align="left">
                                        <Typography color={'#fff'}>{new Date(Number(item?.lastClaimTime) * 1000).toLocaleString()}</Typography>
                                    </TableCell>

                                    <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} align="right">
                                        <Action index={index} />
                                    </TableCell>
                                </TableRow>
                            ))

                                : (
                                    <Box ml={30} className={classes.noData}>
                                        <Typography color={'#fff'} margin={'auto'}>No Data Found!</Typography>
                                    </Box>
                                )
                        }



                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default TableEarn;

