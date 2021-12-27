import { ArrowUpRight } from "react-feather";
import Image from "next/image";

const UserResult = ({ user }) => {
  return (
    <div className="flex justify-between">
      <div>
        <Image
          src={user.avatar_url}
          alt="user avatar"
          width="50"
          height="50"
        />
      </div>
      <div>{user.login}</div>
      <ArrowUpRight />
    </div>
  );
};

export default UserResult;
