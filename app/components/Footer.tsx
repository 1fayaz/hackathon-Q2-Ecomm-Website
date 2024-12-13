import React from "react";
import Image from "next/image";

function Footer (){
   return (
      <div>
         <div className="w-[1440px] h-[331px] bg-black">
            <div className="w-[1372px] h-[213px] top-[40px] left-[34px]">
               <div className="w-[1029px] h-[213px] ">
                  <div className="w-[245.25] h-[169.63px] left-[6px] text-white">
                     <div className="w-[245.25px] h-[166.63px]">
                        <p className="w-[68.62px] h-[16px] top-[8px] font-[400] text-[10px] leading-[32.67px]">Find A Store</p>
                        <p className="w-[98.17px] h-[16px] top-[43.66px] font-[400] text-[10px] leading-[32.67px]">Become A Member</p>
                        <p className="w-[93.47px] h-[16px] top-[110.97px] font-[400] text-[10px] leading-[24px] text-center">Send Us Feedback</p>
                        <p className="w-[104.4px] h-[16px] top-[141.97px] font-[400] text-[9px] leading-[32.67px]">Sign Up for Email</p>

                     </div>
                    </div>
                  </div>
                 <div className="w-[245.25px] h-[213px] mt-[-160px] pl-[263.25px]">
                 <div className="w-[245.25px] h-[210px] ">
                  <p className="w-[51.64px] h-[16px] top-[4px] font-[400] text-[10px] leading-[24px] tracking-[0.5px] text-white">Get Help</p>
                  <p className="w-[68.23px] h-[14px] top-[34px] font-[400] text-[11px] leading-[28px]  text-[#7e7e7e]">Order Status</p>
                  <p className="w-[43.54px] h-[14px] top-[65px] font-[400] text-[12px] leading-[24px] text-[#7e7e7e]">Delivery</p>
                  <p className="w-[42.23px] h-[14px] top-[96px] font-[400] text-[12px] leading-[28px] text-[#7e7e7e]">Returns</p>
                  <p className="w-[92.25px] h-[14px] top-[127px] font-[400] text-[11px] leading-[28px]  text-[#7e7e7e]">Payment Options</p>
                  <p className="w-[180.93px] h-[14px] top-[158px] font-[400] text-[11px] leading-[28px] text-[#7e7e7e]">Contact Us On Nike com Inquiries</p>
                  <p className="w-[176.95px] h-[14px] top-[189px] font-[400] text-[11px] leading-[28px] text-[#7e7e7e]">Contact Us On All Other Inquiries</p>
                 </div>

               </div>
            </div>
             <div className="w-[245.25px] h-[151px] left-[520.5px] mt-[-160px] pl-[512.5px]">
               <div className="w-[245.25px] h-[148px]">
                  <p className="w-[64.29px] h-[16px] top-[4px] font-[400] text-[10px] tracking-[0.5px] leading-[24px] text-[white] ">About Nike</p>
                  <p className="w-[30.22px] h-[14px] top-[34px] font-[400] text-[12px] leading-[28px] text-[#7e7e7e] ">News</p>
                  <p className="w-[42.89px] h-[14px] top-[65px] font-[400] text-[12px] leading-[28px] text-[#7e7e7e] ">Careers</p>
                  <p className="w-[48.89px] h-[14px] top-[96px] font-[400] text-[11px] leading-[28px] text-[#7e7e7e] ">Investors</p>
                  <p className="w-[70.92px] h-[14px] top-[127px] font-[400] text-[11px] leading-[28px] text-[#7e7e7e] ">Sustainability</p>
               </div>

             </div>
         </div>

         <div className="w-[1372px] h-[62px] top-[269px] left-[34px]">
            <div className="w-[680px] h-[46px] top-[16px] left-[686px]">
               <p className="w-[102.23px] h-[14px] top-[17px] left-[569.97px] font-[400] text-[11px] leading-[28px] text-right text-[#7e7e7e]">Nike Privacy Policy</p>
               <p className="w-[70.89px] h-[14px] top-[17px] left-[471.28px] font-[400] text-[12px] leading-[28px] text-right text-[#7e7e7e]">Terms of Use</p>
               <p className="w-[73.56px] h-[14px] top-[17px] left-[369.92px] font-[400] text-[12px] leading-[28px] text-right text-[#7e7e7e]">Terms of Sale</p>
               <p className="w-[38.23px] h-[14px] top-[17px] left-[303.89px] font-[400] text-[12px] leading-[28px] text-center text-[#7e7e7e]">Guides</p>

            </div>
           
         </div>
            <div className="w-[672px] h-[32px] top-[12px] left-[8px] text-gray-500">
               <p className="w-[200.48px] h-[14px] top-[19px] left-[76.03px] font-[400] text-[11px] leading-[12px]">
               © 2023 Nike Inc All Rights Reserved
               </p>
               <div className="w-[60.03px] h-[15px] top-[17px] pr-[8.03px] gap-[8px]">
                  <div className="w-[18px] h-[15px]">
                     <Image src='/Location.svg' width={9.38} height={13.12} alt="" className="top-[0.94px] left-[4.31px] bg-gray-500"></Image>
                      
                  </div>
                  <p className="w-[26px] h-[12px] font-[400] text-[12px] leading-[12px]">
                     India
                  </p>

               </div>
              
              <div className="w-[337px] h-[37px] left-[1029px]">
                <div className="w-[30px] h-[30px] left-[307px]">
                  <Image src='/insta.svg' height={30} width={30} alt=""></Image>
                   <Image src='/you.svg' width={30} height={30} alt=""></Image>
                   <Image src='/face.svg' width={30} height={30} alt=""></Image>
                   <Image src='/x.svg' width={30} height={30} alt=""></Image>

                </div>
              </div>
            </div>
      </div>
   )
}

export default Footer;