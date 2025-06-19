import './projects.css';
import ChromaGrid from '../Chroma Grid/chromagrid';

const items = [
  {
    title: "Binary: Your Virtual Assistant",
    subtitle: "Description aaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaa aaaaaaaaaa aaaaa", //subtitle bole to description
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/PratikLimbekar"
  },
  {
    title: "ArthaSetu: A Bridge from Wisdom to Wealth",
    subtitle: "Backend Engineer",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/PratikLimbekar"
  },
  {
    title: "DO.AI",
    subtitle: "Backend Engineer",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/PratikLimbekar"
  }
];

export function Projects() {
    return(
        <div className='Main'>
            <div className='heading'>
                <h1>Projects</h1>   
            </div>
            <div className='chromagrid'>
                <div style={{ height: '600px', position: 'relative' }}>
                    <ChromaGrid 
                        items={items}
                        radius={300}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                    </div>
            </div>
        </div>
    );
}

export default Projects;