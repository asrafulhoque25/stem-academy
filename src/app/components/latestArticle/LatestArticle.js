import Image from "next/image";
import Link from "next/link";
import React from "react";
import articlePic from "../../../../public/assets/img/review1.png";
import articlePic2 from "../../../../public/assets/img/review2.png";
import articlePic3 from "../../../../public/assets/img/review3.png";
import profilePic1 from "../../../../public/assets/img/profilePic1.png";
import profilePic2 from "../../../../public/assets/img/profilePic2.png";
import profilePic3 from "../../../../public/assets/img/profilePic3.png";
import clock from "../../../../public/assets/img/clock.svg";

export default function LatestArticle() {
    const data = [
        {
            articlePic: articlePic,
            profile: profilePic1,
            title: "Unique experiences caravan cabin animals maps gateway...",
            pra: "Pellentesque eu ante sed diam placerat molestie vitae vitae ligula.",
            profileName: "Kristin Watson",
            location: "12 hours ago",
        },
        {
            articlePic: articlePic2,
            profile: profilePic2,
            title: "Amet minim mollit non deserunt ullamco est sit aliqua dolor",
            pra: "Pellentesque eu ante sed diam placerat molestie vitae vitae ligula.",
            profileName: "Kristin Watson",
            location: "12 hours ago",
        },
        {
            articlePic: articlePic3,
            profile: profilePic3,
            title: "Consequat voluptate velit esse cillum dolore eu fugiat nulla",
            pra: "Pellentesque eu ante sed diam placerat molestie vitae vitae ligula.",
            profileName: "Kristin Watson",
            location: "12 hours ago",
        },
    ];
    return (
        <div className="latestArticle section-padding">
            <div className="container">
                <div className="title">
                    <h2 className="sm:text-[38px] text-[32px] font-semibold text-dark1 text-center mb-12">Our latest articles</h2>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 md:gap-4 lg:gap-6">
                    {data.map((data, index) => {
                        return (
                            <div className="article" key={index}>
                                <div className="article-details shadow-shadow2 p-3 rounded-2xl">
                                    <div className="articleImg relative inline-block w-full">
                                        <Image src={data.articlePic} alt="destination" className=" w-full" />
                                    </div>
                                    <div className="px-5 pb-4 mt-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="destinationLogo flex items-center gap-2">
                                                <Image src={data.profile} alt="destination" className="" />
                                                <h4 className="text-[14px] font-semibold text-dark3">{data.profileName}</h4>
                                            </div>
                                            <div className="destinationLogo flex items-center gap-2">
                                                <Image src={clock} alt="destination" className="" />
                                                <h4 className="text-[13px] font-normal text-dark2">{data.location}</h4>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className=" text-lg font-bold text-dark2 mb-3">Unique experiences caravan cabin animals maps gateway...</h4>
                                            <p className="text-[14px] text-dark3 mb-5">Pellentesque eu ante sed diam placerat molestie vitae vitae ligula.</p>
                                        </div>
                                        <Link href={"/"} className="readMoreBtn flex items-center gap-2 text-[#3BAFDD] text-[14px] font-semibold">
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
            </div>
        </div>
    );
}
