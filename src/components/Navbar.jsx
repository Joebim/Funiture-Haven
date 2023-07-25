import React, {useState} from 'react'
import FunitureHavenfill from '../assets/images/SVG/funiture-haven-fill.svg?component'
// import MyIcon from "./icon.svg?component"
import { RxHamburgerMenu} from "react-icons/rx";



export default function Navbar() {

  const [toggle, setToggle] = useState(false)

  return (
    <>
    <div className="relative">
      <div className={`absolute right-0 h-[300px] ${toggle ? "w-[40%]" : "w-[0%] "} duration-200 overflow-hidden bg-white flex flex-col items-center pt-[40px] z-[10]`}>
          <div className=" p-[20px]">
            <ul className='flex flex-col justify-between'>
              <li className='text-[14px] font-semibold text-[#2B2B2B] hover:text-[#FF7D1E] mb-[10px]'>
                Home
              </li>
              <li className='text-[14px] font-semibold text-[#2B2B2B] hover:text-[#FF7D1E] mb-[10px]'>
                Shop
              </li>
              <li className='text-[14px] font-semibold text-[#2B2B2B] hover:text-[#FF7D1E] mb-[10px]'>
                About
              </li>
              <li className='text-[14px] font-semibold text-[#2B2B2B] hover:text-[#FF7D1E] mb-[10px]'>
                Buy
              </li>
              <li className='text-[14px] font-semibold text-[#2B2B2B] hover:text-[#FF7D1E] mb-[10px]'>
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
      {/* <div className=""> */}
      <div className="sm:hidden h-[70px] w-full relative shadow-md flex flex-row justify-between items-center px-[20px] bg-[#ffedd5]">
        <div className="">
          <FunitureHavenfill className='w-[25px] sm:w-[40px] fill-black' />
        </div>


        <button className="p-[20px] z-[11]"
        onClick={()=>{
          setToggle(!toggle)
        }}
        >
        < RxHamburgerMenu className="text-[20px] text-[#c77439]"/> 
        </button>

      </div>
      {/* </div> */}

      <div className='h-[70px] w-full relative hidden sm:flex flex-row justify-between items-center px-[40px] py-[20px]'>





        <div className="absolute right-0 h-full w-[250px] bg-[#ffc59c] z-[-1] rounded-bl-full"></div>
        <div className="">
          <FunitureHavenfill className='w-[40px] fill-black' />
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
    </div>
    
    </>

  )
}
