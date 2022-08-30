import Link from "next/link";

import {
  MenuIcon,
  SearchIcon,
  BellIcon,
  CameraIcon,
} from "@heroicons/react/outline";
import Logo from "./Logo";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();

  const onClick = () => {
    router.push(`/results/${searchTerm}`);
  };

  return (
    <>
      <header className="flex justify-between items-center bg-zinc-800 px-6 py-3 text-white">
        <div className="flex items-center space-x-4">
          <button className="searchBtn" type="submit">
            <MenuIcon className="w-6 h-6" />
          </button>
          <Link href="/">
            <a>
              <Logo className="w-24 h-auto" />
            </a>
          </Link>
        </div>

        <div className="flex items-center max-w-md w-full">
          <input
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            className="search-bar bg-zinc-900 border w-full border-zinc-600 px-1 py-1 focus:outline-none focus:border-blue-600"
            placeholder="Search"
          />
          <button onClick={onClick} className="px-4 py-2 bg-zinc-700 h-full">
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="space-x-8 items-center">
          <button className="md:hidden">
            <BellIcon className="w-6 h-6" />
          </button>
          <button className="md:hidden">
            <CameraIcon className="w-6 h-6" />
          </button>
          <button className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="/images/profile.jpg"
              alt="profile icon"
              className="w-full h-full"
            />
          </button>
        </div>
      </header>
    </>
  );
}
