import React from "react";

import group from "../../assets/images/icons/group.png";
import eventd from "../../assets/images/icons/event.png";
import game from "../../assets/images/icons/game.png";
import market from "../../assets/images/icons/market.png";
import pageg from "../../assets/images/icons/page.png";
import home from "../../assets/images/icons/home.png";
import videod from "../../assets/images/icons/video.png";
import blog from "../../assets/images/icons/blog.png";
import fund from "../../assets/images/icons/fund.png";
import group2 from "../../assets/images/icons/group-2.png";
import blog2 from "../../assets/images/icons/blog-2.png";
import event2 from "../../assets/images/icons/event-2.png";
import message from "../../assets/images/icons/message.png";

import Avatar2 from "../../assets/images/avatars/avatar-2.jpg";
import Avatar3 from "../../assets/images/avatars/avatar-3.jpg";
import Avatar7 from "../../assets/images/avatars/avatar-7.jpg";

const SideBar = ()=> {
    return (
        <div id="site__sidebar" class="fixed top-0 rounded bg-black left-0 z-[99] pt-[--m-top] overflow-hidden transition-transform xl:duration-500 max-xl:w-full max-xl:-translate-x-full">

            {/* <!-- sidebar inner --> */}
            <div class="p-2 max-xl:bg-white shadow-sm 2xl:w-72 sm:w-64 w-[80%] h-[calc(100vh-64px)] relative z-30 max-lg:border-r dark:max-xl:!bg-slate-700 dark:border-slate-700">
        
                <div class="pr-4" data-simplebar>

                    <nav id="side">
                    
                        <ul>
                            <li class="active">
                                <a href="/" className="text-black">
                                    <img src={home} alt="feeds" class="w-6"></img>
                                    <span> Home </span> 
                                </a>
                            </li>
                            <li>
                                <a href="/message">
                                    <img src={message} alt="messages" class="w-5"></img>
                                    <span> messages </span> 
                                </a>
                            </li> 
                            <li>
                                <a href="/live">
                                    <img src={videod} alt="messages" class="w-6"></img>
                                    <span> live </span> 
                                </a>
                            </li>
                            <li>
                                <a href="/shop">
                                    <img src={market} alt="market" class="w-7 -ml-1"></img>
                                    <span> shop </span> 
                                </a>
                            </li> 
                            {/* <li>
                                <a href="">
                                    <img src={blog} alt="blog" class="w-6"></img>
                                    <span> blog </span> 
                                </a>
                            </li>  */}
                            <li class="!hidden" id="show__more">
                                <a href="/exhibition">
                                    <img src={event2} alt="event" class="w-6"></img>
                                    <span> Exhibition </span> 
                                </a>
                            </li>
                            <li class="!hidden" id="show__more">
                                <a href="groups-2.html">
                                    <img src={group2} alt="groups" class="w-6"></img>
                                    <span> Follow </span> 
                                </a>
                            </li>

                    </ul>
                        
                        <button type="button" class="flex items-center gap-4 py-2 px-4 w-full font-medium text-sm text-black dark:text-white" uk-toggle="target: #show__more; cls: !hidden uk-animation-fade"> 
                            <svg class="bg-gray-200 rounded-full w-6 h-6 dark:bg-slate-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> 
                            <span id="show__more"> See More </span> 
                            <span class="!hidden" id="show__more"> See Less </span> 
                        </button>
        
                    </nav>
        
                    <div class="font-medium text-sm text-black border-t pt-3 mt-2 dark:text-white dark:border-slate-800">
                        <div class="px-3 pb-2 text-sm font-medium"> 
                            <div class="text-black text-left mt-4 dark:text-white">Your Favorites</div> 
                        </div>
                        <a href="#">
                            <div class="flex items-center gap-2 p-3 px-4 rounded hover:bg-secondery">
                                <img src={Avatar2} alt="" class="w-6 rounded-full object-cover"></img>
                                <div> 
                                    <p>Bollywood</p>
                                    <small>The Return of </small>
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div class="flex items-center gap-2 p-3 px-4 rounded-xl hover:bg-secondery">
                                <img src={Avatar7} alt="" class="w-6 rounded-full object-cover"></img>
                                <div>
                                    <p> Nollywood</p>
                                    <small> The school kid </small>
                                </div>
                            </div>
                        </a>
                        <a href="#">
                            <div class="flex items-center gap-2 p-3 px-4 rounded-xl hover:bg-secondery">
                                <img src={Avatar3} alt="" class="w-6 rounded-full object-cover"></img>
                                <div>
                                    <p> Nollywood</p>
                                    <small> The school kid </small>
                                </div>
                            </div>
                        </a> 
                    </div>
        
                    

                </div>

            </div>

            {/* <!-- sidebar overly --> */}
            <div id="site__sidebar__overly" 
                class="absolute top-0 left-0 z-20 w-screen h-screen xl:hidden backdrop-blur-sm"
                uk-toggle="target: #site__sidebar ; cls :!-translate-x-0"> 
            </div>
        </div>
    );
};

export default SideBar;