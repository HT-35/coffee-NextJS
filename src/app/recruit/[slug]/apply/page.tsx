'use client';
import React, { useState } from 'react';

import FormControl from '@mui/material/FormControl';
import { FormHelperText, Input, InputLabel } from '@mui/material';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SalaryIcon from '@/components/icon/SalaryIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarDays,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import Form from './Form';
import PersonalInfoForm from './PersionalInfoForm';

const Apply = () => {
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
    <div className="pt-5 min-h-[1500px] bg-[#F6F6F6]">
      <div className="flex gap-5 max-w-[1300px] mx-auto">
        <div className="Form w-8/12 mt-5 py-5  bg-white">
          <Form></Form>
          {/* <PersonalInfoForm /> */}
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

export default Apply;
