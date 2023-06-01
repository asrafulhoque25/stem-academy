import Image from 'next/image';
import React from 'react'
import line1 from '../../../../public/assets/img/BrandLine1.svg'
import line2 from '../../../../public/assets/img/BrandLine2.svg'
import brand1 from '../../../../public/assets/img/brand1.svg'
import brand2 from '../../../../public/assets/img/brand2.svg'
import brand3 from '../../../../public/assets/img/brand3.svg'
import brand4 from '../../../../public/assets/img/brand4.svg'
import brand5 from '../../../../public/assets/img/brand5.svg'
import brand6 from '../../../../public/assets/img/brand6.svg'
import brand7 from '../../../../public/assets/img/brand7.svg'
import brand8 from '../../../../public/assets/img/brand8.svg'
import brand9 from '../../../../public/assets/img/brand9.svg'
import brand10 from '../../../../public/assets/img/brand10.svg'
import brand11 from '../../../../public/assets/img/brand11.svg'
import brand12 from '../../../../public/assets/img/brand12.svg'
import brand13 from '../../../../public/assets/img/brand16.svg'
import brand14 from '../../../../public/assets/img/brand17.svg'
import brand15 from '../../../../public/assets/img/brand19.svg'
import brand16 from '../../../../public/assets/img/brand20.svg'
import brand17 from '../../../../public/assets/img/brand21.svg'
import brand18 from '../../../../public/assets/img/brand22.svg'
import brand19 from '../../../../public/assets/img/brand23.svg'
import brand20 from '../../../../public/assets/img/brand24.svg'
export default function Brand() {
  const brands = [
      {
          images: [brand1, brand2, brand3, brand4, brand5, brand6],
      },
      {
          images: [brand7, brand8, brand9, brand10, brand11, brand12],
      },
      {
          images: [brand13, brand14, brand15, brand16, brand17],
      },
      {
          images: [brand18, brand19, brand20],
      },
  ];
  return (
      <div className="brand section-padding bg-dark7">
          <div className="container">
              <div className="brand-title block text-center lg:flex flex-wrap lg:flex-nowrap items-center justify-center gap-4 text-lg font-semibold text-dark1 mb-10">
                  <span className='lg:block lg:opacity-1 opacity-0'>
                      <Image src={line1} alt="line" />
                  </span>
                  International<span className='font-extrabold'>University & Colleges</span>our partner
                  <span className='lg:block lg:opacity-1 opacity-0'>
                      <Image src={line2} alt="line" />
                  </span>
              </div>

              {
                brands.map((brand, index)=>{
                  return (
                      <div className={`brand-wrapper flex items-center justify-center gap-[30px] flex-wrap`} key={index}>
                          {brand.images?.map((img, imgIndex) => {
                              return (
                                  <div className="brand-item mb-8 w-[160px] h-[81px] flex items-center justify-center bg-white rounded-md" key={imgIndex}>
                                      <Image src={img} alt="brand" />
                                  </div>
                              );
                          })}
                      </div>
                  );
                })
              }

          </div>
      </div>
  );
}
