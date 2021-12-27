import { ArrowUpRight } from "react-feather";
import Image from "next/image";

const UserResult = ({ user }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/5">
        <Image
          src={user.avatar_url}
          alt="user avatar"
          width="50"
          height="50"
          layout="responsive"
        />
      </div>
      <div>{user.login}</div>
      <ArrowUpRight color="gray" size={20} />
    </div>
  );
};

export default UserResult;
