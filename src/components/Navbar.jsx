import React from 'react'
import FunitureHavenfill from '../assets/images/SVG/funiture-haven-fill.svg?component'
// import MyIcon from "./icon.svg?component"

export default function Navbar() {
  return (
    <div className='h-[70px] w-full relative flex flex-row justify-between items-center px-[40px] py-[20px]'>
      <div className="absolute right-0 h-full w-[250px] bg-[#ffc59c] z-[-1] rounded-bl-full"></div>
        <div className="">
            <FunitureHavenfill className='w-[40px] fill-black'/>
        </div>
        <div className="">
          <ul className='flex flex-row space-x-[40px]'>
            <li className='text-[14px] font-semibold text-[#2B2B2B] hover:text-[#FF7D1E]'>
              Home
            </li>
            <li className='text-[14px] font-semibold text-[#2B2B2B] hover:text-[#FF7D1E]'>
              Shop
            </li>
            <li className='text-[14px] font-semibold text-[#2B2B2B] hover:text-[#FF7D1E]'>
              About
            </li>
            <li className='text-[14px] font-semibold text-[#2B2B2B] hover:text-[#FF7D1E]'>
              Buy
            </li>
            <li className='text-[14px] font-semibold text-[#2B2B2B] hover:text-[#FF7D1E]'>
              Contact Us
            </li>
          </ul>
        </div>
        <div className="">
          <button className='py-[5px] px-[20px] bg-[#FF7D1E] rounded-[10px] text-white text-[14px] hover:bg-[#ff9c55]'>
            Sign Up
          </button>
        </div>
    </div>
  )
}
