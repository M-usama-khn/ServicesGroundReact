import React from 'react';
import { differentiator , teamqualities , careerdifferential  } from '../constants'
import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Lottie from 'react-lottie';
import affordability from '../icons/affordability.json'
import effective from "../icons/Effective_Communication.json"
import reliability from "../icons/reliability.json"
import execution from "../icons/execution.json" 
import speedy from "../icons/Speedy_Implementation.json"
import {affordability_s,
    effective_communication_s,
    execution_s,
    reliability_s,
    speedy_implementation_s,} from "../assets"
const Differentiator = (props) => {
    const speed = {
        loop: true,
        autoplay: true,
        animationData: speedy,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const executions = {
        loop: true,
        autoplay: true,
        animationData: execution,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const effectives = {
        loop: true,
        autoplay: true,
        animationData: effective,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const reliabilitys = {
        loop: true,
        autoplay: true,
        animationData: reliability,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const affordabilitys = {
        loop: true,
        autoplay: true,
        animationData: affordability,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const {ref, inView} = useInView({
        threshold: 0
});
    const animation = useAnimation();
     useEffect(() =>{
     if(inView){
        animation.start({
            y: 0,
            transition:{
                type: 'spring', duration: 1 , bounce: 0
                
            }
        })
     }
     if(!inView){
        animation.start({y: '+2000vh'})
     }

     } , [inView]


     )
    


    return (
  <section ref={ref} id="section-differential" className="section-the-differential" style={{overflow : "hidden" , background:
     `${props.page == "homeherosection" ? "#16161A":"#1B1C20"}`
    }}
      
  
  >
            <motion.div animate={animation} className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical_section">
                        <div className="layout-centered">
                            <div data-w-id="cfc74a69-9e5b-53ea-d50f-87218d66bd7d" className="section-title">
                                {
                                 props.page == "homeherosection" ? `${differentiator[0].title}`
                                 :
                                 props.page == "teamherosection" ? `${teamqualities[0].title}`
                                 :
                                 props.page == "careersherosection" ? `${careerdifferential[0].title}`
                                 :
                                 ""
                                
                                }
                                </div>
                            <h2 data-w-id="cfc74a69-9e5b-53ea-d50f-87218d66bd7f"><strong>
                                {
                                  props.page == "homeherosection" ? `${differentiator[0].heading}`
                                  :
                                  props.page == "teamherosection" ? `${teamqualities[0].heading}`
                                 :
                                 props.page == "careersherosection" ? `${careerdifferential[0].heading}`
                                 :
                                  ""
                                }
                               </strong>
                            </h2>
                            <div className="margin-top margin-medium">
                                <div className="container-xsmall">
                                    <p data-w-id="4e75f968-94d8-eef7-57f0-722296090a43"
                                        className="text-size-large text-color-light">
                                            {
                                              props.page == "homeherosection" ? `${differentiator[0].pragraph}`
                                              :
                                              props.page == "teamherosection" ? `${teamqualities[0].pragraph}`
                                              :
                                              props.page == "careersherosection" ? `${careerdifferential[0].pragraph}`
                                              :
                                              ""
                                            
                                            }
                                            </p>
                                </div>
                            </div>
                        </div>
                        <div className="margin-top margin-large">
                            <div data-w-id="70401701-360d-bc9f-8874-cbc952d0266c" style={{ opacity: "1" }}
                                className="w-layout-grid td_columns-grid">
                                <div id="w-node-_533aef48-ecbb-1f18-ae77-d90d5ab8916b-6774a0b7" className="tf-column-border">
                                    <div id="w-node-ee3f5284-accb-114c-3d0e-e0937ea0f9e6-6774a0b7" className="tf_column-bg">
                                        <div
                                            className="icon-lottie-2-colors differentiatoricon"
                                            data-w-id="b063588d-bb51-2ae5-6b51-302fc656c594"
                                            data-animation-type="lottie"
                                            data-loop="1"
                                            data-direction="1"
                                            data-autoplay="1"
                                            data-is-ix2-target="0"
                                            data-renderer="svg"
                                            data-default-duration="2.0166666666666666"
                                            data-duration="0"
                                        >
{/* <Lottie  options={
                                  props.page == "homeherosection" ? affordabilitys
                                  :
                                 "" }/> */} <img src={affordability_s}/>
                                        </div>
                                  
                                        <h3 className="text-color-light">
                                            {
                                                props.page == "homeherosection" ? `${differentiator[0].subheading1}`
                                                :
                                                props.page == "teamherosection" ? `${teamqualities[0].subheading1}`
                                                :
                                                props.page == "careersherosection" ? `${careerdifferential[0].subheading1}`
                                                :
                                                ""
                                         }
                                            
                                            </h3>
                                        <div className="tf_p_wrapper">
                                            <p>
                                                {
                                                props.page == "homeherosection" ? `${differentiator[0].subpragraph1}`
                                                :
                                                props.page == "teamherosection" ? `${teamqualities[0].subpragraph1}`
                                                :
                                                props.page == "careersherosection" ? `${careerdifferential[0].subpragraph1}`
                                                :
                                                ""
                                                
                                               }
                                                
                                                </p>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-a559f6c5-9d75-c720-d12b-9b32f99697b3-6774a0b7" className="tf-column-border">
                                    <div id="w-node-a559f6c5-9d75-c720-d12b-9b32f99697b4-6774a0b7" className="tf_column-bg">
                                        <div
                                            className="icon-lottie-2-colors differentiatoricon"
                                            data-w-id="b063588d-bb51-2ae5-6b51-302fc656c5a2"
                                            data-animation-type="lottie"
                                            data-loop="1"
                                            data-direction="1"
                                            data-autoplay="1"
                                            data-is-ix2-target="0"
                                            data-renderer="svg"
                                            data-default-duration="2.0416666666666665"
                                            data-duration="0"
                                        >
                                            {/* <Lottie  options={
                                  props.page == "homeherosection" ? speed
                                  :
                                 "" }/> */}
                                 <img style={{margin: "6px 0px 0px 0px"}} src={speedy_implementation_s}/>
                                        </div>
                                        
                                        <h3 className="text-color-light"><strong>
                                            {
                                                  props.page == "homeherosection" ? `${ differentiator[0].subheading2}`
                                                  :
                                                  props.page == "teamherosection" ? `${teamqualities[0].subheading2}`
                                                  :
                                                  props.page == "careersherosection" ? `${careerdifferential[0].subheading2}`
                                                :
                                                  ""
                                           }
                                            </strong></h3>
                                        <div className="tf_p_wrapper">
                                            <p>
                                                {
                                               props.page == "homeherosection" ? `${ differentiator[0].subpragraph2}`
                                                :
                                                props.page == "teamherosection" ? `${teamqualities[0].subpragraph2}`
                                                :
                                                props.page == "careersherosection" ? `${careerdifferential[0].subpragraph2}`
                                                :
                                                ""
                                                
                                                }
                                                </p>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-_4e7bbe8d-e422-4db8-5b9f-3e0d78665ac7-6774a0b7" className="tf-column-border">
                                    <div id="w-node-_4e7bbe8d-e422-4db8-5b9f-3e0d78665ac8-6774a0b7" className="tf_column-bg">
                                        <div className="icon-lottie-2-colors differentiatoricon" data-w-id="1529fd97-03ad-6aee-3726-d70d171e1ef3"
                                            data-animation-type="lottie"
                                            data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0"
                                            data-renderer="svg" data-default-duration="2.5" data-duration="0">
                                          {/* <Lottie  options={
                                  props.page == "homeherosection" ? effectives
                                  :
                                 "" }/> */}
                                 <img style={{margin: "6px 0px 0px 0px"}} src={effective_communication_s}/>
                                        </div>
                                       
                                        <h3 className="text-color-light">
                                            {
                                                 props.page == "homeherosection" ? `${ differentiator[0].subheading3}`
                                                 :
                                                 props.page == "teamherosection" ? `${teamqualities[0].subheading3}`
                                                 :
                                                 props.page == "careersherosection" ? `${careerdifferential[0].subheading3}`
                                                 :
                                                 ""
                                            
                                            }
                                            </h3>
                                        <div className="tf_p_wrapper">
                                            <p>
                                                {
                                                       props.page == "homeherosection" ? `${differentiator[0].subpragraph3}`
                                                       :
                                                       props.page == "teamherosection" ? `${teamqualities[0].subpragraph3}`
                                                       :
                                                       props.page == "careersherosection" ? `${careerdifferential[0].subpragraph3}`
                                                       :
                                                       ""
                                                  
                                                
                                                }
                                                </p>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-_0eddf205-5d90-8696-d413-743966606f19-6774a0b7" className="tf-column-border">
                                    <div id="w-node-_0eddf205-5d90-8696-d413-743966606f1a-6774a0b7" className="tf_column-bg">
                                        <div className="icon-lottie-2-colors differentiatoricon" data-w-id="f010952e-8be4-1f23-3c6d-b11929d6fe6c"
                                            data-animation-type="lottie"
                                            data-src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/6282b14ec1cecc690ae41297_people-01.json"
                                            data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0"
                                            data-renderer="svg" data-default-duration="2.5" data-duration="0">
                                    {/* <Lottie  options={
                                  props.page == "homeherosection" ? reliabilitys
                                  :
                                 ""
                                  }
                                  width = "100%"/> */}
                                           <img style={{margin: "6px 0px 0px 0px"}} src={reliability_s}/>
                                        </div>
                                        <h3 className="text-color-light">{
                                         props.page == "homeherosection" ? `${  differentiator[0].subheading4}`
                                         :
                                         props.page == "teamherosection" ? `${teamqualities[0].subheading4}`
                                         :
                                         props.page == "careersherosection" ? `${careerdifferential[0].subheading4}`
                                         :
                                         ""
                                       
                                        }</h3>
                                        <div className="tf_p_wrapper">
                                            <p>
                                                {
                                                  props.page == "homeherosection" ? `${differentiator[0].subpragraph4}`
                                                  :
                                                  props.page == "teamherosection" ? `${teamqualities[0].subpragraph4}`
                                                  :
                                                 props.page == "careersherosection" ? `${careerdifferential[0].subpragraph4}`
                                                  : 
                                                  ""
                                               }
                                                </p>
                                        </div>
                                    </div>
                                </div>
                                <div id="w-node-c0659783-03f1-2638-7778-f378404d46ca-6774a0b7" className="tf-column-border">
                                    <div id="w-node-c0659783-03f1-2638-7778-f378404d46cb-6774a0b7" className="tf_column-bg">
                                        <div className="icon-lottie-2-colors differentiatoricon" data-w-id="cf6ea33e-16a4-8665-43a3-47835cc627a9"
                                            data-animation-type="lottie"
                                            data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0"
                                            data-renderer="svg" data-default-duration="4.016666666666667" data-duration="0">
                                         {/* <Lottie  options={
                                  props.page == "homeherosection" ? executions
                                  :
                                  
                                 "" }/> */}
                                      <img style={{margin: "6px 0px 0px 0px"}} src={execution_s}/>
                                        </div>
                                        <h3 className="text-color-light">{
                                           props.page == "homeherosection" ? `${differentiator[0].subheading5}`
                                           :
                                           props.page == "teamherosection" ? `${teamqualities[0].subheading5}`
                                           :
                                           props.page == "careersherosection" ? `${careerdifferential[0].subheading5}`
                                           :
                                           ""
                                        
                                        }</h3>
                                        <div className="tf_p_wrapper">
                                            <p>
                                                {
                                                props.page == "homeherosection" ? `${differentiator[0].subpragraph5}`
                                                :
                                                props.page == "teamherosection" ? `${teamqualities[0].subpragraph5}`
                                                :
                                                props.page == "careersherosection" ? `${careerdifferential[0].subpragraph5}`
                                           :
                                                ""
                                                }
                                                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>







    )
}

export default Differentiator
