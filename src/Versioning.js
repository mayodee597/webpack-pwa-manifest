const deprecated = {
  useWebpackPublicPath: 'https://github.com/arthurbergmz/webpack-pwa-manifest/issues/12'
}

export function checkDeprecated (options, ...properties) {
  for (let property of properties) {
    if (options[property]) {
      console.log(`"${property}" is a deprecated option. Read more at "${deprecated[property]}".`)
      delete options[property]
    }
  }
}
