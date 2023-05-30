import './ChooseDestination.scss'
import destinaiton1 from '../../../../public/assets/img/country1.png'
import destinaiton2 from '../../../../public/assets/img/country2.png'
import destinaiton3 from '../../../../public/assets/img/country3.png'
import destinaitonLogo from "../../../../public/assets/img/countrylogo1.png";
import destinaitonLogo2 from "../../../../public/assets/img/countrylogo2.png";
import destinaitonLogo3 from "../../../../public/assets/img/countrylogo3.png";
import arrowReadMore from "../../../../public/assets/img/readMoreArrow.svg";
import Image from 'next/image';
import Link from 'next/link';
export default function ChooseDestination() {


  const data = [
      {
          id: 1,
          img: destinaiton1,
          logoImg: destinaitonLogo,
          title: "Study in Australia",
          pra: "Aliquam erat volutpat. Morbi in orci risus. Etiam ut accumsan leo...",
      },
      {
          id: 2,
          img: destinaiton2,
          logoImg: destinaitonLogo2,
          title: "Study in UK ",
          pra: "Adipiscing at in tellus integer. Pellentesque massa placerat duis...",
      },
      {
          id: 3,
          img: destinaiton3,
          logoImg: destinaitonLogo3,
          title: "Study in USA",
          pra: "Id ornare arcu odio ut sem nulla. Sagittis aliquam malesuada...",
      },
  ];


  return (
      <div className="section-padding bg-[#F6F9FF] section-padding">
          <div className="container">
              <div className="chooseDestination">
                  <h2 className="text-[38px] font-semibold text-dark1 text-center mb-10">
                      Choose your learning <br className="d-none d-xl-inline" /> country for study!
                  </h2>
              </div>
              <div className="grid grid-cols-3 gap-8">
                  {data.map((info) => {
                      return (
                          <div className="destination-details shadow-shadow2 p-3 rounded-2xl" key={info.id}>
                              <div className="destinationImg relative inline-block w-full">
                                  <Image src={info.img} alt="destination" className=" w-full" />
                                  <div className="destinationLogo inline-block absolute left-6 -bottom-8">
                                      <Image src={info.logoImg} alt="destination" className="" />
                                  </div>
                              </div>
                              <div className="px-6 pb-4">
                                  <h5 className=" text-lg font-semibold text-dark1 mb-3 mt-7">{info.title}</h5>
                                  <p className=" text-[16px] text-dark3 mb-4">{info.pra}</p>
                                  <Link href={"/"} className="readMoreBtn flex items-center gap-2 text-[#3BAFDD] text-lg font-semibold">
                                      Read more{" "}
                                      <span>
                                          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path
                                                  d="M7.05371 15.77L12.2154 10.6083C12.825 9.99873 12.825 9.00123 12.2154 8.39165L7.05371 3.22998"
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
                      );
                  })}
              </div>
              <div className='mt-12 flex justify-center'>
                  <button className="bg-yellow-400  py-3 px-8 rounded-lg text-dark1 font-bold text-[14px] transition-all hover:bg-yellow-300 hover:-translate-y-0.5">VIEW ALL</button>
              </div>
          </div>
      </div>
  );
}
