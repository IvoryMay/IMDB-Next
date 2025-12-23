"use client";

import React from 'react'
import MenuItem from './MenuItem'
import { AiOutlineHome} from "react-icons/ai";
import {  IoInformationCircleOutline} from "react-icons/io5";
import Link from 'next/link';
import ToggleDarkMode from './ToggleDarkMode';

const Header = () => {
  return (
    <section>
        <div className="flex justify-between">
          <div className=" flex items-center gap-4">
            <MenuItem title="Home" icon={<span><AiOutlineHome/></span>} address="/" />
            <MenuItem title="About" icon={<span ><IoInformationCircleOutline /></span>} address="/about" />
          </div>
          <div className="flex items-center gap-3">
            <ToggleDarkMode />
            <div className="flex  items-baseline">
            <Link href="/" className='font-bold bg-amber-300 dark:bg-amber-600 p-1 hover:bg-amber-400 rounded text-lg'>IMBD</Link>
            <span className='hidden sm:inline p-1 font-semibold'>Clone</span>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Header