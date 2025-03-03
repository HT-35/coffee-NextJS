'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { listJob } from '../page';
import SalaryIcon from '@/components/icon/SalaryIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const DetailReruit = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const job = useState({
    jobName: 'Line Cook (Đầu Bếp Chính)',

    salary: '8 - 12 triệu VNĐ',

    description: `
        <ul className="text-xs"     style={{
              fontSize: '12px',
            }}>
          <li>Tiếp nhận order từ khách hàng, phân công cho các bộ phận khác trong bếp và trực tiếp triển khai chế biến</li>
          <li>Định mức chế biến, tẩm ướp các nguyên liệu theo quy chuẩn phù hợp</li>
          <li>Chế biến món ăn chủ đạo theo quy trình và đảm bảo tiêu chuẩn của nhà hàng</li>
          <li>Phân công công việc chế biến cho nhân viên cấp dưới dựa theo khả năng của mỗi người trong trường hợp nhà hàng đông khách và số lượng món dồn dập</li>
          <li>Trang trí và hoàn thiện món ăn sau khi chế biến theo đúng quy chuẩn của nhà hàng</li>
          <li>Giám sát và kiểm tra thường xuyên các vật dụng, thiết bị nhà bếp, báo cáo kịp thời khi phát hiện hư hỏng</li>
          <li>Liên hệ, phối hợp với các bộ phận liên quan trong công tác bảo trì, bảo dưỡng thiết bị và vật dụng nhà bếp</li>
          <li>Đào tạo nghiệp vụ và hướng dẫn công việc khi có nhân viên mới</li>
          <li>Thường xuyên kiểm tra tiến độ công việc, bám sát quy trình làm việc của bộ phận dưới quyền, từ đó có thể đưa ra tham mưu dùng người cho bếp trưởng</li>
          <li>Hỗ trợ bếp trưởng giải quyết những thắc mắc, sửa chữa sai sót cho nhân viên</li>
          <li>Thay mặt bếp trưởng (khi vắng mặt) giải quyết các công việc của cấp trên giao xuống</li>
      </ul>

      `,
    requirements: `
        <ul>
          <li>Có kinh nghiệm ít nhất 1 năm trong nghề Bếp.</li>
          <li>Sức khỏe tốt, chịu khó, chịu được áp lực trong môi trường Bếp.</li>
          <li>Có tinh thần làm việc nhóm tốt.</li>
          <li>Làm việc theo ca và có thể tăng ca theo nhu cầu công việc.</li>
        </ul>
      `,
    location:
      'Signature By The Coffee House tại Cresent Mall Quận 7, Hồ Chí Minh',
    dateEnd: '15/05/2025',
  });

  return (
    <div className=" bg-[#F6F6F6]  min-h-[1300px] py-10 relative">
      {/* Job Detail */}
      <div className="flex   pb-5 max-w-[1300px] mx-auto ">
        <div className="px-5 md:w-8/12">
          <div className=" bg-white py-5  px-5 mb-10">
            <h1 className="text-28  border-b-2 ">{job[0].jobName}</h1>
            <h1 className="text-base 5 my-2">Mô tả công việc : </h1>
            <div className="px-16 my-2">
              <div
                className="text-xs "
                dangerouslySetInnerHTML={{ __html: job[0].description }}
              />
            </div>
            <h1 className="text-base 5 my-2">Yêu Cầu Công Việc : </h1>
            <div className="px-16 my-2">
              <div
                className="text-xs "
                dangerouslySetInnerHTML={{ __html: job[0].requirements }}
              />
            </div>

            <div className=" flex justify-start items-center gap-2 ">
              <h1 className="text-base 5 my-2">Địa điểm làm việc: </h1>
              <div
                className="text-xs "
                dangerouslySetInnerHTML={{ __html: job[0].location }}
              />
            </div>
          </div>

          {/* Job */}

          <div className=" bg-white ">
            <h1 className="text-28 py-5  px-5">Related Jobs</h1>
            {listJob.map((item, index) => {
              return (
                <div
                  className={`flex max-lg:flex-col  gap-2 lg:gap-5 justify-between py-5 px-10 cursor-pointer hover:bg-slate-200
                  ${index == 0 ? '' : ''}
                   border-t-2
        
                  `}
                  key={index}
                >
                  <div className=" flex flex-col gap-2 justify-start">
                    <h1 className="text-base">{item.jobName}</h1>
                    <div className="text-xs flex items-center  gap-2 font-thin sm:text-sm">
                      <SalaryIcon /> <p> {item.salary} </p>
                    </div>
                    <div className="text-xs flex items-center gap-2 font-thin sm:text-sm">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <div>{item.location}</div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start gap-2 lg:items-center">
                    <h1>
                      <FontAwesomeIcon icon={faCalendarDays} /> Hạn nộp :{' '}
                      {item.dateEnd}
                    </h1>
                    <Link href={`/recruit/${item.url}/apply`}>
                      <Button className="bg-white text-black shadow-lg border-[1px] hover:text-white">
                        Ứng Tuyển Ngay
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:w-4/12  relative">
          <div className=" application sticky top-20 px-6 bg-white flex justify-center items-center flex-col py-4 ">
            <div className=" flex flex-col gap-2 justify-start items-start">
              <h1 className="text-28">{job[0].jobName}</h1>

              <Link href={'recruit//apply'}>
                <Button className="bg-primary w-full font-bold text-white shadow-lg border-[1px] hover:text-white">
                  Ứng Tuyển Ngay
                </Button>
              </Link>

              <div className="flex flex-col gap-4">
                <div className="flex  gap-4 items-center justify-start">
                  <SalaryIcon />
                  <p className="text-xs"> {job[0].salary} </p>
                </div>

                <div className="flex  gap-4 items-center justify-start">
                  <FontAwesomeIcon icon={faCalendarDays} />

                  <p className="text-xs"> {job[0].dateEnd}</p>
                </div>

                <div className="flex  gap-4 items-start justify-start">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <h1 className="text-xs">{job[0].location}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReruit;
