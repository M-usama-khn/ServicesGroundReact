import React from 'react';
import { industrybackground } from '../constants'
import {motion , useAnimation} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Lottie from 'react-lottie';
import ecom from '../icons/ecommerce.json';
import restaurant from '../icons/restaurant.json'
import real_estate from '../icons/real_estate.json'
import construction from '../icons/construction.json'
import stock from '../icons/stock_and_crypto.json'
import fitness from '../icons/Fitness_Wellness.json'
import esports from '../icons/esports.json'
import digital from '../icons/digital_marketing.json'
import new_and_media from '../icons/new_and_media.json'
const Industries = (props) => {
    const news = {
        loop: true,
        autoplay: true,
        animationData: new_and_media,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const digitals = {
        loop: true,
        autoplay: true,
        animationData: digital,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const esportss = {
        loop: true,
        autoplay: true,
        animationData: esports,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const ecoms = {
        loop: true,
        autoplay: true,
        animationData: ecom,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const resturants = {
        loop: true,
        autoplay: true,
        animationData: restaurant,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const real_estates = {
        loop: true,
        autoplay: true,
        animationData: real_estate,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const constructions = {
        loop: true,
        autoplay: true,
        animationData: construction,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const stocks = {
        loop: true,
        autoplay: true,
        animationData: stock,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
      const finesss = {
        loop: true,
        autoplay: true,
        animationData: fitness,
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
    <div  id="section-industries"  className={`section-industries ${props.page == "homeherosection" ? "bg-dark":""}` } style={{overflow : "hidden"}}>
    <section ref= {ref} id="section-industry-background" className="page-padding">
        <motion.div animate={animation} className="container-large">
            <div className="padding-vertical_section is-trigger">
                <div data-w-id="261a726b-44fe-d229-a72d-bd004f532d6f" className="w-layout-grid section-2-col-05fr-1fr">
                    <div className="services-content">
                        <div data-w-id="261a726b-44fe-d229-a72d-bd004f532d71" className="section-title">{industrybackground[0].title}</div>
                        <h2 data-w-id="261a726b-44fe-d229-a72d-bd004f532d73"><strong>{industrybackground[0].heading}</strong></h2>
                        <div className="margin-top margin-medium">
                            <p data-w-id="261a726b-44fe-d229-a72d-bd004f532d77" className="text-size-large text-color-light">{industrybackground[0].pragraph} </p>
                        </div>
                    </div>
                    <div data-w-id="261a726b-44fe-d229-a72d-bd004f532d79" className="industries-image-mask">
                        <div className="w-layout-grid grid-2">
                            <div className="tf_column">
                                <div
                                    className="icon-lottie-number"
                                    data-w-id="a9636f30-54d2-48eb-8950-df164509d261"
                                    data-animation-type="lottie"
                                    data-src="../icons/ecom.json"
                                    data-loop="1"
                                    data-direction="1"
                                    data-autoplay="1"
                                    data-is-ix2-target="0"
                                    data-renderer="svg"
                                    data-default-duration="2.0416666666666665"
                                    data-duration="0"
                                >
                                  <Lottie  options={
                                  props.page == "homeherosection" ? ecoms
                                  :
                                 "" }/>
                                 </div>
                                <h3 className="text-color-light"><strong className="bold-text">{industrybackground[0].image1}</strong></h3>
                            </div>
                            <div className="tf_column">
                                <div
                                    className="icon-lottie-number"
                                    data-w-id="8decf87f-380e-85b2-7807-59d4e14b920c"
                                    data-animation-type="lottie"
                                    data-loop="1"
                                    data-direction="1"
                                    data-autoplay="1"
                                    data-is-ix2-target="0"
                                    data-renderer="svg"
                                    data-default-duration="1.1666666666666667"
                                    data-duration="0"
                                >
                                 <Lottie  options={
                                  props.page == "homeherosection" ? resturants
                                  :
                                 "" }/>
                                 </div>
                                <h3 className="text-color-light"><strong className="bold-text">{industrybackground[0].image2}</strong></h3>
                            </div>
                           <div className="tf_column">
                                 <div
                                    className="icon-lottie-number"
                                    data-w-id="669fcd7a-402a-da6f-0698-b72090bdf6cf"
                                    data-animation-type="lottie"
                                    data-loop="1"
                                    data-direction="1"
                                    data-autoplay="1"
                                    data-is-ix2-target="0"
                                    data-renderer="svg"
                                    data-default-duration="1.5416666666666667"
                                    data-duration="0"
                                >

                                
                                    <Lottie  options={
                                  props.page == "homeherosection" ? real_estates
                                  :
                                 "" }/>
                                 </div>
                                <h3 className="text-color-light"><strong className="bold-text">{industrybackground[0].image3}</strong></h3>
                            </div>
                            <div className="tf_column">
                                <div
                                    className="icon-lottie-number"
                                    data-w-id="edeb6be0-5c94-cccc-ef73-3c34b20af32d"
                                    data-animation-type="lottie"
                                    data-loop="1"
                                    data-direction="1"
                                    data-autoplay="1"
                                    data-is-ix2-target="0"
                                    data-renderer="svg"
                                    data-default-duration="0.8333333333333334"
                                    data-duration="0"
                                >
                                 <Lottie  options={
                                  props.page == "homeherosection" ? constructions
                                  :
                                 "" }/>
                                 </div>
                                <h3 className="text-color-light"><strong className="bold-text">{industrybackground[0].image4}</strong></h3>
                            </div>
                            <div className="tf_column">
                                <div
                                    className="icon-lottie-number"
                                    data-w-id="0fbd7a97-c1d6-bafc-9cc4-f9e1e2ca4f31"
                                    data-animation-type="lottie"
                                    data-loop="1"
                                    data-direction="1"
                                    data-autoplay="1"
                                    data-is-ix2-target="0"
                                    data-renderer="svg"
                                    data-default-duration="1.07"
                                    data-duration="0"
                                >
                                 <Lottie  options={
                                  props.page == "homeherosection" ? stocks
                                  :
                                 "" }/>
                                 </div>
                                <h3 className="text-color-light"><strong className="bold-text">{industrybackground[0].image5}</strong></h3>
                            </div>
                            <div className="tf_column">
                                <div
                                    className="icon-lottie-number"
                                    data-w-id="2c823c8c-e207-6871-9137-2087eef60a49"
                                    data-animation-type="lottie"
                                    data-loop="1"
                                    data-direction="1"
                                    data-autoplay="1"
                                    data-is-ix2-target="0"
                                    data-renderer="svg"
                                    data-default-duration="3.05"
                                    data-duration="0"
                                >
                                  <Lottie  options={
                                  props.page == "homeherosection" ? finesss
                                  :
                                 "" }/>
                                 </div>
                                <h3 className="text-color-light"><strong className="bold-text">{industrybackground[0].image6}</strong></h3>
                            </div>
                            <div className="tf_column">
                                <div
                                    className="icon-lottie-number"
                                    data-w-id="0775e92c-3a55-87bb-92aa-d4bdd6a649da"
                                    data-animation-type="lottie"
                                    data-loop="1"
                                    data-direction="1"
                                    data-autoplay="1"
                                    data-is-ix2-target="0"
                                    data-renderer="svg"
                                    data-default-duration="2.533333333333333"
                                    data-duration="0"
                                >
                                  <Lottie  options={
                                  props.page == "homeherosection" ? esportss
                                  :
                                 "" }/>
                                 </div>
                                <h3 className="text-color-light"><strong className="bold-text">{industrybackground[0].image7}</strong></h3>
                            </div>
                            <div className="tf_column">
                                <div
                                    className="icon-lottie-number"
                                    data-w-id="0b30345c-d6e9-dc27-82eb-bd87c7b45a70"
                                    data-animation-type="lottie"
                                    data-loop="1"
                                    data-direction="1"
                                    data-autoplay="1"
                                    data-is-ix2-target="0"
                                    data-renderer="svg"
                                    data-default-duration="1.0416666666666667"
                                    data-duration="0"
                                >
                                     <Lottie  options={
                                  props.page == "homeherosection" ? digitals
                                  :
                                 "" }/>
                                 </div>
                                <h3 className="text-color-light"><strong className="bold-text">{industrybackground[0].image8}</strong></h3>
                            </div>
                            <div className="tf_column">
                                <div
                                    className="icon-lottie-number"
                                    data-w-id="ef028618-90c7-532d-be42-743038f382f6"
                                    data-animation-type="lottie"
                                    data-loop="1"
                                    data-direction="1"
                                    data-autoplay="1"
                                    data-is-ix2-target="0"
                                    data-renderer="svg"
                                    data-default-duration="1.19"
                                    data-duration="0"
                                >
                                  <Lottie  options={
                                  props.page == "homeherosection" ? news
                                  :
                                 "" }/>
                                 </div>
                                <h3 className="text-color-light"><strong className="bold-text">{industrybackground[0].image9}</strong></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
</div>
  )
}

export default Industries
