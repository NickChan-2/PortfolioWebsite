import { experience, loadExperience } from "../data/experience.js";
import { project, loadProject} from "../data/projects.js";

console.log('open');

// Use async/await to ensure data loads before rendering
async function loadAndRenderExperience() {
  try {
    // Wait until data is loaded
    await loadExperience();
    console.log('Experience loaded:', experience); // Debugging
    renderExpList();
  } catch (error) {
    console.error('Error loading experience:', error);
  }
}

function renderExpList() {
  let expHTML = '';

  experience.forEach((exp) => { // Loop through each experience
    
    // Create individual skill divs
    let skillsHTML = '';
    exp.skills.forEach((skill) => {
      skillsHTML += `<div class="skill">${skill}</div>`; // Separate div for each skill
    });

    // Add experience HTML
    expHTML += ` 
    <a href="${exp.link}" target="_blank">
          <div class="course">
      <h3 class="course-header">${exp.title} (${exp.expType})</h3>
        <div class="info-section">                
          <p class="info">${exp.info}</p>
        <div class="skills-section">
          ${skillsHTML} <!-- Inject the individual skill divs -->
        </div>
      </div>
    </div>
    </a>`;
  });

  // Inject HTML into the DOM
  document.querySelector('.js-exp-list').innerHTML = expHTML;
}


loadAndRenderExperience(); // Call the async function to load and render

// Use async/await to ensure data loads before rendering
async function loadAndRenderProject() {
  try {
    // Wait until data is loaded
    await loadProject();
    console.log('project loaded:', project); // Debugging
    renderProjList();
  } catch (error) {
    console.error('Error loading experience:', error);
  }
}

function renderProjList() {
  let projHTML = '';

  project.forEach((proj) => { // Loop through each experience
    projHTML += ` 
      <div class="img-section">                   
        <a href="${proj.link}" target="_blank"> 
          <img src="${proj.img}" class="project-img">
        </a>         
      </div>
      <div class="project-description">               
          <h3 class="project-title">
            <a href="${proj.link}" target="_blank"> ${proj.title}</a>
          </h3>
        <p class="info">${proj.info}</p>
      </div>`;
  });

  // Inject HTML into the DOM
  document.querySelector('.js-proj-list').innerHTML = projHTML;
}

loadAndRenderProject();

console.log('end');
