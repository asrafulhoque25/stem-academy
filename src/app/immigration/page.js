import React from 'react'
import SubBanner from '../components/subBanner/SubBanner';
import EducationDetails from '../components/educationDetails/EducationDetails';

export default function page() {
  return (
      <div>
          <SubBanner SubBgImg="https://i.postimg.cc/cHN4r7sg/Group-39460.png" title="Canada Immigration" links1="Home" links2="Immigration" links3="Canada Immigration" />
          <EducationDetails />
      </div>
  );
}
