import Image from "next/image";
import Link from "next/link";
import React from "react";
import contactSocial from "../../../../public/assets/img/contactSocial1.svg";
import contactSocial2 from "../../../../public/assets/img/contactSocial2.svg";
import contactSocial3 from "../../../../public/assets/img/contactSocial3.svg";
import map from "../../../../public/assets/img/map.svg";
import "./contact.scss";
import { Input } from "postcss";

export default function ContactForm() {
    return (
        <div className="ContactForm pt-28">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="contact-left max-w-[420px] w-full">
                        <div className="contact-hints flex items-center gap-2">
                            <div className="bg-[#3BAFDD] h-[7px] w-[7px] rounded-full "></div>
                            <h4 className="text-lg text-dark1 font-semibold">Contact us</h4>
                        </div>
                        <h3 className="text-2xl text-dark1 font-semibold mb-0 mt-6">
                            Get a second passport <br className="hidden xl:inline-block" /> with expert help
                        </h3>

                        <div className="footerItem">
                            <h4 className="text-sm font-semibold text-white mb-8">Address</h4>
                            <Link href={"/"} className="flex items-center gap-3">
                                <Image src={contactSocial} className="" alt="location" />
                                <p className=" text-dark3 text-base "> 1PO Box, Collins Street West, Australia</p>
                            </Link>
                            <div className="social-border my-6"></div>
                            <Link href={"/"} className="flex items-center gap-3">
                                <Image src={contactSocial2} className="" alt="location" />
                                <p className="text-dark3 text-base "> info@example.com</p>
                            </Link>
                            <div className="social-border my-6"></div>
                            <Link href={"/"} className="flex items-center gap-3">
                                <Image src={contactSocial3} className="" alt="location" />
                                <p className="text-dark3 text-base "> +61383766284</p>
                            </Link>
                        </div>
                    </div>
                    <div className="contact-right">
                        <h3 className="text-3xl font-semibold text-dark1 mb-6">Get in touch</h3>
                        <p className="text-base text-dark">Get in touch to help us facilitate your Second Passport journey.</p>

                        <form className="mt-8">
                            <div className="grid md:grid-cols-2 gap-6 mb-2">
                                <div class="mb-4">
                                    <label class="block text-dark2 text-sm font-semibold mb-2" for="username">
                                        Name
                                    </label>
                                    <input
                                        class="appearance-none border border-[#DEE3E4] rounded-lg w-full h-[52px] py-2 px-3 text-[#DEE3E4] text-sm leading-tight focus:outline-none focus:shadow-outline form-control focus:ring-blue-500 focus:border-blue-500"
                                        id="username"
                                        type="text"
                                        placeholder="Username"
                                    />
                                </div>
                                <div class="mb-6">
                                    <label class="block text-dark2 text-sm font-semibold mb-2" for="email">
                                        Email
                                    </label>
                                    <input
                                        class="appearance-none border border-[#DEE3E4] rounded-lg w-full h-[52px] py-2 px-3 text-[#DEE3E4] text-sm leading-tight focus:outline-none focus:shadow-outline form-control focus:ring-blue-500 focus:border-blue-500"
                                        id="email"
                                        type="text"
                                        placeholder="Email address "
                                    />
                                </div>
                            </div>
                            <div className="">
                                <label for="message" class="block text-dark2 text-sm font-semibold mb-2">
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    class="block p-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-[#DEE3E4] focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button type="button" className="h-[54px] w-full mt-8 rounded-[10px] transition-all bg-[#F5C943] hover:bg-yellow-500 text-sm font-bold uppercase tracking-[0.02em]">
                                SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
        <Image src={map} alt="map" className="w-full mt-20" />
            </div>
        </div>
    );
}
