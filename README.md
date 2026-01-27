# Your Insurance Services - Website

A modern, professional insurance company website built with React.

## Features

- **Health Insurance** with Dental and Vision sub-tabs
- **Auto Insurance** section
- **Homeowners Insurance** section
- Responsive design for all devices
- Smooth scrolling navigation
- Professional, modern UI/UX

## Company Information

- **Name:** Your Insurance Services
- **Phone:** (614) 414-2693
- **Services:** Health (Dental & Vision), Property & Casualty: Auto, Homeowners

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build` folder that you can deploy to any static hosting service.

## Deployment

### Option 1: Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to [Netlify](https://www.netlify.com/)
3. Connect your domain in Netlify settings

### Option 2: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in the project directory
3. Follow the prompts

### Option 3: GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

### Option 4: Traditional Web Hosting

1. Build the project: `npm run build`
2. Upload the contents of the `build` folder to your web server
3. Configure your domain to point to your hosting

## Project Structure

```
Insurance/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── HealthInsurance.js
│   │   ├── AutoInsurance.js
│   │   ├── HomeownersInsurance.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

### Adding a Logo

Replace the emoji logo (🛡️) in `Header.js` and `Footer.js` with your actual logo:

```jsx
<img src="/path-to-your-logo.png" alt="Your Insurance Services" />
```

### Updating Contact Information

Update the phone number and email in:
- `src/components/Header.js`
- `src/components/Footer.js`
- All component files that display contact information

### Styling

All component styles are in their respective `.css` files. The main color scheme uses:
- Primary Blue: `#1a5490`
- Secondary Blue: `#2d7bc4`
- Accent Gold: `#ffd700`

## Future Enhancements

- Backend integration (Node.js or Next.js)
- Contact form functionality
- Quote request system
- Customer portal
- Blog section
- Online payment integration

## License

This project is proprietary and confidential.
