import React from 'react'
import './banner.scss'
export default function Banner() {
  return (
      <div className="banner bg-no-repeat bg-cover w-full py-20 flex items-center">
          <div className="container">
              <div className="banner-wrapper max-w-[540px] w-full ">
                  <div className="banner-left">
                      <h1 className="text-dark1 lg:text-[50px] text-[42px] mb-6 font-semibold">Start the best educational journey for your success</h1>
                      <p className=" leading-[30px] mb-10">Donec sed erat ut magna suscipit mattis. Aliquam erat volutpat. Morbi in orci risus.</p>
                      <button className="bg-yellow-400  py-3 px-8 rounded-lg text-dark1 font-bold text-[14px] transition-all hover:bg-yellow-300">APPLY NOW</button>
                  </div>
              </div>
          </div>
      </div>
  );
}
