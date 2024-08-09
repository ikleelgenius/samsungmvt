import Image from "next/image";
import { FC } from "react"

interface Props {

}
const Navbar: FC = () => {
    return (
        <>
            <div className=" flex flex-col justify-center items-center sm:flex-row sm:justify-between">
                <div className="flex-col  self-center m-4">
                    <img className="m-4" width={120} src={"/images/samsung.png"} alt="samsung" />
                    <h1 className="font-SamsungBold  text-blue-900 font-extrabold text-4xl">SmartCafé</h1>
                    <h1 className="font-Samsung400">Authorised samsung Dealer</h1>
                </div>
                <div className="flex flex-row ">
                    <button type="button" className="relative flex items-center justify-center m-2 w-10 h-10 rounded-full bg-white shadow-md">
                        <a href="https://www.facebook.com/share/BPguqupEJ2bDnsB1/?mibextid=qi2Omg" target="blank">
                            <Image src={'/icons/facebook.png'} alt="facebook" width={38} height={38} className="object-contain" />
                        </a>
                    </button>
                    <button type="button" className="relative flex items-center justify-center m-2 w-10 h-10 rounded-full bg-white shadow-md">
                        <a href="https://www.instagram.com/samsungmuvattupuzha" target="blank">
                            <Image src={'/icons/instagram.png'} alt="instagram" width={38} height={38} className="object-contain" />
                        </a>
                    </button>
                    <button type="button" className="relative flex items-center justify-center m-2 w-10 h-10 rounded-full bg-white shadow-md">
                        <a href="https://wa.me/+9181119 35558" target="blank">
                            <Image src={'/icons/whatsapp.png'} alt="whatsapp" width={38} height={38} className="object-contain" />
                        </a>
                    </button>
                </div>

            </div>
            <div className="flex flex-row  bg-indigo-400 justify-center w-full">
                <div className=" md:border-r-4 m-1">
                    <h1 className="font-SamsungBold text-sm font-bold sm:text-md md:text-2xl pr-2  sm:pr-4" >MOBILES</h1>
                </div>
                <div className=" border-r-4 m-1">
                    <h1 className="font-SamsungBold text-sm font-bold sm:text-md md:text-2xl pr-2 sm:pr-4" >WATCHES</h1>
                </div>
                <div className=" m-1">
                    <h1 className="font-SamsungBold text-sm font-bold sm:text-md md:text-2xl pr-2 sm:pr-4" >ACCESSORIES</h1>
                </div>

            </div>
        </>
    );
}

export default Navbar;
