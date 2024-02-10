import React from 'react';
import Nav from "@/Components/layout/Nav";
import NewsList from '@/Components/layout/NewsList';
import Home from '@/Components/layout/Home';
import Footer from '@/Components/layout/Footer';



const Page = () => {
  return (
    <div>
      
      <Nav />
      <Home/>
      <NewsList/>
      <Footer/>
    </div>
  );
};

export default Page;
