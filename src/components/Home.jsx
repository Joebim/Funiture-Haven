import React from 'react'
import LandingFuniture from "../assets/images/72ppi/landing-funiture.png"
import { BsFillFastForwardFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className='h-[60vh] flex flex-row bg-[#FBF8F6] px-[40px]'>
      <div className="flex-[1] flex justify-start items-center">
        <div className="">
          <div className="mb-[20px]">
            <h1 className='text-[35px] font-semibold'>Transform Your Home with Extraordinary <span className='text-[#FF9141]'>Furniture </span>Pieces</h1>
          </div>
          <div className="mb-[20px]">
            <p className=' font-light text-gray-500'>At Furniture Haven, we believe that everyone deserves to have comfortable furnitures. That's why we offer a wide variety of comfortable pieces to fit every need. Whether you're looking for a sofa to relax on after a long day or a bed to sleep soundly at night, we have something for you.</p>
          </div>
          <button className='px-[30px] py-[7px] border-solid border-[1px] border-black rounded-[18px] flex flex-row items-center'>
            <p className='text-[15px] mr-[10px]'> Shop Now</p>
            < BsFillFastForwardFill className="text-[15px] text-[#FF9141]"/> 
            </button>
        </div>

      </div>
      <div className="flex-[1]  flex justify-center items-center">
        {/* <LandingFuniture /> */}
        <img src={LandingFuniture} alt="" className='w-[300px]' />
      </div>
    </div>
  )
}
