class Project {
  id;
  title;
  info;
  img;
  link;

  constructor(projDetails) {
    this.id = projDetails.id;
    this.title = projDetails.title;
    this.info = projDetails.info;
    this.img = projDetails.img;
    this.link = projDetails.link;

  }
}

export let project = [];

export async function loadProject() {
  try {
    // Fetch JSON data with cache disabled
    const response = await fetch('backend/projects.json', { cache: 'no-store' });

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON data
    const projectData = await response.json();

    // Map the JSON data into Experience objects
    project = projectData.map(projDetails => new Project(projDetails));

  } catch (error) {
    console.error('Error loading experience:', error); // Log errors
  }
}


