import Image from 'next/image';
import React from 'react';

const ItemWater = () => {
  return (
    <div className="max-w-[250px] h-full flex justify-center items-center flex-col">
      <div className="w-full h-full">
        <Image
          src={
            'https://product.hstatic.net/1000075078/product/1736241924_tx-espresso-marble_8539bea7f5ad4180b92746b7a1653f33.png'
          }
          alt="Trà Xanh Espresso Marble"
          width={250} // Giảm kích thước xuống vì max-width của container là 250px
          height={250}
          priority={false} // Chỉ load khi cần thiết
          loading="lazy" // Lazy loading
          quality={25} // Chất lượng hình ảnh thấp nhất có thể (1-100)
          sizes="(max-width: 250px) 100vw, 250px"
          style={{
            objectFit: 'cover',
          }}
          className="w-full mx-auto object-cover object-center shadow-2xl rounded-lg"
        />
      </div>
      <div className="w-full h-full flex justify-center items-center flex-col mt-2">
        <p className="text-xs sm:text-sm font-bold">Trà Xanh Espresso Marble</p>
        <p className="text-xs sm:text-sm ">49.000 đ</p>
      </div>
    </div>
  );
};

export default ItemWater;
