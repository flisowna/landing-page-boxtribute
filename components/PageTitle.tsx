type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <h1 className="mt-4 md:mt-8 text-center">
      {title}
    </h1>
  );
};

export default PageTitle;
