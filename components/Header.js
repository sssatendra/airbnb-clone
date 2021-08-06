import Image from "next/image"
import { useState } from 'react'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon } from "@heroicons/react/solid"
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";
function Header({ placeholder }) {

    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [guest, setGuest] = useState(1);
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const handleChange = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);

    }

    const resetInput = () => {
        setSearchInput("")
    }

    const search = () => {
        router.push({
            pathname: "./search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guest: guest,
            }
        })
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-5 md:px-10">
            {/* Left */}
            <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3"
                    className=""
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Middle */}
            <div className="flex items-center md:border-2 rounded-full py-2">
                <input value={searchInput} onChange={e => setSearchInput(e.target.value)} className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400" type="text" placeholder={placeholder || "Start Your Search"} />
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
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker
                        minDate={new Date()}
                        ranges={[selectionRange]}
                        onChange={handleChange}
                        rangeColors={["#FD5B61"]}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                        <UserIcon className="h-5" />
                        <input min={1} value={guest} onChange={e => setGuest(e.target.value)} type="number" className='w-12 pl-2 text-lg outline-none text-red-400' />
                    </div>
                    <div className="flex">
                        <button onClick={resetInput} className="flex-grow text-gray-500">Cancel </button>
                        <button onClick={search} className="flex-grow text-red-400">Search </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
