// Tile data
const projects = [
    { title: 'STUDIO MYO', link: 'index.html' },
    { title: 'KROM', link: 'krom.html' },
    { title: 'PORTFOLIO', link: 'portfolio-page.html' },
    { title: '', link: 'another-page.html' },
    { title: '', link: 'another-page.html' },
    { title: '', link: 'another-page.html' }
  ];
  
  const learningOutcomes = [
    'Understand JavaScript fundamentals',
    'Build dynamic web applications',
    'Work with APIs and asynchronous code',
    'Master DOM manipulation',
    'Develop problem-solving skills'
  ];
  
  // Toggle state
  let showingProjects = true;
  
  // Get DOM elements
  const tileContainer = document.getElementById('tileContainer');
  const toggleButton = document.getElementById('toggleButton');
  const mainTitle = document.getElementById('mainTitle');
  const navProjects = document.getElementById('navProjects');
  const navLearning = document.getElementById('navLearning');
  
  // Function to render project or outcome tiles
  function renderTiles() {
    tileContainer.innerHTML = ''; // Clear current tiles
  
    if (showingProjects) {
      mainTitle.textContent = 'Projects';
      toggleButton.textContent = 'Switch to Learning Outcomes';
  
      projects.forEach(project => {
        const tile = document.createElement('div');
        tile.className = 'grid-item';
        tile.innerHTML = `<a href="${project.link}">${project.title}</a>`;
        tileContainer.appendChild(tile);
      });
  
    } else {
      mainTitle.textContent = 'Learning Outcomes';
      toggleButton.textContent = 'Switch to Projects';
  
      learningOutcomes.forEach(outcome => {
        const tile = document.createElement('div');
        tile.className = 'grid-item tile'; // Add your custom tile styling
        tile.textContent = outcome;
        tileContainer.appendChild(tile);
      });
    }
  }
  
  // Toggle button listener
  toggleButton.addEventListener('click', () => {
    showingProjects = !showingProjects;
    renderTiles();
  });
  
  // Optional: Enable navbar link behavior
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
  