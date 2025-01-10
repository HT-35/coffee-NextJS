import { CarouselEvent } from '@/components/events/CarouselEvent';
import { CarouselNews } from '@/components/news/CarouselNews';
import ListItemCoffee from '@/components/product/ListItemCoffee';
import Title from '@/components/Title/Title';
import { Button } from '@/components/ui/button';
import {
  faFacebook,
  faThreads,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
//import Image from 'next/image';

export default function Home() {
  return (
    <div className="overflow-x-hidden select-none">
      <div className="">
        <Image
          src={'/imgs/Highlands.gif'}
          height={500}
          width={500}
          priority
          alt=""
          className="w-full  h-full object-cover max-h-[600px]"
        ></Image>
      </div>

      <div className="Active w-full  px-14 max-xl:px-2">
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
                        priority
                        src={
                          'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/398787186_2659080027581427_1781231852099255083_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WqeYaUBiT74Q7kNvgHdk3hw&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AfLsupi3YSPiq6eYE_JCS_Y&oh=00_AYB_9SdPxmP_OjjRwh6BuOcCSJnQDwwPj_qZIbtiDFS3FQ&oe=67832FE4'
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
                    'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/420134143_2709209925901770_8216559354801765788_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=l1F9R2b29KYQ7kNvgEtRNBt&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AeOqJo6CRpLc8ZdA6684HCM&oh=00_AYAvnnBS1v6bAIzvqFk4GOqrMNVlLu_eeY8QMU_yRn_f3Q&oe=67833705'
                  }
                  alt=""
                  width={500}
                  height={300}
                  priority
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
                        priority
                        src={
                          'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/398787186_2659080027581427_1781231852099255083_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=WqeYaUBiT74Q7kNvgHdk3hw&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=AfLsupi3YSPiq6eYE_JCS_Y&oh=00_AYB_9SdPxmP_OjjRwh6BuOcCSJnQDwwPj_qZIbtiDFS3FQ&oe=67832FE4'
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
                  'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/398808878_2659080010914762_4850247571818572627_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=mC21mmQTyfwQ7kNvgFy-Met&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=ADdM8BbpvNwE-SjP4iR0CPq&oh=00_AYAcLdOjw6ryIf1wV6ekmng2TW4iF5BB4lpaaPhc6ltdFw&oe=678410A4'
                }
                alt=""
                width={500}
                height={500}
                priority
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
              priority
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
              priority
              alt=""
              className="w-[80px] h-[80px]  sm:w-[150px] sm:h-[150px] object-cover  bg-white"
            ></Image>
          </div>

          <div className="w-full flex justify-center items-center flex-col gap-8">
            <ListItemCoffee></ListItemCoffee>
            <div className="flex w-full items-center">
              <div className="basis-5/12 h-[1px] bg-black w-full shadow-2xl"></div>
              <Button className="basis-2/12 bg-primary text-white px-12 py-0 rounded-lg mx-5  shadow-xl text-sm sm:text-base">
                Menu
              </Button>
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
            className="w-[20px] h-[20px] md:w-[50px]  md:h-[50px]"
          />
          <FontAwesomeIcon
            icon={faThreads}
            className="w-[20px]  h-[20px] md:w-[50px] md:h-[50px]"
          />
          <FontAwesomeIcon
            icon={faYoutube}
            style={{ color: '#ff0000' }}
            className="w-[20px] h-[20px]  md:w-[50px] md:h-[50px]"
          />
          <Image
            src={'/imgs/ig.png'}
            alt=""
            width={500}
            priority
            height={500}
            className="w-[20px] h-[20px]  md:w-[50px] md:h-[50px]"
            unoptimized={true}
          ></Image>
        </div>
      </div>
    </div>
  );
}
