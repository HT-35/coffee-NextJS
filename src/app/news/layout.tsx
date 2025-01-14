import MenuNews from '@/components/news/menuNew/MenuNews';

import React from 'react';

const LayOutNew = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pt-10 ">
      <div className=" max-w-[750px] mx-auto text-center">
        <h1 className=" text-base lg:text-2xl border-b-4 border-primary font-bold max-w-[150px] mx-auto text-center mb-4">
          Tổ Kiến
        </h1>
        <p className="text-[15px] ">
          Tổ Kiến sẽ là nơi chia sẻ kiến thức thực tiễn về tuyển dụng, sửa CV,
          và phát triển nghề nghiệp, giúp bạn tự tin chinh phục mọi thử thách,
          bên tách cà phê đậm đà và không gian đầy cảm hứng.
        </p>
        <MenuNews></MenuNews>
      </div>
      <div className=" mt-10">{children}</div>
    </div>
  );
};

export default LayOutNew;
