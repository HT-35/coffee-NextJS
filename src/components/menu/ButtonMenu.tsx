'use client';
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { faBars, faCaretUp, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

import React from 'react';

const ButtonMenu = ({
  menuItem,
  active,
  handleActive,
}: {
  menuItem: {
    title: string;
    path: string;
  }[];
  active: boolean;
  handleActive: () => void;
}) => {
  return (
    <DropdownMenu open={active} onOpenChange={() => handleActive()}>
      <DropdownMenuTrigger
        asChild
        className=" select-none cursor-pointer"
        onClick={() => handleActive()}
      >
        {active ? (
          <div className="absolute xl:hidden bg-white p-1 rounded-lg cursor-pointer border-2 w-[43px] h-[43px] flex justify-center items-center">
            <FontAwesomeIcon
              icon={faX}
              style={{ color: 'black' }}
              size="1x"
              className="w-6"
            />
          </div>
        ) : (
          <div className="absolute xl:hidden bg-black ml-2  p-1  rounded-lg cursor-pointer w-[43px] h-[43px] flex justify-center items-center">
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: '#ffffff' }}
              size="1x"
              className="w-6"
            />
          </div>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="relative w-64  sm:w-72 bg-white px-4 py-2 mr-2 sm:mr-7 mt-5 rounded-lg  
     
      shadow-2xl
      "
      >
        <div className="absolute top-0 right-0 -translate-y-7 -z-10">
          <FontAwesomeIcon
            icon={faCaretUp}
            size="4x"
            style={{ color: 'white' }}
            className="shadow-2xl "
          />
        </div>

        <DropdownMenuLabel className=" px-4 py-2 font-bold">
          Danh Sách Sản Phẩm
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup className="">
          {menuItem?.length > 0 &&
            menuItem?.map((item, index) => {
              return (
                <Link key={index} href={item.path} className="">
                  <DropdownMenuItem className="border-0 px-4 py-2 flex items-center justify-between text-sm sm:text-base rounded-lg hover:bg-primary hover:text-white cursor-pointer">
                    {item?.title}
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              );
            })}
          <Link
            href="https://www.google.com/maps/place/T%E1%BB%95+Ki%E1%BA%BFn+Coffee/@10.783782,106.657103,19z/data=!4m6!3m5!1s0x31752fc1ef81ffed:0x5445e40ddd97cb3d!8m2!3d10.7837822!4d106.6571028!16s%2Fg%2F11wv3q8pzj?hl=vi&entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D"
            className=""
            target="_blank"
          >
            <DropdownMenuItem className="border-0 px-4 py-2 flex items-center justify-between text-sm sm:text-base rounded-lg hover:bg-primary hover:text-white cursor-pointer">
              Đường Tới Quán
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ButtonMenu;
