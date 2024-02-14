import {useEffect} from "react";

export const Navbar = () => {
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      document.querySelector('#home').style.animationName = "nav_link1";
      document.querySelector('#about_us').style.animationName = "nav_link2";
      document.querySelector('#course').style.animationName = "nav_link3";
      document.querySelector('#campionship').style.animationName = "nav_link4";
      document.querySelector('.nav_logo_setting').style.animationName = "logo";
      document.querySelector('.brand_container').style.animationName = "brand";
      document.querySelector('#text_brand').style.animationName = "text_brand";
    })
  },[]);
    return(
        <div>
                    <nav data-aos="fade-down" data-aos-duration="2000" data-aos-delay="300" className="navbar-b container-fluid">
                      <div className="logo nav_logo_setting"></div>
          <div className="row h-100 w-100 ms-3 overflow-hidden">
          <div className="position-relative d-flex justify-content-left align-items-center col-6">
            <div className='brand_container'>
            <p id="text_brand" className="text">BURNINGATE</p>
            </div>
            </div>
          <div className="col-6">
            <div className="row h-100 w-100 justify-content-center align-items-center">
            <div id="home"  className='col-2 h-100'><a  className="text-decoration-none" href='/'><button className='text-white nav_link'>HOME</button></a></div>
              <div id="about_us"  className='col-2 h-100'><button className='text-white nav_link'>ABOUT-US</button></div>
              <div id="course"  className='col-2 h-100'><button className='text-white nav_link'>COURSE</button></div>
              <div id="campionship"  className='col-2 h-100'><a className="text-decoration-none" href='/campionship'><button className='text-white nav_link'>CAMPIONSHIP</button></a></div>
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