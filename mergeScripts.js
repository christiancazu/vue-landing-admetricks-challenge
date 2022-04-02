const merge = require('concat')

const FindFiles = require('file-regex')

FindFiles(__dirname, /\/dist\/.*?\.js$/g, 2).then((result) => {
  console.warn(result)

  const filterJSFiles = result.filter(r => !r.file.includes('legacy'))

  console.warn(filterJSFiles)
  merge(filterJSFiles.map(jsFile => `./dist/js/${jsFile.file}`), './chart-component.js')
})
