import React from "react";

const CreateStatus = ()=> {
    return (
        
        <div className="hidden lg:p-20" id="create-status" uk-modal="">
   
        <div className="uk-modal-dialog tt relative overflow-hidden mx-auto bg-white p-7 shadow-xl rounded-lg md:w-[520px] w-full dark:bg-dark2">

            <div className="text-center py-3 border-b -m-7 mb-0 dark:border-slate-700">
                <h2 className="text-sm font-medium"> Create Status </h2>

                <button type="button" className="button__ico absolute top-0 right-0 m-2.5 uk-modal-close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
     
            </div>
                    
            <div className="space-y-5 mt-7">

                <div> 
                    <label for="" className="text-base">What do you have in mind? </label>
                    <input type="text"  className="w-full mt-3"></input>
                </div>

                <div>  
                    <div className="w-full h-72 relative border1 rounded-lg overflow-hidden bg-[url('../images/ad_pattern.png')] bg-repeat">
                    
                        <label for="createStatusUrl" className="flex flex-col justify-center items-center absolute -translate-x-1/2 left-1/2 bottom-0 z-10 w-full pb-6 pt-10 cursor-pointer bg-gradient-to-t from-gray-700/60">
                            <input id="createStatusUrl" type="file" className="hidden" />
                            <ion-icon name="image" className="text-3xl text-teal-600"></ion-icon>
                            <span className="text-white mt-2">Browse to Upload image </span>
                        </label>

                        {/* <img id="createStatusImage" src={"#"} alt="Uploaded Image" accept="image/png, image/jpeg" style="display:none;" className="w-full h-full absolute object-cover"></img> */}

                    </div>

                </div>

                <div className="flex justify-between items-center">

                    <div className="flex items-start gap-2">
                        <ion-icon name="time-outline" className="text-3xl text-sky-600  rounded-full bg-blue-50 dark:bg-transparent"></ion-icon>
                        <p className="text-sm text-gray-500 font-medium"> Your Status will be available <br/> for <span className="text-gray-800"> 24 Hours</span> </p>
                    </div>

                    <button type="button" className="button bg-blue-500 text-white px-8"> Create</button>

                </div>

            </div>
        
        </div>

    </div>
    )
}

export default CreateStatus;