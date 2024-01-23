import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { People, PinMap, ClipboardCheck} from 'react-bootstrap-icons';

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
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12'><p className='info_text'>
            Da più di 3 anni abbiamo certificato oltre 240 istruttori, organizzato + 6 eventi nazionali e internazionali,
             e all’attivo contiamo + 18 centri affiliati sparsi un po’ per lo stivale. La nostra forza e il nostro orgoglio
              è data dall’unione e dalla condivisione del movimento sulla base di una fitta rete di partner. Persone come noi
               che hanno sposato la filosofia e i valori in cui crediamo, permettendo a questa straordinaria disciplina di
                diffondersi a macchia d’olio in ogni club, parco o circuito fitness di zona. Siamo fieri di ogni singolo membro
                 a cui apertamente va il nostro più forte “GRAZIE”.
              </p></div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-4 d-flex justify-content-center align-items-center'>
            <div className='info_data'>
            <People color="red" size={50} />
            <p className='info_data_numbers'>+1000</p>
            <p className='info_data_text text'>trained athletes</p>
              </div>
              </div>
            <div className='col-12 col-md-4  d-flex justify-content-center align-items-center'>
            <div className='info_data'>
            <PinMap color="red" size={50} />
            <p className='info_data_numbers'>+23</p>
            <p className='info_data_text text'>branches in the world</p>
              </div>
              </div>
            <div className='col-12 col-md-4  d-flex justify-content-center align-items-center'>
            <div className='info_data'>
            <ClipboardCheck color="red" size={50} />
            <p className='info_data_numbers'>+564</p>
            <p className='info_data_text text'>trained instructors</p>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-6 d-flex justify-content-center align-items-center'>
              <p className='principles_text'>
              In qualità di brand tra i più noti in Italia in ambito Fitness, il nostro desiderio più forte
               è coinvolgere e ispirare quante più persone possibili, da questo momento fino ai prossimi decenni,
                a vivere in forma e stare insalute semplicemente allenando e rispettando il proprio corpo.
E ciò è possibile solo attraverso una diffusione capillare della conoscenza e al lavoro di squadra genuino
 intrapreso con i partner affiliati al nostro network da nord a sud. Crediamo nell’entusiasmo, nell’energia e
  nella passione al fine di ispirare, contagiare e motivare le persone alla salute e al benessere fisico per vivere
   alla grande.
              </p>
            </div>
            <div className='col-6 d-flex align-items-center flex-column'>
              <div className='w-75'>
              <div className='pointed_list execess_top'>RISPETTO TRA LE PERSONE</div>
              <div className='pointed_list'>ISPIRARE E MOTIVARE GLI ALTRI</div>
              <div className='pointed_list'>MIGLIORARE SE STESSI SEMPRE E COMUNQUE</div>
              <div className='pointed_list'>ESSERE LEALI E CORRETTI</div>
              <div className='pointed_list'>UMILTÀ E SPIRITO DI SACRIFICIO</div>
              <div className='pointed_list'>INFONDERE GIOIA E FIDUCIA</div>
              <div className='pointed_list'>ESSERE COLLABORATIVI E PROPOSITIVI</div>
              <div className='pointed_list'>AVERE FOCUS E DISCIPLINA</div>
              <div className='pointed_list'>LEADERSHIP E GUIDA AL CAMBIAMENTO</div>
              <div className='pointed_list execess_bottom'>SUPERARE I PROPRI LIMITI</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
