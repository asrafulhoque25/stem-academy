import Image from "next/image";
import footerLogo from '../../../../public/assets/img/footerLogo.svg'
import Link from "next/link";
import location from "../../../../public/assets/img/location.svg";
import sms from "../../../../public/assets/img/sms.svg";
import call from "../../../../public/assets/img/call-calling.svg";
export default function Footer() {
  return (
      <div className="footer bg-black pt-28 ">
          <div className="container">
              <div className="footer-header mt-2 flex flex-wrap items-center border-b-[#262626] border-b-[1px] pb-16 mb-16 justify-between gap-14">
                  <div className="max-w-[502px] w-full">
                      <h3 className=" text-2xl font-semibold text-white mb-3 leading-10">Dreaming To Study Abroad? We Give Wings To Your Dreams</h3>
                      <p className=" text-sm font-semibold text-[#A3A3A3]">Consequat voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-6">
                      <button type="button" className="nav-btn bg-sky transition-all hover:bg-cyan-400 text-white font-normal py-3 px-5 text-center flex items-center ">
                          DISCOVER MORE
                      </button>
                      <button className="bg-yellow-400  py-3 px-8 rounded-lg text-dark1 font-bold text-[14px] transition-all hover:bg-yellow-300">APPLY NOW</button>
                  </div>
              </div>
              <div className="footer-wrapper grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-14 pb-20">
                  <div className="footer-item">
                      <Image src={footerLogo} alt="footerlogo" />
                      <p className=" text-[#A3A3A3] text-sm mt-8">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                      <div className="flex items-center gap-4 mt-6">
                          <Link className="social-link flex items-center justify-center rounded-full" href={"/facebook"}>
                              <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M1.67012 11.2V6.32001H0.400391V4.56298H1.67012V3.06225C1.67012 1.88296 2.42015 0.799988 4.14838 0.799988C4.84811 0.799988 5.36553 0.86816 5.36553 0.86816L5.32476 2.50893C5.32476 2.50893 4.79708 2.50371 4.22124 2.50371C3.59802 2.50371 3.49817 2.79558 3.49817 3.28002V4.56298H5.3743L5.29267 6.32001H3.49817V11.2H1.67012Z"
                                      fill="#C1C8CA"
                                  />
                              </svg>
                          </Link>
                          <Link className="social-link flex items-center justify-center rounded-full" href={"/facebook"}>
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M5.99841 3.33184C4.52194 3.33184 3.33035 4.52342 3.33035 5.99989C3.33035 7.47636 4.52194 8.66794 5.99841 8.66794C7.47488 8.66794 8.66646 7.47636 8.66646 5.99989C8.66646 4.52342 7.47488 3.33184 5.99841 3.33184ZM5.99841 7.73393C5.04358 7.73393 4.26437 6.95472 4.26437 5.99989C4.26437 5.04506 5.04358 4.26585 5.99841 4.26585C6.95323 4.26585 7.73245 5.04506 7.73245 5.99989C7.73245 6.95472 6.95323 7.73393 5.99841 7.73393ZM8.77573 2.60076C8.43101 2.60076 8.15262 2.87914 8.15262 3.22387C8.15262 3.56859 8.43101 3.84698 8.77573 3.84698C9.12046 3.84698 9.39884 3.56989 9.39884 3.22387C9.39894 3.14201 9.3829 3.06094 9.35162 2.98529C9.32034 2.90965 9.27445 2.84091 9.21657 2.78303C9.15868 2.72515 9.08995 2.67926 9.01431 2.64798C8.93866 2.6167 8.85759 2.60065 8.77573 2.60076ZM11.1992 5.99989C11.1992 5.28182 11.2057 4.57025 11.1654 3.85348C11.1251 3.02093 10.9352 2.28205 10.3264 1.67325C9.71625 1.06315 8.97867 0.874523 8.14612 0.834197C7.42805 0.79387 6.71648 0.800375 5.99971 0.800375C5.28164 0.800375 4.57007 0.79387 3.8533 0.834197C3.02075 0.874523 2.28187 1.06445 1.67307 1.67325C1.06296 2.28335 0.87434 3.02093 0.834014 3.85348C0.793687 4.57155 0.800192 5.28312 0.800192 5.99989C0.800192 6.71666 0.793687 7.42953 0.834014 8.1463C0.87434 8.97885 1.06427 9.71773 1.67307 10.3265C2.28317 10.9366 3.02075 11.1253 3.8533 11.1656C4.57137 11.2059 5.28294 11.1994 5.99971 11.1994C6.71778 11.1994 7.42935 11.2059 8.14612 11.1656C8.97867 11.1253 9.71755 10.9353 10.3264 10.3265C10.9365 9.71643 11.1251 8.97885 11.1654 8.1463C11.207 7.42953 11.1992 6.71796 11.1992 5.99989ZM10.0545 9.06731C9.95951 9.30406 9.84503 9.48098 9.66161 9.6631C9.47819 9.84652 9.30258 9.96099 9.06582 10.056C8.38157 10.3278 6.75681 10.2667 5.99841 10.2667C5.24001 10.2667 3.61394 10.3278 2.92969 10.0573C2.69294 9.96229 2.51602 9.84782 2.3339 9.6644C2.15048 9.48098 2.036 9.30536 1.94104 9.06861C1.67046 8.38306 1.7316 6.75829 1.7316 5.99989C1.7316 5.24149 1.67046 3.61542 1.94104 2.93117C2.036 2.69442 2.15048 2.5175 2.3339 2.33538C2.51732 2.15326 2.69294 2.03749 2.92969 1.94253C3.61394 1.67195 5.24001 1.73309 5.99841 1.73309C6.75681 1.73309 8.38287 1.67195 9.06712 1.94253C9.30388 2.03749 9.4808 2.15196 9.66292 2.33538C9.84634 2.5188 9.96081 2.69442 10.0558 2.93117C10.3264 3.61542 10.2652 5.24149 10.2652 5.99989C10.2652 6.75829 10.3264 8.38306 10.0545 9.06731Z"
                                      fill="#C1C8CA"
                                  />
                              </svg>
                          </Link>
                          <Link className="social-link flex items-center justify-center rounded-full" href={"/facebook"}>
                              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M11.1998 1.67029C10.8174 1.83527 10.4012 1.95401 9.97245 2.00025C10.4175 1.73583 10.7508 1.31808 10.9098 0.825393C10.4922 1.07385 10.0346 1.24807 9.5575 1.34033C9.35808 1.12714 9.11689 0.957302 8.84897 0.8414C8.58104 0.725498 8.29211 0.666017 8.00019 0.666662C6.81908 0.666662 5.8692 1.62405 5.8692 2.79891C5.8692 2.96389 5.88919 3.12887 5.92169 3.2876C4.15315 3.19511 2.57584 2.35021 1.52722 1.05661C1.33615 1.38297 1.23602 1.75456 1.23725 2.13274C1.23725 2.87265 1.61346 3.52507 2.18714 3.90877C1.84906 3.89546 1.5189 3.80253 1.2235 3.63755V3.6638C1.2235 4.69993 1.95592 5.55857 2.93205 5.75605C2.74877 5.80366 2.56023 5.82801 2.37087 5.82854C2.23213 5.82854 2.1009 5.81479 1.96841 5.79605C2.23838 6.64094 3.02454 7.25462 3.96067 7.27462C3.22826 7.8483 2.31087 8.18576 1.31474 8.18576C1.13601 8.18576 0.971034 8.17951 0.799805 8.15951C1.74469 8.76569 2.86581 9.11565 4.07316 9.11565C7.99269 9.11565 10.1374 5.86854 10.1374 3.05013C10.1374 2.95764 10.1374 2.86515 10.1312 2.77266C10.5461 2.46895 10.9098 2.09274 11.1998 1.67029Z"
                                      fill="#C1C8CA"
                                  />
                              </svg>
                          </Link>
                          <Link className="social-link flex items-center justify-center rounded-full" href={"/facebook"}>
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M2.27008 10V3.25302H0.126472V10H2.27008ZM1.19855 2.33128C1.94607 2.33128 2.41136 1.81319 2.41136 1.16575C2.39743 0.503709 1.94609 0 1.21274 0C0.479496 0 0 0.503719 0 1.16575C0 1.81322 0.465176 2.33128 1.18456 2.33128H1.19855ZM3.45656 10H5.60017V6.23215C5.60017 6.0305 5.61409 5.82906 5.6707 5.68491C5.82567 5.28202 6.17837 4.86475 6.77053 4.86475C7.54621 4.86475 7.85653 5.48346 7.85653 6.39046V9.99995H10V6.13129C10 4.05889 8.94246 3.09462 7.53209 3.09462C6.37571 3.09462 5.86797 3.77084 5.5859 4.23141H5.60021V3.25288H3.45661C3.48474 3.88598 3.45656 10 3.45656 10Z"
                                      fill="#C1C8CA"
                                  />
                              </svg>
                          </Link>
                      </div>
                  </div>
                  <div className="footerItem">
                      <h4 className="text-sm font-semibold text-white mb-8">Address</h4>
                      <Link href={"/"} className="flex items-center gap-3 mb-4">
                          <Image src={location} className="" alt="location" />
                          <p className=" text-gray text-sm "> 1PO Box, Collins Street West, Australia</p>
                      </Link>
                      <Link href={"/"} className="flex items-center gap-3 mb-4">
                          <Image src={sms} className="" alt="location" />
                          <p className="text-gray text-sm "> info@example.com</p>
                      </Link>
                      <Link href={"/"} className="flex items-center gap-3 mb-4">
                          <Image src={call} className="" alt="location" />
                          <p className="text-gray text-sm "> +61383766284</p>
                      </Link>
                  </div>
                  <div className="footerItem">
                      <h4 className="text-sm font-semibold text-white mb-8">Destinations</h4>
                      <Link href={"/"} className="flex items-center gap-3 mb-4">
                          <p className=" text-gray text-sm "> Study in Europe</p>
                      </Link>
                      <Link href={"/"} className="flex items-center gap-3 mb-4">
                          <p className="text-gray text-sm "> Study in USA</p>
                      </Link>
                      <Link href={"/"} className="flex items-center gap-3 mb-4">
                          <p className="text-gray text-sm "> Study in United Kingdom</p>
                      </Link>
                      <Link href={"/"} className="flex items-center gap-3 mb-4">
                          <p className="text-gray text-sm "> Study in Australia</p>
                      </Link>
                      <Link href={"/"} className="flex items-center gap-3 mb-4">
                          <p className="text-gray text-sm ">Study in New Zealand</p>
                      </Link>
                  </div>
                  <div className="footerItem">
                      <h4 className="text-sm font-semibold text-white mb-8">Immigration</h4>
                      <Link href={"/"} className="flex items-center gap-3 mb-4">
                          <p className=" text-gray text-sm "> Canada immigration</p>
                      </Link>
                      <Link href={"/"} className="flex items-center gap-3 mb-4">
                          <p className="text-gray text-sm "> USA Immigration</p>
                      </Link>
                      <Link href={"/"} className="flex items-center gap-3 mb-4">
                          <p className="text-gray text-sm ">New Zealand Immigration</p>
                      </Link>
                      <Link href={"/"} className="flex items-center gap-3 mb-4">
                          <p className="text-gray text-sm ">USA Immigration</p>
                      </Link>
                  </div>
              </div>
          </div>

          <div className="footer-bottom py-7 border-t-[#262626] border-t-[1px]">
              <p className="text-sm text-[#828282] text-center">Copyright © 2022. Outplay. All rights reserved</p>
          </div>
      </div>
  );
}
