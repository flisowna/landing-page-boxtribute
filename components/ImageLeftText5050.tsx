import Link from "next/link";
import Image from "next/image";

type Props = {
  image: string;
  image_description: string;
  bg_color: string;
  children: React.ReactNode;
};

const ImageLeftText5050 = ({
  image,
  image_description,
  bg_color,
  children,
}: Props) => {
  return (
    <div className={`flex flex-col md:flex-row bg-${bg_color}`}>
      <div className="w-full md:w-1/2 h-1/2">
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

export default ImageLeftText5050;
