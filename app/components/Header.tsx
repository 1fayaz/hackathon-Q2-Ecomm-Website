import React from "react";
import Image from "next/image";
import Link from "next/link";


function Header() {
   return (
   <div>
      <div className=" flex w-[1440px] h-[36px] bg-[#f5f5f5] ">
      <div className="flex relative left-[48px] mt-[6px] ">
         
         <Image src='/Logo1.svg' width={24} height={24} alt=""></Image>
      </div>
     <div className="w-[1440px] h-[36px] text-black flex justify-center items-center ">
         <button className=" flex w-[127.06px] h-[16px] text-[13px] font-medium leading-[26px] mt-[5px] left-[10px] justify-center items-center border bg-white ">
         Skip to main content
         </button>
      </div>

      <div className="flex w-[272.81px] h-[36px] gap-[15.38px] left-[1129.19px] text-black ">
         <p className="w-[98.5px] h-[34px] pt-[10px] pr-[6.13px] pb-[10px] pl-[12px] font-[500] text-[11px] leading-[14px]">Find a Store |</p>
         <p className=" w-[51.81px] h-[36px] pt-[11px]  pb-[11px] pl-[12px] font-[500] text-[11px] leading-[14px]">Help |</p>
         <p className=" w-[122.5px] h-[36px] pt-[11px] font-[500] text-[11px] leading-[14px]">Join Us |  Sign In</p>
         
      </div>
     
    </div>

    <div className="flex bg-white w-[1440px] h-[60px] top-[36px]">
      <div className="flex w-[78.47px] h-[78.47px] ">
         <Image src='Logo2.svg' width={58.85} height={20.54} alt="" className="flex top-[-8.74px] left-[38.26px]"/>
            
         
      <div className=" w-[1211px] h-[60px] justify-center items-center mt-[18px] text-[black]  relative left-[107px]">
       <Link className="p-8" href='/New&Featured' >New&Featured</Link>
       <Link className="p-8" href='/Men'>Men</Link>
       <Link className="p-8" href='/Women'>Women</Link>
       <Link className="p-8" href='/Kids'>Kids</Link>
       <Link className="p-8" href='/Sale'>Sale</Link>
       <Link className="p-8" href='/SNKRS'>SNKRS</Link>

       <div className="flex w-[180px] h-[40px]  justify-items-center rounded-[100px] mx-[1011px] top-[30px]  bg-[#f5f5f5] text-[15px]">
         <div className=" flex w-[84px] h-[18px] top-[11px] left-[48px] ">

       {/* <div className="flex w-[40px] h-[36px] top-[2px] left-[2px] rounded-[100px] "> */}
         <button className="flex w-[50.9px] h-[17px] items-center font-[500px] text-[15px] leading-[18.31px] font-[Helvetica Neue]">Search</button>

         <div className="w-[40px] h-[36px] top-[2px] left-[2px] rounded-[100px] pt-[6px] pr-[8px] pb-[6px] pl-[8px]">
         <Image className="" src='search.svg' width={24} height={24} alt=""></Image>
       </div>
        <div className="w-[84px] h-[60px] left-[1318px] pt-[12px] pb-[12px] gap-[12px]">
         <div className="w-[36px] h-[36px] rounded-[100px] p-[6px]">
            <Image src='/heart.svg' width={24} height={24} alt=""></Image>

         </div>
         <div className="w-[36px] h-[36px] rounded-[100px] p-[6px]">
            <Image src='/bag.svg' width={24} height={24} alt=""></Image>
         </div>


        </div>
         </div>
         {/* </div> */}


             </div>

          </div>

         </div>
         
      </div>
      <section className="flex w-[1440px] h-[58px] bg-[#f5f5f5] shadow-[#e5e5e5]  ">
         <div className="w-[1440px] h-[44px] top-[10px] justify-center items-center">
            <div className="w-[105.15px] h-[17px] top-[-1px] left-[667.52px]">
               <div className="font-[Helvetica Neue] font-[500px] text-[15px] leading-[16px] text-center">
               Hello Nike App
               </div>

            </div>
            <div className="w-[323.53px] h-[24px] top-[19px] left-[558.23px] pr-[11.53px] pl-[11px]">
               <div className="w-[301px] h-[24px] font-[400] text-[11px] leading-[24px] text-center">
               Download the app to access everything Nike. <span className="underline underline-offset-2 font-bold">Get Your Great</span>
               </div>

            </div>

         </div>

      </section>
   
   </div>

 )
}

export default Header;