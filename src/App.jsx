import './App.css'
import Navbar from './components/common/Navbar'
import Hero from './components/core/Hero'
import MovingText from './components/core/MovingText'
import InfoSection from './components/core/InfoSection'
import EyesSection from './components/core/EyesSection'
import Feature from './components/core/Feature'

function App() {

  return (
    <div className='h-screen w-screen p-0 m-0 overflow-y-auto overflow-x-hidden bg-zinc-900' >
      <Navbar />

      <Hero />

      <MovingText />

      <InfoSection />

      <EyesSection />

      <Feature />
    </div>
  )
}

export default App
