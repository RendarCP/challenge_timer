import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  // https://github.com/vitejs/vite/issues/1973#issuecomment-787571499
  define: {
    'process.env': {},
  },
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
          [
            '@babel/plugin-transform-react-jsx',
            { pragma: '__cssprop' },
            'twin.macro',
          ],
        ],
      },
    }),
    viteTsconfigPaths(),
    svgrPlugin(),
    // tailwindcss,
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'], // 확장자 추가
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3010,
  },
  build: { outDir: './build', chunkSizeWarningLimit: 1600 },
});
