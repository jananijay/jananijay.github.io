module.exports = function eleventyConfig(eleventyConfig) {
	eleventyConfig.addWatchTarget('./sass/')
	eleventyConfig.addPassthroughCopy('assets')
	eleventyConfig.addPassthroughCopy('CNAME')
  
	return {
	  templateFormats: ['11ty.js', 'html']
	}
}