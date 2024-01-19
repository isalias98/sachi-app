import Image from 'next/image'
import Carousel from './components/Carousel'
import FrontList from './components/FrontList'

export default function Home() {
  return (
    <div className=''>
      <Carousel />
      <FrontList />
    </div>
  )
}
