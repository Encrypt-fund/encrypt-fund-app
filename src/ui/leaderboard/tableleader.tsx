import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import mmct from '../../icons/Sheild.svg'
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Link from "next/link";
import { convertToNumber } from "@/lib/convertToNumber";
import { convertToAbbreviated } from "@/lib/convertToAbbreviated";


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
        border: '1px solid #00ffff',
        color: '#00ffff',
        textDecoration: 'none',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#00ffff',
            color: '#000'
        }
    },
    stakebtn__wrp: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'end'
    }
});

const Tableleader = () => {
    const classes = useStyles();

    const TableList = [
        {
            id: 1,
            Userprofile: mmct,
            ProfileAddress: "0xcc5...be31",
            totaltransaction: '1,521,20.12'
        },
        {
            id: 2,
            Userprofile: mmct,
            ProfileAddress: "0xcc5...be34",
            totaltransaction: '1,521,530.19'
        },
        {
            id: 3,
            Userprofile: mmct,
            ProfileAddress: "0xcc5...be32",
            totaltransaction: '1,521,560.02'
        },
        {
            id: 4,
            Userprofile: mmct,
            ProfileAddress: "0xcc5...be37",
            totaltransaction: '1,521,593.12'
        },
        {
            id: 5,
            Userprofile: mmct,
            ProfileAddress: "0xcc5...be39",
            totaltransaction: '1,521,770.12'
        },
        {
            id: 6,
            Userprofile: mmct,
            ProfileAddress: "0xcc5...be35",
            totaltransaction: '1,521,530.12'
        },



    ];

    return (
        <Box>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table sx={{ minWidth: 650, backgroundColor: '#1e2329', border: '1px solid #2b3139', borderRadius: '4px' }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#101012' }}>
                        <TableRow>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {TableList.map((item, index) => (
                            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} component="th" scope="row">
                                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                        <Image src={item.Userprofile} alt={""} width={50} />
                                        <Box>
                                            <Typography>{item.ProfileAddress}</Typography>
                                            <Typography color={'#fff'}>EF</Typography>
                                        </Box>
                                    </Box>
                                </TableCell>



                                <TableCell sx={{ borderBottom: '1px solid #2b3139', padding: 1, color: '#fff' }} align="right">
                                    <Typography color={'#999'}>Total Transactions</Typography>
                                    <Typography color={'#fff'}>$ {item.totaltransaction}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Tableleader;
