import { IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import quest from '../../icons/quest.svg'

 interface props{
    Title:string;
 }

 const HoverTool = ({Title}:props)=>{
    return(
        <>
        <Tooltip placement="right-start" title={Title}>
                <IconButton sx={{ padding: '0' }}>
                    <Image src={quest} alt="" width={20}/>
                </IconButton>
            </Tooltip>
        </>
    )
 }

 export default HoverTool;