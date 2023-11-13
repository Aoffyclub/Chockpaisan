import React from 'react'
import { Footer } from 'flowbite-react';
import {  BsFacebook, BsInstagram, BsLine } from 'react-icons/bs';

const Footerr = () => {
  return (
    <Footer container className='bottom-0 shadow-md'>
    <div className="w-full">
    
      <div class="w-full sm:flex sm:items-center sm:justify-between">
        <div class='hidden sm:block'>
        <Footer.Copyright
          by="Design by Vongsakorn"
          href="#"
          year={2023} 
        />
        </div>
        <div class="mt-4 flex space-x-6 sm:mt-0 justify-center">
          <Footer.Icon
            href="#"
            icon={BsFacebook}
          />
          <Footer.Icon
            href="#"
            icon={BsInstagram}
          />
           <Footer.Icon
            href="#"
            icon={BsLine}
          />
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default Footerr