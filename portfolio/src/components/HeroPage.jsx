import "./HeroPage.css";
import hero_icon_design from '../assets/hero_icon_design.png';

export function MainPage() {
    return (
        <div>
        <div className="main">
            <div className="heading-grid">
                <img src={hero_icon_design} alt = "Logo" className="heroicon rotate-image"></img>
                <h2>Hello, I am </h2>
                <h1> Pratik Limbekar </h1>
                <h2> | Computer Engineer | Dreaming Astronomer | Curious Storyteller | </h2>
            </div>
        </div>
    </div>
    );
}