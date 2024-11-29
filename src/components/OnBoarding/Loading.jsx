import logo from "../../assets/logo.png"
import { WhiteSpinner } from "./Icons"

const Loading = () => {
  return (
    <div className="bg-[#A5C339] h-screen w-screen flex flex-col justify-end items-center gap-60 py-12">
        <img src={logo} alt="logo" />
        <div className="animate-spin w-fit"><WhiteSpinner /></div>
    </div>
  )
}

export default Loading