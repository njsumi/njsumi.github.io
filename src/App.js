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
      github: 'https://github.com/njsumi/Playlist-Cover-Generator',
      report: '/pages/Reconstructing_Human_Object_Interactions_from_Monocular_Videos.pdf'
    },
    {
      title: "Benchmarking VLMs for Robotic Spatial and Affordance Understanding",
      image: "/images/benchmarking_vlms.png",
      description: '...',
      github: 'https://github.com/njsumi/Playlist-Cover-Generator',
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
      {/* <section id="home">
        <img src="/images/flowers.png" alt="flower" className="flower" />
        <h1 className="hello">Hi, I'm Nina.</h1>
        <p className="intro">As a student of Computer Science and Artificial Intelligence with a strong foundation in software engineering, machine learning, and research, my work blends technology with creativity.</p>
      </section> */}

      <div className='rect'></div>

      {/* <section id="projects">
        <h1 className="projects">Projects</h1>
        <div className="project-images">
          {projects.map((project, index) => (
            <div
              className="project-item"
              key={index}
              onClick={() => setSelectedProject(project)}
              style={{ cursor: 'pointer' }}
            >
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </section> */}

      <Projects projects={projects} setSelectedProject={setSelectedProject} />

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="github-button-wrapper">
              <a
                className="github-button"
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      {/* <section id="about">
        <h1 className="about">About Me</h1>
        <div className="about-content">
          <img src="/images/my photo.jpg" alt="about-image" className="about-image" />
          <div className="about-text">
            <p className='text-one'>It's nice to meet you!</p>
            <p className='text-two'>I’m a third-year student studying Computer Science Honors and Artificial Intelligence at Purdue University. With a strong background in software engineering, machine learning, and research, I’m passionate about building technology that bridges creativity and real-world impact. My projects have ranged from applying AI in healthcare to developing tools that support student learning. <br /><br />
            
            Outside of tech, I enjoy exploring creativity through art, fashion, and digital design, and I stay busy by going to the gym, cooking, and reading. <br /><br />
            
            I’m currently seeking summer internship opportunities in software engineering or machine learning where I can grow, collaborate, and create meaningful solutions.</p>

            <a class="resume-button" href="images/Nina Gruteser Resume 2025.pdf" target="_blank" rel="noopener noreferrer">
            Resume
            </a>
            
          </div>
        </div>
      </section> */}

      <About />

      {/* <section id="contact">
        <h1 className="contact">Connect With Me!</h1>
        <a href="mailto:ngrutese@purdue.edu" className="email-button">
          Email
        </a>
      </section> */}

      <Contact />

      <Footer/>
    </>

  );
}

export default App;
