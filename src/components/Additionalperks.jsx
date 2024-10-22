import React from 'react';
import { additional , teamjourney , careerrecruitingtime , frontpartner  ,  mobile_app_deliver_services , email_marketing_deliver_services
, digital_services , quality_deliver_services , seo_deliver_services , social_media_services , ui_deliver_services
} from '../constants'
import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { usability_testing,
  responsive_testing,
  performance_testing,
  penetration_testing,
  functional_testing,
  automation_testing,
  enhancement_optimization_web,
quality_assurance_web,
support_web,

ui_ux_design_web,
web_development_project_planning_web,
website_development_web,
assistance_with_getting_your_app_mb,
business_needs_and_requirements_analysis_mb,
cross_platform_mobile_development_mb,
rigorous_quality_assurance_mb,
ux_testing_mb,
wire_framing_mb,

automation_testing_a,
functional_testing_a,
performance_testing_a,
responsive_testing_a,
penetration_testing_a,
usability_testing_a,

content_production_em,
email_optimization_em,
end_to_end_automation_em,
opt_in_list_creation_em,
performance_tracking_em,
template_designing_em,
content_generation_and_optimization_dg,
quality_link_building_dg,
seo_dg,

analyzing_competition_se,
building_high_quality_links_se,
content_creations_se,
optimizing_web_pages_se,
website_health_se,

audience_assessment,
conducting_a_competitor_analysis,
data_driven_paid_social_campaign_creation,
organic_social_campaign,
strategy_implementation,
tracking_analytics,

concept_outline_development,
ui_ux_wireframe_construction,
functional_ui_ux_creation,

adaptability_to_your_needs,
future_proof_technologies,
one_window_operations,

} from '../assets'
import Lottie from 'react-lottie';
import adaptability from '../icons/adaptability.json';
import future from '../icons/future.json';
import one_window from '../icons/one-window.json';
import content from '../icons/content_generation_and_optimization.json'
import quality from '../icons/quality_link_building.json'
import seo from '../icons/seo.json'
import template from '../icons/template_designing.json'
import content_pro from '../icons/content_production.json'
import performance from '../icons/performance_tracking.json'

import assistance from "../icons/assistance_with_getting_your_app.json"
import business from "../icons/business_needs_and_requirements_analysis.json"
import cross from "../icons/cross-platform_mobile_development.json"
import rigorous from "../icons/rigorous_quality_assurance.json"
import ux_testing from "../icons/ux_testing.json"

const Additionalperks = (props) => {
  const ux_testings = {
    loop: true,
    autoplay: true,
    animationData: ux_testing,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const rigorouss = {
    loop: true,
    autoplay: true,
    animationData: rigorous,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const crosss = {
    loop: true,
    autoplay: true,
    animationData: cross,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const businesss = {
    loop: true,
    autoplay: true,
    animationData: business,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const assistances = {
    loop: true,
    autoplay: true,
    animationData: assistance,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
    const performances = {
        loop: true,
        autoplay: true,
        animationData: performance,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const contnt = {
        loop: true,
        autoplay: true,
        animationData: content_pro,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const templates = {
        loop: true,
        autoplay: true,
        animationData: template,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const contents = {
        loop: true,
        autoplay: true,
        animationData: content,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const qualitys = {
        loop: true,
        autoplay: true,
        animationData: quality,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const seos = {
        loop: true,
        autoplay: true,
        animationData: seo,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: adaptability,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const futurea = {
        loop: true,
        autoplay: true,
        animationData: future,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const window = {
        loop: true,
        autoplay: true,
        animationData: one_window,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const {ref, inView} = useInView({
        threshold: 0.3
});
    const animation = useAnimation();
    const animation2 = useAnimation();
     useEffect(() =>{
     if(inView){
        animation.start({
            x: 0,
            transition:{
                type: 'spring', duration: 2 ,bounce: 0
                
            }
        })
        animation2.start({
            x: 0,
            transition:{
                type: 'spring', duration: 2 ,bounce: 0
        }})
     }
     if(!inView){
        animation.start({x: '-100vw'})
        animation2.start({x: '+100vw'})
     }

     } , [inView]


     )


    return (
        <section ref= {ref} id="section-aditional-perks"  className={"section-aditional-perks" }  style={{overflow : "hidden"}}>
            <div animate={animation} className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical_section">
                        <div className="w-layout-grid section-2col-1fr-05fr">
                            
                            <motion.div animate={animation} id="w-node-_0afbcbe2-6880-0b26-ca9c-1302035805cd-6774a0b7" className="w-layout-grid layout-why-devlane">
                                <div className="why-devlane-item">
                                <div
                                        className="icon-lottie-padding icon-lottie-padding-1"
                                        data-w-id="692e7e95-2fd3-c600-9e61-49ce7795328c"
                                        data-animation-type="lottie"
                                        data-src=""
                                        data-loop="1"
                                        data-direction="1"
                                        data-autoplay="1"
                                        data-is-ix2-target="0"
                                        data-renderer="svg"
                                        data-default-duration="3.4"
                                        data-duration="0"
                                    >
                                {/* <Lottie  options={
                                  props.page == "homeherosection" ? defaultOptions
                                
                                 :
                                 ""
                                }
                            
                                    width = "50%"
                                    height = "60%"
                                    
                                /> */}
                                        <img src=
                                        {  props.page == "frontendherosection" ?  web_development_project_planning_web
                                        :
                                        props.page == "app" ?  ux_testing_mb
                                        :
                                        props.page == "testing" ? performance_testing_a
                                        :
                                        props.page == "email" ? template_designing_em
                                        :
                                        props.page == "digitalherosection" ? content_generation_and_optimization_dg
                                        :
                                        props.page == "seo" ? analyzing_competition_se
                                        :
                                        props.page == "media" ? audience_assessment
                                        :
                                        props.page == "uiux" ? concept_outline_development
                                        :
                                        props.page == "homeherosection" ? adaptability_to_your_needs
                                        :
                                        ""
                                          }
                                         />
                                    </div>
                               
                               
                               
                                    <div className="why-devlane-item-text-container">
                                        <h3 className="text-color-light"><strong>{
                                   
                                   props.page == "homeherosection" ? `${additional[0].subheading1}`
                                   :
                                   props.page == "teamherosection" ? `${teamjourney[0].subheading1}`
                                   :
                                   props.page == "careersherosection" ? `${careerrecruitingtime[0].subheading1}`
                                   :
                                   props.page == "frontendherosection" ? `${frontpartner[0].subheading}`
                                  :
                                   props.page == "digitalherosection" ? `${digital_services[0].subheading1}`
                                   :
                                   props.page == "app" ? `${mobile_app_deliver_services[0].subheading1}`
                                   :
                                   props.page == "testing" ? `${quality_deliver_services[0].subheading1}`
                                   :
                                   props.page == "email" ? `${email_marketing_deliver_services[0].subheading1}`
                                   :
                                   props.page == "seo" ? `${seo_deliver_services[0].subheading1}`
                                   :
                                   props.page == "uiux" ? `${ui_deliver_services[0].subheading1}`
                                   :
                                   props.page == "media" ? `${social_media_services[0].subheading1}`
                                
                                   :
                                   ""
                                     }</strong></h3>
                                        
                                        
                                    </div>
                                </div>
                                <div className="margin-top margin-xsmall max-para">
                                            <p className="text-size-18px">{
                                                  props.page == "homeherosection" ? `${additional[0].subpragraph1}`
                                                  :
                                                  props.page == "teamherosection" ? `${teamjourney[0].subpragraph1}`
                                                  :
                                                  props.page == "careersherosection" ? `${careerrecruitingtime[0].subpragraph1}`
                                                  :
                                                  props.page == "frontendherosection" ? `${frontpartner[0].subpragraph}`
                                                  :
                                                  props.page == "digitalherosection" ? `${digital_services[0].subpragraph1}`
                                                  :
                                                  props.page == "app" ? `${mobile_app_deliver_services[0].subpragraph1}`
                                                  :
                                                  props.page == "testing" ? `${quality_deliver_services[0].subpragraph1}`
                                                  :
                                                  props.page == "email" ? `${email_marketing_deliver_services[0].subpragraph1}`
                                                  :
                                                  props.page == "seo" ? `${seo_deliver_services[0].subpragraph1}`
                                                  :
                                                  props.page == "uiux" ? `${ui_deliver_services[0].subpragraph1}`
                                                  :
                                                  props.page == "media" ? `${social_media_services[0].subpragraph1}`
                                               
                                                  :
                                                  ""
                                             
                                            
                                            }</p>
                                        </div>
                                <div className="why-devlane-item is-indented-2-level is-remove-indent">
                                    <div style={{margin: "0px 0px 0px 0px"}} 
                                        className="icon-lottie-padding icon-lottie-padding-2"
                                        data-w-id="692e7e95-2fd3-c600-9e61-49ce7795328c"
                                        data-animation-type="lottie"
                                        data-src=""
                                        data-loop="1"
                                        data-direction="1"
                                        data-autoplay="1"
                                        data-is-ix2-target="0"
                                        data-renderer="svg"
                                        data-default-duration="3.4"
                                        data-duration="0"
                                    >
                                          {/* <Lottie  options={
                                  props.page == "homeherosection" ? window
                                  :
                                 ""
                                
                                }
                                    width = "50%"
                                    height = "60%"
                                    
                                /> */}
                                 <img src=
                                        {  props.page == "frontendherosection" ?  ui_ux_design_web
                                        :
                                        props.page == "app" ?  wire_framing_mb
                                        :
                                        props.page == "testing" ? usability_testing_a
                                        :
                                        props.page == "email" ? content_production_em
                                        :
                                        props.page == "digitalherosection" ? quality_link_building_dg
                                        :
                                        props.page == "seo" ? optimizing_web_pages_se
                                        :
                                        props.page == "media" ? strategy_implementation
                                        :
                                        props.page == "uiux" ? ui_ux_wireframe_construction
                                        :
                                        props.page == "homeherosection" ? one_window_operations
                                        :
                                        ""
                                          }
                                         />
                                    </div>
                                    <div className="why-devlane-item-text-container">
                                        <h3 className="text-color-light"><strong>{

                                                  props.page == "homeherosection" ? `${additional[0].subheading2}`
                                                  :
                                                  props.page == "teamherosection" ? `${teamjourney[0].subheading2}`
                                                  :
                                                  props.page == "careersherosection" ? `${careerrecruitingtime[0].subheading2}`
                                                  :
                                                  props.page == "frontendherosection" ? `${frontpartner[0].subheading1}`
                                                  :
                                                  props.page == "digitalherosection" ? `${digital_services[0].subheading2}`
                                                  :
                                                  props.page == "app" ? `${mobile_app_deliver_services[0].subheading2}`
                                                  :
                                                  props.page == "testing" ? `${quality_deliver_services[0].subheading2}`
                                                  :
                                                  props.page == "email" ? `${email_marketing_deliver_services[0].subheading2}`
                                                  :
                                                  props.page == "seo" ? `${seo_deliver_services[0].subheading2}`
                                                  :
                                                  props.page == "uiux" ? `${ui_deliver_services[0].subheading2}`
                                                  :
                                                  props.page == "media" ? `${social_media_services[0].subheading2}`
                                               
                                                  :
                                                
                                                  ""

                                        
                                        
                                        }</strong></h3>
                                       
                                    </div>
                                </div>
                                <div className="margin-top margin-xsmall max-para tow">
                                            <p className="text-size-18px">{
                                                     props.page == "homeherosection" ? `${additional[0].subpragraph2}`
                                                     :
                                                     props.page == "teamherosection" ? `${teamjourney[0].subpragraph2}`
                                                     :
                                                     props.page == "careersherosection" ? `${careerrecruitingtime[0].subpragraph2}`
                                                     :
                                                     props.page == "frontendherosection" ? `${frontpartner[0].subpragraph2}`
                                                     :
                                                     props.page == "digitalherosection" ? `${digital_services[0].subpragraph2}`
                                                     :
                                                     props.page == "app" ? `${mobile_app_deliver_services[0].subpragraph2}`
                                                     :
                                                     props.page == "testing" ? `${quality_deliver_services[0].subpragraph2}`
                                                     :
                                                     props.page == "email" ? `${email_marketing_deliver_services[0].subpragraph2}`
                                                     :
                                                     props.page == "seo" ? `${seo_deliver_services[0].subpragraph2}`
                                                     :
                                                     props.page == "uiux" ? `${ui_deliver_services[0].subpragraph2}`
                                                     :
                                                     props.page == "media" ? `${social_media_services[0].subpragraph2}`
                                                  
                                                     :
                                                     ""

                                            
                                            
                                            }</p>
                                        </div>
                                <div className="why-devlane-item is-remove-indent">
                                    <div
                                        className="icon-lottie-padding icon-lottie-padding-3"
                                        data-w-id="67847add-3bc8-83f6-0afd-c1de2cf34da7"
                                        data-animation-type="lottie"
                                        data-src=""
                                        data-loop="1"
                                        data-direction="1"
                                        data-autoplay="1"
                                        data-is-ix2-target="0"
                                        data-renderer="svg"
                                        data-default-duration="1.3888888888888888"
                                        data-duration="0"
                                    >
                                          {/* <Lottie  options={
                                  props.page == "homeherosection" ? futurea
                                
                                  :
                                  
                                  ""}
                                      /> */}
                                                                 
                                                                 <img src=
                                        {  props.page == "frontendherosection" ?  website_development_web
                                        :
                                        
                                        props.page == "app" ?  cross_platform_mobile_development_mb
                                        :
                                        props.page == "testing" ? automation_testing_a
                                        :
                                        props.page == "email" ? performance_tracking_em
                                        :
                                        props.page == "digitalherosection" ? seo_dg
                                        :
                                        props.page == "seo" ? building_high_quality_links_se
                                        :
                                        props.page == "media" ? organic_social_campaign
                                        :
                                        props.page == "uiux" ? functional_ui_ux_creation
                                        :
                                        props.page == "homeherosection" ? future_proof_technologies
                                        :
                                        ""
                                          }
                                         />
                                    </div>
                                    <div className="why-devlane-item-text-container">
                                        <h3 className="text-color-light"><strong>{
                                                   props.page == "homeherosection" ? `${additional[0].subheading3}`
                                                   :
                                                   props.page == "teamherosection" ? `${teamjourney[0].subheading3}`
                                                   :
                                                   props.page == "careersherosection" ? `${careerrecruitingtime[0].subheading3}`
                                                   :
                                                   props.page == "frontendherosection" ? `${frontpartner[0].subheading3}`
                                                   :
                                                   props.page == "digitalherosection" ? `${digital_services[0].subheading3}`
                                                   :
                                                   props.page == "app" ? `${mobile_app_deliver_services[0].subheading3}`
                                                   :
                                                   props.page == "testing" ? `${quality_deliver_services[0].subheading3}`
                                                   :
                                                   props.page == "email" ? `${email_marketing_deliver_services[0].subheading3}`
                                                   :
                                                   props.page == "seo" ? `${seo_deliver_services[0].subheading3}`
                                                   :
                                                   props.page == "uiux" ? `${ui_deliver_services[0].subheading3}`
                                                   :
                                                   props.page == "media" ? `${social_media_services[0].subheading3}`
                                                   :
                                                  
                                                   ""
                                        
                                        
                                        }</strong></h3>
                                        
                                       
                                    </div>
                                </div>
                                <div className="margin-top margin-xsmall max-para">
                                            <p className="text-size-18px">{
                                                      props.page == "homeherosection" ? `${additional[0].subpragraph3}`
                                                      :
                                                      props.page == "teamherosection" ? `${teamjourney[0].subpragraph3}`
                                                      :
                                                      props.page == "digitalherosection" ? `${digital_services[0].subpragraph3}`
                                                      :
                                                      props.page == "app" ? `${mobile_app_deliver_services[0].subpragraph3}`
                                                      :
                                                      props.page == "frontendherosection" ? `${frontpartner[0].subpragraph3}`
                                                      :
                                                      props.page == "testing" ? `${quality_deliver_services[0].subpragraph3}`
                                                      :
                                                      props.page == "email" ? `${email_marketing_deliver_services[0].subpragraph3}`
                                                      :
                                                      props.page == "seo" ? `${seo_deliver_services[0].subpragraph3}`
                                                      :
                                                      props.page == "uiux" ? `${ui_deliver_services[0].subpragraph3}`
                                                      :
                                                      props.page == "media" ? `${social_media_services[0].subpragraph3}`
                                                  : 
                                                      ""
                                        
                                            
                                            }</p>
                                        </div>
                                        <div className="margin-top margin-medium max-para"><a href="#section-contact" data-w-id="697dde0e-39ce-7e31-2f75-4bde5931dc66" className="button w-button"> 
                                        {props.page == "homeherosection" ? `${additional[0].btntxt}`
                                                   :
                                                   props.page == "teamherosection" ? `${teamjourney[0].btntxt}`
                                                   :
                                                   props.page == "careersherosection" ? `${careerrecruitingtime[0].btntxt}`
                                                   :
                                                   props.page == "frontendherosection" ? `${frontpartner[0].btntxt}`
                                                   :
                                                   props.page == "digitalherosection" ? `${digital_services[0].btntxt}`
                                                   :
                                                   props.page == "app" ? `${mobile_app_deliver_services[0].btntxt}`
                                                   :
                                                   props.page == "testing" ? `${quality_deliver_services[0].btntxt}`
                                                   :
                                                   props.page == "email" ? `${email_marketing_deliver_services[0].btntxt}`
                                                   :
                                                   props.page == "seo" ? `${seo_deliver_services[0].btntxt}`
                                                   :
                                                   props.page == "uiux" ? `${ui_deliver_services[0].btntxt}`
                                                   :
                                                   props.page == "media" ? `${social_media_services[0].btntxt}`
                                :
                                ""
                                 }
                                        </a></div>
                                {/* <div className="why-devlane-item">
                                    <div
                                        className="icon-lottie-04"
                                        data-w-id="c11ed5ea-018c-8dd7-8a53-6b2354d8d679"
                                        data-animation-type="lottie"
                                        data-src=""
                                        data-loop="1"
                                        data-direction="1"
                                        data-autoplay="1"
                                        data-is-ix2-target="0"
                                        data-renderer="svg"
                                        data-default-duration="2.0166666666666666"
                                        data-duration="0"
                                    >
                                        <img src={arcticons_money_manager} />
                                    </div>
                                    <div className="why-devlane-item-text-container">
                                        <h3 className="text-color-light"><strong>{
                                               props.page == "homeherosection" ? `${additional[0].subheading4}`
                                               :
                                               props.page == "teamherosection" ? `${teamjourney[0].subheading4}`
                                               :
                                               props.page == "careersherosection" ? `${careerrecruitingtime[0].subheading4}`
                                               :
                                               props.page == "frontendherosection" ? `${frontpartner[0].subheading3}`
                                                :
                                               props.page == "digitalherosection" ? `${digital_services[0].subheading4}`
                                                     :
                                                     props.page == "app" ? `${mobile_app_deliver_services[0].subheading4}`
                                                     :
                                                     props.page == "testing" ? `${quality_deliver_services[0].subheading4}`
                                                     :
                                                     props.page == "email" ? `${email_marketing_deliver_services[0].subheading4}`
                                                     :
                                                     props.page == "seo" ? `${seo_deliver_services[0].subheading4}`
                                                     :
                                                     props.page == "uiux" ? `${ui_deliver_services[0].subheading4}`
                                                     :
                                                     props.page == "media" ? `${social_media_services[0].subheading4}`
                                                  
                                               :
                                               ""
                                 
                                        
                                        
                                        }</strong></h3>
                                        <div className="margin-top margin-xsmall">
                                            <p className="text-size-18px">{
                                                         props.page == "homeherosection" ? `${additional[0].subpragraph4}`
                                                         :
                                                         props.page == "teamherosection" ? `${teamjourney[0].subpragraph4}`
                                                         :
                                                         props.page == "careersherosection" ? `${careerrecruitingtime[0].subpragraph4}`
                                                         :
                                                         props.page == "frontendherosection" ? `${frontpartner[0].subpragraph3}`
                                                         :
                                                         props.page == "digitalherosection" ? `${digital_services[0].subpragraph4}`
                                                         :
                                                         props.page == "app" ? `${mobile_app_deliver_services[0].subpragraph4}`
                                                         :
                                                         props.page == "testing" ? `${quality_deliver_services[0].subpragraph4}`
                                                         :
                                                         props.page == "email" ? `${email_marketing_deliver_services[0].subpragraph4}`
                                                         :
                                                         props.page == "seo" ? `${seo_deliver_services[0].subpragraph4}`
                                                         :
                                                         props.page == "uiux" ? `${ui_deliver_services[0].subpragraph4}`
                                                         :
                                                         props.page == "media" ? `${social_media_services[0].subpragraph4}`
                                                      
                                                         :
                                                         ""
                                           

                                            }</p>
                                        </div>
                                    </div>
                                </div> */}
                            </motion.div>
                           
                            <motion.div animate={animation2} className="why-devlane-content">
                                <div data-w-id="82b2590a-1135-5b48-005e-c3ed1bceeb52" className="section-title">
                                    {
                                           props.page == "homeherosection" ? `${additional[0].title}`
                                           :
                                           props.page == "teamherosection" ? `${teamjourney[0].title}`
                                           :
                                           props.page == "careersherosection" ? `${careerrecruitingtime[0].title}`
                                           :
                                           props.page == "frontendherosection" ? `${frontpartner[0].title}`
                                           :
                                         
                                           props.page == "digitalherosection" ? `${digital_services[0].title}`
                                           :
                                           props.page == "app" ? `${mobile_app_deliver_services[0].title}`
                                           :
                                           props.page == "testing" ? `${quality_deliver_services[0].title}`
                                           :
                                           props.page == "email" ? `${email_marketing_deliver_services[0].title}`
                                           :
                                           props.page == "seo" ? `${seo_deliver_services[0].title}`
                                           :
                                           props.page == "uiux" ? `${ui_deliver_services[0].title}`
                                           :
                                           props.page == "media" ? `${social_media_services[0].title}`
                                        
                                           :
                                           ""
                    
                                    
                                    }
                                    </div>
                                <h2 data-w-id="82b2590a-1135-5b48-005e-c3ed1bceeb54"><strong>
                                    {
                                        props.page == "homeherosection" ? `${additional[0].heading}`
                                        :
                                        props.page == "teamherosection" ? `${teamjourney[0].heading}`
                                        :
                                        props.page == "careersherosection" ? `${careerrecruitingtime[0].heading}`
                                        :
                                        props.page == "frontendherosection" ? `${frontpartner[0].heading}`
                                        :
                                        props.page == "digitalherosection" ? `${digital_services[0].heading}`
                                        :
                                        props.page == "app" ? `${mobile_app_deliver_services[0].heading}`
                                        :
                                        props.page == "testing" ? `${quality_deliver_services[0].heading}`
                                        :
                                        props.page == "email" ? `${email_marketing_deliver_services[0].heading}`
                                        :
                                        props.page == "seo" ? `${seo_deliver_services[0].heading}`
                                        :
                                        props.page == "uiux" ? `${ui_deliver_services[0].heading}`
                                        :
                                        props.page == "media" ? `${social_media_services[0].heading}`
                                     
                                        :
                                        ""


                                    
                                    
                                    }</strong></h2>
                                <div className="margin-top margin-medium"><p data-w-id="82b2590a-1135-5b48-005e-c3ed1bceeb57" className="text-size-large text-color-light">{
                                
                              
                                props.page == "homeherosection" ? `${additional[0].pragraph}`
                                :
                                props.page == "teamherosection" ? `${teamjourney[0].pragraph}`
                                :
                                props.page == "careersherosection" ? `${careerrecruitingtime[0].pragraph}`
                                :
                                props.page == "frontendherosection" ? `${frontpartner[0].subpragraph1}`
                                :
                                props.page == "digitalherosection" ? `${digital_services[0].pragraph}`
                                :
                                props.page == "app" ? `${mobile_app_deliver_services[0].pragraph}`
                                :
                                props.page == "testing" ? `${quality_deliver_services[0].pragraph}`
                                :
                                props.page == "email" ? `${email_marketing_deliver_services[0].pragraph}`
                                :
                                props.page == "seo" ? `${seo_deliver_services[0].pragraph}`
                                :
                                props.page == "uiux" ? `${ui_deliver_services[0].pragraph}`
                                :
                                props.page == "media" ? `${social_media_services[0].pragraph}`
                             
                                :
                                ""
                                
                                }</p></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Additionalperks
