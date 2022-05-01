exports.onCreatePage = ({ page, actions }, pluginOptions) => {
  const { deletePage } = actions

  if (pluginOptions.urls === undefined || pluginOptions.urls.length === 0) {
    return false;
  } 

  const urls = pluginOptions.urls;

  if (urls.includes(page.path)) {
    deletePage(page);
  }
}