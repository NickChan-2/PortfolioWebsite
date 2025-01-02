class Experience {
  id;
  title;
  expType;
  info;
  skills;
  link;

  constructor(expDetails) {
    this.id = expDetails.id;
    this.title = expDetails.title;
    this.expType = expDetails.expType;
    this.info = expDetails.info;
    this.skills = expDetails.skills;
    this.link = expDetails.link;

  }
}

export let experience = [];

export async function loadExperience() {
  try {
    // Fetch JSON data with cache disabled
    const response = await fetch('backend/experience.json', { cache: 'no-store' });

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data
    const experienceData = await response.json();

    // Map the JSON data into Experience objects
    experience = experienceData.map(expDetails => new Experience(expDetails));
  } catch (error) {
    console.error('Error loading experience:', error); // Log errors
  }
}


