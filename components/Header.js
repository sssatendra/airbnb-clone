import Image from "next/image"
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon } from "@heroicons/react/solid"
function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-5 md:px-10">
            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3"
                    className=""
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Middle */}
            <div className="flex items-center md:border-2 rounded-full py-2">
                <input className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start Your search" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-500 cursor-pointer text-white rounded-full p-2 md:mx-2" />
            </div>

            {/* Right */}
            <div className="flex items-center justify-end text-gray-500 space-x-4">
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default Header
