// import { Button } from "@mui/material";
// import useCustomContractWrite from "../../Hooks/useCustomContractWrite";
// import Loader from "../Loader/Loader";
// import { useAccount } from "wagmi";
// import useCustomContractRead from "../../Hooks/useCustomContractRead";
// import convertWeiToEther from "../../Utils/convertWeiToEther";
// import { useEffect } from "react";
// import convertEtherToWei from "../../Utils/convertEtherToWei";
// import IUniswapv2Pair from "../../Config/IUniswapv2Pair.json";
// import BigNumber from "bignumber.js";
// import { erc20Abi } from "viem";

// const ApproveButton = ({ spenderAddress, setIsApprovedERC20, spendAmount }:any) => {
//   const { address } = useAccount();
//   const { data: TokenInfo } = useToken({
//     address: tokenAddress
//   })

//   const { _useContractWrite: approveContractWrite, _useWaitForTransaction: approveWaitForTransaction, } = useCustomContractWrite({
//     Adrress: tokenAddress,
//     Abi: erc20Abi,
//     FuncName: "approve",
//     Args: [spenderAddress, Number?.(spendAmount) > 0 ? convertEtherToWei?.(spendAmount, TokenInfo?.decimals) : convertEtherToWei?.(new BigNumber((Number.MAX_SAFE_INTEGER**1.3)?.toString())?.toString(), TokenInfo?.decimals)],
//     isEnabled: (address !== undefined)
//   }
//   );

//   useEffect(() => {
//     if (approveWaitForTransaction?.isSuccess||approveContractWrite?.isSuccess) {
//       setIsApprovedERC20?.(true);
//     }
//   }, [approveWaitForTransaction?.isSuccess,approveWaitForTransaction?.isSuccess, address])

//   return (
//     <>
//       {/* {approveContractWrite?.isError && <AlertMsg/>} */}
//       <Button
//       disabled={
//         (!approveWaitForTransaction?.isLoading && !approveContractWrite?.isLoading)?false:true
//       }
//         sx={{
//           gap: "6px !important",
//           width: "100% !important"
//         }}
//         // startIcon={approveWaitForTransaction.isSuccess? <CheckIcon sx={{ color: "#eee", fontSize: "10px" }} />:null}
//         type="button"
//         onClick={
//           async () => {
//             try {

//               await approveContractWrite?.writeAsync()

//             } catch (error) {
//               // console.log(error, "error");
//             }
//           }
//         }
//       >
//         {(approveWaitForTransaction?.isLoading || approveContractWrite?.isLoading) ? <Loader color="#423A2A" /> : null}
//         {ButtonName ?
//           <>
//             {ButtonName}
//           </>
//           :
//           "Approve"}
//       </Button>
//     </>

//   )
// }

// export default ApproveButton;