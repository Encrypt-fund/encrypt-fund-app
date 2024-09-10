import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import t1 from '../../icons/t1.svg'
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import { useChainId, useReadContract } from "wagmi";
import { efContractAddresses } from "@/configs";
import { parseEther, zeroAddress } from "viem";
import { efStakingAbi } from "@/configs/abi/efStaking";


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
            backgroundColor: '#1D1D20',
            borderRadius: '10px',
            border: '3px solid #101012',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
        },
    },

});



const MiningCalculatorTable = ({inputInUsd,member}:{inputInUsd:string,member:string}) => {

    const classes = useStyles();
    const chainId = useChainId()
    const {data:mintRatePerHour} = useReadContract({
        abi: efStakingAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_staking : efContractAddresses.pingaksha.ef_staking,
        functionName: 'calculateMintRate',
        args: [parseEther(inputInUsd),BigInt(member)],
        account: zeroAddress,
        query:{
            enabled: Number(inputInUsd)>0,
            select(data) {
                return Number(data[1])/1e15
            },
        }
    })


    return (

        <>
           { 
           mintRatePerHour && <Box mt={5}>
                {/* <Typography>You Will </Typography> */}
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table sx={{ minWidth: 400, backgroundColor: '#080808', borderRadius: '0px' }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: '#101012' }}>
                            <TableRow>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} >Per Hour Base Speed</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">Per Day</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="left">Per Month</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', fontSize: 18, color: '#fff', padding: 1 }} align="right">Per Year</TableCell>


                            </TableRow>
                        </TableHead>
                        <TableBody>


                            <TableRow

                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1 }} component="th" scope="row">
                                    <Box sx={{
                                        display: 'flex',
                                        gap: '10px',
                                        alignItems: 'center'
                                    }}>
                                        {/* <Box>
                                                <Image src={item.Userprofile} alt={""} />
                                            </Box> */}
                                        <Box>

                                            <Typography color={'#fff'}>{mintRatePerHour}%</Typography>
                                            <Typography fontSize={13} color={'#999'}>{((Number(mintRatePerHour)/100)*Number(inputInUsd)).toFixed(5)} EF</Typography>
                                            <Typography fontSize={13} color={'#999'}>${(((Number(mintRatePerHour)/100)*Number(inputInUsd))*0.05).toFixed(5)}</Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1 }} align="left">

                                    <Typography color={'#fff'}>{mintRatePerHour*24}% </Typography>
                                    <Typography fontSize={13} color={'#999'}>{(((Number(mintRatePerHour)*24)/100)*Number(inputInUsd)).toFixed(5)} EF</Typography>
                                            <Typography fontSize={13} color={'#999'}>${((((Number(mintRatePerHour)*24)/100)*Number(inputInUsd))*0.05).toFixed(5)}</Typography>
                                </TableCell>

                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1 }} align="left">

                                    <Typography color={'#fff'}>{mintRatePerHour*24*30}% </Typography>
                                    <Typography fontSize={13} color={'#999'}>{(((Number(mintRatePerHour)*24*30)/100)*Number(inputInUsd)).toFixed(5)} EF</Typography>
                                            <Typography fontSize={13} color={'#999'}>${((((Number(mintRatePerHour)*24*30)/100)*Number(inputInUsd))*0.05).toFixed(5)}</Typography>
                                </TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1 }} align="right">

                                    <Typography color={'#fff'}>{mintRatePerHour*24*365}% </Typography>
                                    <Typography fontSize={13} color={'#999'}>{(((Number(mintRatePerHour)*24*365)/100)*Number(inputInUsd)).toFixed(5)} EF</Typography>
                                            <Typography fontSize={13} color={'#999'}>${((((Number(mintRatePerHour)*24*365)/100)*Number(inputInUsd))*0.05).toFixed(5)}</Typography>
                                </TableCell>


                            </TableRow>


                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            }
        </>

    );
}

export default MiningCalculatorTable