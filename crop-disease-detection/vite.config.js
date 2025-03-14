import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Drone-App/crop-disease-detection/', // This is the important part!
});
