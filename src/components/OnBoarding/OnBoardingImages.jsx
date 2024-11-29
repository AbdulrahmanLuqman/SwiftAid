import onBoardingImageOne from "../../assets/onboarding.png"
export const OnBoardingImageOne = () => {
  return (
    <div className="flex flex-col items-center px-12 gap-4">
      <img src={onBoardingImageOne} alt="OnBoarding Image"   />
      <div className="px-[20.8px] pt-[6.93px] pb-[41.61px] flex flex-col items-center gap-[42px]">
        <div className="bg-[#E0E0E0] w-[32px] h-[2.4px] rounded-[86px]"></div>
        <div className="space-y-[17.34px]">
          <h2 className="text-center font-semibold text-[22px] text-[#212121] leading-[30.14px]">The Best & Fast Emergency Response App</h2>
          <p className="text-[#616161] text-[13px] text-center font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  )
}
