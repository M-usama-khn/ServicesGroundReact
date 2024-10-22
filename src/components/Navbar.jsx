import{logo} from '../assets';
import { Link } from "react-router-dom";
import{ navLinks } from '../constants'
import {useState} from 'react';


const Navbar = () => {
    const [nav, setnav] = useState(1);
    const [tab, settab] = useState(1);
    
    function setnavvalues (){
        setnav(1); settab(1);
    }
   
      return (        
        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="nav_component w-nav">
       <nav className="page-padding header">
            
            <div className="nav-container">
                <Link to ="/" aria-current="page" className="nav_brand-link w-nav-brand w--current">
                    <img src={logo} loading="lazy" alt="Devlane logo" className="image" />
                </Link>
                <nav role="navigation" className="nav_menu w-nav-menu">
                {navLinks.map((nav) =>(
                    nav.id == "experties" ? 
                     <div key= {nav.id+10} data-hover="true" data-delay="0" className="nav-dropdown-closed w-dropdown">
                    <div key= {nav.id+11} className="w-dropdown-toggle">
                        <div key= {nav.id+12} className="w-icon-dropdown-toggle">

                        </div>
                        <div key= {nav.id+13}>{nav.title}</div>
                    </div>
                    <nav key= {nav.id} className="nav-dropdown w-dropdown-list">
                        <Link key= {nav.id+1} to ={`/${nav.sublink1}`} className="w-dropdown-link">{nav.submenutitle1}</Link>
                        <Link key= {nav.id+2} to={`/${nav.sublink2}`} className="w-dropdown-link">{nav.submenutitle2}</Link>
                        <Link key= {nav.id+3} to={`/${nav.sublink3}`} className="w-dropdown-link">{nav.submenutitle3}</Link>
                        <Link key= {nav.id+4} to={`/${nav.sublink4}`} className="w-dropdown-link">{nav.submenutitle4}</Link>
                        <Link key= {nav.id+5} to={`/${nav.sublink5}`} className="w-dropdown-link">{nav.submenutitle5}</Link>
                        <Link key= {nav.id+6} to={`/${nav.sublink6}`} className="w-dropdown-link">{nav.submenutitle6}</Link>
                        <Link key= {nav.id+7} to={`/${nav.sublink7}`} className="w-dropdown-link">{nav.submenutitle7}</Link>
                        <Link key= {nav.id+8} to={`/${nav.sublink8}`} className="w-dropdown-link">{nav.submenutitle8}</Link>
                    </nav>
                </div> : 
                 nav.id == "blog" ?
                 <a  key ={nav.id+14} href = "/blog" className="nav_link w-nav-link">{nav.title}</a>
                 :
                <Link to ={`/${nav.id}`} key ={nav.id+15} className="nav_link w-nav-link">{nav.title}</Link>
                    
                    
                  ))}
                    <div className="main-nav_button-wrapper">
                    <Link to ="/book-an-appointment" className="nav-button w-button">Let&#x27;s talk</Link></div>
                </nav>
                <div className="nav_menu-button w-nav-button">
                    <div className="icon w-icon-nav-menu"  onClick={() => nav == 1 ? setnav(0) : setnav(1)}>

                    </div>
                
                </div>
            </div>
        </nav>
        <div  className="w-nav-overlay " data-wf-ignore="" id="w-nav-overlay-0" style={{ height: "1120px" , display : `${nav == 1 ? "none" : "block"}`}}  >
            <nav role="navigation" className="nav_menu w-nav-menu"  data-nav-menu-open="">
            {navLinks.map((nav) =>(
                    nav.id == "experties" ? 
                     <div key= {nav.id} data-hover="true" data-delay="0" className="nav-dropdown-closed w-dropdown">
                    <div onClick={() => tab == 1 ? settab(0) : settab(1)} className="w-dropdown-toggle w--nav-dropdown-toggle-open">
                        <div   className="w-icon-dropdown-toggle"></div>
                        <div>{nav.title}</div>
                    </div>
                    <nav onClick ={() => setnavvalues()} className={`nav-dropdown w-dropdown-list`} style = {{"display" : tab ==1 ? "none" : "block"}}>
                        <Link key= {nav.id+1} to ={`/${nav.sublink1}`} className="w-dropdown-link">{nav.submenutitle1}</Link>
                        <Link key= {nav.id+2} to={`/${nav.sublink2}`} className="w-dropdown-link">{nav.submenutitle2}</Link>
                        <Link key= {nav.id+3} to={`/${nav.sublink3}`} className="w-dropdown-link">{nav.submenutitle3}</Link>
                        <Link key= {nav.id+4} to={`/${nav.sublink4}`} className="w-dropdown-link">{nav.submenutitle4}</Link>
                        <Link key= {nav.id+5} to={`/${nav.sublink5}`} className="w-dropdown-link">{nav.submenutitle5}</Link>
                        <Link key= {nav.id+6} to={`/${nav.sublink6}`} className="w-dropdown-link">{nav.submenutitle6}</Link>
                        <Link key= {nav.id+7} to={`/${nav.sublink7}`} className="w-dropdown-link">{nav.submenutitle7}</Link>
                        <Link key= {nav.id+8} to={`/${nav.sublink8}`} className="w-dropdown-link">{nav.submenutitle8}</Link>
                    </nav>
                </div> : 
                 nav.id == "blog" ?
                 <a  key ={nav.id} href = "https://servicesground.com/blog" className="nav_link w-nav-link w--nav-link-open">{nav.title}</a>
                 :
                 nav.id == "about" ?
                <Link to ={`/${nav.id}`} key ={nav.id} onClick={() => setnavvalues()} className="nav_link w-nav-link w--nav-link-open">{nav.title}</Link>
                :
                    ""
                    
                  ))}
              
                    <div className="main-nav_button-wrapper">
                    <Link to ="/book-an-appointment" className="nav-button w-button">Let&#x27;s talk</Link></div>
                            </nav>


                         
                            </div>
    </div>
    )
  }
  
  export default Navbar

