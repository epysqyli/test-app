import { ArrowUpRight } from "react-feather";
import Image from "next/image";

const UserResult = ({ user }) => {
  return (
    <div className="flex justify-between items-center group">
      <div className="w-1/5">
        <Image
          src={user.avatar_url}
          alt="user avatar"
          width="50"
          height="50"
          layout="responsive"
          className="rounded-md"
        />
      </div>
      <div className="text-lg text-gray-800">{user.login}</div>
      <ArrowUpRight
        color="gray"
        size={20}
        className="group-hover:scale-125 transition-transform"
      />
    </div>
  );
};

export default UserResult;
