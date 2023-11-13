import React from 'react'
import { DarkThemeToggle, Flowbite } from 'flowbite-react';

const Navbarr = () => {

    return (
        <div className='sticky shadow-md w-[100%] h-16 dark:bg-gray-800 bg-slate-100 flex justify-between px-10 items-center font-bold overflow-hidden
        top-0 z-50'>
            <div>
                โชคไพศาลไดนาโม
            </div>
            <div class='gap-4 hidden sm:flex items-center'>
                <a href='/' className='hover:text-blue-500'>หน้าหลัก</a>
                <a href='/service' className='hover:text-blue-500'>บริการ</a>
                <a href='/pic' className='hover:text-blue-500'>รูปงานซ่อม</a>
                <a href='/contact' className='hover:text-blue-500'>ติดต่อ</a>
                <Flowbite>
                    <DarkThemeToggle />
                </Flowbite>

            </div>
        </div>
    )
}

export default Navbarr