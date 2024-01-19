import Link from "next/link";
const Navbar = () => {
    return (
        <div className="flex flex-row items-center justify-between w-full p-2 bg-base-200 shadow-md shadow-base-300 sticky top-0 z-10">
            <Link href={'/'} className="hidden ml-8 text-xl font-extrabold hover:text-base-300 text-white md:flex">
                SACHi
            </Link>
            <span className="flex w-full h-10 text-sm border border-gray-300 rounded-full cursor-pointer md:w-1/3">
                <input type="search" name="serch" placeholder="Search" className="flex-grow px-4 text-sm rounded-l-full rounded-r-full focus:outline-none" />
            </span>
            <div className="flex flex-row-reverse ml-4 mr-4 text-white md:hidden">
                <button>
                    <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                        </path>
                    </svg>
                </button>
            </div>
            <div className="items-center flex mr-8 ">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Avatar" src="/blank.png" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Navbar;