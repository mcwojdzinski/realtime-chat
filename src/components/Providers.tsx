'use client'

import { Toaster } from 'react-hot-toast'
import { FC, ReactNode } from 'react'

interface ProvidersProps {
  children: ReactNode
}
const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      {children}
    </>
  )
}

export default Providers
