import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false
    },
    integrations: [react(), icon()],
    output: 'hybrid',
    adapter: netlify()
});