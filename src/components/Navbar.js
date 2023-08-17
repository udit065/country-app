import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import '../App.css'

const Navbar = () => {
    return (
        <nav className='w-full laptop:h-14 tablet:h-12 mobile:h-8 flex justify-around items-center shadow-xl'>
            <div className='absolute left-[90px] font-bold laptop:text-xl tablet:text-lg mobile:text-xs tablet:left-[50px]  mobile:left-[7px]'>
                WorldView Explorer
            </div>
            <div className='flex items-center absolute right-[90px] cursor-pointer tablet:right-[50px] mobile:right-[7px]'>
                <DarkModeIcon className='darkmode-icon' />
                <p className='font-semibold text-lg tablet:text-base mobile:text-xs'>Dark Mode</p>
            </div>
        </nav>

    )
}

export default Navbar;