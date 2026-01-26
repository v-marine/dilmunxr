---
description: Build website for GitHub Pages deployment
---

// turbo-all

## Build for GitHub Pages

1. Run the build command from the project root:
```
npm run build
```

This will compile all source files from `src/` and output the static website files to the root directory. The built files include:
- `index.html` - Main entry point
- `assets/` - Compiled JavaScript and images

2. After the build completes, commit and push to deploy:
```
git add .
git commit -m "Build: Update static site"
git push
```

## Development

To run the development server locally:
```
npm run dev
```

This serves the site from `src/` with hot reload enabled.

## Notes

- Source files are in `src/` directory
- Built files go to the root directory for GitHub Pages
- The build uses relative paths (`./`) for all assets
