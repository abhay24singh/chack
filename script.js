// Sample internship data
const internships = [
    {
        id: 1,
        title: "Software Development Intern",
        company: "TechCorp Solutions",
        location: "San Francisco, CA",
        description: "Join our development team and work on cutting-edge web applications. You'll gain experience with React, Node.js, and cloud technologies.",
        type: "Full-time",
        duration: "3 months"
    },
    {
        id: 2,
        title: "Marketing Intern",
        company: "Digital Marketing Pro",
        location: "New York, NY",
        description: "Assist with social media campaigns, content creation, and market research. Perfect for students interested in digital marketing.",
        type: "Part-time",
        duration: "6 months"
    },
    {
        id: 3,
        title: "Data Science Intern",
        company: "Analytics Inc",
        location: "Remote",
        description: "Work with large datasets, create visualizations, and develop machine learning models. Experience with Python and SQL preferred.",
        type: "Full-time",
        duration: "4 months"
    },
    {
        id: 4,
        title: "UX/UI Design Intern",
        company: "Creative Studio",
        location: "Los Angeles, CA",
        description: "Design user interfaces and experiences for mobile and web applications. Work with Figma, Adobe Creative Suite, and user research.",
        type: "Part-time",
        duration: "3 months"
    },
    {
        id: 5,
        title: "Business Development Intern",
        company: "StartupXYZ",
        location: "Austin, TX",
        description: "Support business growth initiatives, conduct market analysis, and assist with client relationships. Great for business students.",
        type: "Full-time",
        duration: "6 months"
    },
    {
        id: 6,
        title: "Content Writing Intern",
        company: "Media House",
        location: "Chicago, IL",
        description: "Create engaging content for blogs, social media, and marketing materials. Strong writing skills and creativity required.",
        type: "Part-time",
        duration: "4 months"
    },
    {
        id: 7,
        title: "Cybersecurity Intern",
        company: "SecureTech",
        location: "Seattle, WA",
        description: "Learn about network security, vulnerability assessment, and incident response. Basic knowledge of networking and security concepts preferred.",
        type: "Full-time",
        duration: "5 months"
    },
    {
        id: 8,
        title: "Financial Analysis Intern",
        company: "FinanceFirst",
        location: "Boston, MA",
        description: "Assist with financial modeling, market research, and investment analysis. Strong analytical skills and Excel proficiency required.",
        type: "Full-time",
        duration: "6 months"
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const internshipsList = document.getElementById('internshipsList');
const contactForm = document.getElementById('contactForm');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayInternships(internships);
    setupEventListeners();
    setupSmoothScrolling();
});

// Display internships
function displayInternships(internshipsToShow) {
    if (internshipsToShow.length === 0) {
        internshipsList.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
                <h3>No internships found</h3>
                <p>Try adjusting your search terms or browse all available opportunities.</p>
            </div>
        `;
        return;
    }

    internshipsList.innerHTML = internshipsToShow.map(internship => `
        <div class="internship-card">
            <h3 class="internship-title">${internship.title}</h3>
            <p class="internship-company">${internship.company}</p>
            <p class="internship-location">📍 ${internship.location}</p>
            <p class="internship-description">${internship.description}</p>
            <div style="margin-bottom: 1rem; font-size: 0.9rem; color: #7f8c8d;">
                <span style="background: #e3f2fd; padding: 4px 8px; border-radius: 12px; margin-right: 8px;">${internship.type}</span>
                <span style="background: #f3e5f5; padding: 4px 8px; border-radius: 12px;">${internship.duration}</span>
            </div>
            <button class="apply-btn" onclick="applyToInternship(${internship.id})">Apply Now</button>
        </div>
    `).join('');
}

// Search functionality
function searchInternships() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayInternships(internships);
        return;
    }

    const filteredInternships = internships.filter(internship => 
        internship.title.toLowerCase().includes(searchTerm) ||
        internship.company.toLowerCase().includes(searchTerm) ||
        internship.location.toLowerCase().includes(searchTerm) ||
        internship.description.toLowerCase().includes(searchTerm)
    );

    displayInternships(filteredInternships);
    
    // Add search result count
    const resultCount = document.createElement('div');
    resultCount.style.cssText = 'grid-column: 1 / -1; text-align: center; margin-bottom: 1rem; color: #7f8c8d;';
    resultCount.textContent = `Found ${filteredInternships.length} internship${filteredInternships.length !== 1 ? 's' : ''} matching "${searchInput.value}"`;
    
    if (!document.querySelector('.search-results')) {
        resultCount.className = 'search-results';
        internshipsList.insertBefore(resultCount, internshipsList.firstChild);
    } else {
        document.querySelector('.search-results').textContent = resultCount.textContent;
    }
}

// Apply to internship function
function applyToInternship(internshipId) {
    const internship = internships.find(emp => emp.id === internshipId);
    
    // Show application modal/alert
    const applicationMessage = `
        Application for: ${internship.title}
        Company: ${internship.company}
        Location: ${internship.location}
        
        Thank you for your interest! Your application has been submitted.
        The company will contact you within 5-7 business days.
    `;
    
    alert(applicationMessage);
    
    // In a real application, this would send data to a server
    console.log('Application submitted for:', internship);
}

// Contact form handling
function handleContactForm(event) {
    event.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    showMessage('Sending message...', 'success');
    
    setTimeout(() => {
        showMessage('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
        contactForm.reset();
    }, 1500);
    
    // In a real application, this would send data to a server
    console.log('Contact form submitted:', { name, email, subject, message });
}

// Show message function
function showMessage(text, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    contactForm.insertBefore(message, contactForm.firstChild);
    
    // Auto-remove success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 5000);
    }
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchBtn.addEventListener('click', searchInternships);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchInternships();
        }
    });
    
    // Real-time search as user types
    searchInput.addEventListener('input', function() {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(searchInternships, 300);
    });
    
    // Contact form
    contactForm.addEventListener('submit', handleContactForm);
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#2c3e50';
        navbar.style.backdropFilter = 'none';
    }
});

// Add loading animation to search button
function addLoadingToSearch() {
    const originalText = searchBtn.textContent;
    searchBtn.innerHTML = '<span class="loading"></span> Searching...';
    searchBtn.disabled = true;
    
    setTimeout(() => {
        searchBtn.textContent = originalText;
        searchBtn.disabled = false;
    }, 1000);
}

// Enhanced search with loading
searchBtn.addEventListener('click', function() {
    addLoadingToSearch();
    setTimeout(searchInternships, 500);
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to internship cards
    const cards = document.querySelectorAll('.internship-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add typing animation to hero title
    const heroTitle = document.querySelector('.hero h1');
    const titleText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < titleText.length) {
            heroTitle.textContent += titleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    setTimeout(typeWriter, 500);
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape' && document.activeElement === searchInput) {
        searchInput.value = '';
        displayInternships(internships);
        const searchResults = document.querySelector('.search-results');
        if (searchResults) {
            searchResults.remove();
        }
    }
});

// Add tooltip for search shortcuts
searchInput.addEventListener('focus', function() {
    if (!this.title) {
        this.title = 'Press Ctrl+K to focus search, Escape to clear';
    }
});

// Performance optimization: Debounce search input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to search
const debouncedSearch = debounce(searchInternships, 300);
searchInput.addEventListener('input', debouncedSearch);
