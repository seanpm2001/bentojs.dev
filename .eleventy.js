const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.setDataDeepMerge(true);


  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addWatchTarget('./dist/assets/css');

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'site',
      output: 'dist',
    },
  };
};