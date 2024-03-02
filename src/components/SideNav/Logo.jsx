import React from "react";
import LogoIcon from "../../assets/images/logo-icon.png";
import Logos from "../../assets/images/logo.svg";
import LogoDark from "../../assets/images/logo-dark.svg";

const Logo = ()=> {
    return (
        <div class="flex h-20 px-2 max-md:fixed max-md:top-0 max-md:w-full max-md:bg-white/80 max-md:left-0 max-md:px-4 max-md:h-14 max-md:shadow-sm max-md:dark:bg-slate-900/80 backdrop-blur-xl">
            <a href="home.html" id="logo" class="flex items-center gap-3">
                {/* <img id="logo__icon" src={LogoIcon} alt="" class="md:w-8 hidden text-2xl max-xl:!block max-md:!hidden shrink-0 uk-animation-scale-up"></img> */}
                {/* <img id="logo__text" src={Logos} alt="" class="w-full h-6 ml-1 max-xl:hidden max-md:block dark:!hidden"></img> */}
                {/* <img id="logo__text" src={LogoDark} alt="" class="w-full h-6 ml-1 !hidden max-xl:!hidden max-md:block dark:max-md:!block dark:!block"></img> */}
            </a>
        </div>
    );
};

export default Logo;