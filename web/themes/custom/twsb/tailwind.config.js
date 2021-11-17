module.exports = {
  /* Produce minimal CSS Tailwind files
   *
   * When `NODE_ENV` is set to `production`, Tailwind will look in this
   * array for files that should be used to determine exactly which
   * classes to include in the final CSS.
   *
   * See: https://tailwindcss.com/docs/optimizing-for-production#removing-unused-css
   */
  purge: [
    './templates/**/*.twig',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
