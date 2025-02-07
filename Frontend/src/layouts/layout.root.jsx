import Navigation from '@/Navigation'
import React from 'react'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
   <>
        <main>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </main>
   </>
  )
}

export default RootLayout
