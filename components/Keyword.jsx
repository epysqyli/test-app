import { ArrowUpRight } from "react-feather";

const Keyword = ({ historyItem }) => {
  return (
    <div className="flex items-center justify-around group cursor-pointer group">
      <div className="px-2 py-3 text-center">{historyItem}</div>
      <ArrowUpRight size={18} color="gray" className="group-hover:scale-125" />
    </div>
  );
};

export default Keyword;
