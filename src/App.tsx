
import './App.css'
import { Aboutme } from './component/aboutme'
import Footer from './component/footer'
import { Heroheader } from './component/hero'
import PhotosGrid from './component/photos'
import { Work } from './component/work'

function App() {
  
  return (
    <><div className='bg-[#0B1113] after_521:p-7'>
      <Heroheader />
      <Aboutme />
      <PhotosGrid />
      <Work />
    </div><>
        <Footer />
      </></>
  )
}

export default App