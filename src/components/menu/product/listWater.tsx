import ItemWater from '@/components/menu/product/itemWater';
import React from 'react';

const ListWater = () => {
  return (
    <div className="w-full h-full   gap-5 lg:gap-20 grid grid-cols-2 lg:grid-cols-3">
      {Array(5)
        .fill(null)
        .map((_, index) => {
          return (
            <div
              key={index}
              className="basis-1/3 md:basis-1/4 flex justify-center items-center"
            >
              <ItemWater></ItemWater>
            </div>
          );
        })}
    </div>
  );
};

export default ListWater;
