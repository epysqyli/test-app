import { ArrowUpRight } from "react-feather";

const Keyword = ({ historyItem }) => {
  return (
    <div className="px-10 py-5 flex items-center justify-between group cursor-pointer group">
      <div className="text-center">{historyItem}</div>
      <ArrowUpRight size={18} color="white" className="group-hover:scale-125" />
    </div>
  );
};

export default Keyword;
