'use client'

import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { useAppSelector } from "@/app/redux"


const Layout = ({children}: Readonly<{children: React.ReactNode}>) => {
  const isSidebarCollapsed = useAppSelector((state) => {
    return state.global.isSidebarCollapsed
  })

  console.log(isSidebarCollapsed)


  return (
    <div
      className={`flex bg-gray-100 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-5 px-9 ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        } transition-all bg-gray-100`}
      >
        <Navbar />
        {children}
      </main>
    </div>
    
  )
}

export default Layout