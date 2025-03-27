import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // नेटवर्क पर एक्सपोज़ करने के लिए
    port: 5173,       // कस्टम पोर्ट (इसे बदल सकते हैं)
    strictPort: true, // अगर पोर्ट बिजी हुआ तो फेल कर देगा, कोई और पोर्ट नहीं चुनेगा
  }
})
