import { Card, CardBody, Image, CardFooter } from "@nextui-org/react";
import pic1 from '../assets/pic2.jpg'
import pic2 from '../assets/pic3.jpg'
import pic3 from '../assets/pic6.jpg'
import pic4 from '../assets/pic7.jpg'
import pic5 from '../assets/pic8.jpg'
import pic6 from '../assets/pic9.jpg'
import pic7 from '../assets/pic10.jpg'


const Pic = () => {
    const Allpic = [
        { "pic": pic1 },
        { "pic": pic2 },
        { "pic": pic3 },
        { "pic": pic4 },
        { "pic": pic5 },
        { "pic": pic6 },
        { "pic": pic7 },

    ]
    return (
        <div>

            <div className="w-full text-center mt-4 text-[26px] font-bold" >
                <span>รูปการซ่อมรถยนต์</span>
            </div>

            <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-8 mt-6 content-center lg:px-10 px-4 -z-10">

                {Allpic.map((item, index) => (
                    <Card shadow="sm" key={index} isPressable >
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="lg"
                                radius="lg"
                                width="100%"
                                alt={index}
                                className="object-cover h-[450px]"
                                src={item.pic}
                            />
                        </CardBody>
                        <CardFooter className="text-small justify-center">
                            <b>รูปซ่อมรถยนต์ {index + 1}</b>

                        </CardFooter>
                    </Card>
                ))}

            </div>
        </div>
    )
}

export default Pic