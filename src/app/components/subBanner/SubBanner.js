import React from "react";
export default function SubBanner({ SubBgImg, title, links1, links2, links3 }) {
    return (
        <div className="subBanner min-h-[480px] bg-no-repeat bg-cover flex items-center" style={{ backgroundImage: `url(${SubBgImg})` }}>
            <div className="container">
                <h2 className="text-[40px] md:text-[50px] font-semibold text-dark1 mb-3">{title}</h2>
                <div className="subbanner-content">
                    <div>
                        <nav class="flex mb-6" aria-label="Breadcrumb">
                            <ol class="inline-flex items-center flex-wrap space-x-1 md:space-x-3">
                                <li class="inline-flex items-center">
                                    <a href={"/"} class="inline-flex items-center text-lg font-semibold text-[#3BAFDD] hover:text-dark5 ">
                                        {links1}
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
                                            {links2}
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
                                            {links3}
                                        </a>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
