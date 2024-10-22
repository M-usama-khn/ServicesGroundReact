import React from 'react'
import {mobile_app_tools , email_marketing_tools , digital_marketing_tools , seo_tools , social_media_tools 
, ui_tools} from "../constants"
import {figma,
    illustrator,
    xd,
    photoshop, Hootsuite,
    Sendible,
    Sprout_Social,Google_keyword,
    Google_Search,ahrefs,
    Google_Trends,
    SEOQuake,enhancement_optimization,
    assistance_with_getting_your_app,
business_needs_and_requirements_analysis,
cross_platform_mobile_development,
rigorous_quality_assurance,
ux_testing,
wire_framing,
flutter,
react,
mautic,
ahref,
linkedin_sales_navigator,
mautic_dg,
sendinblue,
circle_team,

   } from "../assets"
const Testingtype = (props) => {
  return (
    <section id="section-why-devlane" className="section-testing-process">
    <div className="page-padding">
        <div className="container-large">
            <div className="padding-vertical_section">
                <div className="w-layout-grid taf_layout">
                    <div id="w-node-_5e0a7a18-9edb-24a5-e6fc-fa741e7ebe1f-3774a0db" className="tp-text">
                        <div data-w-id="5e0a7a18-9edb-24a5-e6fc-fa741e7ebe20" className="section-title">
                            {/* Testing Process */}
                            
                            </div>
                        <h2 data-w-id="5e0a7a18-9edb-24a5-e6fc-fa741e7ebe22">
                           
                           
                            { 
                               
                                props.page == "digitalherosection" ? `${digital_marketing_tools[0].heading1}`
                                :
                                props.page == "app" ? `${mobile_app_tools[0].heading1}`
                               
                                :
                                props.page == "email" ? `${email_marketing_tools[0].heading1}`
                                :
                                props.page == "seo" ? `${seo_tools[0].heading1}`
                                :
                                props.page == "uiux" ? `${ui_tools[0].heading1}`
                                :
                                props.page == "media" ? `${social_media_tools[0].heading1}`
                             
                                :
                                ""}
                           
                           
                            </h2>
                            <div className="margin-top margin-medium"><a href="#section-contact" data-w-id="697dde0e-39ce-7e31-2f75-4bde5931dc66" className="button w-button"> 
                            { 
                               
                                props.page == "digitalherosection" ? `${digital_marketing_tools[0].btntxt}`
                                :
                                props.page == "app" ? `${mobile_app_tools[0].btntxt}`
                               
                                :
                                props.page == "email" ? `${email_marketing_tools[0].btntxt}`
                                :
                                props.page == "seo" ? `${seo_tools[0].btntxt}`
                                :
                                props.page == "uiux" ? `${ui_tools[0].btntxt}`
                                :
                                props.page == "media" ? `${social_media_tools[0].btntxt}`
                             
                                :
                                ""}
                                        </a></div>
                        <div className="margin-top margin-medium">
                            <p data-w-id="5e0a7a18-9edb-24a5-e6fc-fa741e7ebe25" className="text-size-large text-color-light">
                                {/* Assuming we are setting up everything the process we follow is this one. Otherwise if we are integrating with your current QA team, we’ll adapt to your current flow, methods and tools you currently have in use. */}
                            </p>
                        </div>
                    </div>
                    <div id="w-node-_6c6294b4-ed58-bded-2c08-58632da1cab7-3774a0db" data-w-id="6c6294b4-ed58-bded-2c08-58632da1cab7"  className="w-layout-grid tp-layout">
                        <div  id="w-node-c15f0759-41ec-5636-7b5a-1d27a079d769-3774a0db" className="tp-circle">
                            <img style ={{ display : `${props.page == "email" ? "none" : ""}` }} src={circle_team} loading="lazy" alt="Decorative dotted circle" className="tp-circle-img" />
                            <div className={`${props.page == "email" ? "" : "tp-vertical-line "} `}></div>
                        </div>
                        <div className="tp-item">
                            <div className="w-layout-grid tp-item-grid">
                                <img src={  props.page == "uiux" ? illustrator : props.page == "media" ? Sprout_Social:props.page == "seo" ? ahrefs:props.page == "app" ? flutter : props.page == "email" ? mautic : props.page == "digitalherosection" ? ahref :""}loading="lazy" id="w-node-_46401c4f-de76-bbcb-f30d-c287ade79571-3774a0db" alt="Settings icon" className="tp-item-icon"
                                />
                                 <div className ="reverse-width">
                                <div className="text-color-light">
                                    <h3>
                                    { 
                               
                               props.page == "digitalherosection" ? `${digital_marketing_tools[0].subheading1}`
                               :
                               props.page == "app" ? `${mobile_app_tools[0].subheading1}`
                              
                               :
                               props.page == "email" ? `${email_marketing_tools[0].subheading1}`
                               :
                               props.page == "seo" ? `${seo_tools[0].subheading1}`
                               :
                               props.page == "uiux" ? `${ui_tools[0].subheading1}`
                               :
                               props.page == "media" ? `${social_media_tools[0].subheading1}`
                            
                               :
                               ""}
                                        
                                        
                                </h3>
                                </div>
                                <div>
                                    
                                { 
                               
                               props.page == "digitalherosection" ? `${digital_marketing_tools[0].subparagraph1}`
                               :
                               props.page == "app" ? `${mobile_app_tools[0].subparagraph1}`
                              
                               :
                               props.page == "email" ? `${email_marketing_tools[0].subparagraph1}`
                               :
                               props.page == "seo" ? `${seo_tools[0].subparagraph1}`
                               :
                               props.page == "uiux" ? `${ui_tools[0].subparagraph1}`
                               :
                               props.page == "media" ? `${social_media_tools[0].subparagraph1}`
                            
                               :
                               ""}
                                    </div>
                                    </div>

                            </div>
                        </div>
                        <div style={{display : `${ props.page == "email" ? "none" : "flex"}`}}id="w-node-eb3730fd-5ff7-5e43-e294-f03c3386e871-3774a0db" className="tp-rounded-corner"></div>
                        <div style={{display : `${ props.page == "email" ? "none" : "flex"}`}} id="w-node-c0dfea0a-fd8f-139d-935c-bac66b675c7f-3774a0db" className="tp-line"></div>
                        <div style={{display : `${ props.page == "email" ? "none" : "flex"}`}} id="w-node-c065d394-a6a5-3cd6-3ff3-5e5e2caebb0c-3774a0db" className="tp-rounded-corner down"></div>
                        <div style={{display : `${ props.page == "email" ? "none" : "flex"}`}}id="w-node-_54044a93-ee46-be1d-f018-4480af223d0c-3774a0db" className="tp-item">

                            <div className="w-layout-grid tp-item-grid right" style={{display : `${ props.page == "email" ? "none"  :"flex"}`}}>
                                <img src={  props.page == "uiux" ? photoshop :props.page == "media" ? Hootsuite:props.page == "seo" ? Google_Search: props.page == "app" ? react : props.page == "digitalherosection" ? sendinblue :""} loading="lazy" id="w-node-_54044a93-ee46-be1d-f018-4480af223d0e-3774a0db" alt="Strategy icon" className="tp-item-icon"
                                />
                                <div className ="reverse-width">
                                <div className="text-color-light">
                                    <h3>    { 
                               
                               props.page == "digitalherosection" ? `${digital_marketing_tools[0].subheading2}`
                               :
                               props.page == "app" ? `${mobile_app_tools[0].subheading2}`
                              
                               :
                            //    props.page == "email" ? `${email_marketing_tools[0].subheading2}`
                            //    :
                               props.page == "seo" ? `${seo_tools[0].subheading2}`
                               :
                               props.page == "uiux" ? `${ui_tools[0].subheading2}`
                               :
                               props.page == "media" ? `${social_media_tools[0].subheading2}`
                            
                               :
                               ""}
                                        
                                      </h3>
                                </div>
                                <div>
                                { 
                               
                               props.page == "digitalherosection" ? `${digital_marketing_tools[0].subparagraph2}`
                               :
                               props.page == "app" ? `${mobile_app_tools[0].subparagraph2}`
                              
                               :
                            //    props.page == "email" ? `${email_marketing_tools[0].subparagraph2}`
                            //    :
                               props.page == "seo" ? `${seo_tools[0].subparagraph2}`
                               :
                               props.page == "uiux" ? `${ui_tools[0].subparagraph2}`
                               :
                               props.page == "media" ? `${social_media_tools[0].subparagraph2}`
                            
                               :
                               ""}
                                        
                                                                      </div>
                                                                      </div>
                            </div>
                        </div>
                        <img style ={{ display : `${props.page == "email" ? "none" : ""}` }} src={circle_team} loading="lazy" id="w-node-_60166113-0e6f-8727-c542-97d85144c2db-3774a0db" alt="Decorative dotted circle"
                            className="tp-circle-img" />
                        <div id="w-node-fc2176b3-1bca-69b2-1ad0-49b9a7fb4458-3774a0db" className={ `${props.page == "email" ? "" : "tp-vertical-line "}   right`}></div>
                        <div style ={{ display : `${props.page == "email" ? "none" : "flex"}` }} id="w-node-_252d4fe4-79ff-ddf9-9621-25ad5d170ba7-3774a0db" className="tp-rounded-corner left"></div>
                        <div style ={{ display : `${props.page == "email" ? "none" : "flex"}` }} id="w-node-_4e1655ce-fe1c-a91a-a534-b0eb77043679-3774a0db" className="tp-line"></div>
                        <div style ={{ display : `${props.page == "app" ? "none" : props.page == "email" ? "none":"flex"}` }} id="w-node-_1f87528e-a7c6-04d5-d94e-70623bdbc6df-3774a0db" className="tp-rounded-corner downright"></div>
                        <div  id="w-node-cec246d6-202a-b490-65f2-8433f095250e-3774a0db" className="tp-vertical-line right"></div>
                        <div style ={{ display : `${props.page == "app" ? "none" : "block"}` }} id="w-node-c4b8dd2e-1fa1-0f0e-b7e1-2166fc768852-3774a0db" className="tp-item">
                            <div className="w-layout-grid tp-item-grid" style={{display : `${ props.page == "email" ? "none" : props.page == "app" ? "none" : "flex"}`}}>
                                <img src={  props.page == "uiux" ? xd : props.page == "media" ? Sendible:props.page == "seo" ? Google_Trends:props.page == "app" ? assistance_with_getting_your_app:props.page == "digitalherosection" ? linkedin_sales_navigator :""} loading="lazy" id="w-node-c4b8dd2e-1fa1-0f0e-b7e1-2166fc768854-3774a0db" alt="Document icon" className="tp-item-icon"
                                />
                                <div className="reverse-width">
                                <div className="text-color-light">
                                    <h3>
                                    { 
                               
                               props.page == "digitalherosection" ? `${digital_marketing_tools[0].subheading3}`
                               :
                            //    props.page == "app" ? `${mobile_app_tools[0].subheading3}`
                              
                            //    :
                            //    props.page == "email" ? `${email_marketing_tools[0].subheading3}`
                            //    :
                               props.page == "seo" ? `${seo_tools[0].subheading3}`
                               :
                               props.page == "uiux" ? `${ui_tools[0].subheading3}`
                               :
                               props.page == "media" ? `${social_media_tools[0].subheading3}`
                            
                               :
                               ""}
                                        
                                      
                                    </h3>
                                </div>
                           
                                <div>
                                { 
                               
                               props.page == "digitalherosection" ? `${digital_marketing_tools[0].subparagraph3}`
                               :
                            //    props.page == "app" ? `${mobile_app_tools[0].subparagraph3}`
                              
                            //    :
                            //    props.page == "email" ? `${email_marketing_tools[0].subparagraph3}`
                            //    :
                               props.page == "seo" ? `${seo_tools[0].subparagraph3}`
                               :
                               props.page == "uiux" ? `${ui_tools[0].subparagraph3}`
                               :
                               props.page == "media" ? `${social_media_tools[0].subparagraph3}`
                            
                               :
                               ""}
                                        
                                                                          </div>
                                                                          </div>



                            </div>
                        </div>
                        <img  style ={{ display : `${props.page == "app" ? "none" :  props.page == "email" ? "none" : ""}` }} src={circle_team} loading="lazy" id="w-node-_5dd32a5c-135e-5b10-a781-179788912f52-3774a0db" alt="Decorative dotted circle"
                            className="tp-circle-img" />
                        <div style ={{ display : `${props.page == "app" ? "none" :props.page == "email" ? "none" :"flex"}` }} id="w-node-_688bc6ff-9219-9bc3-13a5-f5dd9cb778dc-3774a0db" className="tp-rounded-corner"></div>
                        <div style ={{ display : `${props.page == "app" ? "none" : props.page == "email" ? "none":"flex"}` }} id="w-node-e89b4f64-7d01-e8c4-7691-5a69bfdffaab-3774a0db" className="tp-line"></div>
                        <div style ={{ display : `${props.page == "app" ? "none" : props.page == "email" ? "none" : props.page == "media" ? "none" : "flex"}` }}  id="w-node-f42a7850-8904-c0f2-9e35-5aca45d699e2-3774a0db" className="tp-rounded-corner down"></div>
                        <div  style ={{ display : `${props.page == "app" ? "none" :  props.page == "email" ? "none" : ""}` }} id="w-node-_94721896-f80c-d5e7-72a8-4e373a45fa60-3774a0db" className="tp-vertical-line last"></div>
                        <img style ={{ display : `${props.page == "app" ? "none" :  props.page == "email" ?  "none" : props.page == "media" ? "none" : ""}` }} src={circle_team} loading="lazy" id="w-node-_475e57aa-74e1-1707-75d0-bfc438aafd1a-3774a0db" alt="Decorative dotted circle"
                            className="tp-circle-img" />
                        <div id="w-node-_1f6af910-ea0b-814a-4bc5-761afe58aaea-3774a0db" className="tp-item">
                            <div className="w-layout-grid tp-item-grid right" style={{display : `${ props.page == "media" ? "none" : props.page == "email" ? "none" :  props.page == "app" ? "none" :"flex"}`}}>
                                <img src={  props.page == "uiux" ? figma : props.page == "seo" ? SEOQuake:props.page == "digitalherosection" ? mautic_dg :""} loading="lazy" id="w-node-_1f6af910-ea0b-814a-4bc5-761afe58aaec-3774a0db" alt="Check icon" className="tp-item-icon"
                                />
                          <div className="reverse-width">
                                <div className="text-color-light">
                                    <h3>    { 
                               
                               props.page == "digitalherosection" ? `${digital_marketing_tools[0].subheading4}`
                               :
                            //    props.page == "app" ? `${mobile_app_tools[0].subheading4}`
                              
                            //    :
                            //    props.page == "email" ? `${email_marketing_tools[0].subheading4}`
                            //    :
                               props.page == "seo" ? `${seo_tools[0].subheading4}`
                               :
                               props.page == "uiux" ? `${ui_tools[0].subheading4}`
                               :
                            //    props.page == "media" ? `${social_media_tools[0].subheading4}`
                            
                            //    :
                               ""}
                                        
                                      </h3>
                                </div>
                                <div>
                                { 
                               
                               props.page == "digitalherosection" ? `${digital_marketing_tools[0].subparagraph4}`
                               :
                            //    props.page == "app" ? `${mobile_app_tools[0].subparagraph4}`
                              
                            //    :
                            //    props.page == "email" ? `${email_marketing_tools[0].subparagraph4}`
                            //    :
                               props.page == "seo" ? `${seo_tools[0].subparagraph4}`
                               :
                               props.page == "uiux" ? `${ui_tools[0].subparagraph4}`
                               :
                            //    props.page == "media" ? `${social_media_tools[0].subparagraph4}`
                            
                            //    :
                               ""}
                                        
                              </div>
                              </div>
                          
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Testingtype
