import { Routes, Route, useLocation } from "react-router-dom";
import OnBoarding from "./views/OnBoarding";
import SignUp from "./views/SignUp";
import EditProfile from "./components/Profile/EditProfile";
import Profile from "./components/Profile/Profile";
import MainApp from "./views/MainApp";
import NavLinks from "./components/NavLinks";
import Donate from "./views/Donate";
import FileComplain from "./views/FileComplain";
import Explore from "./views/Explore";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { auth } from "./config/firebase";
import { useEffect } from "react";
import SignIn from "./views/SignIn";

// yo, dnt forget to add their font sizes before submitting
// dnt forget to useReducer to pass user across all pages

const App = () => {
  const location = useLocation()
  const routeWithNavs = ["/profile", "/shorts", "/explore"]
  const showNavs = routeWithNavs.includes(location.pathname)
  const [user, setUser] = useState()

  useEffect(()=> {
    auth.onAuthStateChanged((user)=> {
      setUser(user)
    })
  })

  // console.log(location)
  return (
    <>
        <main className="max-w-[400px] mx-auto">
        <ToastContainer />
          <Routes>
            <Route path="/" element={user ? <MainApp /> : <OnBoarding />} />
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />}/>
            {/* <Route path="/home" element={<MainApp />} /> */}
            <Route path="/donate" element={<Donate />} />
            <Route path="/file-complain" element={<FileComplain />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
          {showNavs && <NavLinks />}
        </main>
    </>
  )
}
// https://restcountries.com/v3.1/all

export default App