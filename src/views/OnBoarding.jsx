import { useState, useEffect } from "react";
import OnBoardingPage from "../components/OnBoarding/OnBoardingPage";
import Loading from "../components/OnBoarding/Loading";
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
             isLoading 
             ? 
             <div><Loading /></div> 
             : 
             <div>
                <OnBoardingPage />
             </div>
        }
    </div>
  )
}

export default OnBoarding