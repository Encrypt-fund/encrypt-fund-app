import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import p1 from '../../icons/p1.svg'
import p2 from '../../icons/p2.svg'
import p3 from '../../icons/p3.svg'
import p4 from '../../icons/p4.svg'
import p5 from '../../icons/p5.svg'
import p6 from '../../icons/p6.svg'
import Image from "next/image";
import r2 from '../../icons/r2.svg'
import HoverTool from "@/theme/components/hoverTool";
import { makeStyles } from '@mui/styles';
import { useAccount, useChainId, useReadContract } from "wagmi";
// import { efStakingAbi } from "@/configs/abi/efStaking";
import { efContractAddresses } from "@/configs";
import { Address, formatEther, zeroAddress } from "viem";
import { efReferralAbi } from "@/configs/abi/efReferral";
import shortenString from "@/lib/shortenString";
import { convertToAbbreviated } from "@/lib/convertToAbbreviated";
import { formatNumberToCurrencyString } from "@/lib/formatNumberToCurrencyString";
import AddressCopy from "@/theme/components/addressCopy";


const useStyles = makeStyles({
    tableContainer: {
        // maxHeight: 100, 
        '&::-webkit-scrollbar': {
            width: '12px',
        },
        '&::-webkit-scrollbar-track': {
            background: '#27313d',
            borderRadius: '0px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#2b3139',
            borderRadius: '10px',
            border: '3px solid #27313d',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
        },
    },
    noData: {
        height: '50px',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        justifyItems: "center",
        backgroundColor: '#1e2329'
    }
})



const Tablereferral = ({ referralsCount }: { referralsCount: string }) => {
    const classes = useStyles();
    const { address } = useAccount()
    const chainId = useChainId()

    // const TableList = [
    //     {
    //         id: 1,
    //         Userprofile: p1,
    //         ProfileAddress: "0xcc5...be31",
    //         Bonus: '57',
    //         Profit: '1,021',
    //         sa: '10'

    //     },
    //     {
    //         id: 2,
    //         Userprofile: p2,
    //         ProfileAddress: "0x2eb...7176",
    //         Bonus: '10',
    //         Profit: '1,210',
    //         sa: '10'
    //     },
    //     {
    //         id: 3,
    //         Userprofile: p3,
    //         ProfileAddress: "0x614...7419",
    //         Bonus: '22',
    //         Profit: '1,252',
    //         sa: '10'
    //     },
    //     {
    //         id: 4,
    //         Userprofile: p4,
    //         ProfileAddress: "0x247...12a3",
    //         Bonus: '37',
    //         Profit: '1,345',
    //         sa: '10'
    //     },
    //     {
    //         id: 5,
    //         Userprofile: p5,
    //         ProfileAddress: "0xe7d...31e2",
    //         Bonus: '29',
    //         Profit: '1,879',
    //         sa: '10'
    //     },
    //     {
    //         id: 6,
    //         Userprofile: p6,
    //         ProfileAddress: "0x6ac...0be7",
    //         Bonus: '12',
    //         Profit: '18,521',
    //         sa: '10'
    //     },

    // ]


    const resultOfDirectReferrals = useReadContract({
        abi: efReferralAbi,
        address: chainId === 1370 ? efContractAddresses.ramestta.ef_referral : efContractAddresses.pingaksha.ef_referral,
        functionName: 'getDirectReferrals',
        args: [address as Address, BigInt(0), Number(referralsCount as string) > 0 ? BigInt(referralsCount as string) : BigInt(0)],
        account: zeroAddress
    })



    return (

        <>
            <Box>
                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table sx={{ minWidth: 650, backgroundColor: '#1e2329', border: '1px solid #2b3139', borderRadius: '4px' }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: '#27313d' }}>
                            <TableRow>
                                <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 18, color: '#fff', padding: 1 }} >User</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 18, color: '#fff', padding: 1 }} align="left">SA <HoverTool Title={"Staking Amount"} /></TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 18, color: '#fff', padding: 1 }} align="left">Bonus</TableCell>
                                <TableCell sx={{ borderBottom: '1px solid #2b3139', fontSize: 18, color: '#fff', padding: 1 }} align="right">YE <HoverTool Title={"Your Earning"} /></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                resultOfDirectReferrals?.data && resultOfDirectReferrals?.data?.[0].length > 0 ? (resultOfDirectReferrals.data[0].map((item: any, index: number) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} component="th" scope="row">
                                            <Box sx={{
                                                display: 'flex',
                                                gap: '10px',
                                                alignItems: 'center'
                                            }}>
                                                <Image src={r2} alt={""} width={50} />
                                                <AddressCopy 
                                             textColor="#00ffff !important" 
                                             hrefLink={
                                                chainId===1370?`https://ramascan.com/address/${resultOfDirectReferrals.data[0][index]}`:
                                                `https://pingaksha.ramascan.com/address/${resultOfDirectReferrals.data[0][index]}`
                                             } 
                                             text={resultOfDirectReferrals.data[0][index] as string} 
                                             addresstext={shortenString(resultOfDirectReferrals.data[0][index] as Address)}/>
                                            </Box>
                                        </TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} align="left">
                                            <Typography color={'#fff'}>{resultOfDirectReferrals.data[1][index] ?
                                                (
                                                    <>
                                                        {convertToAbbreviated(Number(formatEther?.(BigInt?.(resultOfDirectReferrals.data[1][index].toString()))),5)} EF
                                                    </>
                                                )
                                                : '-'}
                                            </Typography>
                                            <Typography color={'#999'}>
                                            {resultOfDirectReferrals.data[1][index] ?
                                                (
                                                    <>
                                                        {formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfDirectReferrals.data[1][index].toString())))*0.05,5)}
                                                    </>
                                                )
                                                : '-'}
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} align="left">5%</TableCell>
                                        <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} align="right">
                                            <Typography color={'#fff'}>{resultOfDirectReferrals.data[1][index] ?
                                                (
                                                    <>
                                                        {convertToAbbreviated(Number(formatEther?.(BigInt?.(resultOfDirectReferrals.data[1][index].toString()))) * 0.05,5)} EF
                                                    </>
                                                )
                                                : '-'}
                                            </Typography>
                                            <Typography color={'#999'}>
                                            {resultOfDirectReferrals.data[1][index] ?
                                                (
                                                    <>
                                                        {formatNumberToCurrencyString(Number(formatEther?.(BigInt?.(resultOfDirectReferrals.data[1][index].toString()))) * 0.05 * 0.05,5)}
                                                    </>
                                                )
                                                : '-'}
                                            </Typography>
                                        </TableCell>


                                    </TableRow>
                                ))) :
                                    (
                                        <Box ml={30} className={classes.noData}>
                                            <Typography color={'#fff'} margin={'auto'}>No Data Found!</Typography>
                                        </Box>
                                    )
                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>

    );
}

export default Tablereferral