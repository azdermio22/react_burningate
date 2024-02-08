import { People, PinMap, ClipboardCheck} from 'react-bootstrap-icons';
import {DataCard} from './dataCard.js';
import React, {useEffect } from "react";
import {Navbar} from "./navbar.js";

export const Home = () =>{
  useEffect(() => {
    let home_link = document.querySelector('#home');
    home_link.addEventListener('click',()=>{
      window.scrollTo(100, 0);
    })
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }
    console.log(document.querySelector('#p'));

    let observer = new IntersectionObserver((entries)=>{
        entries.forEach((entrie)=> {
          if (entrie.intersectionRatio != 0) {
            let container = document.querySelector(`#${entrie.target.id}`);
            container.querySelector('p').style.animationName = "goals_animation";
          }
        });
    }, options);

    let goals_container = document.querySelectorAll('.goal_container');

    goals_container.forEach((goal_container)=> {
      observer.observe(goal_container);
    });
  }, []);
    return(
       <div>
        <div>
             <header className="header">
        <Navbar/>
        <div className="title_block">
        <h1 data-aos="fade-down" data-aos-duration="2000" className="text title">BURNINGATE</h1>
        <h2 data-aos="fade-down" data-aos-duration="2000"  className="text subtitle">DEVELOP YOUR STRENGTH</h2>
        </div>
      </header>

      <section className='calisthenics_section p-5 m-0'>
        <div className='cali_title'>WHAT IT IS THE CALISTHENICS<span className='text-danger'>?</span></div>
        <p className='secondary_text text-dark mx-5'>
        <span className='marker'>IL CALISTHENICS è UNA FORMA DI ALLENAMENTO A CORPO LIBERO CHE SI BASA PRINCIPALMNETE SU MOVIMENTI NATURALI
         DEL PROPIO CORPO FACENDO LEVA SU UN ATTREZZATURA MINIMA</span> come ad esempio la classica sbarra. È un concentrato
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
            <span className='marker'>IN BURNINGATE</span> crediamo fortemente in valori quali Rispetto, Solidarietà e Uguaglianza. Il movimento è stato creato per
            raccogliere appassionati del settore e professionisti con lo scopo di dar vita a connessioni e relazioni umane
            all’insegna di valori etici e morali sani.
            Noi pratichiamo quello che insegniamo e insegniamo quello che pratichiamo. In questa semplice frase è raccolta
            l’essenza della nostra filosofia. Non siamo tuttologi, ma specialisti nel Calisthenics al 100%..
            <span className='marker'>DA PIU DI 3 ANNI ABBIAMO CERTIFICATO</span>oltre<span className='marker'> 240 ISTRUTTORI</span>, organizzato <span className="marker">+6 EVENTI NAZZIONALI E INTERNAZZIONALI</span>,
            e all’attivo contiamo <span className='marker'>+ 18 CENTRI</span> affiliati sparsi un po’ per lo stivale. La nostra forza e il nostro orgoglio
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
          <div className='goal_title' id='prova'>OUR GOALS</div>
          <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
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
            <div className='col-12 col-md-6 d-flex align-items-center flex-column'>
              <div className='w-75'>
              <div id='a' className='pointed_list execess_top goal_container'><p className='goal m-0'>RISPETTO TRA LE PERSONE</p></div>
              <div id='b' className='pointed_list goal_container'><p className='goal m-0'>ISPIRARE E MOTIVARE GLI ALTRI</p></div>
              <div id='c' className='pointed_list goal_container'><p className='goal m-0'>MIGLIORARE SE STESSI SEMPRE E COMUNQUE</p></div>
              <div id='d' className='pointed_list goal_container'><p className='goal m-0'>ESSERE LEALI E CORRETTI</p></div>
              <div id='e' className='pointed_list goal_container'><p className='goal m-0'>UMILTÀ E SPIRITO DI SACRIFICIO</p></div>
              <div id='f' className='pointed_list goal_container'><p className='goal m-0'>INFONDERE GIOIA E FIDUCIA</p></div>
              <div id='g' className='pointed_list goal_container'><p className='goal m-0'>ESSERE COLLABORATIVI E PROPOSITIVI</p></div>
              <div id='h' className='pointed_list goal_container'><p className='goal m-0'>AVERE FOCUS E DISCIPLINA</p></div>
              <div id='i' className='pointed_list goal_container'><p className='goal m-0'>LEADERSHIP E GUIDA AL CAMBIAMENTO</p></div>
              <div id='l' className='pointed_list execess_bottom goal_container'><p className='goal m-0'>SUPERARE I PROPRI LIMITI</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='container-fluid'>
        <div className='row h-100'>
          <div className='col-12 col-md-3 text-white'>
            <div className='footer_section'>
            <div><p className='footer_title'>NEWS LETTER</p></div>
            </div>
          </div>
          <div className='col-12 col-md-3 text-white'>
            <div className='footer_section'>
            <div><p className='footer_title'>CONTACT</p></div>
            <div className='d-flex flex-column justify-content-evenly align-items-center text-center'>
            <p>assistence:<br/>5926571045</p>
            <p>email:<br/>burningate@gmail.com</p>
            </div>
            </div>
          </div>
          <div className='col-12 col-md-3 text-white'>
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
          <div className='col-12 col-md-3 text-white'>
            <div className='footer_section'>
            <div><p className='footer_title'>PARTNER</p></div>
          <div className='partner'><img src='https://www.burningate.com/wp-content/uploads/2020/09/241_71-burningate-calisthenics-ironlink.jpg'/></div>
        <div className='partner'><img src='https://www.burningate.com/wp-content/uploads/2023/02/HiPRO_DanoneLogo_min.png'/></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
       </div> 
    );
}