const Card = ({
  img,
  title,
  height,
  date,
  description,
  classNameChild,
  classNameImage,
  classNameParent,
}: {
  img: string;
  title?: string;
  height?: string;
  date?: string;
  description?: string;

  classNameChild?: string;
  classNameImage?: string;
  classNameParent?: string;
}) => {
  return (
    <div className={` w-full h-full  ${classNameParent} `}>
      <div
        className={`w-full ${height ? height : 'h-[300px]'}    ${
          classNameImage ? classNameImage : 'bg-cover  rounded-xl shadow-xl'
        }`}
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
          } h-full`}
        >
          <p className="text-black text-base font-bold  leading-custom-bottom">
            {title}
          </p>
          <div className=" text-xs text-gray-400">{date}</div>
          <p className="text-black text-xs text-justify">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
