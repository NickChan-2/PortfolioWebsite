import { experience, loadExperience } from "../data/experience.js";

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
      expHTML += ` 
      <div class="course">
        <h3 class="course-header">${exp.title} (${exp.expType})</h3>
          <div class="info-section">                
            <p class="info">${exp.info}</p>
          <div class="skills-section">
            <div class="skill">${exp.skills.join(', ')}</div> <!-- Fixed Skills -->
          </div>
        </div>
      </div>`;
    });

    // Inject HTML into the DOM
    document.querySelector('.js-exp-list').innerHTML = expHTML;
}

loadAndRenderExperience(); // Call the async function to load and render

console.log('end');
