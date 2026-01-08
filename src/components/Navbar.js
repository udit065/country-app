import DarkModeIcon from '@mui/icons-material/DarkMode';
import '../App.css';
import { useTheme } from '../Context/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { toggleTheme } = useTheme();

    return (
        <nav className='w-full laptop:h-14 tablet:h-12 mobile:h-12 flex justify-around items-center shadow-xl dark:bg-[#374151] dark:shadow-2xl'>
            <Link to="/">
                <div className='absolute left-[90px] top-4 font-bold laptop:text-xl tablet:text-lg mobile:text-xs tablet:left-[50px] mobile:left-[18px] mobile:top-4 mobile:ml-6 dark:text-white'>
                    World Explorer
                </div>
            </Link>
            <div className='flex items-center absolute right-[90px] cursor-pointer tablet:right-[50px] mobile:right-[7px] mobile:mr-6'
                onClick={toggleTheme}
            >
                <DarkModeIcon className='darkmode-icon dark:text-white' />
                <p className='font-semibold text-lg tablet:text-base mobile:text-xs dark:text-white'>Dark Mode</p>
            </div>
        </nav>

    )
}

export default Navbar;