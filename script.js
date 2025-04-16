
// Tile Data Definitions

// Array of project objects — each with a title, link, and (optionally) a video
const projects = [
    { title: 'STUDIO MYO', link: 'index.html', video: 'Myovideo.mp4' },
    { title: 'KROM', link: 'krom.html' },
    { title: 'PORTFOLIO', link: 'portfolio-page.html' },
    { title: 'Project 4', link: 'another-page.html' },
    { title: 'Project 5', link: 'another-page.html' },
    { title: 'Project 6', link: 'another-page.html' }
  ];
  
  // Array of learning outcome objects — each with a title and a link
  const learningOutcomes = [
    { title: 'Learning Outcome 1', link: 'lo1.html' },
    { title: 'Learning Outcome 2', link: 'lo2.html' },
    { title: 'Learning Outcome 3', link: 'lo3.html' },
    { title: 'Learning Outcome 4', link: 'lo4.html' },
    { title: 'Learning Outcome 5', link: 'lo5.html' }
  ];

  // UI State Management
  
  // Boolean flag to track whether we're currently showing Projects (true) or Learning Outcomes (false)
  let showingProjects = true;
  

  // DOM Element References
  
  // Get references to important DOM elements by their IDs
  const tileContainer = document.getElementById('tileContainer'); // Where tiles will be rendered
  const toggleButton = document.getElementById('toggleButton');   // The button to switch views
  const mainTitle = document.getElementById('mainTitle');         // Main heading on the page
  const navProjects = document.getElementById('navProjects');     // Nav link to switch to Projects
  const navLearning = document.getElementById('navLearning');     // Nav link to switch to Learning Outcomes
  
  // Function to Render Tiles Dynamically
  
  function renderTiles() {
    // Clear any existing content in the tile container before rendering new tiles
    tileContainer.innerHTML = '';
  
    // Decide which dataset to use based on the current state (Projects or Learning Outcomes)
    const data = showingProjects ? projects : learningOutcomes;
  
    // Loop through each item in the selected dataset and create tile elements
    data.forEach(item => {
      // Create a tile container div for each item
      const tile = document.createElement('div');
      tile.className = 'grid-item';
  
      // Create an anchor (link) element for the tile
      const link = document.createElement('a');
      link.href = item.link;
  
      // If the item has a video, create a video element and add it to the tile
      if (item.video) {
        const video = document.createElement('video');
        video.src = item.video;       // Set video source
        video.muted = true;           // Mute the video by default
        video.loop = true;            // Make it loop continuously
        video.playsInline = true;     // Ensure it plays inline (for mobile devices)
        video.className = 'tile-video'; // Apply a CSS class for styling
  
        // Add event listeners to play video on hover and pause on mouse leave
        video.addEventListener('mouseenter', () => video.play());
        video.addEventListener('mouseleave', () => video.pause());
  
        // Add the video element to the link element
        link.appendChild(video);
      }
  
      // Create a title element for the tile
      const title = document.createElement('div');
      title.className = 'tile-title';    // Apply a CSS class for styling
      title.textContent = item.title;    // Set the text content to the item title
  
      // Add the title element to the link
      link.appendChild(title);
  
      // Add the link (with video and title) to the tile container
      tile.appendChild(link);
  
      // Finally, add the completed tile to the main tile container in the DOM
      tileContainer.appendChild(tile);
    });
  
    // Update the page's main title and toggle button text based on current state
    mainTitle.textContent = showingProjects ? 'Projects' : 'Learning Outcomes';
    toggleButton.textContent = showingProjects ? 'Switch to Learning Outcomes' : 'Switch to Projects';
  }
  
 
  // Event Listeners for Interactivity

  // When the toggle button is clicked:
  // - Switch the boolean state
  // - Re-render the tiles based on new state
  toggleButton.addEventListener('click', () => {
    showingProjects = !showingProjects;
    renderTiles();
  });
  
  // When the "Projects" navbar link is clicked:
  // - Prevent the default link behavior
  // - Set state to show Projects
  // - Re-render the tiles
  navProjects.addEventListener('click', (e) => {
    e.preventDefault();
    showingProjects = true;
    renderTiles();
  });
  
  // When the "Learning Outcomes" navbar link is clicked:
  // - Prevent the default link behavior
  // - Set state to show Learning Outcomes
  // - Re-render the tiles
  navLearning.addEventListener('click', (e) => {
    e.preventDefault();
    showingProjects = false;
    renderTiles();
  });
  
  // Initial Page Load
  
  // Render the tiles once when the page first loads
  renderTiles();
  