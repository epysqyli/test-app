import { ArrowUpRight } from "react-feather";
import Link from "next/link";

const Footer = () => {
  return (
    <Link href="/history" passHref={true}>
      <div className="flex items-center justify-center gap-x-5 p-10 group cursor-pointer border-t hover:bg-gray-200 active:bg-gray-300">
        <div className="text-gray-700">
          Check search history and latest results
        </div>
        <ArrowUpRight
          color="gray"
          className="group-hover:scale-125 transition-transform"
        />
      </div>
    </Link>
  );
};

export default Footer;
