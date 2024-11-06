

"use client"
import React from "react";
import Header from "./Header/Header";
import Home  from "./component/Home";
import About from "./About/About";
import Popular from "./About/Popular/Populat";
import Recent from "./Header/Recent/Recent";
import Newsletter from "./Header/NewsLetter/NewsLetter";
import Footer from "./Header/Footer/Footer";



export default function Page() {
  return (
  <>
  
<Header/>
<Home/>
<About/>
<Popular/>
<Recent/>
<Newsletter/>
<Footer/>
  </>
  
        
    
  
    
  );
}
