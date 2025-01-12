'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const menuItem = [
  {
    title: 'Tất Cả',
    path: '/menu',
  },
  {
    title: 'Cà Phê',
    path: '/menu/coffee',
  },
  {
    title: 'Trà',
    path: '/menu/tea',
  },
];

const MenuFood = () => {
  const router = useRouter();

  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    // Hàm xử lý khi kích thước màn hình thay đổi
    const handleResize = (event: MediaQueryListEvent) => {
      setIsLargeScreen(event.matches);
    };

    // Đặt giá trị ban đầu
    setIsLargeScreen(mediaQuery.matches);

    // Lắng nghe sự kiện thay đổi kích thước màn hình
    mediaQuery.addEventListener('change', handleResize);

    // Hủy lắng nghe sự kiện khi component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);
  const pathname = usePathname();

  const handleSelectMenu = (path: string) => {
    router.push(path);
  };

  return (
    <>
      {isLargeScreen ? (
        <div className="flex gap-1  text-xl flex-col justify-start items-start transition-all duration-500 select-none">
          {menuItem.map((item) => {
            return (
              <Link
                href={item.path}
                key={item.title}
                className={`cursor-pointer hover:text-primary leading-none mb-4 pr-8 pl-2 flex items-center gap-2 ${
                  pathname === item.path ? 'text-primary' : ''
                }`}
              >
                <div
                  className={`w-10 h-10  transition-all duration-500 ease-in-out ${
                    pathname === item.path
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-75'
                  }`}
                >
                  <Image
                    src={'/imgs/iconHome.png'}
                    alt=""
                    priority={false}
                    width={40}
                    height={40}
                  />
                </div>
                <span>{item.title}</span>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="h-full bg-white w-full p-2">
          <Select
            onValueChange={(path) => {
              handleSelectMenu(path);
            }}
          >
            <SelectTrigger className="w-[calc(100%-70px)]  h-[43px] ">
              <SelectValue placeholder="Chọn Đồ Uống" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/*<SelectLabel>Tất Cả</SelectLabel>*/}
                <SelectItem value="/menu">Tất Cả</SelectItem>
                <SelectItem value="/menu/coffee">Cà Phê</SelectItem>
                <SelectItem value="/menu/tea">Trà</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    </>
  );
};

export default MenuFood;
