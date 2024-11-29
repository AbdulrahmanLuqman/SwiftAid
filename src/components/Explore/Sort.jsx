
const Sort = () => {
  return (
    <div className="ml-12 flex gap-4">
        <div className="w-[75px] border border-[#D0C9C9] flex items-center justify-center gap-3 rounded-[4px] cursor-pointer">
            <span className="font-bold text-[10px]">Sort By</span>
            <ArrowDown />
        </div>
        <div className="border border-[#D0C9C9] w-fit px-2 rounded-[4px]">
            <span className="font-bold text-[10px]">Wheelchair-accessible entrance</span>
        </div>
    </div>
  )
}

export default Sort

export const ArrowDown = ()=> {
    return <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.00003 1.24997H7.00003C7.06078 1.25012 7.12032 1.26268 7.17225 1.28632C7.22419 1.30995 7.26654 1.34376 7.29476 1.38411C7.32298 1.42446 7.33599 1.46981 7.3324 1.51529C7.3288 1.56077 7.30874 1.60466 7.27436 1.64222L4.27436 4.89222C4.15003 5.02697 3.8507 5.02697 3.72603 4.89222L0.726028 1.64222C0.691303 1.60474 0.67094 1.56083 0.66715 1.51527C0.663361 1.46972 0.67629 1.42425 0.704533 1.38382C0.732776 1.34339 0.775254 1.30953 0.82735 1.28594C0.879446 1.26234 0.939168 1.2499 1.00003 1.24997Z" fill="black"/>
    </svg>    
}