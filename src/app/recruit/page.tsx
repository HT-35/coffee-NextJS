import SalaryIcon from '@/components/icon/SalaryIcon';
import { Button } from '@/components/ui/button';
import {
  faCalendarDays,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const listJob = [
  {
    url: '/recruit/dau-bep-hcm',
    jobName: 'Barista (Nhân Viên Pha Chế)',
    salary: '8 - 12 triệu VNĐ',
    location: 'Thành phố Hồ Chí Minh (Quận 1)',
    dateEnd: 'Hạn nộp 15/05/2025',
  },
  {
    url: '/recruit/dau-bep-hcm-2',
    jobName: 'Nhân Viên Phục Vụ',
    salary: '6 - 9 triệu VNĐ',
    location: 'Hà Nội (Ba Đình)',
    dateEnd: 'Hạn nộp 10/05/2025',
  },
  {
    url: '/recruit/dau-bep-hcm-3',
    jobName: 'Nhân Viên Thu Ngân',
    salary: '7 - 10 triệu VNĐ',
    location: 'Đà Nẵng (Hải Châu)',
    dateEnd: 'Hạn nộp 20/05/2025',
  },
  {
    url: '/recruit/dau-bep-hcm-4',
    jobName: 'Bếp Trưởng',
    salary: '15 - 20 triệu VNĐ',
    location: 'Thành phố Hồ Chí Minh (Quận 3)',
    dateEnd: 'Hạn nộp 05/06/2025',
  },
  {
    url: '/recruit/dau-bep-hcm-5',
    jobName: 'Nhân Viên Giao Hàng',
    salary: '9 - 12 triệu VNĐ',
    location: 'Hà Nội (Cầu Giấy)',
    dateEnd: 'Hạn nộp 25/04/2025',
  },
];

const Recruit = () => {
  return (
    <div className=" min-h-screen bg-[#F6F6F6]  py-5 px-5">
      <h1 className="my-2 text-center text-5xl text-primary">TUYỂN DỤNG</h1>
      <div className="max-w-[900px] mx-auto flex flex-col bg-white  rounded-xl shadow-2xl select-none ">
        {listJob.map((item, index) => {
          return (
            <div
              className={`flex max-lg:flex-col  gap-2 lg:gap-5 justify-between py-5 border-b-2 px-10 cursor-pointer hover:bg-slate-200
                ${index == 0 && ' rounded-t-xl'}
                ${index == listJob.length - 1 && 'rounded-b-xl'}
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
                <Link href={item.url}>
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
  );
};

export default Recruit;
