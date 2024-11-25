import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import OnBoarding from "./views/OnBoarding";

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=> {
    const handleIsLoading = ()=> {
      setIsLoading(false)
    }

    window.addEventListener("load", handleIsLoading)
    

    return ()=> {
      window.removeEventListener("load", handleIsLoading)
    }
  }, [])
  return (
    <>
      {
        isLoading ? <div>Loading...</div> : 
        <main>
          <Routes>
            <Route path="/" element={<OnBoarding />} />
          </Routes>
        </main>
      }
    </>
  )
}

export default App