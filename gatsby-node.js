exports.onCreatePage = ({ page, actions }, pluginOptions) => {
  const { deletePage } = actions

  if (pluginOptions.urls === undefined || pluginOptions.urls.length === 0) {
    const error = 'You are misusing the plugin Gatsby Stale, please provide URLs to remove in the plugin options.';
    console.error(error);
    throw new Error(error);
  } 

  const urls = pluginOptions.urls;

  if (urls.includes(page.path)) {
    deletePage(page);
  }
}