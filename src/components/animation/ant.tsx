'use client';

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const AntRunningEffect = () => {
  const controls = useAnimation();
  const [windowWidth, setWindowWidth] = useState<number | null>(null); // Khởi tạo null để kiểm tra trạng thái mount

  // Cập nhật chiều rộng màn hình khi component được mount
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth === null) return () => {}; // Chỉ chạy khi windowWidth đã được cập nhật

    const animateAnt = () => {
      controls
        .start({
          x: windowWidth, // Di chuyển sang bên phải màn hình
          y: 0, // Giữ y cố định
          transition: {
            duration: 50, // Thời gian di chuyển từ trái sang phải
            ease: 'linear',
          },
        })
        .then(async () => {
          await controls.start({ x: -80 }); // Đặt lại vị trí ban đầu ngoài màn hình bên trái
          animateAnt(); // Gọi lại animation để lặp vô tận
        });
    };

    animateAnt();

    return () => {};
  }, [controls, windowWidth]);

  return (
    <>
      <motion.div
        animate={controls}
        initial={{
          x: -80, // Bắt đầu từ ngoài màn hình bên trái
          y: 0,
        }}
        className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] absolute top-5"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/fe/2d/0a/fe2d0a9fb61e5aff1a2a62aaf2e3f0b5.gif')", // Đường dẫn hình con kiến
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </>
  );
};

export default AntRunningEffect;
