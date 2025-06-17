// Project data array - contains information for project tiles
const projects = [
    { 
      title: 'STUDIO MYO', 
      link: 'index.html', 
      image: 'images/myo-mockup-crop.jpg',
      size: 'tall' // Defines a tall tile height
    },
    { 
      title: 'KROM', 
      link: 'krom.html', 
      image: 'images/mockup-center.jpg',
      size: 'medium' // medium height
    },
    { 
      title: 'PORTFOLIO', 
      link: 'portfolio.html', 
      image: 'images/main-mockup-portfolio.jpg',
      size: 'short' // short height
    },
    // { 
    //   title: 'BLANK', 
    //   link: 'ux-design.html', 
    //   image: 'images/image-placeholder.png',
    //   size: 'tall' // medium height
    // },
    { 
      title: 'CODING PRACTICE', 
      link: 'code.html', 
      image: 'images/testpic.png',
      size: 'medium' // tall height
    },
    { 
      title: 'ABOUT ME', 
      link: 'aboutme.html', 
      image: 'images/milaaaa.jpg',
      size: 'short' // short height
    },
   
  ];
  
// Learning outcomes data array - contains information for learning outcome tiles
const learningOutcomes = [
    { 
      title: 'Learning Outcome 1', 
      link: 'lo1.html', 
      image: 'images/ipad-usertest .jpg',
      size: 'medium' // Defines a medium tile height
    },
    { 
      title: 'Learning Outcome 2', 
      link: 'lo2.html', 
      image: 'images/code-mockup.jpg',
      size: 'short'
    },
    { 
      title: 'Learning Outcome 3', 
      link: 'lo3.html', 
      image: 'images/mockup-for-lo3.jpg',
      size: 'tall'
    },
    { 
        title: 'Learning Outcome 5', 
        link: 'lo5.html', 
        image: 'images/lo5-pic.png',
        size: 'medium'
      },
    { 
      title: 'Learning Outcome 4', 
      link: 'lo4.html', 
      image: 'images/linked-in-mockup.jpg',
      size: 'short'
    },
    
  ];
  
// State management - tracks which view is currently displayed
let showingProjects = true;

// DOM element references for interactive elements
const tileContainer = document.getElementById('tileContainer');
const toggleButton = document.getElementById('toggleButton');
const mainTitle = document.getElementById('mainTitle');

/**
 * Renders tiles based on current state (projects or learning outcomes)
 * Clears existing content and creates new tile elements dynamically
 */
function renderTiles() {
    // Clear existing tiles
    tileContainer.innerHTML = '';
    
    // Select dataset based on current view state
    const data = showingProjects ? projects : learningOutcomes;
    
    // Create document fragment for better performance
    const fragment = document.createDocumentFragment();
    
    // Loop through dataset and create tile elements
    data.forEach(item => {
        // Create container div for tile
        const tile = document.createElement('div');
        tile.className = `portfolio-item ${item.size || 'medium'}`;
        
        // Set tile height based on size property
        if (item.size === 'short') {
            tile.style.gridRowEnd = 'span 10'; 
        } else if (item.size === 'medium') {
            tile.style.gridRowEnd = 'span 12'; 
        } else if (item.size === 'tall') {
            tile.style.gridRowEnd = 'span 14'; 
        }
        
        // Create link element
        const link = document.createElement('a');
        link.href = item.link;
        
        // Store current view state in localStorage when tile is clicked
        link.addEventListener('click', () => {
            localStorage.setItem('previousPage', showingProjects ? 'projects' : 'learningOutcomes');
        });

        // Add image if one is specified
        if (item.image) {
            const img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title;
            img.className = 'tile-image';
            img.loading = 'lazy'; // Enable lazy loading for better performance
            link.appendChild(img);
        }
        
        // Create and add title element
        const title = document.createElement('div');
        title.className = 'tile-title';
        title.textContent = item.title;
        link.appendChild(title);
        
        // Add completed link to tile
        tile.appendChild(link);
        
        // Add tile to document fragment
        fragment.appendChild(tile);
    });
    
    // Add all tiles to DOM at once
    tileContainer.appendChild(fragment);
    
    // Update page title and toggle button text
    mainTitle.textContent = showingProjects ? 'Projects' : 'Learning Outcomes';
    toggleButton.textContent = `Switch to ${showingProjects ? 'Learning Outcomes' : 'Projects'}`;
}

// Event listener for toggle button - switches between projects and learning outcomes
toggleButton.addEventListener('click', () => {
    showingProjects = !showingProjects;
    renderTiles();
});

// Configure back button functionality
const backButtons = document.querySelectorAll('.back-button');
backButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Check localStorage for previous page state
        const previousPage = localStorage.getItem('previousPage');
        if (previousPage === 'learningOutcomes') {
            showingProjects = false;
        } else if (previousPage === 'projects') {
            showingProjects = true;
        }
        renderTiles();
    });
});

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
    // Check localStorage for previous page state
    const previousPage = localStorage.getItem('previousPage');
    if (previousPage === 'learningOutcomes') {
        showingProjects = false;
    } else {
        showingProjects = true;
    }
    renderTiles();
});