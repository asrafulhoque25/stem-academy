import Banner from "./components/banner/banner";
import Brand from "./components/brand/Brand";
import ChooseDestination from "./components/chooseDestination/ChooseDestination";
import EducationConsultant from "./components/educationConsultant/EducationConsultant";
import LatestArticle from "./components/latestArticle/LatestArticle";
import { StudentCategory } from "./components/studentCategory/StudentCategory";
import Testimonial from "./components/testimonial/Testimonial";
import WhyAbroad from "./components/whyAbroad/WhyAbroad";
import WhyChoose from "./components/whyChoose/WhyChoose";

export default function Home() {
  return (
      <main className="">
          <Banner />
          <StudentCategory />
          <EducationConsultant />
          <ChooseDestination />
          <WhyAbroad />
          <Testimonial />
          <WhyChoose />
          <LatestArticle />
          <Brand />
      </main>
  );
}
