import Card from '@/components/Card';

const theme = ['Chuyện Cà Phê', 'Pha Cà Phê'];
const Teaholic = ['Pha Trà', 'Câu chuyện về trà'];
const Blog = ['In The Mood', 'Review', 'Human of TCH'];

const Discover = () => {
  return (
    <div className="max-w-[1300px] mx-auto  flex gap-10 pb-10 px-5 md:px-20 relative">
      <div className="lg:basis-9/12 w-full flex flex-col gap-8">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Card
              key={index}
              classNameParent="flex justify-start gap-4"
              classNameChild="justify-start items-start "
              classNameImage="rounded-lg shadow-2xl"
              heightImg="h-[200px]"
              img="https://file.hstatic.net/1000075078/article/thecoffeehouse_caphehighlight01_de40c0102a954c50a328f7befcdd82bd_master.jpg"
              title={
                'XUÂN LÊN ĐI!: LỜI CHÚC Ý NGHĨA CHO NĂM THÌN ĐIỀU CHI CŨNG ...'
              }
              date="16/08/2023"
              description="Ngày càng nhiều những phong tục truyền thống đang được giới trẻ nhiệt tình đón nhận trong những năm gần đây, đặc biệt vào những dịp lễ hội lớn. Không khó để bắt gặp những chiếc áo dài xúng xính dạo phố dịp đầu năm."
            />
          ))}
      </div>

      <div className="hidden h-full sticky top-[90px] lg:block lg:basis-3/12">
        <div className="pb-5 min-h-[600px]">
          <div className="font-bold text-lg text-primary mb-2">
            Chủ đề liên quan
          </div>
          {theme.map((item, index) => (
            <div
              className="text-xs cursor-pointer hover:text-primary mb-1"
              key={index}
            >
              {item}
            </div>
          ))}
          <div className="font-medium text-primary mt-4 mb-2">Teaholic</div>
          {Teaholic.map((item, index) => (
            <div
              className="text-xs cursor-pointer hover:text-primary mb-1"
              key={index}
            >
              {item}
            </div>
          ))}
          <div className="font-medium text-primary mt-4 mb-2">Blog</div>
          {Blog.map((item, index) => (
            <div
              className="text-xs cursor-pointer hover:text-primary mb-1"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
