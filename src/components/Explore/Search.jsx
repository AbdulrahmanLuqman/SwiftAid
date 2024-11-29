import { useState } from "react"
import { XCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const Search = () => {
    const [inputValue, setInputValue] = useState("")
  return (
    <form onSubmit={(e)=> e.preventDefault()} className="mx-[20.07px] mt-[20.07px] px-[17px] h-[47px] rounded-[10px] flex items-center justify-between w-full border border-[#A5C339]">
        <div className="flex items-center gap-2 h-full w-full">
            <button><MagnifyingGlassIcon className="text-[#A5C339] w-5 h-5" /></button>
            <input onChange={e=> setInputValue(e.target.value)} type="text" value={inputValue} placeholder="Police station near me" className="h-full w-full outline-none" />
        </div>
        <button onClick={()=> setInputValue("")}><XCircleIcon className="text-[#A5C339] w-5 h-5" /></button>
    </form>
  )
}

export default Search