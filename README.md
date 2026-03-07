# Restaurant Page

A dynamic single-page restaurant website built with vanilla JavaScript and Webpack. This project showcases a restaurant landing page with multiple sections including Home, Menu, and About pages, all dynamically rendered using JavaScript.

## Project Overview

This is a restaurant website made during _The Odin Project_ featuring a fully functional navigation system that dynamically loads different page content without requiring page reloads. The site is built from scratch using modern JavaScript development practices with Webpack as the module bundler.

## Features

- **Single Page Application (SPA)**: Seamless navigation between Home, Menu, and About pages
- **Dynamic Content Rendering**: All pages are generated programmatically using JavaScript DOM manipulation
- **Asset Management**: Webpack handles bundling and loading of images and stylesheets
- **Development Server**: Built-in hot-reload development server for efficient development

## Technologies Used

- **JavaScript (ES6+)**: Core language for logic and DOM manipulation
- **Webpack 5**: Module bundler and build tool
- **CSS3**: Styling and layout
- **HTML5**: Page structure
- **webpack-dev-server**: Local development server with hot reloading
- **css-loader & style-loader**: CSS processing and injection
- **html-loader**: HTML asset processing
- **html-webpack-plugin**: Automatic HTML generation

## Project Structure

```
src/
├── index.js           # Main entry point and navigation logic
├── home.js            # Home page content and components
├── menu.js            # Menu page content
├── aboutPage.js       # About page content
├── styles.css         # Global styles
├── template.html      # Base HTML template
└── img.jpg            # Restaurant preview image
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/UmaanMehraj/restaurant-page.git
cd restaurant-page
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development
Start the development server with hot-reloading:
```bash
npx webpack serve
```
The site will be available at `http://localhost:8080` (or the next available port)

The compiled files will be output to the `dist/` directory.

## How It Works

- The main entry point (`index.js`) imports all page modules
- Each page module exports a function that creates and returns a DOM element containing that page's content
- Navigation buttons trigger event listeners that clear and re-render the content div with the selected page
- Webpack bundles all assets and manages the dependency graph
- The development server provides automatic rebuilding and browser refresh

## Customization

### Adding a New Page
1. Create a new file in `src/` (e.g., `contact.js`)
2. Export a function that returns your page's DOM element
3. Import it in `index.js`
4. Add a navigation button and event listener
5. Add the button to your HTML template

### Styling
Modify `src/styles.css` to customize the appearance of the site.

## Future Enhancements

- Responsive mobile layout
- Additional animations and transitions

## Author

Umaan Mehraj