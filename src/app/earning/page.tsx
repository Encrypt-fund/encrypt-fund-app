'use client'
import dynamic from "next/dynamic"

const Earningcmp = dynamic(
  () => import("@/ui/earning/earningcmp"),
  {
    ssr: false,
  }
)
 

const Earning = () => {
    return (
        <>
            <Earningcmp/>
        </>
    )
}

export default Earning