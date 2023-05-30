import Banner from "./components/banner/banner";
import ChooseDestination from "./components/chooseDestination/ChooseDestination";
import EducationConsultant from "./components/educationConsultant/EducationConsultant";
import { StudentCategory } from "./components/studentCategory/StudentCategory";
import WhyAbroad from "./components/whyAbroad/WhyAbroad";

export default function Home() {
  return (
      <main className="">
          <Banner />
          <StudentCategory />
          <EducationConsultant />
          <ChooseDestination />
          <WhyAbroad />
      </main>
  );
}
