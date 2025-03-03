'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const menuNew = [
  {
    title: 'Tất Cả',
    path: '/news',
  },
  {
    title: 'Khám Phá',
    path: '/news/discover',
  },
  {
    title: 'Tư Vấn Nghề Nghiệp',
    path: '/news/work',
  },
];
const MenuNews = () => {
  const path = usePathname();
  return (
    <div className="menu flex justify-center items-center flex-wrap gap-3 my-5 px-8 ">
      {menuNew.map((item, index) => {
        return (
          <Link key={index} href={item.path}>
            <h3
              className={`border-2 px-6 py-[2px]    rounded-2xl ease-in-out min-w-[240px] transition-all duration-300 ${
                path === item.path
                  ? 'bg-primary bg-opacity-90 text-white  border-primary'
                  : 'bg-primary bg-opacity-0 hover:text-primary border-slate-500 hover:border-primary'
              }`}
            >
              {item.title}
            </h3>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuNews;
