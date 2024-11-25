import { useState, useEffect } from "react";

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
        isLoading ? <div>Loading...</div> : <div>Page Loaded</div>
      }
    </>
  )
}

export default App