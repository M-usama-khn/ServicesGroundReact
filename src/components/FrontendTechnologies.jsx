import React from 'react'
import {webtools} from "../constants"
import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {html5_s,
    ajax_s,
    bootstrap_s,
    css3_s,
    javascript_s,
    jquery_s,
    laravel_s,
    Magento_s,
    mysql_s,
    node_js_s,
    Php_s,
    python_s,
    react_s,
    shopify_s,
    Tailwind_CSS_s,
    woocommerce_s,
    wordpress_s,} from "../assets"
const FrontendTechnologies = (props) => {
    
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
    <>
    <section ref={ref} id="section-why-devlane" className="section-technologies-and-frameworks-stack" style={{overflow : "hidden"}}>
 
 
<div ref = {ref} id="section-why-devlane" className="section-tech-and-frameworks" style={{overflow : "hidden"}}>
    <div className="page-padding"><div className="container-large">
        <div className="padding-vertical_section">
            <div className="w-layout-grid taf_layout">
            <motion.div animate={animation} id="w-node-_5ef52e78-3a8a-1ee2-c9d5-a8d7940e14bb-5a74a0c9" className="taf-content-wrapper">
                {/* <div data-w-id="5ef52e78-3a8a-1ee2-c9d5-a8d7940e14bc" className="section-title" >Working Technologies</div> */}
                <h2 data-w-id="5ef52e78-3a8a-1ee2-c9d5-a8d7940e14be" > Technologies and frameworks we work with</h2>
                <div className="margin-top margin-medium"><p data-w-id="5ef52e78-3a8a-1ee2-c9d5-a8d7940e14c1" className="text-size-large text-color-light" >


                Our experience with these tech stacks are driven by the experience we have working across multiple industries, and based on the highest demand in the market.

                   </p>
                    </div>
                    
                    
                    </motion.div>
                   
                   
                   
                   <motion.div animate={animation2} data-w-id="5ef52e78-3a8a-1ee2-c9d5-a8d7940e14c3" className="taf-list-pad-bg" >
                    
                    
                    <div className="w-layout-grid taf-list"><div className="tech-item">
                  
                    <img src={html5_s} loading="lazy" alt="Node js icon"/>
                    <div className="margin-left margin-xsmall">
                        <div>{`${webtools[0].HTML5}`}</div></div></div><div className="tech-item">
                           
                            <img src={jquery_s} loading="lazy" alt="Node js icon"/>
                           
                            <div className="margin-left margin-xsmall"><div>{`${webtools[0].jQuery}`}</div></div></div><div className="tech-item">
                                <img src={css3_s} loading="lazy" alt="Ruby on Rails icon"/>
                                <div className="margin-left margin-xsmall">
                                    <div>{`${webtools[0].CSS3}`}</div></div></div>
                                    <div className="tech-item">
                                        <img src={Php_s} loading="lazy" alt="PHP icom"
                                        />
                                        <div className="margin-left margin-xsmall">
                                            <div>{`${webtools[0].PHP}`}</div>
                                            </div></div>
                                            <div className="tech-item">
                                                <img src={bootstrap_s} loading="lazy" alt="Golang icon"/>
                                                <div className="margin-left margin-xsmall">
                                                    <div>{`${webtools[0].Bootstrap}`}</div>
                                                    </div></div>
                                                    <div className="tech-item">
                                                        <img src={mysql_s} loading="lazy" alt="SQL icon"
                                                        />
                                                        <div className="margin-left margin-xsmall">
                                                            <div>{`${webtools[0].MySQL}`}</div>
                                                            </div></div>
                                                            <div className="tech-item">
                                                                <img src={python_s} loading="lazy" alt="Python icon"/>
                                                                <div className="margin-left margin-xsmall">
                                                                    <div>{`${webtools[0].Python}`}</div>
                                                                    </div></div><div className="tech-item">
                                                                    <img src={ajax_s} loading="lazy" alt="C sharp icon"/>
                                                                    <div className="margin-left margin-xsmall"><div>{`${webtools[0].AJAX}`}</div></div></div><div className="tech-item">
                                                                        <img src={shopify_s} loading="lazy" alt="Django icon"/>
                                                                        <div className="margin-left margin-xsmall">
                                                                         
                                                                            <div>{`${webtools[0].Shopify}`}</div></div></div>
                                                                         
                                                                            <div className="tech-item">
                                                                                <img src={react_s} loading="lazy" alt="React logo"/>
                                                                                <div className="margin-left margin-xsmall"><div>{`${webtools[0].React}`}</div></div></div><div className="tech-item">
                                                                                    <img src={laravel_s} loading="lazy" alt="Laravel icon"/><div className="margin-left margin-xsmall">
                                                                                        <div>{`${webtools[0].Laravel}`}</div>
                                                                                        </div></div><div className="tech-item">
                          <img src={javascript_s} loading="lazy" alt="Javascript logo"/><div className="margin-left margin-xsmall">
                            <div>{`${webtools[0].JavaScript}`}</div>
                            </div></div>
                            <div className="tech-item">
                                <img src={woocommerce_s} loading="lazy" alt="Java logo"/>
                                <div className="margin-left margin-xsmall">
                                    <div>{`${webtools[0].Woocommerce}`}</div></div>
                                    </div>
                                    
                                            <div className="tech-item">
                                        <img src={Tailwind_CSS_s} loading="lazy" alt="Javascript logo"/>
                                        <div className="margin-left margin-xsmall">
                                        <div>{`${webtools[0].Tailwind}`}
                                     </div>
                                            </div>
                                            </div>

                                            <div className="tech-item">
                                        <img src={wordpress_s} loading="lazy" alt="Javascript logo"/>
                                        <div className="margin-left margin-xsmall">
                                        <div>{`${webtools[0].WordPress}`}
                                     </div>
                                            </div>
                                            </div>


                                            <div className="tech-item">
                                        <img src={node_js_s} loading="lazy" alt="Javascript logo"/>
                                        <div className="margin-left margin-xsmall">
                                        <div>{`${webtools[0].NodeJS}`}
                                     </div>
                                            </div>
                                            </div>

                                            
                                            
                                            </div>
                                            <div className="margin-top margin-medium text-center margin-bottom"><a href="#section-contact" data-w-id="697dde0e-39ce-7e31-2f75-4bde5931dc66" className="button w-button"> 
                            {props.page == "frontendherosection" ? `${webtools[0].btntxt}`
                                :
                                ""
                                 }
                                        </a></div>
                                            </motion.div>
                                            </div></div></div></div></div>
 
    {/* <div className="page-padding">
        <div className="container-large">
            <div className="padding-vertical_section"> */}
                {/* <div className="w-layout-grid tech-stack_layout">
                    <motion.div animate={animation} id="w-node-_780283a7-906d-7820-4305-3fbbc91e0a96-e874a0d5" className="tech-stack_list-wrapper">
                        <div className="tech-stack_list-container">
                            <div className="margin-right margin-xxlarge margin-remove">
                                <div className="tech-stack_list-item-wrapper">
                                    <div className="tech-stack_list-item_title">
                                        <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c41c579e2602c325e1c448_devlane-mobile-web-frontend-tech-stack-icon-apple-ios.svg" loading="lazy" alt="Apple iOS icon" />
                                        <div className="margin-left margin-small">
                                            <div className="text-size-large text-line-height-reduced"><span className="text-strong">
                                            {
                                        props.page == "frontendherosection" ? `${webtools[0].heading1}`
                                
                                       :
                                       `${webtools[0].heading1}`
                                        }
                                            </span> 
                                            <br/>
                                            {
                                        props.page == "frontendherosection" ? `${webtools[0].subheading1}`
                                
                                       :
                                       `${webtools[0].subheading1}`
                                        }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tech-stack_list-item_stack-wrapper margin-top margin-custom-mobile">
                                        <div className="margin-bottom margin-xsmall">
                                            <div className="tech-stack_list-item_stack_2">
                                                <div className="tech-stack_list-item_stack-item">
                                                    <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c41c5773a822317912f9cb_devlane-mobile-web-frontend-tech-stack-icon-swift.svg" loading="lazy" alt="Swift logo" />
                                                    <div className="margin-left margin-075rem-12px">
                                                        <div>
                                                        {
                                        props.page == "frontendherosection" ? `${webtools[0].HTML5}`
                                
                                       :
                                       `${webtools[0].HTML5}`
                                        }
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="margin-left margin-xsmall">
                                                    <div className="tech-stack_list-item_stack-item">
                                                        <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c41c5774ec0640376f1204_devlane-mobile-web-frontend-tech-stack-icon-bitrise.svg" loading="lazy" alt="Bitrise logo" />
                                                        <div className="margin-left margin-075rem-12px">
                                                            <div>
                                                            {
                                        props.page == "frontendherosection" ? `${webtools[0].CSS3}`
                                
                                       :
                                       `${webtools[0].CSS3}`
                                        }

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tech-stack_list-item_stack_2">
                                            <div className="tech-stack_list-item_stack-item">
                                                <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c41c57349da36be5e265e2_devlane-mobile-web-frontend-tech-stack-icon-fastlane.svg" loading="lazy" alt="Fastlane logo" />
                                                <div className="margin-left margin-075rem-12px">
                                                    <div>
                                                    {
                                        props.page == "frontendherosection" ? `${webtools[0].Bootstrap}`
                                
                                       :
                                       `${webtools[0].Bootstrap}`
                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="margin-left margin-xsmall">
                                                <div className="tech-stack_list-item_stack-item">
                                                    <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c41c57fcd8522b907c4649_devlane-mobile-web-frontend-tech-stack-icon-apple-objective-c.svg" loading="lazy" alt="Apple logo" />
                                                    <div className="margin-left margin-075rem-12px">
                                                        <div>
                                                        {
                                        props.page == "frontendherosection" ? `${webtools[0].Tailwind}`
                                
                                       :
                                       `${webtools[0].Tailwind}`
                                        }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                          
                          
                          
                            <div className="margin-top margin-small">
                                <div className="margin-left margin-xxlarge margin-remove">
                                    <div className="tech-stack_list-item-wrapper">
                                        <div className="tech-stack_list-item_title">
                                            <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c429637f4aa9549605c1c9_devlane-mobile-web-frontend-tech-stack-icon-android-development.svg" loading="lazy" alt="Android icon" />
                                            <div className="margin-left margin-small">
                                                <div className="text-size-large text-line-height-reduced"><span className="text-strong">
                                                {
                                        props.page == "frontendherosection" ? `${webtools[0].heading2}`
                                
                                       :
                                       `${webtools[0].heading2}`
                                        }
                                                    </span>             {
                                        props.page == "frontendherosection" ? `${webtools[0].subheading2}`
                                
                                       :
                                       `${webtools[0].subheading2}`
                                        }</div>
                                            </div>
                                        </div>
                                        <div className="tech-stack_list-item_stack-wrapper margin-top margin-custom-mobile">
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="tech-stack_list-item_stack_2">
                                                    <div className="tech-stack_list-item_stack-item">
                                                        <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c42962e69d70ed4ac150bd_devlane-mobile-web-frontend-tech-stack-icon-kotlin.svg" loading="lazy" alt="Kotlin logo" />
                                                        <div className="margin-left margin-075rem-12px">
                                                            <div>
                                                            {
                                        props.page == "frontendherosection" ? `${webtools[0].PHP}`
                                
                                       :
                                       `${webtools[0].PHP}`
                                        }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="margin-left margin-xsmall">
                                                        <div className="tech-stack_list-item_stack-item">
                                                            <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c4296319050471639119ef_devlane-mobile-web-frontend-tech-stack-icon-java.svg" loading="lazy" alt="Java logo" />
                                                            <div className="margin-left margin-075rem-12px">
                                                                <div>
                                                                {
                                        props.page == "frontendherosection" ? `${webtools[0].Laravel}`
                                
                                       :
                                       `${webtools[0].Laravel}`
                                        }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tech-stack_list-item_stack_2">
                                                <div className="tech-stack_list-item_stack-item">
                                                    <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c429633f82eb06625dfb7a_devlane-mobile-web-frontend-tech-stack-icon-firebase.svg" loading="lazy" alt="Firebase logo" />
                                                    <div className="margin-left margin-075rem-12px">
                                                        <div>     {
                                        props.page == "frontendherosection" ? `${webtools[0].WordPress}`
                                
                                       :
                                       `${webtools[0].WordPress}`
                                        }</div>
                                                    </div>
                                                </div>
                                                <div className="margin-left margin-xsmall">
                                                    <div className="tech-stack_list-item_stack-item">
                                                        <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c4296333dfbe44414ec2c3_devlane-mobile-web-frontend-tech-stack-icon-espresso.svg" loading="lazy" alt="Espresso logo" />
                                                        <div className="margin-left margin-075rem-12px">
                                                            <div>     {
                                        props.page == "frontendherosection" ? `${webtools[0].MySQL}`
                                
                                       :
                                       `${webtools[0].MySQL}`
                                        }</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="margin-top margin-small">
                                <div className="margin-right margin-xxlarge margin-remove">
                                    <div className="tech-stack_list-item-wrapper">
                                        <div className="tech-stack_list-item_title">
                                            <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c42962e146bf0d732b1a51_devlane-mobile-web-frontend-tech-stack-icon-cross-platform-development.svg" loading="lazy" alt="An icon representing cross-platform" />
                                            <div className="margin-left margin-small">
                                                <div className="text-size-large text-line-height-reduced"><span className="text-strong">     {
                                        props.page == "frontendherosection" ? `${webtools[0].heading3}`
                                
                                       :
                                       `${webtools[0].heading3}`
                                        }</span>      {
                                            props.page == "frontendherosection" ? `${webtools[0].subheading3}`
                                    
                                           :
                                           `${webtools[0].subheading3}`
                                            }</div>
                                            </div>
                                        </div>
                                        <div className="tech-stack_list-item_stack-wrapper margin-top margin-custom-mobile">
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="tech-stack_list-item_stack_2">
                                                    <div className="tech-stack_list-item_stack-item">
                                                        <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c429633f82eb65715dfb7b_devlane-mobile-web-frontend-tech-stack-icon-react-native.svg" loading="lazy" alt="React logo" />
                                                        <div className="margin-left margin-075rem-12px">
                                                            <div className="text-custom-reduce">
                                                            {
                                        props.page == "frontendherosection" ? `${webtools[0].React}`
                                
                                       :
                                       `${webtools[0].React}`
                                        }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="margin-left margin-xsmall">
                                                        <div className="tech-stack_list-item_stack-item">
                                                            <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c42963edbbc323ab5eb526_devlane-mobile-web-frontend-tech-stack-icon-flutter.svg" loading="lazy" alt="Flutter logo" />
                                                            <div className="margin-left margin-075rem-12px">
                                                                <div>
                                                                {
                                        props.page == "frontendherosection" ? `${webtools[0].NodeJS}`
                                
                                       :
                                       `${webtools[0].NodeJS}`
                                        }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tech-stack_list-item_stack_2">
                                                <div className="tech-stack_list-item_stack-item">
                                                    <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c429637f4aa9fd7805c1ca_devlane-mobile-web-frontend-tech-stack-icon-javascript.svg" loading="lazy" alt="Javascript logo" />
                                                    <div className="margin-left margin-075rem-12px">
                                                        <div>     {
                                        props.page == "frontendherosection" ? `${webtools[0].JavaScript}`
                                
                                       :
                                       `${webtools[0].JavaScript}`
                                        }</div>
                                                    </div>
                                                </div>
                                                <div className="margin-left margin-xsmall">
                                                    <div className="tech-stack_list-item_stack-item">
                                                        <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c42963999a015097f33bfd_devlane-mobile-web-frontend-tech-stack-icon-ionic.svg" loading="lazy" alt="Ionic logo" />
                                                        <div className="margin-left margin-075rem-12px">
                                                            <div>     {
                                        props.page == "frontendherosection" ? `${webtools[0].jQuery}`
                                
                                       :
                                       `${webtools[0].jQuery}`
                                        }</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="margin-top margin-small">
                                <div className="margin-left margin-xxlarge margin-remove">
                                    <div className="tech-stack_list-item-wrapper">
                                        <div className="tech-stack_list-item_title">
                                            <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c42963e69d702f78c150be_devlane-mobile-web-frontend-tech-stack-icon-progressive-web-development.svg" loading="lazy" alt="Progressive Web App icon" />
                                            <div className="margin-left margin-small">
                                                <div className="text-size-large text-line-height-reduced"><span className="text-strong">      {
                                        props.page == "frontendherosection" ? `${webtools[0].heading4}`
                                
                                       :
                                       `${webtools[0].heading4}`
                                        }</span>      {
                                            props.page == "frontendherosection" ? `${webtools[0].subheading4}`
                                    
                                           :
                                           `${webtools[0].subheading4}`
                                            }</div>
                                            </div>
                                        </div>
                                        <div className="tech-stack_list-item_stack-wrapper margin-top margin-custom-mobile">
                                            <div className="margin-bottom margin-xsmall">
                                                <div className="tech-stack_list-item_stack_2">
                                                    <div className="tech-stack_list-item_stack-item">
                                                        <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c429633f82eb65715dfb7b_devlane-mobile-web-frontend-tech-stack-icon-react-native.svg" loading="lazy" alt="React logo" />
                                                        <div className="margin-left margin-075rem-12px">
                                                            <div>
                                                            {
                                        props.page == "frontendherosection" ? `${webtools[0].AJAX}`
                                
                                       :
                                       `${webtools[0].AJAX}`
                                        }
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="margin-left margin-xsmall">
                                                        <div className="tech-stack_list-item_stack-item">
                                                            <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c4296331bc417a1e551f62_devlane-mobile-web-frontend-tech-stack-icon-vue.svg" loading="lazy" alt="Vue logo" />
                                                            <div className="margin-left margin-075rem-12px">
                                                                <div>     {
                                        props.page == "frontendherosection" ? `${webtools[0].Python}`
                                
                                       :
                                       `${webtools[0].Python}`
                                        }</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tech-stack_list-item_stack_2">
                                                <div className="tech-stack_list-item_stack-item">
                                                    <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c429639e26025441e20045_devlane-mobile-web-frontend-tech-stack-icon-typescript.svg" loading="lazy" alt="Typescript logo" />
                                                    <div className="margin-left margin-075rem-12px">
                                                        <div>     {
                                        props.page == "frontendherosection" ? `${webtools[0].Woocommerce}`
                                
                                       :
                                       `${webtools[0].Woocommerce}`
                                        }</div>
                                                    </div>
                                                </div>
                                                <div className="margin-left margin-xsmall">
                                                    <div className="tech-stack_list-item_stack-item">
                                                        <img src="https://uploads-ssl.webflow.com/612f8414a3e5101241cc446e/61c42963d36c282b24de60d5_devlane-mobile-web-frontend-tech-stack-icon-angular.svg" loading="lazy" alt="Angular logo" />
                                                        <div className="margin-left margin-075rem-12px">
                                                            <div>     {
                                        props.page == "frontendherosection" ? `${webtools[0].Shopify}`
                                
                                       :
                                       `${webtools[0].Shopify}`
                                        }</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                   
                    <motion.div animate={animation2} className="tech-stack_content-wrapper">
                        <div data-w-id="5e0a7a18-9edb-24a5-e6fc-fa741e7ebe20" className="section-title">Current Technologies</div>
                        <h2 data-w-id="5e0a7a18-9edb-24a5-e6fc-fa741e7ebe22">Technologies and frameworks we work with</h2>
                        <div className="margin-top margin-medium">
                            <p data-w-id="5e0a7a18-9edb-24a5-e6fc-fa741e7ebe25" className="text-size-large text-color-light">
                                Our experience with these tech stacks are driven by the experience we have working across multiple industries, and based on the highest demand in the market.
                            </p>
                        </div>
                    </motion.div>
                </div> */}
            {/* </div>
        </div>
    </div> */}
</section>





</>
  )
}

export default FrontendTechnologies
