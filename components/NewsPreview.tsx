import Link from "next/link";
import ImageText5050 from "./ImageText5050";
import NewsHeader from "./NewsHeader";

interface INewsHeaderData {
  title: string;
  headline: string;
  shortText: string;
  slug: string;
  image: string;
  image_description: string
  
}

type Props = {
  newsHeaderData: INewsHeaderData;
  order: number
};

const NewsPreview = ({ newsHeaderData, order }: Props) => {
  return (
    <ImageText5050
      image={newsHeaderData.image}
      image_description={newsHeaderData.image_description}
      bg_color="gray"
      order={order}
    >
      <NewsHeader newsHeaderData={newsHeaderData} />

      <Link as={`/posts/${newsHeaderData.slug}`} href="/posts/[slug]">
        <a className="flex text-red text-5xl mt-8 ">
          <h3 className="mr-16 capitalize">read more</h3>
          <img src="/uploads/arrow.svg" />
        </a>
      </Link>
      
     </ImageText5050>
  );
};

export default NewsPreview;
