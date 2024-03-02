import React from "react";
import Logo from "./Logo";
import NavArea from "./NavArea";
import Profile from "./Profile";

import LogoIcon from "../../assets/images/logo-icon.png";
import Logos from "../../assets/images/logo.svg";
import LogoDark from "../../assets/images/logo-dark.svg";

import Avatar2 from "../../assets/images/avatars/avatar-2.jpg";
import Avatar3 from "../../assets/images/avatars/avatar-3.jpg";
import Avatar4 from "../../assets/images/avatars/avatar-4.jpg";
import Avatar5 from "../../assets/images/avatars/avatar-5.jpg";
import Avatar6 from "../../assets/images/avatars/avatar-6.jpg";
import Avatar7 from "../../assets/images/avatars/avatar-7.jpg";

const LoginSide = ()=> {
    return (
        <div id="sidebar" className="fixed top-0 left-0 z-40 max-md:top-auto max-md:bottom-0">

            <div id="sidebar__inner" class="flex sside md:flex-col justify-between md:h-screen md:p-2 p-1 transition-all duration-500 bg-black shadow 2xl:w-72 xl:w-90 max-xl:w-[73px] max-md:w-screen max-md:border-t max-md:dark:border-slate-700">
                
                {/* Logo area */}
                

                {/* Navarea */}
                <nav className="flex-1 max-md:flex max-md:justify-around md:space-y-2 text-center p-4 py-4">
                    <br/><br/>
                    <a href="home.html" id="logo" class="flex items-center gap-3">
                            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"></img>
                        </a>
                   
                    <h1 class="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-white">Futuristics!</h1>
                    <h3 className="p-4 py-4 text-l mt-10 text-center">
                        At Futuristic! We are committed to serving our customers better.
                    </h3>
                </nav>
            </div>
        </div>
    );
};

export default LoginSide;