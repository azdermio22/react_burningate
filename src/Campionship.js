import {Navbar} from "./navbar";
import {useEffect} from "react";

export const Campionship = () => {
    useEffect(()=>{
        let left_slide = document.querySelector('.left_slide');
        let right_slide = document.querySelector('.right_slide');
        let center_slide = document.querySelector('.center_slide');
        let back_slide = document.querySelector('.back_slide');
        // left_slide.style.animationName = "left_slide";
        // right_slide.style.animationName = "right_slide";
        // center_slide.style.animationName = "center_slide";
        // back_slide.style.animationName = "back_slide";
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
            <section>
                <div><p>UPCOMING COMPETITIONS</p></div>
                <div className="d-flex justify-content-center align-items-center w-100 camp_title_container position-relative">

                <div className="bg-danger text-center d-flex flex-column align-items-center tournament scale_side_slide left_slide">
                <div className="camp_competition scale_text mt-5">CALISTHENICS OFFICIAL CIRCUIT & MILAN</div>
                <div className="camp_competition scale_text">25/12/2024</div>
                <button className="title_button">MORE INFO</button>
                <div className="logo_white"></div>
                </div>
            
                <div className="bg-danger text-center d-flex flex-column align-items-center tournament center_slide">
                <div className="camp_competition scale_text mt-5">CALISTHENICS OFFICIAL CIRCUIT & MILAN</div>
                <div className="camp_competition scale_text">25/12/2024</div>
                <button className="title_button">MORE INFO</button>
                <div className="logo_white"></div>
                </div>

                <div className="bg-danger text-center d-flex flex-column align-items-center tournament back_slide position-absolute">
                <div className="camp_competition scale_text mt-5">CALISTHENICS OFFICIAL CIRCUIT & MILAN</div>
                <div className="camp_competition scale_text">25/12/2024</div>
                <button className="title_button">MORE INFO</button>
                <div className="logo_white"></div>
                </div>

                <div className="bg-danger text-center d-flex flex-column align-items-center tournament scale_side_slide right_slide">
                <div className="camp_competition scale_text  mt-5">CALISTHENICS OFFICIAL CIRCUIT & MILAN</div>
                <div className="camp_competition scale_text">25/12/2024</div>
                <button className="title_button">MORE INFO</button>
                <div className="logo_white"></div>
                </div>
 
            </div>
            </section>

            <section>               
<div><p>PAST COMPETITION</p></div>
<div>
    <div>
        <div className="row">
            <div className="col-6 p-0"><p>eifu ueb i vt v crs crcatdc crc ftrxtyjhsdbaic uuy iui uf es rfres wesdt v ug es ex sazwxw zsdxeszxty nkljn jvdtzaw zerx zaw zwe z3w 3 ewstrd err ex rxrx  rsdx drxc dr x rszes zesxsxsexzse zsez ez</p></div>
            <div className="col-6 p-0"><iframe width="75%" height="315" src="https://www.youtube.com/embed/81ucmcSAxzA?si=wNPGod_q8yb7S5zG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
        </div>
    </div>
</div>
            </section>
        </div>
    );
}