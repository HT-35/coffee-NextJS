import React from 'react';

const SubTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={` text-base sm:text-lg font-bold my-1 text-amber-700 ${className}`}
    >
      {children}
    </div>
  );
};

export default SubTitle;
