import React, { useEffect, useState } from 'react'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

const Navbarr = () => {

    const [darkMode, setDarkMode] = useState(null)

    useEffect(() => {
        setDarkMode(localStorage.getItem('Theme'))

    }, [])

    useEffect(() => {
        if (darkMode === "dark") {
            document.documentElement.classList.add('dark')
        }
        else {
            document.documentElement.classList.remove('dark')
        }

    }, [darkMode])

    const handleDarkmode = () => {
        setDarkMode(darkMode === 'dark' ? 'light' : "dark")
        localStorage.setItem('Theme', (darkMode === 'dark' ? 'light' : "dark"))
    }

    return (
        <div className='sticky shadow-md w-[100%] h-16 dark:bg-gray-800 bg-slate-100 flex justify-between px-10 items-center font-bold overflow-hidden
        top-0 z-50'>
            <div className='text-[20px] font-bold'>
                โชคไพศาลไดนาโม
            </div>
            <div class='gap-4 hidden sm:flex items-center'>
                <a href='/' className='hover:text-blue-500'>หน้าหลัก</a>
                <a href='/service' className='hover:text-blue-500'>บริการ</a>
                <a href='/pic' className='hover:text-blue-500'>รูปงานซ่อม</a>
                <a href='/contact' className='hover:text-blue-500'>ติดต่อ</a>


                {/* <Flowbite>
                    <DarkThemeToggle />
                </Flowbite> */}


                <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 " onClick={handleDarkmode}>
                    {darkMode === 'dark' ?
                        <svg  className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> :
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    }



                </button>

            </div>
        </div>
    )
}

export default Navbarr