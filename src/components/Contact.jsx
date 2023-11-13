import pic from "../assets/pic11.jpg"

const Contact = () => {
    return (
        <div className='h-[800px] flex flex-col justify-start items-center mt-6'>

            <img src={pic} alt="" className="rounded-lg shadow-lg h-[300px]" />
            <div className="flex flex-col justify-center items-center mt-8 h-[300px] w-[500px]
             bg-slate-200 dark:bg-gray-700 gap-4 rounded-lg shadow-lg">
                <span className="font-bold text-[20px]">ติดต่อ</span>
                <span>โทร 087-960-6277</span>
                <span>โทร 082-106-0206</span>

                <span className="font-bold text-[20px]">ที่อยู่</span>
                <span>เลขที่ 83 หมู่ 11 ตำบล หัวถนน อ.นางรอง</span>
                <span>จ.บุรีรัมย์ 31110 ประเทศไทย</span>
                



            </div>

        </div>
    )
}

export default Contact