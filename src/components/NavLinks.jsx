import { Link } from "react-router-dom"
import { HomeIcon, MagnifyingGlassIcon, VideoCameraIcon, PlusIcon } from "@heroicons/react/24/outline"
import { UserIcon } from "@heroicons/react/24/solid"
import { useLocation } from "react-router-dom"

const NavLinks = () => {
    const location = useLocation()
    const links = [
        {
            icon: <HomeIcon className="w-5 h-5" />,
            title: "Home",
            link: "/",
        },
        {
            icon: <MagnifyingGlassIcon className="w-5 h-5" />,
            title: "Search",
            link: "/explore",
        },
        {
            icon: <PlusIcon className="w-4 h-4 text-white" />,
            title: null,
            link: "/",
        },
        {
            icon: <VideoCameraIcon className="w-5 h-5" />,
            title: "Shorts",
            link: "/",
        },
        {
            icon: <UserIcon className="w-5 h-5" />,
            title: "Profile",
            link: "/profile",
        }
    ]
  return (
    <nav className="fixed w-full max-w-[400px] bottom-0 px-[28.04px] pt-[7px] bg-white">
        <ul className="flex justify-between">
            {links.map((link, id) => <li key={id}>
                <Link to={link.link} className={`w-fit flex flex-col items-center gap-[1px] ${location.pathname === link.link ? "text-[#A5C339]" : "text-[#9E9E9E]"}`}>
                    <span className={link.title === null ? "bg-[#A5C339] rounded-[50%] p-2 cursor-pointer" : ""}>{link.icon}</span>
                    <span className="text-[8.78px] font-medium">{link.title}</span>
                </Link>
            </li>)}
        </ul>
    </nav>
    // <nav >
    //     <ul >
    //         <li>
    //             <Link >
    //                 
    //                 <span>Home</span>
    //             </Link>
    //         </li>
    //         <li>
    //             <Link className="w-fit flex flex-col items-center gap-[1px] text-[#9E9E9E]">
    //                 
    //                 <span className="text-[8.78px] font-medium">Search</span>
    //             </Link>
    //         </li>
    //         <li className="">
    //             
    //         </li>
    //         <li>
    //             <Link className="w-fit flex flex-col items-center gap-[1px] text-[#9E9E9E]">
    //                 
    //                 <span className="text-[8.78px] font-medium">Shorts</span>
    //             </Link>
    //         </li>
    //         <li>
    //             <Link className="w-fit flex flex-col items-center gap-[1px] text-[#9E9E9E]">
    //                 
    //                 <span className="text-[8.78px] font-medium">Profile</span>
    //             </Link>
    //         </li>
    //     </ul>
    // </nav>
  )
}

export default NavLinks