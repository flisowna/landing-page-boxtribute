import Image from "next/image";

type Props = {
  image: string;
  image_description: string;
  bg_color: string;
  order?: number;
  children: React.ReactNode;
};

const ImageText5050 = ({
  image,
  image_description,
  bg_color,
  order,
  children,
}: Props) => {
  return (
    <div className={`flex flex-col md:flex-row bg-${bg_color}`}>
      <div className={`w-full h-80 md:w-1/2 md:h-auto relative order-${order}`}>
        <Image
        // width={1000}
        // height={1000}
          layout="fill"
          src={image}
          alt={image_description}
          objectFit='cover'
          objectPosition='top'
        />
      </div>
      <div className="w-full px-4 md:w-1/2 md:px-20 py-8 ">{children}</div>
    </div>
  );
};

export default ImageText5050;
