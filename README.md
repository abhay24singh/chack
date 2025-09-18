# Internship Finder Website

A clean and modern internship finder website built with HTML, CSS, and JavaScript. This website allows users to search for internship opportunities, view detailed listings, and contact the organization.

## Features

- 🔍 **Smart Search**: Search internships by keywords, company, location, or description
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean and professional design with smooth animations
- 📋 **Contact Form**: Easy-to-use contact form for inquiries
- 🚀 **Fast Loading**: Optimized for quick loading and smooth user experience
- ⌨️ **Keyboard Shortcuts**: Press Ctrl+K to focus search, Escape to clear

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
   ```bash
   cd InternshipFinder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   Or use the live-reload development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm start` - Start a simple HTTP server
- `npm run dev` - Start live-reload development server
- `npm run serve` - Alternative server option

## Project Structure

```
InternshipFinder/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── package.json        # Project configuration
└── README.md          # This file
```

## Features Overview

### Homepage
- Hero section with search functionality
- Sample internship listings
- Responsive navigation bar

### Search Functionality
- Real-time search as you type
- Search by title, company, location, or description
- Clear search results with count

### Internship Listings
- 8 sample internships across different fields
- Detailed information including company, location, duration
- Apply button for each listing

### About Section
- Information about the platform
- Feature highlights
- Professional presentation

### Contact Form
- Name, email, subject, and message fields
- Form validation
- Success/error messaging

## Customization

### Adding New Internships
Edit the `internships` array in `script.js` to add new internship listings:

```javascript
const internships = [
    {
        id: 9,
        title: "Your Internship Title",
        company: "Company Name",
        location: "City, State",
        description: "Internship description...",
        type: "Full-time",
        duration: "3 months"
    }
    // ... more internships
];
```

### Styling
Modify `styles.css` to customize colors, fonts, and layout. The CSS uses CSS Grid and Flexbox for responsive design.

### Functionality
Extend `script.js` to add new features like:
- User authentication
- Saved searches
- Email notifications
- Advanced filtering

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions, please contact us through the contact form on the website or open an issue on GitHub.

---

**Happy job hunting! 🚀**
