import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {Navbar , Herosection , Clients , Footer , Differentiator , Recognition , Additionalperks , Industries ,
         Partnerships , Latestposts , Contact , Teamworkflow , Teamengineers , Aboutbreifstory , 
         Aboutteammanagment , Aboutourvalues , Aboutpartnership , Ourworksectionexpand , Careersslider ,
          Careersquestion , Careerstestimonial, Careersextraperk , Careersrefral , Resources , TeamReadytoteam , 
          Frontendextendteam , Frontendplatforms , FrontendTechnologies , Testingquality , Testingtype , ScrollToTop ,Bookappointment , Privacy , Terms , Metatags}
          from './components';
import './App.css'
import { Routes, Route } from "react-router-dom"
import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";
import MetaTags from 'react-meta-tags';
function App() {

  
  const homeherosection = "homeherosection";
  const teamherosection = "teamherosection";
  const aboutherosection = "aboutherosection";
  const ourworkherosection = "ourworkherosection";
  const careersherosection = "careersherosection"
  const frontendherosection = "frontendherosection"
  const email = "email"
  const uiux = "uiux"
  const seo = "seo"
  const app = "app"
  const testing  = "testing"
  const media = "media"
  const digitalherosection = "digitalherosection"
 
  return (
    <>
<Routes>
        <Route path="/" element={<>
        <ScrollToTop/>
        <Metatags page = {homeherosection}/>
        <Navbar/> 
        <Herosection page = {homeherosection}/> 
        <Clients/>
        <Industries page ={homeherosection}/>
        <Differentiator page ={homeherosection}/>
        {/* <Recognition/> */}
        <Additionalperks page ={homeherosection}/>
        <Partnerships />
        <Latestposts page ={homeherosection}/>
        <Contact  page ={homeherosection}/> 
        {/* <Testimonial page ={homeherosection}/> */}
        <Footer/>
        {/* <Slider/> */}
        </>
        } />

{/* <Route path="/team-extension" element={<> 
        <ScrollToTop/>
        <Metatags page = {teamherosection}/>
        <Navbar/> 
        <Herosection page = {teamherosection}/> 
        <Teamworkflow/>
        <Differentiator  page = {teamherosection}/>
        <Teamengineers page = {teamherosection}/>
        <Additionalperks page = {teamherosection}/>
        <Resources/>
        <TeamReadytoteam page = {teamherosection}/>
        <Partnerships />
        <Latestposts/>
        <Contact  page = {teamherosection}/> 
        <Footer/>
        </>}
         /> */}
<Route path="/about" element={<> 
        <ScrollToTop/>
        
        <Metatags page = {aboutherosection}/>
        <Navbar/> 
        <Herosection page = {aboutherosection}/>
        <Aboutbreifstory/>
        {/* <Aboutteammanagment/> */}
        <Aboutourvalues/>
        <Aboutpartnership/>
        {/* <Recognition/> */}
        <Contact/> 
        <Footer/>

        </>}
         />
{/* <Route path="/ourwork" element={<> 
         <Navbar/> 
         <ScrollToTop/>
         <Herosection page = {ourworkherosection}/>
         <Ourworksectionexpand/>
         <Contact/>
         <Footer/>
        </>}
         /> */}
      

      {/* <Route path="/carrers" element={<> 
        <Navbar/> 
        <ScrollToTop/>
        
        <Herosection page = {careersherosection}/>
        <Teamengineers page = {careersherosection}/>
        <Careersslider/>
        <Teamengineers/>
        <Differentiator page = {careersherosection}/>
        <Additionalperks page = {careersherosection}/>
        <Careersquestion/>
        <Careerstestimonial/>
        <Careersextraperk/>
        <Careersrefral/>
        <Footer/>
        </>}
         /> */}

         <Route path="/experties/web-development" element={<> 
        <ScrollToTop/>
        <Metatags page = {frontendherosection}/>
        <Navbar/> 
        <Herosection page = {frontendherosection}/>
        <Frontendextendteam page = {frontendherosection}/>
        <Additionalperks page = {frontendherosection}/>
        {/* <Frontendplatforms/> */}
        <FrontendTechnologies page = {frontendherosection}/>
        <TeamReadytoteam  page = {frontendherosection}/>
        <Partnerships />
        <Contact/>
        {/* <Testimonial/> */}
        <Footer/>
        </>}
         />



<Route path="/experties/quality-assurance" element={<> 
        <ScrollToTop/>
        <Metatags page = {testing}/>
        <Navbar/>
        <Herosection page = {testing}/>
        <Frontendextendteam  page = {testing}/>
        <Additionalperks page = {testing}/>
        <Testingquality/>
        {/* <Testingtype page ={testing}/> */}
        <TeamReadytoteam  page = {testing}/>
        <Partnerships/>
        <Contact/>
        <Footer/>
        </>}
         />

 { <Route path="/experties/software-testing" element={<> 
        <ScrollToTop/>
        <Metatags page = {testing}/>
        <Navbar/>
        <Herosection page = {testing}/>
        <Frontendextendteam  page = {testing}/>
        <Additionalperks page = {testing}/>
        <Testingquality/>
        <TeamReadytoteam  page = {testing}/>
        <Partnerships/>
        <Contact/>
        <Footer/>
        </>}
         /> }


       <Route path="/experties/mobile-app-development" element={<> 
        <ScrollToTop/> 
        
        <Metatags page = {app}/>    
        <Navbar/>
        <Herosection page = {app}/>
        <Frontendextendteam  page = {app}/>
        <Additionalperks page = {app}/>
        <Testingtype page = {app}/>
        {/* <FrontendTechnologies  page = {app}/> */}
        <TeamReadytoteam page = {app}/>
        <Partnerships/>
        <Contact/>
        <Footer/>
        </>}
         />
         
          <Route path="/experties/email-marketing" element={<> 
        <ScrollToTop/>
        <Metatags page = {email}/>
        <Navbar/>
        <Herosection page = {email}/>
        <Frontendextendteam  page = {email}/>
        <Additionalperks page = {email}/>
        {/* <Testingquality page = {email}/> */}
        <Testingtype  page = {email}/>
        <TeamReadytoteam page = {email}/>
        <Partnerships/>
        <Contact/>

        <Footer/>
        </>}
         />
            <Route path="/experties/digital-marketing" element={<> 
        <ScrollToTop/>
        <Metatags page = {digitalherosection}/>
        <Navbar/>
        <Herosection page = {digitalherosection}/>
        <Frontendextendteam page = {digitalherosection}/>
        <Additionalperks page = {digitalherosection}/>
        <Testingtype page = {digitalherosection}/>
        {/* <FrontendTechnologies page = {digitalherosection}/> */}
        <TeamReadytoteam  page = {digitalherosection}/>
        <Partnerships/>
        <Contact/>
        <Footer/>
        </>}
         />

<Route path="/experties/seo" element={<> 
        <ScrollToTop/>
        <Metatags page = {seo}/>
        <Navbar/>
        <Herosection page = {seo}/>
        <Frontendextendteam page = {seo}/>
        <Additionalperks page = {seo}/>
        <Testingtype page = {seo}/>
        {/* <FrontendTechnologies page = {seo}/> */}
        <TeamReadytoteam  page = {seo}/>
        <Partnerships/>
        <Contact/>
        <Footer/>
        </>}
         />
       
       <Route path="/experties/social-media" element={<> 
        <ScrollToTop/>
        <Metatags page = {media}/>
        <Navbar/>
        <Herosection page = {media}/>
        <Frontendextendteam page = {media}/>
        <Additionalperks page = {media}/>
        <Testingtype page = {media}/>
        {/* <FrontendTechnologies page = {media}/> */}
        <TeamReadytoteam  page = {media}/>
        <Partnerships/>
        <Contact/>
        <Footer/>
        </>}
         />

<Route path="/experties/ui-ux" element={<> 
        <ScrollToTop/>
        <Metatags page = {uiux}/>
        <Navbar/>
        <Herosection page = {uiux}/>
        <Frontendextendteam page = {uiux}/>
        <Additionalperks page = {uiux}/>
        <Testingtype page = {uiux}/>
        {/* <FrontendTechnologies page = {uiux}/> */}
        <TeamReadytoteam  page = {uiux}/>
        <Partnerships/>
        <Contact/>
        <Footer/>
        </>}
         />
       
            <Route path="/privacy-policy" element={<> 
        <ScrollToTop/>
        <Metatags page = "privacy"/>
        <Navbar/>
     
        <Privacy/>
        <Footer/>
        </>}
         />

<Route path="/terms-and-conditions" element={<> 
        <ScrollToTop/>
        <Metatags page = "terms"/>
        <Navbar/>
     
        <Terms/>

        <Footer/>
        </>}
         />
          <Route path="/contact-us" element={<> 
            <ScrollToTop/>
            <Metatags page = "contact"/>
        <Navbar/>
     
        <Contact/>

        <Footer/>
        </>}
        
         />
           <Route path="/book-an-appointment" element={<> 
            <ScrollToTop/>
            <Metatags page = "appointment"/>
            <Navbar/>
            <Bookappointment/>
            
            <Footer/>
       </>}
       
        />
      </Routes>

</>
  )
}

export default App
