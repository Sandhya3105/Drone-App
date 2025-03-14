import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './crop-disease-detection', // Set the root to the subfolder containing index.html
});
