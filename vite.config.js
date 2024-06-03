import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [vue()],
    server: {
      host: env.VITE_HOST,
      port: env.VITE_PORT
    }
  }
})
