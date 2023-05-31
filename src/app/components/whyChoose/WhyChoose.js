import Image from 'next/image';
import './whyChoose.scss'
import Check from '../../../../public/assets/img/Check.svg'
import service1 from '../../../../public/assets/img/service1.svg'
import service2 from '../../../../public/assets/img/service2.svg'
import service3 from '../../../../public/assets/img/service3.svg'
import service4 from '../../../../public/assets/img/service4.svg'
import shapeBg from '../../../../public/assets/img/shapebg.svg'

export default function WhyChoose() {
  return (
      <div className="whyChoose section-padding bg-dark8">
          <div className="container">
              <div className="chooseWrap grid grid-cols-2 gap-14">
                  <div className="chooseLeft">
                      <h2 className="text-[38px] font-semibold text-dark1 mb-6">Why choose us?</h2>
                      <p className="text-lg text-dark1  mb-6">
                          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore feugiat nulla facilisis at vero eros et accumsan et iusto odio...
                      </p>
                      <ul mb-6>
                          <li className="flex items-center gap-4 mb-3">
                              <Image src={Check} alt="check" />
                              <p className="mb-0 text-lg text-dark1">Find the right instructor for you</p>
                          </li>
                          <li className="flex items-center gap-4 mb-3">
                              <Image src={Check} alt="check" />
                              <p className="mb-0 text-lg text-dark1">Popular topics to learn now</p>
                          </li>
                          <li className="flex items-center gap-4 mb-3">
                              <Image src={Check} alt="check" />
                              <p className="mb-0 text-lg text-dark1">Assistance from beginning till the end</p>
                          </li>
                          <li className="flex items-center gap-4 mb-3">
                              <Image src={Check} alt="check" />
                              <p className="mb-0 text-lg text-dark1">100% guidance in getting Visa</p>
                          </li>
                      </ul>
                      <button className="bg-yellow-400  py-3 px-8 rounded-lg text-dark1 font-bold text-[14px] transition-all hover:bg-yellow-300  mt-8">APPLY NOW</button>
                  </div>

                  <div className="choose-right flex gap-8">
                      <div className="flex flex-col">
                          <div className="choose-right-item shadow-shadow1 rounded-2xl p-8 text-center mb-8">
                              <Image src={service1} alt="service" className="mx-auto pb-6" />
                              <p className=" text-dark3 mb-3 text-sm font-semibold">Successful students</p>
                              <h4 className=" text-dark1 text-lg font-semibold">89%</h4>
                          </div>
                          <div className="choose-right-item shadow-shadow1 rounded-2xl p-8 text-center mb-8 ">
                              <Image src={service2} alt="service" className="mx-auto pb-6" />
                              <p className=" text-dark3 mb-3 text-sm font-semibold">Service country</p>
                              <h4 className=" text-dark1 text-lg font-semibold">100+</h4>
                          </div>
                      </div>
                      <div className="flex  flex-col mt-12 shape-bg">
                      <Image src={shapeBg} alt="service" className="shapeImg" />
                          <div className="choose-right-item shadow-shadow1 rounded-2xl p-8 text-center  mb-8">
                              <Image src={service3} alt="service" className="mx-auto pb-6" />
                              <p className=" text-dark3 mb-3 text-sm font-semibold">University</p>
                              <h4 className=" text-dark1 text-lg font-semibold">200+</h4>
                          </div>
                          <div className="choose-right-item shadow-shadow1 rounded-2xl p-8 text-center  mb-8">
                              <Image src={service4} alt="service" className="mx-auto pb-6" />
                              <p className=" text-dark3 mb-3 text-sm font-semibold">Years of experience</p>
                              <h4 className=" text-dark1 text-lg font-semibold">25+</h4>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
