import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/kanban-project-manager/",
  build:{
    target: "esnext" // or "es2019",
   }
})
