import React from 'react';
import './Landing.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const Landing = () => {
  const navigate = useNavigate();
  
  const Logout = () => {
    navigate('/');
  };

  const projects = [
    {
      link: "https://weather-flame-rho.vercel.app/",
      title: "WEATHER APP"
    },
    {
      link: "https://to-do-gamma-ten.vercel.app/", 
      title: "To-Do APP"
    },
    {
      link: "https://your-news-app-link.com",
      title: "NEWS APP"
    }
  ];

  return (
    <>
      <div>
        <h1 className='hed'>PROJECTS</h1>
        <div className='butt-cont'>
          <button onClick={Logout} className='butt'>
          <FontAwesomeIcon icon={faRightFromBracket} /> LOGOUT
          </button>
        </div>
      </div>
      <div className='card-cont'>
        {projects.map((project, index) => (
          <div className='cont' key={index}>
            <div className='card'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className='butt'><FontAwesomeIcon icon={faGlobe} />  Visit Here ....</button>
              </a>
              <h2 className='nh2'>{project.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Landing;
