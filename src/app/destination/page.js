import React from 'react'
import SubBanner from '../components/subBanner/SubBanner'
import EducationDetails from '../components/educationDetails/EducationDetails'

export default function page() {
  return (
    <div className='destination'>
        <SubBanner title="Study In Canada" links1="Home" links2="Destinations" links3="Study In Canada"/>
        <EducationDetails />
        
    </div>
  )
}
