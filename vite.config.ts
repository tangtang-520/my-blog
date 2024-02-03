
import { UserConfig, ConfigEnv, loadEnv, defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }: ConfigEnv):UserConfig => {
  const env = loadEnv(mode, process.cwd());
  const { VITE_APP_ENV } = env;
  
  return {
    base: VITE_APP_ENV === 'production' ? '/' : '/',
    plugins: [react()],
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
         // 设置别名
         '@': path.resolve(__dirname, 'src')
       
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json',]
    },
    server: {
      port: 80,
      host: true,
      open: false,
      proxy: {
        [env.VITE_APP_BASE_API]: {
          target: 'http://127.0.0.1:3000/', // 测试服
          changeOrigin: true,
          rewrite: p => p.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
        }
      }
    },
  }

})