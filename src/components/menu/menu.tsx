'use client';
import ButtonMenu from '@/components/menu/ButtonMenu';
//import { faBars } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
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

  // Toggle the state between active and inactive
  const handleActive = () => {
    setActive((prev) => !prev);
  };
  return (
    <div>
      <div
        className={`absolute inset-0 bg-black  z-20 transition-all duration-300
        ${active ? 'bg-opacity-50' : 'bg-opacity-0 pointer-events-none'}
        `}
      ></div>
      <div
        className={` right-11 sm:right-14 top-2  z-50 max-xl:fixed ${
          active && 'right-13 sm:right-16'
        }`}
      >
        <div className="py-1 flex items-centers justify-between px-6 max-xl:hidden">
          <div className="text-xl font-semibold">
            <Link href={'/'}>
              <Image
                src={'/imgs/iconHome.png'}
                alt=""
                width={80}
                height={80}
              ></Image>
            </Link>
          </div>
          <div className="flex gap-8 text-xl font-semibold justify-center items-center ">
            {menuItem.map((item, index) => {
              return (
                <Link href={item.path} key={index} className="">
                  {item.title}
                </Link>
              );
            })}
            <Link
              href="https://www.google.com/maps/place/T%E1%BB%95+Ki%E1%BA%BFn+Coffee/@10.783782,106.657103,19z/data=!4m6!3m5!1s0x31752fc1ef81ffed:0x5445e40ddd97cb3d!8m2!3d10.7837822!4d106.6571028!16s%2Fg%2F11wv3q8pzj?hl=vi&entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"
              className=""
              target="_blank"
            >
              Đường Tới Quán
            </Link>
          </div>
          <div className=""></div>
        </div>
        <div className="xl:hidden bg-slate-700   ">
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
