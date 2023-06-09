"use client";

import { usePathname } from "next/navigation";

import AboutFeature from "../components/aboutFeature/AboutFeature";
import LatestArticle from "../components/latestArticle/LatestArticle";
import SubBanner from "../components/subBanner/SubBanner";
import WhyChoose from "../components/whyChoose/WhyChoose";

const page = () => {
    // const router = useRouter();

    // console.log(router);

     const pathname = usePathname();
     console.log(pathname)

    return (
        <div>
            <SubBanner SubBgImg="https://i.postimg.cc/vmd3s4bt/sub-Banner1.png" title="About Us" links1="Home" links2="About Us" />
            <AboutFeature />
            <WhyChoose />
            <LatestArticle />
        </div>
    );
};

export default page;
