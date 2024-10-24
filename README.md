
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Modern Walk

Modern Walk is a web application built with Next.js, Redux Toolkit, and Tailwind CSS that showcases men's and women's clothing. The app fetches data from given dummy API and sorts the data from the latest to the oldest using Redux Thunk.

## Features

- **Next.js Framework**: Utilizes Next.js for server-side rendering and fast navigation between pages.
- **API Integration**: Makes API calls to fetch data for men's and women's clothing.
- **Redux Toolkit**: Manages the state of the application, including sorting the clothing items by the latest first.
- **Redux Thunk**: Handles async API calls and data fetching.
- **Tailwind CSS**: Provides utility-first CSS for fast styling.
- **Responsive Design**: The UI is designed to work seamlessly across devices of all sizes.
- **Navigation**: The app includes a home page, a men's clothing page, and a women's clothing page. Clicking on the header will always navigate back to the home page.

## Project Structure

```
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── CategoryCard
│   │   │   │   └── page.js
│   │   │   ├── Header
│   │   │   │   └── Page.js
│   │   │   ├── ItemCard
│   │   │   │   └── page.js
│   │   │   ├── Loader
│   │   │       └── page.js
│   │   ├── fonts
│   │   ├── mens-clothing
│   │   │   └── page.js
│   │   ├── pages
│   │   │   └── home
│   │   │       └── page.js
│   │   ├── store
│   │   │   ├── index.js          # Redux store configuration
│   │   │   └── productSlice.js   # Redux slice for handling product data
│   │   ├── womens-clothing
│   │       └── page.js
├── public
│   ├── favicon.ico
├── styles
│   ├── globals.css               # Global CSS styles
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.js            # Tailwind CSS configuration
```
