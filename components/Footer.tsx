import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <div className="mt-16 flex flex-col items-center gap-8 md:gap-0s md:flex-row md:items-start md:justify-between bg-gray-800 p-8 rounded-lg">
            <div className="flex flex-col gap-4 items-center md:items-center">
                <Link href={'/'} className="flex items-center">
                    <Image src={"/logo.png"} alt="meldesign" width={36} height={36}/>
                    <p className="hidden md:block text-md font-medium tracking-wider text-white">MELDESIGN</p>
                </Link>
                <p className="text-sm text-gray-400 ">o 2025 MELDESIGN</p>
                <p className="text-sm text-gray-400 ">All Rights Reserved</p>
            </div>

            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm amber-50">Links</p>
                <Link href={'/'}>HomePage</Link>
                <Link href={'/'}>Contact</Link>
                <Link href={'/'}>Terms of Services</Link>
                <Link href={'/'}>Privacy Policy</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm amber-50">Links</p>
                <Link href={'/'}>All Products</Link>
                <Link href={'/'}>New Arrivals</Link>
                <Link href={'/'}>Best Sellers</Link>
                <Link href={'/'}>Sale</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
                <p className="text-sm amber-50">Links</p>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Contact</Link>
                <Link href={'/'}>Blogs</Link>
                <Link href={'/'}>Affiliate Programs</Link>
            </div>
        </div>
    )
}

{/*export default function Footer(){
    return(
        <div></div>
    )
}*/}