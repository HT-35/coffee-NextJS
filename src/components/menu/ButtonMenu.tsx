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
                <DropdownMenuItem
                  key={index}
                  className=" px-4 py-2 flex items-center justify-between text-sm sm:text-base rounded-lg"
                >
                  {item?.title}
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              );
            })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ButtonMenu;
