import Link from "next/link";
import Header from "./Header";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
const Nav = () => {
    return (
        <section className="container mx-auto pt-10 flex gap-20 justify-center ">
            <div className="">
                <h1 className="text-5xl font-bold text-center">NEWS BANGLA</h1>
                    <Header/>
                    <div className="grid grid-cols-2 pt-10">
                        <div className=" flex gap-2 text-2xl">
                            <FaFacebook />
                            <FaTwitter />
                            <FaInstagramSquare />
                        </div>
                        <div className="flex gap-2 justify-end">
                            <div className="text-end">
                                <input type="text" placeholder="Type here" className="input w-full max-w-xs border border-black" />
                            </div>
                            <button className="btn "><IoSearchOutline /></button>
                        </div>
                    </div>

                    <div>
                            <ul className="justify-center flex gap-10 text-2xl mt-10 p-7 font-bold bg-red-100">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>

                                
                                <div className="dropdown">
                                    <Link href="/" tabIndex={0}  className=" m-1">News list by category</Link>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Business</a></li>
                                        <li><a>Education</a></li>
                                        <li><a>Sports</a></li>
                                        <li><a>Politics</a></li>
                                        <li><a>Health</a></li>
                                        <li><a>Tecnology</a></li>
                                        <li><a>Tourism</a></li>
                                        <li><a>Food</a></li>
                                        <li><a>World</a></li>
                                    </ul>
                                </div>
                                <li>
                                    <Link href="/news details">News details</Link>
                                </li>
                            </ul>
                    </div>
                    
            </div>
            
        </section>
    );
};

export default Nav;