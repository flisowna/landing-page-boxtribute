type Props = {
  blogText: string;
};

const NewsBody = ({ blogText }: Props) => {
  return <div className="max-w-2xl mx-auto">{blogText}</div>;
};

export default NewsBody;
