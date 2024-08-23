'use client';

import { useState } from "react";



function ExpandCard() {

const [width ,setWidth] = useState('500')
const [isExpaned ,setExpaned] = useState(true)

    function handleExpandCard(isExpaned){
        setExpaned(!isExpaned);
        setWidth(200);
    }

    return (
        <>
            <div class={`bg-[#2B1624] border rounded-3xl shadow flex w-[${width}px] h-[289px]`} onClick={() => handleExpandCard(isExpaned)}>

               {width != '200' ? ( <> 
                <div class="p-5 flex-1" >
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
               </>) : '' } 
               
                <div className="rounded-3xl flex-1" style={{ width: '100%', backgroundImage: `url('/CloudStackServices/background/bg--cloud-services.png')`, backgroundSize: 'cover' }}>
                </div>
            </div>
        </>
    )

}

export default ExpandCard;