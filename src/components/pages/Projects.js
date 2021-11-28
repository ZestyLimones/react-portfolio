import React from 'react';
import './Projects.css';
import ouroborosScreenshot from '../assets/images/ouroboros-screnshot.jpg';
import employeeTrackerScreenshot from '../assets/images/employee-tracker-screenshot.jpg';
import nationalParksScreenshot from '../assets/images/national-state-parks-screenshot.jpg';
import noteTakerScreenshot from '../assets/images/note-taker-screenshot.jpg';

export default function Projects() {
  const triggers = document.getElementsByClassName('trigger');
  const triggerArray = Array.from(triggers).entries();
  const modals = document.getElementsByClassName('modal');
  const closeButtons = document.getElementsByClassName('close-button');

  for (let [index, trigger] of triggerArray) {
    const toggleModal = () => {
      modals[index].classList.toggle('show-modal');
    };
    trigger.addEventListener('click', toggleModal);
    closeButtons[index].addEventListener('click', toggleModal);
  }

  return (
    <div>
      <h2>Projects</h2>
      <div className="all-projects">
        <div className="project-1 projects">
          <div className="card">
            <h3 className="card-title">Ouroboros</h3>
            <img
              src={ouroborosScreenshot}
              alt="Screenshot of day planner app."
              className="card-image"
            />
            <div className="project-content">
              <p className="card-text">
                A mental health app to track daily progress creating intrinsic
                goals for our user. Our app sets up a loop reward system
                creating daily patterns.
              </p>
              <p>
                <span>Tech used:</span> JavaSrcipt, CSS, handlebars, Node.js,
                Express, MySQL, AWS
              </p>
              <div className="card-links">
                <p className="project-repo-link">
                  <a
                    href="https://github.com/ZestyLimones/Ouroboros"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn">View Code</button>
                  </a>
                </p>
                <p className="project-depoyed-link">
                  <a
                    href="https://ouroboros-ml-jf-ni.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn">View Project</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-2 projects">
          <div className="card">
            <h3 className="card-title">Natonal Parks Day Trip Planner</h3>
            <img
              src={nationalParksScreenshot}
              alt="Screenshot of National Day Trip Planner"
              className="card-image"
            />
            <div className="project-content">
              <p className="card-text">
                Plan a trip to a State Park within a specific state and be
                presented with 3 random activities available in that park, a
                five day forcast, and map of the location.
              </p>
              <p>
                <span>Tech used:</span> HTML5, CSS3, JavaScript, jQuery, Bulma,
                NPS API, OpenWeather API, Google API
              </p>
              <div className="card-links">
                <p className="project-repo-link">
                  <a
                    href="https://github.com/michlimones/National-Parks-Day-Trip-Planner"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn">View Code</button>
                  </a>
                </p>
                <p className="project-depoyed-link">
                  <a
                    href="https://trivera777.github.io/National-Parks-Day-Trip-Planner/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn">View Project</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-3 projects">
          <div className="card">
            <h3 className="card-title">Note Taker</h3>
            <img
              src={noteTakerScreenshot}
              alt="Screenshot of Note Taker App"
              className="card-image"
            />
            <div className="project-content">
              <p className="card-text">
                This application allows a user to take notes they can reference
                later. When the user first visits the site they will be promted
                to start taking notes. Once on the following screen, the user
                will add a title for the notes then they can start adding
                content.
              </p>
              <p>
                <span>Tech used:</span> HTML5, CSS3, JavaScript, Bootstrap,
                Node.js, Express, Heroku
              </p>
              <div className="card-links">
                <p className="project-repo-link">
                  <a
                    href="https://github.com/ZestyLimones/Note_Taker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn">View Code</button>
                  </a>
                </p>
                <p className="project-depoyed-link">
                  <a
                    href="https://fast-shelf-21917.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn">View Project</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="project-4 projects">
          <div className="card">
            <h3 className="card-title">Employee Tracker</h3>
            <img
              src={employeeTrackerScreenshot}
              alt="Screenshot of code quiz game."
              className="card-image"
            />
            <div className="project-content">
              <p className="card-text">
                This application allows a business owner to view and manage the
                departments, roles, and employees within their company so they
                can organize and plan their business. Business owner is able to
                view and add departments, roles, and employees.
              </p>
              <p>
                <span>Tech used:</span> JavaScript, Node.js, Express, MySql,
                Axios
              </p>
              <p>
                <span>No deployed site. All back-end</span>
              </p>
              <div className="card-links">
                <p className="project-repo-link">
                  <a
                    href="https://github.com/ZestyLimones/Employee-Tracker"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn">View Code</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
