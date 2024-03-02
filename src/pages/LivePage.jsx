import React from 'react'
import SideBar from "../components/SideNav/SideBar";
import Header from "../components/Navbar/Header";
import Main from "../components/Main/Main";
import Product1 from "../assets/images/product/product-1.jpg";

const LivePage = () => {
  return (
        <div id="wrapper">
            {/* Header here */}
            <Header></Header>

            {/* Sidebar here */}
            <SideBar></SideBar>

            {/* Main area here */}
            <main id="site__main" className="2xl:ml-[--w-side]  xl:ml-[--w-side-sm] py-10 p-2.5 h-[calc(100vh-var(--m-top))] mt-[--m-top]">

                <div className="2xl:max-w-[1220px] max-w-[1065px] mx-auto">

          
                    <div className='mb-20'>
                        <p className="text-3xl text-left text-gray-700 font-bold mt-4 mb-2">Create Live Videos!</p>
                    </div>

                    {/* <!-- group list tabs --> */}
                    <div className="uk-switcheractive mt-10" id="group-tabs">
                        
                        {/* <!-- card layout 1 --> */}
                        <div className="grid md:grid-cols-4.5 mt-4 sm:grid-cols-3 grid-cols-2 gap-5">
        
                            <div className="card">
                                <a href="timeline-group.html">
                                    <div className="card-media h-24">
                                        <img src={Product1} alt=""/>
                                        <div className="card-overly"></div>
                                    </div>
                                </a>
                                <div className="card-body relative z-10">
                                    {/* <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-10 rounded-full mb-2 shadow -mt-8 relative border-2 border-white dark:border-slate-800"> */}
                                    <a href="#!"><h4 className="card-title text-left"> You can:  </h4></a>
                                    <div className="card-list-info font-normal mt-1 text-left">
                                        <div>
                                        Invite people to your live
                                        Add your friend lists to the live video
                                        Invite people from the groups you
                                        belongs
                                        Create live events where anyone can
                                        join and contribute
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button type="submit" className="button bg-secondery !w-auto text-black text-l font-bold"> Go Live</button> 
                                    </div>
                                    
                                </div>
                            </div> 
                            <div className="card">
                                <a href="timeline-group.html">
                                    <div className="card-media h-24">
                                        <img src={Product1} alt=""/>
                                        <div className="card-overly"></div>
                                    </div>
                                </a>
                                <div className="card-body relative z-10">
                                    {/* <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-10 rounded-full mb-2 shadow -mt-8 relative border-2 border-white dark:border-slate-800"> */}
                                    <a href="#!"><h4 className="card-title text-left"> You can:  </h4></a>
                                    <div className="card-list-info font-normal mt-1 text-left">
                                        <div>
                                        You can schedule when to host your
                                        live
                                        Add your friend lists to the schedule
                                        live video
                                        Invite people from the groups you
                                        belongs based on schedule
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button type="submit" className="button bg-secondery !w-auto text-black text-l font-bold"> Schedule Live for Later </button> 
                                    </div>
                                    
                                </div>
                            </div> 
                            <div className="card">
                                <a href="timeline-group.html">
                                    <div className="card-media h-24">
                                        <img src={Product1} alt=""/>
                                        <div className="card-overly"></div>
                                    </div>
                                </a>
                                <div className="card-body relative z-10">
                                    {/* <img src="assets/images/avatars/avatar-4.jpg" alt="" className="w-10 rounded-full mb-2 shadow -mt-8 relative border-2 border-white dark:border-slate-800"> */}
                                    <a href="#!"><h4 className="card-title text-left"> You can:  </h4></a>
                                    <div className="card-list-info font-normal mt-1 text-left">
                                        <div>
                                        Add your desired team to the live
                                        Add your friend lists to the live video
                                        Invite people from the groups you
                                        belongs
                                        Create live events where anyone can
                                        join and contribute
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button type="submit" className="button bg-secondery !w-auto text-black text-l font-bold"> Create Event </button> 
                                    </div>
                                    
                                </div>
                            </div> 
                        
                        </div>
                    </div>
                </div>
            </main>
        </div>
  )
}

export default LivePage;