import { useState } from "react"
import { PlusIcon, EditIcon, MoreIcon } from "../OnBoarding/Icons"
import { auth } from "../../config/firebase"
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
const ProfileActionButton = () => {
    const navigate = useNavigate()
    const [showMoreIconMenu, setShowMoreIconMenu] = useState(false)

    const handleLogOut = async ()=> {
        try {
            await signOut(auth)
            navigate("/")
        } catch(err){ 
            toast.error(err, {position: "bottom-center"})
        }
    }
  return (
    <div className="flex items-center gap-4">
      <PlusIcon className="cursor-pointer" />
      <EditIcon className="cursor-pointer" />  
      <div className="relative h-[25px]">
        <button onClick={()=> setShowMoreIconMenu(!showMoreIconMenu)}><MoreIcon className="cursor-pointer" /></button>
        <div className={showMoreIconMenu ? "absolute right-0 bg-[white] shadow-md py-1 rounded" : "hidden"}>
            <button onClick={handleLogOut} className="text-[11px] hover:bg-[whitesmoke] px-3 py-1">LogOut</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileActionButton