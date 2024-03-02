import React from "react";
import Logoico from "../assets/images/logo-icon.png";
import Post2 from "../assets/images/post/img-2.jpg";

const Register = ()=> {
    const dayN = 0;

    return (
        <div class="sm:flex">
            {/* dark:bg-slate-900 */}
            <div class="relative lg:w-[580px] md:w-96 w-full p-10 min-h-screen bg-white shadow-xl flex pt-10 z-10">

                <div class="w-full lg:max-w-sm mx-auto space-y-10" uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true">

                    {/* <!-- logo icon optional --> */}
                    <div class="hidden">
                        <img class="w-12" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&amp;shade=600" alt="Socialite html template"></img>
                    </div>

                    {/* <!-- title --> */}
                    <div>
                        <p className="text-3xl text-gray-700 font-bold mt-4 mb-2">Welcome, New User!</p>
                        <p class="text-sm text-gray-700 font-normal">Already have an Account?<a href="login" class="text-gold-600 font-bold"> Login here!</a></p>
                    </div>
            

                    {/* <!-- form --> */}
                    <form method="#" action="#" class="space-y-7 text-sm text-black font-medium dark:text-black"  uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true">
                        
                    {/* <!-- email --> */}
                    <div className=" text-left">
                        <div class="mt-2">
                            <input id="firstname" name="firstname" type="text" autocomplete="firstname" placeholder="Firstname" required class="block w-full bg-white rounded-md border-0 py-1.5 text-white shadow-sm placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                    <div className=" text-left">
                        <div class="mt-2">
                            <input id="lastname" name="lastname" type="text" autocomplete="lastname" placeholder="Lastname" required class="block w-full bg-white rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div className=" text-left">
                        <div class="mt-2">
                            <input id="create_password" name="create_password" type="password" autocomplete="create_password" placeholder="Enter password" required class="block w-full bg-white rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div className=" text-left">
                        <div class="mt-2">
                            <input id="confirm_password" name="confirm_password" type="password" autocomplete="confirm_password" placeholder="Confirm password" required class="block w-full bg-white rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-black placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <label for="password" class="flex text-sm font-medium leading-6 text-black">Date of Birth?</label>
                        <br />
                        <div class="flex items-center justify-between">
                            <select name="day" id="day"  class="w-full block text-sm font-medium leading-6 text-black">
                                <option value="" selected>Day</option>
                                <option>1</option>
                            </select>
                            <select name="month" id="month" class="block text-sm font-medium leading-6 text-black m-2">
                                <option value="" selected> -- Month -- </option>
                                <option value={'January'}>January</option>
                                <option value={'February'}>February</option>
                                <option value={'March'}>March</option>
                                <option value={'April'}>April</option>
                                <option value={'May'}>May</option>
                                <option value={'June'}>June</option>
                                <option value={'July'}>July</option>
                                <option value={'August'}>August</option>
                                <option value={'September'}>September</option>
                                <option value={'October'}>October</option>
                                <option value={'November'}>November</option>
                                <option value={'December'}>December</option>
                            </select>
                            <select name="year" id="year" class="block text-sm font-medium leading-6 text-black">
                                <option value="" selected> -- Year -- </option>
                                <option>1971</option>
                                <option>1972</option>
                            </select>
                            
                        </div>
                        <div class="mt-4">
                            <select name="day" id="day"  class="block text-sm w-full font-medium leading-6 text-black">
                                <option value="" selected>Gender</option>
                                <option>Female</option>
                                <option>Male</option>
                            </select>
                        </div>
                    </div>
                    

                    

                    {/* <!-- submit button --> */}
                    <div>
                        <button type="submit" class="button bg-black text-white w-full">Create New Account</button>
                    </div>

                    <div>                        
                        <p class="font-normal text-sm">By clilcking signup, you agree to our terms and conditions. <a href="#" class="text-sm font-bold text-gold-600">Learn more </a></p>
                        
                    </div>

                    
                    </form>


                </div>

            </div>

            {/* <!-- image slider --> */}
            <div class="flex-1 relative bg-primary max-md:hidden">


                <div class="relative w-full h-full" tabindex="-1" uk-slideshow="animation: slide; autoplay: true">
                
                    <ul class="uk-slideshow-items w-full h-full"> 
                        <li class="w-full">
                            <img src={Post2}  alt="" class="w-full h-full object-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left"></img>
                            <div class="absolute bottom-0 w-full uk-tr ansition-slide-bottom-small z-10">
                                <div class="max-w-xl w-full mx-auto pb-32 px-5 z-30 relative"  uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true" > 
                                    <img class="w-12" src={Logoico} alt="Socialite html template"></img>
                                    <h4 class="!text-white text-2xl font-semibold mt-7"  uk-slideshow-parallax="y: 600,0,0">  Connect With Friends </h4> 
                                    <p class="!text-white text-lg mt-7 leading-8"  uk-slideshow-parallax="y: 800,0,0;"> At Futuristic! We are committed to serving our customers better. </p>   
                                </div> 
                            </div>
                            <div class="w-full h-96 bg-gradient-to-t from-black absolute bottom-0 left-0"></div>
                        </li>
                        <li class="w-full">
                        <img src={Post2}  alt="" class="w-full h-full object-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left"></img>
                        <div class="absolute bottom-0 w-full uk-tr ansition-slide-bottom-small z-10">
                            <div class="max-w-xl w-full mx-auto pb-32 px-5 z-30 relative"  uk-scrollspy="target: > *; cls: uk-animation-scale-up; delay: 100 ;repeat: true" > 
                                <img class="w-12" src={Logoico} alt="Socialite html template"></img>
                                <h4 class="!text-white text-2xl font-semibold mt-7"  uk-slideshow-parallax="y: 800,0,0">  Connect With Friends </h4> 
                                <p class="!text-white text-lg mt-7 leading-8"  uk-slideshow-parallax="y: 800,0,0;"> At Futuristic! We are committed to serving our customers better. </p>   
                            </div> 
                        </div>
                        <div class="w-full h-96 bg-gradient-to-t from-black absolute bottom-0 left-0"></div>
                    </li>
                    </ul>
            
                    {/* <!-- slide nav --> */}
                    <div class="flex justify-center">
                        <ul class="inline-flex flex-wrap justify-center  absolute bottom-8 gap-1.5 uk-dotnav uk-slideshow-nav"> </ul>
                    </div>
                
                    
                </div>
        

            </div>
        
        </div>
    )
}

export default Register;