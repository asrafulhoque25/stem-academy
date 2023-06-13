"use client";
import { useState } from "react";
import ArrowDown from '../../../../public/assets/img/arrowDown.svg'
import Image from "next/image";
export default function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion">
            <div className="accordion-header flex items-center justify-between w-full  py-5  border-b border-[#EAEBEC] text-sm font-semibold text-dark2 categoryItemLink" onClick={toggleAccordion}>
                {title}
                <span>
                    <Image src={ArrowDown} alt="arrow" />
                </span>
            </div>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
}
