// import{ logo} from '../assets';
import{ navLinks } from '../constants'

const Navbar = () => {
      return (        
        
        <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="nav_component w-nav">
        <nav className="page-padding">
            <div className="nav-container">
                <a href="/" aria-current="page" className="nav_brand-link w-nav-brand w--current">
                    <img src="assets/img/61362c6a7f809d7aea90a12d_devlane-logo.svg" loading="lazy" alt="Devlane logo" className="image" />
                </a>
                <nav role="navigation" className="nav_menu w-nav-menu">
                {navLinks.map((nav) =>(
        
                    <a key={nav.id} href={`#${nav.id}`} className="nav_link w-nav-link">{nav.title}</a>
                
                   
                    ))}
                   
                    {/* <div data-hover="true" data-delay="0" className="nav-dropdown-closed w-dropdown">
                        <div className="w-dropdown-toggle">
                            <div className="w-icon-dropdown-toggle"></div>
                            <div>Expertise</div>
                        </div>
                        <nav className="nav-dropdown w-dropdown-list">
                            <a href="" className="w-dropdown-link">Mobile &amp; Web Front End Development</a><a href="/backend-development" className="w-dropdown-link">Backend Development</a>
                            <a href="" className="w-dropdown-link">Software Testing and QA</a><a href="/data-engineering" className="w-dropdown-link">Data Engineering</a>
                        </nav>
                    </div> */}
                    {/* <a href="" className="nav_link w-nav-link">About Us</a>
                    <a href="/our-work" className="nav_link w-nav-link">Our Work</a><a href="/careers" className="nav_link w-nav-link">Careers</a>
                    <a href="" className="nav_link w-nav-link">Blog</a> */}
                    <div className="main-nav_button-wrapper"><a href="#section-contact" className="nav-button w-button">Let&#x27;s talk</a></div>
                </nav>
                <div className="nav_menu-button w-nav-button"><div className="icon w-icon-nav-menu"></div></div>
            </div>
        </nav>
    </div>
    )
  }
  
  export default Navbar