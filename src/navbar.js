export const Navbar = () => {
    return(
        <div>
                    <div className="navbar-b container-fluid">
          <div className="row w-100 h-100">
          <div className="position-relative d-flex justify-content-left align-items-center col-6">
            <div className=' overflow-hidden mt-3'>
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
        </div>
        </div>
    );
}