# Azaan Ul Haq - Professional Portfolio

A modern, recruiter-focused portfolio website built with React and Tailwind CSS. Designed to showcase professional experience, projects, and skills in the enterprise tech sector.

## 🎯 Features

- **Modern Dark Theme** - Professional, minimal design optimized for recruiting
- **Recruiter-Friendly** - Scans in 10 seconds with clear impact statements
- **Fully Responsive** - Perfect on mobile, tablet, and desktop
- **Performance Optimized** - Fast load times with modern tooling
- **Component-Based** - Reusable React components with clean architecture

## 📋 Sections Included

1. **Navbar** - Sticky header with navigation and CTA buttons
2. **Hero Section** - Personal introduction with headline and quick stats
3. **Experience** - Detailed work history with key accomplishments
4. **Projects** - 4 featured projects with impact statements
5. **Skills** - Technical skills, tools, and core strengths
6. **Education** - Academic background and certifications
7. **Contact** - Contact form, social links, and location

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool for fast development
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library for social links and visual elements

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:5173`

## 📝 Customization

### Update Personal Information
Edit the following files to add your information:

- **Navbar.jsx** - Email, phone, and contact links
- **Hero.jsx** - Name, headline, and profile image
- **Experience.jsx** - Add/edit work history
- **Projects.jsx** - Update portfolio projects
- **Skills.jsx** - Add/remove skills
- **Education.jsx** - Academic credentials
- **Contact.jsx** - Contact methods and social links

### Styling
All colors and spacing are defined in `tailwind.config.js`. Modify the `theme` section to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0f172a',      // Main bg
      secondary: '#1e293b',    // Card bg
      accent: '#3b82f6',       // Accent color
    }
  }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Palette

- **Primary (Dark)**: `#0f172a` - Main background
- **Secondary (Darker)**: `#1e293b` - Cards and sections
- **Accent (Blue)**: `#3b82f6` - CTAs and highlights
- **Text**: `#f1f5f9` (white), `#94a3b8` (gray)

## 📦 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── ProjectCard.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Performance Tips

- Images are optimized for web
- CSS is purged for production (Tailwind)
- Code splitting with Vite
- Smooth scrolling for better UX

## 📄 License

This portfolio template is free to use and modify. Feel free to customize it for your own professional use.

## 💡 Tips for Success

1. **Add a Real Photo** - Replace the placeholder in Hero section
2. **Update Contact Info** - Replace example email and phone
3. **Add Real Projects** - Update projects with your actual work
4. **Customize Colors** - Match your brand identity
5. **Add Your Resume** - Create a public resume PDF link
6. **Social Links** - Update GitHub, LinkedIn, etc.
7. **Test Mobile** - Ensure it looks great on all devices

---

Built with 💙 for modern professionals.
