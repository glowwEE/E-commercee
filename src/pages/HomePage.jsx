import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import AllProducts from '../components/sections/AllProducts'
import Hero from '../components/sections/HeroSection'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <AllProducts/>
      <Footer/>
    </div>
  )
}

export default HomePage