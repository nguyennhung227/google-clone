import { HomeHeader } from "@/components/HomeHeader";
import { HomeSearch } from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/2560px-Google_logo_%282013-2015%29.svg.png"
          alt="Google Logo"
          width={300}
          height={100}
          priority
        />

        <HomeSearch />
      </div>
    </>
  );
}
