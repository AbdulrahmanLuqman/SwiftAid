import { useState, useEffect } from "react";
const OnBoarding = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        if(document.readyState === 'complete'){
            setIsLoading(false)
        } else {
            const handleIsLoading = ()=> {
                setIsLoading(false)
            }

            window.addEventListener("load", handleIsLoading)

            return ()=> {
                window.removeEventListener("load", handleIsLoading)
            }
        }
    
    }, [])
    // console.log(document.readyState)
  return (
    <div>
        {
             isLoading ? <div>Loading...</div> : <div>Page Loaded</div>
        }
    </div>
  )
}

export default OnBoarding