import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "Reconstructing Human–Object Interactions",
      image: "/images/human_object_interaction.png",
      description: '...',
      github: 'https://github.com/Marco-Weder/Reconstructing-Human-Object-Interactions-from-Monocular-Videos',
      report: '/pages/Reconstructing_Human_Object_Interactions_from_Monocular_Videos.pdf'
    },
    {
      title: "Benchmarking VLMs for Robotic Spatial and Affordance Understanding",
      image: "/images/benchmarking_vlms.png",
      description: '...',
      github: 'https://github.com/momobhz/benchmarking-vlms',
      report: '/pages/Benchmarking_Spatial_and_Affordance_Reasoning_in_Vision_Language_Models_for_Robotics.pdf',
    },
    {
      title: "Head and Neck Tumor Segmentation With Sliced 3D PET Scans",
      image: "/images/segmentation.png",
      description: '...',
      report: '/pages/chase-2022.pdf',
    },
    {
      title: "Cover Palette",
      image: "/images/cover_palette.png",
      description: 'Cover Palette is a Generative AI playlist cover image generator, where users can obtain unique playlist cover images for their playlists through a website. Takes a Spotify playlist URL and extracts features such as the energy, time signature, tempo, and danceability of the songs in the playlist using Spotify’s WebAPI. Using these features, an image generation prompt is created and sent to DALLE to create three unique images that match the musicality of the given playlist.',
      github: 'https://github.com/njsumi/Playlist-Cover-Generator',
    },
    {
      title: "Squirrel Review",
      image: "/images/squirrel_review.png",
      description: 'Squirrel Review is a  hackathon project designed to help students prepare for difficult Purdue CS exams. It contains 100+ questions spanning between 4 courses, along with a built-in shell where students can practice writing and testing code.',
      github: 'https://github.com/alankang30/boilermake-xii',
    },
    {
      title: "Lip Coders",
      image: "/images/lip_coders.png",
      description: 'Lip Coders is a website that allows users to get their lip shade, by clicking on their lips in the webcam, and generates lip product recommendations for their lip shade.',
      github: 'https://github.com/jojobaest/Lip-Coders',
    },
  ];

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  return (
    <>
      <Navbar />
      <Home />

      <div className='rect'></div>

      <Projects projects={projects} setSelectedProject={setSelectedProject} />

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="modal-buttons-wrapper">
            
              {selectedProject.github && (
                <a
                  className="modal-button"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              )}

              {selectedProject.report && (
                <a
                  className="modal-button"
                  href={selectedProject.report}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Report
                </a>
              )}

            </div>
          </div>
        </div>
      )}

      <About />

      <Contact />

      <Footer/>
    </>

  );
}

export default App;
