import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

import './App.css'
import { Aboutme } from './component/aboutme'
import { Heroheader } from './component/hero'
import { Work } from './component/work'

function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in ms
        easing: 'ease-in-out', // Animation easing
        once: true, // Whether animation should happen only once
    });
}, []);
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
