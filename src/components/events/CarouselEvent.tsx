'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  //CarouselNext,
  //CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Autoplay from 'embla-carousel-autoplay';

export function CarouselEvent() {
  return (
    <Carousel
      //opts={{ loop: true }}
      opts={{
        align: 'start',
      }}
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
            //md:basis-1/2 lg:basis-1/2
            className={`   basis-1/2	sm:basis-1/2 md:basis-1/2 lg:basis-1/3 `}
            style={{
              marginRight: '100px',
            }}
          >
            <div
              className="p-2
               w-[290px] max-sm:mr-28
              sm:min-w-[420px]
              md:min-w-[450px]
              lg:min-w-[450px]

              xl:min-w-[510px]
            
            "
            >
              <Card className="">
                <CardContent className="p-2 border-2 border-primary border-opacity-50 rounded-lg">
                  <div className="flex-col w-full text-sm sm:text-base">
                    <div className="flex justify-between items-center w-full">
                      <div className="text-[18px] font-bold text-primary">
                        {index + 1} {''} Design System
                      </div>
                      <div className="  flex items-center gap-1 sm:gap-2  border-2 border-primary  p-[1px] px-2 rounded-lg bg-lightPurple">
                        <div className="">
                          <FontAwesomeIcon
                            icon={faStar}
                            size="2xs"
                            style={{ color: '#FFD43B' }}
                            className="w-3 sm:w-5"
                          />
                        </div>
                        <h1 className="font-semibold ">2.8K</h1>
                      </div>
                    </div>
                    <h1 className=" text-[12px] sm:text-base">
                      Hân Tuyển Tech (CEO Tổ Kiến Coffe)
                    </h1>
                  </div>
                  <p className=" mt-2  text-right  text-[12px] sm:text-[14px] text-slate-400  px-1">
                    08/01/2025
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/*<CarouselPrevious />
      <CarouselNext />*/}
    </Carousel>
  );
}
