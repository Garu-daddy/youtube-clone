import Link from "next/link";

import {
  MenuIcon,
  SearchIcon,
  BellIcon,
  CameraIcon,
} from "@heroicons/react/outline";
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <header className="flex justify-between items-center bg-zinc-800 px-6 py-3 text-white">
        <div className="flex items-center space-x-4">
          <button>
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
            className="bg-zinc-900 border w-full border-zinc-600 px-1 py-1 focus:outline-none focus:border-blue-600"
            type="text"
            placeholder="Search"
          />
          <button className="px-4 py-2 bg-zinc-700 h-full">
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="space-x-8 items-center">
          <button>
            <BellIcon className="w-6 h-6" />
          </button>
          <button>
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
