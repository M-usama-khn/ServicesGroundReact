import React from 'react';
import { recognitions } from '../constants';
import Marquee from "react-fast-marquee";
import { appfutura, clutch, development, itRateco, laravelDevelopment, mobileAppDevelopment, SelectedFirms, software, topRated, webDevelpment, weDelever } from '../assets'

const Recognition = () => {
    return (
        <section id="section-recognitions" className="section-recognitions-maquee">
            <div className="page-padding">
                <div className="container-large">
                    <div className="padding-vertical_section">
                        <div className="layout-centered">
                            <h2 data-w-id="a2e4bf78-16c4-50ea-18b1-39c1e821e3e3"><strong>{recognitions[0].title}</strong></h2>
                        </div>
                        <div className="margin-top margin-large">
                            <Marquee className="marquee_holder-block" pauseOnHover>
                                <a href="#" target="_blank" className="w-inline-block">
                                    <img
                                        src={appfutura}
                                        loading="lazy"
                                        alt="TopSoftwareCompanies.co"
                                        className="small-marquee-image"
                                    />
                                </a>
                                <a href="#" target="_blank" className="w-inline-block">
                                    <img
                                        src={clutch}
                                        loading="lazy"
                                        alt="TopSoftwareCompanies.co"
                                        className="small-marquee-image"
                                    />
                                </a>
                                <a href="#" target="_blank" className="w-inline-block">
                                    <img
                                        src={development}
                                        loading="lazy"
                                        alt="TopSoftwareCompanies.co"
                                        className="small-marquee-image"
                                    />
                                </a>
                                <a href="#" target="_blank" className="w-inline-block">
                                    <img
                                        src={itRateco}
                                        loading="lazy"
                                        alt="TopSoftwareCompanies.co"
                                        className="small-marquee-image"
                                    />
                                </a>
                                <a href="#" target="_blank" className="w-inline-block">
                                    <img
                                        src={laravelDevelopment}
                                        loading="lazy"
                                        alt="TopSoftwareCompanies.co"
                                        className="small-marquee-image"
                                    />
                                </a>
                                <a href="#" target="_blank" className="w-inline-block">
                                    <img
                                        src={mobileAppDevelopment}
                                        loading="lazy"
                                        alt="TopSoftwareCompanies.co"
                                        className="small-marquee-image"
                                    />
                                </a>
                                <a href="#" target="_blank" className="w-inline-block">
                                    <img
                                        src={SelectedFirms}
                                        loading="lazy"
                                        alt="TopSoftwareCompanies.co"
                                        className="small-marquee-image"
                                    />
                                </a>
                                <a href="#" target="_blank" className="w-inline-block">
                                    <img
                                        src={software}
                                        loading="lazy"
                                        alt="TopSoftwareCompanies.co"
                                        className="small-marquee-image"
                                    />
                                </a>
                                <a href="#" target="_blank" className="w-inline-block">
                                    <img
                                        src={topRated}
                                        loading="lazy"
                                        alt="TopSoftwareCompanies.co"
                                        className="small-marquee-image"
                                    />
                                </a>
                                <a href="#" target="_blank" className="w-inline-block">
                                    <img
                                        src={webDevelpment}
                                        loading="lazy"
                                        alt="TopSoftwareCompanies.co"
                                        className="small-marquee-image"
                                    />
                                </a><a href="#" target="_blank" className="w-inline-block">
                                    <img
                                        src={weDelever}
                                        loading="lazy"
                                        alt="TopSoftwareCompanies.co"
                                        className="small-marquee-image"
                                    />
                                </a>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recognition
