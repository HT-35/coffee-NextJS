'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //CarouselNext,
  //CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export function CarouselNews() {
  return (
    <Carousel
      opts={{ align: 'start' }}
      className="w-full select-none"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            data-index={index}
            key={index}
            className={`
					basis-1/2   sm:basis-1/2 lg:basis-1/3   mr-[107px]
					`}
            //style={{
            //  marginRight: '107px',
            //}}
          >
            <Card className="  border-amber-700 w-[270px] sm:min-w-[400px] md:min-w-[450px] lg:min-w-[460px] xl:min-w-[500px]">
              <CardContent className="  sm:pt-0 sm:p-6 p-2  sm:min-w-[400px] md:min-w-[450px] lg:min-w-[460px] xl:min-w-[500px]">
                <div className="">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[18px] font-bold text-primary">
                      Hướng Dẫn Sửa CV
                    </div>
                  </div>
                  <h1 className=" text-[12px] sm:text-base">
                    Hân Tuyển Tech (CEO Tổ Kiến Coffe)
                  </h1>
                </div>
                <p className="text-[12px] sm:text-[14px] mb-1">
                  IT (Information Technology) là ngành công nghệ thông tin ...
                </p>
                <div className="w-full">
                  <Image
                    src={
                      'https://cdn.dribbble.com/userupload/21312165/file/original-ceea948d69650ad8de4b87de54c57d1b.jpg?resize=752x564&vertical=center'
                    }
                    alt=""
                    priority={false}
                    width={500}
                    height={500}
                    className="object-center object-cover h-[100px] w-full"
                  ></Image>
                </div>
                <p className=" mt-2  text-right  text-[12px] sm:text-[14px] text-slate-400  px-1">
                  08/01/2025
                </p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/*<CarouselPrevious />
      <CarouselNext />*/}
    </Carousel>
  );
}
