import './App.css'
import Banner from './Components/Banner/Banner'
import Counter from './Components/Counter/Counter'
import Workflow from './Components/Counter/Workflow/Workflow'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/Pricing/Pricing'
function App() {

  return (
    <>
     <Navbar/>
     <Banner/>
     <Counter/>
     <DigitalTools/>
     <Pricing/>
     <Workflow/>
    </>
  )
}

export default App
