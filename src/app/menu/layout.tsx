import MenuFood from '@/components/menuFood/MenuFood';

const LayOutMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex justify-start items-start  gap-8   lg:px-20 lg:pt-10  h-full min-h-svh mb-8">
        <div className="hidden lg:block lg:basis-1/6"></div>
        <div className=" text-sm sm:text-base  w-full fixed">
          <MenuFood />
        </div>
        <div className="w-full lg:basis-5/6 text-sm sm:text-base h-full px-4  lg:pl-8 lg:border-l-2 border-gray-300 min-h-svh">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayOutMenu;
