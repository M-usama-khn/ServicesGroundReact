import React from 'react';
import{facebook,
    Youtube_black,
    twitter_logo,
    Linkedin_logo,
    Instagram,} from '../assets';
    import { Link } from "react-router-dom";
    var string =  window.location.href
    var substring = "/blog/"
    var url = "";
   if(string == "https://servicesground.com/about-us/" || string == "https://servicesground.com/how-we-work/" || string == "http://servicesground.com/about-us/" || string == "http://servicesground.com/how-we-work/"){
    window.location.href = "https://servicesground.com/about"
   }

   if(string == "https://servicesground.com/services/quality-assurance/" || string == "http://servicesground.com/services/quality-assurance/"){
    window.location.href = "https://servicesground.com/experties/software-testing"
   }

  
   if(string == "https://servicesground.com/services/social-marketing/" || string == "http://servicesground.com/services/social-marketing/"){
    window.location.href = "https://servicesground.com/experties/social-media/"
   }

   if(string == "https://servicesground.com/services/seo/" || string == "http://servicesground.com/services/seo/"){
    window.location.href = "https://servicesground.com/experties/seo/"
   }
   
   if(string == "https://servicesground.com/services/website-development/" || string == "http://servicesground.com/services/website-development/"){
    window.location.href = "https://servicesground.com/experties/web-development/"
   }

   if(string == "https://servicesground.com/services/app-development/" || string == "http://servicesground.com/services/app-development/"){
    window.location.href = "https://servicesground.com/experties/mobile-app-development/"
   }

   if(string == "https://servicesground.com/services/app-design/" || string == "http://servicesground.com/services/app-design/"){
    window.location.href = "https://servicesground.com/experties/mobile-app-development"
   }
   
   if(string == "https://servicesground.com/services/web-design/" || string == "http://servicesground.com/services/web-design/"){
    window.location.href = "https://servicesground.com/experties/mobile-app-development/"
   }

   if(string == "https://servicesground.com/services/software-development/" || string == "http://servicesground.com/services/software-development/"){
    window.location.href = "https://servicesground.com/experties/web-development/"
   }

   if(string == "https://servicesground.com/services/responsive-design/" || string == "http://servicesground.com/services/responsive-design/"){
    window.location.href = "https://servicesground.com/experties/web-development/"
   }

   if(string == "https://servicesground.com/services/logo-design/" || string == "http://servicesground.com/services/logo-design/"){
    window.location.href = "https://servicesground.com/experties/ui-ux"
   }

  
   if(string == "https://servicesground.com/services/video-marketing/" || string == "http://servicesground.com/services/video-marketing/"){
    window.location.href = "https://servicesground.com/experties/digital-marketing"
   }
  
   if(string == "https://servicesground.com/our-services/" || string == "http://servicesground.com/our-services/"){
    window.location.href = "https://servicesground.com/"
   }
   
   if(string == "https://servicesground.com/contact/" || string == "http://servicesground.com/contact/"){
    window.location.href = "https://servicesground.com/contact-us/"
   }
   if(string == "https://servicesground.com/terms-of-use/" || string == "http://servicesground.com/terms-of-use/"){
    window.location.href = "https://servicesground.com/terms-and-conditions/"
   }

   if(string == "https://servicesground.com/experties/software-testing" || string == "http://servicesground.com/experties/software-testing/"){
    window.location.href = "https://servicesground.com/experties/quality-assurance/"
   }

    if(string === "https://dev.servicesground.com/"  || string === "https://servicesground.com/" || string === "http://127.0.0.1:5173/" || string === "http://127.0.0.1:4173/" || string === "http://localhost:3000/" || string === "http://localhost:5173/" )
    {}
    else{
    if(string.toLowerCase().includes(substring.toLowerCase())){
    }
    else if(string.includes("/experties/") || string.includes("/about") || string.includes("/contact") || string.includes("/services") || string.includes("/our-services") || string.includes("/book-an-appointment") || string.includes("/terms-and-conditions") || string.includes("/privacy-policys") || string.includes(":3000"))
    {
      url=""
    }
    else{
        
         url = ("/blog/"+ string.split("/")[3]+"/")
         window.location.href = url
    }
    }
    const new_date=new Date();
    const update_year=new_date.getFullYear();
export default function Footer() {
   
  return (
   
    <footer className="footer">
    <div className="page-padding">
        <div className="container-large">
            <div className="padding-vertical_section">
                <div className="divider-line"></div>
                <div className="w-layout-grid layout-footer">
                    <div className="footer-left-content">
                        <div>COPYRIGHT © {update_year} Services Ground. ALL RIGHTS RESERVED.</div>
                        <div><Link to="/privacy-policy" className="text-link">Privacy Policy</Link>
                        <Link to="/terms-and-conditions" className="text-link padding-link">Terms and Conditions</Link>
                        <Link to="/contact-us" className="text-link padding-link">Contact Us</Link>
                        </div>
                    </div>
                    <div id="w-node-_3ef1e698-8b26-b1bf-b940-ab0d719fd257-719fd24c" className="footer-right-content">
                        <div>Follow Us:</div>
                        <a href="https://www.facebook.com/Servicesground/" target="_blank" className="w-inline-block">
                            <img src={facebook} loading="lazy" alt="linked in logo" className="linked-in-icon" />
                        </a>
                        <a href="https://www.youtube.com/channel/UCv5bJdffGXx8GL2VUd43uQQ" target="_blank" className="w-inline-block">
                            <img src={Youtube_black} loading="lazy" alt="linked in logo" className="linked-in-icon" />
                        </a>
                        <a href="https://twitter.com/servicesground?s=09" target="_blank" className="w-inline-block">
                            <img src={twitter_logo} loading="lazy" alt="linked in logo" className="linked-in-icon" />
                        </a>
                        <a href="https://www.linkedin.com/company/servicesground/" target="_blank" className="w-inline-block">
                            <img src={Linkedin_logo} loading="lazy" alt="linked in logo" className="linked-in-icon" />
                        </a>
                        <a href="https://www.instagram.com/servicesground/" target="_blank" className="w-inline-block">
                            <img src={Instagram} loading="lazy" alt="linked in logo" className="linked-in-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </footer>
  )
}
