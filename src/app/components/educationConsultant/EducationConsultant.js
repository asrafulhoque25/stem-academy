import React from 'react'
import consultant from '../../../../public/assets/img/colsultant.png'
import Image from 'next/image';
export default function EducationConsultant() {
  return (
      <div className="educationConsultant pb-20">
          <div className="container">
              <div className="lg:grid grid-cols-2 items-center gap-14 lg:gap-8 block">
                  <div className="consultant-left mb-8 lg:mb-0">
                      <Image src={consultant} alt="consultant" className=" h-full w-auto" />
                  </div>
                  <div className="consultant-content">
                      <h2 className="mb-5 text-[32px] sm:text-[38px] font-semibold leading-[48px] text-dark1">Study abroad with the best overseas education consultants</h2>
                      <h4 className="mb-5 text-lg font-semibold text-dark2">Tmply dummy text of the printing and typesetting industry. Psum has been theindustry’s standard.</h4>
                      <p className="mb-8">
                          Nullam non nisi est sit amet. Arcu vitae elementum curabitur vitae nunc. Ut tellus elementum sagittis vitae et leo duis. Accumsan sit amet nulla facilisi morbi
                      </p>
                      <button className="bg-[#EAF9FF]  py-3 px-8 rounded-lg text-[#3BAFDD] hover:text-[#fff] font-bold text-sm transition-all hover:bg-yellow-300">READ MORE</button>
                  </div>
              </div>
          </div>
      </div>
  );
}
