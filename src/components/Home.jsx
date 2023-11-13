import { Carousel } from 'flowbite-react';
import React from 'react'
import pic1 from '../assets/pic1.jpg'
import pic2 from '../assets/pic2.jpg'
import pic3 from '../assets/pic3.jpg'
import pic4 from '../assets/pic6.jpg'
import pic5 from '../assets/pic7.jpg'
import Iframe from 'react-iframe'
import { Card } from 'flowbite-react';

const Home = () => {
    return (

        <div container className='w-[100%] h-[auto] mt-2 sm:px-[10%] px-[5%] flex justify-center  items-center flex-col'>
            <span className='font-bold text-[30px] m-4'>โชคไพศาลไดนาโม</span>
            <span className='mb-4 text-gray-700 dark:text-gray-400'>จำหน่าย เปลี่ยน ซ่อม ไดนาโม ไดชาร์จ ไดสตาร์ท รถยนต์ทุกชนิด อ.นางรอง จ.บุรีรัมย์</span>
            <Carousel className='mt-4 h-[300px] lg:h-[500px]'>
                <img alt="รูปซ่อมรถยนต์" src={pic1} className='object-cover'/>
                <img alt="รูปซ่อมรถยนต์2" src={pic2} className='object-cover' />
                <img alt="รูปซ่อมรถยนต์3" src={pic3} className='object-cover'/>
                <img alt="รูปซ่อมรถยนต์4" src={pic4} className='object-cover'/>
                <img alt="รูปซ่อมรถยนต์" src={pic5} className='object-cover'/>
            </Carousel>

            <div className='w-[100%] h-[auto] flex flex-col justify-center text-center m-7'>

                <span className='text-[24px] font-bold'>แผนที่ติดต่อ</span>

                <div className='w-[100%] h-[auto] flex justify-center lg:m-7 mt-6 rounded-lg'>

                    <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15440.583524594482!2d102.6671362!3d14.6476592!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311bd77c063b0607%3A0x401794d6f3463dfc!2z4LmC4LiK4LiE4LmE4Lie4Lio4Liy4Lil4LmE4LiU4LiZ4Liy4LmC4Lih!5e0!3m2!1sen!2sth!4v1696437820006!5m2!1sen!2sth"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        className='rounded-xl shadow-lg w-[700px] h-[450px]'>
                    </Iframe>


                </div>

                <div className='w-[100%] h-[auto] flex flex-row justify-center items-center gap-7 flex-wrap mt-7'>
                    <Card
                        className="w-[300px] h-[250px] hover:scale-105">
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>ติดต่อ</p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>โทร 087-960-6277</p>
                            <p>โทร 082-106-0206</p>
                        </p>
                    </Card>
                    <Card
                        className="w-[300px] h-[250px] hover:scale-105">
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>ที่อยู่</p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>เลขที่ 83 หมู่ 11 ตำบล หัวถนน อ.นางรอง จ.บุรีรัมย์ 31110 ประเทศไทย</p>
                        </p>
                    </Card>
                    <Card
                        className="w-[300px] h-[250px] hover:scale-105">
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <p>เวลาทำการ</p>
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            <p>วันจันทร์-ศุกร์ 8.00-18.00 น.</p>

                        </p>
                    </Card>

                </div>
            </div>

        </div>
    )
}

export default Home