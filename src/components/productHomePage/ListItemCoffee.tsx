import ItemCoffee from '@/components/productHomePage/ItemCoffee';
import React from 'react';

const ListItemCoffee = () => {
  return (
    <div className="w-full h-full flex justify-center gap-4 md:gap-20">
      {Array(3)
        .fill(null)
        .map((_, index) => {
          return (
            <div key={index} className={`${index === 1 && 'pt-14'}`}>
              <ItemCoffee></ItemCoffee>
            </div>
          );
        })}
    </div>
  );
};

export default ListItemCoffee;
