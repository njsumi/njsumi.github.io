import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  // const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "Reconstructing Human–Object Interactions",
      image: "/images/human_object_interaction.png",
      description: 'This research project focuses on designing a hybrid pipeline that reconstructs 3D human and object poses from multi-view RGB-D videos. We combined monocular human motion recovery (GVHMR) with multi-view object tracking (FoundationPose), implemented coordinate space alignment and joint refinement, and evaluated the accuracy of the pipeline on the BEHAVE dataset.',
      github: 'https://github.com/Marco-Weder/Reconstructing-Human-Object-Interactions-from-Monocular-Videos',
      report: '/pages/Reconstructing_Human_Object_Interactions_from_Monocular_Videos.pdf'
    },
    {
      title: "Benchmarking VLMs for Robotic Spatial and Affordance Understanding",
      image: "/images/benchmarking_vlms.png",
      description: 'This project investigates spatial reasoning and affordance understanding in open-source Vision-Language Models (VLMs) by buildingan evaluation pipeline to benchmark and model failures using the Robo2VLM dataset. We designed automated tests using Chain-of-Thought prompting, monocular depth maps via Depth Anything V2, and visual grounding sanity checks to uncover reasoning failures in robotic perception.',
      github: 'https://github.com/momobhz/benchmarking-vlms',
      report: '/pages/Benchmarking_Spatial_and_Affordance_Reasoning_in_Vision_Language_Models_for_Robotics.pdf',
    },
    {
      title: "Head and Neck Tumor Segmentation With Sliced 3D PET Scans",
      image: "/images/segmentation.png",
      description: 'This research proposes a semi-automatic 3D segmentation model for head and neck tumors in PET Scans by slicing the 3D PET Scans into 2D images and separate the slices into slices with tumor andslices without tumor. Only the slices with tumor get segmented by a 2D U-Net, leading to better performance than previous fully automated segmentation approaches.',
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

  // useEffect(() => {
  //   if (selectedProject) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [selectedProject]);

  return (
    <>
      <Navbar />
      <Home />

      <div className='rect'></div>

      {/* <Projects projects={projects} setSelectedProject={setSelectedProject} /> */}
      <Projects projects={projects} />

      {/* {selectedProject && (
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
      )} */}

      <About />

      <Contact />

      <Footer/>
    </>

  );
}

export default App;
