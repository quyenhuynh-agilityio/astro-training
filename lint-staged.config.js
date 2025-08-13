export default {
  '*.{js,jsx,ts,tsx,astro}': ['prettier --write'],
  '*.astro': ['prettier --write', 'astro check --quiet'],
};
