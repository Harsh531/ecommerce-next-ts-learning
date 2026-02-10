# E-Commerce Next.js TypeScript Application

A modern, full-featured e-commerce application built with **Next.js 16**, **React 19**, and **TypeScript**. This project demonstrates best practices in frontend development including state management with Redux Toolkit, server-side rendering, and responsive UI design.

## 🚀 Features

- **Product Catalog**: Browse and view products with detailed information
- **Shopping Cart**: Add/remove items with real-time cart updates
- **State Management**: Redux Toolkit for predictable state management
- **Responsive Design**: Fully responsive UI built with Tailwind CSS
- **Modern UI Components**: Radix UI components for accessibility
- **Type Safety**: Full TypeScript support for type-safe development
- **Mock API**: json-server for simulating backend API
- **Dark Mode Support**: Built-in dark mode styling with Tailwind CSS

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Architecture](#architecture)
- [State Management](#state-management)
- [Component Overview](#component-overview)
- [API Integration](#api-integration)
- [Styling](#styling)
- [Best Practices](#best-practices)

## 🛠️ Tech Stack

### Core Framework
- **Next.js 16.1.1** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type-safe JavaScript

### State Management
- **Redux Toolkit** - Simplified Redux state management
- **React-Redux** - React bindings for Redux

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component library
- **Lucide React** - Icon library
- **Class Variance Authority** - CSS class generation utility
- **Tailwind Merge** - Merge Tailwind CSS classes safely

### Data & Validation
- **Zod** - TypeScript-first schema validation
- **json-server** - Mock REST API

### Development Tools
- **ESLint 9** - Code quality and linting
- **Babel React Compiler** - Optimized React compilation
- **Vite** - Built-in with Tailwind CSS

## 📁 Project Structure

```
ecommerce-next-ts-learning/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── page.tsx                  # Home page
│   │   ├── layout.tsx                # Root layout
│   │   ├── globals.css               # Global styles
│   │   ├── StoreProvider.tsx         # Redux store provider
│   │   └── products/
│   │       └── page.tsx              # Products page
│   ├── components/                   # React components
│   │   ├── cart/                     # Cart-related components
│   │   │   ├── cart-drawer.tsx       # Cart sidebar drawer
│   │   │   ├── cart-item.tsx         # Individual cart item
│   │   │   └── cart-list-container.tsx # Cart list wrapper
│   │   ├── layout/
│   │   │   └── navbar.tsx            # Navigation bar
│   │   ├── product/                  # Product-related components
│   │   │   ├── add-to-cart-button.tsx # Add to cart button
│   │   │   └── card.tsx              # Product card
│   │   └── ui/                       # Reusable UI components
│   │       ├── alert.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── drawer.tsx
│   │       └── input.tsx
│   └── lib/                          # Utilities and configuration
│       ├── store.ts                  # Redux store configuration
│       ├── hooks.ts                  # Custom React hooks
│       ├── utils.ts                  # Utility functions
│       ├── data/
│       │   └── db.json               # Mock database
│       ├── features/                 # Redux slices
│       │   ├── api/
│       │   │   └── apiSlice.ts       # RTK Query API
│       │   ├── cart/
│       │   │   └── cartSlice.ts      # Cart state
│       │   ├── counter/
│       │   │   └── counterSlice.ts   # Counter state
│       │   └── product/
│       │       └── productSlice.ts   # Product state
│       └── types/                    # TypeScript types
│           ├── cart.ts               # Cart types
│           └── product.ts            # Product types
├── public/                           # Static assets
├── package.json                      # Dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
├── next.config.ts                    # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── postcss.config.mjs                # PostCSS configuration
├── eslint.config.mjs                 # ESLint configuration
└── components.json                   # Component configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ or **pnpm** 8+
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd ecommerce-next-ts-learning
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Start the mock API server** (in a new terminal)
   ```bash
   pnpm json-server
   ```

5. **Open the application**
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - The mock API will be available at [http://localhost:4000](http://localhost:4000)

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start Next.js development server on port 3000 |
| `pnpm build` | Build the application for production |
| `pnpm start` | Start the production server |
| `pnpm lint` | Run ESLint to check code quality |
| `pnpm json-server` | Start mock API server on port 4000 |

## 🏗️ Architecture

### Application Flow

```
User Browser
     ↓
Next.js App Router (SSR/CSR)
     ↓
React Components
     ↓
Redux Store (State Management)
     ├── cartSlice (Cart state)
     ├── productSlice (Product state)
     ├── counterSlice (Counter state)
     └── apiSlice (API calls)
     ↓
json-server Mock API (port 4000)
```

### Directory Organization

- **`components/`** - Reusable React components organized by feature
- **`lib/`** - Business logic, Redux configuration, and utilities
- **`app/`** - Next.js pages and application layout
- **`public/`** - Static assets (images, icons)

## 🔄 State Management

### Redux Slices

**1. Cart Slice** (`lib/features/cart/cartSlice.ts`)
- Manages shopping cart state
- Handles add/remove items operations
- Persists cart items in Redux store

**2. Product Slice** (`lib/features/product/productSlice.ts`)
- Manages product catalog state
- Stores fetched products
- Handles product filters and sorting

**3. Counter Slice** (`lib/features/counter/counterSlice.ts`)
- Example slice for learning Redux patterns
- Demonstrates increment/decrement operations

**4. API Slice** (`lib/features/api/apiSlice.ts`)
- Redux Toolkit Query for API calls
- Handles data fetching and caching
- Communicates with json-server mock API

### Store Configuration

The Redux store is configured in `lib/store.ts` with:
- All reducers integrated
- RTK Query middleware added
- Development tools configured

### Custom Hooks

`lib/hooks.ts` provides:
- `useAppDispatch` - Typed dispatch hook
- `useAppSelector` - Typed selector hook
- `useStoreProvider` - Store access hook

## 🧩 Component Overview

### Layout Components

**Navbar** (`components/layout/navbar.tsx`)
- Navigation bar with cart access
- Display cart item count
- Responsive mobile-friendly design

### Product Components

**Product Card** (`components/product/card.tsx`)
- Displays product information (name, price, description)
- Shows product image
- Contains add-to-cart button

**Add to Cart Button** (`components/product/add-to-cart-button.tsx`)
- Dispatches add-to-cart action
- Handles user interactions
- Visual feedback on interactions

### Cart Components

**Cart Drawer** (`components/cart/cart-drawer.tsx`)
- Sidebar drawer displaying cart contents
- Toggle open/close functionality
- Shows cart summary

**Cart List Container** (`components/cart/cart-list-container.tsx`)
- Displays list of cart items
- Responsive layout
- Shows empty state when no items

**Cart Item** (`components/cart/cart-item.tsx`)
- Individual cart item representation
- Quantity adjustment controls
- Remove item option

### UI Components

Reusable UI components built with Radix UI and Tailwind CSS:
- **Button** - Customizable button component
- **Card** - Container component for content
- **Drawer** - Sidebar drawer component
- **Alert** - Alert/notification component
- **Input** - Form input component

## 🌐 API Integration

The application uses **json-server** to mock a REST API.

### API Endpoints

**Mock Database** (`lib/data/db.json`)
- Stores product data
- Accessible at `http://localhost:4000/products`

### RTK Query Integration

**API Slice** fetches data from the mock server:
- Automatically handles loading states
- Manages error handling
- Provides built-in caching

## 🎨 Styling

### Tailwind CSS

The project uses **Tailwind CSS 4** for utility-first styling:
- Configuration in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Dark mode support enabled
- Custom animations via `tw-animate-css`

### CSS Architecture

- **Utility-first approach** - Use Tailwind utilities directly
- **Component extraction** - Extract common patterns as components
- **Type-safe classes** - Use `clsx` and `tailwind-merge` for conditional classes
- **Class Variance Authority** - Generate variant-based component classes

### Dark Mode

The application supports dark mode with Tailwind CSS:
- Toggle between light and dark themes
- Automatic theme detection based on system preferences
- Styles defined with `dark:` prefix

## 📝 Types

### Product Type

```typescript
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}
```

### Cart Type

```typescript
interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}
```

See `lib/types/` directory for complete type definitions.

## ✅ Best Practices

### TypeScript
- ✅ Strict mode enabled
- ✅ Type-safe components and hooks
- ✅ Centralized type definitions

### React
- ✅ Functional components with hooks
- ✅ Custom hooks for reusable logic
- ✅ Proper dependency arrays in useEffect
- ✅ Memoization where appropriate

### Redux
- ✅ Using Redux Toolkit for simplified state management
- ✅ Slice pattern for feature-based organization
- ✅ Typed dispatch and selectors
- ✅ RTK Query for API calls

### Performance
- ✅ React Compiler enabled for optimizations
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting with dynamic imports
- ✅ Server-side rendering for better SEO

### Code Quality
- ✅ ESLint configuration for code consistency
- ✅ TypeScript for type safety
- ✅ Organized folder structure
- ✅ Clear separation of concerns

## 📦 Build & Deploy

### Production Build

```bash
pnpm build
pnpm start
```

### Deployment Options

This Next.js application can be deployed on:
- **Vercel** - Recommended, made by Next.js creators
- **Netlify** - Git-connected hosting
- **Docker** - Containerized deployment
- **Traditional Servers** - Node.js hosting

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Radix UI Documentation](https://www.radix-ui.com)
- [TypeScript Documentation](https://www.typescriptlang.org)

## 📝 License

This project is provided as-is for learning purposes.

---

**Happy coding!** 🎉
