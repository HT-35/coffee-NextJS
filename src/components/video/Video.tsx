const Video = () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover max-h-[600px]"
      >
        <source src="/videos/Highlands.mp4"></source>
      </video>
    </>
  );
};

export default Video;
