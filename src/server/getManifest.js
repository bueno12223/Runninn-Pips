import fs from 'fs'

const getManifest = () => {
  try {
    // eslint-disable-next-line node/no-path-concat
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`))
  } catch (error) {
    console.log(error)
  }
}

export default getManifest
