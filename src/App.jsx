import { BrowserRouter, Routes, Route } from "react-router-dom"
import AnimateBox from './Animations/AnimateBox.jsx'
import ScaleUpAnimation from "./Animations/ScaleUpAnimation.jsx"
import Experience from "./Components/Experience.jsx"
import RedStartPage from "./Components/RedStartPage.jsx"
import LoadingPage from "./Animations/LoadingPage.jsx"
import AnimationLoading from "./Animations/AnimationLoading.jsx"


export default function App()
{
  return <>
      <BrowserRouter>
        <Routes>
          <Route path="/gsap" element={<AnimateBox />} />
          <Route path="/scaleup" element={<ScaleUpAnimation />} />
          <Route path="/init" element={<Experience />}/>
          <Route path="/red" element={<RedStartPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/anime" element={<AnimationLoading />} />
        </Routes>
      </BrowserRouter>      
  </>
}