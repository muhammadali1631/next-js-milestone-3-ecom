import Link from "next/link";

function Footer() {
    return (
<footer >
    <div className="mx-auto w-full max-w-screen-xl mt-4">
      <div className=" gap-8 px-4 py-6 lg:py-8 flex justify-around flex-wrap">
        <div>
            <h2 className="mb-6 text-sm font-semibold  uppercase ">Pages</h2>
            <ul className=" font-medium">
                <li className="mb-4">
                    <Link href={"/"} className=" hover:underline">Home</Link>
                </li>
                <li className="mb-4">
                    <Link href={'/about'} className="hover:underline">About</Link>
                </li>
                <li className="mb-4">
                    <Link href={"/contact"} className="hover:underline">Contact</Link>
                </li>
                <li className="mb-4">
                    <Link href={"/products"} className="hover:underline">Products</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold uppercase ">EXTRA</h2>
            <ul className=" font-medium">
                <li className="mb-4">
                    <Link href={'/cart'} className="hover:underline">Cart</Link>
                </li>
                <li className="mb-4">
                    <Link href={"/wishlist"} className="hover:underline">Wish list</Link>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold  uppercase">Contact</h2>
            <ul className=" font-medium">
                <li className="mb-4">
                    <Link href={"https://www.linkedin.com/in/ali-shahzad-42aa24234/"} target="blank" className="hover:underline">LinkedIn</Link>
                </li>
                <li className="mb-4">
                    <Link href={"https://github.com/muhammadali1631"} target="blank" className="hover:underline">Github</Link>
                </li>
            </ul>
        </div>
        <div className="w-72">
            <h2 className="mb-6 text-sm font-semibold  uppercase">Download</h2>
            <ul className=" font-medium">
                <p className="">Subscribe to our news letter and we&apos;ll send you the email of latest posts.</p>
                <input type="text" className="outline-none border-[1px]  border-black w-full rounded-md p-2 my-2" placeholder="Enter Your Email"/>
                <button className="px-6 py-2 bg-red-400 text-white font-bold rounded-lg">Send</button>
            </ul>
        </div>
    </div>
    <div className="px-4 py-6 flex justify-center border-t-2">
        <span className="text-sm  sm:text-center">© 2024 <Link href="/">E-Com™</Link>. All Rights Reserved.
        </span>
      </div>
    </div>
</footer>
    )
}
export default Footer;