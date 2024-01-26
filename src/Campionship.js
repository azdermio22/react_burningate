import {Navbar} from "./navbar";

export const Campionship = () => {
    return (
        <div>
            <header className="camp_header">
            <Navbar/>
            <div className="d-flex flex-column justify-content-center align-items-center w-100 camp_title_container">
                <div className="camp_title">NEXT TOURNAMENT</div>
                <div className="camp_competition">CALISTHENICS OFFICIAL CIRCUIT & MILAN</div>
                <div className="camp_competition">25/12/2024</div>
            </div>
            </header>
        </div>
    );
}