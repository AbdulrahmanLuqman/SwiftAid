import { ArrowLeftIcon, UserIcon, PencilIcon } from "@heroicons/react/24/solid"
import { EnvelopeIcon } from "@heroicons/react/24/outline"

import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../../config/firebase"
// import { auth } from "../../config/firebase"
// import { storage, auth, db } from "../../config/firebase"
// import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"

import { useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const EditProfile = () => {
  const navigate = useNavigate()
  // const [getImage, setGetImage] = useState("")
  const [profile, setProfile] = useState(
    {
      profilePicture: "",
      fullName: "",
      userName: "",
      // date: "",
      contactEmail: "",
      phoneNumber: "",
      occupation: ""
    }
  )
  // const uploadImageToDatabase = async (file )=> {
  //   if(!file) toast.error("No image selected", {position: "top-center"})
    
  //   try {
  //     const storageRef = ref(storage, `profilePictures/${auth?.currentUser?.uid}/${file.name}`)

  //     await uploadBytes(storageRef, file)

  //     const downloadUrl = await getDownloadURL(storageRef)

  //     if(profile.profilePicture){
  //       const oldImageRef = ref(storage, profile.profilePicture)
  //       await deleteObject(oldImageRef)
  //     }

  //     await updateDoc(doc(db, "User", auth?.currentUser?.uid), {
  //       profilePicture: downloadUrl
  //     })

  //     setProfile({...profile, profilePicture: downloadUrl})

  //     toast.success("Image Uploaded Succesfully", {position: "top-center"})

  //   } catch(err){
  //     console.log(err.code, {position: "bottom-center"})
  //   }
  // }

  // const handleImage = (e)=> {
  //   const file = e.target.files[0]

  //   if(file){
  //     setGetImage(file)
  //     uploadImageToDatabase(file)
  //   }
  // }
  const handleChange = (e)=> {
    const { name, value } = e.target

    setProfile((prev) => ({...prev, [name]: value}))

    // console.log(profile)
  }
  const handleSubmit = async (e)=> {
    e.preventDefault()
    try {
      await setDoc(doc(db, "User", auth?.currentUser?.uid), {
        ...profile
      }, {merge: true})

      toast.success("Profile Updated Succesfully", {position: "top-center"})

      navigate("/profile")
    } catch(err) {
      console.log(err.code)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="px-[20.07px] pt-[20.07px] pb-[40.15px] space-y-6">
      <div className="flex items-center gap-[13px]">
        <ArrowLeftIcon className="w-4 h-4" />
        <h2 className="font-bold text-[19.91px] text-[#212121] w-[250px] max-[250px]:w-full">Fill Your Profile</h2>
      </div>
      <div>
        <div className="bg-[#FAFAFA] rounded-[50%] w-32 h-32 flex justify-center items-end relative">
          <UserIcon className="w-20 h-20 text-gray-300"/>
          <div className="bg-[#A5C339] rounded absolute p-1 right-[10px]">
            <label htmlFor="getImage"><PencilIcon className="text-white w-4 h-4"/></label>
            <input type="file" id="getImage" accept=".jpg, .png" className="hidden" />
          </div>
        </div>
      </div>
      <div className="w-full h-[50.19px] bg-[#FAFAFA] px-[16.73px] rounded-[10px]">
        <input onChange={handleChange} name="fullName" value={profile.fullName} type="text" placeholder="Full Name" className="placeholder:text-[#9E9E9E] placeholder:font-normal placeholder:text-[12.07px] font-semibold text-[11.71px] outline-none w-full h-full bg-transparent" />
      </div>
      <div className="w-full h-[50.19px] bg-[#FAFAFA] px-[16.73px] rounded-[10px]">
        <input onChange={handleChange} name="userName" value={profile.userName}  type="text" placeholder="UserName" className="placeholder:text-[#9E9E9E] placeholder:font-normal placeholder:text-[12.07px] font-semibold text-[11.71px] outline-none w-full h-full bg-transparent" />
      </div>
      <div className="w-full h-[50.19px] bg-[#FAFAFA] px-[16.73px] rounded-[10px]">
        <input type="date" className="text-[11.71px] outline-none w-full h-full bg-transparent" />
      </div>
      <div className="w-full h-[50.19px] bg-[#FAFAFA] px-[16.73px] rounded-[10px] flex justify-between items-center">
        <input onChange={handleChange} name="contactEmail" value={profile.contactEmail}  type="text" id="email" placeholder="Email" className="placeholder:text-[#9E9E9E] placeholder:font-normal placeholder:text-[12.07px] text-[11.71px] outline-none w-full h-full bg-transparent" />
        <label htmlFor="email"><EnvelopeIcon className="w-4 h-4"/></label>
      </div>
      <div className="w-full h-[50.19px] bg-[#FAFAFA] px-[16.73px] rounded-[10px]">
        <input onChange={handleChange} name="phoneNumber" value={profile.phoneNumber}  type="number" placeholder="Phone Number" className="text-[11.71px] outline-none w-full h-full bg-transparent" />
      </div>
      <div className="w-full h-[50.19px] bg-[#FAFAFA] px-[16.73px] rounded-[10px]">
        <input onChange={handleChange} name="occupation" value={profile.occupation}  type="text" placeholder="Occupation" className="placeholder:text-[#9E9E9E] placeholder:font-normal placeholder:text-[12.07px] text-[11.71px] outline-none w-full h-full bg-transparent" />
      </div>
      <button className="bg-[#A5C339] w-full py-[15.6px] px-[13.87px] text-[#FFFFFF] text-center text-[13.87px] font-bold rounded-[73.87px]">Continue</button>
    </form>
  )
}

export default EditProfile