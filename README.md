# Valdez Hanz UI Garden - Component Library with Code Quality Checks

A comprehensive React component library built with TypeScript, Styled Components, and Storybook for Assignment 13, enhanced with automated code quality checks and CI/CD pipeline.

## Overview

This project contains a collection of reusable UI components designed for modern web applications. All components are fully responsive, accessible, and come with comprehensive documentation via Storybook. Assignment 13 adds Husky pre-commit hooks and GitHub Actions for continuous integration.

## Components Included

- **Button** - Interactive button with multiple variants and sizes
- **Label** - Text labels for form elements
- **Text** - Flexible text component with various styling options
- **Table Components** - Complete table system (Table, TableHeader, TableRow, TableCell, TableFooter)
- **Dropdown** - Select dropdown with customizable options
- **RadioButton** - Radio button input with custom styling
- **Img** - Responsive image component
- **HeroImage** - Hero section with overlay text support
- **Card** - Flexible card layout component

## Code Quality Features (Assignment 13)

### Pre-commit Hooks with Husky
- **ESLint** - Code quality and style enforcement
- **Prettier** - Automatic code formatting
- **Tests** - All tests must pass before commit
- **Lint-staged** - Only checks modified files for performance

### CI/CD Pipeline
- **GitHub Actions** - Automated builds and quality checks
- **Docker Integration** - Automated container builds
- **Branch Protection** - Quality gates for main branch

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm package manager
- Docker (for containerized deployment)
- Git (for version control and hooks)

### Local Development

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd coding-assignment-13
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   Opens [http://localhost:3000](http://localhost:3000) to view the React app.

3. **Start Storybook:**
   ```bash
   npm run storybook
   ```
   Opens [http://localhost:6006](http://localhost:6006) to view the component library.

4. **Run code quality checks manually:**
   ```bash
   npm run lint          # Run ESLint
   npm run format:check  # Check Prettier formatting
   npm run test:ci       # Run tests with coverage
   ```

5. **Fix formatting issues:**
   ```bash
   npm run lint:fix      # Auto-fix ESLint issues
   npm run format        # Auto-format with Prettier
   ```

## Docker Deployment

### Running with Docker

To run the application on localhost:8018 using Docker:

1. **Build the Docker image:**
   ```bash
   docker build -t valdez_hanz_coding_assignment13 .
   ```
   *Note: The build process includes all code quality checks and will fail if any checks don't pass.*

2. **Run the container:**
   ```bash
   docker run -p 8018:8018 --name valdez_hanz_coding_assignment13 valdez_hanz_coding_assignment13
   ```

3. **Access the application:**
   - Main React App: [http://localhost:8018](http://localhost:8018)
   - Storybook: [http://localhost:8018/storybook](http://localhost:8018/storybook)

### Docker Commands Reference

- **Stop the container:**
  ```bash
  docker stop valdez_hanz_coding_assignment13
  ```

- **Remove the container:**
  ```bash
  docker rm valdez_hanz_coding_assignment13
  ```

- **Remove the image:**
  ```bash
  docker rmi valdez_hanz_coding_assignment13
  ```

## Component Features

### Universal Features
All components include:
- ✅ **Responsive design** - Optimized for mobile, tablet, and desktop
- ✅ **Disabled state** - Visual and functional disabled state
- ✅ **Custom styling** - backgroundColor and className props
- ✅ **TypeScript support** - Full type definitions
- ✅ **Storybook integration** - Interactive documentation
- ✅ **Comprehensive testing** - Unit tests with Jest and React Testing Library

### Styled Components
- All styling uses Styled Components for CSS-in-JS
- Consistent design system with shared color palette
- Smooth transitions and hover effects
- Mobile-first responsive design approach

### Testing
Each component includes:
- Visibility test (component renders and is visible)
- Disabled state test (background color and cursor changes)
- Additional functionality-specific tests

## Available Scripts

### Development
- `npm start` - Runs development server on port 3000
- `npm run storybook` - Runs Storybook on port 6006
- `npm test` - Runs test suite in watch mode
- `npm run test:ci` - Runs tests with coverage for CI/CD

### Code Quality
- `npm run lint` - Run ESLint checks
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted correctly

### Production
- `npm run build` - Creates production build in `/build`
- `npm run build-storybook` - Creates Storybook build in `/storybook-static`

### Git Hooks
- `npm run prepare` - Set up Husky git hooks

## Project Structure

```
src/
├── components/           # All UI components
│   ├── Button/          # Button component files
│   │   ├── Button.tsx
│   │   ├── Button.types.tsx
│   │   ├── Button.stories.tsx
│   │   ├── Button.tests.tsx
│   │   └── index.ts
│   ├── [Component]/     # Same structure for each component
│   ├── types.ts         # Shared type definitions
│   └── index.ts         # Component exports
├── stories/             # Storybook example stories
└── ...
```

## Assignment 13 Requirements Met

✅ **Docker Configuration** - Dockerfile with nginx serving on port 8018  
✅ **Working Directory** - Container uses valdez_hanz_ui_garden_build_checks  
✅ **Container Name** - valdez_hanz_coding_assignment13  
✅ **Pre-commit Hooks** - Husky implementation with quality checks  
✅ **Prettier Integration** - Code formatting checks and auto-fixing  
✅ **ESLint Integration** - Code quality and style enforcement  
✅ **Test Integration** - All tests must pass before commit  
✅ **GitHub Actions** - CI/CD pipeline with quality gates  
✅ **Build Quality Checks** - Docker build includes all quality checks  
✅ **Component Structure** - All components follow required file structure  
✅ **Styled Components** - All styling uses Styled Components  
✅ **Responsive Design** - All components work across screen sizes  
✅ **Storybook Controls** - Interactive property controls  
✅ **Testing Coverage** - Comprehensive test suite

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Styled Components** - CSS-in-JS styling
- **Storybook 9** - Component documentation
- **Jest & React Testing Library** - Testing framework
- **Docker & Nginx** - Containerized deployment
- **Husky** - Git hooks management
- **Prettier** - Code formatting
- **ESLint** - Code quality and style
- **GitHub Actions** - CI/CD pipeline
- **lint-staged** - Pre-commit file filtering

## Pre-commit Hook Behavior

When you try to commit code, the following checks run automatically:

1. **lint-staged** processes only modified files
2. **ESLint** checks for code quality issues and auto-fixes what it can
3. **Prettier** formats the code according to style rules
4. **Tests** run to ensure no regressions
5. **If any check fails**, the commit is blocked until issues are resolved

## GitHub Actions Workflow

The CI/CD pipeline runs on:
- Push to `main` or `develop` branches
- Pull requests to `main` branch

Pipeline steps:
1. **Code Quality Checks** - ESLint, Prettier, Tests
2. **Build Verification** - React app and Storybook builds
3. **Docker Build** - (main branch only) Container creation and testing
4. **Artifact Upload** - Build files saved for deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Assignment 13 - WEBD-3012
**Student:** Hanz Valdez  
**Course:** Business Systems Build and Testing  
**Institution:** Red River College
# uicomponentlibrary
