// Wallpaper data
const wallpapers = [
  {
    id: 1,
    title: "Mountain Sunset",
    category: "nature",
    modalDownload: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 2,
    title: "Colorful Gradient",
    category: "abstract",
    imageUrl: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1429&q=80"
  },
  {
    id: 3,
    title: "Lion King",
    category: "animals",
    imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1559&q=80"
  },
  {
    id: 4,
    title: "Milky Way",
    category: "space",
    imageUrl: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80"
  },
  {
    id: 5,
    title: "New York Skyline",
    category: "city",
    imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 6,
    title: "Tropical Beach",
    category: "nature",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
  },
  {
    id: 7,
    title: "Neon Lights",
    category: "abstract",
    imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 8,
    title: "Fox in Snow",
    category: "animals",
    imageUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
  },
  {
    id: 9,
    title: "Galaxy Cluster",
    category: "space",
    imageUrl: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 10,
    title: "Tokyo at Night",
    category: "city",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 11,
    title: "Autumn Forest",
    category: "nature",
    imageUrl: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 12,
    title: "Fluid Art",
    category: "abstract",
    imageUrl: "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 13,
    title: "Elephant Herd",
    category: "animals",
    imageUrl: "https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 14,
    title: "Northern Lights",
    category: "space",
    imageUrl: "https://images.unsplash.com/photo-1483086431886-3590a88317fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 15,
    title: "Paris Streets",
    category: "city",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
  },
  {
    id: 16,
    title: "Waterfall",
    category: "nature",
    imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1559&q=80"
  },
  {
    id: 17,
    title: "Geometric Patterns",
    category: "abstract",
    imageUrl: "https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 18,
    title: "Panda Bear",
    category: "animals",
    imageUrl: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
  },
  {
    id: 19,
    title: "Nebula",
    category: "space",
    imageUrl: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
  },
  {
    id: 20,
    title: "Dubai Skyline",
    category: "city",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 21,
    title: "Dubai Skyline",
    category: "city",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  }
];

// DOM Elements
const wallpapersGrid = document.getElementById('wallpapers-grid');
const categoryButtons = document.querySelectorAll('.category-btn');
const categoryPreviews = document.querySelectorAll('.category-preview');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const modal = document.getElementById('wallpaper-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDownload = document.getElementById('modal-download');
const closeModal = document.querySelector('.close-modal');
const prevSlideBtn = document.getElementById('prev-slide');
const nextSlideBtn = document.getElementById('next-slide');
const featuredSlides = document.querySelectorAll('.featured-slide');
const featuredViewButtons = document.querySelectorAll('.featured-slide .btn');
const newsletterForm = document.getElementById('newsletter-form');
const footerCategoryLinks = document.querySelectorAll('.footer-categories a');

// Current filter state
let currentCategory = 'all';
let currentSearchTerm = '';
let currentSlideIndex = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  displayWallpapers();
  setupEventListeners();
  startSlideshow();
});

// Display wallpapers based on current filters
function displayWallpapers() {
  // Clear the grid
  wallpapersGrid.innerHTML = '';
  
  // Filter wallpapers based on category and search term
  let filteredWallpapers = wallpapers;
  
  if (currentCategory !== 'all') {
    filteredWallpapers = filteredWallpapers.filter(wallpaper => 
      wallpaper.category === currentCategory
    );
  }
  
  if (currentSearchTerm) {
    filteredWallpapers = filteredWallpapers.filter(wallpaper => 
      wallpaper.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
      wallpaper.category.toLowerCase().includes(currentSearchTerm.toLowerCase())
    );
  }
  
  // Display message if no wallpapers found
  if (filteredWallpapers.length === 0) {
    wallpapersGrid.innerHTML = `
      <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
        <h3>No wallpapers found</h3>
        <p>Try a different search term or category</p>
      </div>
    `;
    return;
  }
  
  // Create and append wallpaper cards
  filteredWallpapers.forEach(wallpaper => {
    const wallpaperCard = document.createElement('div');
    wallpaperCard.className = 'wallpaper-card';
    wallpaperCard.dataset.id = wallpaper.id;
    
    wallpaperCard.innerHTML = `
      <img class="wallpaper-img" src="${wallpaper.imageUrl}" alt="${wallpaper.title}">
      <div class="wallpaper-info">
        <h3>${wallpaper.title}</h3>
        <span class="wallpaper-category">${capitalizeFirstLetter(wallpaper.category)}</span>
      </div>
    `;
    
    wallpapersGrid.appendChild(wallpaperCard);
  });
}

// Set up event listeners
function setupEventListeners() {
  // Category filter buttons
  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Update current category and display wallpapers
      currentCategory = button.dataset.category;
      displayWallpapers();
    });
  });
  
  // Category preview clicks
  categoryPreviews.forEach(preview => {
    preview.addEventListener('click', () => {
      const category = preview.dataset.category;
      
      // Update active button
      categoryButtons.forEach(btn => {
        if (btn.dataset.category === category) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      // Update current category and display wallpapers
      currentCategory = category;
      displayWallpapers();
      
      // Scroll to wallpapers section
      document.querySelector('.wallpapers').scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Footer category links
  footerCategoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.dataset.category;
      
      // Update active button
      categoryButtons.forEach(btn => {
        if (btn.dataset.category === category) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
      
      // Update current category and display wallpapers
      currentCategory = category;
      displayWallpapers();
      
      // Scroll to categories section
      document.querySelector('.categories').scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Search functionality
  searchButton.addEventListener('click', () => {
    currentSearchTerm = searchInput.value.trim();
    displayWallpapers();
  });
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      currentSearchTerm = searchInput.value.trim();
      displayWallpapers();
    }
  });
  
  // Wallpaper card click (open modal)
  wallpapersGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.wallpaper-card');
    if (card) {
      const wallpaperId = parseInt(card.dataset.id);
      const wallpaper = wallpapers.find(w => w.id === wallpaperId);
      
      if (wallpaper) {
        openModal(wallpaper);
      }
    }
  });
  
  // Featured slide view buttons
  featuredViewButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const wallpaperId = parseInt(button.dataset.id);
      const wallpaper = wallpapers.find(w => w.id === wallpaperId);
      
      if (wallpaper) {
        openModal(wallpaper);
      }
    });
  });
  
  // Slider controls
  prevSlideBtn.addEventListener('click', () => {
    showSlide(currentSlideIndex - 1);
  });
  
  nextSlideBtn.addEventListener('click', () => {
    showSlide(currentSlideIndex + 1);
  });
  
  // Newsletter form submission
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      
      if (emailInput.value.trim()) {
        // In a real application, you would send this to a server
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
      }
    });
  }
  
  // Close modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none'
    }
  });
}

// Open modal with wallpaper details
function openModal(wallpaper) {
  modalImage.src = wallpaper.imageUrl;
  modalTitle.textContent = wallpaper.title;
  modalCategory.textContent = capitalizeFirstLetter(wallpaper.category);
  modalDownload.href = wallpaper.imageUrl;
  
  modal.style.display = 'block';
}

// Slideshow functionality
function startSlideshow() {
  // Set initial slide
  showSlide(0);
  
  // Auto-advance slides every 5 seconds
  setInterval(() => {
    showSlide(currentSlideIndex + 1);
  }, 5000);
}

function showSlide(index) {
  // Handle wrapping around
  if (index < 0) {
    index = featuredSlides.length - 1;
  } else if (index >= featuredSlides.length) {
    index = 0;
  }
  
  // Hide all slides
  featuredSlides.forEach(slide => {
    slide.style.opacity = 0;
    slide.style.zIndex = 0;
  });
  
  // Show the current slide
  featuredSlides[index].style.opacity = 1;
  featuredSlides[index].style.zIndex = 1;
  
  // Update current index
  currentSlideIndex = index;
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
let currentIndex = 0;
const slides = document.querySelectorAll('.featured-slide');

document.getElementById('next-slide').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});

document.getElementById('prev-slide').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}
