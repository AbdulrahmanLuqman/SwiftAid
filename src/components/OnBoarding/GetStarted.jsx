import { Link } from "react-router-dom"
import image from "../../assets/get-started.png"
import { Facebook, Google, Apple } from "./Icons"
const GetStarted = () => {
  return (
    <div className="flex gap-4 flex-col items-center px-[20.24px] pt-[20.24px] pb-[40.49px]">
        <img src={image} alt="Get Started Image" />
        <h2 className="font-bold text-[30px] text-[#212121] text-center leading-8 w-[200px]">Get started with SwiftAid</h2>
        <div className="w-full flex flex-col gap-[20.76px] items-center">
            <div className="flex flex-col gap-[13.84px] items-center w-full">
                <button className="flex gap-[10.38px] py-[15.57px]">
                    <Facebook />
                    <span>Continue with Facebook</span>
                </button>              
                <button className="flex gap-[10.38px] py-[15.57px]">
                    <Google />
                    <span>Continue with Google</span>
                </button>
                <button className="flex gap-[10.38px] py-[15.57px]">
                    <Apple />
                    <span>Continue with Apple</span>
                </button>
            </div>
            <span className="text-[15.57px] text-[#616161] font-semibold">Or</span>
            <div className="w-full mx-auto max-[397px]:w-full px-[20.8px]">
              <button className="bg-[#A5C339] w-full max-[397px]:w-full py-[15.6px] px-[13.87px] text-[#FFFFFF] text-center text-[13.87px] font-bold rounded-[73.87px]"><Link to="/signin">Sign in with password</Link></button>
            </div>
        </div>
        <div className="space-x-[6.75px] text-[11.81px]">
            <span className="text-[#9E9E9E] font-normal">Don’t have an account? </span>
            <span className="text-[#A5C339] font-semibold"><Link to="/signup">Sign up</Link></span>
        </div>
    </div>
  )
}

export default GetStarted