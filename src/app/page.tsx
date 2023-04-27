import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
   <h1 className="text-red-600">Hello world</h1>
  )
}

export default Home
