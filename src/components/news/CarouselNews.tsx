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
					basis-1/2   sm:basis-1/2 lg:basis-1/3

       
					`}
            style={{
              marginRight: '105px',
            }}
          >
            <Card className="  border-amber-700 w-[280px] sm:min-w-[400px] md:min-w-[450px] lg:min-w-[480px] xl:min-w-[550px]">
              <CardContent className="  sm:pt-0 sm:p-6 p-2  sm:min-w-[400px] md:min-w-[450px] lg:min-w-[480px] xl:min-w-[520px]">
                <div className="">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-[18px] font-bold text-primary">
                      Hướng Dẫn Sửa CV
                    </div>
                  </div>
                  <div className="font-semibold text-[12px] sm:text-base">
                    Hân Tuyển Tech (CEO Tổ Kiến Coffe)
                  </div>
                </div>
                <div className="text-[12px]">
                  Ngành IT (Information Technology) là nhóm ngành công nghệ
                  thông tin ...
                </div>
                <div className="w-full">
                  <Image
                    src={
                      'https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/399469847_2659079974248099_3730907965276537688_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=lJSR3zTlV-sQ7kNvgGVti49&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=A3R_qmXzhpnjsLImZtjbKmr&oh=00_AYD8WOYqdEod6-vTFxJ49Glmkf6YyDzbGoCKEj-XyVuXrg&oe=67841996'
                    }
                    alt=""
                    width={500}
                    height={500}
                    className="object-center object-cover h-[100px] w-full"
                  ></Image>
                </div>
                <div className=" mt-2  text-right font-semibold text-[10px] sm:text-base px-1">
                  08/01/2025
                </div>
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
