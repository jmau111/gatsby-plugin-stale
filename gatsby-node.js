const util = require('util');

exports.onCreatePage = ({ page, actions }, pluginOptions) => {
  const { deletePage } = actions

  if (
    ! util.isArray(pluginOptions.urls) || 
    pluginOptions.urls === undefined || 
    pluginOptions.urls.length === 0
  ) {
    const error = 'You are misusing the plugin Gatsby Stale, please provide URLs to remove in the plugin options. See https://github.com/jmau111/gatsby-plugin-stale#usage.';
    console.error(error);
    throw new Error(error);
  } 

  const urls = pluginOptions.urls;

  if (urls.includes(page.path)) {
    deletePage(page);
  }
}