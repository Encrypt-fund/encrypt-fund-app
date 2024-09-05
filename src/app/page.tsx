
"use client"


import dynamic from "next/dynamic";






const Dashboard = dynamic(
  () => import("@/ui/dashboard/dashboardcmp"),
  {
    ssr: false,
  }
)

const Home = () => {

  return (
    <Dashboard />
  );
}
export default Home;