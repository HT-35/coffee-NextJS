import Card from '@/components/news/card/Card';

import React from 'react';

const News = () => {
  return (
    <div className="">
      <div className="flex px-10  gap-10 mb-28">
        <div className="basis-4/12">
          <Card
            height="h-[300px]"
            img="https://file.hstatic.net/1000075078/article/thecoffeehouse_traxanhtaybac_1_d8c2ac635c5941a19c0065339727e41a_master.jpg"
            title="NGƯỢC LÊN TÂY BẮC GÓI VỊ MỘC VỀ XUÔI"
            date="16/08/2023"
            description="Những dải ruộng bậc thang, các cô gái Thái với điệu múa xòe hoa, muôn cung đường ngợp mùa hoa… đó là rẻo cao Tây Bắc luôn làm say lòng..."
          ></Card>
        </div>
        <div className="basis-8/12">
          <Card
            height="h-[600px]"
            img="https://file.hstatic.net/1000075078/article/signaturebythecoffeehouse_03_16b2ab7101e14d62835a4b231e73b65d_master.jpg"
            title="NGƯỢC LÊN TÂY BẮC GÓI VỊ MỘC VỀ XUÔI"
            date="16/08/2023"
            description="Những dải ruộng bậc thang, các cô gái Thái với điệu múa xòe hoa, muôn cung đường ngợp mùa hoa… đó là rẻo cao Tây Bắc luôn làm say lòng..."
          ></Card>
        </div>
      </div>

      <div className="flex bg-secondary py-10  w-full h-full  my-40">
        <div className="basis-5/12 -translate-y-28 shadow-2xl ">
          <Card
            height="h-full"
            classNameImage="rounded-none shadow-2xl "
            img="https://file.hstatic.net/1000075078/file/photo_2021-11-25_09-31-52_52c6f13fcc06433db2362281059d1c09.jpg"
          />
        </div>

        <div className="basis-7/12   px-10">
          <p className="border-l-4 mb-4 border-primary pl-2 text-black text-lg font-bold  leading-custom-bottom">
            KHÁM PHÁ
          </p>
          <div className="w-full flex flex-col justify-start items-start gap-8 mb-10">
            {Array(3)
              .fill(null)
              .map((_, index) => {
                return (
                  <Card
                    key={index}
                    classNameParent="flex justify-start  gap-4"
                    classNameChild=" justify-start items-start h-full"
                    classNameImage="rounded-lg shadow-2xl"
                    height="h-[200px]"
                    img="https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_master.jpg"
                    title="“XUÂN LÊN ĐI!”: LỜI CHÚC Ý NGHĨA CHO NĂM THÌN ĐIỀU CHI CŨNG NHƯ Ý"
                    date="16/08/2023"
                    description="Ngày càng nhiều những phong tục truyền thống đang được giới trẻ nhiệt tình đón nhận trong những năm gần đây, đặc biệt vào những dịp lễ hội lớn. Không khó để bắt gặp những chiếc áo dài xúng xính dạo phố dịp đầu năm."
                  ></Card>
                );
              })}
          </div>
          <div className="flex justify-center items-center w-full">
            <button className="bg-primary text-white  py-1 px-8 rounded-sm">
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>

      <div className="flex  bg-secondary py-10  w-full h-full mt-40">
        <div className="basis-5/12 -translate-y-28 shadow-2xl ">
          <Card
            height="h-full"
            classNameImage="rounded-none shadow-2xl "
            img="https://file.hstatic.net/1000075078/file/blog_94b05e56224646bc86c6e72c73ac4258.jpg"
          />
        </div>

        <div className="basis-7/12   px-10">
          <p className="border-l-4 mb-4 border-primary pl-2 text-black text-lg font-bold  leading-custom-bottom">
            Tư Vấn Nghề Nghiệp
          </p>
          <div className="w-full flex flex-col justify-start items-start gap-8 mb-10">
            {Array(3)
              .fill(null)
              .map((_, index) => {
                return (
                  <Card
                    key={index}
                    classNameParent="flex justify-start  gap-4"
                    classNameChild=" justify-start items-start h-full"
                    classNameImage="rounded-lg shadow-2xl"
                    height="h-[200px]"
                    img="https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_master.jpg"
                    title="“XUÂN LÊN ĐI!”: LỜI CHÚC Ý NGHĨA CHO NĂM THÌN ĐIỀU CHI CŨNG NHƯ Ý"
                    date="16/08/2023"
                    description="Ngày càng nhiều những phong tục truyền thống đang được giới trẻ nhiệt tình đón nhận trong những năm gần đây, đặc biệt vào những dịp lễ hội lớn. Không khó để bắt gặp những chiếc áo dài xúng xính dạo phố dịp đầu năm."
                  ></Card>
                );
              })}
          </div>
          <div className="flex justify-center items-center w-full">
            <button className="bg-primary text-white  py-1 px-8 rounded-sm">
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
