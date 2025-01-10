import React from 'react';

const Title = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={` select-none  text-center text-4xl font-bold my-2 mt-8 mb-6 text-amber-700
        max-md:text-lg
        max-lg:text-2xl
        ${className}`}
    >
      {children}
    </div>
  );
};

export default Title;
