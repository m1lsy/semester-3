// Tile data
const projects = [
    { title: 'STUDIO MYO', link: 'index.html' },
    { title: 'KROM', link: 'krom.html' },
    { title: 'PORTFOLIO', link: 'portfolio-page.html' },
    { title: 'Project 4', link: 'another-page.html' },
    { title: 'Project 5', link: 'another-page.html' },
    { title: 'Project 6', link: 'another-page.html' }
  ];
  
  const learningOutcomes = [
    { title: 'Learning Outcome 1', link: 'lo1.html' },
    { title: 'Learning Outcome 2', link: 'lo2.html' },
    { title: 'Learning Outcome 3', link: 'lo3.html' },
    { title: 'Learning Outcome 4', link: 'lo4.html' },
    { title: 'Learning Outcome 5', link: 'lo5.html' }
  ];
  
  // Toggle state
  let showingProjects = true;
  
  // Get DOM elements
  const tileContainer = document.getElementById('tileContainer');
  const toggleButton = document.getElementById('toggleButton');
  const mainTitle = document.getElementById('mainTitle');
  const navProjects = document.getElementById('navProjects');
  const navLearning = document.getElementById('navLearning');
  
  // Render function
  function renderTiles() {
    tileContainer.innerHTML = ''; // Clear current tiles
  
    const data = showingProjects ? projects : learningOutcomes;
  
    data.forEach(item => {
      const tile = document.createElement('div');
      tile.className = 'grid-item';
  
      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = item.title;
  
      tile.appendChild(link);
      tileContainer.appendChild(tile);
    });
  
    // Update title and button
    mainTitle.textContent = showingProjects ? 'Projects' : 'Learning Outcomes';
    toggleButton.textContent = showingProjects ? 'Switch to Learning Outcomes' : 'Switch to Projects';
  }
  
  // Toggle view on button click
  toggleButton.addEventListener('click', () => {
    showingProjects = !showingProjects;
    renderTiles();
  });
  
  // Navbar links
  navProjects.addEventListener('click', (e) => {
    e.preventDefault();
    showingProjects = true;
    renderTiles();
  });
  
  navLearning.addEventListener('click', (e) => {
    e.preventDefault();
    showingProjects = false;
    renderTiles();
  });
  
  // Initial render
  renderTiles();
  