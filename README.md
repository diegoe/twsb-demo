# twsb-demo
A simple, and documented, Drupal demo theme using TailwindCSS + Storybook

## Get started
This demo depends on `ddev`, and was developed on `ddev-1.18.1`.

```bash
# Set up ddev for this project
$ ddev start

# Install composer dependencies
$ ddev composer install

# Install and configure the site
$ ddev composer install:site

# Install theme dependencies
$ ddev composer install:theme

# Set our theme as default
$ ddev composer setup:theme

# Generate theme files
$ ddev composer build:theme

# Get a one time login link
$ ddev drush user:login
```

You should now have a working demo at http://twsb-demo.ddev.site/

## Development
To have the theme CSS regenerate on the fly:

```bash
# Enable theme debugging (optional)
$ ddev composer setup:debug

# Build theme files, and watch theme for changes
# Run this instead of build:theme
$ ddev composer dev:theme

# Setup Storybook
$ ddev composer install:storybook

# Run Storybook server
# Available at http://storybook.twsb-demo.ddev.site/
$ ddev composer dev:storybook
```

This will run `yarn` inside the `ddev` container, as necessary. Changes
to the templates, or CSS in `css/` will reflect on your Drupal site as
long as your are logged in, and have enabled debugging (see
`setup:debug`).

## Considerations
* This theme works by generating a CSS file in
  `(theme-root)/dist/twsb.css`, which is based on the user editable CSS
  available in `(theme-root)/css/twsb.css`
* By default, Tailwind CSS includes _everything_ in the produced CSS,
  but a minified version is available for production use when run with
  `NODE_ENV=production` (see `dist` command in
  `(theme-root)/package.json`)
* Also note that `dev:theme` uses `--poll` to watch for changes because
  `inotify` does not work correctly on NFS mounted files inside Docker

If in doubt, you can see the commands in `(repo-root)/composer.json` and
`(theme-root)/package.json`, their respective `script` sections
illustrate what happens behind the scenes when running the commands
mentioned in this README.
