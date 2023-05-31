import React from 'react';
import Project from '../../components/Project/Project'

const projects = [
  {
    id: 1,
    title: "BizTrip",
    image: "./assets/images/1-BizTrip-App.png",
    github: "https://github.com/Tesfa8186/BizTrip",
    deploy: "https://warm-scrubland-92749.herokuapp.com/",
  },
  {
    id: 2,
    title: "Search-Book-App",
    image: "./assets/images/2-Search-BookPage.png",
    github: "https://github.com/Tesfa8186/MERN-Book-Serach-Engine",
    deploy: "https://powerful-waters-09126.herokuapp.com/",
  },
  {
    id: 3,
    title: "Fitness App",
    image: "./assets/images/3-Fitness-App.png",
    github: "https://github.com/Tesfa8186/Project2-Fitness-Application",
    deploy: "https://gentle-garden-16426.herokuapp.com/",
  },
  {
    id: 4,
    title: "Brewery Finder App (Hops-Hunter)",
    image: "./assets/images/4-BreweryFinder-Hops-Hunter.png",
    github: "https://github.com/Tesfa8186/First-Project",
    deploy: "",
  },
  {
    id: 5,
    title: "Note Taker App",
    image: "./assets/images/5-Note-Taker-App.png",
    github: "https://github.com/Tesfa8186/Express-Challenge-Note-Taker",
    deploy: "https://mighty-wave-85232.herokuapp.com/",
  },
  {
    id: 6,
    title: "Text-Editor-App.png",
    image: "./assets/images/6-Text-Editor-App.png",
    github: "https://github.com/Tesfa8186/PWA-Challenge-Text-Editor",
    deploy: "https://stark-atoll-29817.herokuapp.com/",
  }
]

 function Portfolio() {

    return (
      <main className='align-item center'>
        <h1>Portfolio</h1>
        <Project projects={projects}/>
      </main>
    );
}

export default Portfolio;