import {Navbar} from "./navbar";
import {useEffect} from "react";

export const Campionship = () => {
    useEffect(()=>{
        let competition_trigers = document.querySelectorAll('.competition_triger');
        let x = 0;
        let y = 0;

        competition_trigers.forEach((competition_triger)=> {
            competition_triger.addEventListener('mousemove',()=>{
                y = window.event.offsetY;
                x = window.event.clientX;
            })
    
            competition_triger.addEventListener('click',()=>{
                competition_triger.style.width = "0px";
                competition_triger.style.height = "0px";
                competition_triger.style.borderRadius = "200px";
                competition_triger.style.transform = "translate(-50%, -50%)";
                competition_triger.style.left = x+"px";
                competition_triger.style.top = y+"px";
                competition_triger.style.backgroundColor = "white";
                competition_triger.style.animationName = "white_boul";
                setTimeout(()=>{
                    competition_triger.style.backgroundColor = "transparent";
                    competition_triger.style.width = "100%";
                    competition_triger.style.height = "100%";
                    competition_triger.style.borderRadius = "0px";
                    competition_triger.style.left = "0px";
                    competition_triger.style.top = "0px";
                    competition_triger.style.transform = "translate(0%, 0%)";
                    competition_triger.style.animationName = "";
                },700);
            })
        });

        let left_slide = document.querySelector('.left_slide');
        let right_slide = document.querySelector('.right_slide');
        let center_slide = document.querySelector('.center_slide');
        let right_filter = document.querySelector('.right_filter');
        let left_filter = document.querySelector('.left_filter');
        let center_filter = document.querySelector('.center_filter');
        let back_slide = document.querySelector('.back_slide');

        right_filter.addEventListener('click',()=>{
            left_slide.style.animationName = "left_slide";
            right_slide.style.animationName = "right_slide";
            right_slide.style.zIndex = "1";
            left_slide.style.zIndex = "0";
            center_slide.style.animationName = "center_slide";
            center_filter.style.display = "flex";
            back_slide.style.animationName = "back_slide";
            center_filter.style.animationName = "center_filter";
            right_filter.style.animationName = "right_filter";
            setTimeout(() => {
                left_slide.style.animationName = "";
                right_slide.style.animationName = "";
                center_slide.style.animationName = "";
                back_slide.style.animationName = "";
                center_filter.style.animationName = "";
                right_filter.style.animationName = "";
                center_filter.style.display = "none";
            }, 1000);
        })
        left_filter.addEventListener('click',()=>{
            left_slide.style.animationName = "left_slide_left";
            left_slide.style.zIndex = "1";
            right_slide.style.zIndex = "0";
            right_slide.style.animationName = "right_slide_left";
            center_slide.style.animationName = "center_slide_left";
            back_slide.style.animationName = "back_slide_left";
            center_filter.style.animationName = "center_filter";
            center_filter.style.display = "flex";
            left_filter.style.animationName = "left_filter";
            setTimeout(()=>{
                left_slide.style.animationName = "";
                right_slide.style.animationName = "";
                center_slide.style.animationName = "";
                back_slide.style.animationName = "";
                center_filter.style.animationName = "";
                left_filter.style.animationName = "";
                center_filter.style.display = "none";
            },1000)
        })
    },[]);
    return (
        <div>
            <header className="camp_header">
            <div className="camp_filter"></div>
            <Navbar/>
            <div className="d-flex justify-content-center align-items-center text-center w-100 camp_title_container">
                <div className="bg-danger d-flex flex-column justify-content-center align-items-center tournament">
                <div className="camp_title">NEXT TOURNAMENT</div>
                <div className="camp_competition">CALISTHENICS OFFICIAL CIRCUIT & MILAN</div>
                <div className="camp_competition">25/12/2024</div>
                <button className="title_button">MORE INFO</button>
                <div className="logo_white"></div>
                </div>
            </div>
            </header>
            <section className="my-5">
                <div><p>UPCOMING COMPETITIONS</p></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 p-0 position-relative">
                        <div className="competition bg-danger text-center pt-3 scale_side_slide position-absolute left_slide">
                        <div className="text-white fs-3">CALISTHENICS OFFICIAL CIRCUIT & MILAN</div>
                        <div className="text-white fs-3">25/12/2024</div>
                        <button className="competition_button">MORE INFO</button>
                        <div className="left_filter"></div>
                            <div className="logo_white"></div>
                        </div>
                    </div>
                    <div className="col-4 p-0 position-relative">
                    <div className="competition bg-danger text-center pt-3 center_slide z-1">
                    <div className="text-white fs-3">CALISTHENICS OFFICIAL CIRCUIT & MILAN</div>
                        <div className="text-white fs-3">25/12/2024</div>
                        <button className="competition_button">MORE INFO</button>
                        <div className="center_filter"></div>
                    <div className="logo_white"></div>
                    </div>
                    <div className="competition bg-danger text-center pt-3 position-absolute back_slide z-0">
                    <div className="text-white fs-3">CALISTHENICS OFFICIAL CIRCUIT & MILAN</div>
                        <div className="text-white fs-3">25/12/2024</div>
                        <button className="competition_button">MORE INFO</button>
                    <div className="logo_white"></div>
                    </div>
                    </div>
                    <div className="col-4 p-0">
                    <div className="competition bg-danger text-center pt-3 scale_side_slide right_slide">
                    <div className="text-white fs-3">CALISTHENICS OFFICIAL CIRCUIT & MILAN</div>
                        <div className="text-white fs-3">25/12/2024</div>
                        <button className="competition_button">MORE INFO</button>
                        <div className="right_filter"></div>
                    <div className="logo_white"></div>
                    </div>
                    </div>
                </div>
            </div>
            </section>

            <section className="p-0">               
<div><p>PAST COMPETITION</p></div>
<div>
    <div className="past_competition bg-dark position-relative">
        <div className="row">
            <div className="col-4 d-flex justify-content-center align-items-center">
                <div className="competition bg-danger text-center">
                    <div className="competition_triger"></div>
                <div className="text-white fs-3">CALISTHENICS OFFICIAL CIRCUIT & MILAN</div>
                        <div className="text-white fs-3">25/12/2024</div>
                        <div className="text-white fs-5 mt-4">2 SET RANKING CLASSIC 75” + 60” </div>
                </div>
            </div>
            <div className="col-4 p-0 text-white d-flex justify-content-center align-items-center"><p>Gli atleti dovranno eseguire la sequenza di esercizi sopra riportata entro il tempo max di 7’
La sequenza di esercizi in questione non è altro che una gara in cui gli esercizi vengono eseguiti in maniera consecutiva senza pausa cercando di completare il tutto nel minor tempo possibile.
Tutti gli esercizi riportati possono essere eseguiti in un’unica serie o in caso di sopraggiungimento della fatica o di scelta personale, possono essere interrotti e poi ripresi fino al completamento delle ripetizioni indicate. Solo una volta eseguite tutte le ripetizioni di un dato esercizio si può passare all’esercizio successivo.</p>
</div>
            <div className="col-4 p-0 d-flex justify-content-center align-items-center"><iframe width="300px" height="200px" src="https://www.youtube.com/embed/81ucmcSAxzA?si=wNPGod_q8yb7S5zG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        </div>
        <div className="row">
            <div className="col-4 d-flex justify-content-center align-items-center">
                <div className="competition bg-danger text-center">
                    <div className="competition_triger"></div>
                <div className="text-white fs-3">CALISTHENICS OFFICIAL CIRCUIT & MILAN</div>
                        <div className="text-white fs-3">25/12/2024</div>
                        <div className="text-white fs-5 mt-4">2 SET RANKING CLASSIC 75” + 60” </div>
                </div>
            </div>
            <div className="col-4 p-0 text-white d-flex justify-content-center align-items-center"><p>Gli atleti dovranno eseguire la sequenza di esercizi sopra riportata entro il tempo max di 7’
La sequenza di esercizi in questione non è altro che una gara in cui gli esercizi vengono eseguiti in maniera consecutiva senza pausa cercando di completare il tutto nel minor tempo possibile.
Tutti gli esercizi riportati possono essere eseguiti in un’unica serie o in caso di sopraggiungimento della fatica o di scelta personale, possono essere interrotti e poi ripresi fino al completamento delle ripetizioni indicate. Solo una volta eseguite tutte le ripetizioni di un dato esercizio si può passare all’esercizio successivo.</p>
</div>
            <div className="col-4 p-0 d-flex justify-content-center align-items-center"><iframe width="300px" height="200px" src="https://www.youtube.com/embed/81ucmcSAxzA?si=wNPGod_q8yb7S5zG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
        </div>
    </div>
</div>
            </section>
        </div>
    );
}