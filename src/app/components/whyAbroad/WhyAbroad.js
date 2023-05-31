import React from "react";
import whyAbroad from "../../../../public/assets/img/why-abroad.png";
import Image from "next/image";
export default function WhyAbroad() {
    return (
        <div className="WhyAbroad">
            <div className="grid grid-cols-2">
                <div className="whyAbroadImg">
                    <Image src={whyAbroad} alt="whyabroad" className="w-full" />
                </div>
                <div className=" bg-dark1 py-20 pl-20 w-full">
                    <div className=" max-w-[500px]">
                        <h2 className="mb-5 text-[38px] font-semibold leading-[48px] text-white">Study abroad with the best overseas education consultants</h2>
                        <h4 className="mb-5 text-lg font-semibold text-dark5">Tmply dummy text of the printing and typesetting industry. Psum has been theindustry’s standard.</h4>
                        <p className="mb-8 text-dark4">
                            Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi morbi
                        </p>
                        <button className="bg-yellow-400  py-3 px-8 rounded-lg text-dark1 font-bold text-[14px] transition-all hover:bg-yellow-300">READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
