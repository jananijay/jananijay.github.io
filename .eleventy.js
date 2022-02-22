module.exports = function eleventyConfig(eleventyConfig) {
	eleventyConfig.addWatchTarget('./sass/')
	eleventyConfig.addPassthroughCopy('assets')
  
	return {
	  templateFormats: ['11ty.js', 'html']
	}
  }