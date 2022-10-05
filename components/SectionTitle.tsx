type Props = {
  title: string
};

const SectionTitle = ({ title }: Props) => {
  return (
    <div>
      <h2 className="bg-blue pt-4 md:pt-6 md:pb-2 py-1 md:py-2 font-bold capitalize">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;