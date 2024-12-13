import React from "react";
import Image from "next/image";
import Link from "next/link";

function Login (){
   return (
     <div>
      <div className="w-[1440px] h-[966px] top-[-11394px] left-[-9697px] bg-[#ffff]">
         <div className="w-[380px] h-[489px] top-[96px] left-[530px]">
            <div className="w-[324px] h-[305px] top-[156px] left-[28px]">
            <div className="w-[324px] h-[128px] top-[28px] left-[28px]">
               <p className="w-[186.5px] h-[57px] top-[46px] left-[68.84px]  font-[Helvetica] font-[700] text-[18px] leading-[26px] text-center text-[#1111]">
               YOUR ACCOUNT FOR EVERYTHING NIKE
               </p>
               <Image src='/logo2.svg' width={324} height={17} alt=""></Image>

            </div>
               <div className="w-[324px] h-[40px] top-[5px] border-[1px] rounded-[3px] text-[#ffff] border-[#e5e5e5] ">
                  <div className="w-[290px] h-[16px] top-[12px] left-[17px] ">
                     <p className="w-[88.9px] h-[16px] font-[Helvetica] font-[400] text-[14px] leading-[16.1px] text-[#8d8d8d]">Email address</p>

                  </div>
               </div>
               <div className="w-[324px] h-[40px] top-[58px] border-[1px] rounded-[3px] bg-[#ffff]">
                  <div className="w-[290px] h-[16px] top-[12px] left-[17px]">
                     <p className="w-[61.67px] h-[16px] font-[Helvetica] font-[400] text-[14px] leading-[16.1px] text-[#8d8d8d]">Password</p>
                  </div>
               </div>
               <div className="w-[162px] h-[20px] top-[121px]">
                  <div className="w-[20px] h-[20px] rounded-[3px] border-[1px] ">
                  <Image className="top-[6px] left-[5.11px]" src='/check.svg' width={9.78} height={8} alt=""></Image>
                  <p className="w-[99.61px] h-[14px] top-[4.3px] left-[34px] font-[Helvetica] font-[400] text-[14px] leading-[16.1px] text-[#8d8d8d]">Keep me signed in</p>
                  </div>
               </div>
               <div className="w-[324px] h-[59px] top-[162px]">
                  <p className="w-[279.31px] h-[30px] top-[4px] left-[22.44px] font-[Helvetica] font-[400] text-[12px] leading-[16px] text-center text-[#8d8d8d]">By logging in you agree to Nike s <span className=" font-[Helvetica] font-[400] text-[12px] leading-[16px] text-center text-[#8d8d8d] underline underline-offset-2 decoration-solid"> Privacy Policy</span> and Terms of Use</p>
                 <p className="w-[139.61px] h-[14px] top-[125px] left-[184.59] text-[#bcbcbc]">
                 Forgotten your password
                 </p>
               </div>
               <Link href=''>
               <div className="w-[324px] h-[40px] top-[226px] border-[1px] rounded-[3px] bg-[black] text-[white]">
                  <p className="w-[41.04px] h-[18px] top-[10.5px] left-[141.58px] font-[Helvetica] font-[400] text-[11px] leading-[17px] text-center text-[white] ">SIGN IN</p>

               </div>
               </Link>
               <div className="w-[324px] h-[24px] top-[276px]">
                  <p className="w-[129.61px] h-[14px] top-[10px] left-[97.3px] font-[Helvetica] font-[400] text-[11px] leading-[17px] text-center">Not a Member? <span className="font-[Helvetica] font-[400] text-[11px] leading-[17px] text-center underline underline-offset-2 decoration-solid">Join Us</span></p>
               </div>
            </div>

         </div>

      </div>
     </div>
   )
}

export default Login;