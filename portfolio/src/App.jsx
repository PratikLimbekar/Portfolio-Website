import { Navbar } from "./components/navbar";
import "./App.css";
import {MainPage} from "./components/HeroPage";
import Projects from "./components/Projects Div/projects";
import { AboutMe } from "./components/About me/aboutme";

export function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar> */}
      <MainPage></MainPage>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </div>
  )
}

export default App;