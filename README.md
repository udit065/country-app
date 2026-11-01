# 🌍 WorldExplorer

Search, filter and explore every country in the world, with a light and dark theme.

**Live demo:** https://worldexplorer065.netlify.app/

## Features
- Browse all countries as cards with flag, population, region and capital
- **Search** by name and **filter** by region
- **Country detail page** with more information about each country
- **Light / dark mode** toggle
- Loading spinner while data is fetched

## Tech stack
React 18 · Redux Toolkit · React Router · Material UI · Tailwind CSS · Axios · [REST Countries API](https://restcountries.com)

## Project structure
```
src/
├── pages/         Home (list, search, filter) and Country (details)
├── components/    Navbar, Filter, Spinner, Footer
├── redux/         store, plus slices for all countries and the selected country
└── Context/       Theme context and MUI theme
```

## Run locally
```bash
npm install
npm start      # http://localhost:3000
npm run build  # production build
```

## Author
**Udit Yadav** · [GitHub](https://github.com/udit065) · [LinkedIn](https://www.linkedin.com/in/udit-yadav065)
