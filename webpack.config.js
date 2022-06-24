module.exports = (config, env) => {
  console.log(config, 'config')
  config.devServer = {
    headers: {
      "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
  return config
}
