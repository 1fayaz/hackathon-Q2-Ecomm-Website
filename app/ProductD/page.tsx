import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";


function Productd(){
  return (
   <div >
       <Header></Header>
      <div>
         <div className="w-[1440px] h-[1173px] top-[96px] bg-[#ffff]">
            <div className="w-[1200px] h-[1125px] top-[48px] left-[120px]">
               <Image src='shoeprod.svg' width={653} height={653} alt="" className="top-[110px] left-[-22px] bg-[#f5f5f5]"></Image>
              <div className="w-[376px] h-[1041px] top-[-26px] left-[768px]">
               <p className="w-[367px] h-[96px] top-[135px] font-[Poppins] font-[500] text-[48px] leading-[48px] text-[black]">Nike Air Force 1 
               PLT AF ORM</p>

               <div className="w-[374.92px] h-[413px] top-[241px] pt-[24px] pb-[1px] gap-[2px]">
                   <div className="w-[374.92px] h-[342px]">
                      <p className="w-[374.92px] h-[252px] font-[Poppins] font-[400] text-[15px] leading-[28px] text-[#1111]">Turn style on its head with this crafted take on the Air Jordan 1 Mid Its inside out -inspired construction including unique layering and exposed foam accents ups the ante on this timeless Jordan Brand silhouette Details like the deco stitching on the Swoosh add coveted appeal while the unexpected shading rich mixture of materials and aged midsole aesthetic give this release an artisan finish</p>
                       <div className="h-[90px] w-[294.44px] pt-[32px] pr-[65.44px] pb-[24px] gap-[4px]">
                           <p className="w-[229px] h-[34px] font-[Poppins] font-[500] text-[36px] leading-[28px] text-[#1111]">₹ 8 695.00</p>
                       </div>
                       <div className="w-[174.42px] h-[44px] bordered-[30px] pt-[7.5px] pr-[23.92px] pb-[7.5px] pl-[22.5px] text-[#1111]">
                        
                           <Image src='cart.svg' width={29} height={29} alt=""></Image>

                        <p className="w-[99px] h-[29px] font-[Poppins] font-[500] text-[15px] leading-[24px] text-center">  Add To Cart</p>

                       </div>
                   </div>
               </div>
              </div>
            </div>

         </div>

      </div>
       <Footer></Footer>
   </div>
  )
};

export default Productd;