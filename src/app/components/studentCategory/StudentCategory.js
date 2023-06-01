"use client";
import Link from "next/link";
import category1 from "../../../../public/assets/img/studentCategory1.svg";
import category2 from "../../../../public/assets/img/studentCategory2.svg";
import category3 from "../../../../public/assets/img/studentCategory3.svg";
import category4 from "../../../../public/assets/img/studentCategory4.svg";
import Image from "next/image";
const categoryData = [
    {
        image: category1,
        title: "Future Students",
        path: "/featureStudents",
    },
    {
        image: category2,
        title: "World Students",
        path: "/worldStudents",
    },
    {
        image: category3,
        title: "Current Students",
        path: "/currentStudents",
    },
    {
        image: category4,
        title: "Alumni & Donors",
        path: "/alumni",
    },
];

export const StudentCategory = () => {
    return (
        <div
            className="student-category py-24"
            style={{
                backgroundImage: `url(https://i.postimg.cc/9QwGyB6L/dot.png)`,
                backgroundPosition: "100% 100%",
                backgroundSize: "cover",
            }}
        >
            <div className="container">
                <div className="category-items grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-nowrap items-center justify-between gap-5 lg:gap-6 xl:gap-8">
                    {categoryData.map((data, index) => {
                        return (
                            <>
                            <Link href={data.path} key={index} className="hover:border-[#fff] hover:shadow-shadow1 transition-all w-full rounded-2xl xl:p-10 lg:p-5 p-4 border-[#DEE3E4] border-[1px]">
                                    <Image src={data.image} alt="img" className="mx-auto mb-5" />
                                    <h4 className=" text-lg font-semibold text-dark1 text-center">{data.title}</h4>
                                </Link>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
