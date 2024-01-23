import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className='filter'></div>
        <div className="navbar-b container-fluid">
          <div className="row w-100 h-100">
          <div className="position-relative d-flex justify-content-center align-items-center col-6">
            <div className=' overflow-hidden'>
            <p className="text_logo text">BURNINGATE</p>
            </div>
            </div>
          <div className="col-6">
            <div className="row h-100 w-100 justify-content-center align-items-center">
            <div className='col-3 h-100'><button className='text nav_link'>home</button></div>
              <div className='col-3 h-100'><button className='text nav_link'>about-us</button></div>
              <div className='col-3 h-100'><button className='text nav_link'>course</button></div>
              <div className='col-3 h-100'><button className='text nav_link'>campionship</button></div>
            </div>
          </div>
          </div>
        </div>
        <div className="title_block">
        <h1 className="text title">BURNINGATE</h1>
        <h2 className="text subtitle">DEVELOP YOUR STRENGTH</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
