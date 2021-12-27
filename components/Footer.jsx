import { Archive } from "react-feather";

const Footer = () => {
  return (
    <div className="flex items-center justify-around p-10">
      <Archive color="gray"/>
      <div className="text-gray-700">Check search history and latest results</div>
    </div>
  );
};

export default Footer;
