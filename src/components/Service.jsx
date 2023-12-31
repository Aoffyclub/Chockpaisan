import pic1 from "../assets/pic12.jpg"

const Service = () => {
  return (
    <div className='w-full mb-8'>
      <div className='w-full text-left flex flex-col justify-start items-center gap-2 px-6'>
        <h1 className='text-[30px] font-bold mt-4'>ไดชาร์จคืออะไร</h1> <br />

        <img src={pic1} alt="" className="w-[400px] object-cover rounded-md shadow-md" />

        <span className="mt-3">ไดชาร์จคืออุปกรณ์ที่ทำหน้าที่ผลิตกระแสไฟฟ้าให้กับระบบต่าง ๆ ในรถยนต์
          โดยอาศัยแรงหมุนจากเครื่องยนต์ผ่านสายพานหรือโซ่มาทำให้โรเตอร์หมุนจนเกิดเป็นสนามแม่เหล็กหมุน
          ซึ่งสนามแม่เหล็กหมุนจะไปเหนี่ยวนำทำให้เกิดไฟฟ้ากระแสสลับในขดลวดสเตเตอร์
          ก่อนจะถูกแปลงเป็นไฟฟ้ากระแสตรงเพื่อส่งไปเลี้ยงระบบไฟฟ้าในรถยนต์ตามลำดับ</span>

        <span>ไดชาร์จจึงมีความสำคัญต่อรถยนต์เป็นอย่างมาก หากไดชาร์จเสีย รถยนต์จะไม่สามารถสตาร์ทติดได้
          เนื่องจากแบตเตอรี่ไม่มีไฟใช้ นอกจากนี้ ไดชาร์จยังมีหน้าที่จ่ายกระแสไฟฟ้าให้กับอุปกรณ์อิเล็กทรอนิกส์ต่าง ๆ รอบตัวรถ
          เช่น ไฟหน้า ไฟท้าย วิทยุ เครื่องเสียง และแอร์ หากไดชาร์จมีปัญหาอุปกรณ์เหล่านี้ก็จะทำงานได้ไม่เต็มที่หรืออาจจะใช้งานไม่ได้เลยนั่นเอง</span>



        <span className="font-bold text-[22px] mt-2">7 สัญญาณเตือนว่า ไดชาร์จรถยนต์ของคุณกำลังมีปัญหา</span>

        <div className="flex flex-col w-full text-left mt-2 dark:bg-gray-700  bg-slate-100 rounded-lg shadow-lg px-5">

          <div className="pt-2 flex flex-col">
            <span className="font-semibold text-[18px] ">1. ไฟส่องสว่างภายในและภายนอกรถสว่างน้อยลงหรือสว่างมากเกินไป</span>
            <span>เมื่อไดชาร์จเริ่มขัดข้องหรือเสื่อมสภาพ การจ่ายแรงดันไฟฟ้าก็จะไม่คงที่ คุณอาจพบไฟส่องสว่างภายในหรือภายนอกกะพริบหรือไฟสว่างน้อยลงหรือสว่างมากไป</span>
          </div>

          <div className="pt-2 flex flex-col">
            <span className="font-semibold text-[18px] ">2. แบตเตอรี่หมด</span>
            <span>แบตเตอรี่หมดนั้นอาจเกิดจากแบตเตอรี่หมดอายุการใช้งานหรืออาจเกิดจากการเปิดไฟหน้าทิ้งไว้ทั้งคืนโดยไม่ได้ตั้งใจและอีกหนึ่งสาเหตุที่ทำให้แบตเตอรี่หมด อาจเกิดจากไดชาร์จของคุณทำงานผิดปกติ เมื่อไดชาร์จทำงานผิดปกติก็จะไม่สามารถจ่ายไฟไปยังแบตเตอรี่ได้เพียงพอ ทำให้ประจุไฟฟ้าในแบตเตอรี่หมดไวกว่าปกติ</span>
          </div>

          <div className="pt-2 flex flex-col">
            <span className="font-semibold text-[18px] ">3. อุปกรณ์เสริมภายในรถทำงานช้าผิดปกติ</span>
            <span>เมื่อไดชาร์จเริ่มขัดข้องหรือเสื่อมสภาพก็จะไม่สามารถจ่ายพลังงานได้อย่างเพียงพอให้กับอุปกรณ์อิเล็กทรอนิกส์ภายในรถยนต์ของคุณ ทำให้อุปกรณ์ทำงานช้าหรือไม่ทำงาน ตัวอย่างเช่น หากคุณสังเกตเห็นว่าหน้าต่างรถของคุณใช้เวลาในการเลื่อนขึ้น-ลง เป็นเวลานานกว่าปกติ รถของคุณอาจมีปัญหาเกี่ยวกับไดชาร์จอยู่ก็ได้</span>
          </div>

          <div className="pt-2 flex flex-col">
            <span className="font-semibold text-[18px] ">4. รถสตาร์ทติดยาก</span>
            <span>ปัญหารถยนต์สตาร์ทติดยากนั้น อาจจะไม่ได้มาจากแบตเตอรี่มีปัญหา ถ้าตรวจเช็คแล้วแบตเตอรี่ปกติดี ตัวการที่ทำให้รถของคุณสตาร์ทติดยากอาจเกิดจากไดชาร์จรถยนต์ของคุณกำลังมีปัญหา เพราะไดชาร์จเป็นจุดเริ่มต้นของการจ่ายไฟ ถ้ารถยนต์สตาร์ทไม่ติดนั้นอาจหมายความว่าไดชาร์จรถยนต์ของคุณเกิดขัดข้องจนทำให้ไม่สามารถชาร์จแบตเตอรี่ได้</span>
          </div>

          <div className="pt-2 flex flex-col">
            <span className="font-semibold text-[18px] ">5. ได้ยินเสียงหอนหรือเสียงแปลกๆ จากใต้ท้องรถยนต์</span>
            <span>หากคุณได้ยินเสียงหอนหรือเสียงแปลกๆ จากใต้ท้องรถยนต์ รถของคุณอาจจะมีปัญหาเกี่ยวกับไดชาร์จรถยนต์ขัดข้องก็ได้ ซึ่งอาจเกิดจากสายพานหมุนไม่ตรงแนวหรือเกิดการเสียดสีกับด้านข้างของรอกบริเวณไดชาร์จรถยนต์ก็ได้ ควรนำรถไปตรวจเช็คกับช่างเทคนิคโดยเร็วที่สุด หากมีเสียงหอนนี้เกิดขึ้น</span>
          </div>

          <div className="pt-2 flex flex-col">
            <span className="font-semibold text-[18px] ">6. ได้กลิ่นเหม็นเหมือนยางไหม้หรือสายไฟไหม้</span>
            <span>ได้กลิ่นเหม็นไหม้ อาจจะเกิดจากยางรถยนต์หรือสายไฟที่ไหม้ เป็นสัญญาณที่บ่งบอกว่าชิ้นส่วนของไดชาร์จของคุณเริ่มเสื่อมสภาพ เพราะสายพานไดรฟ์ของไดชาร์จที่ทำงานต่อเนื่องทำให้เกิดแรงเสียดทาน และเนื่องจากมันใกล้เคียงกับเครื่องยนต์ที่ทำงาน ทำให้เกิดความร้อน หากไดชาร์จรถยนต์ของคุณทำงานหนักเกินไปหรือมีสายไฟหลุดลุ่ยหรือชำรุด อาจทำให้คุณได้กลิ่นเหม็นไหม้ได้ เพราะการที่ไดชาร์จรถยนต์ทำงานหนักเกินไปหรือไดชาร์จขัดข้อง พยายามดันกระแสไฟฟ้าผ่านสายไฟมากเกินไป อาจส่งผลทำให้สายไฟเกิดเสียหายและสายไฟร้อนขึ้นและมีกลิ่นเหม็นได้ ถ้าพบอาการดังกล่าวควรนำรถไปตรวจเช็คกับช่างเทคนิคโดยเร็วที่สุด</span>
          </div>

          <div className="pt-2 flex flex-col">
            <span className="font-semibold text-[18px] ">7. ไฟรูปแบตเตอรี่ขึ้นโชว์บนแผงหน้าปัดรถยนต์</span>
            <span>เมื่อไฟรูปแบตเตอรี่ปรากฏขึ้นบนแดชบอร์ด ผู้ขับขี่หลายท่านมักเข้าใจผิดว่าเป็นปัญหาเฉพาะของแบตเตอรี่รถยนต์ ซึ่งไฟเตือนแบตเตอรี่นั้น อาจเกิดจากไดชาร์จรถยนต์ขัดข้องก็ได้ เพราะไดชาร์จรถยนต์ถูกออกแบบมาให้ทำงานเกี่ยวกับแรงดันไฟฟ้าโดยเฉพาะหากไดชาร์จรถยนต์ของคุณไม่ทำงาน แรงดันไฟฟ้าของเครื่องยนต์อาจลดลงต่ำกว่าความจุ ทำให้ไฟเตือนแบตเตอรี่ ปรากฏขึ้นบนแผงหน้าปัดรถยนต์ของคุณ</span><br />
          </div>

        </div>




      </div>


    </div>
  )
}

export default Service