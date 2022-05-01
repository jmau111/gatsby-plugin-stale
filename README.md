# gatsby-plugin-stale

> Delete pages on build in Gatsby instead of removing elements in `./src/` manually.

## Overview

Gatsby plugin to delete pages on build.

**IMPORTANT NOTE**

Be careful on the SEO aspect. Deleting pages has some consequences, so dot forget to check the SEO. For example, you can redirect the page with a 301 (permanently moved) 410 (gone) redirection.

In addition, check if there are internal links or external backlinks.

## Install

```shell
npm i gatsby-plugin-stale
```

or

```shell
yarn add gatsby-plugin-stale
```

## Usage

Add the plugin to your `gatsby-config.js` and pass the `options`:

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-stale`,
    options: {
      urls: [
        `/page-2/`, // can be ./src/pages/page-2.js or a another URL set in markdown files
        `/page-3/`,
        `/page-4/`,
      ],
    },
  },
]
```

You can add/remove page from the options to stale/unstale URLs.