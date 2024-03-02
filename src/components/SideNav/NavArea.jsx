import React from "react";
import Avatar2 from "../../assets/images/avatars/avatar-2.jpg";
import Avatar3 from "../../assets/images/avatars/avatar-3.jpg";
import Avatar4 from "../../assets/images/avatars/avatar-4.jpg";
import Avatar5 from "../../assets/images/avatars/avatar-5.jpg";
import Avatar6 from "../../assets/images/avatars/avatar-6.jpg";
import Avatar7 from "../../assets/images/avatars/avatar-7.jpg";

const   NavArea = ()=> {
    return (
        <nav className="flex-1 max-md:flex max-md:justify-around md:space-y-2 bg-black">

                    <a href="home.html" className="active">
                        <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hidden">
                            <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
                        </svg>
                        <span className="max-xl:hidden"> Home </span>
                    </a>
  
                    <a href="#!">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <span className="max-xl:hidden"> Search </span>
                    </a>  
                    <div className="sm:w-[397px] w-full bg-white shadow-lg md:!left-[73px] hidden !left-0 dark:bg-dark2 dark:border1 max-md:bottom-[57px]" uk-drop="animation: uk-animation-slide-left-small , uk-transform-origin-center-left ;animate-out: true; pos: left ; mode:click; offset: 9"> 
                        <div className="md:h-screen overflow-y-auto h-[calc(100vh-120px)]">

                            <div className="px-5 py-4 space-y-5 border-b border-gray-100 dark:border-slate-700">
                                <h3 className="md:text-xl text-lg font-medium mt-3 text-black dark:text-white">Search</h3>

                                <div className="relative -mx-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 absolute left-3 bottom-1/2 translate-y-1/2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                    <input type="text" placeholder="Search" className="bg-transparen w-full !pl-10 !py-2 !rounded-lg" />
                                </div>

                            </div>

                            <div className="p-2 space-y-2 dark:text-white">

                                <div className="flex items-center justify-between py-2.5 px-3 font-semibold">
                                    <h4>Recent</h4>
                                    <button type="button" className="text-blue-500 text-sm">Clear all</button>
                                </div>

                                <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                    <img src={Avatar2} alt="Avatar 2" className="bg-gray-200 rounded-full w-10 h-10"></img>
                                    <div className="fldex-1 min-w-0">
                                        <h4 className="font-medium text-sm text-black dark:text-white">  Johnson smith </h4>
                                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Suggested For You </div>
                                    </div> 
                                </a>
                                <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                    <img src={Avatar5} alt="Avatar 5" className="bg-gray-200 rounded-full w-10 h-10"></img>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-sm text-black dark:text-white"> James Lewis </h4>
                                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Followed By Johnson </div>
                                    </div>
                                    <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button> 
                                </a>
 
                                <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                    </svg>
                                    <div className="fldex-1 min-w-0">
                                        <h4 className="font-medium text-sm text-black dark:text-white">   artificial intelligence  </h4>
                                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> 13,352K post </div>
                                    </div> 
                                </a>

                                <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                    <img src={Avatar3} alt="Avatar 3" className="bg-gray-200 rounded-full w-10 h-10"></img>
                                    <div className="fldex-1 min-w-0">
                                        <h4 className="font-medium text-sm text-black dark:text-white">  Monroe Parker </h4>
                                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Parker . following </div>
                                    </div> 
                                </a>

                                <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                    <img src={Avatar7} alt="Avatar 7" className="bg-gray-200 rounded-full w-10 h-10"></img>
                                    <div className="fldex-1 min-w-0">
                                        <h4 className="font-medium text-sm text-black dark:text-white">  Johnson smith </h4>
                                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Suggested For You </div>
                                    </div> 
                                </a>
                                <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                    <img src={Avatar4} alt="Avatar 4" className="bg-gray-200 rounded-full w-10 h-10"></img>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-sm text-black dark:text-white"> James Lewis </h4>
                                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Followed By Johnson </div>
                                    </div>
                                    <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button> 
                                </a>
                                
                                <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                    </svg>
                                    <div className="fldex-1 min-w-0">
                                        <h4 className="font-medium text-sm text-black dark:text-white">  Ui Designers </h4>
                                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> 9,362K post </div>
                                    </div> 
                                </a> 
                                
                                <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="border border-gray-200 p-2.5 rounded-full w-9 h-9 fill-black">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                                    </svg>
                                    <div className="fldex-1 min-w-0">
                                        <h4 className="font-medium text-sm text-black dark:text-white"> Affiliate marketing  </h4>
                                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> 4,248K post </div>
                                    </div> 
                                </a>

                                <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                    <img src={Avatar2} alt="Avatar 2" className="bg-gray-200 rounded-full w-10 h-10"></img>
                                    <div className="fldex-1 min-w-0">
                                        <h4 className="font-medium text-sm text-black dark:text-white">  Johnson smith </h4>
                                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Suggested For You </div>
                                    </div> 
                                </a>
                                <a href="profile.html" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                    <img src={Avatar5} alt="Avatar 5" className="bg-gray-200 rounded-full w-10 h-10"></img>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-sm text-black dark:text-white"> James Lewis </h4>
                                        <div className="text-xs text-gray-500 font-normal mt-0.5 dark:text-white-80"> Followed By Johnson </div>
                                    </div>
                                    <button type="button" className="text-sm rounded-full py-1.5 px-4 font-semibold bg-secondery"> Follow </button> 
                                </a>


                            </div>

                        </div>
                    </div> 

                    <a href="shop.html">
                        <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden">
                            <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
                        </svg> 
                        <span  className="max-xl:hidden"> Shop </span>
                    </a>

                    <a href="people.html" className="max-md:!hidden">
                        <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                        <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hidden">
                            <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                        </svg>
                        <span  className="max-xl:hidden"> Follow </span>
                    </a>

                    <a href="explore.html" className="max-md:!hidden">
                        <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-compass" viewBox="0 0 16 16">
                            <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z"/>
                        </svg> 
                        <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="hidden">
                            <path fillRule="evenodd" d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z" clip-rule="evenodd" />
                        </svg>
                        <span  className="max-xl:hidden"> Exhibition </span>
                    </a>  

                    <a href="messages.html"  className="max-md:!fixed max-md:top-2 max-md:right-2">
                        <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                        <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden">
                            <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clip-rule="evenodd"></path>
                        </svg>
                        <span  className="max-xl:hidden"> Messages </span>
                    </a>
                    
                    <a href="#!" className="max-md:!fixed max-md:top-2 max-md:right-14 relative"> 
                        <svg id="icon__outline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <svg id="icon__solid" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="hidden">
                            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                        </svg>
                        <span  className="max-xl:hidden"> Notifications </span>
                        <div className="w-2 h-2 bg-red-600 rounded-full absolute left-7 top-2.5"></div>
                    </a>
                    
                    <div className="sm:w-[397px] w-full bg-white shadow-lg md:!left-[73px] hidden !left-0 dark:bg-dark2 dark:border1 max-md:bottom-[57px]" uk-drop="pos: left-center;animate-out: true; animation: uk-animation-slide-left-medium ; mode:click"> 
                        <div className="md:h-screen overflow-y-auto h-[calc(100vh-120px)]">

                            <div className="flex items-center justify-between px-5 py-4 mt-3">
                                <h3 className="md:text-xl text-lg font-medium mt-3 text-black dark:text-white">Notification</h3>

                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="px-2 -mt-2 text-sm font-normal">
 
                                <div className="px-5 py-3 -mx-2">
                                    <h4 className="font-semibold">New</h4>
                                </div>

                                <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                    <div className="relative w-12 h-12 shrink-0"> 
                                        <img src={Avatar2} alt="Avatar 2" className="object-cover w-full h-full rounded-full"></img>
                                    </div>
                                    <div className="flex-1 "> 
                                        <p> <b className="font-bold mr-1"> John Michael</b> who you might know,  is on Instello.</p>
                                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 2 hours ago </div>
                                    </div>
                                    <button type="button" className="button text-white bg-primary">fallow</button>
                                </a>
                                <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery bg-teal-500/5">
                                    <div className="relative w-12 h-12 shrink-0"> <img src={Avatar3} alt="Avatar 3" className="object-cover w-full h-full rounded-full"></img></div>
                                    <div className="flex-1 ">
                                        <p> <b className="font-bold mr-1"> Alexa Gray</b> started following you. Welcome him to your profile. 👋 </p>
                                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 4 hours ago </div>
                                        <div className="w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5"></div>
                                    </div>
                                </a>
                                <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery">
                                    <div className="relative w-12 h-12 shrink-0"> <img src={Avatar7} alt="Avatar 7" className="object-cover w-full h-full rounded-full"></img></div>
                                    <div className="flex-1 ">
                                        <p> <b className="font-bold mr-1">Jesse Steeve</b> mentioned you in a story. Check it out and reply. 📣 </p>
                                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div> 
                                    </div>
                                </a>
                                

                                <div className="border-t px-5 py-3 -mx-2 mt-4 dark:border-slate-700/40">
                                    <h4 className="font-semibold">This Week</h4>
                                </div>

                               
                                <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                    <div className="relative w-12 h-12 shrink-0"> <img src={Avatar4} alt="Avatar 4" className="object-cover w-full h-full rounded-full"></img></div>
                                    <div className="flex-1 ">
                                        <p> <b className="font-bold mr-1"> Jesse Steeve</b> sarah tagged you <br/> in a photo of your birthday party. 📸 </p>
                                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div>
                                    </div> 
                                </a>
                                <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery bg-teal-500/5">
                                    <div className="relative w-12 h-12 shrink-0"> <img src={Avatar3} alt="Avatar 3" className="object-cover w-full h-full rounded-full"></img></div>
                                    <div className="flex-1 ">
                                        <p> <b className="font-bold mr-1"> Sarah Gray</b> sent you a message. He wants to chat with you. 💖 </p>
                                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 4 hours ago </div>
                                        <div className="w-2.5 h-2.5 bg-teal-600 rounded-full absolute right-3 top-5"></div>
                                    </div>
                                </a>
                                <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                    <div className="relative w-12 h-12 shrink-0"> <img src={Avatar4} alt="Avatar 4" className="object-cover w-full h-full rounded-full"></img></div>
                                    <div className="flex-1 ">
                                        <p> <b className="font-bold mr-1"> James Lewis</b> Start following you on instello </p>
                                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div>
                                    </div>
                                    <button type="button" className="button bg-primary-soft text-primary">fallowing</button>
                                </a>
                                <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery">
                                    <div className="relative w-12 h-12 shrink-0"> <img src={Avatar6} alt="Avatar 6" className="object-cover w-full h-full rounded-full"></img></div>
                                    <div className="flex-1 ">
                                        <p> <b className="font-bold mr-1"> Alexa stella</b> commented on your photo  “Wow, stunning shot!” 💬 </p>
                                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div> 
                                    </div>
                                </a>
                                <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery">
                                    <div className="relative w-12 h-12 shrink-0"> <img src={Avatar2} alt="Avatar 2" className="object-cover w-full h-full rounded-full"></img></div>
                                    <div className="flex-1 ">
                                        <p> <b className="font-bold mr-1"> John Michael</b> mentioned you in a story. Check it out and reply. 📣 </p>
                                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div> 
                                    </div>
                                </a> 
                                <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl hover:bg-secondery">
                                    <div className="relative w-12 h-12 shrink-0"> <img src={Avatar5} alt="Avatar 5" className="object-cover w-full h-full rounded-full"></img></div>
                                    <div className="flex-1 ">
                                        <p> <b className="font-bold mr-1"> Jesse Steeve</b> who you might know,  is on Instello. </p>
                                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div>
                                    </div>
                                    <button type="button" className="button text-white bg-primary">fallow</button>
                                </a>
                                <a href="#" className="relative flex items-center gap-3 p-2 duration-200 rounded-xl pr-10 hover:bg-secondery">
                                    <div className="relative w-12 h-12 shrink-0"> <img src={Avatar7} alt="Avatar 7" className="object-cover w-full h-full rounded-full"></img></div>
                                    <div className="flex-1 ">
                                        <p> <b className="font-bold mr-1"> Martin Gray</b> liked your photo of the Eiffel Tower. 😍 </p>
                                        <div className="text-xs text-gray-500 mt-1.5 dark:text-white/80"> 8 hours ago </div> 
                                    </div>
                                </a>
                                
                            </div>

                        </div>
                    </div>                    
 
                </nav>
    );
};

export default NavArea;