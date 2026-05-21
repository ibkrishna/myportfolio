// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(

//   {
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Adjust chunk size limit
  },
});

