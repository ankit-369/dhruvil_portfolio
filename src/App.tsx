
import './App.css'
import { Aboutme } from './component/aboutme'
import { Heroheader } from './component/hero'
import { Work } from './component/work'

function App() {

  return (
    <div className='bg-[#0B1113] p-7'>
      <Heroheader />
      <Aboutme />
      <Work />
    </div>
  )
}

export default App
