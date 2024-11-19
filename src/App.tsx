
import './App.css'
import { Aboutme } from './component/aboutme'
import { Heroheader } from './component/hero'
import { Work } from './component/work'

function App() {

  return (
    <div className='bg-[#0B1113] after_521:p-7'>
      {/* <h1 className='text-white font-montserrat font-semibold'>hii ankit</h1> */}
      <Heroheader />
      <Aboutme />
      <Work />
    </div>
  )
}

export default App
