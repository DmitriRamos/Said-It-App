import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { TbSpeakerphone } from "react-icons/tb";
import useLoginModal from "../../hooks/useLoginModal";

const SidebarTweetButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const onClick = useCallback(() => {
    loginModal.onOpen();
  }, [loginModal]);

  return (
    <div onClick={() => router.push("/")}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-80 transition cursor-pointer" />
      <div
        onClick={onClick}
        className="mt-6 hidden lg:block px-4 py-2 rounded-full bg-sky-500 hover:bg-opacity-90 cursor-pointer transition"
      >
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">
          Say It!
        </p>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
