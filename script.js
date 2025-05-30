const projects = [
    { 
      title: 'STUDIO MYO', 
      link: 'index.html', 
      image: 'myo-mockup-crop.jpg',
      size: 'tall' // tall height
    },
    { 
      title: 'KROM', 
      link: 'krom.html', 
      image: 'mockup-center.jpg',
      size: 'medium' // medium height
    },
    { 
      title: 'PORTFOLIO', 
      link: 'portfolio-page.html', 
      image: 'image-placeholder.png',
      size: 'short' // short height
    },
    { 
      title: 'BLANK', 
      link: 'ux-design.html', 
      image: 'image-placeholder.png',
      size: 'medium' // medium height
    },
    { 
      title: 'CODING PRACTICE', 
      link: 'code.html', 
      image: 'image-placeholder.png',
      size: 'tall' // tall height
    },
    { 
      title: 'ABOUT ME', 
      link: 'branding.html', 
      image: 'image-placeholder.png',
      size: 'short' // short height
    },
    { 
      title: 'BLANK', 
      link: 'web-design.html', 
      image: 'image-placeholder.png',
      size: 'tall' // tall height
    },
    { 
      title: 'BLANK', 
      link: 'illustration.html', 
      image: 'image-placeholder.png',
      size: 'medium' // medium height
    },
    { 
      title: 'BLANK', 
      link: 'motion.html', 
      image: 'image-placeholder.png',
      size: 'short' // short height
    }
  ];
  
  const learningOutcomes = [
    { 
      title: 'Learning Outcome 1', 
      link: 'lo1.html', 
      image: 'image-placeholder.png',
      size: 'medium'
    },
    { 
      title: 'Learning Outcome 2', 
      link: 'lo2.html', 
      image: 'code-mockup.jpg',
      size: 'short'
    },
    { 
      title: 'Learning Outcome 3', 
      link: 'lo3.html', 
      image: 'image-placeholder.png',
      size: 'tall'
    },
    { 
        title: 'Learning Outcome 5', 
        link: 'lo5.html', 
        image: 'lo5-pic.png',
        size: 'medium'
      },
    { 
      title: 'Learning Outcome 4', 
      link: 'lo4.html', 
      image: 'linked-in-mockup.jpg',
      size: 'short'
    },
    
  ];
  
  // UI State Management
  let showingProjects = true;
  
  // DOM Element References
  const tileContainer = document.getElementById('tileContainer');
  const toggleButton = document.getElementById('toggleButton');
  const mainTitle = document.getElementById('mainTitle');
  
  // Function to Render Tiles Dynamically with improved layout
  function renderTiles() {
    // Clear any existing content in the tile container
    tileContainer.innerHTML = '';
    
    // Decide which dataset to use based on the current state
    const data = showingProjects ? projects : learningOutcomes;
    
    // Create a fragment to improve performance
    const fragment = document.createDocumentFragment();
    
    // Loop through each item in the selected dataset and create tile elements
    data.forEach(item => {
      // Create a tile container div for each item
      const tile = document.createElement('div');
      tile.className = `portfolio-item ${item.size || 'medium'}`; // Apply size class
      
      // Updated tile height settings
      if (item.size === 'short') {
          tile.style.gridRowEnd = 'span 10'; 
      } else if (item.size === 'medium') {
          tile.style.gridRowEnd = 'span 12'; 
      } else if (item.size === 'tall') {
          tile.style.gridRowEnd = 'span 14'; 
      }
      
      // Create an anchor (link) element for the tile
      const link = document.createElement('a');
      link.href = item.link;
      
      // Add a click event listener to track the previous page
      link.addEventListener('click', () => {
        localStorage.setItem('previousPage', showingProjects ? 'projects' : 'learningOutcomes');
      });

      // If the item has an image, create an image element and add it to the tile
      if (item.image) {
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.className = 'tile-image';
        
        // Add loading="lazy" for better performance
        img.loading = 'lazy';
        
        link.appendChild(img);
      }
      
      // Create a title element for the tile
      const title = document.createElement('div');
      title.className = 'tile-title';
      title.textContent = item.title;
      
      // Add the title element to the link
      link.appendChild(title);
      
      // Add the link (with image and title) to the tile container
      tile.appendChild(link);
      
      // Add the completed tile to our document fragment
      fragment.appendChild(tile);
    });
    
    // Add all tiles to the DOM at once (more efficient)
    tileContainer.appendChild(fragment);
    
    // Update the page's main title and toggle button text based on current state
    mainTitle.textContent = showingProjects ? 'Projects' : 'Learning Outcomes';
    toggleButton.textContent = `Switch to ${showingProjects ? 'Learning Outcomes' : 'Projects'}`;
  }
  
  // Event Listeners for Interactivity
  toggleButton.addEventListener('click', () => {
    showingProjects = !showingProjects;
    renderTiles();
  });
  
  // Override back button functionality
  const backButtons = document.querySelectorAll('.back-button');
  backButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior
  
      const previousPage = localStorage.getItem('previousPage');
      if (previousPage === 'learningOutcomes') {
        showingProjects = false;
      } else if (previousPage === 'projects') {
        showingProjects = true;
      }
      renderTiles();
    });
  });
  
  // Initial Page Load
  document.addEventListener('DOMContentLoaded', () => {
    const previousPage = localStorage.getItem('previousPage');
    if (previousPage === 'learningOutcomes') {
      showingProjects = false;
    } else {
      showingProjects = true;
    }
    renderTiles();
  });