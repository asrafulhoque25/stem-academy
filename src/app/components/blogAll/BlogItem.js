import Image from "next/image";
import React from "react";
import writer1 from "../../../../public/assets/img/writter1.png";
import clock from "../../../../public/assets/img/clock1.svg";
import Link from "next/link";
import { blogData } from "./BlogData";


// import blogData from '../blogAll/BlogData'

export default function BlogItem() {
    return (
        <div className="blog-wrap py-24">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {blogData.map((data, index) => {
                        return (
                            <div className="blog-item p-[15px] shadow-shadow1 rounded-2xl mb-3" key={index}>
                                <Image src={data.blogImg} className="w-full rounded-2xl" alt="blog" />
                                <div className="px-3">
                                    <div className="blog-writerInfo flex items-center gap-4 py-6 ">
                                        <div className="flex items-center gap-3">
                                            <Image src={writer1} className="w-auto" alt="" />
                                            <p className="text-sm font-semibold text-dark3 mb-0">{data.blogWriter}</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Image src={clock} className="w-auto" alt="" />
                                            <p className="text-sm font-semibold text-dark3 mb-0">{data.blogTime}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className=" text-dark2 text-base font-bold">{data.title}</h4>
                                        <p className=" text-dark3 text-sm py-4">{data.BlogPra}</p>
                                        <Link href={"/blogDetails"} className="readMoreBtn flex items-center gap-2 text-[#3BAFDD] text-[14px] font-semibold mb-6">
                                            Read more{" "}
                                            <span>
                                                <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M1.05371 13.77L6.21538 8.60831C6.82496 7.99873 6.82496 7.00123 6.21538 6.39165L1.05371 1.22998"
                                                        stroke="#3BAFDD"
                                                        stroke-width="1.5"
                                                        stroke-miterlimit="10"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div class="flex items-center justify-center  bg-white px-4 py-3 sm:px-6">
                    <div class="flex flex-1 justify-between sm:hidden">
                        <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Previous
                        </a>
                        <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Next
                        </a>
                    </div>
                    <div class="hidden sm:flex sm:flex-1 sm:items-center mt-8 justify-center">
                        <div>
                            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                <a
                                    href="#"
                                    class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-[#E0E0E0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    <span class="sr-only">Previous</span>
                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>

                                <a
                                    href="#"
                                    aria-current="page"
                                    class="relative z-10 inline-flex items-center bg-[#3BAFDD] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3BAFDD]"
                                >
                                    1
                                </a>
                                <a
                                    href="#"
                                    class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-[#E0E0E0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    2
                                </a>
                                <a
                                    href="#"
                                    class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-[#E0E0E0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                >
                                    3
                                </a>
                                <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-[#E0E0E0] focus:outline-offset-0">...</span>
                                <a
                                    href="#"
                                    class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-[#E0E0E0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                >
                                    8
                                </a>
                                <a
                                    href="#"
                                    class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-[#E0E0E0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    9
                                </a>
                                <a
                                    href="#"
                                    class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-[#E0E0E0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    10
                                </a>
                                <a
                                    href="#"
                                    class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-[#E0E0E0] hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                >
                                    <span class="sr-only">Next</span>
                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
