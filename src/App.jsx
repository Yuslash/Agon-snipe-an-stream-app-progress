import { BrowserRouter, Routes, Route } from "react-router-dom"
import AnimateBox from './Animations/AnimateBox.jsx'
import ScaleUpAnimation from "./Animations/ScaleUpAnimation.jsx"
import Experience from "./Components/Experience.jsx"
import RedStartPage from "./Components/RedStartPage.jsx"
import LoadingPage from "./Animations/LoadingPage.jsx"
import AnimationLoading from "./Animations/AnimationLoading.jsx"
import LoginPage from "./Auth/LoginPage.jsx"
import SignUpPage from "./Auth/SignUpPage.jsx"
import DataTest from "./Testing/DataTest.jsx"
import ParameterPage from "./Testing/ParameterPage.jsx"
import Upload from "./Uploads/Upload.jsx"
import AlertApp from "./Delta/Alertapp.jsx"
import Site from "./Uploads/Site.jsx"
import ProfilePage from "./Terraform/ProfilePage.jsx"
import StreamView from "./Views/StreamView.jsx"
import MainStreamView from "./Global/MainStreamView.jsx"
import MainStream from "./Views/MainStream.jsx"
import SearchTab from "./Global/SearchTab.jsx"
import HuntLoginPage from "./Auth/HuntLogin.jsx"
import AstroLoginPage from "./Auth/AstroLoginPage.jsx"


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

          <Route path="/alert" element={<AlertApp />} />

          <Route path="/login"  element={<LoginPage />} />
          <Route path="/signup"  element={<SignUpPage />} />

          <Route path="/test" element={<DataTest />} />
          <Route path="/data/:id" element={<ParameterPage />} />

          <Route path="/upload" element={<Upload /> } />
          <Route path="/site" element={<Site />} /> 

          <Route path="/profile" element={<ProfilePage />} />

          <Route path="/view/:id" element={<StreamView />} /> 

          <Route path="/main" element={<MainStreamView />} />
          <Route path="/mainview/:id" element={<MainStream />} />
          <Route path="/search" element={<SearchTab />} />

        {/* Login Pages Starts */}
          <Route path="/hunt" element={<HuntLoginPage />} />
          <Route path="/astro" element={<AstroLoginPage />} />
        {/* Login Pages Ends */}

        </Routes>
      </BrowserRouter>      
  </>
}