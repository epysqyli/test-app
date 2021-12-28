import { ArrowUpRight } from "react-feather";
import Image from "next/image";

const UserResult = ({ user }) => {
  return (
    <div className="flex justify-between items-center group gap-x-2">
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
      <div className="text-lg text-center break-words text-gray-800 w-3/5">{user.login}</div>
      <ArrowUpRight
        color="gray"
        size={20}
        className="group-hover:scale-125 transition-transform w-1/5"
      />
    </div>
  );
};

export default UserResult;
