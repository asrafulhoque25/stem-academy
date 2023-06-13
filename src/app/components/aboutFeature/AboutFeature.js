import React from 'react'
import Link from "next/link";
import location from "../../../../public/assets/img/location-yello.svg";
import sms from "../../../../public/assets/img/sms-yellow.svg";
import call from "../../../../public/assets/img/call-calling-yellow.svg";
import aboutCheck from "../../../../public/assets/img/about-Check.svg";
import aboutgroup from "../../../../public/assets/img/about-group.png";
import Image from 'next/image';
export default function AboutFeature() {
  return (
    <div className='aboutFeature pt-28 pb-16'>
        <div className="container">
            <div className="feature-grid grid md:grid-cols-2 gap-10">
                <div className="challenge-feature">
                    <h3 className=' font-semibold text-3xl leading-10 text-dark1'>Today the demand of the youth is to study and work overseas for a challenging & secured future</h3>
                    <div className="top-header-left flex flex-col mt-8 gap-6">
                            <Link href={"/"} className="flex items-center gap-3">
                                <Image src={location} className="" alt="location" />
                                <p className=" text-dark3 text-sm "> 1PO Box, Collins Street West, Australia</p>
                            </Link>
                            <Link href={"/"} className="flex items-center gap-3">
                                <Image src={sms} className="" alt="location" />
                                <p className="text-dark3 text-sm "> info@example.com</p>
                            </Link>
                            <Link href={"/"} className="flex items-center gap-3">
                                <Image src={call} className="" alt="location" />
                                <p className="text-dark3 text-sm "> +61383766284</p>
                            </Link>
                        </div>
                </div>
                <div className='aboutFeature-pra'>
                <p className=' text-lg text-dark3'>World-class training and development programs developed by top teachers. Build skills with courses, certificates, and degrees online from world-class universities and companies. Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus.</p>
                <ul className="about-feature-point flex flex-col mt-8 gap-6">
                            <li className="flex items-center gap-3">
                                <Image src={aboutCheck} className="" alt="aboutCheck" />
                                <p className=" text-dark3 text-sm "> Find the right instructor for you</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <Image src={aboutCheck} className="" alt="aboutCheck" />
                                <p className="text-dark3 text-sm ">Popular topics to learn now</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <Image src={aboutCheck} className="" alt="aboutCheck" />
                                <p className="text-dark3 text-sm ">Assistance from beginning till the end</p>
                            </li>
                            <li className="flex items-center gap-3">
                                <Image src={aboutCheck} className="" alt="aboutCheck" />
                                <p className="text-dark3 text-sm">100% guidance in getting Visa</p>
                            </li>
                        </ul>
                </div>
            </div>
            <div>
            <Image src={aboutgroup} className="w-full mt-20" alt="aboutCheck" />
            </div>
        </div>
    </div>
  )
}
