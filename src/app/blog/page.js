import React from 'react'
import SubBanner from '../components/subBanner/SubBanner'
import BlogItem from '../components/blogAll/BlogItem';

export default function page() {
  return (
      <div className="blog">
              <SubBanner SubBgImg="https://i.postimg.cc/cHN4r7sg/Group-39460.png" title="Blog" links1="Home" links2="Blog"  />
              <BlogItem />
      </div>
  );
}
