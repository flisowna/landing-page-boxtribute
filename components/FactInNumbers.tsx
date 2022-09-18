import AnimatedNumber from "react-animated-number";

type Props = {
  icon: string;
  number: number;
  description: string;
  image_description: string;
};

const FactInNumbers = ({
  icon,
  number,
  description,
  image_description,
}: Props) => {
  return (
    <div className="flex grow flex-col flex-1 p-8 m-8 items-center">
      <img src={icon} alt={image_description} className="h-24 w-24 mb-4" />
      <h1 className="text-7xl">
        <AnimatedNumber
          value={number}
          duration={1500}
          formatValue={(n) => n.toFixed(0)}
          configs={(index) => {
            return {
              mass: 1,
              tension: 230 * (index + 1),
              friction: 140,
            };
          }}
        />
      </h1>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default FactInNumbers;
