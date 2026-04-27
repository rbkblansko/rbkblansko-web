import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://github.io', // Placeholder, typically https://username.github.io
  base: '/rbkblansko-web',
  integrations: [tailwind()],
});
