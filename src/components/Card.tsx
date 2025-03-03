const Card = ({
  img,
  title,
  heightImg,
  widthImg,
  date,
  description,
  classNameChild,
  classNameImage,
  classNameParent,
}: {
  img: string;
  title?: string;
  heightImg?: string;
  widthImg?: string;
  date?: string;
  description?: string;

  classNameChild?: string;
  classNameImage?: string;
  classNameParent?: string;
}) => {
  const shortTitle =
    title && title?.length > 60 ? `${title.slice(0, 60)} ...` : title;
  return (
    <div className={` w-full   ${classNameParent} max-lg:flex max-lg:flex-col`}>
      <div
        className={` ${heightImg ? heightImg : 'h-[300px] w-full'} 
        ${widthImg ? widthImg : ' w-full'}
        ${classNameImage ? classNameImage : 'bg-cover  rounded-xl shadow-xl'}`}
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>

      {title && (
        <div
          className={` flex flex-col gap-1 ${
            classNameChild ? classNameChild : 'py-2'
          } `}
        >
          <p className="text-black text-xs sm:text-sm font-semibold  leading-custom-bottom">
            {shortTitle}
          </p>
          <div className=" text-xs text-gray-400">{date}</div>
          <p className="text-black text-xs font-thin text-justify">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
