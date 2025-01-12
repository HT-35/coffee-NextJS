import React from 'react';

const Title = ({
  children,
  className,
  align,
}: {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}) => {
  return (
    <div
      className={`select-none font-bold text-amber-700 text-lg sm:text-3xl w-full ${
        align ? `text-${align}` : 'text-center'
      } ${className || 'my-2 mt-8 mb-6'}`}
    >
      {children}
    </div>
  );
};

export default Title;
