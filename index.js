try {
  const mapValues = require('just-map-values')

  console.log(mapValues({ a: 1, b: 2 }, (v) => v.toString()))

  console.log('success!')
} catch (error) {
  console.log('error!', error)
}
