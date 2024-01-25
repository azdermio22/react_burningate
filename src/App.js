import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { People, PinMap, ClipboardCheck} from 'react-bootstrap-icons';
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {DataCard} from './dataCard.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Campionship} from "./Campionship.js";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    let home_link = document.querySelector('#home');
    home_link.addEventListener('click',()=>{
      window.scrollTo(100, 0);
    })
  }, []);
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/campionship" element={<Campionship/>}/>
          </Routes>
        </Router>
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

      <section className='calisthenics_section p-5 m-0'>
        <div className='cali_title'>WHAT IT IS THE CALISTHENICS<span className='text-danger'>?</span></div>
        <p className='secondary_text text-dark mx-5'>
        Il Calisthenics è una forma di allenamento a corpo libero che si basa principalmente su movimenti naturali
         del proprio corpo facendo leva su un’attrezzatura minima come ad esempio la classica sbarra. È un concentrato
          di forza e movimenti di ginnastica di base che può essere fatto ovunque: a casa, al parco, in palestra e in
           qualsiasi altro luogo. È la forma primordiale di allenamento fisico.
Il corpo umano è una macchina straordinaria, concepita per muoversi, e la storia ci insegna che i nostri antenati sono
 riusciti a sopravvivere e a superare sfide, in alcuni casi insormontabili, solo grazie al proprio corpo e alla
  straordinaria fisicità che da esso ne deriva. Purtroppo, però, la società moderna e i nuovi stili di vita minano
   di continuo ciò per cui siamo nati: muoverci liberamente e progredire sempre di più. “Mens sana in corpore sano” 
   dicevano gli antichi.
Il Calisthenics rappresenta la massima espressione di un ritorno alle origini al fine di esplorare ciò che la nostra
 meravigliosa macchina naturale è in grado di fare e di spingersi. Sicuramente all’inizio non sarà facile anche perché
  bisogna condizionare e abituare pian piano il nostro corpo a questa tipologia di allenamento.
Come ogni cosa, però, tutto si impara. La caparbietà e la determinazione saranno fattori fondamentali che aiuteranno
 a migliorare non solo fisicamente, ma anche e soprattutto sul piano emotivo e mentale. Ad affrontare, cioè, le sfide
  che ogni giorno la vita ci pone davanti con maggiore sicurezza e fiducia in noi stessi.
        </p>
      </section>

      <section>
        <div className='container-fluid'>
          <div className='results_section'>WHAT WE DO<span className='text-danger'>?</span></div>
          <div className='row'>
            <div className='col-12'><p className='info_text'>
            Dal giorno zero siamo in prima linea sul campo di combattimento per aiutare i nostri partner a divulgare
            la cultura del Calisthenics e più in generale dell’importanza, sostenuta da decenni di ricerche scientifiche
            consolidate, circa l’attività fisica al fine di ispirare e migliorare la qualità della vita delle persone.
            In Burningate crediamo fortemente in valori quali Rispetto, Solidarietà e Uguaglianza. Il movimento è stato creato per
            raccogliere appassionati del settore e professionisti con lo scopo di dar vita a connessioni e relazioni umane
            all’insegna di valori etici e morali sani.
            Noi pratichiamo quello che insegniamo e insegniamo quello che pratichiamo. In questa semplice frase è raccolta
            l’essenza della nostra filosofia. Non siamo tuttologi, ma specialisti nel Calisthenics al 100%..
            Da più di 3 anni abbiamo certificato oltre 240 istruttori, organizzato + 6 eventi nazionali e internazionali,
            e all’attivo contiamo + 18 centri affiliati sparsi un po’ per lo stivale. La nostra forza e il nostro orgoglio
            è data dall’unione e dalla condivisione del movimento sulla base di una fitta rete di partner. Persone come noi
            che hanno sposato la filosofia e i valori in cui crediamo, permettendo a questa straordinaria disciplina di
            diffondersi a macchia d’olio in ogni club, parco o circuito fitness di zona. Siamo fieri di ogni singolo membro
            a cui apertamente va il nostro più forte “GRAZIE”.
              </p></div>
          </div>
          <div className='row'>
            <DataCard icon={People} number={1500} text="trained calisthenics"/>
            <DataCard icon={PinMap} number={18} text="branches in Italy"/>
            <DataCard icon={ClipboardCheck} number={240} text="trained instructors"/>
          </div>
        </div>
      </section>

      <section className='goal_section bg-dark'>
        <div className='container-fluid h-100'>
          <div className='goal_title' id='prova'>OUR GOAL</div>
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
      <footer className='container-fluid'>
        <div className='row h-100'>
          <div className='col-3 text-white h-100'>
            <div className='footer_section'>
            <div><p className='footer_title'>PARTNER</p></div>
          <div className='partner'><img src='https://www.burningate.com/wp-content/uploads/2020/09/241_71-burningate-calisthenics-ironlink.jpg'/></div>
        <div className='partner'><img src='https://www.burningate.com/wp-content/uploads/2023/02/HiPRO_DanoneLogo_min.png'/></div>
            </div>
          </div>
          <div className='col-3 text-white h-100'>
            <div className='footer_section'>
            <div><p className='footer_title'>NEWS LETTER</p></div>
            </div>
          </div>
          <div className='col-3 text-white h-100'>
            <div className='footer_section'>
            <div><p className='footer_title'>CONTACT</p></div>
            <div className='text-center h-100 d-flex justify-conten-evenly flex-column'>
            <div>assistence:<br/>2754610905</div>
            <div>email:<br/>burnungate@gmail.com</div>
            </div>
            </div>
          </div>
          <div className='col-3 text-white h-100'>
            <div className='footer_section'>
            <div><p className='footer_title'>USEFUL LINK</p></div>
            <ul className='h-100 d-flex flex-column justify-content-evenly align-items-center'>
              <button className='footer_link' id='home'><li>home</li></button>
              <li>about us</li>
              <li>course</li>
              <li>campionship</li>
            </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
