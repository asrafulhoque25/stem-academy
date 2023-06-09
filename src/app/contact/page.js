import React from 'react'
import SubBanner from '../components/subBanner/SubBanner'
import ContactForm from '../components/contactForm/ContactForm';

export default function page() {
  return (
      <div>
          <SubBanner SubBgImg="https://i.postimg.cc/mrxhxWFG/Group-39460.png" title="Contact Us" links1="Home" links2="Contact" />
          <ContactForm />
      </div>
  );
}
