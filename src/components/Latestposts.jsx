import React, { Component, useEffect , useState} from "react";
import { industryblog } from '../constants';
import { java, deeplearing, RegressionTesting, dataEngineers } from '../assets';
import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';


const Latestposts = (props) => {
       const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
      fetch("https://servicesground.com/blog/wp-json/wp/v2/posts?_embed&per_page=4")
        .then((res) => res.json())
        .then(
          (res) => {
            setIsLoaded(true);
            setItems(res);
            // console.log(res);
           
          },
  
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );
    }, []);
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
        
        <section ref={ref} id="section-latest-posts"  className={`section-latest-posts ${props.page == "homeherosection" ? "bg-dark":""}` }
        style={{
            overflow : "hidden" 
       
        }}>
            <motion.div animate={animation}className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical_section">
                        <div className="margin-bottom margin-large">
                            <h2><strong>{industryblog[0].heading}</strong></h2>
                        </div>
                        <div className="latest-posts-wrapper w-dyn-list">
                            <div role="list" className="latest-posts-list w-dyn-items">
                            {items.map((item) => (
                                <div key={item.id} role="listitem" className="w-dyn-item">
                                    <div className="latest-post-item-wrapper">
                                  
                                        <img
                                            // src="https://servicesground.com/wp-content/uploads/2020/12/Install-WordPress-min.jpg"
                                            src={(item._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url)}
                                            loading="lazy"
                                            width="193"
                                            alt="How big companies are using JavaScript?"
                                            className="latest-post-item-image"
                                        />
                                        <div className="margin-left margin-medium latst-post-item-custom-margin-mobile">
                                            <div className="text-title-small-uppercase text-color-accent-shade">
                                                {/* WordPress */}
                                                {(item._embedded['wp:term'][0][0].name)}
                                                </div>
                                            <a href= {(item.link)} className="font-weight-bold text-size-large linke-height-1-4 text-color-light">
                                                {/* Install WordPress In Digital Ocean Free | Step By Step */}
                                                {item.title.rendered}
                                                </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                              {/* <div role="listitem" className="w-dyn-item">
                                    <div className="latest-post-item-wrapper">
                                        <img
                                            src="https://servicesground.com/wp-content/uploads/2020/12/php-script-min.jpg"
                                            loading="lazy"
                                            width="193"
                                            alt="Deep Learning vs. Machine Learning vs. Neural Networks: Differences"
                                            sizes="(max-width: 479px) 83vw, (max-width: 767px) 37vw, (max-width: 991px) 40vw, 193px"
                                            // srcSet="
                                            //     assets/img/6320966b93e491d8b6e706db_post-vs-24%20(1)-p-500.png 500w,
                                            //     assets/img/6320966b93e491d8b6e706db_post-vs-24%20(1).png       600w
                                            // "
                                            className="latest-post-item-image"
                                        />
                                        <div className="margin-left margin-medium latst-post-item-custom-margin-mobile">
                                            <div className="text-title-small-uppercase text-color-accent-shade">Web Development</div>
                                            <a href="https://servicesground.com/how-to-host-any-php-script-online-step-by-step/" className="font-weight-bold text-size-large linke-height-1-4 text-color-light">How To Host Any PHP Script Online | Step By Step</a>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="w-dyn-item">
                                    <div className="latest-post-item-wrapper">
                                        <img
                                            src="https://servicesground.com/wp-content/uploads/2020/11/How-To-Build-And-Configure-Mautic-3-Email-Marketing-System-min-1.jpg"
                                            loading="lazy"
                                            width="193"
                                            alt="What is a Regression Testing? Learn the Basics"
                                            sizes="(max-width: 479px) 83vw, (max-width: 767px) 37vw, (max-width: 991px) 40vw, 193px"
                                           
                                            className="latest-post-item-image"
                                        />
                                        <div className="margin-left margin-medium latst-post-item-custom-margin-mobile">
                                            <div className="text-title-small-uppercase text-color-accent-shade">Email Marketing</div>
                                            <a href="https://servicesground.com/how-to-build-and-configure-mautic-3-email-marketing-system/" className="font-weight-bold text-size-large linke-height-1-4 text-color-light">Build And Configure Mautic 3 Email Marketing System</a>
                                        </div>
                                    </div>
                                </div>
                                <div role="listitem" className="w-dyn-item">
                                    <div className="latest-post-item-wrapper">
                                        <img
                                            src="https://servicesground.com/wp-content/uploads/2020/12/Emblem-Logos.jpg"
                                            loading="lazy"
                                            width="193"
                                            alt="The World of Data Engineers: Understanding the Basics"
                                            sizes="(max-width: 479px) 83vw, (max-width: 767px) 37vw, (max-width: 991px) 40vw, 193px"
                                          
                                            className="latest-post-item-image"
                                        />
                                        <div className="margin-left margin-medium latst-post-item-custom-margin-mobile">
                                            <div className="text-title-small-uppercase text-color-accent-shade">Graphic design</div>
                                            <a href="https://servicesground.com/what-are-the-emblem-logos/" className="font-weight-bold text-size-large linke-height-1-4 text-color-light">What Are The Emblem Logos?</a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>

    )
}


export default Latestposts
