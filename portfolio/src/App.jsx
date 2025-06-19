import { Navbar } from "./components/navbar";
import "./App.css";
import {MainPage} from "./components/HeroPage";
import Projects from "./components/Projects Div/projects";
import { AboutMe } from "./components/About me/aboutme";
import { ButtonsPanel } from "./components/Buttons Corner/buttons";
import ContactUs from "./components/Contact Us/contactus";

export function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <MainPage></MainPage>
      {/* <ButtonsPanel></ButtonsPanel> */}
      <AboutMe></AboutMe>
      <Projects></Projects>
      <ContactUs></ContactUs>
    </div>
  )
}

export default App;