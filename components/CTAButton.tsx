import Link from "next/link";

type Props = {
  cta_link: string;
  cta_button: string;
};

const CTAButton = ({ cta_link, cta_button }: Props) => {
  return (
    <Link href={cta_link}>
      <button className="bg-red px-8 py-2 text-white text-2xl rounded-lg">
        {cta_button}
      </button>
    </Link>
  );
};

export default CTAButton;
