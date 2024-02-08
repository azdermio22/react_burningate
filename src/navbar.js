import {useEffect} from "react";

export const Navbar = () => {
    return(
        <div>
                    <nav data-aos="fade-down" data-aos-duration="2000" data-aos-delay="500" className="navbar-b container-fluid">
          <div className="row h-100 w-100">
          <div className="position-relative d-flex justify-content-left align-items-center col-6">
            <div className='brand_container'>
              <div className="logo nav_logo_setting"></div>
            <p id="text_brand" className="text">BURNINGATE</p>
            </div>
            </div>
          <div className="col-6">
            <div className="row h-100 w-100 justify-content-center align-items-center">
            <div id="home" className='col-2 h-100'><a  className="text-decoration-none" href='/'><button className='text-white nav_link'>HOME</button></a></div>
              <div id="about_us" className='col-2 h-100'><button className='text-white nav_link'>ABOUT-US</button></div>
              <div id="course" className='col-2 h-100'><button className='text-white nav_link'>COURSE</button></div>
              <div id="campionship" className='col-2 h-100'><a className="text-decoration-none" href='/campionship'><button className='text-white nav_link'>CAMPIONSHIP</button></a></div>
            </div>
          </div>
          </div>
        </nav>


                            <nav data-aos="fade-down" data-aos-duration="2000" data-aos-delay="500" className="smart_nav p-0">
            <div className='h-100'><a  className="text-decoration-none" href='/'><button className='text-white nav_link'><div className="logo"></div>HOME</button></a></div>
              <div className='h-100'><button className='text-white nav_link'>ABOUT-US</button></div>
              <div className='h-100'><button className='text-white nav_link'>COURSE</button></div>
              <div className='h-100'><a className="text-decoration-none" href='/campionship'><button className='text-white nav_link'>CAMPIONSHIP</button></a></div>
        </nav>
        </div>
    );
}