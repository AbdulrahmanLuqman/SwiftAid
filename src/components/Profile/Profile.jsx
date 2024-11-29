import { useEffect, useState } from "react"
import { UserIcon, PencilIcon, VideoCameraIcon, Squares2X2Icon, UserGroupIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"
import ProfileActionButton from "./ProfileActionButton"
import { auth, db } from "../../config/firebase"
import { getDoc, doc } from "firebase/firestore"

const Profile = () => {
  // const [getImage, setGetImage] = useState(null)
  const [userData, setUserData] = useState(null)
  const [cases, setCases] = useState([
    {
      number: 297,
      title: "Reviews"
    },
    {
      number: 356,
      title: "Reported Cases"
    },
    {
      number: 208,
      title: "Solved cases"
    }]
  )
  const [activities, etActivities] = useState(
    [
      {
        image: <UserIcon className="w-10 h-10"/>,
        title: "Hangout"
      },
      {
        image: <UserIcon className="w-10 h-10"/>,
        title: "Night"
      },
      {
        image: <UserIcon className="w-10 h-10"/>,
        title: "Friends"
      },
      {
        image: <UserIcon className="w-10 h-10"/>,
        title: "Football"
      },
      {
        image: <UserIcon className="w-10 h-10"/>,
        title: "Hangout"
      },
      {
        image: <UserIcon className="w-10 h-10"/>,
        title: "Night"
      },
      {
        image: <UserIcon className="w-10 h-10"/>,
        title: "Friends"
      },
      {
        image: <UserIcon className="w-10 h-10"/>,
        title: "Football"
      }
    ]
  )
  const fetchUserName = async (docId)=> {
    try {
      const docRef = doc(db, "User", docId)
      const docSnap = await getDoc(docRef)
      
      if(docSnap.exists()) {
        const data = docSnap.data()

        return {
          userName: data.userName
        }
      }
      else {
        console.log("No such object")
        return null;
      }

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(()=> {
    const fetchData = async ()=> {
      const data = await fetchUserName(auth?.currentUser?.uid)
      setUserData(data.userName)

      console.log(data.userName)
    }
    fetchData()
  }, [])
  return (
    <div className="px-[20.07px] pt-[20.07px] pb-[40.15px] flex flex-col gap-6 items-center">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <span className="text-[#212121] font-bold">{userData === "" ? "Name" : userData}</span>
          <ArrowDown className="cursor-pointer" />
        </div>
        <ProfileActionButton />
      </div>

      <div className="flex flex-col gap-1 items-center">
        <div className="bg-[#FAFAFA] rounded-[50%] w-32 h-32 flex justify-center items-end relative">
            <UserIcon className="w-20 h-20 text-gray-300"/>
            <div className="bg-[#A5C339] rounded absolute p-1 right-[10px] cursor-pointer">
              <label htmlFor="getImage"><PencilIcon className="text-white w-4 h-4 cursor-pointer"/></label>
              <input type="file" id="getImage" accept=".jpg, .png" className="hidden" />
            </div>
        </div>
        <span className="text-[#212121] font-bold">{userData}</span>
      </div>

      <div className="flex flex-col gap-1 items-center text-[12.04px]">
        <h3 className="text-[#212121] font-semibold">Change Maker</h3>
        <p className="text-center text-[#424242]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <button className="text-[#246BFD] font-bold"><a href="#">www.warf.com</a></button>
      </div>

      <div className="flex justify-center flex-wrap gap-3 w-full border-b pb-6">
        {
          cases.map(aCase => <div key={aCase.number} className={`flex flex-col items-center gap-[3.44px] px-4 ${aCase.title === "Reported Cases" ? "border-x" : ""}`}>
            <h3 className="text-[#212121] text-[20px] font-bold">{aCase.number}</h3>
            <span className="text-[#424242] text-[12px]">{aCase.title}</span>
          </div>)
        }
      </div>

      <div className="w-full flex justify-between">
        <Link to="/donate">
          <button className="text-[10px] font-semibold bg-[#E5E6E2] w-[83px] py-1 rounded-[40px]">Donate</button>
        </Link>
        <Link to="/file-complain">
          <button className="text-[10px] text-white font-semibold bg-[#A5C339] w-[83px] py-1 rounded-[40px]">File Complain</button>
        </Link>
        <Link>
          <button className="text-[10px] text-white font-semibold bg-[#A5C339] w-[83px] py-1 rounded-[40px]">Verify</button>
        </Link>
      </div>

      <div className="text-[10px] bg-[#E5E6E2] rounded-[40px] w-full py-2 px-5">
        <h3 className="font-semibold">Find a nearby Hopital & Police Station</h3>
        <p>Report and emergency in a nearby help center</p>
      </div>

      <div className="w-full flex gap-[10px] overflow-auto pb-4">
        <div className="flex flex-col items-center">
          <div className="cursor-pointer w-[68px] h-[68px] rounded-[50%] bg-[#A5C339] flex items-center justify-center"><WhitePlusIcon /></div>
          <h4 className="font-semibold text-[#212121] text-[12px]">Add</h4>
        </div>
        {
          activities.map(activity => <div key={activity.title} className="flex flex-col items-center">
            <div className="w-[68px] h-[68px] rounded-[50%] border-2 border-[#A5C339] flex items-center justify-center">{activity.image}</div>
            <h4 className="font-semibold text-[#212121] text-[12px]">{activity.title}</h4>
          </div>)
        }
      </div>

      <div className="w-full pb-6">
        <div className="border-b flex justify-between w-full px-6">
          <h3 className="flex items-center gap-[6px] relative pb-3 cursor-pointer">
            <Squares2X2Icon className="text-[#A5C339] w-5 h-5"/>
            <span className="text-[13.76px] font-semibold text-[#A5C339]">Feeds</span>
            <div className="bg-[#A5C339] w-full h-1 rounded-[20px] absolute bottom-[-2.7px]"></div>
          </h3>
          <h3 className="flex items-center gap-[6px] relative pb-3 cursor-pointer">
            <VideoCameraIcon className="text-[#A5C339] w-5 h-5"/>
            <span className="text-[13.76px] font-semibold text-[#A5C339]">Shorts</span>
            {/* <div className="bg-[#A5C339] w-full h-1 rounded-[20px] absolute bottom-[-2.7px]"></div> */}
          </h3>
          <h3 className="flex items-center gap-[6px] relative pb-3 cursor-pointer">
            <UserGroupIcon className="text-[#A5C339] w-5 h-5"/>
            <span className="text-[13.76px] font-semibold text-[#A5C339]">Tab View</span>
            {/* <div className="bg-[#A5C339] w-full h-1 rounded-[20px] absolute bottom-[-2.7px]"></div> */}
          </h3>
          {/* <h3>
            <VideoCameraIcon />
            <span>Shorts</span>
          </h3>
          <h3>
            <UserGroupIcon />
            <span>Shorts</span>
          </h3> */}
        </div>
        
        <div></div>
      </div>
    </div>
  )
}

export default Profile

export const ArrowDown = ()=> {
  return <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.0531 6.12769L9.03755 11.1433L4.02197 6.12769" stroke="#212121" stroke-width="1.05523" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
}

export const WhitePlusIcon = ()=> {
  return <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5982 2.94621H19.2943C23.1921 2.94621 25.4161 5.14733 25.4161 9.05662V19.7642C25.4161 23.6505 23.2036 25.8746 19.3057 25.8746H8.5982C4.68891 25.8746 2.48779 23.6505 2.48779 19.7642V9.05662C2.48779 5.14733 4.68891 2.94621 8.5982 2.94621ZM14.8924 15.3619H18.1482C18.6756 15.3505 19.0997 14.9263 19.0997 14.3989C19.0997 13.8716 18.6756 13.4474 18.1482 13.4474H14.8924V10.2145C14.8924 9.68715 14.4682 9.26297 13.9409 9.26297C13.4135 9.26297 12.9893 9.68715 12.9893 10.2145V13.4474H9.74497C9.49276 13.4474 9.25201 13.5506 9.06858 13.7225C8.89662 13.906 8.79344 14.1456 8.79344 14.3989C8.79344 14.9263 9.21762 15.3505 9.74497 15.3619H12.9893V18.6063C12.9893 19.1336 13.4135 19.5578 13.9409 19.5578C14.4682 19.5578 14.8924 19.1336 14.8924 18.6063V15.3619Z" fill="white"/>
  </svg>
}

export const Feeds = ()=> {
  return <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.38271 1.45017H5.32015C6.12838 1.45017 6.7761 2.10936 6.7761 2.91816V4.87223C6.7761 5.68618 6.12838 6.33964 5.32015 6.33964H3.38271C2.58022 6.33964 1.92676 5.68618 1.92676 4.87223V2.91816C1.92676 2.10936 2.58022 1.45017 3.38271 1.45017ZM3.38274 8.02471H5.32018C6.12841 8.02471 6.77613 8.67874 6.77613 9.49269V11.4468C6.77613 12.255 6.12841 12.9142 5.32018 12.9142H3.38274C2.58024 12.9142 1.92679 12.255 1.92679 11.4468V9.49269C1.92679 8.67874 2.58024 8.02471 3.38274 8.02471ZM11.935 1.45017H9.99759C9.18936 1.45017 8.54164 2.10936 8.54164 2.91816V4.87223C8.54164 5.68618 9.18936 6.33964 9.99759 6.33964H11.935C12.7375 6.33964 13.391 5.68618 13.391 4.87223V2.91816C13.391 2.10936 12.7375 1.45017 11.935 1.45017ZM9.99759 8.02471H11.935C12.7375 8.02471 13.391 8.67874 13.391 9.49269V11.4468C13.391 12.255 12.7375 12.9142 11.935 12.9142H9.99759C9.18936 12.9142 8.54164 12.255 8.54164 11.4468V9.49269C8.54164 8.67874 9.18936 8.02471 9.99759 8.02471Z" fill="#A5C339"/>
  </svg>
  
}