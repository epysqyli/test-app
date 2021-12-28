import { ArrowUpRight } from "react-feather";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const baseFooter = (text) => (
    <div className="flex items-center justify-center gap-x-5 p-10 group cursor-pointer border-t bg-gainsboro hover:bg-light-gray active:bg-silver-sand">
      <div className="text-gray-700">{text}</div>
      <ArrowUpRight
        color="gray"
        className="group-hover:scale-125 transition-transform"
      />
    </div>
  );

  const router = useRouter();

  if (router.pathname == "/")
    return (
      <Link href="/history" passHref={true}>
        {baseFooter("Check history and latest results")}
      </Link>
    );

  if (router.pathname == "/history")
    return (
      <Link href="/" passHref={true}>
        {baseFooter("Back to search")}
      </Link>
    );
};

export default Footer;
