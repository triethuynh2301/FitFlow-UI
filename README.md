# FitFlow - Fitness Tracking Application

A modern fitness tracking application built with React, TypeScript, and Mantine UI.

## Architecture Overview

### Components Organization

- **UI Components (`/components/ui`)**: Reusable UI elements like buttons, inputs, and cards
- **Layout Components (`/components/layout`)**: Page layout elements like headers and navigation
- **Feature Components (`/modules/*/components`)**: Feature-specific components

### Feature-based Structure

Each feature module (`/modules/*`) is self-contained with its own:

- API calls
- Components
- Hooks
- State management
- Types
- Utilities

### Global Resources

- **Hooks**: Shared custom React hooks
- **Lib**: Third-party library configurations (Mantine, etc.)
- **Stores**: Global state management
- **Types**: Shared TypeScript types
- **Utils**: Common utility functions

## Technology Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Framework**: Mantine UI
- **Styling**: CSS Modules + Mantine Theme
- **State Management**: Zustand, Context API
- **Code Quality**: ESLint, Prettier
- **Testing**: Vitest

## Getting Started

- Clone the repository
- Install dependencies:

```bash
npm install
```

- Start the development server:

```bash
npm run dev
```
