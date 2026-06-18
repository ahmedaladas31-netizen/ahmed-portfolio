import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // appType: 'spa' هو الافتراضي — يعيد توجيه كل المسارات إلى index.html
  // مما يجعل روابط React Router تعمل عند التحديث في dev و preview.
})
