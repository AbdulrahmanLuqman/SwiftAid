import { ArrowLeftIcon ,EyeIcon,EyeSlashIcon } from "@heroicons/react/24/solid"
// import { useState } from "react"
import divider from "../../assets/divider.png"
import { Apple, Facebook, Google } from "../OnBoarding/Icons"
import { Link } from "react-router-dom"
import { auth } from "../../config/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"



  const SignInForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(
      {
        email: "",
        password: ""
      }
    )
    const handleChange = (e)=> {
      const {name, value} = e.target

      setFormData((prev)=> ({...prev, [name]: value}))
    }

      // const validateEmailAndPassword = (email, password) => {

      //   if () {
      //     return { isValid: false, message: "User cannot be found, Pls create an account" }
      //   }

      //   if(password != auth?.currentUser?.password) {
      //     return { isValid: false, message: "password is incorrect" }
      //   }

      //   return { isValid: true }
      // }

    const handleSubmit = async (e)=> {
      e.preventDefault()

      try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password)

        toast.success("User successfully login", {position: "top-center"})
        navigate("/")
      } catch(err) {
        console.log(err)
        if (err.code === "auth/invalid-credential") {
          toast.error("Email or Password is incorrect", { position: "top-center" })
        } else {
          // Catch-all for other errors
          toast.error("Something went wrong: " + err.message, { position: "bottom-center" });
        }
      }

    }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-[20.07px] pt-[20.07px] pb-[40.15px]">
      <ArrowLeftIcon className="w-4 h-4" />
      <h2 className="font-bold text-[33.46px] text-[#212121] w-[250px] max-[250px]:w-full">Login</h2>
      <div className="flex flex-col gap-[26.77px]">
        <div className="w-full h-[50.19px] bg-[#FAFAFA] px-[16.73px] rounded-[10px] flex items-center gap-[10px]">
          <label htmlFor="email"><Email /></label>
          <input onChange={handleChange} value={formData.email} name="email" id="email" placeholder="Nidaniaz@domain.com" type="text" className="font-semibold text-[11.71px] outline-none w-full h-full bg-transparent placeholder:text-[#212121]" />
        </div>
        <div className="w-full h-[50.19px] bg-[#FAFAFA] px-[16.73px] rounded-[10px] flex items-center justify-between">
          <div className="flex items-center gap-[10px] w-full h-full">
            <label htmlFor="password"><Password /></label>
            <input onChange={handleChange} value={formData.password} name="password" id="password" placeholder="********" type="password" className="font-semibold text-[11.71px] outline-none w-full h-full bg-transparent placeholder:text-[#212121]" />
          </div>
          {/* {!showPassword ? <EyeSlashIcon onClick={()=> setShowPassword(true)} className="w-4 h-4 cursor-pointer" /> : <EyeIcon onClick={()=> setShowPassword(false)} className="w-4 h-4 cursor-pointer" />} */}
        </div>

        <button className="bg-[#A5C339] w-full py-[15.6px] px-[13.87px] text-[#FFFFFF] text-center text-[13.87px] font-bold rounded-[73.87px]">Sign In</button>
      </div>
      
      <div className="flex flex-col gap-4 items-center">
        <div className="flex items-center gap-3">
          <img src={divider} alt="divider" />
          <span className="text-[#616161] text-[15px] font-semibold">or continue with</span>
          <img src={divider} alt="divider" />
        </div>
        <div className="flex gap-4">
          <div className="border-[0.84px] border-[#EEEEEE] rounded-[13.38px] px-[26.77px] py-[15.06px] w-fit"><Facebook /></div>
          <div className="border-[0.84px] border-[#EEEEEE] rounded-[13.38px] px-[26.77px] py-[15.06px] w-fit"><Google /></div>
          <div className="border-[0.84px] border-[#EEEEEE] rounded-[13.38px] px-[26.77px] py-[15.06px] w-fit"><Apple /></div>
        </div>
      </div>

      <div className="flex justify-center gap-[6.75px] text-[11.81px]">
        <span className="text-[#9E9E9E] font-normal">Already have an account? </span>
        <span className="text-[#8C5EB9] font-semibold"><Link to="/signin">Sign in</Link></span>
      </div>
    </form>
  )
}

export const Email = ()=> {
  return <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6113 0.172913C11.5461 0.172913 12.4452 0.542344 13.1067 1.20523C13.7689 1.86672 14.1391 2.75893 14.1391 3.69297V9.19959C14.1391 11.1443 12.5568 12.7196 10.6113 12.7196H3.72527C1.77983 12.7196 0.198242 11.1443 0.198242 9.19959V3.69297C0.198242 1.74822 1.77286 0.172913 3.72527 0.172913H10.6113ZM11.7201 4.73153L11.7758 4.67577C11.9424 4.47362 11.9424 4.18087 11.7682 3.97872C11.6713 3.87487 11.5381 3.81143 11.3994 3.79749C11.253 3.78983 11.1136 3.83932 11.0084 3.9369L7.86543 6.44625C7.46115 6.78152 6.88191 6.78152 6.47135 6.44625L3.33467 3.9369C3.11789 3.77658 2.81816 3.79749 2.63763 3.9857C2.44942 4.1739 2.42851 4.47362 2.58814 4.68274L2.67945 4.77335L5.85098 7.24784C6.24132 7.55454 6.71462 7.72183 7.21021 7.72183C7.70441 7.72183 8.18607 7.55454 8.57571 7.24784L11.7201 4.73153Z" fill="#212121"/>
  </svg>
}

export const AccountType = ()=> {
  return <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.7166 6.24314C14.2496 5.72733 13.5456 5.4276 12.5697 5.32305V4.7933C12.5697 3.83835 12.1655 2.91826 11.4545 2.27698C10.7365 1.62176 9.80249 1.31506 8.8336 1.40568C7.16767 1.566 5.76662 3.17616 5.76662 4.91876V5.32305C4.79077 5.4276 4.08676 5.72733 3.61974 6.24314C2.94361 6.99594 2.96452 7.99968 3.0412 8.69672L3.52912 12.5792C3.6755 13.9385 4.22616 15.3325 7.22344 15.3325H11.1129C14.1102 15.3325 14.6609 13.9385 14.8072 12.5862L15.2952 8.68975C15.3718 7.99968 15.3928 6.99594 14.7166 6.24314ZM8.93119 2.37457C9.62823 2.31183 10.2904 2.52791 10.8062 2.99493C11.3151 3.45498 11.6009 4.1102 11.6009 4.7933V5.28122H6.73551V4.91876C6.73551 3.67803 7.76016 2.48609 8.93119 2.37457ZM9.16818 12.9487C7.71137 12.9487 6.5264 11.7637 6.5264 10.3069C6.5264 8.85007 7.71137 7.6651 9.16818 7.6651C10.625 7.6651 11.81 8.85007 11.81 10.3069C11.81 11.7637 10.625 12.9487 9.16818 12.9487Z" fill="#151B33"/>
  <path d="M10.2835 10.6694L9.91407 10.2999L10.2626 9.95142C10.4647 9.74928 10.4647 9.4147 10.2626 9.21256C10.0605 9.01042 9.72587 9.01042 9.52373 9.21256L9.17521 9.56108L8.80578 9.19165C8.60364 8.9895 8.26906 8.9895 8.06691 9.19165C7.86477 9.39379 7.86477 9.72837 8.06691 9.93051L8.43635 10.2999L8.05297 10.6833C7.85083 10.8855 7.85083 11.22 8.05297 11.4222C8.15753 11.5267 8.28997 11.5755 8.42241 11.5755C8.55484 11.5755 8.68728 11.5267 8.79184 11.4222L9.17521 11.0388L9.54464 11.4082C9.6492 11.5128 9.78163 11.5616 9.91407 11.5616C10.0465 11.5616 10.1789 11.5128 10.2835 11.4082C10.4856 11.2061 10.4856 10.8785 10.2835 10.6694Z" fill="#151B33"/>
  </svg>  
}

export const Number = ()=> {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.50597 11.3343L7.21645 12.6238C6.9446 12.8957 6.51243 12.8957 6.23362 12.6308C6.15694 12.5541 6.08027 12.4844 6.0036 12.4077C5.28564 11.6828 4.6374 10.923 4.05885 10.1284C3.48728 9.33379 3.02723 8.53916 2.69265 7.7515C2.36504 6.95688 2.19775 6.1971 2.19775 5.47218C2.19775 4.99819 2.2814 4.54512 2.44869 4.12689C2.61598 3.7017 2.88085 3.31136 3.25029 2.96284C3.69639 2.5237 4.18432 2.30762 4.70013 2.30762C4.8953 2.30762 5.09047 2.34944 5.26473 2.43308C5.44596 2.51673 5.60628 2.6422 5.73175 2.82343L7.34888 5.10275C7.47435 5.27701 7.56497 5.43733 7.6277 5.59068C7.69043 5.73706 7.72529 5.88344 7.72529 6.01587C7.72529 6.18316 7.67649 6.35045 7.57891 6.51077C7.48829 6.67109 7.35585 6.83838 7.18856 7.00567L6.65881 7.55633C6.58214 7.63301 6.54729 7.72362 6.54729 7.83515C6.54729 7.89091 6.55426 7.9397 6.5682 7.99547C6.58911 8.05123 6.61002 8.09305 6.62396 8.13488C6.74943 8.3649 6.96551 8.66463 7.27221 9.02709C7.58588 9.38955 7.92046 9.75898 8.28292 10.1284C8.35262 10.1981 8.4293 10.2678 8.499 10.3375C8.77782 10.6094 8.78479 11.0555 8.50597 11.3343Z" fill="#151B33"/>
  <path d="M16.1175 13.6903C16.1175 13.8855 16.0827 14.0876 16.013 14.2828C15.992 14.3386 15.9711 14.3943 15.9432 14.4501C15.8248 14.701 15.6714 14.938 15.4693 15.1611C15.1277 15.5375 14.7513 15.8093 14.3261 15.9836C14.3191 15.9836 14.3122 15.9905 14.3052 15.9905C13.8939 16.1578 13.4478 16.2485 12.9669 16.2485C12.2559 16.2485 11.4961 16.0812 10.6945 15.7396C9.89294 15.3981 9.09134 14.938 8.29671 14.3595C8.02487 14.1573 7.75302 13.9552 7.49512 13.7391L9.77444 11.4598C9.96961 11.6062 10.1439 11.7177 10.2902 11.7944C10.3251 11.8083 10.3669 11.8292 10.4157 11.8501C10.4715 11.871 10.5272 11.878 10.59 11.878C10.7085 11.878 10.7991 11.8362 10.8758 11.7595L11.4055 11.2367C11.5798 11.0625 11.7471 10.93 11.9074 10.8464C12.0677 10.7488 12.228 10.7 12.4023 10.7C12.5347 10.7 12.6741 10.7279 12.8275 10.7906C12.9808 10.8534 13.1411 10.944 13.3154 11.0625L15.6226 12.7005C15.8038 12.826 15.9293 12.9724 16.006 13.1466C16.0757 13.3209 16.1175 13.4951 16.1175 13.6903Z" fill="#151B33"/>
  </svg>  
}

export const Password = ()=> {
  return <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0176 3.98471V5.05351C11.2181 5.42825 12.0929 6.51506 12.0929 7.81314V11.2544C12.0929 12.8614 10.7606 14.1643 9.11804 14.1643H3.21869C1.57546 14.1643 0.243164 12.8614 0.243164 11.2544V7.81314C0.243164 6.51506 1.11861 5.42825 2.31845 5.05351V3.98471C2.32554 1.90668 4.04668 0.22348 6.15738 0.22348C8.29642 0.22348 10.0176 1.90668 10.0176 3.98471ZM6.17153 1.43566C7.60936 1.43566 8.77804 2.57858 8.77804 3.98472V4.9032H3.55794V3.97086C3.56502 2.57165 4.7337 1.43566 6.17153 1.43566ZM6.78769 10.2992C6.78769 10.6386 6.51145 10.9087 6.16439 10.9087C5.82441 10.9087 5.54818 10.6386 5.54818 10.2992V8.76143C5.54818 8.42895 5.82441 8.1588 6.16439 8.1588C6.51145 8.1588 6.78769 8.42895 6.78769 8.76143V10.2992Z" fill="#A5C339"/>
  </svg>
  
}

export default SignInForm