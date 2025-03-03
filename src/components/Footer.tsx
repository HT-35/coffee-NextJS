import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-primary  xl:pl-8 pb-8 text-white max-xl:px-2 max-lg:pb-2">
      <div className="w-full flex items-center gap-4">
        <div className="basis-4/6 max-lg:basis-1/2 flex flex-col justify-start  ">
          <p className="text-4xl my-6  text-left w-full text-white   max-lg:text-lg  max-xl:my-2">
            Chúng Tôi
          </p>
          <p className="text-white  max-md:text-[11px]">
            Định vị sẽ là thương hiệu cafe hoạt động 24/7 với không gian sân
            vườn rộng rãi kết hợp cùng đa dạng các hoạt động phù hợp cho cả các
            bạn trẻ, sinh viên cũng như là nơi tụ tập cuối tuần cho gia đình,
            nhóm ban.
          </p>
          <p className="pt-2">Liên Hệ: 1800 6936</p>
        </div>
        {/* <div
          className="basis-2/6 max-lg:basis-1/2  max-w-[600px] max-md:max-w-[190px] 
         max-lg:max-w-[400px] max-xl:max-w-[300px] max-xl:max-h-[200px]
         
         mx-auto  flex flex-col   pt-4"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d259.52605834091446!2d106.65728258445472!3d10.783841396218898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fc1ef81ffed%3A0x5445e40ddd97cb3d!2zVOG7lSBLaeG6v24gQ29mZmVl!5e0!3m2!1svi!2s!4v1736372412691!5m2!1svi!2s"
            width="600px"
            height="180px"
            style={{
              border: '0',
            }}
            allowFullScreen={true}
            loading="lazy"
            className=" max-md:max-h-[100px] max-lg:max-h-[150px] max-xl:max-w-[320px]  max-md:max-w-[190px] xl:max-w-[400px] mx-auto"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="text-center mt-1 max-md:text-[10px]">
            ĐC: 30/7 Tứ Hải, Phường 6, Tân Bình, HCM
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
