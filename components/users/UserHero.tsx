import Image from "next/image";
import useUser from "../../hooks/useUser";
import Avatar from "../Avatar";

interface UserHeroProps {
  userId: string;
}

const UserHero = (props: UserHeroProps) => {
  const { data: fetchedUser } = useUser(props.userId);

  return (
    <div>
      <div className="bg-neutral-700 h-44 relative">
        {fetchedUser?.coverImage && (
          <Image
            src={fetchedUser.coverImage}
            fill
            alt="Cover Image"
            style={{ objectFit: "cover" }}
          />
        )}
        <div className="absolute -bottom-16 left-4">
          <Avatar userId={props.userId} isLarge hasBorder />
        </div>
      </div>
    </div>
  );
};

export default UserHero;
