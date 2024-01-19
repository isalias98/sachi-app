import { PiPantsFill, PiTShirtFill, PiBaseballCapBold } from "react-icons/pi";
function ShopSidebar() {
    return (
        <div className='flex justify-center shadow-md h-screen shadow-base-200'>
            <ul className="space-y-40 mt-2 ">
                <li className="text-pink-500 hover:text-pink-200 hover:cursor-pointer"><a href="#shirt"><PiTShirtFill size="28" /></a></li>
                <li className="text-pink-500 hover:text-pink-200 hover:cursor-pointer"><a href="#pant"><PiPantsFill size="28" /></a></li>
                <li className="text-pink-500 hover:text-pink-200 hover:cursor-pointer"><a href="#cap"><PiBaseballCapBold size="28" /></a></li>
            </ul>
        </div>
    )
}

export default ShopSidebar