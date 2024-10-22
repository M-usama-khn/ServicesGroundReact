import React from 'react'
import {webcreate , onlinespace , ideal_representation , emailmark , qacreate , seo_search_ranking , mediacreate , ui_creat} from "../constants"
import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {check} from "../assets"
const Frontendextendteam = (props) => {

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
    <>
   
   <section id="section-expand" ref={ref} className="section-supercharge" style={{
        overflow : "hidden"
}}>
    <motion.div animate={animation} className="page-padding">
        <div className="container-large">
            <div className="padding-vertical_section">
                <div className="w-layout-grid layout_supercharge">
                    <div id="w-node-_2a68a324-5d55-82cd-31b9-e40d7137b288-e874a0d5" data-w-id="2a68a324-5d55-82cd-31b9-e40d7137b288" className="supercharge_list-layout">
                        <div className="supercharge_list-container">
                            <div className="supercharge_list-title">
                                <h3 className="text-color-light">
                                {
                                        props.page == "frontendherosection" ? `${webcreate[0].heading}`
                                
                                       :
                                       props.page == "digitalherosection" ? `${onlinespace[0].heading}`
                                
                                       :
                                       props.page == "app" ? `${ideal_representation[0].heading1}`
                                       :
                                       props.page == "testing" ? `${qacreate[0].heading1}`
                                       :
                                       props.page == "email" ? `${emailmark[0].heading1}`
                                       :
                                       props.page == "seo" ? `${seo_search_ranking[0].heading1}`
                                       :
                                       props.page == "uiux" ? `${ui_creat[0].heading1}`
                                       :
                                       props.page == "media" ? `${mediacreate[0].heading1}`
                                       :
                                       ""
                                        }
            
                                    
                                    </h3>
                            </div>
                            <div className="supercharge_list-item">
                                <img src={check} loading="lazy" alt="An icon of a blue checkmark" />
                                <div className="margin-left margin-small">
                                    <div>
                                    {props.page == "frontendherosection" ? `${webcreate[0].subheading1}`
                                
                                :
                                props.page == "digitalherosection" ? `${onlinespace[0].subheading1}`
                                
                                :
                                props.page == "app" ? `${ideal_representation[0].subheading1}`
                                :
                                props.page == "testing" ? `${qacreate[0].subheading1}`
                                :
                                props.page == "email" ? `${emailmark[0].subheading1}`
                                :
                                props.page == "seo" ? `${seo_search_ranking[0].subheading1}`
                                :
                                props.page == "uiux" ? `${ui_creat[0].subheading1}`
                                :
                                props.page == "media" ? `${mediacreate[0].subheading1}`
                                :
                          ""
                                 }
                                    </div>
                                </div>
                            </div>
                            <div className="supercharge_list-item">
                                <img src={check} loading="lazy" alt="An icon of a blue checkmark" />
                                <div className="margin-left margin-small">
                                    <div>{props.page == "frontendherosection" ? `${webcreate[0].subheading2}`
                                
                                :
                                props.page == "digitalherosection" ? `${onlinespace[0].subheading2}`
                             :
                                props.page == "app" ? `${ideal_representation[0].subheading2}`
                                :
                                props.page == "testing" ? `${qacreate[0].subheading2}`
                                :
                                props.page == "email" ? `${emailmark[0].subheading2}`
                                :
                                props.page == "seo" ? `${seo_search_ranking[0].subheading2}`
                                :
                                props.page == "uiux" ? `${ui_creat[0].subheading2}`
                                :
                                props.page == "media" ? `${mediacreate[0].subheading2}`
                                :
                              
                             ""
                                 }</div>
                                </div>
                            </div>
                            <div className="supercharge_list-item">
                                <img src={check} loading="lazy" alt="An icon of a blue checkmark" />
                                <div className="margin-left margin-small">
                                    <div>{props.page == "frontendherosection" ? `${webcreate[0].subheading3}`
                                
                                :
                                props.page == "digitalherosection" ? `${onlinespace[0].subheading3}`
                                
                                :
                                props.page == "app" ? `${ideal_representation[0].subheading3}`
                                :
                                props.page == "testing" ? `${qacreate[0].subheading3}`
                                :
                                props.page == "email" ? `${emailmark[0].subheading3}`
                                :
                                props.page == "seo" ? `${seo_search_ranking[0].subheading3}`
                                :
                                props.page == "uiux" ? `${ui_creat[0].subheading3}`
                                :
                                props.page == "media" ? `${mediacreate[0].subheading3}`
                                :
                               ""
                                 }</div>
                                </div>
                            </div>
                            <div className="supercharge_list-item">
                                <img src={check} loading="lazy" alt="An icon of a blue checkmark" />
                                <div className="margin-left margin-small">
                                    <div>{props.page == "frontendherosection" ? `${webcreate[0].subheading4}`
                                
                                :
                                props.page == "digitalherosection" ? `${onlinespace[0].subheading4}`
                                :
                                props.page == "app" ? `${ideal_representation[0].subheading4}`
                                :
                                props.page == "testing" ? `${qacreate[0].subheading4}`
                                :
                                props.page == "email" ? `${emailmark[0].subheading4}`
                                :
                                props.page == "seo" ? `${seo_search_ranking[0].subheading4}`
                                :
                                props.page == "uiux" ? `${ui_creat[0].subheading4}`
                                :
                                props.page == "media" ? `${mediacreate[0].subheading4}`
                                :
                            
                               ""

                                 }</div>
                                </div>
                            </div>
                            <div className="supercharge_list-item">
                                <img src={check} loading="lazy" alt="An icon of a blue checkmark" />
                                <div className="margin-left margin-small">
                                    <div>{props.page == "frontendherosection" ? `${webcreate[0].subheading5}`
                                
                                :
                                props.page == "digitalherosection" ? `${onlinespace[0].subheading5}`
                               :
                                props.page == "app" ? `${ideal_representation[0].subheading5}`
                                :
                                props.page == "testing" ? `${qacreate[0].subheading5}`
                                :
                                props.page == "email" ? `${emailmark[0].subheading5}`
                                :
                                props.page == "seo" ? `${seo_search_ranking[0].subheading5}`
                                :
                                props.page == "uiux" ? `${ui_creat[0].subheading5}`
                                :
                                props.page == "media" ? `${mediacreate[0].subheading5}`
                                :
                               
                                ""
                                 }</div>
                                </div>
                            </div>
                            <div className="supercharge_list-item">
                                <img src={check} loading="lazy" alt="An icon of a blue checkmark" />
                                <div className="margin-left margin-small">
                                    <div>{props.page == "frontendherosection" ? `${webcreate[0].subheading6}`
                                
                                :
                                props.page == "digitalherosection" ? `${onlinespace[0].subheading6}`
                                
                                :
                                props.page == "app" ? `${ideal_representation[0].subheading6}`
                                :
                                props.page == "testing" ? `${qacreate[0].subheading6}`
                                :
                                props.page == "email" ? `${emailmark[0].subheading6}`
                                :
                                props.page == "seo" ? `${seo_search_ranking[0].subheading6}`
                                :
                                props.page == "uiux" ? `${ui_creat[0].subheading6}`
                                :
                                props.page == "media" ? `${mediacreate[0].subheading6}`
                                :
                               ""
                                 }</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-_39a56abd-658c-495c-3893-cfada05cf7e3-e874a0d5" className="content_supercharge">
                        {/* <div data-w-id="39a56abd-658c-495c-3893-cfada05cf7e4" className="section-title">Extend your team</div> */}
                        <h2 data-w-id="39a56abd-658c-495c-3893-cfada05cf7e6">
                        {props.page == "frontendherosection" ? `${webcreate[0].title}`
                                
                                :
                                props.page == "digitalherosection" ? `${onlinespace[0].title}`
                                
                                :
                                props.page == "app" ? `${ideal_representation[0].heading}`
                                :
                                props.page == "testing" ? `${qacreate[0].heading}`
                                :
                                props.page == "email" ? `${emailmark[0].heading}`
                                :
                                props.page == "seo" ? `${seo_search_ranking[0].heading}`
                                :
                                props.page == "uiux" ? `${ui_creat[0].heading}`
                                :
                                props.page == "media" ? `${mediacreate[0].heading}`
                                :
                                ""
                                 }
                        </h2>
                        <div data-w-id="39a56abd-658c-495c-3893-cfada05cf7e8" className="margin-top margin-medium">
                            <p data-w-id="39a56abd-658c-495c-3893-cfada05cf7e9" className="text-size-large text-color-light">
                            {props.page == "frontendherosection" ? `${webcreate[0].description1}`
                                
                                :
                                props.page == "digitalherosection" ? `${onlinespace[0].description1}`
                                
                                :
                                props.page == "app" ? `${ideal_representation[0].description1}`
                                :
                                props.page == "testing" ? `${qacreate[0].description1}`
                                :
                                props.page == "email" ? `${emailmark[0].description1}`
                                :
                                props.page == "seo" ? `${seo_search_ranking[0].description1}`
                                :
                                props.page == "uiux" ? `${ui_creat[0].description1}`
                                :
                                props.page == "media" ? `${mediacreate[0].description1}`
                                :
                                ""
                                 }
                                <br />
                                <br /> 
                                {props.page == "frontendherosection" ? `${webcreate[0].description2}`
                                
                                :
                                props.page == "digitalherosection" ? `${onlinespace[0].description2}`
                                
                                :
                                props.page == "app" ? `${ideal_representation[0].description2}`
                                :
                                props.page == "testing" ? `${qacreate[0].description2}`
                                :
                                props.page == "email" ? `${emailmark[0].description2}`
                                :
                                props.page == "seo" ? `${seo_search_ranking[0].description2}`
                                :
                                props.page == "uiux" ? `${ui_creat[0].description2}`
                                :
                                props.page == "media" ? `${mediacreate[0].description2}`
                                :
                                ""
                                 }
                            </p>
                            <div className="margin-top margin-medium"><a href="#section-contact" data-w-id="697dde0e-39ce-7e31-2f75-4bde5931dc66" className="button w-button"> 
                            {props.page == "frontendherosection" ? `${webcreate[0].btntxt}`
                                
                                :
                                props.page == "digitalherosection" ? `${onlinespace[0].btntxt}`
                                
                                :
                                props.page == "app" ? `${ideal_representation[0].btntxt}`
                                :
                                props.page == "testing" ? `${qacreate[0].btntxt}`
                                :
                                props.page == "email" ? `${emailmark[0].btntxt}`
                                :
                                props.page == "seo" ? `${seo_search_ranking[0].btntxt}`
                                :
                                props.page == "uiux" ? `${ui_creat[0].btntxt}`
                                :
                                props.page == "media" ? `${mediacreate[0].btntxt}`
                                :
                                ""
                                 }
                                        </a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
</section>





 </>
  )
}

export default Frontendextendteam
