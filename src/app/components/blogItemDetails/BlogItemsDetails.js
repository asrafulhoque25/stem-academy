"use client";
import Image from "next/image";
import blogImg from "../../../../public/assets/img/blog-details.png";
import aboutCheck from "../../../../public/assets/img/about-Check.svg";
import share1 from "../../../../public/assets/img/share1.svg";
import share2 from "../../../../public/assets/img/share2.svg";
import share3 from "../../../../public/assets/img/share3.svg";
import share4 from "../../../../public/assets/img/share4.svg";
import reply from "../../../../public/assets/img/reply-write.png";
import reply2 from "../../../../public/assets/img/replyWriter2.png";
import reply3 from "../../../../public/assets/img/replyWriter3.png";
import replylogo from "../../../../public/assets/img/reply.svg";
import arrowRight from "../../../../public/assets/img/arrowRight.svg";
import Link from "next/link";
import "./BlogItemsDetails.scss";
import Accordion from "./Accordion";

// import cta from "../../../../public/assets/img/cta.png";

export default function BlogItemsDetails() {
    const cta = "https://i.postimg.cc/7PC5WXSF/cta.png";
    return (
        <div className="blogItemDetails">
            <div className="bg-[#F6F9FF] py-8">
                <div className="container">
                    <nav class="flex" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li class="inline-flex items-center">
                                <a href={"/"} class="inline-flex items-center text-lg font-semibold text-[#3BAFDD] hover:text-dark5 ">
                                    Home
                                </a>
                            </li>
                            <li>
                                <div class="flex items-center pl-2">
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.4248 14.6L6.85814 9.16669C7.49981 8.52502 7.49981 7.47503 6.85814 6.83336L1.4248 1.40002"
                                            stroke="#3BAFDD"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>

                                    <a href={"/about"} class="inline-flex ml-5 items-center text-lg font-semibold text-[#3BAFDD] hover:text-dark5">
                                        Blog
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div class="flex items-center pl-2">
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.4248 14.6L6.85814 9.16669C7.49981 8.52502 7.49981 7.47503 6.85814 6.83336L1.4248 1.40002"
                                            stroke="#3BAFDD"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>

                                    <a href={"/destination"} class="ml-5 text-lg font-semibold text-dark2 hover:text-dark5">
                                        Blog Details
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="blogDetailWrap py-24 container">
                <div className="grid lg:gap-8 grid-cols-12">
                    <div className="col-span-12 lg:col-span-8">
                        <h2 className="text-3xl text-dark1 font-bold mb-8 pr-8">Unique Experiences Caravan Cabin Animals Maps Uncharted Gateway taxi Explore.</h2>
                        <div className="blogDetailsImg mb-5">
                            <Image src={blogImg} className="blog" alt="blog" />
                        </div>
                        <p className="text-base text-dark3 pt-4 pb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi et sem odio vulputate. Et sit nisi, pharetra sed suspendisse. Tristique enim nunc, habitant ut vestibulum sit
                            tristique malesuada. Viverra nisi, velit nibh orci fermentum commodo purus. Imper diettincidunt fringilla eget.
                        </p>
                        <p className="text-base text-dark3 pt-5 pb-8">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont
                            look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the
                            Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                        </p>
                        <div>
                            <h4 className=" text-lg font-semibold text-dark1 pb-5">Unique experiences explore</h4>
                            <p>
                                On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment blinded by desire,
                                that they cannot foresee the pain and trouble that bound to ensueand equal blame belongs to those who fail in their duty through weakness.
                            </p>
                            <ul className="about-feature-point flex flex-col mt-8 gap-6">
                                <li className="flex items-center gap-3">
                                    <Image src={aboutCheck} className="" alt="aboutCheck" />
                                    <p className=" text-dark3 text-lg "> High touch communication</p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Image src={aboutCheck} className="" alt="aboutCheck" />
                                    <p className="text-dark3 text-lg ">Security is paramount</p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Image src={aboutCheck} className="" alt="aboutCheck" />
                                    <p className="text-dark3 text-lg ">We are fun to work with</p>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Image src={aboutCheck} className="" alt="aboutCheck" />
                                    <p className="text-dark3 text-lg ">Fast response to requests & critical response time guaranteed</p>
                                </li>
                            </ul>
                            <div
                                className="cta py-12 px-10 bg-cover rounded-[6px] bg-no-repeat mt-10 mb-5 w-full min-h-[260px] flex items-center justify-center"
                                style={{ backgroundImage: `url(${cta})` }}
                            >
                                <div className="text-center">
                                    <h2 className=" text-[38px] font-semibold text-white leading-tight mb-6">
                                        Start Your Educational <br className="hidden xl:inline-block" /> Journey
                                    </h2>
                                    <div className="flex justify-center ">
                                        <button className="bg-yellow-400  py-3 px-8 rounded-lg text-dark1 font-bold text-[14px] transition-all hover:bg-yellow-300">APPLY NOW</button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-start flex-wrap gap-6 py-10 border-b border-[#DDDDDD]">
                                <h3 className=" text-sm font-semibold text-dark1">Share :</h3>
                                <div className="share flex items-center justify-center md:justify-start flex-wrap gap-6">
                                    <Link href={"/"} className="px-7 py-3 flex items-center justify-center bg-[#1873EB] rounded-[5px]">
                                        <Image src={share1} alt="share" />
                                    </Link>
                                    <Link href={"/"} className="px-7 py-3 flex items-center justify-center bg-[#31C6F7] rounded-[5px]">
                                        <Image src={share2} alt="share" />
                                    </Link>
                                    <Link href={"/"} className="px-7 py-3 flex items-center justify-center bg-[#CB2027] rounded-[5px]">
                                        <Image src={share3} alt="share" />
                                    </Link>
                                    <Link href={"/"} className="px-7 py-3 flex items-center justify-center bg-[#0077B0] rounded-[5px]">
                                        <Image src={share4} alt="share" />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center justify-start gap-6 py-10 border-b border-[#DDDDDD]">
                                <h3 className=" text-sm font-semibold text-dark1">Tags :</h3>
                                <div className="share flex flex-wrap items-center justify-start gap-3">
                                    <div className="px-7 py-3 flex items-center justify-center border-[#EBEBEB] border-2 rounded-full">
                                        <h4 className="text-sm text-dark3">Success</h4>
                                    </div>
                                    <div className="px-7 py-3 flex items-center justify-center border-[#EBEBEB] border-2 rounded-full">
                                        <h4 className="text-sm text-dark3">Students</h4>
                                    </div>
                                    <div className="px-7 py-3 flex items-center justify-center border-[#EBEBEB] border-2 rounded-full">
                                        <h4 className="text-sm text-dark3">World</h4>
                                    </div>
                                    <div className="px-7 py-3 flex items-center justify-center border-[#EBEBEB] border-2 rounded-full">
                                        <h4 className="text-sm text-dark3">Expodesk</h4>
                                    </div>
                                    <div className="px-7 py-3 flex items-center justify-center border-[#EBEBEB] border-2 rounded-full">
                                        <h4 className="text-sm text-dark3">Service</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="replay my-16">
                                <div className="replay-wrap pb-10 border-b border-[#DDDDDD]">
                                    <h3 className="text-lg font-semibold text-dark1">03 Comments</h3>
                                    <div className="p-[30px] mt-8 rounded-[10px]">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start gap-7">
                                                <div className="min-w[90px]">
                                                    <Image src={reply} alt="" />
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-semibold text-dark3">Guy Hawkins</h5>
                                                    <p className="text-sm text-dark3 mt-2">25 Min ago</p>
                                                </div>
                                            </div>
                                            <a
                                                href="{/}"
                                                className="inline-flex items-center gap-2 px-[20px] py-[8px] rounded-[4px] bg-[#3BAFDD] hover:bg-[#60b2d3] text-[12px] font-semibold text-white"
                                            >
                                                <Image src={replylogo} alt="reply" />
                                                <span>Reply</span>
                                            </a>
                                        </div>

                                        <div className=" pl-[90px] ">
                                            <p className="text-base text-dark3 font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis </p>
                                        </div>
                                    </div>
                                    <div className="md:ml-[90px] ml-[23px] border-l-[#F5C943] border-l bg-dark7 p-[30px] mt-8 rounded-[10px]">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start gap-7">
                                                <div className="min-w[90px]">
                                                    <Image src={reply2} alt="" />
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-semibold text-dark3">Devon Lane</h5>
                                                    <p className="text-sm text-dark3 mt-2">25 Min ago</p>
                                                </div>
                                            </div>
                                            <a
                                                href="{/}"
                                                className="inline-flex items-center gap-2 px-[20px] py-[8px] rounded-[4px] bg-[#3BAFDD] hover:bg-[#60b2d3] text-[12px] font-semibold text-white"
                                            >
                                                <Image src={replylogo} alt="reply" />
                                                <span>Reply</span>
                                            </a>
                                        </div>

                                        <div className=" pl-[90px]">
                                            <p className="text-base text-dark3 font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis </p>
                                        </div>
                                    </div>
                                    <div className="p-[30px] mt-8 rounded-[10px]">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start gap-7">
                                                <div className="min-w[90px]">
                                                    <Image src={reply3} alt="" />
                                                </div>
                                                <div>
                                                    <h5 className="text-sm font-semibold text-dark3">Arlene McCoy</h5>
                                                    <p className="text-sm text-dark3 mt-2">25 Min ago</p>
                                                </div>
                                            </div>
                                            <a
                                                href="{/}"
                                                className="inline-flex items-center gap-2 px-[20px] py-[8px] rounded-[4px] bg-[#3BAFDD] hover:bg-[#60b2d3] text-[12px] font-semibold text-white"
                                            >
                                                <Image src={replylogo} alt="reply" />
                                                <span>Reply</span>
                                            </a>
                                        </div>

                                        <div className=" pl-[90px] ">
                                            <p className="text-base text-dark3 font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-20">
                                    <h4 className=" text-lg font-semibold text-dark1">Leave A Comment</h4>
                                    <form className="mt-8">
                                        <div className="grid md:grid-cols-2 gap-6 mb-2">
                                            <div class="mb-4">
                                                <input
                                                    class="appearance-none border border-[#DEE3E4] rounded-lg w-full h-[52px] py-2 px-3 text-[#DEE3E4] text-sm leading-tight focus:outline-none focus:shadow-outline form-control focus:ring-blue-500 focus:border-blue-500"
                                                    id="username"
                                                    type="text"
                                                    placeholder="Full Name*"
                                                />
                                            </div>
                                            <div class="mb-6">
                                                <input
                                                    class="appearance-none border border-[#DEE3E4] rounded-lg w-full h-[52px] py-2 px-3 text-[#DEE3E4] text-sm leading-tight focus:outline-none focus:shadow-outline form-control focus:ring-blue-500 focus:border-blue-500"
                                                    id="email"
                                                    type="text"
                                                    placeholder="Email Address* "
                                                />
                                            </div>
                                        </div>
                                        <div className="">
                                            <textarea
                                                id="message"
                                                rows="5"
                                                class="block p-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-[#DEE3E4] focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                                                placeholder="Your message"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <div class="flex items-center mb-4 mt-8">
                                                <div class="flex items-center">
                                                    <input
                                                        id="link-checkbox"
                                                        type="checkbox"
                                                        value=""
                                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded  dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label for="link-checkbox" class="ml-2 text-sm font-medium text-dark3">
                                                        I would like to receive periodic newsletters via email.
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex ">
                                            <button
                                                type="button"
                                                className="h-[54px] w-full mt-8 rounded-[10px] px-8 text-white transition-all bg-[#3BAFDD] hover:bg-[#5ebfe6] text-sm font-bold uppercase tracking-[0.02em]"
                                            >
                                                Post Comment
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-12 lg:col-span-4">
                        <div>
                            <div className="search-wrap mb-12">
                                <input type="search" className="search-control w-full text-sm text-dark3 focus: border-0 focus:outline-0" placeholder="Search" />
                            </div>
                            <div className="category p-[30px] rounded-lg shadow-shadow2 mb-12">
                                <h2 className=" text-lg font-semibold text-dark1 mb-8">Category</h2>
                                <div>
                                    <ul>
                                        <li>
                                            <a href="{/}" className="flex items-center justify-between py-5 border-t border-b border-[#EAEBEC] categoryItemLink">
                                                <p className="mb-0 text-sm text-dark3">VPN Providers</p>
                                                <Image src={arrowRight} alt="arrow" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                <p className="mb-0 text-sm text-dark3">Antivirus</p>
                                                <Image src={arrowRight} alt="arrow" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                <p className="mb-0 text-sm text-dark3">Password Manager</p>
                                                <Image src={arrowRight} alt="arrow" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                <p className="mb-0 text-sm text-dark3">Email Services</p>
                                                <Image src={arrowRight} alt="arrow" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                <p className="mb-0 text-sm text-dark3">Cloud Storage</p>
                                                <Image src={arrowRight} alt="arrow" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="category p-[30px] rounded-lg shadow-shadow2 mb-12">
                                <h2 className=" text-lg font-semibold text-dark1 mb-8">Archive</h2>
                                <div>
                                    <ul>
                                        <li className=" cursor-pointer">
                                            <Accordion title="2021">
                                                <ul>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5 border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">VPN Providers</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Antivirus</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Password Manager</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Email Services</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Cloud Storage</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </Accordion>
                                        </li>
                                        <li className=" cursor-pointer">
                                            <Accordion title="2020">
                                                <ul>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5 border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">VPN Providers</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Antivirus</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Password Manager</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Email Services</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Cloud Storage</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </Accordion>
                                        </li>
                                        <li className=" cursor-pointer">
                                            <Accordion title="2019">
                                                <ul>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5 border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">VPN Providers</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Antivirus</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Password Manager</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Email Services</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Cloud Storage</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </Accordion>
                                        </li>
                                        <li className=" cursor-pointer">
                                            <Accordion title="2018">
                                                <ul>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5 border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">VPN Providers</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Antivirus</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Password Manager</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Email Services</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Cloud Storage</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </Accordion>
                                        </li>
                                        <li className=" cursor-pointer">
                                            <Accordion title="2017">
                                                <ul>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5 border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">VPN Providers</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Antivirus</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Password Manager</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Email Services</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="{/}" className="flex items-center justify-between py-5  border-b border-[#EAEBEC] categoryItemLink">
                                                            <p className="mb-0 text-sm text-dark3">Cloud Storage</p>
                                                            <Image src={arrowRight} alt="arrow" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </Accordion>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="category p-[30px] rounded-lg shadow-shadow2 mb-12">
                                <h2 className=" text-lg font-semibold text-dark1 mb-8">Tags</h2>
                                <div>
                                    <div className="share flex flex-wrap items-center justify-start gap-3">
                                        <div className="px-4 py-2 flex items-center justify-center border-[#EBEBEB] border-2 rounded-full">
                                            <h4 className="text-sm text-dark3">Success</h4>
                                        </div>
                                        <div className="px-4 py-2 flex items-center justify-center border-[#EBEBEB] border-2 rounded-full">
                                            <h4 className="text-sm text-dark3">Students</h4>
                                        </div>
                                        <div className="px-4 py-2 flex items-center justify-center border-[#EBEBEB] border-2 rounded-full">
                                            <h4 className="text-sm text-dark3">World</h4>
                                        </div>
                                        <div className="px-4 py-2 flex items-center justify-center border-[#EBEBEB] border-2 rounded-full">
                                            <h4 className="text-sm text-dark3">Expodesk</h4>
                                        </div>
                                        <div className="px-4 py-2 flex items-center justify-center border-[#EBEBEB] border-2 rounded-full">
                                            <h4 className="text-sm text-dark3">Service</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
