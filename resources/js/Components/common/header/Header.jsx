import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import { Link } from "@inertiajs/react";

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <>
            {/* <Head /> */}
            <header>
                <div className=" px-20 py-5 w-full inline-flex justify-between">
                    <div className=" font-bold text-2xl text-yellow-500">
                        PREMIER
                    </div>
                    <nav>
                        <ul
                            className={navbar ? "navbar" : "flex"}
                            onClick={() => setNavbar(false)}
                        >
                            <li>
                                <Link href="/coming-soon">Home</Link>
                            </li>
                            <li>
                                <Link href="/coming-soon">About</Link>
                            </li>

                            <li>
                                <Link href="/coming-soon">Contact</Link>
                            </li>

                            <li>
                                <Link href="/coming-soon">Get Started</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
export default Header;
