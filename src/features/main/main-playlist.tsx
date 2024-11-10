"use client";

import SquareContainer from "@/components/container/square-container";
import { useRouter } from "next/navigation";

const MainPlaylist = () => {
  const router = useRouter();

  const dummy = [
    {
      src: "/images/music1.png",
      name: "THIRSTY",
      description: "RARO",
      onClickName: () => router.push("/playlist/123"),
      onClickDescription: () => router.push("/user/123"),
    },
    {
      src: "/images/music1.png",
      name: "THIRSTY",
      description: "RARO",
      onClickName: () => router.push("/playlist/123"),
      onClickDescription: () => router.push("/user/123"),
    },
    {
      src: "/images/music1.png",
      name: "THIRSTY",
      description: "RARO",
      onClickName: () => router.push("/playlist/123"),
      onClickDescription: () => router.push("/user/123"),
    },
    {
      src: "/images/music1.png",
      name: "THIRSTY",
      description: "RARO",
      onClickName: () => router.push("/playlist/123"),
      onClickDescription: () => router.push("/user/123"),
    },
    {
      src: "/images/music1.png",
      name: "THIRSTY",
      description: "RARO",
      onClickName: () => router.push("/playlist/123"),
      onClickDescription: () => router.push("/user/123"),
    },
    {
      src: "/images/music1.png",
      name: "THIRSTY",
      description: "RARO",
      onClickName: () => router.push("/playlist/123"),
      onClickDescription: () => router.push("/user/123"),
    },
  ];

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex justify-start">
        <p className="text-[#FF4D74] font-bold text-xl">RARO</p>
        <p className="font-bold text-xl">님을 위한 플레이리스트</p>
      </div>
      <div className="w-full overflow-x-auto flex gap-x-4">
        {dummy.map((item) => (
          <SquareContainer
            key={item.name}
            src={item.src}
            name={item.name}
            description={item.description}
            design="rounded-xl"
            onClickName={item.onClickName}
            onClickDescription={item.onClickDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPlaylist;
