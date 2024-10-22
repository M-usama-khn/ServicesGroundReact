import React from 'react';
import { partinerships ,  teampartinerships , frontendpartinerships , backendpartinerships , testingpartinerships , dataepartinerships } from '../constants';
import {
     tich_tv,
    pellyclinic,
    omnutritionist_logo,
    Etruscus_logo,
    dockleys_pr,
  lollyprop_pr,
  nativeads_pr,
  richtv_pr,
  dockleys,
  Lollyprop_lOgo,
  native_client,
  PressReach_c,
  pressreach_logo,
  GG_logo,
  goodgamer_c,
} from '../assets';

import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {useState} from 'react';
const Partnerships = (props) => {
    const [tab, settab] = useState(0);
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
        <section ref={ref} id="section-partnerships" className={`section-partnerships ${props.page == "homeherosection" ? "bg-light" : props.page == "teamherosection" ? "bg-dark":""}` } style={{overflow : "hidden" 
       
    }}>
            <motion.div animate={animation} className="page-padding">
                <div className="container-medium">
                    <div className="padding-vertical_section">
                        <div className="margin-bottom margin-large">
                            <div className="layout-centered">
                                <div data-w-id="924ab7b6-92a6-113b-1b08-59d760eefc4c" className="section-title">
                                    {
                                     `${partinerships[0].title}`
                                          
                                    }
                                    
                                    </div>
                                <h2 data-w-id="924ab7b6-92a6-113b-1b08-59d760eefc4e"><strong>
                                    {
                                         `${partinerships[0].heading}`
                                    }
                                    </strong></h2>
                                <div className="margin-top margin-medium">
                                    <div className="container-xsmall">
                                        <p data-w-id="531d7eed-592e-f3ff-ff95-bdf9b2f47404" className="text-size-large text-color-light">
                                            {
                                              `${partinerships[0].pragraph}`
                                            
                                         }
                                         </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-duration-in="300" data-duration-out="100" data-easing="ease-in-out" data-w-id="0b1c2ce3-d368-c933-7596-5a95f67026ad" data-current="Tab 1" className="partnerships-carousel w-tabs">
                            <div className="tabs-menu w-tab-menu">
                                <a data-w-tab="Tab 1"  onClick={() => settab(1) } className={`tab-links w-inline-block w-tab-link ${tab == 1 ? "w--current" : tab == 0 ? "w--current" : ""} `}>
                                    <img loading="lazy" src={tich_tv} alt="grindr brand logo" className="tab-image" />
                                </a>
                                <a data-w-tab="Tab 2" onClick={() => settab(2)} className={`tab-links w-inline-block w-tab-link ${tab == 2 ? "w--current" : ""}`}>
                                    <img loading="lazy" src={dockleys} alt="flo by moen brand logo" className="tab-image" />
                                </a>
                                <a data-w-tab="Tab 3"  onClick={() => settab(3)} className={`tab-links w-inline-block w-tab-link ${tab == 3 ? "w--current" : ""}`}>
                                    <img loading="lazy" src={GG_logo} alt="iherb brand logo" className="tab-image"/>
                                </a>
                                <a data-w-tab="Tab 4" onClick={() => settab(4)} className={`tab-links w-inline-block w-tab-link ${tab == 4 ? "w--current" : ""}`}>
                                    <img loading="lazy" src={pressreach_logo} alt="spot on logo" className="tab-image" />
                                </a>
                            </div>
                            <div className="tabs-content w-tab-content">
                                <div data-w-tab="Tab 1" className={`tab-pane w-tab-pane ${tab == 1 ? "w--tab-active" : tab == 0 ? "w--tab-active" : ""} `}>
                                    <div className="w-layout-grid layout-tab-pane">
                                        <div id="w-node-_0b1c2ce3-d368-c933-7596-5a95f67026ba-f67026ad" className="tab-content-item">
                                            <h3 className="h3-size-large text-color-light">
                                                {
                                                         `${partinerships[0].subheading1}`
                                                        
                                               
                                                
                                                
                                                }</h3>
                                            <div className="margin-top margin-small">
                                                <p>
                                                    {
                                                              `${partinerships[0].subpragraph1}`
                                                    }</p>
                                            </div>
                                            {/* <div className="margin-top margin-small">
                                                <p>{
                                                
                                                `${partinerships[0].subpragraph_1}`
                                                      
                                             }<br /></p>
                                            </div> */}
                                        </div>
                                        <img loading="lazy" id="w-node-_0b1c2ce3-d368-c933-7596-5a95f67026c5-f67026ad" src={richtv_pr} alt="" />
                                    </div>
                                </div>
                                <div data-w-tab="Tab 2" className={`tab-pane w-tab-pane ${tab == 2 ? "w--tab-active" : ""} `}>
                                    <div className="w-layout-grid layout-tab-pane">
                                        <div id="w-node-_0b1c2ce3-d368-c933-7596-5a95f67026c8-f67026ad" className="tab-content-item">
                                            <h3 className="h3-size-large text-color-light">
                                                {
                                                    `${partinerships[0].subheading2}`
                                                 
                                                }</h3>
                                            <div className="margin-top margin-small">
                                                <p>{
                                                   `${partinerships[0].subpragraph2}`
                                                   }</p>
                                            </div>
                                            {/* <div className="margin-top margin-small">
                                                <p>
                                                    {
                                                        `${partinerships[0].subpragraph_2}`
                                                        
                                                    }<br /></p>
                                            </div> */}
                                        </div>
                                        <img
                                            loading="lazy"
                                           
                                            src={dockleys_pr}
                                            id="w-node-_0b1c2ce3-d368-c933-7596-5a95f67026d3-f67026ad"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div data-w-tab="Tab 3" className={`tab-pane w-tab-pane ${tab == 3 ? "w--tab-active" : ""} `}>
                                    <div className="w-layout-grid layout-tab-pane">
                                        <div id="w-node-_0b1c2ce3-d368-c933-7596-5a95f67026d6-f67026ad" className="tab-content-item">
                                            <h3 className="h3-size-large text-color-light">
                                                {
                                                     `${partinerships[0].subheading3}`
                                                     
                                                
                                                
                                                }</h3>
                                            <div className="margin-top margin-small">
                                                <p>
                                                    {
                                                        `${partinerships[0].subpragraph3}`
                                                       
                                                  
                                                    
                                                    }<br /></p>
                                            </div>
                                            {/* <div className="margin-top margin-small">
                                                <p>
                                                    {
                                                           `${partinerships[0].subpragraph_3}`
                                                         
                                                     
                                                
                                                    
                                                    }<br /></p>
                                            </div> */}
                                        </div>
                                        <img
                                            loading="lazy"
                                         
                                            src={goodgamer_c}
                                            id="w-node-_0b1c2ce3-d368-c933-7596-5a95f67026e1-f67026ad"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div data-w-tab="Tab 4" className={`tab-pane w-tab-pane ${tab == 4 ? "w--tab-active" : ""} `}>
                                    <div className="w-layout-grid layout-tab-pane">
                                        <div id="w-node-_0b1c2ce3-d368-c933-7596-5a95f67026e4-f67026ad" className="tab-content-item">
                                            <h3 className="h3-size-large text-color-light">
                                                {
                                                      `${partinerships[0].subheading4}`
                                                    
                                            
                                                
                                                }</h3>
                                            <div className="margin-top margin-small">
                                                <p>
                                                    {
                                                        `${partinerships[0].subpragraph4}`
                                                        
                                                    
                                                    
                                                    }<br /></p>
                                            </div>
                                            {/* <div className="margin-top margin-small">
                                                <p>{
                                                       `${partinerships[0].subpragraph_4}`
                                                     
                                                
                                                
                                                }<br /></p>
                                            </div> */}
                                        </div>
                                        <img
                                            loading="lazy"
                                        
                                            src={PressReach_c}
                                            id="w-node-_0b1c2ce3-d368-c933-7596-5a95f67026ef-f67026ad"
                                            alt=""
                                        />
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

export default Partnerships
