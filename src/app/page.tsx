import AntRunningEffect from '@/components/ant';
import { CarouselEvent } from '@/components/CarouselEvent';
import { CarouselNews } from '@/components/news/CarouselNews';
import ListItemCoffee from '@/components/ListItemCoffee';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import {
  faFacebook,
  faThreads,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
//import Image from 'next/image';

export default function Home() {
  return (
    <div className="overflow-x-hidden select-none">
      <div className="">
        <Image
          src={'/imgs/Highlands.gif'}
          height={500}
          width={500}
          priority={false}
          alt=""
          className="w-full  h-full object-cover max-h-[600px]"
        ></Image>
      </div>

      <div className="Active w-full  px-14 max-xl:px-2 pb-16">
        <Title>Hoạt Động</Title>
        <div className="Active w-full ">
          <div className="flex gap-6 max-lg:gap-2">
            <div className="basis-9/12 max-lg:basis-8/12 flex flex-col gap-6 max-lg:gap-2">
              <div className="flex gap-4 w-full items-centers justify-between max-lg:gap-2 ">
                {Array(2)
                  .fill(null)
                  .map((_, index) => {
                    return (
                      <Image
                        key={index}
                        priority={false}
                        src={
                          'https://cdn.dribbble.com/userupload/18164563/file/original-9a08d098be90b95a3f2ec743dd886442.png?resize=1200x900&vertical=center'
                        }
                        alt=""
                        width={500}
                        height={300}
                        className="object-cover   w-[calc(50%-0.2rem)] max-h-[200px] rounded-lg "
                      ></Image>
                    );
                  })}
              </div>
              <div className="w-full ">
                <Image
                  src={
                    'https://cdn.dribbble.com/userupload/18164563/file/original-9a08d098be90b95a3f2ec743dd886442.png?resize=1200x900&vertical=center'
                  }
                  alt=""
                  width={500}
                  height={300}
                  priority={false}
                  className="object-cover w-full max-h-[200px] rounded-lg "
                ></Image>
              </div>
              <div className="flex gap-4  items-centers justify-between max-lg:gap-2 w-full ">
                {Array(2)
                  .fill(null)
                  .map((item, index) => {
                    return (
                      <Image
                        key={index}
                        priority={false}
                        src={
                          'https://cdn.dribbble.com/userupload/18164563/file/original-9a08d098be90b95a3f2ec743dd886442.png?resize=1200x900&vertical=center'
                        }
                        alt=""
                        width={500}
                        height={300}
                        className="object-cover   w-[calc(50%-0.2rem)] max-h-[200px] rounded-lg "
                      ></Image>
                    );
                  })}
              </div>
            </div>
            <div className="basis-3/12 max-lg:basis-4/12">
              <Image
                src={
                  'https://cdn.dribbble.com/userupload/10359938/file/original-03d701b593901415bef3d4eeba1dee36.png?resize=1200x900&vertical=center'
                }
                alt=""
                width={500}
                height={500}
                priority={false}
                className="object-cover w-full  h-full rounded-lg"
              ></Image>
            </div>
          </div>
        </div>

        <div className="event">
          <Title>Sự Kiện Sắp Tới</Title>
          <div className="w-full">
            <CarouselEvent></CarouselEvent>
          </div>

          <div className=" max-h-[80px]  sm:max-h-[200px] lg:max-h-[300px] my-2">
            <Image
              src={'/imgs/Workshops.png'}
              width={500}
              height={500}
              priority={false}
              alt=""
              className=" w-full object-cover object-center rounded-xl max-h-[80px] sm:max-h-[200px] lg:max-h-[300px]"
            ></Image>
          </div>
        </div>

        <div className="coffee">
          <div className=" w-full   flex  justify-center items-center">
            <div className=" w-[80px] h-[80px]  sm:w-[150px] sm:h-[150px] object-cover  "></div>

            <div className="">
              <Title className="">
                Sản Phẩm <span className="text-black"> Nổi Bật</span>
              </Title>
            </div>

            <Image
              src="/imgs/coffee.gif"
              height={80}
              width={80}
              priority={false}
              alt=""
              className="w-[80px] h-[80px]  sm:w-[150px] sm:h-[150px] object-cover  bg-white"
            ></Image>
          </div>

          <div className="w-full flex justify-center items-center flex-col gap-8">
            <ListItemCoffee></ListItemCoffee>
            <div className="flex w-full items-center">
              <div className="basis-5/12 h-[1px] bg-black w-full shadow-2xl"></div>
              <Link href={'/menu'}>
                <Button className="basis-2/12 bg-primary text-white px-12 py-0 rounded-lg mx-5  shadow-xl text-sm sm:text-base">
                  Menu
                </Button>
              </Link>
              <div className="basis-5/12 h-[1px]  bg-black w-full shadow-2xl"></div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <Title>Tin Tức</Title>
          <CarouselNews></CarouselNews>
        </div>

        <div className="social-media flex gap-10 justify-center items-center my-6">
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ color: '#0e7acd' }}
            className="w-[30px] h-[30px] md:w-[50px]  md:h-[50px]"
          />
          <FontAwesomeIcon
            icon={faThreads}
            className="w-[30px]  h-[30px] md:w-[50px] md:h-[50px]"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: '#ff0000' }}
            className="w-[30px] h-[30px]  md:w-[50px] md:h-[50px]"
          />
          <Image
            src={'/imgs/ig.png'}
            alt=""
            width={500}
            priority={false}
            height={500}
            className="w-[30px] h-[30px]  md:w-[50px] md:h-[50px]"
            unoptimized={true}
          ></Image>
        </div>

        <div className=" w-full mt-4 my-6 relative -translate-y-10">
          <AntRunningEffect></AntRunningEffect>
        </div>
      </div>
    </div>
  );
}
