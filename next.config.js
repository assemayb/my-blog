const withMDX = require("@next/mdx")();


module.exports = withMDX({
    pageExtensions: ["js", "mdx", "jsx"]
})