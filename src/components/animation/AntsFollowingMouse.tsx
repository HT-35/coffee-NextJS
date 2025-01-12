'use client';

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const AntsFollowingMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Cập nhật vị trí chuột khi di chuyển
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.pageX + 50; // Vị trí chuột theo tài liệu (bao gồm cả phần cuộn)
      const y = event.pageY + 50;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ants = Array.from({ length: 10 }); // Tạo 10 con kiến

  return (
    <div className="absolute inset-0 pointer-events-none z-50">
      {ants.map((_, index) => (
        <Ant
          key={index}
          mousePosition={mousePosition}
          //delay={Math.random() * 0.9} // Thời gian trễ ngẫu nhiên
        />
      ))}
    </div>
  );
};

const Ant = ({
  mousePosition,
  delay,
}: {
  mousePosition: { x: number; y: number };
  delay?: number;
}) => {
  const controls = useAnimation();

  // Animation theo chuột
  useEffect(() => {
    controls.start({
      x: mousePosition.x + Math.random() * 90 - 25, // Xung quanh vị trí chuột
      y: mousePosition.y + Math.random() * 90 - 25,
      //transition: { duration: 0.4 + delay }, // Hiệu ứng trễ khác nhau
      transition: { duration: 0.4 }, // Hiệu ứng trễ khác nhau
    });
  }, [mousePosition, controls, delay]);

  return (
    <motion.div
      animate={controls}
      style={{
        position: 'absolute',
        width: '40px',
        height: '40px',
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/10/15/03/77/360_F_1015037730_GSGgEZhKF8LH4OGLI1wwzQEGQWe7qT4O.webp')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default AntsFollowingMouse;
