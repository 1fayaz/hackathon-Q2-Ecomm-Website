import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home () {
   return (
      <div>
         <Header></Header>
         <div className="w-[1440px] h-[5442.36px]">
            <div className="w-[1344px] h-[977px] top-[58px] left-[48px]">
               <div className="w-[1008px] h-[229px] top-[748px] left-[168px]">
                  <div className="w-[1008px] h-[45px] top-[184px] pt-[6px] pr-[379.64px] pl-[373.63px] gap-[6px]">
                     <div className="w-[110.58px] h-[39px] rounded-[30px] pt-[7.5px] pr-[22.08px] pb-[7.5px] pl-[21.5px] bg-[black]">
                      <button className="w-[67px] h-[24px] font-[500] text-[15px] leading-[24px] text-center text-[white]">Notify Me</button>  
                     </div>
                        
                     <div className="w-[138.16px] h-[39px] rounded-[30px] pt-[7.5px] pr-[22.66px] pb-[7.5px] pl-[21.5px] bg-black">
                           <button className="w-[94px] h-[24px] font-[500] text-[15px] leading-[24px] text-center text-[white]">Shop Air Max</button>
                      </div>

                  </div>
                  <div className="w-[574px] h-[60px] top-[28px] left-[216.38px]">
                     <Image src='/shoe1.svg' width={1344} height={700} alt=""></Image>
                     <p className="w-[70px] h-[24px] left-[468.88px] font-[500] text-[15px] leading-[24px] text-center">Frist Look </p>
                     <p className="font-[500] text-[56px] leading-[60px] text-center">Nike Air Max Pulse</p>
                     
                  </div>

                  <div className="w-[1008px] h-[48px] top-[112px] pr-[248.45px] pl-[248.55px]">
                     <p className="w-[511px] h-[48px] font-[400] text-[15px] leading-[24px] text-center">
                     Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                     —designed to push you past your limits and help you go to the max.
                     </p>

                  </div>

                  
                  

               </div>

            </div>


            <div className="w-[1440px] h-[604.36px] top-[1119px]">
               <div className="w-[1440px] h-[52px]">
                  <div className="w-[161.59px] h-[27px] top-[13px] left-[48px]">
                     <p className="font-[Helvetica Neue] font-[500] text-[22px] leading-[28px]">
                     Best of Air Max
                     </p>

                  </div>
                  <div className="w-[164.75px] h-[48px] top-[3px] left-[1227.61] pl-7px gap-[12.38px]">
                     
                     <p className="w-[37px] h-[24px] font-[500] font-[Helvetica Neue] text-[15px] leading-[24px]">Shop</p>
                      <div className="w-[48px] h-[48px] text-[#f5f5f5] rounded-[24px]">
                      <div className="w-[24px] h-[24px] top-[12px] left-[12px]">
                        <div className="w-[24px] h-[24px]">
                           <Image className="top-[5.03px] left-[8.56px] border-[1.5px] bg-[#cccccc]" src='/larrow.svg' width={6.97} height={13.93} alt=""></Image>

                        </div>

                      </div>

                   </div>
                   <div className="w-[48px] h-[48px] border-[24px] bg-[#e5e5e5]">
                     <div className="w-[24px] h-[24px] top-[12px] left-[12px]">
                        <div className="w-[24px] h-[24px]">
                           <Image src='/rarrow.svg' width={6.97} height={13.93} alt="" className="top-[5.03px] left-[8.47px] border-[1.5px]"></Image>

                        </div>


                     </div>

                   </div>

                  </div>
               </div>
              <div className="w-[1440px] h-[540.36] top-[64px]">
                 <div className="w-[425.36px] h-[48px] top-[462.36px] text-[#ffff]">
                  <p className="w-[61.58px] h-[17px] top-[3px] left-[363.98px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-center text-[#111111]">₹ 16 995</p>
                  <div className="w-[137.83px] h-[48px] pr-[5.83px]">
                     <p className="w-[132px] h-[24px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-[#111111]">Nike Air Max 97 SE</p>
                     <p className="w-[88px] h-[24px] text-[15px] leading-[24px] tezxt-[#757575]">Men's Shoes</p>
                   
                  </div>
                  <Image src='/shoe97.svg' width={441.36} height={441.36} alt=""></Image>

                 </div>
                 <div className="w-[441.36px] h-[510.36px] left-[510.36px]">
                   <div className="w-[425.36px] h-[48px] top-[462.36px] bg-[#ffff]"> 
                     <p className="w-[61.58px] h-[17px] top-[3px] left-[363.98px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-center text-[#1111]">₹ 13 995</p>
                   </div>

                   <div className="w-[134.27px] h-[48px] pr-[3.27px]">
                     <p className="w-[131px] h-[24px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-[#1111]">Nike Air Max Pulse</p>
                     <p className="w-[88px] h-[24px] font-[Helvetica Neue] font-[400] text-[15px] leading-[24px] text-[#757575]">Men's Shoes</p>
                   <Image  src='/shoepulse.svg' width={441.36} height={441.36} alt=""></Image>
                   </div>
                 </div>
               <div className="w-[441.36px] h-[510.36px] left-[48px]">
                  <div className="w-[425.36px] h-[48px] top-[462.36px]">
                     <p className="w-[61.58px] h-[17px] top-[3px] left-[363.98px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-center text-[#1111]">₹ 13 995</p>
                     <div className="w-[134.27px] h-[48px] pr-[3.27px]">
                        <p className="w-[131px] h-[24px] font-[Helvetica Neue] font-[500] text-[#1111] text-[15px] leading-[24px]">Nike Air Max Pulse</p>
                        <p className="w-[109px] h-[24px] font-[Helvetica Neue] font-[400] text-[15px] leading-[24px] text-[#757575]">Women's Shoes</p>

                     </div>
                  </div>

               </div>  
              </div>

            </div>

           <div className="w-[1344px] h-[977px] top-[1807.36px] left-[48px]">
            <div className="w-[1344px] h-[925px] top-[52px]">
               <div className="w-[1008px] h-[177px] top-[748px] left-[168px]" >
                  <div className="w-[152.42px] h-[39px] top-[138px] left-[424.78px] rounded-[30px] pt-[7.5px] pr-[23.92px] pb-[7.5px] pl-[22.5px] text-[#1111]">
                     
                  <p className="w-[806px] h-[60px]  left-[100.25px] font-[Helvetica Neue] font-[500] text-[54px] leading-[60px] text-center text-[#111111]">STEP INTO WHAT FEELS GOOD</p>
                  <p className="w-[106px] h-[24px] top-[84px] left-[268.06px] font-[Helvetica Neue] font-[400] text-[15px] leading-[24px] text-center text-[#ffff]">Cause everyone should know the feeling of running in that perfect pair.</p>
                  <p className="w-[106px] h-[24px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-[#ffff]">Find Your Shoe</p>

                  </div>
               <Image src='/jog.svg' width={1344} height={700} alt=""></Image>
               </div>
            </div>
          <div className="w-[1344px] h-[561px] top-[2868.36px] left-[48px]">
           <div className="w-[1356px] h-[509px] top-[52px] left-[-6px] ">
             <div className="w-[666px] h-[509px] left-[684px]">
            <div className="w-[666px] h-[447px] top-[62px] ">
             <div className="w-[300px] h-[393px] left-[360px]">
               <div className="w-[284px] h-[72px] top-[321px] text-[#ffff]">
                 <p className="w-[52.67px] h-[17px] top-[3px] left-[231.53px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-right text-[#111111]">₹ 3 795</p>
                <div className="w-[231.53px] h-[72px] pr-[7.14px]">
                 <p className="w-[66px] h-[24px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-[#11111]">Nike Fast</p>
                 <p className="w-[224.39px] h-[48px] font-[Helvetica Neue] font-[400] text-[15px] leading-[24px] text-[#757575]">Women's Mid-Rise 7/8 Running Leggings with Pockets</p>
                 <Image src='/fast.svg' width={300} height={300} alt=""></Image>

               </div>

            </div>

          <div className="w-[284px] h-[72px] top-[321px] text-[#ffff]">
            <p className="w-[52.67px] h-[17px] top-[3px] left-[231.53px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-right text-[#1111]">₹ 5 295</p>
           <div className="w-[231.53px] h-[72px] pr-[7.1px]">
            <p className="w-[208px] h-[24px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-[#1111]">Nike Dri-FIT ADV Run Division</p>
            <p className="w-[224px] h-[48px] font-[Helvetica Neue] font-[400] text-[16px] leading-[24px] text-[#757575]">Women's Long-Sleeve Running Top</p>
           <Image src='/drifit.svg' width={300} height={300} alt=""></Image>

            </div>
            </div>

            <div className="w-[234.7px] h-[48px] top-[2px] left-[383.3px] ">
             <div className="w-[48px] h-[48px]  left-[186.7px] rounded-[24px]  text-[#e5e5e5]">
              <div className="w-[24px] h-[24px] top-[12px] left-[12px] ">
              <div className="w-[24px] h-[24px]  ">
                <Image src='/rarrow.svg' width={6.97} height={13.93} alt="" className="top-[5.03px] left-[8.47] border-[1.5px] border-[#1111] "></Image>

                   </div>
                  </div>
                 <div className="w-[666px] h-[509px] left-[6px]">
                  <div className="w-[666px] h-[447px] top-[62px] ">
                 <div className="w-[300px] h-[393px] left-[360px]">
                  <div className="w-[284px] h-[72px] top-[321px] text-[#ffff] ">
                  <p className="w-[52.67px] h-[17px] top-[3px] left-[231.53px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-right text-[#1111]">₹ 2 495</p>
                   
                 <div className="w-[231.53px] h-[72px] pr-[31.75px]">
                  <p className="w-[162px] h-[24px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px]  text-[#1111]">Nike Dri-FIT Challenger</p>
                  <p className="w-[199px] h-[48px] font-[Helvetica Neue] font-[400] text-[16px] leading-[24px]  text-[#757575]">Men's 18cm approx. 2-in-1 Versatile Shorts</p>
                   <Image src='/drifitmen.svg' width={300} height={300} alt=""></Image>
                  </div> 

                 </div>
               <div className="w-[300px] h-[393px] left-[48px]">
                  <div className="w-[284px] h-[72px] top-[321px] text-[#ffff] ">
                  <p className="w-[52.67px] h-[17px] top-[3px] left-[231.53px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-right text-[#1111]">₹ 3 895</p>
                   
                 <div className="w-[231.53px] h-[72px] pr-[12.53px]">
                  <p className="w-[219px] h-[24px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px]  text-[#1111]">Nike Dri-FIT Challenger</p>
                  <p className="w-[203.37px] h-[48px] font-[Helvetica Neue] font-[400] text-[16px] leading-[24px]  text-[#757575]">Men's Short-Sleeve Running Top</p>
                   <Image src='/drifitrun.svg' width={300} height={300} alt=""></Image>
                  </div> 

            </div>


                  </div>     
               </div>
             </div>
           </div>
             /</div>
           </div>
          </div>  

          </div>
          </div>
         

          <div className="w-[1344px] h-[977px] top-[3513.36px] left-[48px] ">
           <div className="w-[1344px] h-[925px] top-[52px] ">
          <div className="w-[1008px] h-[177px] top-[748px] left-[168px] ">
             <div className="w-[80.38px] h-[39px] top-[138px] left-[460.81px] rounded-[30px] pt-[7.5px] pr-[21.88px] pb-[7.5px] pl-[21.5px]  text-[#1111]">
               <p className="w-[37px] h-[24px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-center text-[#ffff]">Shop</p>
               <p className="w-[531px] h-[24px] top-[84px] left-[239.05px] font-[Helvetica Neue] font-[400] text-[15px] leading-[24px] text-center text-[#1111]">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
               <p className="w-[512px] h-[60px] left-[247.97px] font-[Helvetica Neue] font-[500] text-[52px] leading-[60px] text-center text-[#1111]">FLIGHT ESSENTIALS</p>
                 <Image src='/dontmiss.svg' width={1344} height={700} alt=""></Image>
               <p className="w-[111.48px] h-[27px] font-[Helvetica Neue] font-[500] text-[22px] leading-[28px] text-center text-[#111111]">Don't Miss</p>
               
                        </div>
                      </div>
                     </div>
                    </div>
                   </div>
                  </div>
                  
                  </div>
              
          <div className="w-[1344px] h-[592px] top-[4574.36px] left-[48px] ">
          <div className="w-[1356px] h-[540px] top-[52px] left-[-6px] ">
          <div className="w-[440px] h-[540px] left-[910px] ">
             <div className="w-[77.19px] h-[39px] top-[452.98px] left-[48px] rounded-[30px] pt-[7.5px] pr-[22.69px] pb-[7.5px] pl-[21.5px]  text-[#ffff]">
               <p className="w-[33px] h-[24px] font-[Helvetica Neue] font-[500] text-[14px] leading-[24px] text-[#1111]">Kids'</p>
                 <Image src='/kidsc.svg' width={440} height={540} alt=""></Image>
            </div>
            </div>
          <div className="w-[440px] h-[540px] left-[458px] ">
             <div className="w-[108.89px] h-[39px] top-[452.98px] left-[48px] rounded-[30px] pt-[7.5px] pr-[22.39px] pb-[7.5px] pl-[21.5px]  text-[#ffff]">
               <p className="w-[65px] h-[24px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-[#1111]">Women's</p>
                 <Image src='/womenc.svg' width={440} height={540} alt=""></Image>
            </div>
            </div>
          <div className="w-[440px] h-[540px] left-[6px] ">
             <div className="w-[85.19px] h-[39px] top-[452.98px] left-[48px] rounded-[30px] pt-[7.5px] pr-[20.69px] pb-[7.5px] pl-[21.5px]  text-[#ffff]">
               <p className="w-[43px] h-[24px] font-[Helvetica Neue] font-[500] text-[15px] leading-[24px] text-[#1111]">Men's</p>
                 <Image src='/menc.svg' width={440} height={540} alt=""></Image>
            </div>
            </div>
            
            </div>
           </div>

           <div className="w-[184px] h-[24px] top-[696px] ">
            <p className="w-[34.39px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[14px] leading-[24px] text-[#1111]">Kids'</p>

          <div className="w-[880px] h-[192px] top-[5250.36px] left-[280px] ">
          <div className="w-[184px] h-[144px] top-[48px] left-[696px] ">
           <div className="w-[184px] h-[144px] ">
           <div className="w-[184px] h-[24px] top-[108px] ">
            <p className="w-[162.47px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Kids' Basketball Shoes</p>
            </div>
            </div>

          <div className="w-[184px] h-[24px] top-[72px] ">
            <p className="w-[137.56px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Kids' Basketball Shoes</p>
            </div>
            
          <div className="w-[184px] h-[24px] top-[36px] ">
            <p className="w-[84.2px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Kids'Shoes</p>
            </div>
            
          <div className="w-[184px] h-[24px] ">
            <p className="w-[161.79px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Infant & Toddler Shoes</p>
            </div>



           <div className="w-[184px] h-[24px] top-[464px] ">
            <p className="w-[58.9px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#1111]">Clothing</p>

          <div className="w-[184px] h-[144px] top-[48px] left-[696px] ">
           <div className="w-[184px] h-[144px] ">
           <div className="w-[184px] h-[24px] top-[108px] ">
            <p className="w-[144.28px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Shirts & Tops</p>
            </div>
            </div>

          <div className="w-[184px] h-[24px] top-[36px] ">
            <p className="w-[95.06px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Hoodies & Pullovers</p>
            </div>
            
          <div className="w-[184px] h-[24px] ">
            <p className="w-[81.14px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Modest Wear</p>
            </div>
            
          <div className="w-[184px] h-[24px] ">
            <p className="w-[161.79px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">All Clothing</p>
            </div>
           <div className="w-[184px] h-[24px] top-[232px] ">
            <p className="w-[45.58px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#1111]">Shoes</p>

          <div className="w-[184px] h-[144px] top-[48px] left-[696px] ">
           <div className="w-[184px] h-[144px] ">

           <div className="w-[184px] h-[24px] top-[108px] ">
            <p className="w-[109.62px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Running Shoes</p>
            </div>
            </div>

          <div className="w-[184px] h-[24px] top-[72px] ">
            <p className="w-[98.93px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Jordan Shoes</p>
            </div>
            
          <div className="w-[184px] h-[24px] top-[36px] ">
            <p className="w-[105.14px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Custom Shoes</p>
            </div>
            
          <div className="w-[184px] h-[24px] ">
            <p className="w-[67.79px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">All Shoes</p>
            </div>

           <div className="w-[184px] h-[24px]  ">
            <p className="w-[58.9px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#1111]">Icons</p>

          <div className="w-[184px] h-[144px] top-[48px] ">
           <div className="w-[184px] h-[144px] ">

           <div className="w-[184px] h-[24px] top-[108px] ">
            <p className="w-[76.67px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Air Max 95</p>
            </div>
            </div>

          <div className="w-[184px] h-[24px] top-[72px] ">
            <p className="w-[76.67px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Air Max 90</p>
            </div>
            
          <div className="w-[184px] h-[24px] top-[36px] ">
            <p className="w-[69.57px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Huarache</p>
            </div>
            
          <div className="w-[184px] h-[24px] ">
            <p className="w-[78.45px] h-[17px] font-[Helvetica Neue] font-[500] top-[3px] text-[15px] leading-[24px] text-[#757575]">Air Force 1</p>
            </div>
             </div>
             </div>
             </div>
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
}

export default Home;