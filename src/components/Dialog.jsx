'use client';
import { useState } from "react";

function Dialog({ shouldShow, onRequestClose, title, children, bgColor = '#fff' }) {
    return (
        <>
            <div
                tabIndex="-1"
                className={`${shouldShow ? 'translate-y-0' : 'translate-y-full hidden'} 
                duration-500 fixed top-0 left-0 right-0 z-[1050] w-full h-screen  flex items-center justify-center bg-gray-800 bg-opacity-50`}
            >
                <div
                    className="relative container-fluid w-[80%] bg-neutral-white rounded-3xl overflow-y-scroll"
                >
                    {/* Modal content */}
                    <div className={`relative bg-[${bgColor}] rounded-3xl h-[500px]`}>
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-heading-04 font-bold text-primary-900">{title}</h3>
                            <button
                                type="button"
                                className="text-neutral-white bg-primary-400 hover:bg-primary-600 hover:text-neutral-white 
                                rounded-full  w-8 h-8 inline-flex justify-center items-center"
                                onClick={onRequestClose} // Trigger the close function
                            >
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5 space-y-4">{children}</div>
                        {/* Modal footer */}
                        <div className="hidden items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                                focus:ring-blue-300  rounded-3xl text-sm px-5 py-2.5 text-center 
                                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                I accept
                            </button>
                            <button
                                type="button"
                                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none 
                                bg-neutral-white rounded-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 
                                focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 
                                dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                onClick={onRequestClose}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dialog;
