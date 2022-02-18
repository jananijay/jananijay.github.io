module.exports = function eleventyConfig(eleventyConfig) {
	eleventyConfig.addWatchTarget('./sass/')
  
	return {
	  templateFormats: ['md', '11ty.js', 'html']
	}
  }