import React from 'react'
import MetaTags from 'react-meta-tags';
import {Helmet} from "react-helmet";

const Metatags = (props) => {
   
  return (

    <div>
    <Helmet>
     {/* <meta name="title" content= {
      props.page == "homeherosection" ? "Services Ground | Software Development and Consulting Company" 
      :
      props.page == "aboutherosection" ? "About Us | Services Ground" 
      :
      props.page == "frontendherosection" ? "Web Development Services | Services Ground" 
      :
      props.page == "digitalherosection" ? "Digital Marketing Services | Services Ground" 
      :
      props.page == "app" ? "Mobile APP Development Services | Services Ground"
      :
      props.page == "testing" ? "Quality Assurance Services | Services Ground" 
      :
      props.page == "email" ? "Email Marketing Automation Services | Services Ground" 
      :
      props.page == "seo" ? "SEO Services | Services Ground" 
      :
      props.page == "uiux" ? "UI/UX Design Services | Services Ground"
      :
      props.page == "media" ? "Social Media Marketing Services | Services Ground"
      : 
      props.page == "privacy" ? "Privacy Policy | Services Ground"
      :
      props.page == "terms" ? "Terms And Conditions | Services Ground"
      :
      props.page == "contact" ? "Get In Touch with Services Ground"
      :
      props.page == "appointment" ? "Book an Appointment with Services Ground"
      :
       
      ""} />
    
    
    
    <meta name="description" content=
     {
      props.page == "homeherosection" ? "Looking for a trusted name in web and mobile app design and development? Look no further than Services Ground. book your free consultation today!." 
      :
      props.page == "aboutherosection" ? "Services Ground is a trusted name in IT solutions provisioning and software development, with more than a decade of experience delivering high-quality services within established deadlines and cost parameters."
     :
     props.page == "frontendherosection" ? "Services Ground’s Web Development Services enable you to get your new website up and running in a timely, reliable, and cost-effective manner on any cloud infrastructure of your choice." 
     :
     props.page == "digitalherosection" ? "Avail our digital marketing automation services to streamline your promotional efforts, boost lead generation and become a top-of-mind brand" 
     :
     props.page == "app" ? "Services Ground specializes in the development of cross-platform mobile apps that can run seamlessly on any device, be it smartphones, tablets, or both."
     :
     props.page == "testing" ? "Services Ground provides professional QA and software testing services for online, mobile, and cloud applications to ensure that they meet the highest possible standards of quality and usability." 
     :
     props.page == "email" ? "Secure higher conversion rates by segmenting, targeting, and personalizing your messages more effectively than ever through our email marketing automation solutions." 
     :
     props.page == "seo" ? "As one of the leading SEO agencies, we've been trusted by hundreds of companies worldwide to get to the top of the search engine results pages (SERPs), gain new customers, and create industry authority." 
     :
     props.page == "uiux" ? "Uplift your brand with our UI/UX design services that are platform-specific and responsive for usage across a wide range of devices."
     :
     props.page == "media" ? "Choose Services Ground as your preferred social media management company to announce yourself in style on Facebook, Twitter, Instagram, Youtube, Linkedin, TikTok, etc."
     :
     props.page == "contact" ? "Ask any question. We will be happy to answer any of your queries."
     :
     props.page == "appointment" ? "Please join us for a brief discussion so we may get acquainted with your organization, understand your requirements and/or answer any questions you might have."
     
     :""} />
    
    
    
    
    
    <meta property="og:description" content= {
        props.page == "homeherosection" ? "Looking for a trusted name in web and mobile app design and development? Look no further than Services Ground. book your free consultation today!." 
        :
      props.page == "aboutherosection" ? "Services Ground is a trusted name in IT solutions provisioning and software development, with more than a decade of experience delivering high-quality services within established deadlines and cost parameters." 
       :
       props.page == "frontendherosection" ? "Services Ground’s Web Development Services enable you to get your new website up and running in a timely, reliable, and cost-effective manner on any cloud infrastructure of your choice." 
       :
       props.page == "digitalherosection" ? "Avail our digital marketing automation services to streamline your promotional efforts, boost lead generation and become a top-of-mind brand" 
       :
       props.page == "app" ? "Services Ground specializes in the development of cross-platform mobile apps that can run seamlessly on any device, be it smartphones, tablets, or both."
       :
       props.page == "testing" ? "Services Ground provides professional QA and software testing services for online, mobile, and cloud applications to ensure that they meet the highest possible standards of quality and usability." 
       :
       props.page == "email" ? "Secure higher conversion rates by segmenting, targeting, and personalizing your messages more effectively than ever through our email marketing automation solutions." 
       :
       props.page == "seo" ? "As one of the leading SEO agencies, we've been trusted by hundreds of companies worldwide to get to the top of the search engine results pages (SERPs), gain new customers, and create industry authority." 
       :
       props.page == "uiux" ? "Uplift your brand with our UI/UX design services that are platform-specific and responsive for usage across a wide range of devices."
       :
       props.page == "media" ?"Choose Services Ground as your preferred social media management company to announce yourself in style on Facebook, Twitter, Instagram, Youtube, Linkedin, TikTok, etc."
       :
       props.page == "contact" ? "Ask any question. We will be happy to answer any of your queries."
       :
       props.page == "appointment" ? "Please join us for a brief discussion so we may get acquainted with your organization, understand your requirements and/or answer any questions you might have."

    : ""} />
    
    <meta property="og:url" content=
    {
      props.page == "homeherosection" ? "https://servicesground.com/" 
      :
      props.page == "aboutherosection" ? "https://servicesground.com/about"
    :
    props.page == "frontendherosection" ? "https://servicesground.com/experties/web-development" 
    :
    props.page == "digitalherosection" ? "https://servicesground.com/experties/digital-marketing" 
    :
    props.page == "app" ? "https://servicesground.com/experties/mobile-app-development"
    :
    props.page == "testing" ? "https://servicesground.com/experties/software-testing" 
    :
    props.page == "email" ? "https://servicesground.com/experties/email-marketing" 
    :
    props.page == "seo" ? "https://servicesground.com/experties/seo" 
    :
    props.page == "uiux" ? "https://servicesground.com/experties/ui-ux"
    :
    props.page == "media" ?"https://servicesground.com/experties/social-media"
   
    : 
    props.page == "privacy" ? "https://servicesground.com/privacy-policy"
    :
    props.page == "terms" ? "https://servicesground.com/terms-of-use"
    :
    props.page == "contact" ? "https://servicesground.com/contact-us"
    :
    props.page == "appointment" ? "https://servicesground.com/book-an-appointment"
   : "" }/>
    
    
    
    <meta property="og:title" content=
    {
      props.page == "homeherosection" ? "Services Ground | Software Development and Consulting Company" 
      :
      props.page == "aboutherosection" ? "About Us | Services Ground" 
    :
    props.page == "frontendherosection" ? "Web Development Services | Services Ground" 
    :
    props.page == "digitalherosection" ? "Digital Marketing Services | Services Ground" 
    :
    props.page == "app" ? "Mobile APP Development Services | Services Ground"
    :
    props.page == "testing" ? "Quality Assurance Services | Services Ground" 
    :
    props.page == "email" ? "Email Marketing Automation Services | Services Ground" 
    :
    props.page == "seo" ? "SEO Services | Services Ground" 
    :
    props.page == "uiux" ? "UI/UX Design Services | Services Ground"
    :
    props.page == "media" ?"Social Media Marketing Services | Services Ground"
   
    : 
    props.page == "privacy" ? "Privacy Policy | Services Ground"
    :
    props.page == "terms" ? "Terms And Conditions | Services Ground"
    :
    props.page == "contact" ? "Get In Touch with Services Ground"
    :
    props.page == "appointment" ? "Book an Appointment with Services Ground"
   : ""} />
    
    <meta name="twitter:description" content=
    {
      props.page == "homeherosection" ? "Looking for a trusted name in web and mobile app design and development? Look no further than Services Ground. book your free consultation today!." 
      :
      props.page == "aboutherosection" ? "Services Ground is a trusted name in IT solutions provisioning and software development, with more than a decade of experience delivering high-quality services within established deadlines and cost parameters."
    :
    props.page == "frontendherosection" ? "Services Ground’s Web Development Services enable you to get your new website up and running in a timely, reliable, and cost-effective manner on any cloud infrastructure of your choice." 
    :
    props.page == "digitalherosection" ? "Avail our digital marketing automation services to streamline your promotional efforts, boost lead generation and become a top-of-mind brand" 
    :
    props.page == "app" ? "Services Ground specializes in the development of cross-platform mobile apps that can run seamlessly on any device, be it smartphones, tablets, or both."
    :
    props.page == "testing" ? "Services Ground provides professional QA and software testing services for online, mobile, and cloud applications to ensure that they meet the highest possible standards of quality and usability." 
    :
    props.page == "email" ? "Secure higher conversion rates by segmenting, targeting, and personalizing your messages more effectively than ever through our email marketing automation solutions." 
    :
    props.page == "seo" ? "As one of the leading SEO agencies, we've been trusted by hundreds of companies worldwide to get to the top of the search engine results pages (SERPs), gain new customers, and create industry authority." 
    :
    props.page == "uiux" ? "Uplift your brand with our UI/UX design services that are platform-specific and responsive for usage across a wide range of devices."
    :
    props.page == "media" ?"Choose Services Ground as your preferred social media management company to announce yourself in style on Facebook, Twitter, Instagram, Youtube, Linkedin, TikTok, etc."
    :
    props.page == "contact" ? "Ask any question. We will be happy to answer any of your queries."
    :
    props.page == "appointment" ? "Please join us for a brief discussion so we may get acquainted with your organization, understand your requirements and/or answer any questions you might have."
   : " " } />
    <meta name="twitter:title" content={
        props.page == "homeherosection" ? "Services Ground | Software Development and Consulting Company" 
        :
      props.page == "aboutherosection" ? "About Us | Services Ground"
      :
      props.page == "frontendherosection" ? "Web Development Services | Services Ground" 
      :
      props.page == "digitalherosection" ? "Digital Marketing Services | Services Ground" 
      :
      props.page == "app" ? "Mobile APP Development Services | Services Ground"
      :
      props.page == "testing" ? "Quality Assurance Services | Services Ground" 
      :
      props.page == "email" ? "Email Marketing Automation Services | Services Ground" 
      :
      props.page == "seo" ? "SEO Services | Services Ground" 
      :
      props.page == "uiux" ? "UI/UX Design Services | Services Ground"
      :
      props.page == "media" ?"Social Media Marketing Services | Services Ground"
      : 
      props.page == "privacy" ? "Privacy Policy | Services Ground"
      :
      props.page == "terms" ? "Terms And Conditions | Services Ground"
      :
      props.page == "contact" ? "Get In Touch with Services Ground"
      :
      props.page == "appointment" ? "Book an Appointment with Services Ground"
     : " " } />
    <meta name="original-source" content=
    {
      props.page == "homeherosection" ? "https://servicesground.com/" 
      :
      props.page == "aboutherosection" ?"https://servicesground.com/about" 
    :
    props.page == "frontendherosection" ? "https://servicesground.com/experties/web-development" 
    :
    props.page == "digitalherosection" ? "https://servicesground.com/experties/digital-marketing" 
    :
    props.page == "app" ? "https://servicesground.com/experties/mobile-app-development"
    :
    props.page == "testing" ? "https://servicesground.com/experties/software-testing" 
    :
    props.page == "email" ? "https://servicesground.com/experties/email-marketing" 
    :
    props.page == "seo" ? "https://servicesground.com/experties/seo" 
    :
    props.page == "uiux" ? "https://servicesground.com/experties/ui-ux"
    :
    props.page == "media" ?"https://servicesground.com/experties/social-media"
   
    : 
    props.page == "privacy" ? "https://servicesground.com/privacy-policy"
    :
    props.page == "terms" ? "https://servicesground.com/terms-of-use"
    :
    props.page == "contact" ? "https://servicesground.com/contact-us"
    :
    props.page == "appointment" ? "https://servicesground.com/book-an-appointment"
   : "" } />
    <link rel="canonical" href=
    {
      props.page == "homeherosection" ? "https://servicesground.com/" 
      :
      props.page == "aboutherosection" ?"https://servicesground.com/about" 
    :
    props.page == "frontendherosection" ? "https://servicesground.com/experties/web-development" 
    :
    props.page == "digitalherosection" ? "https://servicesground.com/experties/digital-marketing" 
    :
    props.page == "app" ? "https://servicesground.com/experties/mobile-app-development"
    :
    props.page == "testing" ? "https://servicesground.com/experties/software-testing" 
    :
    props.page == "email" ? "https://servicesground.com/experties/email-marketing" 
    :
    props.page == "seo" ? "https://servicesground.com/experties/seo"
    :
    props.page == "uiux" ? "https://servicesground.com/experties/ui-ux"
    :
    props.page == "media" ?"https://servicesground.com/experties/social-media"
    
    : 
    props.page == "privacy" ? "https://servicesground.com/privacy-policy"
    :
    props.page == "terms" ? "https://servicesground.com/terms-of-use"
    :
    props.page == "contact" ? "https://servicesground.com/contact-us"
    :
    props.page == "appointment" ? "https://servicesground.com/book-an-appointment"
    : "" }/> */}
    <title> {
      props.page == "homeherosection" ? "Services Ground | Software Development and Consulting Company" 
      :
    props.page == "aboutherosection" ? "About Us | Services Ground" 
      :
      props.page == "frontendherosection" ? "Web Development Services | Services Ground" 
      :
      props.page == "digitalherosection" ? "Digital Marketing Services | Services Ground" 
      :
      props.page == "app" ? "Mobile APP Development Services | Services Ground"
      :
      props.page == "testing" ? "Quality Assurance Services | Services Ground" 
      :
      props.page == "email" ? "Email Marketing Automation Services | Services Ground" 
      :
      props.page == "seo" ? "SEO Services | Services Ground" 
      :
      props.page == "uiux" ? "UI/UX Design Services | Services Ground"
      :
      props.page == "media" ? "Social Media Marketing Services | Services Ground"
     
      : 
      props.page == "privacy" ? "Privacy Policy | Services Ground"
      :
      props.page == "terms" ? "Terms And Conditions | Services Ground"
      :
      props.page == "contact" ? "Get In Touch with Services Ground"
      :
      props.page == "appointment" ? "Book an Appointment with Services Ground"
      : 
       ""
    }</title>


   
   
    </Helmet>
  

    </div>
  )
}





export default Metatags
