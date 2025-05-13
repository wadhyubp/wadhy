import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Requerido para usar el adaptador de Vercel Serverless
  adapter: vercel(),
});
