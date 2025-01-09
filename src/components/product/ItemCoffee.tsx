import Image from 'next/image';
import React from 'react';

const ItemCoffee = () => {
  return (
    <div>
      <Image
        src="/imgs/FREEZE_TRA_XANH.jpg"
        height={300}
        width={300}
        alt=""
      ></Image>
      <div className="text-center ml-2 font-bold text-[12px] sm:text-base">
        Match Đá Xay
      </div>
    </div>
  );
};

export default ItemCoffee;
