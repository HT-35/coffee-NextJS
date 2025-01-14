'use client';
import ButtonMenu from '@/components/menu/ButtonMenu';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const menuItem: {
  title: string;
  path: string;
}[] = [
  {
    title: 'Trang Chủ',
    path: '/',
  },
  {
    title: 'Menu',
    path: '/menu',
  },
  {
    title: 'Sự Kiện',
    path: '/product',
  },
  {
    title: 'Tin Tức',
    path: '/news',
  },
  {
    title: 'Đôi Nét Về Tổ Kiến',
    path: '/ant',
  },
];

const Menu = () => {
  const [active, setActive] = useState(false);

  const path = usePathname();

  // Toggle the state between active and inactive
  const handleActive = () => {
    setActive((prev) => !prev);
  };
  return (
    <div>
      <div
        className={`absolute inset-0 bg-black  z-20 transition-all duration-300 select-none
        ${active ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'}
        `}
      ></div>
      <div
        className={` right-12 sm:right-14 top-2  z-50 max-lg:fixed ${
          active && 'right-14 sm:right-16'
        }`}
      >
        <div className="py-1 flex items-centers justify-start pl-20  border-b-2 fixed w-full z-[999] bg-white text-black max-lg:hidden">
          <div className="text-xl font-semibold basis-1/6">
            <Link href={'/'}>
              <Image
                src={'/imgs/iconHome.png'}
                alt=""
                priority={false}
                width={80}
                height={80}
              ></Image>
            </Link>
          </div>
          <div className="flex gap-8 text-xl font-semibold justify-center items-center ">
            {menuItem.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  key={index}
                  className={`cursor-pointer hover:text-primary   py-4 ${
                    path === item.path ? 'text-primary' : ''
                  }`}
                >
                  <p className="text-base font-bold">{item.title}</p>
                </Link>
              );
            })}
            <Link
              href="https://www.google.com/maps/place/T%E1%BB%95+Ki%E1%BA%BFn+Coffee/@10.783782,106.657103,19z/data=!4m6!3m5!1s0x31752fc1ef81ffed:0x5445e40ddd97cb3d!8m2!3d10.7837822!4d106.6571028!16s%2Fg%2F11wv3q8pzj?hl=vi&entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"
              className=""
              target="_blank"
            >
              <p className="text-base font-bold">Đường Tới Quán</p>
            </Link>
          </div>
          <div className=""></div>
        </div>
        <div className="lg:hidden bg-slate-700   ">
          <ButtonMenu
            menuItem={menuItem}
            active={active}
            handleActive={handleActive}
          ></ButtonMenu>
        </div>
      </div>
    </div>
  );
};

export default Menu;
