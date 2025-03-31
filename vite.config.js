// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: './',                 // Ensures relative paths in production
  publicDir: "public",         // Includes the public folder in the build
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),      
        about: resolve(__dirname, "about.html"),    
        contact: resolve(__dirname, "contact.html"),
        products: resolve(__dirname, "products.html"),
        addToCart: resolve(__dirname, "addToCart.html")
      },
    },
    copyPublicDir: true,      // Ensures public folder is copied to dist
    assetsInlineLimit: 0       // Prevents inlining of large images
  }
});
