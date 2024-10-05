import { BrowserRouter, Routes, Route } from "react-router-dom"
import AnimateBox from './Animations/AnimateBox.jsx'
import ScaleUpAnimation from "./Animations/ScaleUpAnimation.jsx"
import ParallaxImage from "./Parallax/ParallaxImage.jsx"
import ParallaxVideo from "./Parallax/ParallaxVideo.jsx"
import GetStarted from "./App/GetStarted.jsx"
import Expo from './Expo/Expo.jsx'

export default function App()
{
  return <>
      <BrowserRouter>
        <Routes>
          <Route path="/gsap" element={<AnimateBox />} />
          <Route path="/scaleup" element={<ScaleUpAnimation />} />
          <Route path="/parallax" element={<ParallaxImage />}/>
          <Route path="/paraVideo" element={<ParallaxVideo />} />

          {/* GET STARTED */}
          <Route path="/start" element={<GetStarted />} />
          <Route path="/" element={<Expo />}/>
        </Routes>
      </BrowserRouter>
  </>
}