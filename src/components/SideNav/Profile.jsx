import React from "react";
import Avatar7 from "../../assets/images/avatars/avatar-7.jpg";
import Avatar3 from "../../assets/images/avatars/avatar-3.jpg";

const Profile = ()=> {
    return (
        <div >
            <a id="profile-link" className="flex items-center gap-3 p-3 group">
                <img src={Avatar7} alt="" className="rounded-full md:w-7 md:h-7 w-5 h-5 shrink-0"></img>
                <span className="font-semibold text-sm max-xl:hidden">  Monroe Parker </span>
                <ion-icon name="chevron-forward-outline"  className="text-xl ml-auto duration-200 group-aria-expanded:-rotate-90 max-xl:hidden"></ion-icon>
            </a>
            <div className="bg-white sm:w-64 2xl:w-[calc(100%-16px)] w-full shadow-lg border rounded-xl overflow-hidden max-md:!top-auto max-md:bottom-16 border2 dark:bg-dark2 hidden" uk-drop="animation:uk-animation-slide-bottom-medium ;animate-out: true">

                <div className="w-full h-1.5 bg-gradient-to-r to-purple-500 via-red-500 from-pink-500"></div>

                <div className="p-4 text-xs font-medium">
                    <a href="profile.html">
                        <img src={Avatar3} className="w-8 h-8 rounded-full" alt=""></img>
                        <div className="mt-2 space-y-0.5">
                            <div className="text-base font-semibold"> Monroe Parker </div>
                            <div className="text-gray-400 dark:text-white/80"> @monroe </div>
                        </div>
                    </a>
                    <div className="mt-3 flex gap-3.5">
                        <div> <a href="profile.html"> <strong> 620K </strong> <span className="text-gray-400 dark:text-white/80 ml-1">Following </span> </a> </div>
                        <div> <a href="profile.html"> <strong> 38k </strong> <span className="text-gray-400 dark:text-white/80 ml-1">Followers </span> </a>  </div>
                    </div>
                        
                </div>
                <hr className="opacity-60" />
                <ul className="text-sm font-semibold p-2">
                    <li> <a href="setting.html" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="person-outline" className="text-lg"></ion-icon> Profile     </a></li>
                    <li> <a href="upgrade.html" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="bookmark-outline" className="text-lg"></ion-icon> Upgrade </a></li> 
                    <li> <a href="setting.html" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="settings-outline" className="text-lg"></ion-icon> Acount Setting  </a></li>
                    <li> <a href="form-login.html" className="flex gap-3 rounded-md p-2 hover:bg-secondery"> <ion-icon name="log-out-outline" className="text-lg"></ion-icon> Log Out</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Profile;