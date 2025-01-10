import Link from 'next/link';
import React from 'react';

const menuItem = [
  {
    title: 'Menu',
    path: '/',
  },
  {
    title: 'Coffee',
    path: '/menu/coffee',
  },
  {
    title: 'Tea',
    path: '/menu/tea',
  },
];

const LayOutMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex justify-start items-center px-20">
        <div className="flex gap-8 text-xl flex-col justify-center items-center ">
          {menuItem.map((item) => {
            return (
              <Link href={item.path} key={item.title}>
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default LayOutMenu;
