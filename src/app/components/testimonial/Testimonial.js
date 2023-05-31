import Image from 'next/image'
import testimonialImg from '../../../../public/assets/img/testimonial.png'
import quote from '../../../../public/assets/img/quote.svg'
import writer from '../../../../public/assets/img/writter.png'
export default function Testimonial() {
  return (
      <div className="testimonial section-padding">
          <div className="container">
              <div className="testimonial-wrapper grid grid-cols-2 gap-12 items-center ">
                  <div className="testimonial-left">
                      <div className="testimonial-img">
                          <Image src={testimonialImg} alt="testimonial image" className="" />
                      </div>
                  </div>
                  <div className="testimonial-right">
                      <Image src={quote} alt="quote" className=" mb-8" />
                      <p className=" text-dark2 text-[26px] font-medium mb-8">
                          “Maku e whai kaha, whai mana hei whakamana i ahau ano noku mana hei whakaarahi tuakana. Aliquam erat volutpat. Morbi in orci risus. Etiam ut accumsan leo.“
                      </p>
                      <div className="flex items-center gap-3 ">
                          <Image src={writer} alt="writer" className="" />
                          <div>
                              <h4 className=" text-2xl font-semibold text-dark1">Robert Fox</h4>
                              <p className=' text-dark3 text-[16px] '>CSE Student</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}
