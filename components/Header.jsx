import { GitHub } from "react-feather";

const Header = () => {
  return (
    <div className="flex items-center justify-center gap-x-5 mt-10">
      <GitHub size={48} className="bg-gray-50 p-2 rounded-full shadow-md" />
      <div className="text-4xl font-medium">Github search</div>
    </div>
  );
};

export default Header;
