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
      <div className={`w-full md:w-1/2 h-1/2 order-${order}`}>
        <Image
          width={1600}
          height={1000}
          src={image}
          alt={image_description}
        />
      </div>
      <div className="w-full px-4 md:w-1/2 lg:px-20 lg:py-0 py-12">{children}</div>
    </div>
  );
};

export default ImageText5050;
