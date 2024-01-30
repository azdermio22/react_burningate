import {useEffect} from "react";

export const Navbar = () => {
  // useEffect(()=>{
  //   let nav = document.querySelector('nav');

  //   window.addEventListener('scroll', ()=>{
  //     let rows = nav.querySelectorAll('.row');
  //     rows.forEach((row)=> {
  //       row.style.flexDirection = "column";
  //     });
  //   })
  // },[])
    return(
        <div>
                    <nav data-aos="fade-down" data-aos-duration="2000" data-aos-delay="500" className="navbar-b container-fluid">
          <div className="row h-100 w-100">
          <div className="position-relative d-flex justify-content-left align-items-center col-6">
            <div className='mt-3'>
            <p className="text_logo text">BURNINGATE</p>
            </div>
            </div>
          <div className="col-6">
            <div className="row h-100 w-100 justify-content-center align-items-center">
            <div className='col-2 h-100'><a  className="text-decoration-none" href='/'><button className='text-white nav_link'>HOME</button></a></div>
              <div className='col-2 h-100'><button className='text-white nav_link'>ABOUT-US</button></div>
              <div className='col-2 h-100'><button className='text-white nav_link'>COURSE</button></div>
              <div className='col-2 h-100'><a className="text-decoration-none" href='/campionship'><button className='text-white nav_link'>CAMPIONSHIP</button></a></div>
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