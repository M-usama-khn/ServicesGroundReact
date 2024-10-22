import React from 'react';
import { Link } from "react-router-dom";
import{homeherosection , teamherosection , aboutherosection , ourworkherosection, careersherosection ,
     frontendherosection , digitalherosection , mobile_app_herosection , email_marketing_herosection , quality_herosection
    , seo_herosection , social_media_herosection , ui_herosection 
    } from '../constants';

import{heroCardMidQaEngineer, heroCardSrBackendDeveloper, heroCardSrDataEngineer, heroCardsrFullStackDeveloper, devlaneTeamExtensionMilestone ,
    Content_Production_Specialist,
    Digital_Marketing_Specialist,
    Sr_Back_End_Developer,
    Sr_Front_End_Developer,
    Sr_Graphic_Designer,
    Sr_QA_Engineer,
    
    Digital_Marketing,
    email_marketing,
    mobile_app,
    Quality_Assurance,
    SEO,
    Social_Media,
    User_interface,
    web_development,
    about_us,
    QA_hero
} from '../assets';
import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: Content_Production_Specialist },
  { url: Digital_Marketing_Specialist },
  { url: Sr_Back_End_Developer },
  { url: Sr_Front_End_Developer },
  { url: Sr_Graphic_Designer },
  { url: Sr_QA_Engineer },
];
const Herosection = (props) => {
    const {ref, inView} = useInView({
        threshold: 0
});
    const animation = useAnimation();
    const animation2 = useAnimation();
     useEffect(() =>{
     if(inView){
        animation.start({
            x: 0,
            transition:{
                type: 'spring', duration: 2 
                
            }
        })
        animation2.start({
            x: 0,
            transition:{
                type: 'spring', duration: 2 
                
            }
        })
     }
     if(!inView){
        animation.start({x: '-100vw'})
        animation2.start({x: '+100vw'})
     }

     } , [inView]


     )
    

    return (
        <>
     
<div className="section-header" style={{overflow : "hidden"}}>
                    <div ref = {ref} className="page-padding">
                        <div className="container-large">
                            <div className="padding-vertical_section">
                                <div className="w-layout-grid microsite_hero_layout">
                                    <motion.div id="w-node-_7bc050f0-2527-592f-1f19-468196510d7a-6774a0b7" data-w-id="7bc050f0-2527-592f-1f19-468196510d7a" className="header-content"
                                
                                    animate={animation} 
                                    >
                                        <h1 data-w-id="9de980ff-7c97-834e-9e35-df0c496cdfd2" 
                                        style={{fontSize: props.page == "aboutherosection" ? "3rem" : ""}}
                                        > 
                                        {props.page == "homeherosection"  ? homeherosection[0].title 
                                        : 
                                        props.page == "teamherosection" ? teamherosection[0].title
                                        :
                                        props.page == "aboutherosection" ? `${aboutherosection[0].main_title}`
                                        :
                                        props.page == "ourworkherosection" ? `${ourworkherosection[0].main_title}`
                                        :
                                        props.page == "careersherosection" ? `${careersherosection[0].main_title}`
                                        : 
                                        props.page == "frontendherosection" ? `${frontendherosection[0].main_title}`
                                        :
                                        props.page == "digitalherosection" ? `${digitalherosection[0].title}`
                                       :
                                     
                                       props.page == "app" ? `${mobile_app_herosection[0].title}`
                                       :
                                       props.page == "testing" ? `${quality_herosection[0].title}`
                                       :
                                       props.page == "email" ? `${email_marketing_herosection[0].title}`
                                       :
                                       props.page == "seo" ? `${seo_herosection[0].title}`
                                       :
                                       props.page == "uiux" ? `${ui_herosection[0].title}`
                                       :
                                       props.page == "media" ? `${social_media_herosection[0].title}`
                                       :
                                       ""
                                        }</h1>
                                       <div className="margin-top margin-medium">
                                            <p data-w-id="c920086e-676a-2bad-409a-336a1d4a7130" className="text-size-large text-color-light">
                                             {props.page == "homeherosection"  ? homeherosection[0].description 
                                             :
                                              props.page == "teamherosection" ? teamherosection[0].description 
                                              :
                                              props.page == "aboutherosection" ? `${aboutherosection[0].description1}   ${aboutherosection[0].description2} ` 
                                              :
                                              props.page == "ourworkherosection" ? `${ourworkherosection[0].description}`
                                              :
                                              props.page == "careersherosection" ? `${careersherosection[0].description}`
                                              :
                                              props.page == "frontendherosection" ? `${frontendherosection[0].description}`
                                              :
                                      
                                              props.page == "digitalherosection" ? `${digitalherosection[0].description}`
                                              :
                                              
                                       props.page == "app" ? `${mobile_app_herosection[0].description}`
                                       :
                                       props.page == "testing" ? `${quality_herosection[0].description}`
                                       :
                                       props.page == "email" ? `${email_marketing_herosection[0].description}`
                                       :
                                       props.page == "seo" ? `${seo_herosection[0].description}`
                                       :
                                       props.page == "uiux" ? `${ui_herosection[0].description}`
                                       :
                                       props.page == "media" ? `${social_media_herosection[0].description}`
                                       :
                                              ""}
                                       

                                            </p>
                                        </div>
                                        <div className="margin-top margin-medium">
                                            <Link to="/book-an-appointment" className="button w-button"> 
                                        {props.page == "homeherosection"  ? homeherosection[0].btntxt 
                                        :
                                        props.page == "ourworkherosection" ? `${ourworkherosection[0].btntxt}`
                                        :
                                        props.page == "teamherosection" ? `${teamherosection[0].btntxt}`
                                        :
                                        props.page == "aboutherosection" ? `${aboutherosection[0].btntxt}` 
                                        :
                                        props.page == "careersherosection" ? `${careersherosection[0].btntxt1}`
                                        :
                                        props.page == "frontendherosection" ? `${frontendherosection[0].btntxt}`
                                        :
                                        props.page == "digitalherosection" ? `${digitalherosection[0].btntxt}`
                                        :
                                        props.page == "app" ? `${mobile_app_herosection[0].btntxt}`
                                        :
                                        props.page == "testing" ? `${quality_herosection[0].btntxt}`
                                        :
                                        props.page == "email" ? `${email_marketing_herosection[0].btntxt}`
                                        :
                                        props.page == "seo" ? `${seo_herosection[0].btntxt}`
                                        :
                                        props.page == "uiux" ? `${ui_herosection[0].btntxt}`
                                        :
                                        props.page == "media" ? `${social_media_herosection[0].btntxt}`
                                        :
                                        ""
                                        
                                        }
                                        
                                        
                                        </Link></div>
                                    </motion.div>

                                    {props.page == "homeherosection"  ? 
                                    
                                    <motion.div  animate={animation2} data-w-id="3556271b-a802-3558-1533-4158e5035bc9" className="header-image-wrapper is-mobile-hidden">
                                         <div className= "slider-bg">
                                            <SimpleImageSlider
                                                width={322}
                                                height={432}
                                                images={images}
                                              
                                                autoPlay={true}
                                                autoPlayDelay ={2.0}
                                            />
                                            </div>
                                   
                                    </motion.div>
                         
                                      
                                    : 
                                    props.page == "teamherosection"  ?
                                    <motion.div animate={animation2} id="w-node-b063588d-bb51-2ae5-6b51-302fc656c52a-6174a0dd" data-w-id="b063588d-bb51-2ae5-6b51-302fc656c52a" style={{opacity: "1"}} className="about_header-image-wrapper">
                                    <img src={devlaneTeamExtensionMilestone} loading="lazy" alt="A project management timeline with a milestone achieved"/>
                                  
                                </motion.div>
                                :
                                props.page == "aboutherosection"  ?
                                <motion.div animate={animation2} id="w-node-_15ac00af-d13f-be97-fb32-d447e350168d-4c74a0c8" className="about_header-image-wrapper">
                                <img src={about_us} loading="lazy" alt="Illustration of planet Earth focusing in the americas showing Devlane&#x27;s brand logo symbol located in Uruguay, South America expanding teams acorss North America."
                                />
                            </motion.div>
                                :
                                props.page == "ourworkherosection" ? 

                                <motion.div animate={animation2}id="w-node-_3556271b-a802-3558-1533-4158e5035bc9-4574a0d7" data-w-id="3556271b-a802-3558-1533-4158e5035bc9" className="about_header-image-wrapper">
                                <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/623de4d1810f5c0980ea0b99_our-work-hero-temp.svg" loading="lazy" alt="" />
                            </motion.div>

                                :
                                props.page == "careersherosection" ? 

                                <motion.div animate={animation2} id="w-node-_1bc6309d-fc35-6aef-1718-cf2831d1e849-5274a0cd" data-w-id="1bc6309d-fc35-6aef-1718-cf2831d1e849"  className="about_header-image-wrapper">
                                <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/617080de5110241f30b92df6_flatten2.svg" loading="lazy" alt="A mountain showing steps towards the top where you see a flag with Devlane&#x27;s logo on it" />
                            </motion.div>
                            :
                            props.page == "frontendherosection" ?
                            <motion.div animate={animation2}id="w-node-_3556271b-a802-3558-1533-4158e5035bc9-e874a0d5" data-w-id="3556271b-a802-3558-1533-4158e5035bc9"  className="about_header-image-wrapper">
                            <img src={web_development} loading="lazy" alt="An illustration showin 3 devices, one cellphone, one tablet and one Macbook. Inside: a responsive app. Under the hood code is shown."
                            />
                        </motion.div>
                                :
                                props.page == "testing" ? 
                                <motion.div animate={animation2} id="w-node-_3556271b-a802-3558-1533-4158e5035bc9-5a74a0c9" data-w-id="3556271b-a802-3558-1533-4158e5035bc9" className="about_header-image-wrapper">
                                <img src={QA_hero} loading="lazy" alt="Illustration of a server rack" />
                                </motion.div>
                                :
                                props.page == "app" ? 
                                <motion.div animate={animation2} id="w-node-_3556271b-a802-3558-1533-4158e5035bc9-3774a0db" data-w-id="3556271b-a802-3558-1533-4158e5035bc9"  className="about_header-image-wrapper">
                                <img src={mobile_app} loading="lazy" alt="A looking glass inspecting different devices and returning checked results." />
                                </motion.div>
                                :
                                props.page == "email" ? 
                                <motion.div animate={animation2} id="w-node-_3556271b-a802-3558-1533-4158e5035bc9-c574a0cf" data-w-id="3556271b-a802-3558-1533-4158e5035bc9" className="about_header-image-wrapper">
                                <img src={email_marketing} loading="lazy" alt="An illustration of an area graph with data points" />
                            </motion.div>

                                :  
                                props.page == "digitalherosection" ?  
                                <motion.div animate={animation2} id="w-node-_3556271b-a802-3558-1533-4158e5035bc9-c574a0cf" data-w-id="3556271b-a802-3558-1533-4158e5035bc9" className="about_header-image-wrapper">
                                <img src={Digital_Marketing} loading="lazy" alt="An illustration of an area graph with data points" />
                            </motion.div>
                            :
                            props.page == "seo" ?  
                            <motion.div animate={animation2} id="w-node-_3556271b-a802-3558-1533-4158e5035bc9-c574a0cf" data-w-id="3556271b-a802-3558-1533-4158e5035bc9" className="about_header-image-wrapper">
                            <img src={SEO} loading="lazy" alt="An illustration of an area graph with data points" />
                        </motion.div>
                        :
                        props.page == "media" ?  
                        <motion.div animate={animation2} id="w-node-_3556271b-a802-3558-1533-4158e5035bc9-c574a0cf" data-w-id="3556271b-a802-3558-1533-4158e5035bc9" className="about_header-image-wrapper">
                        <img src={Social_Media} loading="lazy" alt="An illustration of an area graph with data points" />
                    </motion.div>
                        :
                        props.page == "uiux" ?  
                        <motion.div animate={animation2} id="w-node-_3556271b-a802-3558-1533-4158e5035bc9-c574a0cf" data-w-id="3556271b-a802-3558-1533-4158e5035bc9" className="about_header-image-wrapper">
                        <img src={User_interface} loading="lazy" alt="An illustration of an area graph with data points" />
                    </motion.div>
                        :
                     
                               
                                ""
                                }
                                    
                               
                               
                               
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>
     )
    }
    
    export default Herosection